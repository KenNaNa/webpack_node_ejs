var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//var indexRouter = require('./routes/index');
//var usersRouter = require('./routes/users');

var app = express();

// // view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);
app.get("/",function(req,res){//index页面
	console.log(req);
    res.render('layout',{title:'我的首页',pagename:"index"});//传入参数index，表示在模板页面引入index.ejs文件
});
app.get("/login",function(req,res){//login页面
    res.render('layout',{title:'登录页面',pagename:"login"});//传入参数login，表示在模板页面引入login.ejs文件
});
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

// var express= require('express');
// var path =require('path');
// var _=require('underscore');
// var mongoose=require('mongoose');
// var bodyParser = require('body-parser'); 
// var app =express();


// app.set('views','./views');
// app.set("view cache",true);
// app.set('view engine','ejs');

// app.use(bodyParser.json() );// 格式化表单提交
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(express.static('./public',{
//     maxAge:'0',//no cache
//     etag:true
// }));
// app.locals.moment=require('moment');

// app.get("/",function(req,res){//index页面
//     res.render('layout',{title:'我的首页',pagename:"index"});//传入参数index，表示在模板页面引入index.ejs文件
// });
// app.get("/login",function(req,res){//login页面
//     res.render('layout',{title:'登录页面',pagename:"login"});//传入参数login，表示在模板页面引入login.ejs文件
// });

// module.exports = app;