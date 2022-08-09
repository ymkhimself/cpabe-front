var myChart1 = echarts.init(document.getElementById('echart1'), 'dark');
var myChart2 = echarts.init(document.getElementById('echart2'), 'dark');
var myChart3 = echarts.init(document.getElementById('echart3'), 'dark');
var myChart4 = echarts.init(document.getElementById('echart4'), 'dark');
// ================================================
$("#m2-map").on("click", function () {
    window.location = "html/simulate.html";
});

// 路况时报
$.get("data/getUpload.json", function (data) {
    var obj = data[0];
    var obj2 = obj['data'];
    var str = "";
    for (var i = 0; i < obj2.length; i++) {
        str += "<div class='m1-main-k'><div class='m1-main-k-top'><p>"
            + obj2[i].time + "</p><p>"
            + obj2[i].area + " "
            + obj2[i].location + "</p></div><p>"
            + obj2[i].title + "</p><p class='content'>"
            + obj2[i].content + "</p><input type='button' value='详情' class='details'></div>";
    }

    $.get("data/getAsk.json", function (data2) {
        var obj3 = data2[0];
        var obj4 = obj3['data'];
        for (var i = 0; i < obj4.length; i++) {
            str += "<div class='m1-main-k'><div class='m1-main-k-top'><p>"
                + obj4[i].time + "</p><p>"
                + obj4[i].area + "</p></div><p>向 "
                + obj4[i].des_area + " "
                + obj4[i].des_location + " 发起 "
                + obj4[i].num + " 条路况请求</p></div>";
        }
        $("#m1-main").html(str);
    }, "json");

    setTimeout(function () {
        $(".details").on("click", function () {
            $(this).prev().removeClass("content");
            $(this).addClass("content");
        });
    }, 1000);

}, "json");



// 生成随机数
function randomNum(minNum, maxNum) {
    switch (arguments.length) {
        case 1:
            return parseInt(Math.random() * minNum + 1, 10);
            break;
        case 2:
            return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
            break;
        default:
            return 0;
            break;
    }
}
function funcTest() {
    //每隔3秒执行一次timelyFun方法
    window.setInterval("timelyFun()", 3000);
}
funcTest();

