/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable no-console */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const tempDataFolder = 'temp-data';

const mockDataPath = path.join(__dirname, '../mock-data');
const tempDataPath = path.join(__dirname, `../${tempDataFolder}`);

// Recursively copy files and directories from source to destination
const copyRecursiveSync = (src: string, dest: string) => {
  try {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }

    if (fs.lstatSync(src).isDirectory()) {
      const entries = fs.readdirSync(src);
      entries.forEach(entry => {
        const srcPath = path.join(src, entry);
        const destPath = path.join(dest, entry);

        if (fs.lstatSync(srcPath).isDirectory()) {
          copyRecursiveSync(srcPath, destPath); // Recursively copy subdirectories
        } else {
          fs.copyFileSync(srcPath, destPath); // Copy files
          console.log(`Copied file: ${srcPath} -> ${destPath}`);
        }
      });
    } else {
      fs.copyFileSync(src, dest);
      console.log(`Copied single file: ${src} -> ${dest}`);
    }
  } catch (error) {
    console.error(`Error copying files: ${error}`);
  }
};

// Load mock files from the temporary data folder
export const loadMockFilesFromTemp = () => {
  try {
    const collectFiles = (dir: string): string[] => {
      let results: string[] = [];
      const list = fs.readdirSync(dir);
      list.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat && stat.isDirectory()) {
          results = results.concat(collectFiles(filePath)); // Recursively collect files
        } else {
          results.push(filePath);
        }
      });
      return results;
    };

    return collectFiles(tempDataPath);
  } catch (error) {
    console.error(`Error loading mock files from temp: ${error}`);
    return [];
  }
};

// Dynamically load mock data from a specific file
export const loadMockData = (filePath: string) => {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error(`Error loading mock data from ${filePath}: ${error}`);
    return { meta: null, data: [] };
  }
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

    // Recursively copy all files and directories from mock-data to temp-data
    copyRecursiveSync(mockDataPath, tempDataPath);
    console.log(`Copied all mock data to temp-data.`);
  } catch (error) {
    console.error(`Error initializing temp data: ${error}`);
  }
};
