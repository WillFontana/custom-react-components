import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import replace from '@rollup/plugin-replace';

const pkgJSON = require('./package.json');

const env = process.env.NODE_ENV;
export default [
  {
    input: 'src/lib.js',
    output: [
      { file: pkgJSON.main, format: 'cjs', sourcemap: true },
      { file: pkgJSON.module, format: 'esm', sourcemap: true },
    ],
    plugins: [
      replace({
        'process.env.NODE_ENV': JSON.stringify(env),
        preventAssignment: true,
      }),
      resolve({ jsnext: true }),
      babel({
        exclude: 'node_modules/**',
        presets: ['@babel/env', '@babel/preset-react'],
      }),
      commonjs(),
    ],
    external: ['react', 'prop-types'],
    globals: {
      react: 'React',
    },
  },
];
