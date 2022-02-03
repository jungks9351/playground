# Babel 과 Webpack을 이용한 ES6 환경 구축

```bash
mkdir [프로젝트명]

npm init -y
```

# Babel

ES6+/ES.NEXT로 구현된 최신 사양의 소스코드를 IE 같은 구형 브라우저에서도 종작하는 ES5 사양의 소스코드로 변환하는데 주로 사용되는 무료 오픈 소스 자바스크립트 트랜스컴파일러이다.

## Babel 설치

babel-core, babel-cli 설치

개발자 환경에서만 사용하기 때문에  --save-dev를 붙여준다. -D만 붙여줘도 된다.

```bash
npm i -D @babel/core @babel/cli
```

버전 지정 설치 @ 뒤에 설치하고 싶은 버전을 지정하기만 하면 된다.

```bash
npm i -D @babel/core@[버전] @babel/cli@[버전]
```



## Babel 프리셋 설치와 .babelrc 설정 파일 작성

```bash
npm i -D @babel/preset-env
```



Babel을 사용하려면 @babel/preset-env를 설치해야한다.

@babel/preset-env 는 함께 사용되어야하는 Babel 플러그인을 모아둔 것으로 Babel 프리셋이라고 부른다.



- @babel/preset-env : 필요한 플러그인들을 프로젝트 지원 환경에 맞춰 동적으로 결정 해준다. ES6+ -> ES5로 트랜스파일링
- @babel/preset-flow : flow 를 사용할 때 권장
- @babel/preset-react : 리액트의 JSX 파일을 트랜스파일링
- @babel/preset-typescript : typescript를 사용할 때 권장



### .babelrc 설정

```json
{
  "presets": ["@babel/preset-env"]
}
```





## 트랜스 파일링

Babel을 사용하여 ES5 이하의 코드로 트랜스파일링 하기 위해 Babel CLI 명령어를 사용할 수 있으나

npm script를 사용하여 트랜스 파일링하는 방법을 썼다.



package.json 파일에 scripts를 추가한다.



```json
{
  "name": "webpack-practice",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "build": "babel src/js -w -d dist/js" // 추가
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@babel/cli": "^7.16.8",
    "@babel/core": "^7.16.12",
    "@babel/preset-env": "^7.16.11"
  }
}
```



위 npm script는 src/js 폴더(타깃 폴더)에 있는 모든 ES6+ 파일들을 트랜스파일링한 후, 그 결과물을 dist/js 폴더에 저장한다. 



>babel src/js -w -d dist/js"
>
>-w 
>
>타깃 폴더에 있는 모든 파일들의 변경을 감지하여 자동으로 트랜스파일한다.(--watch 옵션의 축약형)
>
>-d
>
>트랜스파일링된 결과물이 저장될 폴더를 지정한다.(--out--dir 옵션의 축양형)



# Webpack

