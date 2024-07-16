function checkLetter(string: string): boolean {
    return /[a-zA-Z]/.test(string);
}
function checkNumber(string: string): boolean {
    return /\d/.test(string);
}
function checkBoth(string: string): boolean {
    const checkLetter = /[a-zA-Z]/.test(string);
    const checkNumber = /\d/.test(string);
    return checkLetter && checkNumber;
}
export{checkBoth,checkLetter,checkNumber}