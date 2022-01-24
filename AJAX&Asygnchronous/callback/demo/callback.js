function createPassword(callBack) {
    return callBack("codegym");
}

let passWord = createPassword(function (secretKey) {
    return secretKey;
});

alert(passWord);