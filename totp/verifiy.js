const speakeasy=require('speakeasy')
const verify=speakeasy.totp.verify({
    secret:"F55D4OCPHJRFWRCTNM5DSS2PGZ5TEJKIPM4TA33IKZDEGP3DH5HQ",
    encoding:"base32",
    token:"827219"
})
console.log(verify)