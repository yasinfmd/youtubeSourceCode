const {parseArgs}=require('node:util')

const opt={
    counts:{type:'string',multiple:true, short:'c'},
    flag:{type:'boolean',short:'f'}
}

const args=parseArgs({options:opt})

console.log(args)