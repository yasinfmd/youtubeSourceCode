const stackman = require('stackman')()
let obj={}
function merhaba(){
        try {
                console.log(obj.id.toString())
        } catch (err) {
                stackman.callsites(err, function (err, callsites) {
                    callsites.forEach(function (callsite) {
                                console.log(callsite.getFunction())
                                console.log(callsite.getFileName())
                                console.log(callsite.getFunctionName())
                                console.log(callsite.isNode())
                                console.log(callsite.isEval())
                                console.log(callsite.isConstructor())
                                console.log(callsite.isToplevel())
                                console.log(callsite.getLineNumber())
                                console.log(callsite.getRelativeFileName())
                                console.log(callsite.getThis())
                                console.log(callsite.getColumnNumber())

                    })
                  })
        }
}


merhaba()