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
            "respCode": "0000",
            "respMsg": "成功"
        }
    )
});

//record
apiRoutes.get('/pointgate/equityecard/record', (req,res) => {
    res.json(
        {
            "respCode": "0000",
            "respMsg": "操作成功",
            "cards": [
                {
                    "intime": "2017-12-19 16:06:50.000",
                    "orderid": "201712190712000000",
                    "cardname": "钻石权益卡",
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
                    "cardname": "黄金权益卡",
                    "num": 5,
                    "cardimg": "http://localhost:8888/img/c3.jpg"
                }
            ]
        }
    )
});

//delete
apiRoutes.get('/pointgate/equityecard/delete', (req,res) => {
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
                    "state": 0,
                    "sort": 0,
                    "content": "1个月账户安全险"
                },
                {
                    "giftname": "安全险",
                    "giftid": 12,
                    "activityid": "huodongid7",
                    "validitydate": "永久",
                    "id": 12,
                    "state": 1,
                    "sort": 0,
                    "content": "3个月账户安全险"
                },
                {
                    "giftname": "安全险",
                    "giftid": 12,
                    "activityid": "id9",
                    "validitydate": "永久",
                    "id": 13,
                    "state": 2,
                    "sort": 0,
                    "content": "5个月账户安全险"
                }
            ]
        }
    )
});

module.exports = apiRoutes;


