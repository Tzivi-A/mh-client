import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const root = path.resolve(__dirname, '../app/validators');
const folders = ['common', 'pages'];
const indexPath = path.join(root, 'index.ts');

const exportLines: string[] = [];

folders.forEach(folder => {
  const dirPath = path.join(root, folder);
  const files = fs.readdirSync(dirPath).filter(f => /\.(ts|tsx)$/.test(f));

  files.forEach(file => {
    const nameWithoutExt = file.replace(/\.(ts|tsx)$/, '');
    exportLines.push(`export * from './${folder}/${nameWithoutExt}';`);
  });
});

fs.writeFileSync(indexPath, exportLines.join('\n') + '\n', 'utf8');
console.log('✅ app/validators/index.ts generated.');
