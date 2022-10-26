import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'node_modules/@mui/material/esm/Button/index.js',
  output: {
    file: 'mui-button.js',
    name: 'Button',
    format: 'es',
    exports: 'named',
  },
  plugins: [
    resolve(),
    commonjs({
      include: /node_modules/,
      requireReturnsDefault: 'auto'
  ],
};
