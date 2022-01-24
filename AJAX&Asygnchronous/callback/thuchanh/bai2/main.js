function greet(){
    console.log("hello Tuan Anh day");
}

function sayName(name) {
    console.log("Chuc mot ngay tot lanh " + name);
}

setTimeout(sayName("Tuan Anh"),2000 );

greet();