'use strict';
const mysql  = require( 'mysql' );

var pool  = mysql.createPool( {
    connectionLimit : 50,
    host     : 'localhost',
    user     : 'root',
    password : '19930711',
    database : 'blog',
    multipleStatements : true  //是否允许执行多条sql语句
} );

connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
});

//将结果已对象数组返回
var row=( sql , ...params )=>{
    return new Promise(function(resolve,reject){
        pool.getConnection(function(err,connection){
            if(err){
                reject(err);
                return;
            }
            connection.query( sql , params , function(error,res){
                connection.release();
                if(error){
                    reject(error);
                    return;
                }
                resolve(res);
            });
        });
    });
};
//返回一个对象
var first=( sql , ...params )=>{
    return new Promise(function(resolve,reject){
        pool.getConnection(function(err,connection){
            if(err){
                reject(err);
                return;
            }
            connection.query( sql , params , function(error,res){
                connection.release();
                if(error){
                    reject(error);
                    return;
                }
                resolve( res[0] || null );
            });
        });
    });
};
//返回单个查询结果
var single=(sql , ...params )=>{
    return new Promise(function(resolve,reject){
        pool.getConnection(function(err,connection){
            if(err){
                reject(err);
                return;
            }
            connection.query( sql , params , function(error,res){
                connection.release();
                if(error){
                    reject( error );
                    return;
                }
                for( let i in res[0] )
                {
                    resolve( res[0][i] || null );
                    return;
                }
                resolve(null);
            });
        });
    });
}
//执行代码，返回执行结果
var execute=(sql , ...params )=>{
    return new Promise(function(resolve,reject){
        pool.getConnection(function(err,connection){
            if(err){
                reject(err);
                return;
            }
            connection.query( sql , params , function(error,res){
                connection.release();
                if(error){
                    reject(error);
                    return;
                }
                resolve( res );
            });
        });
    });
}

//模块导出
module.exports = {
    ROW     : row ,
    FIRST   : first ,
    SINGLE  : single ,
    EXECUTE : execute
}
const mysql = require('./mysql.js');

(async ()=>{
    let s = await mysql.row(sql,params);
    console.log(s);
})();