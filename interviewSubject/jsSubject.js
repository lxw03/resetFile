//高精度运算
function preciseAdd(num1,num2){
	var len1;
	var len2;
	if(num1.toString().indexOf('.')!=-1){
		len1=num1.toString().split('.')[1].length;
	}else{
		len1=0;
	}
	if(num2.toString().indexOf('.')!=-1){
		len2=num2.toString().split('.')[1].length;
	}else{
		len2=0;
	}
	var len=Math.max(len1,len2);
	var m=Math.pow(10,len);
	return (num1*m+num2*m)/m;
}

function preciseSub(num1,num2){
	var len1;
	var len2;
	if(num1.toString().indexOf('.')!=-1){
		len1=num1.toString().split('.')[1].length;
	}else{
		len1=0;
	}
	if(num2.toString().indexOf('.')!=-1){
		len2=num2.toString().split('.')[1].length;
	}else{
		len2=0;
	}
	var len=Math.max(len1,len2);
	var m=Math.pow(10,len);
	return (num1*m-num2*m)/m;
}

function preciseMul(num1,num2){
	var len1;
	var len2;
	if(num1.toString().indexOf('.')!=-1){
		len1=num1.toString().split('.')[1].length;
	}else{
		len1=0;
	}
	if(num2.toString().indexOf('.')!=-1){
		len2=num2.toString().split('.')[1].length;
	}else{
		len2=0;
	}
	var len=len1+len2;
	num1=Number(num1.toString().replace('.',""));
	num2=Number(num2.toString().replace('.',""));	
	return (num1*num2)/Math.pow(10,len);
}

function preciseDiv(num1,num2){
	var len1;
	var len2;
	if(num1.toString().indexOf('.')!=-1){
		len1=num1.toString().split('.')[1].length;
	}else{
		len1=0;
	}
	if(num2.toString().indexOf('.')!=-1){
		len2=num2.toString().split('.')[1].length;
	}else{
		len2=0;
	}
	var len=len2-len1;
	num1=Number(num1.toString().replace('.',""));
	num2=Number(num2.toString().replace('.',""));	
	return (num1/num2)*Math.pow(10,len);
}
//千位分隔符
function num(num){
	if(typeof num!='number'){
		return;
	}
	num+='';
	if(num.indexOf('-')==0){
		return '-'+numChange(num.slice(1));
	}
	if(num.indexOf('.')!=-1){
		return numChange(num.split('.')[0])+'.'+num.split('.')[1];
	}else{
		return numChange(num);
	}
}
function numChange(num){
	var l=num.length;
	var newNum='';
	while(l>3){
		newNum=','+num.substring(l-3,l)+newNum;
		l=l-3;
	}
	newNum=num.substring(0,l)+newNum;
	return newNum;
}
//扩展对象方法
function cloneObj(oldObj) { //复制对象方法
	if (typeof(oldObj) != 'object') return oldObj;
	if (oldObj == null) return oldObj;
	var newObj = new Object();
	for (var i in oldObj)
		newObj[i] = cloneObj(oldObj[i]);
	return newObj;
};
function extendObj() { //扩展对象
	var args = arguments;
	if (args.length < 2) return;
var temp = cloneObj(args[0]); //调用复制对象方法
for (var n = 1; n < args.length; n++) {
	for (var i in args[n]) {
		temp[i] = args[n][i];
	}
}
return temp;
}
//快速排序
function quickSort(arr,left,right){
	if(left<right){
		var key=arr[left];
		var low=left;
		var high=right;

		while(low<high){
			while(low<high&&arr[high]>key){
				high--;
			}
			arr[low]=arr[high];
			while(low<high&&arr[low]<key){
				low++;
			}
			arr[high]=arr[low];
		}
		arr[low]=key;
		arguments.callee(arr,left,low-1);
		arguments.callee(arr,low+1,right);
	}
}
//希尔排序
function shellSort(){
	vararr=[49,38,65,97,76,13,27,49,55,04],
	len=arr.length;
	for(varfraction=Math.floor(len/2);fraction>0;fraction=Math.floor(fraction/2)){
		for(vari=fraction;i<len;i++){
			for(varj=i-fraction;j>=0&&arr[j]>arr[fraction+j];j-=fraction){
				vartemp=arr[j];
				arr[j]=arr[fraction+j];
				arr[fraction+j]=temp;
			}
		}
	}
	console.log(arr);
}
//树的遍历
/*递归*/
//先序
function preTraversal(node){
	if(node){
		console.log(node.value);
		arguments.callee(node.left);
		arguments.callee(node.right);
	}
}
//中序
function orderTraversal(node){
	if(node){
		arguments.callee(node.left);
		console.log(node.value);
		arguments.callee(node.right);
	}
}
//后序
function postTraversal(node){
	if(node){
		arguments.callee(node.left);
		arguments.callee(node.right);
		console.log(node.value);
	}
}
/*非递归*/
function preTraversalN(node){
	var stack=[];
	if(node){
		stack.push(node);
		while(stack.length!=0){
			node=stack.pop();
			console.log(node.value);
			if(node.right){
				stack.push(node.right);
			}
			if(node.left){
				stack.push(node.left);
			}
		}
	}else{
		console.log("Empty Tree!")
	}
}
function orderTraversalN(node){
	var stack=[];
	while(stack.length!=0||node){
		if(node){
			stack.push(node);
			node=node.left;
		}else{
			node=stack.pop();
			console.log(node.value);
			node=node.right;
		}
	}
}
function postTraversalN(node){
	var stack=[];
	if(node){
		stack.push(node);
		while(stack.length!=0){
			var tmp=stack[stack.length-1];
			if(tmp.left&&node!=tmp.left&&node!=tmp.right){
				stack.push(tmp.left);
			}else if(tmp.right&&node!=tmp.right){
				stack.push(tmp.right);
			}else{
				console.log(stack.pop().value);
				node=tmp;
			}
		}
	}
}
//判断重复字符串个数
function countChar(str) {
	var count={};
	str.split('')
	.reduce(function(pre,cur){
		pre[cur] ? pre[cur]++:pre[cur]=1;
		return pre;
	},count);
	return count;
}
//去除数组重复字符
function unique(arr){
	var unique={};
	var uniqueArr=new Array();
	arr.forEach(function(item,index,array){
		if(!unique[item]){
			unique[item]=item;
			uniqueArr.push(item);
		}
	})
	return uniqueArr;
}
//十六进制随机颜色生成
function color(){
	var value=["1","2","3","4","5","6","7","8","9","0","a","b","c","d","e","f"];
	var color='#';
	for(var i=0;i<6;i++){
		color+=value[Math.round(Math.random()*15)];
	}
	return color;
}
//①生成一个数组，数组的值为从0到100
function newArr(){
	var arr=new Array(100);
	return arr.fill('temp').map(function(item,index,array){
		return index;
	})
}
//随机打乱一个数组的顺序
function randomArr(arr){
	var temp='';
	var index='';
	for(var i=0;i<arr.length;i++){
		temp=arr[i];
		do{
			index=Math.round(Math.random()*arr.length);
		}while(index>=arr.length)
		arr[i]=arr[index];
		arr[index]=temp;
	}
}
//二分查找
function halfFind(value,arr){
	var low=0;
	var high=arr.length-1;

	while(low<high){
		var min=Math.round((high-low)/2);
		if(value==arr[min]){
			return true;
		}else if(value>arr[min]){
			low=min+1;
		}else{
			high=min-1;
		}
	}
	return false;
}
//