

var indexController=require('../Controller/indexController');
var categoryController=require('../Controller/categoryController');

function router(app){
	//控制器
	indexController(app);
	categoryController(app);
}


module.exports = router;
