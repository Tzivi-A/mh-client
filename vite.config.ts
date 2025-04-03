import { reactRouter } from '@react-router/dev/vite';
import { defineConfig, loadEnv } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'path';

export default defineConfig(({ mode }) => {
  const envDir = path.resolve(__dirname, 'environments');
  const env = loadEnv(mode, envDir, '');

  return {
    plugins: [reactRouter(), tsconfigPaths()],
    envDir,
    server: {
      port: 5173,
      proxy: {
        '/api': {
          target: env.VITE_BASE_URL,
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, '')
        }
      }
    }
  };
});
