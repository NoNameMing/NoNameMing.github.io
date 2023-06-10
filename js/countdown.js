    // 指定日期
    var day = document.querySelector(".day")
    var hour = document.querySelector(".hour");
    var minute = document.querySelector(".minute");
    var second = document.querySelector(".second");
    //获取截止时间的时间戳（单位毫秒）

    // macOS适配版
    var inputTime = +new Date("2023/06/11 00:00:00");

    //先调用countDown函数，可以避免在打开界面后停一秒后才开始倒计时
    countDown();
    //定时器 每隔一秒变化一次
    setInterval(countDown, 1000);
    
function countDown() {
    //获取当前时间的时间戳（单位毫秒）
    var nowTime = +new Date();
    //把剩余时间毫秒数转化为秒
    var times = (inputTime - nowTime) / 1000;

    // 如果已到时间，不再显示倒计时
    if (times < 0) {
        //显示
        document.getElementById("textzone2").style.visibility="";
        //隐藏
        document.getElementById("textzone").style.visibility="hidden";
        // 跳转烟花页面
        window.location.href="index_firework.html";

    } else {
        //显示
        document.getElementById("textzone2").style.visibility="hidden";
        //隐藏
        document.getElementById("textzone").style.visibility="";
        // 计算天数
        var d = Math.trunc(parseInt(inputTime - nowTime) / (1000 * 3600 * 24));
        //如果天数小于 10，要变成 0 + 数字的形式 赋值给盒子
        day.innerHTML = d < 10 ? "0" + d : d;
        //计算小时数 转化为整数
        var h = parseInt(times / 60 / 60 % 24);
        //如果小时数小于 10，要变成 0 + 数字的形式 赋值给盒子
        hour.innerHTML = h < 10 ? "0" + h : h;
        //计算分钟数 转化为整数
        var m = parseInt(times / 60 % 60);
        //如果分钟数小于 10，要变成 0 + 数字的形式 赋值给盒子
        minute.innerHTML = m < 10 ? "0" + m : m;
        //计算描述 转化为整数
        var s = parseInt(times % 60);
        //如果秒钟数小于 10，要变成 0 + 数字的形式 赋值给盒子
        second.innerHTML = s < 10 ? "0" + s : s;
    } 

}
