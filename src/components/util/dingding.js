import * as dd from 'dingtalk-jsapi';
dd.ready(function () {
    
    var corpId = '??';
    //使用SDK 获取免登授权码
    dd.runtime.permission.requestAuthCode({
        corpId: corpId,
        onSuccess: function (result) {
            var code = result.code;
            sessionStorage.setItem('code',code)
            alert(code);
        }
    });
});

export default {
    dd
}