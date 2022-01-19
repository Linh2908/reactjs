isEmail = (string) => {
    regexp = /^[A-Za-z0-9]+[A-Za-z0-9]*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)$/;

    if(!regexp.test(string)) {
        return false;
    }
    return true;
}