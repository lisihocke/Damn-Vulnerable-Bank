const SECRET = 'amazing';
const SECRET_LENGTH = SECRET.length;

const operate = (input) => {
    let result = "";
    for (let i in input) {
        result += String.fromCharCode(input.charCodeAt(i)^SECRET.charCodeAt(i%SECRET_LENGTH));
    }
    return result;
}

const decrypt = (encodedInput) => {
    let input = Buffer.from(encodedInput, 'base64').toString();
    let dec = operate(input);
    console.log(dec);
    return dec;
}

const encrypt = (input) => {
    let enc = operate(input.toString());
    let b64 = Buffer.from(enc).toString('base64');
    console.log(b64);
    return b64;
}

decrypt('Gk8SDggaEhJPWwFLDQgFCENAW15XTU8MHxodBgYIQ0BLPRICDgQJGkwaTU8FGx0PRVsWQxsKDQISHjUVAgsJQ1dDHxAkDwMqAhMmBy0oOBszWCAOKB4oFDtbBCIkVzMCHj83LitDRwseK1wCSD8XBQwrFSA6J1EoAzMWCl02CCEiMBkNVlgFOz1YHgUIJFcgBCgUAl80CSADCwkJIjNfIzMCFyw+PBkqCyxUNAdeSVIhIDY4Pg8AWhQ8UCQ+EAw+DlEEIBAnOR8uIV84HSAyHQEEDScCIFsGKzhPHAc=')
encrypt('{"username":"test","password":"test"}')

/*
encrypt('{"username":"test","password":"test123"}')
encrypt('{"username":"user","password":"password"}')
encrypt('{"username":"user1","password":"password1"}')
encrypt('{"username":"rewanth","password":"tammana"}')
encrypt('{"username":"admin","password":"admin"}')*/
