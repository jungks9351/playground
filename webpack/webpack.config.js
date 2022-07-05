module.exports = {
  // mode 설정
  mode: 'development',
  // 진입 포인트 설정
  entry: './src/index.js',
  output: {
    // output으로 번들된 파일이름 지정
    filename: 'bundel.[hash].js',
  },
};
