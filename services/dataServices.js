//import jwt
const jwt = require('jsonwebtoken')

//import db
const db = require('./db')


const register = (name, email, password) => {
    return db.User.findOne({ email })
        .then(
            user => {
                if (user) {
                    return {
                        status: false,
                        statusCode: 400,
                        message: name + ' already registered'
                    }
                }
                else {
                    const newUser = new db.User({
                        name,
                        email,
                        password
                    })
                    newUser.save(); //data saved in mongoDb
                    return {
                        status: true,
                        statusCode: 200,
                        message: name + ' Registered successfully'
                    };
                }
            })
}


const login = (email, password) => {
    return db.User.findOne({ email, password })
        .then(user => {
            if (user) {
                currentUser = user.name
                currentEmail = email
                const token = jwt.sign({
                    currentEmail: email
                },
                    'superkey2023') //to generate key

                return {
                    status: true,
                    statusCode: 200,
                    token: token,
                    currentUser: currentUser,
                    currentEmail: currentEmail,
                    message: 'welcome ' + currentUser
                }

            }

            else {
                return {
                    status: false,
                    statusCode: 400,
                    message: 'Invalid user details'
                }
            }
        })
}


//get all general news deatails from db
const getGeneral = () => {
    return db.General.find().then(
        (result) => {
            if (result) {
                return {
                    status: true,
                    statusCode: 200,
                    general: result
                }
            }
            else {
                return {
                    status: false,
                    statusCode: 401,
                    message: 'General News not found'

                }
            }

        }
    )
}


// get all technology news details from db
const getTechnology = () => {
    return db.Teche.find().then(
        (result) => {
            if (result) {
                return {
                    status: true,
                    statusCode: 200,
                    teche: result

                }
            }

            else {
                return {
                    status: false,
                    statusCode: 401,
                    message: 'Tech News not found'

                }
            }
        }
    )
}



// get all business news details from db  
const getEntrepreneur = () => {
    return db.Entrepreneur.find().then(
        (result) => {
            if (result) {
                return {
                    status: true,
                    statusCode: 200,
                    business: result

                }
            }

            else {
                return {
                    status: false,
                    statusCode: 401,
                    message: 'Business News not found'

                }
            }
        }
    )
}


// get all sports news details from db  
const getSports = () => {
    return db.Sport.find().then(
        (result) => {
            if (result) {
                return {
                    status: true,
                    statusCode: 200,
                    sports: result

                }
            }

            else {
                return {
                    status: false,
                    statusCode: 401,
                    message: 'Sports News not found'

                }
            }
        }
    )
}

//get all health news details from db
const getHealth = () => {
    return db.Health.find().then(
        (result) => {
            if (result) {
                return {
                    status: true,
                    statusCode: 200,
                    health: result

                }
            }
            else {
                return {
                    status: false,
                    statusCode: 401,
                    message: 'Health News not found'

                }
            }
        }
    )
}

//get all science news deatails from db
const getScience = () => {
    return db.Science.find().then(
        (result) => {
            if (result) {
                return {
                    status: true,
                    statusCode: 200,
                    science: result
                }
            }
            else {
                return {
                    status: false,
                    statusCode: 401,
                    message: 'Science News not found'
                }
            }
        }
    )
}

//get all entertainment news details from db
const getEntertainment = () => {
    return db.Entertainment.find().then(
        (result) => {
            if (result) {
                return {
                    status: true,
                    statusCode: 200,
                    entertainment: result

                }
            }
            else {
                return {
                    status: false,
                    statusCode: 401,
                    message: 'Entertainment News not found'

                }
            }
        }
    )
}

//addtobookmarks details store to db
const addtobookmarks = (id, author, title, description, url, urlToImage, publishedAt, category) => {
    return db.Bookmark.findOne({ author }).then(
        (result) => {
            if (result) {
                return {
                    status: false,
                    statusCode: 401,
                    message: 'News already bookmarked...'
                }
            }
            else {

                const newBookmarks = new db.Bookmark({
                    id,
                    author,
                    title,
                    description,
                    url,
                    urlToImage,
                    publishedAt,
                    category

                })
                newBookmarks.save()
                return {
                    status: true,
                    statusCode: 200,
                    message: 'Bookmark added successfully'
                }
            }
        }
    )
}

//get all bookmarked news details from db
const getBookmarks = () => {
    return db.Bookmark.find().then(
        (result) => {
            if (result) {
                return {
                    status: true,
                    statusCode: 200,
                    bookmarks: result

                }
            }
            else {
                return {
                    status: false,
                    statusCode: 401,
                    message: 'Bookmarks is empty'

                }
            }
        }
    )

}

//delete the bookmarked news from db
const deleteBookmarks = (author) => {
    return db.Bookmark.deleteOne({ author }).then(
        (result) => {
            if (result) {
                return {
                    status: true,
                    statusCode: 200,
                    bookmarks: result,
                    message: 'Bookmark removed successfully'

                }
            }
            else {
                return {
                    status: false,
                    statusCode: 401,
                    message: 'Bookmarks is empty'


                }
            }
        }
    )
}



module.exports = {
    register,
    login,
    getGeneral,
    getTechnology,
    getEntrepreneur,
    getSports,
    getHealth,
    getScience,
    getEntertainment,
    addtobookmarks,
    getBookmarks,
    deleteBookmarks
}