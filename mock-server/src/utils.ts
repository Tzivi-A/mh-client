/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable no-console */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const mockDataPath = path.join(__dirname, '../mock-data');
const tempDataPath = path.join(__dirname, '../temp-data');

// Load mock files from the temporary data folder
export const loadMockFilesFromTemp = () => {
  const files = fs.readdirSync(tempDataPath);
  return files.map(file => path.join(tempDataPath, file));
};

// Dynamically load mock data from a specific file
export const loadMockData = (filePath: string) => {
  const data = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(data);
};

// Initialize temporary data folder by copying from the mock-data folder
export const initializeTempData = () => {
  try {
    // If the temp folder exists, delete it
    if (fs.existsSync(tempDataPath)) {
      fs.rmSync(tempDataPath, { recursive: true, force: true });
      console.log(`Cleared existing temp-data folder.`);
    }

    // Recreate the temp folder
    fs.mkdirSync(tempDataPath);
    console.log(`Created new temp-data folder.`);

    // Copy all mock files to the temp folder
    const files = fs.readdirSync(mockDataPath);
    files.forEach(file => {
      const srcPath = path.join(mockDataPath, file);
      const destPath = path.join(tempDataPath, file);
      fs.copyFileSync(srcPath, destPath);
      console.log(`Copied ${file} to temp-data.`);
    });
  } catch (error) {
    console.error(`Error initializing temp data: ${error}`);
  }
};
