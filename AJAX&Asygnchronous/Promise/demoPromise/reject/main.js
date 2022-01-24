// promise 
let countValue = new Promise( function(resolve, reject) {
    reject("Promise rejected");
})


// executor when promise is resolved successfully
countValue.then(
    function successValue(result) {
        console.log(result);
    }
)

// executor when promise is rejected error

.catch(
     function errorValue(result) {
         console.log(result);
     }
 );