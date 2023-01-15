const myPromise = new Promise((resolve, reject) => {
  console.log("inside my promise");
  setTimeout(() => {
    resolve("Return from my promise");
    // reject("failed");
  }, 2000);
});

myPromise.then(
  (result) => console.log(result),
  (error) => console.log(error)
);
