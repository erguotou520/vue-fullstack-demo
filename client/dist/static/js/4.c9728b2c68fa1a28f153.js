webpackJsonp([4,6,8,9],{95:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={methods:{sendMessage:function(){this.$socket.emit("client:hello","client hello")}},mounted:function(){var e=this;this.$socket.on("server:hello",function(t){e.$message.info("Received from server: "+t)})}}},194:function(e,t,n){var o,s;o=n(95);var r=n(200);s=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(s=o=o.default),"function"==typeof s&&(s=s.options),s.render=r.render,s.staticRenderFns=r.staticRenderFns,e.exports=o},200:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return t("content-module",{attrs:{name:"dashboard"}},["\n  Dashboard\n  ",t("el-button",{attrs:{type:"info"},nativeOn:{click:function(t){e.sendMessage(t)}}},["Send hello"])])},staticRenderFns:[]}}});
//# sourceMappingURL=4.c9728b2c68fa1a28f153.js.map