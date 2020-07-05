``` js
function isValid(arr) {
  for(var i=0; i<arr.length; i++) {
    if (arr[i] <= 0) return 'invalid'
  }
  for(var i=2; i<arr.length; i++) {
    if (arr[i] !== arr[i-1] + arr[i-2]) return 'invalid'
  }
  return 'valid'
}

isValid([3, 5, 8, 13, 22, 35])
```

## 執行流程
* 載入後執行 Function isValid 並傳入參數陣列  
* 開始執行宣告方法 isValid：  
	* 執行 Line 2. (第一個 for 迴圈) =>  
			初始化變數 i = 0  
			進入迴圈條件為 : 當變數 i < arr.length (陣列長)時  
		* 執行Line 3. (符合上述條件) =>  
			判斷陣列 index = i 的元素值。是否 <= 0  
			是，則回傳 'invalid' ，並結束方法 isValid。  
			否，則另 i＝ i＋1，並返回Line2重新判斷是否執行迴圈  
		* 本案例執行如下：  
			Line 2： i＝0、arr.length＝6、i < arr.length == true ( 進入迴圈 )  
			Line 3： arr [ 0 ] ( 3 ) <= 0  ==  false、 i＝ i＋1( 1 )  
			Line 2： i＝1、arr.length＝6、i < arr.length == true ( 進入迴圈 )  
			Line 3： arr [ 1 ] ( 5 ) <= 0   ==  false、 i＝ i＋1( 2 )  
			Line 2： i＝2、arr.length＝6、i < arr.length == true ( 進入迴圈 )  
			Line 3： arr [ 2 ] ( 8 ) <= 0  ==  false、 i＝ i＋1( 3 )  
			Line 2： i＝3、arr.length＝6、i < arr.length == true ( 進入迴圈 )  
			Line 3： arr [ 3 ] ( 13 ) <= 0  ==  false、 i＝ i＋1( 4 )  
			Line 2： i＝4、arr.length＝6、i < arr.length == true ( 進入迴圈 )  
			Line 3： arr [ 4 ] ( 22 ) <= 0  ==  false、 i＝ i＋1( 5 )  
			Line 2： i＝5、arr.length＝6、i < arr.length == true ( 進入迴圈 )  
			Line 3： arr [ 5 ] ( 35 ) <= 0  ==  false、 i＝ i＋1( 6 )  
			Line 2： i＝6、arr.length＝6、i < arr.length == false ( 結束迴圈 )  
	* 執行 Line 5. (第二個 for 迴圈) =>  
			初始化變數 i = 2  
			進入迴圈條件為 : 當變數 i < arr.length (陣列長)時  
		* 執行Line 6. (符合上述條件) =>  
			當陣列  index = i 的元素值**不等於** 陣列  index = i-1 的元素值與陣列 index = i-2 的元素值加總時回傳 'invalid' ，並結束方法 isValid。  
			否則另 i＝ i＋1，並返回Line5重新判斷是否執行迴圈  
		* 本案例執行如下：  
			Line 5： i＝2、arr.length＝6、i < arr.length == true ( 進入迴圈 )  
			Line 6： arr [ 2 ] ( 8 ) = arr [ 1 ] ( 5 ) + arr [ 0 ] ( 3 )  ==  true、 i＝ i＋1( 3 )  
			Line 5： i＝3、arr.length＝6、i < arr.length == true ( 進入迴圈 )  
			Line 6： arr [ 3 ] ( 13 ) = arr [ 2 ] ( 8 ) + arr [ 1 ] ( 5 )  ==  true、 i＝ i＋1( 4 )  
			Line 5： i＝4、arr.length＝6、i < arr.length == true ( 進入迴圈 )  
			Line 6： arr [ 4 ] ( 22 ) = arr [ 3 ] ( 13 ) + arr [ 2 ] ( 8 )  ==  false ( 回傳 'invalid' ，並結束方法 isValid )  
