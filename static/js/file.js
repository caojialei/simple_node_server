var fs = require("fs")

exports.readFile = function(callback) {
    fs.readFile('./static/md/hashMap.md', 'utf-8', function (err, data) {
        // 读取文件失败/错误
        if (err) {
            throw err;
        }
        // 读取文件成功
        // console.log('utf-8: ', data.toString());
        callback(null,data.toString());
    })
}