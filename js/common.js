window.onload=function(){

    var context=document.getElementById('canvas1').getContext('2d');
    context.lineWidth=2;
    context.beginPath();
    context.strokeStyle ='#52F2F2';
    context.moveTo(0,1);
    context.lineTo(100,1);
    context.lineTo(105,10);
    context.lineTo(145,10);
    context.lineTo(150,20);
    context.lineTo(350,20);
    context.lineTo(355,10);
    context.lineTo(395,10);
    context.lineTo(400,1);
    context.lineTo(500,1);
    context.stroke();

    var context2=document.getElementById('canvas2').getContext('2d');
    context2.beginPath();
    context2.lineWidth=0.5;
    context2.strokeStyle ='#52F2F2';
    context2.moveTo(0,2);
    context2.lineTo(1260,2);
    context2.stroke();
};

// 下拉菜单
// 获取元素
var dropdownBox = document.getElementById('#dropdownBox');
var dropdown = document.getElementById('#dropdown');
var lis=document.getElementsByClassName('#dropdown li'); //获得li们
for (var i = 0; i < lis.length; i++) {
    // 绑定鼠标移过事件
    lis[i].onmouseover = function() {
        // 将小li的第二个孩子ul显示
        this.children[1].style.display = 'block';
    }
    lis[i].onmouseout = function() {
        this.children[1].style.display = 'none';
    }
}

$("#dropdownBox").on("click",function(){
    console.log('yessss')
    var dropdown = document.getElementById('#dropdown');
    $("#dropdown").css("display","block")
    // if(dropdown.style.display=="none"){
    //     $("#dropdown").css("display","block")
    // }
    // else{
    //     $("#dropdown").css("display","none")
    // }

})