cookie-parser库
	用于记住密码和自动登录的
	cookie存在于客户端，安全性不高，一般要加入加密后的信息并且大部分情况下需要设置过期时间或不使用删除。

morgan库
	用于记录模块
	Express中的app.js文件已经默认引入了该中间件var logger = require('morgan');
	使用app.use(logger('dev'));可以将请求信息打印在控制台，便于开发调试，但实际生产环境中，需要将日志记录在log文件里，可以使用如下代码

通过创建一个app对象来绑定引进的中间件
var app = express();
app.use(morgan('dev'));

读取静态文件
express.static(path.join(__dirname, 'public'))



自动解析参数
express.urlencoded();
express.json();

app.js是一个后台js文件
views文件夹放置的是显示在浏览器中的前台页面的模板

routes是一个路由器文件

public是一个公共静态文件夹 主要用来存放一个静态文件 例如 images,javascript,css

bin是一个运行文件夹
启动服务器时 npm start | nodemon ./bin/www  | supervisor ./bin/www


node_modules依赖模块的文件


// // view engine setup

用于引擎模板的设置
设置成ejs模板的
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


用于设置成jade模板的
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


用设置成html模板的

app.set('views', path.join(__dirname, 'views'));
app.engine('html', ejs.__express);
app.set('view engine', 'html');

