# Q&A

## 目前支持的版本有哪些
1.16.40+的大部分主流版本
## 为什么不直接支持win10版，而去支持bds呢
1. 因为作者不是专门学习win32反编译的，写这东西只是兴趣爱好，没有能力对UWP应用进行hook工作
2. 而且bds也适合多人游戏，也有现成的hook工具，不用重复造轮子
3. 客户端hook容易产生作弊

## 手机版能用吗
对于手机版，插件不能直接支持本地游戏，但是你可以自己组个云服务器在上面跑服务端并加载插件即可，或者加入安装了插件的多人游戏服务器
## 教程看不懂咋办
？
## 为什么不每个版本都支持呢
BDS的符号表每个版本都有区别，而且mojang随时可能更改相关类的数据结构，每个版本都支持工作量太大，推荐适合BE版的版本切换工具

## 加载后服务器闪退
1. 请尝试使用管理员权限运行dll注入器
2. 请检查BDS版本和插件版本是否对上
3. 在[这里](https://github.com/hhhxiao/TrapDoor/issues)提出你的问题
## 输入指令后显示指令未配置
请检查配置文件是否加载正确，如果加载失败服务器后台会有英文提示
## 为什么1.16.4之后的版本显示效果不好，部分CUI看不见
这是mojang更换了新的渲染引擎的缘故，导致粒子渲染出了问题,不是开发者的锅
## 为什么不支持XX功能
请去[这里](https://github.com/hhhxiao/TrapDoor/issues)页面提问



