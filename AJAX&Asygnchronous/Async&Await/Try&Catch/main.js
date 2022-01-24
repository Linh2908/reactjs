let promise = new Promise(function(resolve, reject) {

    // call settimeOut
    setTimeout(() => {
        resolve("Promise Resolved");
    }, 4000);
})


// async function 

async function asyncFunc() {
    try {
        let result =  await promise;

        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

asyncFunc();