var option3Shu1 = new Array();
var option3Shu2 = new Array();
var option4Shu = new Array();
function timelyFun() {
    // =================================================================
    for (var j = 0; j < 4; j++) {
        option3Shu1[j] = randomNum(100, 200);
        option3Shu2[j] = randomNum(100, 200);
        option4Shu[j] = option3Shu1[j] + option3Shu2[j];
    }
    // console.log(option3Shu1,option3Shu2,option4Shu)
    var option1 = {
        backgroundColor: '#091D42',
        tooltip: {},
        legend: {},
        xAxis: {
            name: '安全域',
            nameLocation: 'middle',
            nameGap: 30,
            data: ['西湖区', '拱墅区', '临平区', '萧山区'],
        },
        yAxis: {
            name: '数量/个',
            type: 'value',
            axisTick: {
                alignWithLabel: true
            }
        },
        series: [
            {
                name: '请求数',
                type: 'bar',
                data: option3Shu1
            },
            {
                name: '共享数',
                type: 'bar',
                data: option3Shu2
            },
        ]
    };
    myChart1.setOption(option1);
    // ==============================================================
    var option2 = {
        backgroundColor: '#091D42',
        legend: {
            left: 'left'
        },
        series: [
            {
                type: 'pie',
                radius: '50%',
                data: [
                    { value: option4Shu[0], name: "西湖区" },
                    { value: option4Shu[1], name: "拱墅区" },
                    { value: option4Shu[2], name: "临平区" },
                    { value: option4Shu[3], name: "萧山区" },
                ],
            }
        ]
    };
    myChart2.setOption(option2);
    // ===================================================================================
    var option3 = {
        backgroundColor: '#091D42',
        tooltip: {},
        legend: {
            // y:'bottom'
        },
        xAxis: {
            name: '快速验证通过概率',
            nameLocation: 'middle',
            nameGap: 30,
            data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
            axisLabel: {
                formatter: '{value}%'
            },
            axisTick: {
                alignWithLabel: true
            }
        },
        yAxis: {
            name: '                 跨域密文转换时间/秒',
            type: 'value',
            nameGap:-5,
            axisTick: {
                alignWithLabel: true
            }
        },
        series: [
            // {
            //     name: 'ma-100',
            //     type: 'line',
            //     data: [35.06, 35.21, 35.36, 35.49, 35.66, 35.79, 35.01, 35.15, 35.29, 35.45]
            // },
            {
                name: 'wang-100',
                type: 'line',
                data: [28.83, 28.88, 28.35, 28.57, 28.37, 28.16, 28.93, 28.54, 28.73, 28.29]
            },
            {
                name: 'pan-100',
                type: 'line',
                data: [27.74, 27.11, 27.91, 27.82, 27.4, 27.24, 27.05, 27.32, 27.56, 27.84]
            },
            {
                name: 'our-100',
                type: 'line',
                data: [1.6, 2.36, 3.32, 4.61, 5.54, 6.5, 7.53, 8.1, 9.71, 10.45]
            },
            // {
            //     name: 'ma-200',
            //     type: 'line',
            //     data: [77.24, 77.38, 77.19, 77.6, 77.13, 77.85, 77.43, 77.91, 77.49, 77.1]
            // },
            {
                name: 'wang-200',
                type: 'line',
                data: [61.57, 61.43, 61.09, 61.15, 61.34, 61.28, 61.04, 61.23, 61.82, 61.76]
            },
            {
                name: 'pan-200',
                type: 'line',
                data: [59.82, 59.36, 59.42, 59.67, 59.03, 59.26, 59.47, 59.11, 59.82, 59.09]
            },
            {
                name: 'our-200',
                type: 'line',
                data: [2.4, 3.56, 5.75, 7.16, 9.12, 10.75, 12.12, 14.51, 17.02, 18.61]
            },
        ]
    };
    myChart3.setOption(option3);
    // ===========================================================================
    var option4 = {
        backgroundColor: '#091D42',
        tooltip: {},
        legend: {},
        xAxis: [
            {
                name: '密文数量',
                nameLocation: 'middle',
                nameGap: 30,
                data: [1,2,3,4,5,6,7,8,9,10],
                axisTick: {
                    alignWithLabel: true
                }
            },
    
        ],
        yAxis: {
            name: '                 密文处理时间/秒',
            nameGap: 25,
            type: 'value',
            axisTick: {
                alignWithLabel: true
            }
        },
        series: [
            {
                name: 'wang',
                type: 'line',
                data: [18.83,35.76,48.08,55.75,65.43,70.4,73.14,78.59,81.55,90.18]
            },
            {
                name: 'ma',
                type: 'line',
                data: [5.4,9.56,12.31,15.23,19.87,22.68,26.35,30.18,32.57,34.92]
            },
            {
                name: 'our',
                type: 'line',
                data: [1.52,1.91,2.21,2.35,2.54,2.76,2.98,3.33,4.47,4.8]
            }
        ]
    };
    myChart4.setOption(option4);
}

// 滚动实况

var div = document.querySelector('#m1-main');
setTimeout(fun, 1000);
//通过设置flg变量，配合三元表达式，实现文字向上滚动
var flg = true;
function fun() {
    if (div.scrollTop <= 0) flg = true;
    //当div.scrollTop的值大于等于700的时候，就重新赋值为0
    if (div.scrollTop >= 730) { flg = false; div.scrollTop = 0 }
    //+=3是控制向上移动的距离
    flg ? div.scrollTop += 3 : div.scrollTop += 3;
    console.log(div.scrollTop);
    //递归，隔330毫秒调用一次
    setTimeout(fun, 70);

}








