let promise = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve("Promise Resolve");
    }, 4000);
});


// async function 

async function asyncFunc() {
    

    // await until the promise resolved

    let result =  await promise;

    console.log(result);
    console.log("hello");
}

// call async function
asyncFunc();