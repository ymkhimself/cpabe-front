$("#mainPage").on("click",function(){
    window.location="../index.html";
});

var str = "<table border='1' id='le2-main'><th>文件包</th><th>文件大小</th><th>文件类型</th><th>存储类型</th><th>最近更新</th><th>哈希</th>";
$.get("../data/cloudy.json", function (data) {
    for (var i = 0; i < data.length; i++) {
        str += "<tr><td>"
            + data[i].key + "</td><td>"
            + data[i].fsize + "B</td><td>"
            + data[i].mimeType + "</td><td>标准存储</td><td>"
            + data[i].putTime + "</td><td>"
            +data[i].hash+"</td></tr>";
    }
    str += "</table>";
    $("#le2").html(str);
}, "json");
