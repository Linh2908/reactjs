isAccount = (string) => {
    regexp = /^[_a-z0-9]{8,}$/;

    if(regexp.test(string)) {
        return true;
    }

    return false;
}