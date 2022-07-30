(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{465:function(e,t,v){"use strict";v.r(t);var a=v(59),_=Object(a.a)({},(function(){var e=this,t=e.$createElement,v=e._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("h1",{attrs:{id:"功能介绍"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#功能介绍"}},[e._v("#")]),e._v(" 功能介绍")]),e._v(" "),v("h2",{attrs:{id:"说明"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#说明"}},[e._v("#")]),e._v(" 说明")]),e._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),v("p",[e._v("以下基本说明和原版指令完全相同，熟悉原版指令的可以不看")])]),e._v(" "),v("p",[e._v("在以下的所有指令说明中，")]),e._v(" "),v("ul",[v("li",[v("code",[e._v("<>")]),e._v("表示必填参数")]),e._v(" "),v("li",[v("code",[e._v("<a|b|c>")]),e._v("表示子命令"),v("code",[e._v("a,b,c")]),e._v("任选一个")]),e._v(" "),v("li",[v("code",[e._v("<name:type>")]),e._v("表示必填参数，"),v("code",[e._v("name")]),e._v("表示该选项的含义，"),v("code",[e._v("type")]),e._v("表示该选项的类型，和原版相同")]),e._v(" "),v("li",[v("code",[e._v("[name:type]")]),e._v("表示选填参数，其余同上。")])]),e._v(" "),v("h2",{attrs:{id:"指令"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#指令"}},[e._v("#")]),e._v(" 指令")]),e._v(" "),v("h3",{attrs:{id:"trapdoor"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#trapdoor"}},[e._v("#")]),e._v(" "),v("code",[e._v("trapdoor")])]),e._v(" "),v("blockquote",[v("p",[e._v("拥有对插件进行配置的能力")])]),e._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v("/trapdoor hudfreq <frequency: int>\n/trapdoor pm <low|medium|high>\n/trapdoor pvd <maxDistance: int>\n")])])]),v("ul",[v("li",[v("code",[e._v("/trapdoor hudfreq")]),e._v("设置hud信息的更新频率")]),e._v(" "),v("li",[v("code",[e._v("/trapdoor pm")]),e._v(" 设置例子效果的质量，质量越高，显示越清楚，但是对客户端帧率的影响越高")]),e._v(" "),v("li",[v("code",[e._v("/trapdoor pvd")]),e._v("设置粒子效果的最大显示距离，该功能暂时未实装")])]),e._v(" "),v("h3",{attrs:{id:"func"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#func"}},[e._v("#")]),e._v(" "),v("code",[e._v("func")])]),e._v(" "),v("blockquote",[v("p",[e._v("拥有开启或者关闭部分功能的能力")])]),e._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v("/func blockrotate [onoroff: Boolean]\n/func hoppercounter [onoroff: Boolean]\n/func hud [onoroff: Boolean]\n")])])]),v("ul",[v("li",[v("code",[e._v("/func blockrotate")]),e._v("开启或者关闭仙人掌转方块，该功能暂时没实装")]),e._v(" "),v("li",[v("code",[e._v("/func hoppercounter")]),e._v("开启或者关闭漏斗计数器")]),e._v(" "),v("li",[v("code",[e._v("/func hud")]),e._v(" 开启或者关闭全局HUD开关")])]),e._v(" "),v("h3",{attrs:{id:"tick"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#tick"}},[e._v("#")]),e._v(" "),v("code",[e._v("tick")])]),e._v(" "),v("blockquote",[v("p",[e._v("拥有改变世界运行速度的能力")])]),e._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v("/tick <acc|slow> <times: int>\n/tick <forward|warp> <tickNumber: int>\n/tick <reset|query|freeze>\n")])])]),v("ul",[v("li",[v("p",[v("code",[e._v("/tick <acc|slow> <times: int>")]),e._v("用于加快或者放慢游戏运行速度为原来的"),v("code",[e._v("time")]),e._v("倍或者"),v("code",[e._v("1/time")])])]),e._v(" "),v("li",[v("p",[v("code",[e._v("/tick <forward|warp> <tickNumber: int>")]),e._v("用于让世界以较快的速度前进"),v("code",[e._v("tickNumber")]),e._v("个游戏刻。其中"),v("code",[e._v("forward")]),e._v("是瞬间完成（具体多久取决于服务器CPU，forwarding途中服务器没反应是正常现象，请耐心等待），"),v("code",[e._v("warp")]),e._v("是在"),v("strong",[e._v("不掉刻的前提下")]),e._v("以最快的速度加速运行"),v("code",[e._v("tickNumber")]),e._v("个游戏刻。")])]),e._v(" "),v("li",[v("p",[v("code",[e._v("/tick <reset|query|freeze>")])]),e._v(" "),v("ul",[v("li",[v("code",[e._v("reset")]),e._v("用于重置世界到正常状态")]),e._v(" "),v("li",[v("code",[e._v("query")]),e._v("用于查询世界运行状态，如正在以多少倍速的速度运行，"),v("code",[e._v("warp")]),e._v("还剩多少个游戏刻等等")]),e._v(" "),v("li",[v("code",[e._v("freeze")]),e._v("用于暂停游戏运行")])])])]),e._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),v("p",[e._v("当游戏正在forward中时无法使用"),v("code",[e._v("tick query")]),e._v("是正常现象，不是bug")])]),e._v(" "),v("h3",{attrs:{id:"prof"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#prof"}},[e._v("#")]),e._v(" "),v("code",[e._v("prof")])]),e._v(" "),v("blockquote",[v("p",[e._v("拥有检查服务器健康程度以及定位卡顿源头的能力")])]),e._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v("/prof <normal|entity|chunk|pt> [numberOfTick: int]\n")])])]),v("ul",[v("li",[v("p",[v("code",[e._v("prof normal")]),e._v(" 进行普通的profile,会列出游戏多个条目的执行时间")])]),e._v(" "),v("li",[v("p",[v("code",[e._v("prof entity")]),e._v("对实体更新进行profile")])]),e._v(" "),v("li",[v("p",[v("code",[e._v("prof chunk")]),e._v("对区块更新进profile")])]),e._v(" "),v("li",[v("p",[v("code",[e._v("prof pt")]),e._v("对计划刻进行profile（该指令暂未实装）")])])]),e._v(" "),v("p",[v("code",[e._v("numberOfTick")]),e._v("是选填参数，指定prof需要执行的"),v("code",[e._v("gt")]),e._v("数，不填时默认为20gt,如果单独使用"),v("code",[e._v("prof")]),e._v("则代表执行"),v("code",[e._v("prof normal 100")]),e._v(",相当于一个快捷指令。")]),e._v(" "),v("h3",{attrs:{id:"player"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#player"}},[e._v("#")]),e._v(" "),v("code",[e._v("player")])]),e._v(" "),v("blockquote",[v("p",[e._v("拥有生成假人以及控制假人行为的能力")])]),e._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v("/player\n/player <name: string> <lookat|moveto> [vec3: x y z]\n/player <name: string> <spawn|despawn>\n/player <name: string> <stop|cancel>\n/player <name: string> attack [repeat] [interval: int] [times: int]\n/player <name: string> backpack [slot: int]\n/player <name: string> destroy [repeat] [interval: int] [times: int]\n/player <name: string> destroyon [blockPos: x y z] [repeat] [interval: int] [times: int]\n/player <name: string> interact [repeat] [interval: int] [times: int]\n/player <name: string> jump [repeat] [interval: int] [times: int]\n/player <name: string> set <itemId: Item>\n/player <name: string> use <itemId: Item> [repeat] [interval: int] [times: int]\n/player <name: string> useon <itemId: Item> [blockPos: x y z] [repeat] [interval: int] [times: int]\n")])])]),v("p",[e._v("本指令中所有的"),v("code",[e._v("name")]),e._v("都表示假人名字，并且是"),v("strong",[e._v("必填参数")])]),e._v(" "),v("ul",[v("li",[v("code",[e._v("/player <name: string> <spawn|despawn>")]),e._v(" 生成和踢出假人(请注意假人死亡后会自动被踢出)")]),e._v(" "),v("li",[v("code",[e._v("/player <name: string> <lookat|moveto> [vec3: x y z]")]),e._v("让假人看向/走到某个位置")]),e._v(" "),v("li",[v("code",[e._v("/player <name: string> set <itemId: Item>")]),e._v("用于设定假人主手物品，假人会自动搜索背包并切换到主手，如果背包没有相关物品假人什么都不会做")]),e._v(" "),v("li",[v("code",[e._v("/player <name: string> backpack [slot: int]")]),e._v("打印假人背包内的所有物品(slot参数暂时没有实装)")])]),e._v(" "),v("p",[e._v("下面所有指令都有"),v("code",[e._v("[repeat] [interval: int] [times: int]")]),e._v("这三个参数，该参数用于让假人重复当前动作，其中"),v("code",[e._v("interval")]),e._v("表示每次重复的间隔，单位是gt，不填表示1gt一次，"),v("code",[e._v("times")]),e._v("表示重复次数，不填表示一直重复永远不会停止，"),v("strong",[e._v("我们称在做重复动作的假人处于工作状态")])]),e._v(" "),v("ul",[v("li",[v("code",[e._v("/player <name: string> attack ...")]),e._v("让假人攻击玩家指针指向的实体，如果实体不存在玩家就会空挥武器")]),e._v(" "),v("li",[v("code",[e._v("/player <name: string> destroyon [blockPos: x y z] ...")]),e._v("让假人破坏位于"),v("code",[e._v("blockPos")]),e._v("的位置的方块，默认位置为玩家指针指向的方块")]),e._v(" "),v("li",[v("code",[e._v("/player <name: string> destroy ...")]),e._v("让假人破坏位其"),v("strong",[e._v("视线所指")]),e._v("的的方块，默认位置为玩家指针指向的方块")]),e._v(" "),v("li",[v("code",[e._v("/player <name: string> interact ...")]),e._v("让假人右键位于玩家指针指向的方块或者实体")]),e._v(" "),v("li",[v("code",[e._v("/player <name: string> jump ...")]),e._v("让假人原地跳跃")]),e._v(" "),v("li",[v("code",[e._v("/player <name: string> use <itemId: Item> ...")]),e._v("让假人使用物品，相当于玩家的使用弓箭，三叉戟，吃东西，丢末影珍珠等动作（物品会在背包中自动搜索）")]),e._v(" "),v("li",[v("code",[e._v("/player <name: string> useon <itemId: Item> [blockPos: x y z] ...")]),e._v("让假人使用特定物品右键位于"),v("code",[e._v("blockPos")]),e._v("位置的方块，默认位置为玩家指针指向的方块")])]),e._v(" "),v("p",[e._v("此外"),v("code",[e._v("player")]),e._v("还提供了如下三个命令")]),e._v(" "),v("ul",[v("li",[v("code",[e._v("/player stop")]),e._v("用于停止假人当前动作，如挖掘一半的方块停止，吃一半的食物停止，射出正在蓄力的弓箭等")]),e._v(" "),v("li",[v("code",[e._v("player cancal")]),e._v("取消假人的所有重复动作，也就是"),v("strong",[e._v("解除假人的工作状态")])]),e._v(" "),v("li",[v("code",[e._v("player")]),e._v("列出服务器所有的假人的状态以及位置")])]),e._v(" "),v("h3",{attrs:{id:"village"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#village"}},[e._v("#")]),e._v(" "),v("code",[e._v("village")])]),e._v(" "),v("blockquote",[v("p",[e._v("拥有显示村庄相关信息的能力")])]),e._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v("/village <spawn|center|bound|poi|head> <onOroff: Boolean>\n/village [info]\n/village [info] <villageID: int>\n/village list\n")])])]),v("ul",[v("li",[v("p",[v("code",[e._v("village list")]),e._v("列出所有正在加载的村庄，改指令会显示如下格式的数据：")]),e._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v("- [vid] [center] r:? p:? g:? b:[bounds]  \n")])])]),v("p",[e._v("其中"),v("code",[e._v("vid")]),e._v("表示trapdoor"),v("strong",[e._v("分配给该村庄的唯一id,除非服务器重启，否则村庄id永远不会重复(在一个服务器实例中，该id和村庄内的UUID唯一对应)")]),e._v("。"),v("code",[e._v("center")]),e._v("表示村庄中心坐标，"),v("code",[e._v("r")]),e._v("表示村庄半径，"),v("code",[e._v("p")]),e._v("表示村庄内的村民数量，"),v("code",[e._v("g")]),e._v("表示村庄内的铁傀儡数量，"),v("code",[e._v("b")]),e._v("表示村庄内的床的数量，"),v("code",[e._v("bounds")]),e._v("表示村庄的范围")])]),e._v(" "),v("li",[v("p",[v("code",[e._v("/village <spawn|center|bound|poi|head> <onOroff: Boolean>")]),e._v("用于开关村庄相关的可视化：")]),e._v(" "),v("ul",[v("li",[v("code",[e._v("spawn")]),e._v("表示铁傀儡刷新范围")]),e._v(" "),v("li",[v("code",[e._v("center")]),e._v("表示村庄中心")]),e._v(" "),v("li",[v("code",[e._v("bounds")]),e._v("表示村庄范围")]),e._v(" "),v("li",[v("code",[e._v("poi")]),e._v("表示POI的查询范围(我自己也忘了这个范围是做啥的了)")]),e._v(" "),v("li",[v("code",[e._v("head")]),e._v("表示在村民头顶显示信息，开启该选项后村民头顶会显示类似"),v("code",[e._v("[vid] 1 B M J 4514")]),e._v("这样的数据，其中中括号内的"),v("code",[e._v("vid")]),e._v("代表该村民所属的村庄的编号，后面的"),v("code",[e._v("1")]),e._v("表示该村民是该村庄的第几号村民，"),v("code",[e._v("B M J")]),e._v("分布表示该村民和床，钟，工作方块的绑定情况，绿色代表绑定，红色代表没绑定，最后的数据表示村民体内时钟的实时值。")])])]),e._v(" "),v("li",[v("p",[v("code",[e._v("/village [info] <villageID: int>")]),e._v("打印"),v("code",[e._v("vid")]),e._v("为"),v("code",[e._v("villageID")]),e._v("的村庄的详细数据，id缺省时打印距离玩家最近的村庄，数据格式如下所示：")]),e._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v("VID: 1 UUID: 12345678-1234-1234-123456780123\n- Center\n- Bounds \n- Radius\n- Dwellers\nPOIs:\n\tBed \t\t\t\t\t |  \tAlarm \t\t\t| \tWork |\n[pos]owner/cap/radius/weight | ...\n")])])]),v("p",[e._v("第一行是tr分配给村庄的id以及游戏内村庄的实际UUID，下面四行是村庄的中心，范围，半径以及三种居民(村民，铁傀儡，猫)的数量，后面的就是村庄内部的POI表，该表的第"),v("code",[e._v("i")]),e._v("行表示村庄内第"),v("code",[e._v("i")]),e._v("个村民绑定的POI的情况，每个POI的数据依次为：坐标，所有者数量，最大容量，POI的半径，POI的权重。")])])]),e._v(" "),v("h3",{attrs:{id:"data"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#data"}},[e._v("#")]),e._v(" "),v("code",[e._v("data")])]),e._v(" "),v("blockquote",[v("p",[e._v("拥有显示方块/实体/物品数据的能力")])]),e._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v("/data block [blockPos: x y z] [nbt] [path: string]\n/data entity [nbt] [path: string]\n/data item [nbt] [path: string] \n/data redstone <chunk|conn|signal> [blockPos: x y z]\n")])])]),v("ul",[v("li",[v("code",[e._v("/data block [blockPos: x y z] ...")]),e._v("打印位于"),v("code",[e._v("blockPos")]),e._v("位置的方块ID,名字等信息,该值缺省时默认为玩家指针指向的方块")]),e._v(" "),v("li",[v("code",[e._v("/data entity ...")]),e._v(" 打印玩家指针指向的实体ID,名字,位置等信息")]),e._v(" "),v("li",[v("code",[e._v("/data item ...")]),e._v("打印手持物品的相关信息(暂未实装)")]),e._v(" "),v("li",[v("code",[e._v("/data redstone <chunk|conn|signal> [blockPos: x y z]")]),e._v("打印位于"),v("code",[e._v("blockPos")]),e._v("位置的红石相关信息\n"),v("ul",[v("li",[v("code",[e._v("signal")]),e._v(" 打印位于"),v("code",[e._v("blockPos")]),e._v("处的红石原件的信号强度")]),e._v(" "),v("li",[v("code",[e._v("chunk")]),e._v("标记"),v("code",[e._v("blockPos")]),e._v("所在区块的所有红石原件")]),e._v(" "),v("li",[v("code",[e._v("conn")]),e._v(" 标记"),v("code",[e._v("blockPos")]),e._v("所在位置的原件(绿色框)、为该原件的所有信号源(红色框)以及该原件提供能量的所有消费者或者电容器(黄色框)，如果你看不懂这个命令是什么意思那就不用管。")])])])]),e._v(" "),v("p",[v("code",[e._v("data")]),e._v("指令还提供了对nbt的支持,也就是"),v("code",[e._v("[nbt] [path: string]")]),e._v("这两个可选子命令：当指令后面加上nbt后插件会打印该方块/物品/实体的nbt数据。"),v("code",[e._v("path")]),e._v("提供了简单的nbt数据查询功能，该路由多个"),v("code",[e._v("key")]),e._v("或者索引构成，key之间用"),v("code",[e._v(".")]),e._v("隔开，下面是几个简单的例子：")]),e._v(" "),v("ol",[v("li",[e._v("打印脚下箱子第1格的物品名字")])]),e._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v('data block ~ -1 ~ nbt "Items.[0].Name"\n')])])]),v("ol",{attrs:{start:"2"}},[v("li",[e._v("打印实体的y轴详细坐标")])]),e._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v('data entitiy nbt "Pos.[1]" \n')])])]),v("h3",{attrs:{id:"spawn"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#spawn"}},[e._v("#")]),e._v(" "),v("code",[e._v("spawn")])]),e._v(" "),v("blockquote",[v("p",[e._v("拥有统计实体数量以及分析生物生成的能力")])]),e._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v("/spawn analyze <stop|clear|start|print>\n/spawn count <all|chunk|density>\n/spawn forcesp <actorType: EntityType> [blockPos: x y z]\n/spawn prob [blockPos: x y z]\n")])])]),v("ul",[v("li",[v("code",[e._v("/spawn analyze ...")]),e._v(" 该命令提供了分析自然生物生成的功能\n"),v("ul",[v("li",[v("code",[e._v("start")]),e._v(" 开始实体生成统计，插件会统计"),v("strong",[e._v("指令发出者所在维度")]),e._v("的所有自然生物生成情况以及"),v("strong",[e._v("以指令发出者当前区块为中心的9*9区块")]),e._v("的生物的密度数据。注意："),v("strong",[e._v("玩家移动后该密度统计范围并不会改变")])]),e._v(" "),v("li",[v("code",[e._v("stop")]),e._v(" 停止统计")]),e._v(" "),v("li",[v("code",[e._v("print")]),e._v(" 打印统计数据。插件会分别打印这次统计中洞穴和露天刷出的生物数量，刷出速度以及平均密度占用等信息")]),e._v(" "),v("li",[v("code",[e._v("clear")]),e._v("清除统计的数据")])])]),e._v(" "),v("li",[v("code",[e._v("/spawn count <all|chunk|density>")]),e._v(" 分别打印指令发出者所在"),v("strong",[e._v("维度,区块，以及以指令发出者为中心9*9区块")]),e._v("的每种实体的数量")]),e._v(" "),v("li",[v("code",[e._v("/spawn prob [blockPos: x y z]")]),e._v(" 打印位置"),v("code",[e._v("blockPos")]),e._v("处可能生成的生物类型，概率，以及是否可能生成，位置缺省时为指针指向的位置")]),e._v(" "),v("li",[v("code",[e._v("/spawn forcesp <actorType: EntityType> [blockPos: x y z]")]),e._v(" 在"),v("code",[e._v("blockPos")]),e._v("处进"),v("strong",[e._v("强制进行一次生成尝试")]),e._v("，位置缺省时为指针指向的位置")])]),e._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),v("p",[e._v("如果你不懂"),v("code",[e._v("prob")]),e._v("和"),v("code",[e._v("forcesp")]),e._v("的用途那么无视这两条指令即可")])]),e._v(" "),v("h3",{attrs:{id:"hud"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#hud"}},[e._v("#")]),e._v(" "),v("code",[e._v("hud")])]),e._v(" "),v("blockquote",[v("p",[e._v("拥有在屏幕上实时显示文字信息的能力")])]),e._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v("/hud <add|remove> <redstone|village|hoppercounter|mspt|base>\n/hud show <onoroff: Boolean>\n")])])]),v("ul",[v("li",[v("code",[e._v("hud show")]),e._v("开启或者关闭hud(只针对指令执行者自己，不影响其他玩家)")]),e._v(" "),v("li",[v("code",[e._v("hud <add|remove>")]),e._v("添加或者移除你想在hud上现实的内容(只针对执指令执行者自己，不影响其他玩家)\n"),v("ul",[v("li",[v("code",[e._v("redstone")]),e._v(" 显示红石相关信息，目前只有信号强度")]),e._v(" "),v("li",[v("code",[e._v("base")]),e._v("显示一些基本的信息，包括当前游戏刻度，玩家坐标，视角，指向的方块坐标，和亮度，当前所处位置的群系等等")]),e._v(" "),v("li",[v("code",[e._v("village")]),e._v("显示村庄相关信息，暂时没有实装")]),e._v(" "),v("li",[v("code",[e._v("chunk")]),e._v("可视化玩家所在区块的边界")]),e._v(" "),v("li",[v("code",[e._v("mspt")]),e._v("显示服务器最近"),v("code",[e._v("1s")]),e._v("的平均mspt和TPS")]),e._v(" "),v("li",[v("code",[e._v("hoppercounter")]),e._v("显示"),v("strong",[e._v("当前指针指向的频道")]),e._v("的数据(必须要指针指向混凝土才有用)")])])])]),e._v(" "),v("p",[e._v("该功能可通过"),v("code",[e._v("func")]),e._v("命令来设置全局开关。")]),e._v(" "),v("h3",{attrs:{id:"hsa"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#hsa"}},[e._v("#")]),e._v(" "),v("code",[e._v("hsa")])]),e._v(" "),v("blockquote",[v("p",[e._v("拥有在游戏内可视化结构生成区域(HSA)的能力")])]),e._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v("/hsa clear\n/hsa place <blockName: Block>\n/hsa show <onOroff: Boolean>\n")])])]),v("ul",[v("li",[v("code",[e._v("hsa show")]),e._v("开启或者关闭HSA显示，开启后插件会在游戏内有HSA的地方使用粒子画出结构的刷怪点，对于游戏内的四种刷怪点，插件有不同的颜色，具体如下所示：\n"),v("ul",[v("li",[e._v("女巫小屋 红色")]),e._v(" "),v("li",[e._v("地狱堡垒 绿色")]),e._v(" "),v("li",[e._v("海底神殿 黄色")]),e._v(" "),v("li",[e._v("掠夺者前哨站 蓝色")])])]),e._v(" "),v("li",[v("code",[e._v("hsa place")]),e._v("在所有缓存的生成点放置指定方块(仅创造模式可用)，暂未没有实装")]),e._v(" "),v("li",[v("code",[e._v("hsa clear")]),e._v("清除hsa缓存")])]),e._v(" "),v("h3",{attrs:{id:"log"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#log"}},[e._v("#")]),e._v(" "),v("code",[e._v("log")])]),e._v(" "),v("blockquote",[v("p",[e._v("拥有打印一些游戏内信息的能力")])]),e._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v("/log <mspt|os>\n")])])]),v("ul",[v("li",[v("code",[e._v("log mspt")]),e._v("打印最近"),v("code",[e._v("1s")]),e._v("的mspt和tps")]),e._v(" "),v("li",[v("code",[e._v("log os")]),e._v("打印服务器的CPU占用率和内存使用信息")])]),e._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),v("p",[e._v("该功能还在建设中，因此功能较少")])]),e._v(" "),v("h3",{attrs:{id:"tweak"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#tweak"}},[e._v("#")]),e._v(" "),v("code",[e._v("tweak")])]),e._v(" "),v("blockquote",[v("p",[e._v("拥有修改部分原版游戏特性的能力")])]),e._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v("/tweak autotool <onoroff: Boolean>\n/tweak fcopen <onoroff: Boolean>\n/tweak fcplace <level: int>\n/tweak nocost <onoroff: Boolean>\n")])])]),v("div",{staticClass:"custom-block warning"},[v("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),v("p",[e._v("该功能会修改原版游戏，请谨慎使用")])]),e._v(" "),v("ul",[v("li",[v("code",[e._v("tweak fcopen")]),e._v(" 开启或者关闭强制打开容器，开启后被实体/方块阻挡的箱子也能被强制打开")]),e._v(" "),v("li",[v("code",[e._v("tweak fcplace")]),e._v("开启或者关闭强制放置方块，后面的level选填"),v("code",[e._v("0,1,2")]),e._v(" "),v("ul",[v("li",[e._v("0: 原版，不做任何修改")]),e._v(" "),v("li",[e._v("1: 可以无视实体阻挡强制放置方块，请注意"),v("strong",[e._v("这会让实体免疫窒息伤害")])]),e._v(" "),v("li",[e._v("2: 在1的基础上无视几乎所有方块放置限制，比如在石头上放置树苗等等")])])]),e._v(" "),v("li",[v("code",[e._v("/tweak nocost")]),e._v("开启或者关闭发射器/投掷器无消耗，开启后发射器和投掷器可以无限发射/投掷，而不产生任何物品消耗")]),e._v(" "),v("li",[v("code",[e._v("tweak autotool")]),e._v("开启后玩家在挖掘方块时会自动在背包内搜索工具并切换到主手(较OP,请谨慎使用)")])]),e._v(" "),v("h3",{attrs:{id:"counter"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#counter"}},[e._v("#")]),e._v(" "),v("code",[e._v("counter")])]),e._v(" "),v("blockquote",[v("p",[e._v("拥有查看漏斗接受物品速度的能力")])]),e._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v("/counter print [channel: int]\n/counter reset [channel: int]\n")])])]),v("p",[e._v("在使用"),v("code",[e._v("func hopper true")]),e._v("开启漏斗计数器后，所有对准"),v("strong",[e._v("混凝土")]),e._v("的漏斗都将变成无尽的漏斗，所有"),v("strong",[e._v("流向该漏斗的物品都会消失")]),e._v("，但是这些数据会被插件记录下来，你可以使用"),v("code",[e._v("/counter")]),e._v("命令查看这些数据。16种混凝土每一种对应一个频道(根据特殊值)。")]),e._v(" "),v("ul",[v("li",[v("code",[e._v("/counter print [channel: int]")]),e._v("打印频道"),v("code",[e._v("channel")]),e._v("的数据(你也可以直接使用仙人掌右键对应颜色的混凝土以达到相同的效果)")]),e._v(" "),v("li",[v("code",[e._v("/counter reset [channel: int]")]),e._v("清除频道"),v("code",[e._v("channel")]),e._v("的数据")])]),e._v(" "),v("p",[e._v("注意:从使用"),v("code",[e._v("func hopper true")]),e._v("这一刻开始漏斗计数器就开始计时了，而不是其他时间。")]),e._v(" "),v("h3",{attrs:{id:"slime"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#slime"}},[e._v("#")]),e._v(" "),v("code",[e._v("slime")])]),e._v(" "),v("blockquote",[v("p",[e._v("拥有可视化史莱姆区块的能力")])]),e._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v("/slime clear\n/slime range <range: int>\n/slime show <onoroff: Boolean>\n")])])]),v("ul",[v("li",[v("code",[e._v("slime show")]),e._v("开启或者关闭史莱姆区块显示")]),e._v(" "),v("li",[v("code",[e._v("slime range")]),e._v("设置史莱姆显示范围")]),e._v(" "),v("li",[v("code",[e._v("slime clear")]),e._v("清除史莱姆区块的数据缓存")])]),e._v(" "),v("h2",{attrs:{id:"shortcut"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#shortcut"}},[e._v("#")]),e._v(" Shortcut")]),e._v(" "),v("p",[v("code",[e._v("Shortcut")]),e._v("提供了一些触发器，可以让服务器使用者通过修改配置文件来完成一些自定义功能，详见配置文件一节。")])])}),[],!1,null,null,null);t.default=_.exports}}]);