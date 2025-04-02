import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const mockDataPath = path.join(__dirname, '../mock-data');

export const loadMockFiles = () => {
  const files = fs.readdirSync(mockDataPath);
  return files.map(file => path.join(mockDataPath, file));
};

export const loadMockData = (filePath: string) => {
  const data = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(data);
};

const tempDataPath = path.join(__dirname, '../tempData');

// Copy mock data to a temporary folder
export const initializeTempData = () => {
  if (!fs.existsSync(tempDataPath)) {
    fs.mkdirSync(tempDataPath);
  }
  const files = fs.readdirSync(mockDataPath);
  files.forEach(file => {
    const srcPath = path.join(mockDataPath, file);
    const destPath = path.join(tempDataPath, file);
    if (!fs.existsSync(destPath)) {
      fs.copyFileSync(srcPath, destPath);
    }
  });
};

export const loadMockFilesFromTemp = () => {
  const files = fs.readdirSync(tempDataPath);
  return files.map(file => path.join(tempDataPath, file));
};
