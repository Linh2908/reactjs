isFirstLetterUppercase = (string) => {
    regexp = /^[A-Z]/;

    if(regexp.test(string)) {
        console.log("String's first character is uppercase");
    }else {
        console.log("String's first character isn't uppercase");
    }
}