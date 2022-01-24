
// goi promise

let countPromise = new Promise(function (resolve, reject) {
    resolve("Promise Resolve");
});

// executor when promise is resolve successfully

countPromise 
    .then(function successValue(result) {
        console.log(result);
    })
    .then(function successValue1 () {
        console.log('you can multiple function this way');
    });

    // console.log(countPromise);
