import typescript from '@rollup/plugin-typescript'

export default {
  input: 'electron/main.ts',
  output: {
    file: "public/build/electron.js",
    format: 'cjs',
  },
  external: ["electron"],
  plugins: [typescript()]
};
