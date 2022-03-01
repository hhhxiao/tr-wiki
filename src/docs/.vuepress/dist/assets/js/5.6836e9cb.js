(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{361:function(e,t,a){e.exports=a.p+"assets/img/pw.cca3fbcf.png"},362:function(e,t,a){e.exports=a.p+"assets/img/download.b293c632.png"},363:function(e,t,a){e.exports=a.p+"assets/img/howto.6d56fa63.png"},475:function(e,t,a){"use strict";a.r(t);var o=a(59),r=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"application-instruction"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#application-instruction"}},[e._v("#")]),e._v(" Application instruction")]),e._v(" "),o("h2",{attrs:{id:"_0-read-and-agree-the-disclaimer"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_0-read-and-agree-the-disclaimer"}},[e._v("#")]),e._v(" 0. Read and agree the disclaimer")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("Disclaimer\n\nTrapdoor (hereinafter referred to as tr) is a BDS auxiliary software (plug-in) developed by using dll remote injection technology. It provides many functions that are convenient for players and creates convenience for players of electricity generation. In addition, tr itself is totally open source and free, there is no malicious code inside, and in principle, it will not cause any damage to the archive.\n\nHowever, considering the particularity of this type of software, the developer cannot fully guarantee that tr will not cause any damage to the user's level archive. In the event of an accident, the developer will not and cannot be responsible for the loss caused by tr.\n\nIf you continue to use tr plugin, you agree to this statement (or user agreement). If you do not want to take such risks, please stop using tr plugin.\n\nAddendum: Here are some usage suggestions:\n- Update the plugin to the new version in time, because the current tr is still a beta version, in theory, the more you update the fewer bugs\n- Try to turn off unused functions as much as possible\n- It is always a good habit to backup archives in time\n\n2022.1.11\n")])])]),o("h2",{attrs:{id:"_1-download-bds"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_1-download-bds"}},[e._v("#")]),e._v(" 1. Download BDS")]),e._v(" "),o("p",[e._v("The plugin is BDS based, so you will need to download BDS for it. Link:"),o("a",{attrs:{href:"https://www.minecraft.net/en-us/download/server/bedrock",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://www.minecraft.net/en-us/download/server/bedrock"),o("OutboundLink")],1),e._v(" Download the "),o("strong",[e._v("correct")]),e._v(" version of BDS and unzip it into any folder")]),e._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),o("p",[e._v("Having non-ascii characters for folder names is not recommended")])]),e._v(" "),o("h2",{attrs:{id:"_2-enable-loop-back"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_2-enable-loop-back"}},[e._v("#")]),e._v(" 2. Enable loop back")]),e._v(" "),o("p",[e._v("In the default setting of UWP application, loop back is disable(this means it can not connection to local server). "),o("strong",[e._v("You can skip this step if your server is on a cloud server")]),e._v(".Open "),o("code",[e._v("powershell")]),e._v(" with administrator privileges, and run the following command (this command comes from Microsoft's official website):")]),e._v(" "),o("div",{staticClass:"language-powershell extra-class"},[o("pre",{pre:!0,attrs:{class:"language-powershell"}},[o("code",[e._v("CheckNetIsolation"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("exe LoopbackExempt "),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("a "),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("p=S-1-15-2-1958404141-86561845-1752920682-3514627264-368642714-62675701-733520436\n")])])]),o("p",[e._v("The following prompt appears, indicating that the operation was successful:\n"),o("img",{attrs:{src:a(361),alt:""}})]),e._v(" "),o("h2",{attrs:{id:"_3-download-trapdoor"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_3-download-trapdoor"}},[e._v("#")]),e._v(" 3. Download Trapdoor")]),e._v(" "),o("p",[e._v("Go to "),o("a",{attrs:{href:"https://github.com/hhhxiao/TrapDoor/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("Trapdoor's download page"),o("OutboundLink")],1),e._v(" to download the release. The name of release is formated as "),o("code",[e._v("trapdoor-{mod version}-{game version}.zip")]),e._v(", Among them, "),o("code",[e._v("mod version")]),e._v(" indicates the plug-in version, and "),o("code",[e._v("game version")]),e._v(" indicates the supported game version. Note that "),o("strong",[e._v("trapdoor is not backward compatible. The version must be strictly corresponding when using it. The three level version number of the plug-in and BDS must be exactly the same")]),e._v(".\nThe image below shows the download page:\n"),o("img",{attrs:{src:a(362),alt:""}})]),e._v(" "),o("p",[e._v("Then "),o("strong",[e._v("unzip the release and copy all files to the root directory of BDS")]),e._v(" At this time, the path of the relevant configuration files is as follows:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("└───bedrock-server-xxx\n  └───plugins\n    └───trapdoor\n        ├───trapdoor-config.json\n        └───langs\n")])])]),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),o("p",[e._v("In the newer version (0.10+), trapdoor built the language file into the plugin, and the configuration file will be automatically generated at the first startup, so this step can be skipped and you can injectet it in any path.")])]),e._v(" "),o("h2",{attrs:{id:"_4-editing-configuration-file"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_4-editing-configuration-file"}},[e._v("#")]),e._v(" 4. Editing configuration file")]),e._v(" "),o("p",[e._v("You can modify the configuration file to turn off some features according to your needs.")]),e._v(" "),o("h2",{attrs:{id:"_5-injecting-dll-to-start-bds"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_5-injecting-dll-to-start-bds"}},[e._v("#")]),e._v(" 5. Injecting dll to start BDS")]),e._v(" "),o("p",[e._v("Use any dll injector(64bits) to inject"),o("code",[e._v("trapdoor-x.y.z-1.a.b.dll")]),e._v("into"),o("code",[e._v("bedrock_server.exe")]),e._v("and start. Link to an open sourced version: "),o("a",{attrs:{href:"https://github.com/DarthTon/Xenos/releases/tag/2.3.2",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/DarthTon/Xenos/releases/tag/2.3.2 "),o("OutboundLink")],1)]),e._v(" "),o("p",[e._v("If you are using xenos injecting, follow steps below:\n"),o("br"),e._v(" "),o("img",{attrs:{src:a(363),alt:""}})]),e._v(" "),o("p",[e._v("Please check their wiki page if you are using another dll injecting software.")]),e._v(" "),o("h2",{attrs:{id:"_6-install-resource-pack"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_6-install-resource-pack"}},[e._v("#")]),e._v(" 6. Install resource  pack")]),e._v(" "),o("p",[e._v("Install the resource pack from client side "),o("a",{attrs:{href:"https://github.com/OEOTYAN/TrapDoor-CUI",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/OEOTYAN/TrapDoor-CUI"),o("OutboundLink")],1),e._v(" ("),o("strong",[e._v("Not from the server side, it has to be loaded from the client side")]),e._v(")")]),e._v(" "),o("h2",{attrs:{id:"_7-connecting-to-the-server"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_7-connecting-to-the-server"}},[e._v("#")]),e._v(" 7. Connecting to the server")]),e._v(" "),o("p",[e._v("If you are hosting the server locally, the IP address is "),o("code",[e._v("127.0.0.1")]),e._v(",  port is  configured by "),o("code",[e._v("server.property")]),e._v(" which is "),o("code",[e._v("19132")]),e._v(" defaultly.")])])}),[],!1,null,null,null);t.default=r.exports}}]);