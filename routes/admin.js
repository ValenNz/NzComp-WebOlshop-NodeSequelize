const express = require('express');
const cors = require("cors")
const bodyParser = require("body-parser")
const md5 = require("md5")
const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

const model = require("../models/index")
const admin = model.admin

app.post("/", (req,res) => {
    let data = {
        name: req.body.name,
        username: req.body.username,
        password: md5(req.body.password)
    }

    admin.create(data)
    .then(result => {
        res.json({
            message: "Data admin has been inserted",
            admin: result
        })
    })
    .catch(err => {
        res.json({
            message: err.message
        })
    })
})

app.get("/", (req,res) => {
    
    admin.findAll()
    .then(result => {
        res.json({
            message: "Data admin has been show",
            lenght: result.length,
            admin : result
        })
    })
    .catch(err => {
        res.json({
            message : err.message
    })
    })
})

app.put("/:id", (req,res) => {
    let param = {
        admin_id : req.params.id
    }

    let data = {
        name: req.body.name,
        username: req.body.usernmae,
        password: md5(req.body.password)
    }

    admin.update(data, {where: param})
        .then(result => {
            res.json({
                message: "Data has been update",
                admin: result
            })
        })
        .catch(err => {
            res.json({
                message: err.message
            })
        })
})

app.delete("/:id", (req,res) => {
    let param = {
        admin_id : req.params.id
    }
    admin.destroy({where: param})
        .then(result => {
            res.json({
                message: "data has been deleted"
            })
        })
        .catch(error => {
            res.json({
                message: error.message
            })
        })
})



module.exports = app









