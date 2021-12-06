const fs = require('fs');
const path = require('path');
const sass = require('node-sass');

const types = ['atoms', 'molecules', 'organisms'];

const getComponents = types.reduce((acc, type) => {
  /**
   * 1. src 하위에 있는 atoms, molecules, organisms 폴더들의 하위에 있는 컴포넌트 스타일을 가져온다.
   * 2. 가져온 파일들의 현재 경로: origin, 가져온 파일들의 컴파일경로: destination을 담는 배열을 리턴한다.
   */
  const fileList = fs.readdirSync(path.resolve(`src/${type}`)).map((file) => ({
    origin: `src/${type}/${file}`,
    destination: `lib/${file.slice(0, -4) + 'css'}`,
  }));

  return [...acc, ...fileList];
}, []);

const compileStylesheet = (origin, destination) => {
  const copileResult = sass.renderSync({
    data: fs.readFileSync(path.resolve(origin)).toString(), // 어디서 data를 읽어올지 결정하는 부분 src/global.scss 파일을 읽어와서 문자열로 파싱할꺼야! ref: https://designmeme.github.io/ko/blog/sass-css-output-style/
    outputStyle: 'expanded', // Determines the output format of the final CSS style.
    outFile: 'global.css', // compiled file to css
    includePaths: [path.resolve('src')], // src에 있는 모든 파일을 포함
  });

  // console.log('copileResult', copileResult.css.toString());

  fs.writeFileSync(path.resolve(destination), copileResult.css.toString());
};

try {
  // directory가 없으면 만들어준다.
  fs.mkdirSync(path.resolve('lib'));
} catch (e) {}

compileStylesheet('src/global.scss', 'lib/global.css');

getComponents.forEach(({ origin, destination }) => {
  compileStylesheet(origin, destination);
});
