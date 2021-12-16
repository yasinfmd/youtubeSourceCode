const Blog = require('../../models/Blog/Blog')
const blogDal = require('../../dal/Blog/blogDal')
const dtos = require('../../dto/dtos')
const userDal = require('../../dal/User/userDal')


const blogService = {



    async create(request) {
        const { text, userId } = request.body
        const blog = new Blog({
            date: new Date(),
            text,
            userId,
            fav_count: 0,
            file: ""
        })
        dtos.baseResponse.data = await blogDal.create(blog)
        const result = await userDal.findById(userId)
        result.blogs.push(blog)
        await result.save()
        dtos.baseResponse.message = "Blog Başarıyla Oluşturuldu"
        dtos.baseResponse.statusCode = 10002
        return dtos.baseResponse
    }


}


module.exports = blogService