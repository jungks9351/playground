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
