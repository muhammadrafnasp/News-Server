// import express
const express = require('express');

// import cors
const cors = require('cors');

//import dataservices
const dataServices = require('./services/dataServices');

// create application using express
const app = express();

// use json parser for server responses
app.use(express.json());

//using cores specify the origin to the server
app.use(cors({
    origin: 'http://localhost:4200'
}))

// setup a port number
app.listen(3000, () => {
    console.log('Listening on port 3000');
})


// registration request
app.post('/register', (req, res) => {
    console.log(req.body);
    dataServices.register(req.body.name, req.body.email, req.body.password)
        .then(result => {
            res.status(result.statusCode).json(result);
        })
})

//login request
app.post('/login', (req, res) => {
    console.log(req.body);
    dataServices.login(req.body.email, req.body.password)
        .then(result => {
            res.status(result.statusCode).json(result);
        })
})


//api call to get all general news
app.get('/general-news', (req, res) => {
    dataServices.getGeneral().then(
        result => {
            res.status(result.statusCode).json(result)
        }
    )
})

//api call to get all technology news
app.get('/technology-news', (req, res) => {
    dataServices.getTechnology().then(
        result => {
            res.status(result.statusCode).json(result)
        }
    )
})

//api call to get all business news
app.get('/business-news', (req, res) => {
    dataServices.getEntrepreneur().then(
        result => {
            res.status(result.statusCode).json(result)
        }
    )
})

//api call to get all sports news
app.get('/sports-news', (req, res) => {
    dataServices.getSports().then(
        result => {
            res.status(result.statusCode).json(result)
        }
    )
})

//api call to get all health news
app.get('/health-news', (req, res) => {
    dataServices.getHealth().then(
        result => {
            res.status(result.statusCode).json(result)
        }
    )
})

//api call to get all sciene news
app.get('/science-news', (req, res) => {
    dataServices.getScience().then(
        result => {
            res.status(result.statusCode).json(result)
        }
    )
})

//api call to get all entertainment news
app.get('/entertainment-news', (req, res) => {
    dataServices.getEntertainment().then(
        result => {
            res.status(result.statusCode).json(result)
        }
    )
})

// api call to addto bookmarks
app.post('/bookmarks', (req, res) => {
    dataServices.addtobookmarks(req.body.id,req.body.author,req.body.title,req.body.description,req.body.url,req.body.urlToImage,req.body.publishedAt,req.body.category).then(
        result => {
            res.status(result.statusCode).json(result)
        }
    )
})

//api call to get bookmarked news details
app.get('/getbookmarks', (req, res) => {
    dataServices.getBookmarks().then(
        result => {
            res.status(result.statusCode).json(result)
        }
    )
})

//api call to delete bookmarked news details
app.delete('/deleteBookmarks:author', (req, res) => {
    dataServices.deleteBookmarks(req.params.author).then(
        result => {
            res.status(result.statusCode).json(result)
        }
    )
})





