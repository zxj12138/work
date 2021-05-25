var express = require("express");
var router = express.Router();
var connection = require("./user")
var formidable = require("formidable")


router.get("/",function(req,res){
    res.render("index")
})
router.get("/contact",function(req,res){
    res.render("contact")
})
router.get("/features",function(req,res){
    res.render("features")
})
router.get("/pricing",function(req,res){
    res.render("pricing")
})
router.get("/tour",function(req,res){
    res.render("tour")
})
router.get("/admin",function(req,res){
    res.render("admin")
})
router.post("/login",function(req,res){
    var form = new formidable.IncomingForm();
    form.parse(req,function(err,fields){
        var username = fields.name
        var password = fields.password
        console.log(username);
        console.log(password);
        var query = 'select * from user where name = "'+username+'" and password = "'+password+'"'; 
        connection.query(query,function(err,rows){
            if(err){
                console.log(err);
                return;
            }
            console.log(rows[0]);
            if(!rows[0]){
                res.json({"status":-1});
            }else{
                res.json({"status":1});
            }
        })
    
        })
})

router.post("/regist",function(req,res){
    var form = new formidable.IncomingForm();
    form.parse(req,function(err,fields){
        var username = fields.name;
        var password = fields.password
    var query = 'insert into user (name,password) values ("'+username+'","'+password+'")' 
    connection.query(query,function(err,rows){
        if(err){
            console.log(err);
            return;
        }
        res.json({"status":1});
    })

    })
})


module.exports = router;