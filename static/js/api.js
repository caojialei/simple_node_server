const express = require('express');
const apiRoutes = express.Router();
const readFile = require('./file');

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

apiRoutes.post('/test/music', (req,res) => {
    res.json(
        {
            "respCode": "0000",
            "respMsg": "操作成功",
            "musicUrl": "http://localhost:8888/mp3/starto.mp3",
            "cardimg": "http://localhost:8888/img/ex_card01.png"
        }
    )
});


// personal-website
// home
// home 文章列表
apiRoutes.get('/website/articlelist', (req,res) => {
    res.json(
        {
            "respCode": "0000",
            "respMsg": "成功",
            "pageCount": 36,
            "pagesize": 5,
            "pageNo": 1,
            "data":[
                {
                    "originalUrl": "https:\/\/www.zybuluo.com\/kiraSally\/note\/825758",
                    "commentsCount": 0,
                    "author": "黄志鹏kira",
                    "articleId": "11111",
                    "content": "Java线程间的通信由Java内存模型(JMM)控制，JMM决定一个线程对共享变量的写入Java线程间的通信由Java内存模型(JMM)控制，JMM决定一个线程对共享变量的写入何时对另一个线程可见",
                    "articleTitle": "集合番@LinkedHashSet一文通（1.7版）",
                    "createdAt": "2017-07-24T02:53:13.006Z",
                    "updatedAt": "2018-03-27T03:18:35.528Z",
                    "tags": [
                        {
                            "title": "Java"
                        },
                        {
                            "title": "源码"
                        }
                    ]
                },
                {
                    "originalUrl": "https:\/\/www.zybuluo.com\/kiraSally\/note\/825758",
                    "commentsCount": 0,
                    "author": "黄志鹏kira",
                    "articleId": "22222",
                    "content": "写缓冲区还可以通过批处理的方式刷新写缓冲区，以及合并写缓冲区中对同一内存地址的多次写，减少对内存总线的占用",
                    "articleTitle": "并发番@Java内存模型&Volatile一文通（1.7版）",
                    "createdAt": "2017-07-24T02:53:13.006Z",
                    "updatedAt": "2018-03-27T03:18:35.528Z",
                    "tags": [
                        {
                            "title": "并发"
                        },
                        {
                            "title": "缓冲区"
                        }
                    ]
                },
                {
                    "originalUrl": "https:\/\/www.zybuluo.com\/kiraSally\/note\/825758",
                    "commentsCount": 0,
                    "author": "黄志鹏kira",
                    "articleId": "3333",
                    "content": "Java线程间的通信由Java内存模型(JMM)控制，JMM决定一个线程对共享变量的写入Java线程间的通信由Java内存模型(JMM)控制，JMM决定一个线程对共享变量的写入何时对另一个线程可见",
                    "articleTitle": "集合番@LinkedHashSet一文通（1.7版）",
                    "createdAt": "2017-07-24T02:53:13.006Z",
                    "updatedAt": "2018-03-27T03:18:35.528Z",
                    "tags": [
                        {
                            "title": "Java"
                        },
                        {
                            "title": "源码"
                        }
                    ]
                },
                {
                    "originalUrl": "https:\/\/www.zybuluo.com\/kiraSally\/note\/825758",
                    "commentsCount": 0,
                    "author": "黄志鹏kira",
                    "articleId": "44444",
                    "content": "写缓冲区还可以通过批处理的方式刷新写缓冲区，以及合并写缓冲区中对同一内存地址的多次写，减少对内存总线的占用",
                    "articleTitle": "并发番@Java内存模型&Volatile一文通（1.7版）",
                    "createdAt": "2017-07-24T02:53:13.006Z",
                    "updatedAt": "2018-03-27T03:18:35.528Z",
                    "tags": [
                        {
                            "title": "并发"
                        },
                        {
                            "title": "缓冲区"
                        }
                    ]
                },
                {
                    "originalUrl": "https:\/\/www.zybuluo.com\/kiraSally\/note\/825758",
                    "commentsCount": 0,
                    "author": "黄志鹏kira",
                    "articleId": "55555",
                    "content": "写缓冲区还可以通过批处理的方式刷新写缓冲区，以及合并写缓冲区中对同一内存地址的多次写，减少对内存总线的占用",
                    "articleTitle": "并发番@Java内存模型&Volatile一文通（1.7版）",
                    "createdAt": "2017-07-24T02:53:13.006Z",
                    "updatedAt": "2018-03-27T03:18:35.528Z",
                    "tags": [
                        {
                            "title": "并发"
                        },
                        {
                            "title": "缓冲区"
                        }
                    ]
                }
            ]
        }
    )
});
// home 作者信息
apiRoutes.get('/website/authorinfo', (req,res) => {
    res.json(
        {
            "respCode": "0000",
            "respMsg": "操作成功",
            "author":"黄志鹏kira",
            "selfDescription":"正儿八经的Java攻城狮一枚，但因媳妇缘故而对前端兴趣浓厚 . 笔者原创文章统一使用CmdMarkdown编写，以分享形式展示，希望看官们多多指导",
            "community":[
                {
                    "name":"github",
                    "url":"https://github.com/kiraGitHub"
                },
                {
                    "name":"zhihu",
                    "url":"https://www.zhihu.com/people/kira-49-60/activities"
                }
            ]
        }
    )
});
// home 文章分类
apiRoutes.get('/website/cataloglist', (req,res) => {
    res.json(
        {
            "respCode": "0000",
            "respMsg": "操作成功",
            "data":[
                {
                    "name":"并发番",
                    "count": 242,
                    "id": 1111
                },
                {
                    "name":"集合番",
                    "count": 5,
                    "id": 2222
                },
                {
                    "name":"基础番",
                    "count": 123,
                    "id": 3333
                }
            ]
        }
    )
});

