$("#mainPage").on("click", function () {
    window.location = "../index.html";
});

// status接口
$.get("http://192.168.154.128:8081/status", function (data) {
    $("#qukuai").text(data['latestBlock']);
    $("#tx").text(data['txCount']);
    $("#peer").text(data['peerCount']);
    $("#lian").text(data['chaincodeCount']);
}, "json");

// 节点名称
$.get("http://192.168.154.128:8081/peersStatus", function (data) {
    var obj = data['peers'];
    var str = "";
    for (var i = 0; i < data['peers'].length; i++) {
        str += "<p class='main1'>" + obj[i].requests + "</p>";
    }
    $("#jdmc-main").html(str);
}, "json");

//区块信息
$.get("http://192.168.154.128:8081/blockList/" + `from=${new Date("August 4, 2022 2:46 PM").toString()}&&to=${new Date().toString()}`, function (data) {
    var obj = data['rows'];
    var str = "";
    for (var i = 0; i < data['rows'].length; i++) {
        str += "<div class='block'><div class='blocks-top'><img src='../imgs/qukuai.svg'  class='blocks-tubiao'><p>" + "BLOCK " +
            obj[i].blocknum + "</p></div><div class='blocks-left'> <p>" + "Channel Name" +
            obj[i].channelname + "</p><p>Datahash:</p><p>" +
            obj[i].datahash + "</p></div><div class='blocks-right'><p>" + "Number of Tx：" +
            obj[i].txcount + "</p></div></div>"
    }
    $("#blocks").html(str);
}, "json");

// 饼图
$.get("http://192.168.154.128:8081/txByOrg", function (data) {
    var obj = data['rows'];
    var str = "";
    for (var i = 0; i < data['rows'].length; i++) {
        str += "{ value: " + obj[i].count + ", name: '" + obj[i].creator_msp_id + "' },";
    }
    // let msg=$.parseJSON(str);
    // console.log(typeof(msg));

    var myChart = echarts.init(document.getElementById('tx-tu'), 'dark');
    var option = {
        backgroundColor: '#091D42',
        legend: {
            orient: 'vertical',
            left: 'left'
        },
        series: [
            {
                type: 'pie',
                radius: '50%',
                data: [
                    { value: 3, name: obj[0].creator_msp_id },
                    { value: 3, name: obj[1].creator_msp_id },
                    { value: 3, name: obj[2].creator_msp_id },
                ],
            }
        ]
    }
    myChart.setOption(option);

}, "json");

//事务列表
$.get("http://192.168.154.128:8081/txList/" + `from=${new Date("August 4, 2022 2:46 PM").toString()}&&to=${new Date().toString()}`, function (data) {
    var obj = data['rows'];
    var str = "";
    for (var i = 0; i < obj.length; i++) {
        str += "<div class='qxt-p'><p id='name'>Creator："
            + obj[i].creator_msp_id + "</p><p>Chaincode："
            + obj[i].chaincodename + "</p><p>Channel Name："
            + obj[i].channelname + "</p><p>Type："
            + obj[i].type + "</p><p class='time'>Timestamp："
            + obj[i].createdt + "</p></div><p style='display:none'><br>"
            + obj[i].txhash + "</p><p class='time2'>details</p>";
    }
    $("#qxt-main").html(str);
    // console.log(obj);
}, "json");
setTimeout(function () {
    $(".time2").on("click", function () {
        var txId = $(this).prev().text(); //拼到后面
        $.get("http://192.168.154.128:8081/transaction/"+txId, function (data) {
            var obj = data['row'];
            var obj2 = data['row'].write_set[1].set[0];
            $("#txhash").text(obj.txhash);
            $("#validation_code").text(obj.validation_code);
            $("#payload_proposal_hash").text(obj.payload_proposal_hash);
            $("#creator_msp_id").text(obj.creator_msp_id);
            $("#endorser_msp_id").text(obj.endorser_msp_id);
            $("#chaincodename").text(obj.chaincodename);
            $("#type").text(obj.type);
            $("#createdt").text(obj.createdt);
            $("#key").text(obj2.key);
            $("#value").text(obj2.value);
        }, "json");
        $("#details").show();
        $("#close").on("click", function () {
            $("#details").hide();
        });
    });
}, 1000);

