(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-assess-assess"],{"0b11":function(s,t,e){"use strict";e.r(t);var i=e("9ed3f"),a=e.n(i);for(var n in i)"default"!==n&&function(s){e.d(t,s,(function(){return i[s]}))}(n);t["default"]=a.a},"2f1c":function(s,t,e){"use strict";var i;e.d(t,"b",(function(){return a})),e.d(t,"c",(function(){return n})),e.d(t,"a",(function(){return i}));var a=function(){var s=this,t=s.$createElement,i=s._self._c||t;return i("v-uni-view",{staticClass:"assess"},[i("v-uni-view",{staticClass:"assess-top"}),i("v-uni-view",{staticClass:"assess-bottom"},[i("v-uni-view",{staticClass:"assess-list"},[i("v-uni-view",{staticClass:"assess-list-item"},[i("v-uni-label",{attrs:{for:"name"}},[s._v("车牌号")]),i("v-uni-view",[i("select",{staticClass:"selectType"},s._l(s.plate,(function(t,e){return i("option",{key:e,domProps:{value:t}},[s._v(s._s(t))])})),0)]),i("v-uni-view",[i("v-uni-input",{attrs:{type:"text",value:"MG9887"}})],1)],1),i("v-uni-view",{staticClass:"assess-list-item"},[i("v-uni-label",[s._v("车主手机号")]),i("v-uni-input",{attrs:{type:"text",value:"",placeholder:"请输入手机号"}}),i("v-uni-image",{attrs:{src:e("eb4a"),mode:""}})],1),i("v-uni-view",{staticClass:"assess-list-item"},[i("v-uni-label",[s._v("品牌型号")]),i("v-uni-input",{attrs:{type:"text",value:"",placeholder:"请选择品牌型号"}}),i("v-uni-image",{attrs:{src:e("eb4a"),mode:""}})],1),i("v-uni-view",{staticClass:"assess-list-item"},[i("v-uni-label",[s._v("行驶里程")]),i("v-uni-input",{attrs:{type:"text",value:"",placeholder:"请输入行驶里程"}}),i("v-uni-view",[s._v("万公里")])],1)],1)],1),i("v-uni-view",{staticClass:"btn",on:{click:function(t){arguments[0]=t=s.$handleEvent(t),s.assessBtn.apply(void 0,arguments)}}},[s._v("免费估价")])],1)},n=[]},"3df6":function(s,t,e){var i=e("24fb");t=i(!1),t.push([s.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-page-body[data-v-7b0e7ff6]{width:100%;-webkit-box-flex:1;-webkit-flex:1;flex:1;opacity:1;background:#f9f7f7;position:relative}.btn[data-v-7b0e7ff6]{text-align:center;position:fixed;bottom:30px;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);width:315px;height:29px;opacity:1;background:#f0923c;border-radius:15px;font-size:16px;color:#fff;line-height:29px}.assess[data-v-7b0e7ff6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.assess .assess-top[data-v-7b0e7ff6]{height:83px;opacity:1;background:#accb69}.assess .assess-bottom[data-v-7b0e7ff6]{position:absolute;top:40px;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);width:345px;height:218px;opacity:1;background:#fff;border-radius:5px;box-shadow:1px 1px 4px 0 rgba(0,0,0,.16);padding:24px 13px 0 30px;box-sizing:border-box}.assess .assess-bottom .assess-list[data-v-7b0e7ff6]{height:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.assess .assess-bottom .assess-list-item[data-v-7b0e7ff6]{-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;opacity:1;font-size:14px;font-family:PingFang SC,PingFang SC-Regular;font-weight:400;text-align:left;color:#000;border-bottom:1px solid #ededed}.assess .assess-bottom .assess-list-item[data-v-7b0e7ff6]:last-child{border:none}.assess .assess-bottom .assess-list-item > uni-label[data-v-7b0e7ff6]{width:70px;margin-right:40px}.assess .assess-bottom .assess-list-item:nth-child(1) > uni-label[data-v-7b0e7ff6]{width:42px;margin-right:30px}.assess .assess-bottom .assess-list-item:nth-child(1) > uni-view[data-v-7b0e7ff6]:nth-child(2){margin-right:5px}.assess .assess-bottom .assess-list-item:nth-child(1) > uni-view:nth-child(2) select[data-v-7b0e7ff6]{border:none;background-color:#fff}.assess .assess-bottom .assess-list-item uni-image[data-v-7b0e7ff6]{width:7px;height:12px}.assess .assess-bottom .assess-list-item uni-input[data-v-7b0e7ff6]{-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:14px}body.?%PAGE?%[data-v-7b0e7ff6]{background:#f9f7f7}',""]),s.exports=t},"47aa":function(s,t,e){"use strict";var i=e("e81b"),a=e.n(i);a.a},"9ed3f":function(s,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={data:function(){return{plate:["津","粤","京"]}},methods:{assessBtn:function(){uni.navigateTo({url:"/pages/free-assess/free-assess"})}}};t.default=i},b190:function(s,t,e){"use strict";e.r(t);var i=e("2f1c"),a=e("0b11");for(var n in a)"default"!==n&&function(s){e.d(t,s,(function(){return a[s]}))}(n);e("47aa");var o,r=e("f0c5"),l=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"7b0e7ff6",null,!1,i["a"],o);t["default"]=l.exports},e81b:function(s,t,e){var i=e("3df6");"string"===typeof i&&(i=[[s.i,i,""]]),i.locals&&(s.exports=i.locals);var a=e("4f06").default;a("224717d7",i,!0,{sourceMap:!1,shadowMode:!1})},eb4a:function(s,t){s.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAALCAYAAABcUvyWAAAABHNCSVQICAgIfAhkiAAAAEtJREFUGFdjZGBg2ADECUD8AYjhgBHIEgDiCUBcgCwJkgABDEmYBEjSAKozAKQTWQJFEl0CbiSyBIo9eC3H6dwDUD9cQPcgMh/OBgB2qxIswN2qdgAAAABJRU5ErkJggg=="}}]);