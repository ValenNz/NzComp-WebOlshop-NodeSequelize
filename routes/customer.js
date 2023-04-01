//import express
const express = require("express")
const app = express()
app.use(express.json())

// import md5
const md5 = require("md5")

//import multer
const multer = require("multer")
const path = require("path")
const fs = require("fs")

//import model
const models = require("../models/index")
const customer = models.customer


const storage = multer.diskStorage({
    destination:(req,file,cb) => {
        cb(null, "./image/customer_image")
    },
    filename: (req,res) => {
        cb(null, "img cutomer - " + Date.now() + path.extname(file.originalname))
    }
})

let upload = multer({storage: storage})

// app.post("/", upload.single("image"),(req,res) => {
//     if(!req.file){
//         res.json({
//             message: "No uploaded file"
//         })
//     } else {
//         let data = {
//             name: req.body.name,
//             phone: req.body.phone,
//             address: req.body.address,
//             image: req.file.filename,
//             username: req.body.username,
//             password: md5(req.body.password)
//         }
//         customer.create(data)
//         .then(result => {
//             res.json({
//                 message: "Data customer has been inserted",
//                 costumer: result
//             })
//         })
//         .catch(err => {
//             res.json({
//                 messager: err.message
//             })
//         })
//     }
// })

app.get("/", (req,res) => {
    customer.findAll()
    .then(result => {
        res.json({
            message: "Data customer has been show",
            length: result.length,
            customer: result,
        })
    })
    .catch(err => {
        res.json({
            message: err.message
        })
    })
})

// app.get("customer", (req,res) => {
//     customer.findOne({where: {sutomer_id: req.params.costumer_id}})
//     .then(result => {
//         res.json({
//             customer: result
//         })
//     })
//     .catch(err => {
//         res.json({
//             message: err.message
//         })
//     })
// })

// app.put("/:id", upload.single("image"),(req,res)=> {
//     let param = {
//         customer_id : req.param.id
//     }

//     let data ={
//         name: req.body.name,
//         phone: req.body.phone,
//         address: req.body.address,
//         username: req.body.username,
//     }
//     if(req.file){
//         const row = customer.findOne({where:param})
//         .then(result => {
//             let oldFileName = result.image

//             let dir = path.join(__dirname,"../images/customer_image",oldFileName)
//             fs.unlink(dir, err => console.log(err))
//         })
//         .catch(err => {
//             console.log(err.message)
//         })

//         data.image = req.file.filename
//     }


//     if(req.body.password){
//         data.password = md5(req.body.password)
//     }

//     customer.update(data, {where:param})
//         .then(result => {
//             res.json({
//                 message: "Data customer has been updated",
//                 customer: result
//             })
//         })
//         .catch(err => {
//             res.json({
//                 message:err.message
//             })
//         })
// })

// app.delete("/:id", async (req,res) => {
//     try{
//         let param = {customer_id:req.body.id}
//         let result = await customer.findOne({where:param})
//         let oldFileName = result.image

//         let dir = path.join(__dirname,"../image/customer_image", oldFileName)
//         fs.unlink(dir,err => console.log(err))

//         customer.destroy({where:param})
//         .then(result => {
//             res.json({
//                 message: "Data has been inserted"
//             })
//         })
//         .cacth(err => {
//             res.json({
//                 message: err.message
//             })
//         })
//     } catch (err) {
//         res.json({
//             message: error.message
//         })
//     }
// })
module.exports = app