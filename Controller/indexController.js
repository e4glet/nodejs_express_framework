var moveDL=require('../DAL/moveDL');

function indexController(app) {
	// body...
	/* GET home page. */
	//app.get方法第一个参数是我们添加网站可以请求的地址
    app.get('/', function(req, res, next) {
        res.render('index', { title: '顺风搬家预约登记系统' });
    });

    //提交预约登记信息
    app.post('/bookinghandle',function(req,res,next){
    	var area=req.body.area;
        var cartype=req.body.cars;
        var movedate=req.body.date;
        var contact=req.body.user;
        var phone=req.body.phone_head+'-'+req.body.phone_content;

        moveDL.insertBooking(area,cartype,movedate,contact,phone,function(results){
            if(results){
                res.render('bookresult',{title:'登记成功'});
            }else{
                res.render('bookresult',{title:'登记失败'});
            }
        });       
        
    });
}


module.exports = indexController;