/**
 * Created by Administrator on 2017/8/4.
 */
function leftTimer(year,month,day,hour,minute,second){
    var leftTime = (new Date(year,month-1,day,hour,minute,second)) - (new Date()); //计算剩余的毫秒数
    var days = parseInt(leftTime / 1000 / 60 / 60 / 24 , 10); //计算剩余的天数
    var hours = parseInt(leftTime / 1000 / 60 / 60 % 24 , 10); //计算剩余的小时
    var minutes = parseInt(leftTime / 1000 / 60 % 60, 10);//计算剩余的分钟
    var seconds = parseInt(leftTime / 1000 % 60, 10);//计算剩余的秒数
    days = checkTime(days);
    hours = checkTime(hours);
    minutes = checkTime(minutes);
    seconds = checkTime(seconds);
    setInterval("leftTimer(2017,8,17,23,59,59)",1000);
    document.getElementById('hour').innerHTML=hours;
    document.getElementById('minute').innerHTML=minutes;
    document.getElementById('seconds').innerHTML=seconds;
}
function checkTime(i){ //将0-9的数字前面加上0，例1变为01
    if(i<10)
    {
        i = "0" + i;
    }
    return i;
}
leftTimer(2017,8,17,23,59,59);
