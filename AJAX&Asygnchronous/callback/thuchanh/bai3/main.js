function greet(name, myFunction) {
    console.log("hello word");

    // goi callback
    myFunction(name);
}

// create callMe 

function callMe(name) {
    console.log(`Toi dang toi cho ban ${name}`);
}

setTimeout(greet, 2000, "Tuan Anh", callMe);