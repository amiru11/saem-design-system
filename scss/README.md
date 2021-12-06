# saem-design-system

Create Personal Design System

[Udemy보면서 배워보기](https://www.udemy.com/course/react-for-senior-engineers)

1. scss: 기본적인 sass 파일들을 구성한다.;
2. \_global.scss: 디자인 시스템에 대한 전역 스타일시트;
3. foundation 🗂: 디자인 시스템에 대한 기본적인 스타일 가이드 작성;
4. base 🗂: 디자인 시스템 사용을 위한 기본적인 설정 폴더 (css reset, root variables);
5. CSS Reset: [Normalize CSS](https://necolas.github.io/normalize.css/);
6. [StyleLint](https://stylelint.io/) & Prettier: 두가지를 사용하여 좀 더 안정적이고 통일된 style 개발을 가능하게한다.
7. styleLint의 룰은 [sass-guidelines](https://sass-guidelin.es/ko)를 따른다.

---

## ADD Packages

- [postcss](https://github.com/postcss/postcss): stylelint를 위해서 변환이 필요하기 때문에 설치
- [prettier](https://github.com/prettier/prettier)
- [stylelint](https://github.com/stylelint/stylelint)
- [stylelint-config-prettier](https://github.com/prettier/stylelint-config-prettier): prettier와 stylelint plugin 간의 충돌을 방지하기 위해서 사용
- [stylelint-config-sass-guidelines](https://github.com/bjankord/stylelint-config-sass-guidelines)
- [stylelint-prettier](https://github.com/prettier/stylelint-prettier)
