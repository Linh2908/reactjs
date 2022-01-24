// Goi ham async 
// tu khoa async the hien đây là hàm không đồng bộ

async function f() {
    console.log("Async Function");
    return Promise.resolve(1);
}

f().then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
});