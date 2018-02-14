const express = require('express');
const apiRoutes = express.Router();



//getUserInfo
apiRoutes.post('/pointgate/equityecard/list', (req,res) => {

    // console.log(req.body);
    // res.json(req.body);

    res.json({
        "respCode": "0000",
        "respMsg": "成功",
        "hidemobileid":"138****1234",
        "cmccscore": 500,
        "cards": [
            {
                "cardid": "01",
                "cardname": "钻石权益卡",
                "cardcontent": "2000畅由积分",
                "score": 2000
            },
            {
                "cardid": "02",
                "cardname": "铂金权益卡",
                "cardcontent": "1000畅由积分",
                "score": 1000
            },
            {
                "cardid": "03",
                "cardname": "黄金权益卡",
                "cardcontent": "500畅由积分",
                "score": 500
            },
            {
                "cardid": "04",
                "cardname": "青铜权益卡",
                "cardcontent": "100畅由积分",
                "score": 100
            }
        ]
    });
});
//sendcode
apiRoutes.post('/pointgate/equityecard/sendcode', (req,res) => {
    res.json(
        {
            "respCode": "0000",
            "respMsg": "成功"
        }
    )
});
//exchange
apiRoutes.post('/pointgate/equityecard/exchange', (req,res) => {
    res.json(
        {
            "respCode": "0003",
            "respMsg": "验证码"
        }
    )
});



//listpage
apiRoutes.post('/pointgate/equityecard/listpage', (req,res) => {
    res.json(
        {
            "hidemobileid": "159****9025",
            "cmccscore": 10000,
            "cards": [
                {
                "cardcontent": "<p>测试测试测</p>",
                "cardid": "QYK_00001",
                "cardimg": "http://localhost:8888/img/ex_card01.png",
                "cardname": "钻石权益卡",
                "cmccpoint": 2500,
                "giftids": "1,2,3",
                "id": 1,
                "intime": "2017-11-16 10:57:19.000",
                "level": 1,
                "modtime": "2017-11-16 10:57:19.000",
                "score": 2000
                },
                {
                    "cardcontent": "<p>测试测试测</p><p>测试测试测</p><p>测试测试测</p><p>测试测试测</p>",
                    "cardid": "QYK_00002",
                    "cardimg": "http://localhost:8888/img/ex_card02.png",
                    "cardname": "铂金权益卡",
                    "cmccpoint": 0,
                    "giftids": "",
                    "id": 2,
                    "intime": "2017-11-16 10:57:19.000",
                    "level": 2,
                    "modtime": "2017-11-16 10:57:19.000",
                    "score": 1000
                },
                {
                    "cardcontent": "<p>测试测试测阿萨德会计法哈利上岛咖啡哈上课咯的发挥卡的身份喀什东路恢复卡萨丁发货速度咖啡壶烧烤店积分监考老师地方好</p>",
                    "cardid": "QYK_00003",
                    "cardimg": "http://localhost:8888/img/ex_card03.png",
                    "cardname": "黄金权益卡",
                    "cmccpoint": 10,
                    "giftids": "",
                    "id": 3,
                    "intime": "2017-11-16 10:57:19.000",
                    "level": 3,
                    "modtime": "2017-11-16 10:57:19.000",
                    "score": 500
                },
                {
                    "cardcontent": "<p>测试测试测</p>",
                    "cardid": "QYK_00004",
                    "cardimg": "http://localhost:8888/img/ex_card04.png",
                    "cardname": "青铜权益卡",
                    "cmccpoint": 0,
                    "giftids": "",
                    "id": 4,
                    "intime": "2017-11-16 10:57:19.000",
                    "level": 4,
                    "modtime": "2017-11-16 10:57:19.000",
                    "score": 100
                }],
            "respCode": "0000",
            "respMsg": "操作成功"
        }
    )
});
//exchange/v2
apiRoutes.post('/pointgate/equityecard/exchange/v2', (req,res) => {
    res.json(
        {
            "respCode": "0002",
            "respMsg": "验证码"
        }
    )
});

//record
apiRoutes.post('/pointgate/equityecard/record', (req,res) => {
    res.json(
        {
            "respCode": "0000",
            "respMsg": "操作成功",
            "cards": [
                {
                    "intime": "2017-12-19 16:06:50.000",
                    "orderid": "201712190712000000",
                    "cardname": "黄金权益卡",
                    "num": 5,
                    "cardimg": "http://localhost:8888/img/c1.jpg"
                },
                {
                    "intime": "2017-12-19 14:57:59.000",
                    "orderid": "201712190708000000",
                    "cardname": "铂金权益卡",
                    "num": 5,
                    "cardimg": "http://localhost:8888/img/c2.jpg"
                },
                {
                    "intime": "2017-12-19 14:54:54.000",
                    "orderid": "201712190707000000",
                    "cardname": "青铜权益卡",
                    "num": 5,
                    "cardimg": "http://localhost:8888/img/c3.jpg"
                }
            ]
        }
    )
});

//delete
apiRoutes.post('/pointgate/equityecard/delete', (req,res) => {
    res.json(
        {
            "respCode": "0000",
            "respMsg": "操作成功"
        }
    )
});

//details
apiRoutes.get('/pointgate/equityecard/details', (req,res) => {
    res.json(
        {
            "respCode": "0000",
            "respMsg": "操作成功",
            "card": {
                "cardcontent": "",
                "intime": "2017-12-19 14:54:54.000",
                "cardname": "钻石权益卡",
                "num": 5,
                "cardimg": "http://localhost:8888/img/ex_card01.png",
                "totalscore": 10000
            },
            "gifts": [
                {
                    "giftname": "安全险",
                    "giftid": 12,
                    "activityid": "id6",
                    "validitydate": "永久",
                    "id": 11,
                    "state": 3,
                    "sort": 0,
                    "content": "1个月账户安全险",
                    "type": 1
                },
                {
                    "giftname": "安全险",
                    "giftid": 12,
                    "activityid": "huodongid7",
                    "validitydate": "永久",
                    "id": 12,
                    "state": 2,
                    "sort": 0,
                    "content": "3个月账户安全险",
                    "type": 2
                }
            ]
        }
    )
});

//changegiftstate
apiRoutes.get('/pointgate/equityecard/changegiftstate', (req,res) => {
    res.json(
        {
            "respCode": "0000",
            "respMsg": "操作成功",
            "url": "insurance/src/intro.html?type=&businessType=GPOL&actCode=GP1712281101&goodsid=&callback="
        }
    )
});

apiRoutes.get('/test/music', (req,res) => {
    res.json(
        {
            "respCode": "0000",
            "respMsg": "操作成功",
            "musicUrl": "http://localhost:8888/mp3/starto.mp3",
            "cardimg": "http://localhost:8888/img/ex_card01.png"
        }
    )
});

module.exports = apiRoutes;


