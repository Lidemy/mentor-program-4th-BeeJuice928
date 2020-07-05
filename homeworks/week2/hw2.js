// 使用UpperCase函數
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// 使用ASCII碼值轉換
function capitalizeByASC2(str) {
	// 字首
	var firstChar = str.charAt(0) ;
	var chars = str.slice(1);	
	// 字首ASCII碼值 
	var firstASC2 = str.charCodeAt(0) ;
	// 若字首ASCII碼值在小寫區間( 97 ~ 122)則轉換
	if ( firstASC2 >= 97 && firstASC2 <= 122 ){
		// 大寫區間( 65 ~ 90 )。同字母值相差32
		firstChar =	String.fromCharCode(firstASC2 - 32);
	}
	return firstChar + chars ;
}

// 跟Java8 Lambda 表達式 感覺hen像
const capitalizeByES6 = str => str.charAt(0).toUpperCase() + str.slice(1) ;

console.log(capitalizeByES6('hello'));