var tipuesearch = {"pages":[{"url":"./pages/about/","title":"About","text":"2016Fall 修課成員網誌","tags":"misc"},{"url":"./40423105-0112-dian-nao-fu-zhu-she-ji-ke-cheng-zong-jie.html","title":"40423105  01/12 電腦輔助設計課程總結","text":"上課筆記 9/22筆記 網址:http://chiamingyen.github.io/kmolab/blog/index.html 下載網址:140.130.17.17(只能在學校裡使用) 2016fall裡的檔案倒數兩個擇一下載(ana2016fall_os(3.0g)or mini2016fall.7z(98m)) 1.創2016fallcadp_hw 將README打勾 格式:python 加密:agpl 新增gh-pages分支 進入setting 點branches 將master變更為gh-pages 點update 2.git clone 2016fallcadp_hw cd 2016fallcadp_hw git branch git checkout gh-pages git branch(再次檢查) 3.創 學號.github.io 將README打勾 格式:python 加密:agpl 點選create new file 打入index.html 點commit new file 4.創 2016fallcadp_ag100(組別) 將README打勾 格式:python 加密:agpl 將2016fallcadp_ag100 clone下來 cd 2016fallcadp_ag100 git branch git checkout gh-pages git branch(再次檢查) 將自己的2016fallcadp_hw clone網址複製 git submodule add -b gh-pages 網址 學號 git staus(檢查) 依序將隊友的資料夾加入 git add -A git commit -m \"名稱\" git push origin gh-pages 完成 9/29筆記 1.radinsed半徑 2.diameter直徑 3.place放置 4.symmetrically對稱 5.lnitially開始 6.oriented定位 7.axes軸 8.indicated表示 9.respectively分別 10.parallel平行 11.extruding長出 12.automatically自動 13.coincident一模一樣 14.constraint約束 15.horizontal橫 16.perpendicular垂直 17.step圖(格式) 錄影工具:sharex 1.paths 2.task → screen recorder → options 開始錄製:shift+ print screen 射出成型軟體:moldex3d 簡報:shower.js 9/29作業 成品影片:https://vimeo.com/185029053 10/6筆記 proxy設定:proxy.mde.tw 通訊阜:3128 去聲音指令:ffmpeg.exe -i 檔名 -c copy -an out.mp4 字幕指令:ffmpeg.exe -i out.mp4 -vf subtitles=in.srt out2.mp4 安裝pelican指令:pip install pelican 9/29作業 畫圖 from 40423105 on Vimeo . 心得 : 這是我第一次用這個軟體 不過很快就抓到訣竅了. 10/27作業 心得:可以非常簡易的畫出四連桿運動的路線 Solvespace 四連桿圖檔: 40423105 w7.csv (請以滑鼠右鍵存檔) 40423105 w7.slvs (請以滑鼠右鍵存檔) 11/17四連桿機構作業 Solvespace 平面四連桿機構模擬 將所得到的點座標的.csv以Excel的畫圖，得到： 首先利用 Brython, 讀取 data 目錄中的 11117.csv 座標檔案, 然後以 splitlines() 及 split() 取出各點的 x 座標與 y 座標後, 將點連成路徑曲線如下: window.onload=function(){ brython(1); } from browser import document as doc from browser import html import math # 準備繪圖畫布 canvas = doc[\"fourbar\"] container1 = doc['container1'] ctx = canvas.getContext(\"2d\") fourbar_data = open(\"./../w7/11117.csv\").read() fourbar_list = fourbar_data.splitlines() #container1 <= fourbar_list[0] # 以下可以利用 ctx 物件進行畫圖 # 先畫一條直線 ctx.beginPath() # 設定線的寬度為 1 個單位 ctx.lineWidth = 1 # 利用 transform 將 y 座標反轉, 且 offset canvas.height # (X scale, X skew, Y skew, Y scale, X offset, Y offset) # 配合圖形位置進行座標轉換 ctx.transform(1, 0, 0, -1, canvas.width/2+250, canvas.height/2+100) # 畫出 x 與 y 座標線 # 各座標值放大 8 倍 ratio = 8 ''' ctx.moveTo(0, 0) ctx.lineTo(0, 100) ctx.moveTo(0, 0) ctx.lineTo(100, 0) ''' ctx.moveTo(0, 0) ctx.lineTo(-30*ratio, 0) start_point = fourbar_list[0].split(\",\") ctx.moveTo(float(start_point[0])*ratio, float(start_point[1])*ratio) count = 0 for data in fourbar_list[1:]: point = data.split(\",\") #count = count + 1 #container1 <= str(count) + \":\" + point[0] + \",\" + point[1] #container1 <= html.BR() ctx.lineTo(float(point[0])*ratio, float(point[1])*ratio) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" # 實際執行畫線 ctx.stroke() ctx.closePath() 11/24作業 Solvespace 1. Parts (零件繪製) 範例檔案: http://solvespace.com/bracket.pl An introductory tutorial is available, in which we draw the same part that is shown in the demo video. This covers most of the basic features of SolveSpace, including sketches, constraints, extrusions, and Boolean operations. When we first run SolveSpace, we will begin with an empty part. Initially, our view of the part will be oriented onto the XY plane; the label for that plane is displayed at the bottom left of the screen (#XY, in dark grey). The axes are also indicated by the three colored arrows at the bottom left; the X, Y, and Z axes are drawn in red, green, and blue respectively. When we hover the mouse over any entity, constraint, or other object in the sketch, that object will appear highlighted in yellow. For example, the XY plane, which is drawn as a dashed square, will appear highlighted when we hover the mouse over it. The YZ and ZX planes initially look like dashed lines, because they are being viewed on edge; but they still appear highlighted in yellow when we hold the mouse over them. It is similarly possible to highlight the X, Y, and Z axes (which are drawn as arrows), or the origin (which like all points is drawn as a green square). 翻譯 : 我們提供了一個介紹性教程，其中我們繪製演示視頻中顯示的相同部分。 這涵蓋了SolveSpace的大部分基本功能，包括草圖，約束，擠出和布爾運算。 當我們首次運行SolveSpace時，我們將從一個空的部分開始。最初，我們對零件的視圖將被定向到XY平面上;該平面的標籤顯示在屏幕的左下角（#XY，深灰色）。軸也由左下角的三個彩色箭頭指示; X，Y和Z軸分別繪製為紅色，綠色和藍色。 當我們將鼠標懸停在草圖中的任何實體，約束或其他對像上時，該對象將以黃色突出顯示。例如，當我們將鼠標懸停在其上時，繪製為虛線正方形的XY平面將突出顯示。 YZ和ZX平面最初看起來像虛線，因為它們被邊緣觀看;但是當我們把鼠標放在他們上面時，它們仍然顯示為黃色。同樣可以突出顯示X，Y和Z軸（以箭頭繪製）或原點（像所有點都繪製為綠色方塊）。 Extrude (平行長出或除料) STL 格式 範例:平行長出 STL 格式 範例:除料 Lathe (旋轉繞行長出或除料) Export Triangle Mesh STL 格式 three.js 2. Assembly (零件組立) 2016 11 25 22 30 17 286 from 40423105 on Vimeo . 3. Linkages (fourbar & multilink) (四連桿與多連桿運動模擬) 4. Compiled & API (編譯與延伸應用) 使用 Virtualbox 虛擬主機執行 Windows 64 位元與 Ubuntu 64 位元環境中的編譯與延伸應用. 12/1作業 Solvespace 組合圖 12/08作業 onshape 作業 2016 11 09 16 12 49 398 from 40423105 on Vimeo . 2016 11 15 23 26 57 93 from 40423105 on Vimeo . 2016 11 15 23 35 33 433 from 40423105 on Vimeo . 2016 11 15 23 41 14 468 from 40423105 on Vimeo . 2016 12 09 00 45 22 932 from 40423105 on Vimeo . 2016 12 17 12 58 04 557 from 40423105 on Vimeo . 12/20作業 範例3D列印機組裝影片 2016 12 16 23 31 08 688 from 40423105 on Vimeo . 自製3D列印機零件 支柱 連接桿 底盤 圓盤 自製3D列印機 自製3D列印機組裝影片 2016 12 17 00 12 01 145 from 40423105 on Vimeo . 12/27作業 3D列印機組裝影片 底座裝配 上蓋 支架 線位開關 噴頭 支撐桿 滑軌 噴頭 平面 顯示器 12/31作業 組裝影片","tags":"HW"},{"url":"./40423124-112-zui-hou-zong-jie.html","title":"40423124  1/12 最後總結","text":"第一週的零組件是比較簡單的，但是onshape比起soildwork真的是沒那麼好使用，尤其網路流量大的時候會有點卡卡的，但是也因為零件簡單，所以做起來不困難! HW W1 01 from 林濬翔 on Vimeo . 這個零件比起第一個，是差不多的等級，多畫一點圖，程式的使用上會比較上手! HW W1 02 from 林濬翔 on Vimeo . 突然發現在畫零件前，要先練習一下，因為有一些不熟的地方如果沒練過的話，講話會卡卡的，有點尷尬。 HW W1 03 from 林濬翔 on Vimeo . 用起來愈來愈上手了，遇到簡單的題目也是駕輕就熟！ HW W1 04 from 林濬翔 on Vimeo . 覺得在畫圖的時候，自己的桌面也是要稍微整理一下，才不會傷到觀看者的眼睛，不過題目可以朝下一個等級前進了呢！ HW W1 05 from 林濬翔 on Vimeo .","tags":"onshape HW"},{"url":"./40423124-1231-onshape-lian-gan-zu-zhuang-ying-pian.html","title":"40423124  12/31 onshape 連桿組裝影片","text":"組裝影片","tags":"onshape HW"},{"url":"./4042314-1227-onshape-3dlie-yin-ji-zuo-ye.html","title":"4042314 12/27 onshape 3D列印機作業","text":"3D列印機組裝影片 底座裝配 上蓋 支架 線位開關 噴頭 支撐桿 滑軌 平面 顯示器","tags":"onshape HW"},{"url":"./40423124-1220zuo-ye.html","title":"40423124 12/20作業","text":"範例3D列印機組裝影片 自製3D列印機零件 支柱 連接桿 底盤 圓盤 自製3D列印機","tags":"onshape HW"},{"url":"./40423124-onshapefen-zu-zuo-ye.html","title":"40423124 onshape分組作業","text":"","tags":"onshape HW"},{"url":"./40423124-121zuo-ye.html","title":"40423124 12/1作業","text":"40423124 12/1作業 Solvespace 組合圖","tags":"HW"},{"url":"./40423124-1124zuo-ye.html","title":"40423124 11/24作業","text":"40423124 11/24作業 Solvespace 1. Parts (零件繪製) 範例檔案: http://solvespace.com/bracket.pl An introductory tutorial is available, in which we draw the same part that is shown in the demo video. This covers most of the basic features of SolveSpace, including sketches, constraints, extrusions, and Boolean operations. When we first run SolveSpace, we will begin with an empty part. Initially, our view of the part will be oriented onto the XY plane; the label for that plane is displayed at the bottom left of the screen (#XY, in dark grey). The axes are also indicated by the three colored arrows at the bottom left; the X, Y, and Z axes are drawn in red, green, and blue respectively. When we hover the mouse over any entity, constraint, or other object in the sketch, that object will appear highlighted in yellow. For example, the XY plane, which is drawn as a dashed square, will appear highlighted when we hover the mouse over it. The YZ and ZX planes initially look like dashed lines, because they are being viewed on edge; but they still appear highlighted in yellow when we hold the mouse over them. It is similarly possible to highlight the X, Y, and Z axes (which are drawn as arrows), or the origin (which like all points is drawn as a green square). 翻譯 : 我們提供了一個介紹性教程，其中我們繪製演示視頻中顯示的相同部分。 這涵蓋了SolveSpace的大部分基本功能，包括草圖，約束，擠出和布爾運算。 當我們首次運行SolveSpace時，我們將從一個空的部分開始。最初，我們對零件的視圖將被定向到XY平面上;該平面的標籤顯示在屏幕的左下角（#XY，深灰色）。軸也由左下角的三個彩色箭頭指示; X，Y和Z軸分別繪製為紅色，綠色和藍色。 當我們將鼠標懸停在草圖中的任何實體，約束或其他對像上時，該對象將以黃色突出顯示。例如，當我們將鼠標懸停在其上時，繪製為虛線正方形的XY平面將突出顯示。 YZ和ZX平面最初看起來像虛線，因為它們被邊緣觀看;但是當我們把鼠標放在他們上面時，它們仍然顯示為黃色。同樣可以突出顯示X，Y和Z軸（以箭頭繪製）或原點（像所有點都繪製為綠色方塊）。 Extrude (平行長出或除料) STL 格式 範例:平行長出 STL 格式 範例:除料 Lathe (旋轉繞行長出或除料) Export Triangle Mesh STL 格式 three.js 2. Assembly (零件組立) 2016 11 25 22 30 17 286 from 40423124 on Vimeo . 3. Linkages (fourbar & multilink) (四連桿與多連桿運動模擬) 4. Compiled & API (編譯與延伸應用) 使用 Virtualbox 虛擬主機執行 Windows 64 位元與 Ubuntu 64 位元環境中的編譯與延伸應用.","tags":"HW"},{"url":"./40423124-si-lian-gan-ji-gou.html","title":"40423124 四連桿機構","text":"40423124 11/17作業 Solvespace 平面四連桿機構模擬 將所得到的點座標的.csv以Excel的畫圖，得到： 首先利用 Brython, 讀取 data 目錄中的 11117.csv 座標檔案, 然後以 splitlines() 及 split() 取出各點的 x 座標與 y 座標後, 將點連成路徑曲線如下: window.onload=function(){ brython(1); } from browser import document as doc from browser import html import math # 準備繪圖畫布 canvas = doc[\"fourbar\"] container1 = doc['container1'] ctx = canvas.getContext(\"2d\") fourbar_data = open(\"./../w7/11117.csv\").read() fourbar_list = fourbar_data.splitlines() #container1 <= fourbar_list[0] # 以下可以利用 ctx 物件進行畫圖 # 先畫一條直線 ctx.beginPath() # 設定線的寬度為 1 個單位 ctx.lineWidth = 1 # 利用 transform 將 y 座標反轉, 且 offset canvas.height # (X scale, X skew, Y skew, Y scale, X offset, Y offset) # 配合圖形位置進行座標轉換 ctx.transform(1, 0, 0, -1, canvas.width/2+250, canvas.height/2+100) # 畫出 x 與 y 座標線 # 各座標值放大 8 倍 ratio = 8 ''' ctx.moveTo(0, 0) ctx.lineTo(0, 100) ctx.moveTo(0, 0) ctx.lineTo(100, 0) ''' ctx.moveTo(0, 0) ctx.lineTo(-30*ratio, 0) start_point = fourbar_list[0].split(\",\") ctx.moveTo(float(start_point[0])*ratio, float(start_point[1])*ratio) count = 0 for data in fourbar_list[1:]: point = data.split(\",\") #count = count + 1 #container1 <= str(count) + \":\" + point[0] + \",\" + point[1] #container1 <= html.BR() ctx.lineTo(float(point[0])*ratio, float(point[1])*ratio) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" # 實際執行畫線 ctx.stroke() ctx.closePath()","tags":"HW"},{"url":"./40423124-1027zuo-ye.html","title":"40423124 10/27作業","text":"40423124 10/27作業 心得:可以輕易地畫出簡單的四連桿機構! Solvespace 四連桿圖檔: 40423124 w7.csv (請以滑鼠右鍵存檔) 40423124 w7.slvs (請以滑鼠右鍵存檔)","tags":"HW"},{"url":"./40423124-929zuo-ye.html","title":"40423124 9/29作業","text":"40423124 9/29作業","tags":"HW"},{"url":"./40423124-shang-ke-bi-ji.html","title":"40423124 上課筆記","text":"40423124 11/24上課筆記 9/22筆記 網址:http://chiamingyen.github.io/kmolab/blog/index.html 下載網址:140.130.17.17(只能在學校裡使用) 2016fall裡的檔案倒數兩個擇一下載(ana2016fall_os(3.0g)or mini2016fall.7z(98m)) 1.創2016fallcadp_hw 將README打勾 格式:python 加密:agpl 新增gh-pages分支 進入setting 點branches 將master變更為gh-pages 點update 2.git clone 2016fallcadp_hw cd 2016fallcadp_hw git branch git checkout gh-pages git branch(再次檢查) 3.創 學號.github.io 將README打勾 格式:python 加密:agpl 點選create new file 打入index.html 點commit new file 4.創 2016fallcadp_ag100(組別) 將README打勾 格式:python 加密:agpl 將2016fallcadp_ag100 clone下來 cd 2016fallcadp_ag100 git branch git checkout gh-pages git branch(再次檢查) 將自己的2016fallcadp_hw clone網址複製 git submodule add -b gh-pages 網址 學號 git staus(檢查) 依序將隊友的資料夾加入 git add -A git commit -m \"名稱\" git push origin gh-pages 完成 9/29筆記 1.radinsed半徑 2.diameter直徑 3.place放置 4.symmetrically對稱 5.lnitially開始 6.oriented定位 7.axes軸 8.indicated表示 9.respectively分別 10.parallel平行 11.extruding長出 12.automatically自動 13.coincident一模一樣 14.constraint約束 15.horizontal橫 16.perpendicular垂直 17.step圖(格式) 錄影工具:sharex 1.paths 2.task → screen recorder → options 開始錄製:shift+ print screen 射出成型軟體:moldex3d 簡報:shower.js 9/29作業 成品影片:https://vimeo.com/185029053 10/6筆記 proxy設定:proxy.mde.tw 通訊阜:3128 去聲音指令:ffmpeg.exe -i 檔名 -c copy -an out.mp4 字幕指令:ffmpeg.exe -i out.mp4 -vf subtitles=in.srt out2.mp4 安裝pelican指令:pip install pelican","tags":"上課筆記"},{"url":"./2016fall-ji-jie-she-ji-zhu-ti-jiao-xue.html","title":"2016Fall 機械設計主題教學","text":"知識管理與最佳化應用實驗室試圖利用計算機程式、網際內容管理、電腦輔助設計實習與協同產品設計實習等課程, 進行與機械設計相關的主題式教學, 其中包含強化創造力的教學、令學員熟習六種工程表達方式, 並且俱備融入協同設計所需要的四大面向知識與技能. 機械設計主題教學 創造力三元素, 機械設計的六種表達, 協同設計的四大面向. 強化創造能力 - 自學力、程式力與想像力 (Creative Competencies) 熟習六種表達 - 口語、文字、2D、3D、理論與實體表達 (Six Presentation Methods) 融入協同設計 - 電腦、網路、軟硬體工具與協同專案 (Collaborative Designs) 2016 Fall CADP A 分組網頁: 第1組 : 40223103 40223109 40423111 40443111 第2組 : 40423101 40423103 40423104 40423117 40423136 40423144 第3組 : 40423105 40423115 40423119 40423128 40423139 40423149 第4組 : 40423106 40423107 40423108 40423121 40423125 40423140 第5組 : 40423109 40423110 40423113 40423130 40423131 40423138 第6組 : 40423112 40423116 40423118 40423127 40423137 40423152 第7組 : 40423114 40423115 40423120 40423122 40423124 第8組 : 40423123 40423129 40423132 40423133 40423155 40423157 第9組 : 40423126 40423135 40423150 40423154 第10組 : 40423141 40423143 40423145 40423146 40423147 40423148 以下為分組資料處理程式: content = open(\"2016fall_cadp_a_groups.txt\").read() #print(content) result = content.splitlines() #print(result) gno = 1 for i in range(len(result)): #print(result[i]) group = result[i].split(\":\") #列出組序 print(\"<a href='../g\"+str(gno)+\"'>第\"+str(gno)+\"組</a>:<br />\") #print(\"第\"+str(gno)+\"組:<br />\") #取 group 第2成員, 用逗點隔開納入數列後, 利用[:-1]去掉最後空白 #print(group[1].split(\",\")[:-1]) gmember = group[1].split(\",\")[:-1] for j in range(len(gmember)): #print(gmember[j]) print(\"<a href='../g\"+str(gno)+\"/\"+str(gmember[j])+\"'>\"+ \\ str(gmember[j])+\"</a> \") print(\"<br />\") gno = gno + 1","tags":"Misc"}]};