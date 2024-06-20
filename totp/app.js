const speakeasy=require('speakeasy')

const qrcode=require('qrcode-terminal')

const secret=speakeasy.generateSecret({}
)

console.log('secret', secret)

qrcode.generate(secret.otpauth_url,{small:true})