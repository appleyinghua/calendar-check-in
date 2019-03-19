var headData = ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'];
var table = document.createElement('table');
var div = document.querySelector('.wrapper');
function setInnerText(element, text) {
    if (typeof element.textContent == "undefined") {
        // 当类型是undefined 说明这个属性不支持
        element.innerText = text;
    } else {
        element.textContent = text;
    }
};
function tableHead(table,headData) {
    div.appendChild(table);
    table.width = '500px';
    table.cellSpacing = 0;
    var thead = document.createElement('thead');
    table.appendChild(thead);
    var tr = document.createElement('tr');
    thead.appendChild(tr);
    tr.style.height = '50px';
    headData.forEach(function (item) {
        var th = document.createElement('th');
        tr.appendChild(th);
        setInnerText(th,item);
    })
    return table;
};
tableHead(table,headData);
//获取本月天数
var d = new Date(2019,3,0);
var days = d.getDate();
//判断本月第一天是星期几
var dd = new Date(2019,2,1);
var num = headData[dd.getDay()];
//当前月的天数与第一天是星期几的数值相加除以7就是需要的行数
var total_num =Math.ceil((days + headData.indexOf(num) -1)/7)+1;
function tableBody(table,headData,total_number,days) {
    var tbody = document.createElement('tbody');
    table.appendChild(tbody);
    for(var i = 0;i< total_num;i++) {
        var tr = document.createElement('tr');
        tbody.appendChild(tr);
        for(var j =0;j<7;j++){
            var td = document.createElement('td');
            tr.appendChild(td);
        }
    }
    var tds = document.querySelectorAll('td');
    for(var i =0;i< days;i++) {
        setInnerText(tds[headData.indexOf(num)+i],i+1);
    }
};
tableBody(table,headData,total_num,days);
var btn = document.createElement('button');
div.appendChild(btn);
setInnerText(btn,'签到');
btn.onclick = function () {
    var day = new Date().getDate();
    var table = document.querySelector('table');
    var tds = table.querySelectorAll('td');
    if(tds[headData.indexOf(num)-1 + day].style.backgroundColor === 'lightgreen') {
        alert('你已经签到过了');
    }
    tds[headData.indexOf(num)-1 + day].style.backgroundColor = 'lightgreen';
}