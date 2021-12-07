const usersRouter=require("./user/user").users
const blogsRouter=require("./blogs/blogs").blogs

module.exports={
    user:usersRouter,
    blog:blogsRouter
}
