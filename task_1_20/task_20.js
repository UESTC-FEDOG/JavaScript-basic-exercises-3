window.onload=function(){
var data = []
 //从用户输入中获取数据并验证，向data中增加一条数据
function addData(){
	var input = document.getElementById('input');
	var text = input.value;
	//验证内容
	if(text != ""){
		if(!/^\n\r\s、，, 0-9A-Za-z\u4e00-\u9fa5/){
			alert('请输入10-100的整数！');
			input.focus();
			text = '';
			return;
			};
		}else {
		alert('请输入内容！！！');
		input.focus();
		return;
	}
	//验证长度
	if(data.length >= 10){
		alert('太多啦，不能超过六十个！');
		input.focus();
		return false;
	}
	return text;
}
// 渲染图表
function renderChart(){
	var chart = document.getElementById('chart');
	var content ="";
	for(var i = 0; i < data.length; i++){
	 content  += '<div>'+data[i]+'</div>'
	}
	chart.innerHTML = content;
	console.log(data);
}
// 从左进入
function leftIn(){
	var chart = document.getElementById('chart');
	var number = addData().split(/[\s\r\n,，、]+/);
	for(var i=0;i<number.length;i++){
		if(!number[i]==''){
			var newDiv = document.createElement('div');
			newDiv.innerHTML=number[i];
			chart.insertBefore(newDiv,chart.firstChild);

		}
	}
}
//从左出去
function leftOut(){
	if(data.length == 0 ){
		alert('没有东西可以移出了');
		return false;
	}else{
		alert(''+data.shift()+'');
		renderChart();
	}
}
	//向后插入函数
function insertAfter(newElement, targetElement){
	var parent = targetElement.parentNode; 
	if(parent.lastChild == targetElement){
		parent.appendChild(newElement);
	} else{
		parent.insertBefore(newElement, targetElement.nextSibling);
	}
}
//从右进入
function rightIn(){
	var chart = document.getElementById('chart');
	var number = addData().split(/[\s\r\n,，、]+/);
	for(var i=0;i<number.length;i++){
		if(!number[i]==''){
			var newDiv = document.createElement('div');
			newDiv.innerHTML=number[i];
			insertAfter(newDiv,chart.lastChild);

		}
	}
}
//从右出去
function rightOut(){
	if(data.length == 0 ){
		alert('没有东西可以移出了');
		return false;
	}else{
		alert(''+data.pop()+'');
		renderChart();
	}	
}
//搜索
function  search(){
	var mySearch = document.getElementById('mySearch').value;
	var reg = new RegExp(mySearch);
	var arr = document.getElementsByTagName('div');
		for(var i=0;i<arr.length;i++){
			data[i]=arr[i].innerHTML;
		}
		for(var i=0; i<data.length;i++){
			if(reg.test(data[i])){
				arr[i].style.background="blue";
			}else{
				arr[i].style.background='red';
			}
		}
		console.log(data);
}

//绑定按钮
function initBtnEvent(){
	var left_In = document.getElementById('left-in');
	var left_Out = document.getElementById('left-out');
	var right_In = document.getElementById('right-in');
	var right_Out = document.getElementById('right-out');
	var search_Data = document.getElementById('search');

	left_In.onclick = function(){leftIn();};
	left_Out.onclick = function(){leftOut();};
	right_In.onclick = function(){rightIn();};
	right_Out.onclick = function(){rightOut();};
	search_Data.onclick = function(){search();};


}
 //初始化
 renderChart();
initBtnEvent();
}
