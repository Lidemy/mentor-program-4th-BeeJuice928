## 請解釋後端與前端的差異。

**前端 (Front-end)**
所見即所得，冰山的一角
頁面打開後精美的排版、字型，體感極佳的互動效果這些都算是前端的範疇

**後端 (Back-end)**
默默付出，冰山的底下
連結設定，資料撈取，邏輯判斷，背後User看不到的皆可歸屬後端。

![](https://i.imgur.com/ELBB3w6.png)

## 假設我今天去 Google 首頁搜尋框打上：JavaScript 並且按下 Enter，請說出從這一刻開始到我看到搜尋結果為止發生在背後的事情。
1. 使用者透過翻譯(Browser)詢問 DNS Server。google.com(地名)的住址(IP)怎麼去
2. 取得住址(IP)後，連線至對應主機(Google家)
3. 管家(Controller)前來回應，並邀請至大廳(首頁)
4. 使用者透過翻譯(Browser)詢問管家(Controller)，可以跟你要一點JavaScript嗎? // 發出Request
5. 管家(Controller)隨後向廚師(Service)要求提供一點JavaScript
6. 廚師(Service)查看冰箱(DataBase)有沒有材料(Datas)
7. 廚師(Service)將一點JavaScript(Datas)傳遞給管家(Controller)
8. 管家(Controller)將一點JavaScript(Datas)及餐具(View)傳給翻譯(Browser)    // 回傳Response
9. 翻譯(Browser)擺盤後(渲染)，把餐盤(渲染後的資料及畫面)給使用者

![](https://i.imgur.com/UU07Ncs.png)

## 請列舉出 3 個「課程沒有提到」的 command line 指令並且說明功用

**history：可列舉出曾經輸入的指令**

```sh
$ history 
```

**kill：結束指定程序**
```sh
$ kill -9 PID				// 強制立即終止指定程序 
```

**find：尋找檔案**
```sh
$ find . -name this.txt			  // 尋找指定檔案
$ find ./ -name "*.*" -mtime -1   // 尋找今日異動之檔案
```