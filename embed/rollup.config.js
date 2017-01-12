import babel from 'rollup-plugin-babel';
import inject from 'rollup-plugin-inject';
import commonjs from 'rollup-plugin-commonjs';

export default {
  entry: 'src/main.js',
  format: 'iife',
  // external: [
  //    'jquery',
  //    'node_modules/jquery/'
  //  ],
  plugins: [
    babel({
      exclude: 'node_modules/**',
    }),
    commonjs({
        include: 'node_modules/**',
        sourceMap: true,
        namedExports: {jquery: ['jQuery']}
      })
  ]
  // ,
  // globals: {
  //         jquery: 'jQuery'
  //       }
};