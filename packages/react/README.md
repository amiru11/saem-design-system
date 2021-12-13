# saem-design-system

Create Personal Design System

[Udemy보면서 배워보기](https://www.udemy.com/course/react-for-senior-engineers)

1. react: atomic 패턴을 따르는 react component 패키지;
2. src 🗂: 실제 react components를 담는 폴더;
3. atoms 🗂:
4. molecules 🗂:
5. foundation 🗂:
6. tsc --init: typescript base.
7. rollup을 통해서 라이브러리 패키지 생성 (rollup.config.js 설정파일)

---

## Why rollup.js instead of webpack?

- rollup을 쓰는 이유는 webpack은 ES Module 형태로 번들을 할 수 없는 것이 가장 큰 이유. webpack을 사용 할 때에는 일반적으로 commonjs 형태로 번들링을 하게 되는데, commonjs로 번들링한 라이브러리를 나중에 다른 프로젝트에서 사용하게 되면 Tree-shaking이 지원되지 않는다.

---

## ADD Packages

- [rollup.js](https://github.com/rollup/rollup): library bundling을 위해서 사용하는 bundler
- [rollup-plugin-typescript2](https://github.com/ezolenko/rollup-plugin-typescript2): Rollup plugin for typescript with compiler errors. 기존 rollup typescript plugin 에러로 인해 사용

---

## Script

- build: "rollup -c" // rollup.config.js 파일을 기본으로 번들링함
