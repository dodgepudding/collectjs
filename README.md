Collectjs
=========
这是一个收藏夹javascript书签采集器简易模型，提供类似于花瓣等图藏网站的一键式采集工具。

使用说明
-------
主要文件：  
collect.js 核心运行代码，这里包含所有页面DOM的预处理程序，包括获取当前页面采集地址或采集内容，生成基于iframe的弹出对话框。  
css/collect.css 这是弹出框的样式文件，基于bootstrap的dialog样式，可以修改成你喜欢的dialog样式  
index.html 收藏夹代码生成示例，提供放进收藏夹的collect.js调用初始化代码。  

代码修改说明：  
此程序只是一个代码示例，大部分函数、变量及样式标签均以`demo_`前缀标识，请在实际项目中使用全文替换修改成你的项目前缀，
这样做的目的是为了避免与其他页面程序的命名空间冲突。  

collect.js需配置几个常量参数：  
* tagprefix 项目前缀标识  
* shareurl 对话框指向的iframe目标页面地址，此处url实际运行时将在地址末端传入当前访问的网站地址，可以根据你的需求传入更多参数  
* stylecss 弹出对话框css样式地址  
* dialogtitle 对话框标题文字  
* dialogwidth 对话框宽度  
* dialogheight 对话框高度  

index.html收藏夹代码修改：
将`demo_`前缀改成你的项目前缀  
`b.src='http://127.0.0.1/~admin/collectjs/collect.js?'`中的collect.js的js地址修改成实际文件的绝对地址   

