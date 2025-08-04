import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      Components: path.resolve(__dirname, './src/Components'),
      src: path.resolve(__dirname, './src'),
      // 필요한 다른 경로들도 추가
    },
  },
});
