const aws = require('aws-sdk')
const fs = require('fs')
aws.config.loadFromPath('./config.json')

const s3 = new aws.S3()

//list buckets

s3.listBuckets((err, data) => {
    console.log('err', err)
    console.log('data', data.Buckets)
})


const uploadParams = { Bucket: 'myyoutubebuckettest', Key: '', Body: '' }
const fstream = fs.createReadStream('./deneme.txt')

uploadParams.Body = fstream
uploadParams.Key = 'deneme.txt'
    //create new bucket

// s3.createBucket({
//     Bucket: 'denemetesthelloworldbucket'
// }, (err, data) => {
//     console.log('err', err)
//     console.log('data', data)
// })


//upload file

// s3.upload(uploadParams, (err, data) => {

//     console.log('err', err)
//     console.log('data', data)

// })


//list file of bucket
// s3.listObjects({
//     Bucket: 'myyoutubebuckettest'
// }, (err, data) => {
//     console.log('err', err)
//     console.log('data', data.Contents)

// })

//delete file
// s3.deleteBucket({
//     Bucket: 'denemehelloworldjs'
// }, (err, data) => {
//     console.log('data', data)
//     console.log('err', err)
// })

//read | download file
// s3.getObject({
//     Key: 'deneme.txt',
//     Bucket: 'myyoutubebuckettest'
// }, (err, data) => {
//     console.log('data', data)
//     console.log('err', err)
// })


s3.deleteObject({
    Bucket: 'myyoutubebuckettest',
    Key: 'deneme.txt'
}, (err, data) => {
    console.log('data', data)
    console.log('err', err)
})