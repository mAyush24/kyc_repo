const mongoose=require('mongoose')
mongoose.connect("mongodb+srv://adityathakur6199:mern123@cluster0.tx7zc2l.mongodb.net/").then(()=>{
console.log('mongodb connected')
}).catch(()=>{
    console.log('connected')
})

const newSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})
const collections = mongoose.model('collection',newSchema)

module.exports=collections