// JavaScript Document
var curIndex = 0;
//时间间隔(单位毫秒)，每秒钟显示一张，数组共有3张图片放在img文件夹下
var timeInterval = 3000;
                        //定义一个存放照片位置的数组，可以放任意个，在这里放3个
var arr = new Array();
arr[0] = "../../img/1231.jpg";
arr[1] = "../../img/1232.jpg";
arr[2] = "../../img/123.jpg";
setInterval(changeImg, timeInterval);
function changeImg() {
	if (curIndex == arr.length - 1) {
		curIndex = 0;
	}
	else {
		curIndex += 1;
	}
	document.body.style.backgroundImage = "URL("+arr[curIndex]+")";  //显示对应的图片
}

function bigger(img){
	img.style.width = '360px';
 	img.style.height = '510px';
} 

function smaller(img){
 img.style.width = '300px';
 img.style.height = '425px';
}



