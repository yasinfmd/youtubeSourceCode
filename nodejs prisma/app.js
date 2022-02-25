const { PrismaClient } = require('@prisma/client')
const { user, post } = new PrismaClient()


// const newPost = post.create({
//     data: {
//         post: 'test',
//         title: 'asdsad',
//         subTitle: 'wqeqwe',
//         user_id: 1
//     }
// })

const users = user.findFirst({
    select: {
        userName: true,
        posts: {
            select: {
                post: true,
                subTitle: true,
                title: true
            }
        }
    },
    // include: {
    //     posts: true
    // },
    where: {
        userName: 'yasindlklc'
    }
})
users.then((res) => {
        console.log('res', res)
    })
    // newPost.then((res) => {
    //     console.log('res', res)
    // })