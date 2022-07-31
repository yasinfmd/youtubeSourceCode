#!/usr/bin/env node

const { exec } = require('child_process')
const dir = exec('node --version')
dir.stdout.on('data', (data) => {
    console.log('data', data)
})
const process = require('process')
console.log(process.cwd())