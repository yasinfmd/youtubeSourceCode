export default function (ctx){
  if(ctx.req.headers.host==='localhost:3000'){
    ctx.redirect('/about')
  }
 // console.log(ctx.req.headers.cookie.split(';'))
}