[Webpack](https://webpack.js.org/)은 의존 관계에 있는 모듈들을 하나의 자바스크립트 파일로 번들링하는 모듈 번들러이다.

Webpack을 사용하면 의존 모듈이 하나의 파일로 번들링되므로 별도의 모듈 로더가 필요없다. 그리고 다수의 자바스크립트 파일을 하나의 파일로 번들링하므로 html 파일에서 script 태그로 다수의 자바스크립트 파일을 로드해야 하는 번거로움도 사라진다.

![webpack](https://poiemaweb.com/img/webpack.png)

​																											[Webpack](https://webpack.js.org/)

## Webpack 설치

Webpack V4는 webpack-cli를 요구한다

```bash
npm i -D webpack webpack-cli
```



## loader 설치

Loader 는 Webpack이 모듈을 번들링할 때 ES6, HTML, CSS, Image등 을 트랜스파일링 해준다.

#### basic

- babel-loader
- css-loader
- file-loader
- style-loader
- Url-loader

```bash
npm i -D babel-loader
npm i -D css-loader
npm i -D file-loader
```



#### Sass 사용

```bash
npm i node-sass sass-loader
```



## plugin 설치

html-webpack-plugin : 웹팩으로 빌드한 결과물로 HTML 파일을 생성

clean-webpack-plugin : 번들링 할 때 마다 이전 번들링 결과를 제거

```bash
npm i -D html-webpack-plugin // 웹팩으로 빌드한 결과물로 HTML 파일을 생성
npm i -D clean-webpack-plugin // 번들링 할때마다 이전 번들링 결과를 제거
```



## webpack.config.js 설정

```js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  // 모드 설정(development or production) => package.json의 디버깅 명령어에 설정해주는것이 덜 번거로움
  // mode: 'development',

  // entry를 기준으로 연관된 모든 파일들을 번들링
  entry: './src/index.js',

  // 모듈이 처리되는 방식을 설정
  resolve: {
    extensions: ['.js', '.jsx'], // 번들링 될 파일 확장자 등록
  },

  // 적용할 로더와 옵션 설정
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // 확장자명
        exclude: '/node_modules/', // 로더를 제외할 대상
        loader: 'babel-loader',
        options: { presets: ['@babel/preset-env'] }, // 기본적으로 ES5로 트랜스파일링
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'], // 로더가 1개 이상이라면 use에 배열로 설정
      },
      {
        test: /\.jfif$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
        },
      },
    ],
  },

  // 번들링 결과물 설정
  output: {
    path: path.resolve(__dirname, 'dist'), // 번들링 파일이 만들어지는 절대경로
    filename: 'bundle.js', // 번들링 파일 이름
  },

  plugins: [
    // 번들링 할때마다 이전 번들링 결과를 제거 해주는 플러그인
    new CleanWebpackPlugin(),
    // 웹팩으로 빌드한 결과물로 HTML 파일을 생성해주는 플러그인
    new HtmlWebpackPlugin({
      template: `./public/index.html`, // 번들링 파일을 주입하고 번들링 폴더로 복사할 대상 HTML 파일 설정
    }),
  ],

  // webpack-dev-server 설정
  devServer: {
    port: 3000, // 서버 포트 지정
    // overlay: true, // 에러 발생시 브라우저에 보여줄 것인지 여부
    hot: true, // 모듈의 변화된 부분만을 감지하고 자동으로 리로딩하는 HMR(Hot Module Replacement)기능 사용 여부
    // 미들웨어 옵션 설정
    devMiddleware: {
      writeToDisk: true, // 메모리 뿐 아니라 직접 파일로 만들 것인지 여부
    },
  },
};



```



#### webpack-dev-server

```js
module.exports = {
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    publicPath: "/",
    host: "dev.domain.com",
    overlay: true,
    port: 8081,
    stats: "errors-only",
    historyApiFallback: true,
  },
}
```



contentBase: 정적파일을 제공할 경로. 기본값은 웹팩 아웃풋이다.

publicPath: 브라우져를 통해 접근하는 경로. 기본값은 '/' 이다.

host: 개발환경에서 도메인을 맞추어야 하는 상황에서 사용한다. 예를들어 쿠기 기반의 인증은 인증 서버와 동일한 도메인으로 개발환경을 맞추어야 한다. 운영체제의 호스트 파일에 해당 도메인과 127.0.0.1 연결한 추가한 뒤 host 속성에 도메인을 설정해서 사용한다.

overlay: 빌드시 에러나 경고를 브라우져 화면에 표시한다.

port: 개발 서버 포트 번호를 설정한다. 기본값은 8080.

stats: 메시지 수준을 정할수 있다. 'none', 'errors-only', 'minimal', 'normal', 'verbose' 로 메세지 수준을 조절한다.

historyApiFallBack: 히스토리 API를 사용하는 SPA 개발시 설정한다. 404가 발생하면 index.html로 리다이렉트한다.