// article
// article 文章详情
apiRoutes.get('/website/articledetail', (req,res) => {
    readFile.readFile(function(err,data){
        if (err) {
            console.error(err);
        }

        res.json(
            {
                "respCode": "0000",
                "respMsg": "操作成功",
                "author": "黄志鹏kira",
                "articleId": "1111",
                "articleTitle": "并发番@AbstractQueuedSynchronizer一文",
                "isFavorite": 1,
                "content": data,
                "createdAt": "2017-07-24T02:53:13.006Z",
                "updatedAt": "2018-03-27T03:18:35.528Z",
                "tags": [
                    {
                        "title": "并发"
                    },
                    {
                        "title": "缓冲区"
                    }
                ]
            }
        )
    });

});
// article 文章评论
apiRoutes.get('/website/articlecomments', (req,res) => {
    res.json(
        {
            "respMsg": "请求成功",
            "total": 30,
            "data": [
                {
                    "c_user_name": "萌萌",
                    "c_id": "201801",
                    "c_user_id": "170201",
                    "c_content": "写的真好！值得学习",
                    "c_quote":"待补充：划线评论",
                    "createdCt":"2018-04-12 09:55:10",
                    "likes_count": 1,
                    "reply_list":[
                        {
                            "r_user_name":"小白菜",
                            "r_c_user_name":"萌萌",
                            "r_c_id": "201801",
                            "r_id":"180412",
                            "r_user_id":"180412",
                            "r_content":"我也是这么觉得的",
                            "createdRt":"2018-04-13 09:55:10"
                        },
                        {
                            "r_user_name":"1111小白菜",
                            "r_c_user_name":"萌萌",
                            "r_c_id": "201801",
                            "r_id":"180412",
                            "r_user_id":"180412",
                            "r_content":"我也是这么觉得的",
                            "createdRt":"2018-04-13 09:55:10"
                        }
                    ]
                },
                {
                    "c_user_name": "补贴喵",
                    "c_id": "201802",
                    "c_user_id": "170202",
                    "c_content": "老哥稳，lam表达式了解了一些.... ",
                    "c_quote":"待补充：划线评论",
                    "createdCt":"2018-04-12 09:55:10",
                    "likes_count": 0,
                    "reply_list":[
                        {
                            "r_user_name":"小白菜",
                            "r_c_user_name":"补贴喵",
                            "r_c_id": "201802",
                            "r_id":"180412",
                            "r_user_id":"180412",
                            "r_content":"我也是这么觉得的",
                            "createdRt":"2018-04-13 09:55:10"
                        }
                    ]
                },
                {
                    "c_user_name": "TingKing",
                    "c_id": "201803",
                    "c_user_id": "170202",
                    "c_content": "底层原理就是hashmap",
                    "c_quote":"待补充：划线评论",
                    "createdCt":"2018-04-12 09:55:10",
                    "likes_count": 4,
                    "reply_list":[
                        {
                            "r_user_name":"黄志鹏Kira",
                            "r_c_user_name":"TingKing",
                            "r_c_id": "201803",
                            "r_id":"180412",
                            "r_user_id":"180412",
                            "r_content":"是的，还是key的非重复性",
                            "createdRt":"2018-04-13 09:55:10"
                        }
                    ]
                }
            ]
        }
    )
});
// article 文章评论提交
apiRoutes.post('/website/doComment', (req,res) => {
    res.json(
        {
            "respCode": "0000",
            "respMsg": "请求成功"
        }
    )
});

