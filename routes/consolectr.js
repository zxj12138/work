var express = require("express");
var router = express.Router();
var connection = require("./user")
var formidable = require("formidable")


//获取
router.get("/get_list",function(req,res){
    var query = 'select * from user';
    connection.query(query,function(err,rows){
        if(err){
            console.log(err);
            return;
        }
        res.json(rows);
    })
})
//删除
router.post("/takedata",function(req,res){
    var form = formidable.IncomingForm();
    form.parse(req,function(err,fileds){
        var userid = fileds.userid;
        var query = 'delete from user where userid = '+userid+'';
        connection.query(query,function(err,rows){
            res.json({"abc":1})
        })
    })
})

module.exports = router;