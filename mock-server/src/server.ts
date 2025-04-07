/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
import * as dotenv from 'dotenv';
dotenv.config({ path: './.env.mock' });

import express, { type Request, type Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { initializeTempData, loadMockFilesFromTemp, loadMockData, tempDataFolder } from './utils';
import fs from 'fs';

const app = express();
const PORT = process.env.VITE_API_URL?.split(':').pop() || 4200;
// Enable CORS for all routes
app.use(cors());
app.use(bodyParser.json());

// Initialize fresh temporary data files on each server start
initializeTempData();

// Load all mock files from the freshly created tempData folder
const mockFiles = loadMockFilesFromTemp();

const saveMockData = (filePath: string, updatedData: any): void => {
  fs.writeFileSync(filePath, JSON.stringify(updatedData, null, 2), 'utf8');
};

// Register endpoints dynamically from loaded files
mockFiles.forEach(filePath => {
  const { meta, data } = loadMockData(filePath);

  if (!meta || !meta.endpoints) {
    console.warn(`No metadata found in ${filePath}`);
    return;
  }

  const relativePath = filePath.replace(/\\/g, '/').split(`/${tempDataFolder}/`)[1];
  const pathParts = relativePath.split('/');
  const folderName = pathParts.length > 1 ? pathParts[0] : '';
  const serviceName = meta.service;
  const servicePrefix = folderName ? `/${folderName}/${serviceName}` : `/${serviceName}`;

  meta.endpoints.forEach((endpoint: any) => {
    const { method, path: endpointPath, params } = endpoint;
    const fullPath = `${servicePrefix}${endpointPath}`;

    app[method.toLowerCase()](fullPath, (req: Request, res: Response) => {
      console.log(`Handling ${method} request for ${fullPath}`);

      let filteredData = data;

      if (method === 'GET') {
        const queryParams = req.params;

        if (params.length > 0) {
          filteredData = data.filter((item: any) => {
            return params.every((param: string) => {
              return item[param]?.toString() === queryParams[param];
            });
          });
        }

        if (filteredData.length > 0) {
          res.json(filteredData);
        } else {
          res.status(404).json({ message: `No data found for ${fullPath}` });
        }
      }

      if (method === 'POST') {
        const newItem = req.body;
        newItem.value = data.length ? data[data.length - 1].value + 1 : 1;
        data.push(newItem);
        saveMockData(filePath, { meta, data });
        res.status(201).json(newItem);
      }

      if (method === 'DELETE') {
        const { id } = req.params;
        const itemIndex = data.findIndex((item: any) => item.value?.toString() === id);

        if (itemIndex !== -1) {
          data.splice(itemIndex, 1);
          saveMockData(filePath, { meta, data });
          res.status(200).json({ message: `Item with ID ${id} deleted successfully.` });
        } else {
          res.status(404).json({ message: `Item with ID ${id} not found.` });
        }
      }

      if (method === 'PUT') {
        const { id } = req.params;
        const updatedItem = req.body;
        const itemIndex = data.findIndex((item: any) => item.value?.toString() === id);

        if (itemIndex !== -1) {
          data[itemIndex] = { ...data[itemIndex], ...updatedItem };
          saveMockData(filePath, { meta, data });
          res
            .status(200)
            .json({ message: `Item with ID ${id} updated successfully.`, updatedItem });
        } else {
          res.status(404).json({ message: `Item with ID ${id} not found.` });
        }
      }
    });

    console.log(`Endpoint created: [${method}] ${fullPath}`);
  });
});

app.listen(Number(PORT), () => {
  console.log(`Dynamic mock server running at http://localhost:${PORT}`);
});
