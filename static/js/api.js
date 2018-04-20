const express = require('express');
const apiRoutes = express.Router();
const readFile = require('./file');


// personal-website
// home
// home 文章列表
// apiRoutes.get('/website/articlelist', (req,res) => {
//     res.json(
//         {
//             "respCode": "0000",
//             "respMsg": "成功",
//             "pageCount": 36,
//             "pagesize": 5,
//             "pageNo": 1,
//             "data":[
//                 {
//                     "originalUrl": "https:\/\/www.zybuluo.com\/kiraSally\/note\/825758",
//                     "commentsCount": 0,
//                     "author": "黄志鹏kira",
//                     "articleId": "11111",
//                     "content": "Java线程间的通信由Java内存模型(JMM)控制，JMM决定一个线程对共享变量的写入Java线程间的通信由Java内存模型(JMM)控制，JMM决定一个线程对共享变量的写入何时对另一个线程可见",
//                     "articleTitle": "集合番@LinkedHashSet一文通（1.7版）",
//                     "createdAt": "2017-07-24T02:53:13.006Z",
//                     "updatedAt": "2018-03-27T03:18:35.528Z",
//                     "tags": [
//                         {
//                             "title": "Java"
//                         },
//                         {
//                             "title": "源码"
//                         }
//                     ]
//                 },
//                 {
//                     "originalUrl": "https:\/\/www.zybuluo.com\/kiraSally\/note\/825758",
//                     "commentsCount": 0,
//                     "author": "黄志鹏kira",
//                     "articleId": "22222",
//                     "content": "写缓冲区还可以通过批处理的方式刷新写缓冲区，以及合并写缓冲区中对同一内存地址的多次写，减少对内存总线的占用",
//                     "articleTitle": "并发番@Java内存模型&Volatile一文通（1.7版）",
//                     "createdAt": "2017-07-24T02:53:13.006Z",
//                     "updatedAt": "2018-03-27T03:18:35.528Z",
//                     "tags": [
//                         {
//                             "title": "并发"
//                         },
//                         {
//                             "title": "缓冲区"
//                         }
//                     ]
//                 },
//                 {
//                     "originalUrl": "https:\/\/www.zybuluo.com\/kiraSally\/note\/825758",
//                     "commentsCount": 0,
//                     "author": "黄志鹏kira",
//                     "articleId": "3333",
//                     "content": "Java线程间的通信由Java内存模型(JMM)控制，JMM决定一个线程对共享变量的写入Java线程间的通信由Java内存模型(JMM)控制，JMM决定一个线程对共享变量的写入何时对另一个线程可见",
//                     "articleTitle": "集合番@LinkedHashSet一文通（1.7版）",
//                     "createdAt": "2017-07-24T02:53:13.006Z",
//                     "updatedAt": "2018-03-27T03:18:35.528Z",
//                     "tags": [
//                         {
//                             "title": "Java"
//                         },
//                         {
//                             "title": "源码"
//                         }
//                     ]
//                 },
//                 {
//                     "originalUrl": "https:\/\/www.zybuluo.com\/kiraSally\/note\/825758",
//                     "commentsCount": 0,
//                     "author": "黄志鹏kira",
//                     "articleId": "44444",
//                     "content": "写缓冲区还可以通过批处理的方式刷新写缓冲区，以及合并写缓冲区中对同一内存地址的多次写，减少对内存总线的占用",
//                     "articleTitle": "并发番@Java内存模型&Volatile一文通（1.7版）",
//                     "createdAt": "2017-07-24T02:53:13.006Z",
//                     "updatedAt": "2018-03-27T03:18:35.528Z",
//                     "tags": [
//                         {
//                             "title": "并发"
//                         },
//                         {
//                             "title": "缓冲区"
//                         }
//                     ]
//                 },
//                 {
//                     "originalUrl": "https:\/\/www.zybuluo.com\/kiraSally\/note\/825758",
//                     "commentsCount": 0,
//                     "author": "黄志鹏kira",
//                     "articleId": "55555",
//                     "content": "写缓冲区还可以通过批处理的方式刷新写缓冲区，以及合并写缓冲区中对同一内存地址的多次写，减少对内存总线的占用",
//                     "articleTitle": "并发番@Java内存模型&Volatile一文通（1.7版）",
//                     "createdAt": "2017-07-24T02:53:13.006Z",
//                     "updatedAt": "2018-03-27T03:18:35.528Z",
//                     "tags": [
//                         {
//                             "title": "并发"
//                         },
//                         {
//                             "title": "缓冲区"
//                         }
//                     ]
//                 }
//             ]
//         }
//     )
// });
// // home 作者信息
// apiRoutes.get('/website/authorinfo', (req,res) => {
//     res.json(
//         {
//             "respCode": "0000",
//             "respMsg": "操作成功",
//             "author":"黄志鹏kira",
//             "selfDescription":"正儿八经的Java攻城狮一枚，但因媳妇缘故而对前端兴趣浓厚 . 笔者原创文章统一使用CmdMarkdown编写，以分享形式展示，希望看官们多多指导",
//             "community":[
//                 {
//                     "name":"github",
//                     "url":"https://github.com/kiraGitHub"
//                 },
//                 {
//                     "name":"zhihu",
//                     "url":"https://www.zhihu.com/people/kira-49-60/activities"
//                 }
//             ]
//         }
//     )
// });
// // home 文章分类
// apiRoutes.get('/website/cataloglist', (req,res) => {
//     res.json(
//         {
//             "respCode": "0000",
//             "respMsg": "操作成功",
//             "data":[
//                 {
//                     "name":"并发番",
//                     "count": 242,
//                     "id": 1111
//                 },
//                 {
//                     "name":"集合番",
//                     "count": 5,
//                     "id": 2222
//                 },
//                 {
//                     "name":"基础番",
//                     "count": 123,
//                     "id": 3333
//                 }
//             ]
//         }
//     )
// });
//
// // article
// // article 文章详情
// apiRoutes.get('/website/articledetail', (req,res) => {
//     readFile.readFile(function(err,data){
//         if (err) {
//             console.error(err);
//         }
//
//         res.json(
//             {
//                 "respCode": "0000",
//                 "respMsg": "操作成功",
//                 "author": "黄志鹏kira",
//                 "articleId": "1111",
//                 "articleTitle": "并发番@AbstractQueuedSynchronizer一文",
//                 "isFavorite": 1,
//                 "content": data,
//                 "createdAt": "2017-07-24T02:53:13.006Z",
//                 "updatedAt": "2018-03-27T03:18:35.528Z",
//                 "tags": [
//                     {
//                         "title": "并发"
//                     },
//                     {
//                         "title": "缓冲区"
//                     }
//                 ]
//             }
//         )
//     });
//
// });
// // article 文章评论
// apiRoutes.get('/website/articlecomments', (req,res) => {
//     res.json(
//         {
//             "respMsg": "请求成功",
//             "total": 30,
//             "data": [
//                 {
//                     "c_user_name": "萌萌",
//                     "c_id": "201801",
//                     "c_user_id": "170201",
//                     "c_content": "写的真好！值得学习",
//                     "c_quote":"待补充：划线评论",
//                     "createdCt":"2018-04-12 09:55:10",
//                     "likes_count": 1,
//                     "reply_list":[
//                         {
//                             "r_user_name":"小白菜",
//                             "r_c_user_name":"萌萌",
//                             "r_c_id": "201801",
//                             "r_id":"180412",
//                             "r_user_id":"180412",
//                             "r_content":"我也是这么觉得的",
//                             "createdRt":"2018-04-13 09:55:10"
//                         },
//                         {
//                             "r_user_name":"1111小白菜",
//                             "r_c_user_name":"萌萌",
//                             "r_c_id": "201801",
//                             "r_id":"180412",
//                             "r_user_id":"180412",
//                             "r_content":"我也是这么觉得的",
//                             "createdRt":"2018-04-13 09:55:10"
//                         }
//                     ]
//                 },
//                 {
//                     "c_user_name": "补贴喵",
//                     "c_id": "201802",
//                     "c_user_id": "170202",
//                     "c_content": "老哥稳，lam表达式了解了一些.... ",
//                     "c_quote":"待补充：划线评论",
//                     "createdCt":"2018-04-12 09:55:10",
//                     "likes_count": 0,
//                     "reply_list":[
//                         {
//                             "r_user_name":"小白菜",
//                             "r_c_user_name":"补贴喵",
//                             "r_c_id": "201802",
//                             "r_id":"180412",
//                             "r_user_id":"180412",
//                             "r_content":"我也是这么觉得的",
//                             "createdRt":"2018-04-13 09:55:10"
//                         }
//                     ]
//                 },
//                 {
//                     "c_user_name": "TingKing",
//                     "c_id": "201803",
//                     "c_user_id": "170202",
//                     "c_content": "底层原理就是hashmap",
//                     "c_quote":"待补充：划线评论",
//                     "createdCt":"2018-04-12 09:55:10",
//                     "likes_count": 4,
//                     "reply_list":[
//                         {
//                             "r_user_name":"黄志鹏Kira",
//                             "r_c_user_name":"TingKing",
//                             "r_c_id": "201803",
//                             "r_id":"180412",
//                             "r_user_id":"180412",
//                             "r_content":"是的，还是key的非重复性",
//                             "createdRt":"2018-04-13 09:55:10"
//                         }
//                     ]
//                 }
//             ]
//         }
//     )
// });
// // article 文章评论提交
// apiRoutes.post('/website/doComment', (req,res) => {
//     res.json(
//         {
//             "respCode": "0000",
//             "respMsg": "请求成功"
//         }
//     )
// });
//
// // about 留言列表
// apiRoutes.get('/website/messagelist', (req,res) => {
//     res.json(
//         {
//             "respMsg": "请求成功",
//             "total": 30,
//             "data": [
//                 {
//                     "c_user_name": "萌萌",
//                     "c_id": "201801",
//                     "c_user_id": "170201",
//                     "c_content": "写的真好！值得学习",
//                     "c_quote":"待补充：划线评论",
//                     "createdCt":"2018-04-12 09:55:10",
//                     "likes_count": 4,
//                     "reply_list":[
//                         {
//                             "r_user_name":"小白菜",
//                             "r_c_user_name":"萌萌",
//                             "r_c_id": "201801",
//                             "r_id":"180412",
//                             "r_user_id":"180412",
//                             "r_content":"我也是这么觉得的",
//                             "createdRt":"2018-04-13 09:55:10"
//                         }
//                     ]
//                 }
//             ]
//         }
//     )
// });
//
// //catalog
// // home 分类文章李彪
// apiRoutes.post('/website/catalogarticlelist', (req,res) => {
//     res.json(
//         {
//             "respCode": "0000",
//             "respMsg": "成功",
//             "pageCount": 28,
//             "pagesize": 5,
//             "pageNo": 1,
//             "catalogId": "1111",
//             "catalogName": "并发番",
//             "data":[
//                 {
//                     "originalUrl": "https:\/\/www.zybuluo.com\/kiraSally\/note\/825758",
//                     "commentsCount": 0,
//                     "author": "黄志鹏kira",
//                     "articleId": "11111",
//                     "content": "Java线程间的通信由Java内存模型(JMM)控制，JMM决定一个线程对共享变量的写入Java线程间的通信由Java内存模型(JMM)控制，JMM决定一个线程对共享变量的写入何时对另一个线程可见",
//                     "articleTitle": "并发番@LinkedHashSet一文通（1.7版）",
//                     "createdAt": "2017-07-24T02:53:13.006Z",
//                     "updatedAt": "2018-03-27T03:18:35.528Z",
//                     "tags": [
//                         {
//                             "title": "Java"
//                         },
//                         {
//                             "title": "源码"
//                         }
//                     ]
//                 },
//                 {
//                     "originalUrl": "https:\/\/www.zybuluo.com\/kiraSally\/note\/825758",
//                     "commentsCount": 0,
//                     "author": "黄志鹏kira",
//                     "articleId": "111112",
//                     "content": "写缓冲区还可以通过批处理的方式刷新写缓冲区，以及合并写缓冲区中对同一内存地址的多次写，减少对内存总线的占用",
//                     "articleTitle": "并发番@Java内存模型&Volatile一文通（1.7版）",
//                     "createdAt": "2017-07-24T02:53:13.006Z",
//                     "updatedAt": "2018-03-27T03:18:35.528Z",
//                     "tags": [
//                         {
//                             "title": "并发"
//                         },
//                         {
//                             "title": "缓冲区"
//                         }
//                     ]
//                 }
//             ]
//         }
//     )
// });
// todo

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


