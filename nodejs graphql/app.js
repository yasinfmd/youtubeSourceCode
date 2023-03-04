const {ApolloServer}=require('@apollo/server')
const {startStandaloneServer}=require('@apollo/server/standalone')
const {buildSchema}=require('graphql')

const users=[
    {
        id:100,
        ad:"Abc",
        soyad:"qweqwe"
    },
    {
        id:1000,
        ad:"Abcqweq",
        soyad:"qweqweqwe"
    }
]
const booksArray=[
    {
        title:"Kitap 1",
        author:"ABC",
        id:1,
        isActive:false,
        price:22.1,
        user:{
            id:100,
            ad:"Abc",
            soyad:"qweqwe"
        }
    },
    {
        title:"Kitap 2",
        author:"DEF",
        id:2,
        isActive:true,
        price:33.1,
        user:{
            id:100,
            ad:"Abc",
            soyad:"qweqwe"
        }
    }
]
const typeDefs = `#graphql
  type Book {
    title: String!
    author: String!
    id:Int!
    isActive:Boolean!,
    price:Float!
    user:User!
  }
  type User{
    ad:String!
    soyad:String!
    id:Int!
  }
  input CreateUserInputType{
    ad:String!
    soyad:String!
  }
  type Mutation{
    createUser(data:CreateUserInputType):Boolean
  }
  type Query {
    books: [Book]!
    users:[User]!
    user(id:Int): User!
  }
`;


const resolvers={
    Mutation:{
        createUser(_,args){
            //db kayıt et 
            users.push({
                ad:args.data.ad,
                soyad:args.data.soyad,
                id:Date.now()
            })
            return true;
        }
    },
    Query:{
        user:(_,args)=>{
            console.log(args)
            return users.find((item)=>item.id===args.id)
        },
        books:()=>{
            // db den gelen veri
                return booksArray
        },
        users:()=>{
            return users
        }
    }
}
const server=new ApolloServer({
    typeDefs,
    resolvers
})
const startServer= async ()=>{
    const { url } = await startStandaloneServer(server, {
        listen: { port: 4000 },
      });
  console.log(`🚀  Server ready at: ${url}`);

}

  
startServer()