(function () {
   // 判断是否登陆
   //  var login_token = cookieUtil.get('login_token');
   //  if (login_token == '') {
   //      // location.href = '/login/getlogincode.htm?callback='+ encodeURIComponent(location.href);
   //      userUtil.checkLogin(location.href);
   //  }


    var cardItems,cardSelected,hidemobileid,cmccscore,score,cardid,code,countdown,mobileOperators;
    var cardnumber = 1;
    var login_token = '9f3d9bf5-8e53-42f6-98ae-19bfd2117776';

    var amount =60;
    //短信60s倒计时
    function CountDown() {
        $("#sendcode").attr("disabled", true);
        $("#sendcode").text(amount+"秒后重新发送");
        if (amount == 0) {
            $("#sendcode").removeAttr("disabled");
            $("#sendcode").text("发送验证码");
            clearInterval(countdown);
        }
        amount--;
    }
    //手机运营商判断
    var isChinaMobile = /^134[*]\*{4}\d{4}$|^(?:13[5-9]|147|15[0-27-9]|178|18[2-478])|198\*{4}\d{4}$/; //移动
    var isChinaUnion = /^(?:13[0-2]|145|15[56]|176|18[56]|166)\*{4}\d{4}$/; //联通
    var isChinaTelcom = /^(?:133|153|177|18[019]|199)\*{4}\d{4}$/; //电信
    var isOtherTelphone = /^170\*{4}\d{4}$/;//其他运营商
    var utils = {
        checkMobile: function(telphone){
            telphone = telphone.trim(telphone);
            if(telphone.length !== 11){
                return this.setReturnJson(false, '未检测到正确的手机号码');
            }
            else{
                if(isChinaMobile.test(telphone)){
                    return this.setReturnJson(true, '中国移动', {name: 'ChinaMobile'});
                }
                else if(isChinaUnion.test(telphone)){
                    return this.setReturnJson(true, '中国联通', {name: 'ChinaUnion'});
                }
                else if(isChinaTelcom.test(telphone)){
                    return this.setReturnJson(true, '中国电信', {name: 'ChinaTelcom'});
                }
                else if(isOtherTelphone.test(telphone)){
                    var num = isOtherTelphone.exec(telphone);
                    return this.setReturnJson(true, '', {name: ''});
                }
                else{
                    return this.setReturnJson(false, '未检测到正确的手机号码');
                }
            }
        },
        setReturnJson: function(status, msg, data){
            if(typeof status !== 'boolean' && typeof status !== 'number'){
                status = false;
            }
            if(typeof msg !== 'string'){
                msg = '';
            }
            return {
                'status': status,
                'msg': msg,
                'data': data
            };
        }
    };


    //获取权益卡列表
    ajaxUtil.loadData({
        type: 'post',
        url: '/pointgate/equityecard/list',
        params: {
            login_token: login_token
        },
        onSuccess: function (data) {
            cardItems = data.cards;
            for(var i = 0;i < cardItems.length;i++){
                //todo:图片地址待更改
                var html = $('<li class="card-item" data-spm="'+ (i + 1 ) +'"><img src="../img/ex_card' + cardItems[i].cardid + '.png"></li>');
                // var html = $('<li class="card-item" cardid="c' + items[i].cardid+'" score="s'+ items[i].score+'" cardname="'+items[i].cardname+'" data-spm="'+ (i + 1 ) +'"><img src="img/ex_card' + (j+1) + '.png"></li>');

                $(".card-items ul").append(html)
            }
            $($(".card-item")[0]).addClass("on");
            hidemobileid = data.hidemobileid;
            cmccscore = data.cmccscore;
            cardSelected = cardItems[0];
            cardname = cardSelected.cardname;
            cardid = cardSelected.cardid;
            score = cardSelected.score;

            $("#consumeScore").text(score);
            $("#ycScore").text(cmccscore);
            mobileOperators = utils.checkMobile(hidemobileid).msg;
        },
        onError: function () {
            mobileOperators = '';
        }
    });

    //什么是权益卡
    var $headElm = $(".v-navbar");
    $headElm.prepend('<a href="javascript:;" class="navigate-help nav-help"></a>');
    if(browserUtil.weixin){
        var $contentElm = $(".content");
        $contentElm.prepend('<a href="javascript:;" class="navwx-help nav-help"></a>');
    }
    if(browserUtil.jfmore){
        $(".navigate-share").remove();
    }
    $(".nav-help").click(function () {
        mui.alert('畅由权益卡是专为移动兑分用户推出的权益服务，您可以使用兑入的移动积分兑换不同的权益卡，获得相应的畅由权益<div>青铜权益卡： 含100分畅由积分+超值权益券<br>黄金权益卡： 含500分畅由积分+超值权益券<br>铂金权益卡： 含1000分畅由积分+超值权益券<br>钻石权益卡： 含2000分畅由积分+超值权益券</div>', '什么是畅由权益卡', '确定',null,'div');
        $(".mui-popup").addClass("help");
    });

    //选择权益卡
    $("body").on("click",".card-item",function () {
        $("#confirm").removeAttr("disabled");
        $(".card-item").removeClass("on");
        $(this).addClass("on");
        // score = $(this).attr("score").split("s")[1];
        var i = $(this).index();
        console.log(cardItems[i]);
        cardSelected = cardItems[i];
        score = cardSelected.score;
        cardname = cardSelected.cardname;
        $("#consumeScore").text(score);

        //重置输入框数值
        // $("#cardCount").val(1);
        mui(".mui-numbox").numbox().setValue(1)
        // $("#cardDecrease").css({"opacity":.4});
    });
    $(".card-item").click(function () {
        //spm
        spm.push(['_trackEvent','113','click']);
    });

    //增减权益卡数量
    $(".wrapper-count .btn").click(function () {
        var count = $("#cardCount").val() ? parseInt($("#cardCount").val()) : '';
        var btnType = $(this).attr("id");
        if(btnType == "cardDecrease"){
            if(count == ''){
                return
            }
            if(count == 1){
                return
            }
            if(count == 2){
                $(this).css({"opacity":.4});
            }
            cardnumber = count - 1;
        }
        if(btnType == "cardAdd"){
            cardnumber = count + 1;
            $("#confirm").removeAttr("disabled");
            if(cardnumber == 1){
                $("#cardDecrease").css({"opacity":.4});
            }else{
                $("#cardDecrease").css({"opacity":1});
            }
        }
        $("#cardCount").val(cardnumber);
        $("#consumeScore").text(cardnumber * score);
        sessionStorage.setItem('login.callback', location.origin + '/event/2017/withyou_history.html');
    });

    //监听输入框数值变化
    // $("#cardCount").bind("input propertychange change",function(){
    //     $(this).val($(this).val().slice(0,5));
    //     cardnumber = $(this).val();
    //     if(cardnumber.length == 1){ //输入个位数
    //         cardnumber = cardnumber.replace(/[^1-9]/g,'');
    //         $(this).val(cardnumber);
    //         if(cardnumber == 0) {
    //             $(this).val('')
    //         }
    //         if(cardnumber == 1){
    //             $("#cardDecrease").css({"opacity":.4})
    //         }
    //     }else{
    //         cardnumber = cardnumber.replace(/\D/g,'');
    //         $(this).val(cardnumber);
    //         if(cardnumber == 1){
    //             $("#cardDecrease").css({"opacity":.4})
    //         }else{
    //             $("#cardDecrease").css({"opacity":1})
    //         }
    //     }
    //
    //     if(cardnumber == 0){
    //         $("#cardDecrease").css({"opacity":.4});
    //         $("#confirm").attr("disabled",true)
    //     }else {
    //         $("#confirm").removeAttr("disabled");
    //     }
    //     $("#consumeScore").text(cardnumber * score);
    // });
    $("#cardCount").bind("input propertychange change",function(){
        $(this).val($(this).val().slice(0,5));
        cardnumber = $(this).val();
        if(cardnumber.length == 1){ //输入个位数
            cardnumber = cardnumber.replace(/[^1-9]/g,'');
            $(this).val(cardnumber);
            if(cardnumber == 0 || cardnumber == ''){
                $("#confirm").attr("disabled",true)
            }else {
                $("#confirm").removeAttr("disabled");
            }
        }
        $("#consumeScore").text(cardnumber * score);
    });
    $("#cardCount").blur(function(){
        cardnumber = $(this).val();
        $("#consumeScore").text(cardnumber * score);
    });

    //点击确定兑换按钮
    $("#confirm").click(function () {
        //清空动画
        clearInterval(countdown);

        cardid = cardSelected.cardid;
        console.log(cardid);
        console.log(cardnumber);
        var ycScore = parseInt($("#ycScore").text());
        var consumeScore = parseInt($("#consumeScore").text());
        if(ycScore < consumeScore){ //移动畅由积分不足
            mui.confirm('当前移动积分不足<br>请先至积分管家兑入您的中国移动积分', ' ', ['关闭','确定'], function (e) {
                if(e.index == 1){
                    //去兑换
                    setTimeout('location.href = "/butler/index.htm"',300);
                    // location.href = "/butler/index.htm";
                }
            },'div');
            $(".mui-popup").addClass("notenough");
        }else{
            mui.prompt(mobileOperators + '手机号： ' + hidemobileid ,' ','请输入短信验证码',['取消','确定'],function (e) {
                //todo:add
                // $(".footer").css({"position":"fixed"});
                $(".footer").css({"opacity":"1"});
                clearInterval(countdown);
                //todo:add取消
                if(e.index == 0){
                    $('.mui-popup-input input').blur();
                }
                //确定
                if(e.index == 1){
                    document.activeElement.blur();
                    //兑换积分
                    code = $(".mui-popup.code input").val();
                    if (!/\d{4}/.test(code && code.trim())) {
                        setTimeout(function () {
                            mui.toast('请输入正确的验证码', { duration: '1000', type: 'div' });
                        }, 50);
                        return false;
                    }
                    ajaxUtil.loadData({
                        type: 'post',
                        url: '/pointgate/equityecard/exchange',
                        params: {
                            login_token: login_token,
                            cardid: cardid,
                            num: cardnumber,
                            code: code
                        },
                        onSuccess: function (data) {
                            // 兑换成功
                            if(data.respCode == '0000'){
                                sessionStorage.setItem('exchangedCard', cardname);
                                location.href = "/rightsInterest/success.html";
                            }
                        },
                        onError: function (data) {
                            if(!data.respCode){
                                mui.toast('输入短信验证码错误，请重新获取', { duration: '1000', type: 'div' });
                                return false;
                            }
                            //积分不足
                            if(data.respCode == '0002'){
                                mui.alert('兑换失败，请重新兑换', '  ', '确定',null,'div');
                                $(".mui-popup").addClass("error");
                                return false;
                            }
                            //验证码不一致
                            if(data.respCode == '0003'){
                                mui.toast('输入短信验证码错误，请重新获取', { duration: '1000', type: 'div' });
                                return false;
                            }
                        }
                    });
                }
            },'div');
            $(".mui-popup").addClass("code");
            //spm
            var html = '<button type="button" class="input-r" id="sendcode" data-spm="119">获取验证码</button>';
            $('.mui-popup-input input').after(html);
            $('.mui-popup-input input').blur();
            // $('.mui-popup-input input').attr('maxlength',6);
        }
    });

    //发送验证码
    $("body").on("click","#sendcode",function () {
        ajaxUtil.loadData({
            type: 'post',
            url: '/pointgate/equityecard/sendcode',
            params: {
                login_token: login_token
            },
            onSuccess: function (data) {
                amount = 60;
                countdown = setInterval(CountDown, 1000);
                mui.toast('验证码发送成功',{ duration:'1', type:'div' });
            },
            onError: function (data) {
                mui.alert(data.msg, '  ', '确定');
            }
        });
    });

    //验证码输入框聚焦
    $("body").on("focus",".mui-popup.code input",function () {
        //todo:add
        $(".footer").css({"opacity":"0"});
        // $(".footer").css({"position":"relative"});
    });
})();