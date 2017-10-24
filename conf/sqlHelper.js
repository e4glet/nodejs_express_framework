//封装数据操作模块
//作者：eaglet 2017年3月
//引入mysql模块
var mysql=require('mysql');
//引入数据库配置信息
var dbconf=require('./db');

//封装查询操作
//sqlStr参数为sql语句
//param为数组参数
//返回值
function ExecuteReader(sqlStr,param,callback) {
	//初始化数据库连接对象
    var connection=mysql.createConnection(dbconf.mysql);
	//执行sql语句之前，连接数据库
	connection.connect(function(err) {
	// body...
	        if(err){
		     //err默认返回值是ture
		    console.log('错误信息：'+err);
		    return;
	        }
	        console.log('数据库连接成功！');
        });
	if(param!=null){
		//执行sql语句
	    //sqlStr参数为sql语句,param为传入参数数组，
	    //function为回调函数，也就是sql语句执行后要做的操作
	    connection.query(sqlStr,param,function(err,results){
            //返回结果集
            
            if(results){               
               callback(results);
            }
	    });
	}else{
		//执行不带参数的查询方法
		connection.query(sqlStr,function(err,results){
            //返回结果集
            if(results){
                callback(results);
            }
		});
	}
	
	//执行sql语句之后，断开数据库
	connection.end(function(err) {
	// body...
	    if(err){
		//err默认返回值是ture
		    console.log('错误信息：'+err);
		    return;
	    }
	    console.log('数据库断开成功！');
    });

}

//封装更新操作
//sqlStr参数为sql语句
//param为数组参数
//返回值
function ExecuteUpdate(sqlStr,param,callback){
	//初始化数据库连接对象
    var connection=mysql.createConnection(dbconf.mysql);
    //执行sql语句之前，连接数据库
	connection.connect(function(err) {
	// body...
	        if(err){
		     //err默认返回值是ture
		    console.log('错误信息：'+err);
		    return;
	        }
	        console.log('数据库连接成功！');
        });
    
	if(param!=null){
		//执行sql语句
	    //sqlStr参数为sql语句,param为传入参数数组，
	    //function为回调函数，也就是sql语句执行后要做的操作
	    connection.query(sqlStr,param,function(err,results){
            //返回受影响的行数 int 整型
            callback(results.affectedRows);
            //return results.affectedRows;
	    });
	}else{
		//执行不带参数的查询方法
		connection.query(sqlStr,function(err,results){
            //返回受影响的行数 int 整型
            callback(results.affectedRows);
            //return results.affectedRows;
		});
	}
	
	//执行sql语句之后，断开数据库
	connection.end(function(err) {
	// body...
	        if(err){
		     //err默认返回值是ture
		    console.log('错误信息：'+err);
		    return;
	        }
	        console.log('数据库断开成功！');
        });
}


exports.ExecuteReader=ExecuteReader;
exports.ExecuteUpdate=ExecuteUpdate;