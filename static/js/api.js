const express = require('express');
const apiRoutes = express.Router();
const readFile = require('./file');

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

// 获取文章评论列表
apiRoutes.post('/website/comment/listArticleComments', (req, res) => {
    res.json(
        {
            "respCode": 0,
            "respMsg": "请求成功",
            "data": {
                "total": 30,
                "commentList": [
                    {
                        "id": "111",
                        "userId": "222",
                        "userName": "萌萌",
                        "content": "写的真好！值得学习",
                        "createdAt": "2018-04-12 09:55:10",
                        "likeCounts": 4,
                        "replyList": [
                            {
                                "fromReplyId": "小白菜",
                                "replyType": "小白菜",
                                "fromUserId": "小白菜",
                                "fromUserName": "小白菜",
                                "toUserId": "萌萌",
                                "toUserName": "201801",
                                "createdAt": "2018-04-13 09:55:10",
                                "content": "我也是这么觉得的"
                            }
                        ]
                    }
                ]
            }
        }
    )
})

//新增文章评论
apiRoutes.post('/website/comment/addComment', (req, res) => {
    res.json(
        {
            "respCode": 0,
            "respMsg": "请求成功"
        }
    )
})
// 作者
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

//新增评论回复
apiRoutes.post('/website/reply/addReply', (req, res) => {
    res.json(
        {
            "respCode": 0,
            "respMsg": "请求成功"
        }
    )
})


module.exports = apiRoutes;