// about 留言列表
apiRoutes.get('/website/messagelist', (req,res) => {
    res.json(
        {
            "respMsg": "请求成功",
            "total": 30,
            "data": [
                {
                    "c_user_name": "萌萌",
                    "c_id": "201801",
                    "c_user_id": "170201",
                    "c_content": "写的真好！值得学习",
                    "c_quote":"待补充：划线评论",
                    "createdCt":"2018-04-12 09:55:10",
                    "likes_count": 4,
                    "reply_list":[
                        {
                            "r_user_name":"小白菜",
                            "r_c_user_name":"萌萌",
                            "r_c_id": "201801",
                            "r_id":"180412",
                            "r_user_id":"180412",
                            "r_content":"我也是这么觉得的",
                            "createdRt":"2018-04-13 09:55:10"
                        }
                    ]
                }
            ]
        }
    )
});

//catalog
// home 分类文章李彪
apiRoutes.post('/website/catalogarticlelist', (req,res) => {
    res.json(
        {
            "respCode": "0000",
            "respMsg": "成功",
            "pageCount": 28,
            "pagesize": 5,
            "pageNo": 1,
            "catalogId": "1111",
            "catalogName": "并发番",
            "data":[
                {
                    "originalUrl": "https:\/\/www.zybuluo.com\/kiraSally\/note\/825758",
                    "commentsCount": 0,
                    "author": "黄志鹏kira",
                    "articleId": "11111",
                    "content": "Java线程间的通信由Java内存模型(JMM)控制，JMM决定一个线程对共享变量的写入Java线程间的通信由Java内存模型(JMM)控制，JMM决定一个线程对共享变量的写入何时对另一个线程可见",
                    "articleTitle": "并发番@LinkedHashSet一文通（1.7版）",
                    "createdAt": "2017-07-24T02:53:13.006Z",
                    "updatedAt": "2018-03-27T03:18:35.528Z",
                    "tags": [
                        {
                            "title": "Java"
                        },
                        {
                            "title": "源码"
                        }
                    ]
                },
                {
                    "originalUrl": "https:\/\/www.zybuluo.com\/kiraSally\/note\/825758",
                    "commentsCount": 0,
                    "author": "黄志鹏kira",
                    "articleId": "111112",
                    "content": "写缓冲区还可以通过批处理的方式刷新写缓冲区，以及合并写缓冲区中对同一内存地址的多次写，减少对内存总线的占用",
                    "articleTitle": "并发番@Java内存模型&Volatile一文通（1.7版）",
                    "createdAt": "2017-07-24T02:53:13.006Z",
                    "updatedAt": "2018-03-27T03:18:35.528Z",
                    "tags": [
                        {
                            "title": "并发"
                        },
                        {
                            "title": "缓冲区"
                        }
                    ]
                }
            ]
        }
    )
});

