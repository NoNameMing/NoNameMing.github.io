// 指定日期
var day = document.querySelector(".day")
var hour = document.querySelector(".hour");
var minute = document.querySelector(".minute");
var second = document.querySelector(".second");
//获取截止时间的时间戳（单位毫秒）

// macOS适配版
var inputTime = +new Date("2023/06/06 22:27:00");

//先调用countDown函数，可以避免在打开界面后停一秒后才开始倒计时
countDown();
//定时器 每隔一秒变化一次
setInterval(countDown, 1000);

function fireWork() {
    window.location.href="index_firework.html";
}