(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{445:function(v,_,t){v.exports=t.p+"assets/img/prof.01db7a74.png"},475:function(v,_,t){"use strict";t.r(_);var e=t(59),c=Object(e.a)({},(function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("h3",{attrs:{id:"说明"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#说明"}},[v._v("#")]),v._v(" 说明")]),v._v(" "),e("p",[v._v("在以下的所有指令说明中，")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("<>")]),v._v("表示必填参数")]),v._v(" "),e("li",[e("code",[v._v("<int>")]),v._v("表示整形数据，如"),e("code",[v._v("-1,1,0,12,128")]),v._v("等等")]),v._v(" "),e("li",[e("code",[v._v("<bool>")]),v._v("表示布尔型数据，只能填"),e("code",[v._v("true")]),v._v("(或者"),e("code",[v._v("1")]),v._v(")和"),e("code",[v._v("false")]),v._v("(或者"),e("code",[v._v("0")]),v._v(")")]),v._v(" "),e("li",[e("code",[v._v("<str>")]),v._v("表示字符串数据，可以填任意字符串，如"),e("code",[v._v("hhhxiao")]),v._v(","),e("code",[v._v("mojang")]),v._v("等等。")])]),v._v(" "),e("p",[v._v("此外，所有命令都可以使用"),e("code",[v._v("?")]),v._v("子命令用以显示帮助，如：")]),v._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[v._v("tick ?\n")])])]),e("p",[v._v("会显示 "),e("code",[v._v("tick")]),v._v("的所有子命令的含义及其用法。")]),v._v(" "),e("h3",{attrs:{id:"指令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#指令"}},[v._v("#")]),v._v(" 指令")]),v._v(" "),e("h4",{attrs:{id:"td"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#td"}},[v._v("#")]),v._v(" td?")]),v._v(" "),e("p",[v._v("该命令用于显示"),e("strong",[v._v("当前用户能够执行的")]),v._v("所有指令的帮助，无子命令，如果"),e("strong",[v._v("命令过少可能是被腐竹关闭或者你权限不够")]),v._v("。")]),v._v(" "),e("h4",{attrs:{id:"apicfg"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#apicfg"}},[v._v("#")]),v._v(" apicfg")]),v._v(" "),e("p",[v._v("该指令用于插件API的部分参数配置，目前有以下两个子选项")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("apicfg pvd <int>")]),v._v("   配置图形的可视距离，这里的图形指的是插件的所有的可视化效果，包括村庄显示,区块边界显示，结构刷怪点显示和史莱姆区块显示等粒子。")])]),v._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[v._v("TIP")]),v._v(" "),e("p",[v._v("在生成粒子时插件会检测同维度下离距离生成点最近的玩家和其的距离，如果距离超过这个设定值插件就不会生成该粒子。")])]),v._v(" "),e("ul",[e("li",[e("code",[v._v("apicfg pm <bool>")]),v._v("  是否开启性能模式，开启后可视化造成的游戏卡顿会减少一半，但是显示效果会稍微差点，默认关闭")])]),v._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[v._v("TIP")]),v._v(" "),e("p",[v._v("对应每条直线插件都会生成两个粒子(45度和-45度方向)，开启此选项插件就只会生成一个。")])]),v._v(" "),e("h4",{attrs:{id:"tick"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tick"}},[v._v("#")]),v._v(" tick")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("tick fz")]),v._v(" 暂停游戏运行")]),v._v(" "),e("li",[e("code",[v._v("tick slow <int>")]),v._v("  放慢游戏运行速度，执行该命令后，"),e("code",[v._v("1gt = 50 * num ms")]),v._v("，"),e("code",[v._v("num")]),v._v("在"),e("code",[v._v("[2,64]")]),v._v("之间")]),v._v(" "),e("li",[e("code",[v._v("tick acc <int>")]),v._v(" 加快游戏运行速度，执行该命令后，"),e("code",[v._v("1gt = 50/num ms")]),v._v(",当然具体效果还是依赖服务器的硬件性能，num必须在[2,10]之间（如果你觉得上限10太小了可以去github页面反馈。）")]),v._v(" "),e("li",[e("code",[v._v("tick fw <int>")]),v._v(" 让游戏瞬间快进"),e("code",[v._v("num")]),v._v(" gt,瞬间指的多长现实时间仍旧依赖的服务器的性能，"),e("code",[v._v("num")]),v._v("过大会导致游戏长时间无响应，是正常现象，请耐心等待")]),v._v(" "),e("li",[e("code",[v._v("tick r")]),v._v(" 恢复所有的加速减速或者暂停状态到正常")]),v._v(" "),e("li",[e("code",[v._v("tick q")]),v._v(" 查询服务器的加速或者减速状态，该指令会向游戏屏幕输出一个字符串,不会对游戏运行产生任何影响")])]),v._v(" "),e("ol",[e("li",[v._v("在大量执行"),e("code",[v._v("tick")]),v._v("相关指令后可能会因为玩家和服务器的时钟不同步问题而导致玩家无法进入游戏，这个问题暂时无法用插件解决，只能通过重启服务器来解决问题；")]),v._v(" "),e("li",[v._v("在使用"),e("code",[v._v("tick acc")]),v._v("时请勿把倍数设为过大，除非你的电脑性能足够好。建议先使用"),e("code",[v._v("prof")]),v._v("指令测一下"),e("code",[v._v("mspt")]),v._v("然后用$\\frac{50}{mspt}$向下取整后的整数作为最大倍数。")])]),v._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[v._v("TIP")]),v._v(" "),e("p",[v._v("MCBE的游戏主逻辑运行在一个单独的线程中，这个线程每隔50ms执行一次"),e("code",[v._v("ServerLevel::tick()")]),v._v("函数，函数内部会执行区块更新，村庄更新，红石更新等等内容。因此把50ms成为一个游戏刻(game tick)，简称"),e("code",[v._v("gt")]),v._v("。"),e("code",[v._v("tick")]),v._v("命令的原理就是更改这个函数的执行频率。")])]),v._v(" "),e("h4",{attrs:{id:"mspt"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mspt"}},[v._v("#")]),v._v(" mspt")]),v._v(" "),e("p",[v._v("该指令会显示当前游戏的"),e("code",[v._v("mspt")]),v._v("和"),e("code",[v._v("TPS")]),v._v(",且"),e("strong",[v._v("只计算"),e("code",[v._v("1gt")]),v._v("的数据")]),v._v("。")]),v._v(" "),e("p",[v._v("由于游戏在红石刻要做的任务比非红石刻多得多，且红石刻和非红石刻是间隔运行的，因此"),e("code",[v._v("mspt")]),v._v("显示的数据波动很大属于正常现象，很大说明测到了红石刻的用时，很小就说明测到了非红石刻的用时。如果你想较为准确地评估当前的"),e("code",[v._v("mspt")]),v._v("，可以简单地取平均值，也可直接使用"),e("code",[v._v("prof")]),v._v("指令。")]),v._v(" "),e("p",[v._v("在新版的"),e("code",[v._v("mspt")]),v._v("中输出的第一个字符"),e("code",[v._v("#")]),v._v("如果是红色就说明遇到了红石刻，白色说明是普通刻。")]),v._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[v._v("TIP")]),v._v(" "),e("p",[v._v("mspt指的是"),e("code",[v._v("ServerLevel::tick")]),v._v("的运行时间，由于这个函数理论上50ms执行一次，那么如果mspt的大于50，下一个游戏刻的执行时间会被延迟，这就叫"),e("strong",[v._v("掉刻")]),v._v("，因此服务器需要极力避免这种情况的发生。")])]),v._v(" "),e("h4",{attrs:{id:"prof"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#prof"}},[v._v("#")]),v._v(" prof")]),v._v(" "),e("ul",[e("li",[e("p",[e("code",[v._v("prof")]),v._v(" 计算并展示游戏游戏运行的各项用时，取"),e("code",[v._v("100gt")]),v._v("的平均值，因此会间隔"),e("code",[v._v("5s")]),v._v("才返回结果,该指令的输出会广播到所有玩家。下图展示了该指令的一个输出：")]),v._v(" "),e("p",[e("img",{attrs:{src:t(445),alt:""}})]),v._v(" "),e("p",[v._v("第一行展示平均MSPT、TPS以及每gt加载的区块数，后面按照类别分为四大项，每一项后面又有一些小项：")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("Redstone")]),v._v(" 表示红石相关的卡顿分析\n"),e("ul",[e("li",[e("code",[v._v("SingalUpdate")]),v._v(" 表示红石信号更新时间（静态电路卡顿）")]),v._v(" "),e("li",[e("code",[v._v("PendingUpdate, PendingRemove")]),v._v("表示红石电路更新时间 (动态电路卡顿)")])])]),v._v(" "),e("li",[e("code",[v._v("EntitySystem")]),v._v("表示实体系统的更新时间（和实体更新区别开）")]),v._v(" "),e("li",[e("code",[v._v("Chunk (un)load & village")]),v._v(" 区块加载和村庄更新等花的时间")]),v._v(" "),e("li",[e("code",[v._v("ChunkTick")]),v._v(" 区块更新所需的时间\n"),e("ul",[e("li",[e("code",[v._v("BlockEntities")]),v._v("方块实体更新时间")]),v._v(" "),e("li",[e("code",[v._v("RandomTick")]),v._v(" 随机刻更新时间")]),v._v(" "),e("li",[e("code",[v._v("PendingTick")]),v._v(" 计划刻更新时间")])])])]),v._v(" "),e("p",[v._v("此外该命令没有打印实体更新所用的时间，因为这一项在"),e("code",[v._v("prof actor")]),v._v("命令中被单独给出。")]),v._v(" "),e("div",{staticClass:"language-c++ extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[v._v("MSPT = Redstone + EntitySystem + Chunk(un)load + ChunkTick + ActorTick + Others\n")])])])]),v._v(" "),e("li",[e("p",[e("code",[v._v("prof actor")]),v._v(" 计算并展示游戏运行时的各种实体的详细计算用时，也能显示当前加载区域内的各种实体的数量，取"),e("code",[v._v("100gt")]),v._v("的平均值,每一行第一个是实体名字，英文显示，后面是更新总时间，"),e("strong",[v._v("括号内是更新区块内的实体数量")]),v._v("。如果你发现某个实体的数量显示的是0，可能是它在测试一半被despawn或者被杀了,插件计算个数用的算法是使用更新次数/100来表示实体数量。")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("prof c <int>")]),v._v(" 和"),e("code",[v._v("prof")]),v._v("的功能相同，但是后面需要接一个整数以自定义测量时间,"),e("code",[v._v("prof")]),v._v("和"),e("code",[v._v("prof c 100")]),v._v("完全等价")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("prof chunk")]),v._v(" 列出区块加载的时间，并打印前10个更新时间最长的区块的中心的"),e("strong",[v._v("世界坐标")])])]),v._v(" "),e("li",[e("p",[e("code",[v._v("prof pt")]),v._v(" 列出区块内计划刻队列缓存的长度，只展示前10个缓存最大的区块的中心的"),e("strong",[v._v("世界坐标")])])])]),v._v(" "),e("h4",{attrs:{id:"func"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#func"}},[v._v("#")]),v._v(" func")]),v._v(" "),e("p",[v._v("该指令是启用和关闭全局功能的各种功能的开关，所有玩家公用这一个开关，建议设定为仅管理员可用。")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("func rotate <bool>")]),v._v(" 开启或者关闭仙人掌转方块，默认关闭")]),v._v(" "),e("li",[e("code",[v._v("func hopper <bool>")]),v._v(" 开启或者关闭漏斗计数器，默认关闭")]),v._v(" "),e("li",[e("code",[v._v("func spawn <bool>")]),v._v(" 开启或者关闭刷怪概率分析，默认关闭")]),v._v(" "),e("li",[e("code",[v._v("func expl <bool>")]),v._v(" 开启或者关闭爆炸破坏地形(开启后会对实体造成影响但是不影响地形)，默认关闭")]),v._v(" "),e("li",[e("code",[v._v("func ncud <bool>")]),v._v(" 开启或者关闭NC更新，默认关闭")])]),v._v(" "),e("h4",{attrs:{id:"village"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#village"}},[v._v("#")]),v._v(" village")]),v._v(" "),e("p",[v._v("该指令是村庄机制的相关指令")]),v._v(" "),e("ul",[e("li",[e("p",[e("code",[v._v("village list")]),v._v("列出所有"),e("strong",[v._v("正在加载")]),v._v("的村庄,数据每"),e("code",[v._v("20gt")]),v._v("更新一次`")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("village b <bool>")]),v._v(" 开启或者关闭村庄边界显示，游戏中显示为红色矩形框")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("village c <bool>")]),v._v(" 开启或者关闭村庄中心显示，游戏中显示为爱心粒子")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("village s <bool>")]),v._v(" 开启或者关闭铁傀儡刷出区域显示，游戏中显示为蓝色矩形框(如果你发现此区域不准确请联系开发者进行调整)")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("village p <bool>")]),v._v(" 开启或者关闭POI查询范围显示，游戏中显示为红色矩形框")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("village v <bool>")]),v._v(" 开启或者关闭居民信息显示:开启后村民头顶会出现"),e("code",[v._v("B M J")]),v._v(" 这三个字母，分别表示床，集会点(钟)以及工作方块，红色表示未绑定，绿色表示已经绑定好了。攻击村民可以显示它所属的村庄中心以及绑定的POI具体坐标(开启该功能后玩家对村民的攻击无效，不会对游戏造成任何影响)，攻击铁傀儡会显示它所属的村庄中心(也不会对铁傀儡造成任何伤害)")]),v._v(" "),e("p",[v._v("​在新版(1.17.10.04+)的插件中对该指令做出了调整，村民头上的信息类似"),e("code",[v._v("[1] 2 ☾ ⍾ ☕ 12")]),v._v("这样，第一个"),e("code",[v._v("[1]")]),v._v("表示村民所属的村庄序号，第二个"),e("code",[v._v("2")]),v._v("是该村民的村庄内序号，如果该值为1，那么该村民绑定的第一个POI即为村庄中心的默认位置，最后一个数字12表示村民的内部时钟，正常情况下该值在0到90之间。中间的"),e("code",[v._v("☾ ⍾ ☕")]),v._v("三个符号分别表示该村民的床，钟，工作方块的绑定情况，"),e("strong",[v._v("绿色为已绑定，红色为未绑定")]),v._v("，且该版本"),e("strong",[v._v("取消了攻击村民无伤害这一特定，当然也取消了显示POI坐标的功能")]),v._v("。")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("village n")]),v._v("列出离命令发送者最近(以村庄中心和玩家的距离为准)的村庄的详细信息，包括所有POI的具体坐标和绑定关系 。")])])]),v._v(" "),e("p",[v._v("三种框的颜色和村庄中心的粒子效果在配置文件中可以设置，详见配置文件一节。")]),v._v(" "),e("h4",{attrs:{id:"hsa"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hsa"}},[v._v("#")]),v._v(" hsa")]),v._v(" "),e("ul",[e("li",[e("p",[e("code",[v._v("hsa show <bool>")]),v._v("开启或者关闭结构中的定点刷怪区域(HSA)显示,绿框为地狱堡垒，红框为女巫小屋，黄框为海底神殿，蓝框为掠夺者前哨站")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("hsa clear")]),v._v(" 清除HSA的数据缓存并打印清除的HSA数目")])])]),v._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[v._v("TIP")]),v._v(" "),e("p",[v._v("如果HSA个数过多会造成客户端的渲染卡顿（就是帧率降低），这时候你可与通过"),e("code",[v._v("apicfg")]),v._v("命令来调整例子效果以减小卡顿。")])]),v._v(" "),e("ul",[e("li",[e("code",[v._v("hsa draw")]),v._v(" 在所有HSA上放置玩家脚底的方块（只有开启"),e("code",[v._v("func draw true")]),v._v("）后方可使用该功能")])]),v._v(" "),e("h4",{attrs:{id:"slime"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#slime"}},[v._v("#")]),v._v(" slime")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("slime show <bool>")]),v._v(" 开启或者关闭史莱姆区块显示")])]),v._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[v._v("TIP")]),v._v(" "),e("p",[v._v("史莱姆区块的显示例子每"),e("code",[v._v("5s")]),v._v("更新一次，因此你在关闭显示后再过几秒后显示效果才会完全消失。")])]),v._v(" "),e("ul",[e("li",[e("p",[e("code",[v._v("slime c")]),v._v("清空并重新计算史莱姆区块缓存")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("slime r <int>")]),v._v(" 设置史莱姆区块的显示的半径"),e("code",[v._v("r")])]),v._v(" "),e("p",[v._v("插件只会计算以玩家所在区块为中心的"),e("code",[v._v("(2r+1)*(2r+1)")]),v._v("的正方形区域中的所有史莱姆区块")])])]),v._v(" "),e("h4",{attrs:{id:"o-s-c"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#o-s-c"}},[v._v("#")]),v._v(" o,s,c")]),v._v(" "),e("p",[v._v("游戏自带指令"),e("code",[v._v("gamemode")]),v._v(" 的扩展")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("o")]),v._v(" 切换当前玩家为创造观察者模式("),e("strong",[v._v("1.17+该指令失效")]),v._v(")")]),v._v(" "),e("li",[e("code",[v._v("s")]),v._v(" 切换当前玩家为生存模式")]),v._v(" "),e("li",[e("code",[v._v("c")]),v._v(" 切换当前玩家为创造模式")])]),v._v(" "),e("h4",{attrs:{id:"os"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#os"}},[v._v("#")]),v._v(" os")]),v._v(" "),e("p",[v._v("该命令用于显示服务器相关信息，第一行是当前进程的CPU占用，第二行是当当前进程的内存占用。如下图所示：")]),v._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[v._v("CPU : 12%\nMem: 170MB VMem 171MB\n")])])]),e("h4",{attrs:{id:"self"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#self"}},[v._v("#")]),v._v(" self")]),v._v(" "),e("p",[v._v("该命令是玩家个人信息的显示，不会影响其它玩家")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("self")]),v._v("显示一些信息，包括区块坐标，视角，维度等等")]),v._v(" "),e("li",[e("code",[v._v("self chunk <bool>")]),v._v("开启关闭自己的区块显示")]),v._v(" "),e("li",[e("code",[v._v("self me <bool>")]),v._v(" 开启或关闭测量功能")]),v._v(" "),e("li",[e("code",[v._v("self rs <bool>")]),v._v(" 开启或者关闭信号源查看功能")])]),v._v(" "),e("h4",{attrs:{id:"backup"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#backup"}},[v._v("#")]),v._v(" backup")]),v._v(" "),e("p",[v._v("该指令提供备份相关功能,在使用该指令之前需要到配置文件中填写存档名字.")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("backup b")]),v._v("备份当前存档")]),v._v(" "),e("li",[e("code",[v._v("backup l")]),v._v("列出所有的备份")])]),v._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[v._v("TIP")]),v._v(" "),e("p",[v._v("所有备份的存档都没有被压缩，而是直接被移动到"),e("code",[v._v("./plugins/trapdoor/backup")]),v._v("目录中，由于读写冲突，备份有概率失败是正常现象。")])]),v._v(" "),e("h4",{attrs:{id:"draw"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#draw"}},[v._v("#")]),v._v(" draw")]),v._v(" "),e("p",[v._v("该功能需要"),e("code",[v._v("func draw true")]),v._v("后才可使用")]),v._v(" "),e("p",[v._v("该功能弥补了原版的"),e("code",[v._v("fill")]),v._v("只能画长方体的不足，增加了画圆、球和区块填充的功能")]),v._v(" "),e("p",[v._v("所有子命令都是以玩家脚下站的方块为填充方块")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("draw ci <int>")]),v._v(",建造半径为"),e("code",[v._v("abs(num)")]),v._v("的圆形，输入为正数时建造实心的，输入为负数时建造空心的")]),v._v(" "),e("li",[e("code",[v._v("draw sp <int>")]),v._v(" 建造对应半径的球体，其它同上一条指令")]),v._v(" "),e("li",[e("code",[v._v("draw ch")]),v._v(" 用脚下方块填充玩家所属的区块(只填一层,也就是16*1*16的区域)")])]),v._v(" "),e("blockquote",[e("p",[v._v("这个 功能面对栅栏，石墙等高1.5格的方块没法使用")])]),v._v(" "),e("h4",{attrs:{id:"counter"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#counter"}},[v._v("#")]),v._v(" counter")]),v._v(" "),e("p",[v._v("该功能需要"),e("code",[v._v("func hopper true")]),v._v("后方可使用")]),v._v(" "),e("p",[v._v("漏斗计数器是用来统计物品流量的功能。")]),v._v(" "),e("p",[v._v("在你用"),e("code",[v._v("/func hc true")]),v._v("后，如果漏斗对准的不是箱子而是16色的混凝土，那么漏斗就会变成无尽漏斗，所有吸入的东西都不会放入漏斗的物品槽中，但是数据会保留下来。你可以用"),e("code",[v._v("/counter p channel")]),v._v("来查看这些漏斗吸收的物品数据,包括每种物品的个数和吸入平均速率。用"),e("code",[v._v("/counter reset channel")]),v._v("来重置某个频道的所有漏斗。"),e("code",[v._v("channel")]),v._v("选填"),e("code",[v._v("[0-15]")]),v._v(",对应16色的混凝土，如果你记不清哪个颜色对应哪个特殊值，"),e("strong",[v._v("使用仙人掌右键某个颜色的混凝土方块可以直接显示该频道的数据")]),v._v("。")]),v._v(" "),e("h4",{attrs:{id:"fakeplayer"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#fakeplayer"}},[v._v("#")]),v._v(" fakeplayer")]),v._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[v._v("WARNING")]),v._v(" "),e("p",[v._v("该功能bug有点多，不建议过度依赖")])]),v._v(" "),e("p",[v._v("trapdoor本身"),e("strong",[v._v("并不提供")]),v._v("假人玩家的功能，该指令提供了和"),e("a",{attrs:{href:"https://github.com/ddf8196/FakePlayer",target:"_blank",rel:"noopener noreferrer"}},[v._v("假人插件"),e("OutboundLink")],1),v._v("联动的功能，开启假人插件的websocket,就能利用trapdoor与其进行交互，在游戏内部操作假人")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("fakeplayer conn <str>")]),v._v("连接假人插件，"),e("code",[v._v("str")]),v._v("是websocket链接，如"),e("code",[v._v("ws://127.0.0.1:1234")])]),v._v(" "),e("li",[e("code",[v._v("fakeplayer add <str>")]),v._v("添加假人到出生点")]),v._v(" "),e("li",[e("code",[v._v("fakeplayer remove <str>")]),v._v("移除假人")]),v._v(" "),e("li",[e("code",[v._v("fakeplayer list <str>")]),v._v(" 列出所有")]),v._v(" "),e("li",[e("code",[v._v("fakeplayer tp <str>")]),v._v(" 传送假人到当前玩家所在位置")])]),v._v(" "),e("h3",{attrs:{id:"功能"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#功能"}},[v._v("#")]),v._v(" 功能")]),v._v(" "),e("p",[v._v("下面是一些非指令的功能")]),v._v(" "),e("h4",{attrs:{id:"仙人掌转方块"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#仙人掌转方块"}},[v._v("#")]),v._v(" 仙人掌转方块")]),v._v(" "),e("p",[v._v("该功能需要"),e("code",[v._v("func rotate true")]),v._v("后方可使用\n仙人掌右击部分方块可以旋转该方块,也就是改变方块的特殊值，支持所有的半砖，楼梯以及红石原件等方块。")]),v._v(" "),e("h4",{attrs:{id:"区块显示"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#区块显示"}},[v._v("#")]),v._v(" 区块显示")]),v._v(" "),e("p",[v._v("该功能需要"),e("code",[v._v("self chunk true")]),v._v("后方可使用")]),v._v(" "),e("p",[v._v("开启后就是区块显示，普通区块为白色网格，史莱姆区块为绿色网格(主要是为了弥补1.16.4以后的区块边界材质包失效的问题)")]),v._v(" "),e("h4",{attrs:{id:"刷怪指示器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#刷怪指示器"}},[v._v("#")]),v._v(" 刷怪指示器")]),v._v(" "),e("p",[v._v("该功能需要"),e("code",[v._v("func spawn true")]),v._v("后方可使用")]),v._v(" "),e("ul",[e("li",[e("p",[v._v("骨头右击方块可以可视化纵轴的刷怪选点过程")])]),v._v(" "),e("li",[e("p",[v._v("火药右键方块可以显示亮度为0时候的刷怪类型概率(主要是敌对生物)")])]),v._v(" "),e("li",[e("p",[v._v("皮革右键方块可以显示亮度为15时候的刷怪类型概率(主要是有好生物)")])])]),v._v(" "),e("p",[v._v("(这么做主要还是获取亮度的API有问题)")]),v._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[v._v("TIP")]),v._v(" "),e("p",[v._v("显示的概率不是理论值，而是插件测试上千次后的统计数据，因此每次显示的数据略有不同是正常现象")])]),v._v(" "),e("h4",{attrs:{id:"测量"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#测量"}},[v._v("#")]),v._v(" 测量")]),v._v(" "),e("p",[v._v("该功能需要"),e("code",[v._v("self me true")]),v._v("后方可使用")]),v._v(" "),e("p",[v._v("使用木剑右击方块设置一个点，使用石剑右击方块设置第二个点，输出第一行是两个点的坐标，后面跟着两行两列四个数据：第一行是不忽略y的空间，第二行是忽略y的平面距离；第一列是利用勾股定理计算的欧氏距离，第二列是曼哈段距离。")]),v._v(" "),e("h4",{attrs:{id:"信号源查看"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#信号源查看"}},[v._v("#")]),v._v(" 信号源查看")]),v._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[v._v("WARNING")]),v._v(" "),e("p",[v._v("1.17后该功能被移除")])]),v._v(" "),e("p",[v._v("该功能需要"),e("code",[v._v("self rs true")]),v._v("后方可使用\n使用木棍右击红石原件即可，屏幕会输出该原件的红石信号的值(这个值对中继器比较器来说是无效数据)，下面几行是这个原件的信号源坐标以及其红石信号值，同时在游戏内也会在信号源的头顶生成白色烟雾粒子。")])])}),[],!1,null,null,null);_.default=c.exports}}]);