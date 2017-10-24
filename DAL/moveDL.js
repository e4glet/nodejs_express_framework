//数据模块
var sqlHelper=require('../conf/sqlHelper');
//读取预订信息
function getBookingList(callback) {
	// body...
	var sqlstr='select id,area,cartype,DATE_FORMAT(movedate,"%Y-%m-%d") movedate,contact,phone,status from move_booking';

    sqlHelper.ExecuteReader(sqlstr,null,function(results){
    	if(results){
    		callback(results);
    	}
    });
}

//读取详细信息
//id传参，callback回调函数
function getBookingById(id,callback){
    var sqlstr='select id,area,cartype,DATE_FORMAT(movedate,"%Y-%m-%d") movedate,contact,phone,status from move_booking where id=?';
    var param=[id];

    sqlHelper.ExecuteReader(sqlstr,param,function(results){
         if(results){
         	callback(results);
         }
    });
}

//订单处理方法
//id参数，status状态，callback回调函数
function updateBookingStatusById(id,status,callback){
	var sqlstr='update move_booking set status=? where id=?';
	var param=[status,id];

	sqlHelper.ExecuteUpdate(sqlstr,param,function(counts){
		if(counts>0){
			callback(true);
		}else{
			callback(false);
		}

	});

}

function insertBooking(area,cartype,movedate,contact,phone,callback){
    var sqlstr='insert into move_booking(area,cartype,movedate,contact,phone)values(?,?,?,?,?)';
    var param=[area,cartype,movedate,contact,phone];

    //数据操作
    sqlHelper.ExecuteUpdate(sqlstr,param,function(counts){          
    if(counts>0){
                //登记成功
       callback(true);
    }else{
                //登记失败
       callback(false);
        }           
    });
}

exports.getBookingList=getBookingList;
exports.getBookingById=getBookingById;
exports.updateBookingStatusById=updateBookingStatusById;
exports.insertBooking=insertBooking;