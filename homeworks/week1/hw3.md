## 教你朋友 CLI

## 什麼是CLI

>CLI，文字指令行介面(Command Line Interface)。透過文字指令使電腦進行動作
>GUI，圖形化使用者介面(Graphical User Interface)。透過圖形介面下達指令

## CLI 輸入介面
**Windows**
	Win + R → CMD → enter
**Linux**
	應用程式 → 附屬應用程式 → 終端機

## 提示字元(Prompt)
**Windows ：＞**

**Linux 、 Mac：＄**


## 常用指令

### 1. 檔案位置異動與控制

**ls :** 查看目錄及檔案清單
```sh
$ ls      // 列出基本清單
$ ls -l   // 列出詳細清單
$ ls -al  // 列出詳細清單含隱藏檔案
```

**pwd : 目前所在位置（Print Work Directory）**

**cd：瞬移（Change Directory）**
```sh
$ cd ~		// 到家目錄
$ cd /		// 到根目錄
$ cd ..		// 回上一層
$ cd /home/user/tomcat/webapps  // 到指定絕對路徑
$ cd ./myWeb  // 到相對路徑
$ cd ../webapps2 // 回上一層同時到相對路徑
```

**mkdir：創建新資料夾（Make Directory）**
```sh
$ mkdir newFile
```

**touch：新增檔案 | 更改文件時間**
```sh
$ touch test.txt  // 若不存在則新增，反則更新文件時間
```

**cp ：複製大法（CoPy）**
```sh
$ cp server.xml server.xml.bak // 複製server.xml 同時改名成 server.xml.bak
$ cp server.xml /home/user/tomcat9    // 將server.xml 複製到指定位置
```

**mv：乾坤大挪移｜貍貓換太子（MoVe）**
```sh
$ mv server.xml /home/user/tomcat9  // 移動至指定位置
$ mv server.xml server_bak.xml      // 重新命名
```

**rm ： 一去不復返（ReMove）**
```sh
$ rm this.txt this2.tx this3.txt	   // 刪除下列文件
$ rm -f this.txt  					  // 強制刪除且不會提示
$ rm -r thisDir						  // 遞迴刪除，整個文件夾和裏頭所有文件
```

### 2. 網路狀態相關
以下三種皆用以檢查遠端連線（防火牆是否開通）
**nc**
```sh
$ nc –zvw3 [IP] [Port]            // ex. $ nc -zvw3 140.82.112.4 22
```

**nmap**
```sh
$ nmap [IP] -p [Port]             // ex. $ nmap 140.82.112.4 -p 22
```

**telnet**
```sh
$ telnet [IP] [Port]            // ex. $ telnet 140.82.112.4 22
```

**netstat**
```sh
$ netstat -ap | grep [Port]     // 查看Port被哪隻程序佔用中
```

### 3. txt / log 查閱

**cat：**
```sh
$ cat catalina.log
```

**tail**
```sh
$ tail -f catalina.log    		// 以跟隨模式觀看log
```

**less**
```sh
$ less catalina.log 			// Shift + F 進入跟隨模式，Ctrl + C 離開
```

**more**
```sh
$ more catalina.log				// 以換頁模式觀看
```

### 4.檔案權限控制
**檔案權限計算**
| 符號 | 說明   | 得分 |
| :--: | :----: | :--: |
|  r   | 可讀   |   4  |
|  w   | 可寫   |   2  |
|  x   | 可執行 |   1  |

```sh
$ drwxr-xr-- 10 user user       236  6月 10 11:25 tomcat    // 範例A
$ -rwxr-xr-x 1 user user       219 11月  1  2019  log.txt   // 範例B
```

| 範例 | 類型 |    owner   |   group    |  others  | 得分 |
| :--: | :--: | :--------: | :------:   |  :----:  | :--: |
|  A   | 目錄 | 可讀寫執行 | 可讀執行   | 可讀     |  751 |
|  B   | 檔案 | 可讀寫執行 | 可讀執行   | 可讀執行 |  755 |

**chown：更改擁有者（CHangeOWNer）**
```
$ chown -R tomcat  /home/tomcat/tomcat9         
```

**chown：更改群組（CHangeGRouP）**
```
$ chgrp -R tomcat  /home/tomcat/tomcat9       
```

**chmod：更改權限（CHangeGRouP）**
> a = all 、 u = owner 、 g = group 、 o = others
```
$ chmod 777 .bashrc    //  等同 $ chmod a=rwx .bashrc 
$ chmod 771 log.txt    //  等同 $ chmod ug=rwx,o=x file  
$ chmod +x  ./startsh  //  等同 $ chmod a+x./startsh 
```

### 5. 其他補充

**>：重新導向**
```sh
$ tail -n 100 catalina.out > result.log	
```

**| : pipe，可將獨立的程序串連執行**
```sh
$ -ps -ef | grep 'tomcat'
```

**crontab：排程**
```sh
$ crontab -l 					// 查看排程
$ crontab -e 					// 編輯排程
$ crontab -r 					// 刪除所有排程
```

**tar：檔案打包**
> 如果覺得tar包打包完後仍就太大，可於以下指令加上-z參數
> 檔案類型從.tar 變更為 .tar.gz 或是 .tgz
```sh
$ tar -cvf src.tar src/		    // 將目錄src打包成src.tar
$ tar -xvf mpi.tar				// 將tar包原地解放
$ tar -xvf src.tar -C /home/user/tomcat/webapps  // 將tar包解開至指定路徑
$ tar -tvf src.tar				// 查看tar包內容
$ tar -rvf src.tar test.txt		// 將檔案加入現有tar包
$ tar -xvf src.tar "test.txt"	// 解放tar包中指定檔案
```

### 6. Vim 常用指令
| ESC | 指令 |      用途說明             |
| :-: | :--: | :-----------------------  |
|  *  |      | 取消指令或退出編輯模式    |
|  *  | i    | 再游標處進入編輯模式      |
|  *  | o    | 向下一行並進入編輯模式    |
|  *  | G    | 移動到最後一行進行讀取    |
|  *  | w    | 存檔 （ w! 強制存檔）　　 | 
|  *  | q    | 退出 （ q! 強制退出）　　 |

### 救救h0w哥
豪廢窩，可以自己googleㄇ?(欸)
```sh
1. $ cd /d 				// 垃圾東西盡量放d槽
2. $ mkdir wifi			// 新建 wifi 資料夾
3. $ cd /mkdir			// 進入 wifi 資料夾
4. $ touch afu.js		// 新增 afu.js
5. $ ls -l				// 確認已新增完畢
6. $ exit				// 離開終端機
```
