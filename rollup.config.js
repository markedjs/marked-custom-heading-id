import copy from 'rollup-plugin-copy';

export default [
  {
    input: 'src/index.js',
    output: {
      name: 'markedCustomHeadingId',
      file: 'lib/index.umd.js',
      format: 'umd',
    },
  },
  {
    input: 'src/index.js',
    output: {
      file: 'lib/index.cjs',
      format: 'cjs',
    },
    plugins: [
      copy({
        targets: [
          {
            src: 'src/index.d.ts',
            dest: 'lib',
            rename: 'index.d.cts',
            transform(contents) {
              return contents.toString().replace(/^export default/m, 'export =');
            },
          },
        ],
      }),
    ],
  },
];