// todo 新增修改

// 获取文章列表
apiRoutes.post('/website/article/listArticle', (req, res) => {
    res.json(
        {
            'respCode': 0,
            'respMsg': '成功',
            'data': {
                'total': 8,
                'pageSize': 5,
                'pageNo': 1,
                'articleList': [
                    {
                        'originalUrl': 'https://www.zybuluo.com/kiraSally/note/825758',
                        'counts': 0,
                        'author': '黄志鹏kira',
                        'id': '11111',
                        'content': 'Java线程间的通信由Java内存模型(JMM)控制，JMM决定一个线程对共享变量的写入Java线程间的通信由Java内存模型(JMM)控制，JMM决定一个线程对共享变量的写入何时对另一个线程可见',
                        'title': '集合番@LinkedHashSet一文通（1.7版）',
                        'createdAt': '2017-07-24T02:53:13.006Z',
                        'updatedAt': '2018-03-27T03:18:35.528Z',
                        'tags': [
                            {
                                'title': 'Java'
                            }
                        ]
                    }
                ]
            }
        }
    )
})

// 获取文章详情
apiRoutes.get('/website/article/getArticleDetail', (req, res) => {
    res.json(
        {
            'respCode': 0,
            'respMsg': '操作成功',
            'data': {
                'author': '黄志鹏kira',
                'id': '11111',
                'title': '并发番@AbstractQueuedSynchronizer一文',
                'isFavorite': 0,
                'content': '> * 1.7采用数组+链表的结构，即使哈希函数取得再好，也很难达到元素百分百均匀分布',
                'createdAt': '2017-07-24T02:53:13.006Z',
                'updatedAt': '2018-03-27T03:18:35.528Z',
                'tags': [
                    {
                        'title': '并发'
                    }
                ]
            }
        }
    )
})

// 获取文章分类列表
apiRoutes.get('/website/category/listCategory', (req, res) => {
    res.json(
        {
            'respCode': 0,
            'respMsg': '操作成功',
            'data': {
                'categoryList': [
                    {
                        'name': '并发番',
                        'articleCounts': 242,
                        'id': '111'
                    }
                ]

            }
        }
    )
})

// 获取文章评论列表 todo 待修改
apiRoutes.post('/website/comment/listArticleComments', (req, res) => {
    res.json(
        {
            'respCode': 0,
            'respMsg': '请求成功',
            'data': {
                'total': 30,
                'commentList': [
                    {
                        'c_user_name': '萌萌',
                        'c_id': '201801',
                        'c_user_id': '170201',
                        'c_content': '写的真好！值得学习',
                        'c_quote': '待补充：划线评论',
                        'createdCt': '2018-04-12 09:55:10',
                        'likes_count': 4,
                        'reply_list': [
                            {
                                'r_user_name': '小白菜',
                                'r_c_user_name': '萌萌',
                                'r_c_id': '201801',
                                'r_id': '180412',
                                'r_user_id': '180412',
                                'r_content': '我也是这么觉得的',
                                'createdRt': '2018-04-13 09:55:10'
                            }
                        ]
                    }
                ]
            }
        }
    )
})

// info
apiRoutes.get('/website/user/getAuthorInfo', (req, res) => {
    res.json(
        {
            'respCode': 0,
            'respMsg': '操作成功',
            'data': {
                'userName': 'kiraSally',
                'selfDescription': '正儿八经的Java攻城狮一枚，但因媳妇缘故而对前端兴趣浓厚 . 笔者原创文章统一使用CmdMarkdown编写，以分享形式展示，希望看官们多多指导',
                'community': [
                    {
                        'name': 'github',
                        'url': 'https://github.com/kiraGitHub'
                    }
                ]
            }
        }
    )
})

module.exports = apiRoutes;


