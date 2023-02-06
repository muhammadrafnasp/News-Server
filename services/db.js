//import mongoose
const mongoose = require('mongoose');

// define the connection string
mongoose.connect('mongodb://localhost:27017/NewsServer',
{
    useNewUrlParser:true //to avoid unwanted warnings
}
)

//create a model for the users
const User = mongoose.model('User',{
    //schema creation
    name:String,
    email:String,
    password:String
})

// create a model for the generals
const General = mongoose.model('General',{
    //schema creation
    id:Number,
    name:String,
    author:String,
    title:String,
    description:String,
    url:String,
    urlToImage:String,
    publishedAt:String,
    content:String,
    category:String

})


//create a model for the teches
const Teche = mongoose.model('Teche',{
     //schema creation
     id:Number,
     name:String,
     author:String,
     title:String,
     description:String,
     url:String,
     urlToImage:String,
     publishedAt:String,
     content:String,
     category:String
 

})


//create a model for the entrepreneurs
const Entrepreneur = mongoose.model('Entrepreneur',{
    //schema creation
    id:Number,
    name:String,
    author:String,
    title:String,
    description:String,
    url:String,
    urlToImage:String,
    publishedAt:String,
    content:String,
    category:String


})



//create a model for the sports
const Sport = mongoose.model('Sport',{
    //schema creation
    id:Number,
    name:String,
    author:String,
    title:String,
    description:String,
    url:String,
    urlToImage:String,
    publishedAt:String,
    content:String,
    category:String


})

//create a model for the healths
const Health = mongoose.model('Health',{
    //schema creation
    id:Number,
    name:String,
    author:String,
    title:String,
    description:String,
    url:String,
    urlToImage:String,
    publishedAt:String,
    content:String,
    category:String


})

//create a model for the sciences
const Science = mongoose.model('Science',{
    //schema creation
    id:Number,
    name:String,
    author:String,
    title:String,
    description:String,
    url:String,
    urlToImage:String,
    publishedAt:String,
    content:String,
    category:String


})

//create a model for the entertainments
const Entertainment = mongoose.model('Entertainment',{
    //schema creation
    id:Number,
    name:String,
    author:String,
    title:String,
    description:String,
    url:String,
    urlToImage:String,
    publishedAt:String,
    content:String,
    category:String


})

//create a new collection in mongodb - create a model
const Bookmark = mongoose.model('Bookmark',{

    id:Number,
    author:String,
    title:String,
    description:String,
    url:String,
    urlToImage:String,
    publishedAt:String,
    category:String

})


module.exports={
    User,
    General,
    Teche,
    Entrepreneur,
    Sport,
    Health,
    Science,
    Entertainment,
    Bookmark
    

}