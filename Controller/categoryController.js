function categoryController(app) {
	// body...
	/* GET home page. */
	//app.get方法第一个参数是我们添加网站可以请求的地址
    app.get('/category', function(req, res, next) {
    	//res.render方法的第一个参数是我们请求地址对应的网页文件名
        res.render('Category/index', { title: 'Express' });
    });
}


module.exports = categoryController;