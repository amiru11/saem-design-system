import Ts from 'rollup-plugin-typescript2';

export default {
  input: ['src/index.ts', 'src/atoms/Button/index.ts', 'src/atoms/Color/index.ts', 'src/atoms/Margin/index.ts'],
  output: {
    dir: 'lib',
    format: 'esm', // amd, cjs, es, iife, umd, system
    sourcemap: true,
    preserveModules: true, // Preserve module structure
  },
  plugins: [Ts()], // 해당 플러그인은 tsconfig.json을 기본적으로 상속받음.
  external: ['react', '@saem-ds/foundation'], // 외부에서 해당 패키지를 가져온다?
};
