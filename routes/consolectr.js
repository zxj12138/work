var express = require("express");
var router = express.Router();
var connection = require("./user")
var formidable = require("formidable")

//新增
router.get('/addpage',(req,res)=>{
    res.render('add');

})
router.post("/add",function(req,res){
    var form = formidable.IncomingForm();
    form.parse(req,function(err,fileds){
        var userid = fileds.userid;
        var name = fileds.name;
        var usertype = fileds.usertype;
        var password = fileds.password;
        var query='insert into user(userid,name,usertype,password) values("'+userid+'","'+name+'","'+usertype+'","'+password+'")';
        connection.query(query,function(err,rows){
           if(err){
               console.log(err);
           }
        })
        res.redirect("/admin")
    })
})
// router.post('/add',function(req,res){
    
    
//     var userid = fileds.userid;
//     var name = fileds.name;
//     var usertype = fileds.usertype;
//     connection.query('insert into user(userid,name,usertype) values("'+userid+'","'+name+'","'+usertype+'")',function(err,rows){
//             if(err){
//                 console.log(err);
//                 return;
//             }res.redirect("/admin")
//     })

// })

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
//修改 
router.get("/up",(req,res)=>{
    res.render("update")
});
router.post("/update",function(req,res){
    var form = formidable.IncomingForm();
    form.parse(req,function(err,fileds){
        var userid = fileds.userid;
        var name = fileds.name;
        var usertype = fileds.usertype;
        var query='update user set name="'+name+'",userid="'+userid+'",usertype'+usertype+'';
        connection.query(query,function(err,rows){
            res.json({"cba":1})
        })
    })
})

module.exports = router;