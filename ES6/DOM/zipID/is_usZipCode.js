is_usZipCode = (string) => {
    regexp = /^[0-9]{5}(?:-[0-9]{4})?$/;

    if(regexp.test(string)) {
        return true;
    }
    else{
        return false;
    }
}