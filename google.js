var Crypto = require('crypto')
var secret='fd85b494-aaa';
var iv='smslt';
var encryptmethod="AES-256-CBC";
var key=Crypto.createHash('sha512').update(secret,'utf-8').digest('hex').substr(0,32);
var iv1=Crypto.createHash('sha512').update(iv,'utf-8').digest('hex').substr(0,16);
var emessage=encrypt_string("hema1234455e464656464",encryptmethod,key,iv1)
console.log(emessage);

 function encrypt_string(palin_text,encryptmethod,secret,iv1)
 {
    var encry=Crypto.createCipheriv(encryptmethod,secret,iv1)
    var aes_encry=encry.update(palin_text,'utf-8','base64')+encry.final('base64');
    return Buffer.from(aes_encry).toString('base64')
 }

 function decrypt_string(emessage,encryptmethod,secret,iv1)
 {
    const buff=Buffer.from(emessage,'base64');
    emessage=buff.toString('utf-8');
    var decrypt=Crypto.createDecipheriv(encryptmethod,secret,iv1);
    return decrypt.update(emessage,'base64','utf-8')+decrypt.final('utf-8');
}
var dmessage=decrypt_string("Y2FRWGpvZUxLN0UwQlZWT25OMnQ0a3p2UnlCd1Brb0dnZEpjMk16UVRGMD0=",encryptmethod,key,iv1) 
console.log(dmessage);