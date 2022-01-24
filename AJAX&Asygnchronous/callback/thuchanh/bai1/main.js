function greet(name , callback) 
{

    console.log(`hi ${name}`);

    callback();
}

function callMe() {
    console.log('I am a callback function');
}

// goi ham callback

greet("Tuan Anh", callMe);