## 交作業流程
1.**下載專案至本地機**
```sh
$ git clone https://github.com/Lidemy/mentor-program-4th-你的帳號.git
```

2.**創立作業用分支（這個很重要）**

```sh
$ git branch week01
```

3.**至作業用分支開始編寫作業**

```sh
$ git checkout week01　　-- 轉跳至指定branch
$ git branch -- 可確認目前所處的branch
```

4.**作業撰寫完成後**
>如有新增檔案務必加入暫存區
```sh
$ git add .
```

>確認並全部完成後進行送交
```sh
$ git commit -am 'week01 homework'
```

5.**確認commit無誤後，同步回遠端**

```sh
$ git push origin week01
```
>以下指令可查詢遠端資料庫名稱
```sh
$ git remote -v
```

6.**至GitHub上針對該次branch進行Pull Request **
7.**複製PR連結，到[教學系統](https://learning.lidemy.com/)新增作業**

---

### 作業批改完成後，再進行以下操作
1.**切換回master並進行同步**
```sh
$ git checkout master -- 切換至master
$ git branch  -- 確認已於master
$ git pull origin master -- 同步遠端master至本機
```

2.**刪除作業用branch**
```sh
$ git branch -d week01
```

---
### 作業繳交完成