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
})

module.exports = apiRoutes;


