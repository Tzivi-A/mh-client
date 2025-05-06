import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const commonPath = path.resolve(__dirname, '../app/validators/common');
const indexPath = path.join(commonPath, 'index.ts');

const exportLines: string[] = [];

const files = fs.readdirSync(commonPath).filter(f => /\.(ts|tsx)$/.test(f) && f !== 'index.ts');

files.forEach(file => {
  const nameWithoutExt = file.replace(/\.(ts|tsx)$/, '');
  exportLines.push(`export * from './${nameWithoutExt}';`);
});

fs.writeFileSync(indexPath, exportLines.join('\n') + '\n', 'utf8');
console.log('✅ app/validators/common/index.ts generated.');
