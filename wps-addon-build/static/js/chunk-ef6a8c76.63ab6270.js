(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ef6a8c76"],{3511:function(t,n){var e=TypeError,o=9007199254740991;t.exports=function(t){if(t>o)throw e("Maximum allowed index exceeded");return t}},3924:function(t,n,e){},9916:function(t,n,e){"use strict";e.r(n);var o=function(){var t=this,n=t._self._c;return n("div",{staticClass:"hello"},[n("div",{staticClass:"global"},[t._m(0),n("div",{staticClass:"divItem"},[t._v(" 这个示例展示了wps加载项的相关基础能力，与B/S业务系统的交互，请用浏览器打开： "),n("span",{staticStyle:{"font-weight":"bolder",color:"slateblue",cursor:"pointer"},on:{click:function(n){return t.onOpenWeb()}}},[t._v(t._s(t.DemoSpan))])]),t._m(1),n("hr"),n("div",{staticClass:"divItem"},[n("button",{staticStyle:{margin:"3px"},on:{click:function(n){return t.onDocNameClick()}}},[t._v(" 取文件名 ")]),n("button",{staticStyle:{margin:"3px"},on:{click:function(n){return t.onbuttonclick("createTaskPane")}}},[t._v(" 创建任务窗格 ")]),n("button",{staticStyle:{margin:"3px"},on:{click:function(n){return t.onbuttonclick("newDoc")}}},[t._v(" 新建文件 ")]),n("button",{staticStyle:{margin:"3px"},on:{click:function(n){return t.onbuttonclick("addString")}}},[t._v(" 文档开头添加字符串 ")]),n("button",{staticStyle:{margin:"3px"},on:{click:function(n){return t.onbuttonclick("closeDoc")}}},[t._v(" 关闭文件 ")])]),n("hr"),n("div",{staticClass:"divItem"},[t._v(" 文档文件名为："),n("span",[t._v(t._s(t.docName))])])])])},c=[function(){var t=this,n=t._self._c;return n("div",{staticClass:"divItem"},[t._v(" 这是一个网页，按"),n("span",{staticStyle:{"font-weight":"bolder"}},[t._v('"F12"')]),t._v("可以打开调试器。 ")])},function(){var t=this,n=t._self._c;return n("div",{staticClass:"divItem"},[t._v(" 开发文档: "),n("span",{staticStyle:{"font-weight":"bolder",color:"slateblue"}},[t._v("https://open.wps.cn/docs/office")])])}];e("99af");function i(t,n){switch(t){case"getDocName":var e=Application().ActiveDocument;return e?e.Name:"当前没有打开任何文档";case"createTaskPane":var o=wps.PluginStorage.getItem("taskpane_id");if(o){var c=wps.GetTaskPane(o);c.Visible=!0}else{var i=wps.CreateTaskPane("".concat(window.location.protocol,"//").concat(window.location.host)+"/#/taskpane"),a=i.ID;wps.PluginStorage.setItem("taskpane_id",a),i.Visible=!0}break;case"newDoc":Application().Documents.Add();break;case"addString":var r=Application().ActiveDocument;if(r){r.Range(0,0).Text="Hello, wps加载项!";var s=Application().Selection.Range;s&&s.Select()}break;case"closeDoc":if(Application().Documents.Count<2){alert("当前只有一个文档，别关了。");break}var l=Application().ActiveDocument;l&&l.Close();break;case"openWeb":wps.OAAssist.ShellExecute(n);break}}var a={onbuttonclick:i},r=e("cee4"),s={name:"Dialog",data:function(){return{DemoSpan:"",docName:""}},methods:{onbuttonclick:function(t){return a.onbuttonclick(t)},onDocNameClick:function(){this.docName=a.onbuttonclick("getDocName")},onOpenWeb:function(){a.onbuttonclick("openWeb",this.DemoSpan)}},mounted:function(){var t=this;r["a"].get("/.debugTemp/NotifyDemoUrl").then((function(n){t.DemoSpan=n.data}))}},l=s,u=(e("eedf"),e("2877")),p=Object(u["a"])(l,o,c,!1,null,"d36d62fc",null);n["default"]=p.exports},"99af":function(t,n,e){"use strict";var o=e("23e7"),c=e("d039"),i=e("e8b5"),a=e("861d"),r=e("7b0b"),s=e("07fa"),l=e("3511"),u=e("8418"),p=e("65f0"),d=e("1dde"),f=e("b622"),v=e("2d00"),b=f("isConcatSpreadable"),m=v>=51||!c((function(){var t=[];return t[b]=!1,t.concat()[0]!==t})),k=function(t){if(!a(t))return!1;var n=t[b];return void 0!==n?!!n:i(t)},g=!m||!d("concat");o({target:"Array",proto:!0,arity:1,forced:g},{concat:function(t){var n,e,o,c,i,a=r(this),d=p(a,0),f=0;for(n=-1,o=arguments.length;n<o;n++)if(i=-1===n?a:arguments[n],k(i))for(c=s(i),l(f+c),e=0;e<c;e++,f++)e in i&&u(d,f,i[e]);else l(f+1),u(d,f++,i);return d.length=f,d}})},eedf:function(t,n,e){"use strict";e("3924")}}]);