// Promise

const addFunc = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
      // reject(new Error()); // reject error promise 객체 반환
    }, 3000);
  });
};

addFunc(2, 4)
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

// async await

const addFunc2 = async (a, b) => {
  const res = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
    }, 2000);
  });
  console.log(res);
};

addFunc2(2, 3);

const asyncFunc = async () => {
  const res = await addFunc(1, 3);
  const res2 = res + 5;
  console.log(res2);
};

asyncFunc();

const func = async () => {
  const res = await axios.get();
};

// Promise.all([])

(async function () {
  async function promise(time) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(console.log('hi'));
      }, time);
    });
  }

  console.time('시간');
  // await promise(1000);
  // await promise(2000);
  // await promise(3000);
  await Promise.all([promise(1000), promise(2000), promise(3000)]);
  console.timeEnd('시간');
})();
