function asyncFunction(callback) {
    console.log("start");
    setTimeout(() => {
        callback();
    },2000);

    console.log("wating");
}

function printEnd() {
    console.log("End");
}

asyncFunction(printEnd)