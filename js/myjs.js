/**
 * Created by Administrator on 2017/8/2.
 */
window.onload=function () {
    var cxs=document.getElementsByClassName('head_cx');
    var ggs=document.getElementsByClassName('head_gg');
    var cx_id=cxs[0];
    var gg_id=ggs[0];
    var cxss=document.getElementsByClassName('cuxiao');
    var ggss=document.getElementsByClassName('gonggao');
    var cx_div=cxss[0];
    var gg_div=ggss[0];
    cx_id.onmouseover=function () {
        cx_div.style.display='block';
        gg_div.style.display='none';
    }
    gg_id.onmouseover=function () {
        cx_div.style.display='none';
        gg_div.style.display='block';
    }
    // var list=document.getElementById('list');
    // var prev=document.getElementById('prev');
    // var next=document.getElementById('next');
    // function animate(offset) {
    //     var newLeft=parseInt(list.style.left)+offset;
    //     list.style.left=newLeft+'px';
    //     if(newLeft>-790){
    //         list.style.left=-6320+'px';
    //     }
    //     if(newLeft<-6320){
    //         list.style.left=-790+'px';
    //     }
    // }
    // //prev.onclick=function () { animate(790); }
    // //next.onclick=function () { animate(-790); }
    //
    // var buttons=document.getElementById('buttons').getElementsByTagName('span');
    // var index=1;
    // function buttonShow() {
    //     for(var i=0;i<buttons.length;i++){
    //         if(buttons[i].className=='on'){
    //             buttons[i].className='';
    //         }
    //     }
    //     buttons[index-1].className='on';
    // }
    //
    // prev.onclick=function () {
    //     index-=1;
    //     if(index<1){
    //         index=8;
    //     }
    //     buttonShow();
    //     animate(790);
    // }
    // next.onclick=function () {
    //     index+=1;
    //     if(index>8){
    //         index=1;
    //     }
    //     buttonShow();
    //     animate(-790);
    // }
    //
    // var timer;
    // function play() {
    //     timer=setInterval(function () {
    //         next.onclick()
    //     },1500)
    // }
    // var container=document.getElementById('container');
    // function stop() {
    //     clearInterval(timer);
    // }
    // container.onmouseover=stop;
    // container.onmouseout=play;
    //
    // for(var i=0;i<buttons.length;i++){
    //     /*buttons[i].onclick=function () {
    //         console(i);
    //         var clickIndex=parseInt(this.getAttribute('index'));
    //         var offset=790*(index-clickIndex);
    //         animate(offset);
    //         index=clickIndex;
    //         buttonShow();
    //     }*/
    //     (function (i) {
    //         buttons[i].onclick=function () {
    //             var clickIndex = parseInt(this.getAttribute('index'));
    //             var offset = 790 * (index - clickIndex);
    //             animate(offset);
    //             index = clickIndex;
    //             buttonShow();
    //         }
    //     })(i)
    // }
}
