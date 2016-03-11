"use strict";define("dummy/app",["exports","ember","ember/resolver","ember/load-initializers","dummy/config/environment"],function(e,t,r,n,a){var l=void 0;t["default"].MODEL_FACTORY_INJECTIONS=!0,l=t["default"].Application.extend({modulePrefix:a["default"].modulePrefix,podModulePrefix:a["default"].podModulePrefix,Resolver:r["default"]}),(0,n["default"])(l,a["default"].modulePrefix),e["default"]=l}),define("dummy/components/app-version",["exports","ember-cli-app-version/components/app-version","dummy/config/environment"],function(e,t,r){var n=r["default"].APP.name,a=r["default"].APP.version;e["default"]=t["default"].extend({version:a,name:n})}),define("dummy/components/frost-button",["exports","ember-frost-button/components/frost-button"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/components/frost-icon",["exports","ember-frost-icons/components/frost-icon"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/components/frost-text",["exports","ember-frost-text/components/frost-text"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/components/notification-message",["exports","ember-cli-notifications/components/notification-message","dummy/config/environment"],function(e,t,r){var n=r["default"]["ember-cli-notifications"]||{};e["default"]=t["default"].extend({icons:n.icons||"font-awesome"})}),define("dummy/controllers/array",["exports","ember"],function(e,t){e["default"]=t["default"].Controller}),define("dummy/controllers/object",["exports","ember"],function(e,t){e["default"]=t["default"].Controller}),define("dummy/helpers/and",["exports","ember","ember-truth-helpers/helpers/and"],function(e,t,r){var n=null;t["default"].Helper?n=t["default"].Helper.helper(r.andHelper):t["default"].HTMLBars.makeBoundHelper&&(n=t["default"].HTMLBars.makeBoundHelper(r.andHelper)),e["default"]=n}),define("dummy/helpers/eq",["exports","ember","ember-truth-helpers/helpers/equal"],function(e,t,r){var n=null;t["default"].Helper?n=t["default"].Helper.helper(r.equalHelper):t["default"].HTMLBars.makeBoundHelper&&(n=t["default"].HTMLBars.makeBoundHelper(r.equalHelper)),e["default"]=n}),define("dummy/helpers/gt",["exports","ember","ember-truth-helpers/helpers/gt"],function(e,t,r){var n=null;t["default"].Helper?n=t["default"].Helper.helper(r.gtHelper):t["default"].HTMLBars.makeBoundHelper&&(n=t["default"].HTMLBars.makeBoundHelper(r.gtHelper)),e["default"]=n}),define("dummy/helpers/gte",["exports","ember","ember-truth-helpers/helpers/gte"],function(e,t,r){var n=null;t["default"].Helper?n=t["default"].Helper.helper(r.gteHelper):t["default"].HTMLBars.makeBoundHelper&&(n=t["default"].HTMLBars.makeBoundHelper(r.gteHelper)),e["default"]=n}),define("dummy/helpers/is-array",["exports","ember","ember-truth-helpers/helpers/is-array"],function(e,t,r){var n=null;t["default"].Helper?n=t["default"].Helper.helper(r.isArrayHelper):t["default"].HTMLBars.makeBoundHelper&&(n=t["default"].HTMLBars.makeBoundHelper(r.isArrayHelper)),e["default"]=n}),define("dummy/helpers/lt",["exports","ember","ember-truth-helpers/helpers/lt"],function(e,t,r){var n=null;t["default"].Helper?n=t["default"].Helper.helper(r.ltHelper):t["default"].HTMLBars.makeBoundHelper&&(n=t["default"].HTMLBars.makeBoundHelper(r.ltHelper)),e["default"]=n}),define("dummy/helpers/lte",["exports","ember","ember-truth-helpers/helpers/lte"],function(e,t,r){var n=null;t["default"].Helper?n=t["default"].Helper.helper(r.lteHelper):t["default"].HTMLBars.makeBoundHelper&&(n=t["default"].HTMLBars.makeBoundHelper(r.lteHelper)),e["default"]=n}),define("dummy/helpers/not-eq",["exports","ember","ember-truth-helpers/helpers/not-equal"],function(e,t,r){var n=null;t["default"].Helper?n=t["default"].Helper.helper(r.notEqualHelper):t["default"].HTMLBars.makeBoundHelper&&(n=t["default"].HTMLBars.makeBoundHelper(r.notEqualHelper)),e["default"]=n}),define("dummy/helpers/not",["exports","ember","ember-truth-helpers/helpers/not"],function(e,t,r){var n=null;t["default"].Helper?n=t["default"].Helper.helper(r.notHelper):t["default"].HTMLBars.makeBoundHelper&&(n=t["default"].HTMLBars.makeBoundHelper(r.notHelper)),e["default"]=n}),define("dummy/helpers/or",["exports","ember","ember-truth-helpers/helpers/or"],function(e,t,r){var n=null;t["default"].Helper?n=t["default"].Helper.helper(r.orHelper):t["default"].HTMLBars.makeBoundHelper&&(n=t["default"].HTMLBars.makeBoundHelper(r.orHelper)),e["default"]=n}),define("dummy/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){e["default"]=t["default"]}),define("dummy/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){e["default"]=t["default"]}),define("dummy/helpers/xor",["exports","ember","ember-truth-helpers/helpers/xor"],function(e,t,r){var n=null;t["default"].Helper?n=t["default"].Helper.helper(r.xorHelper):t["default"].HTMLBars.makeBoundHelper&&(n=t["default"].HTMLBars.makeBoundHelper(r.xorHelper)),e["default"]=n}),define("dummy/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","dummy/config/environment"],function(e,t,r){e["default"]={name:"App Version",initialize:(0,t["default"])(r["default"].APP.name,r["default"].APP.version)}}),define("dummy/initializers/container-debug-adapter",["exports","ember-resolver/container-debug-adapter"],function(e,t){e["default"]={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0];e.register("container-debug-adapter:main",t["default"]),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("dummy/initializers/data-adapter",["exports","ember"],function(e,t){e["default"]={name:"data-adapter",before:"store",initialize:t["default"].K}}),define("dummy/initializers/ember-data",["exports","ember-data/setup-container","ember-data/-private/core"],function(e,t,r){e["default"]={name:"ember-data",initialize:t["default"]}}),define("dummy/initializers/export-application-global",["exports","ember","dummy/config/environment"],function(e,t,r){function n(){var e=arguments[1]||arguments[0];if(r["default"].exportApplicationGlobal!==!1){var n,a=r["default"].exportApplicationGlobal;n="string"==typeof a?a:t["default"].String.classify(r["default"].modulePrefix),window[n]||(window[n]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete window[n]}}))}}e.initialize=n,e["default"]={name:"export-application-global",initialize:n}}),define("dummy/initializers/injectStore",["exports","ember"],function(e,t){e["default"]={name:"injectStore",before:"store",initialize:t["default"].K}}),define("dummy/initializers/notifications",["exports","ember-cli-notifications/services/notification-messages-service"],function(e,t){e["default"]={name:"notification-messages-service",initialize:function(){var e=arguments[1]||arguments[0];e.register("notification-messages:service",t["default"]),["controller","component","route","router","service"].forEach(function(t){e.inject(t,"notifications","notification-messages:service")})}}}),define("dummy/initializers/store",["exports","ember"],function(e,t){e["default"]={name:"store",after:"ember-data",initialize:t["default"].K}}),define("dummy/initializers/transforms",["exports","ember"],function(e,t){e["default"]={name:"transforms",before:"store",initialize:t["default"].K}}),define("dummy/initializers/truth-helpers",["exports","ember","ember-truth-helpers/utils/register-helper","ember-truth-helpers/helpers/and","ember-truth-helpers/helpers/or","ember-truth-helpers/helpers/equal","ember-truth-helpers/helpers/not","ember-truth-helpers/helpers/is-array","ember-truth-helpers/helpers/not-equal","ember-truth-helpers/helpers/gt","ember-truth-helpers/helpers/gte","ember-truth-helpers/helpers/lt","ember-truth-helpers/helpers/lte"],function(e,t,r,n,a,l,i,d,o,u,p,s,c){function m(){t["default"].Helper||((0,r.registerHelper)("and",n.andHelper),(0,r.registerHelper)("or",a.orHelper),(0,r.registerHelper)("eq",l.equalHelper),(0,r.registerHelper)("not",i.notHelper),(0,r.registerHelper)("is-array",d.isArrayHelper),(0,r.registerHelper)("not-eq",o.notEqualHelper),(0,r.registerHelper)("gt",u.gtHelper),(0,r.registerHelper)("gte",p.gteHelper),(0,r.registerHelper)("lt",s.ltHelper),(0,r.registerHelper)("lte",c.lteHelper))}e.initialize=m,e["default"]={name:"truth-helpers",initialize:m}}),define("dummy/instance-initializers/ember-data",["exports","ember-data/-private/instance-initializers/initialize-store-service"],function(e,t){e["default"]={name:"ember-data",initialize:t["default"]}}),define("dummy/pods/demo/controller",["exports","ember"],function(e,t){e["default"]=t["default"].Controller.extend({error:!0,actions:{text:function(e){this.notifications.addNotification({message:"value: '"+e.value+"'",type:"success",autoClear:!0,clearDuration:2e3})},bind:function(e){this.set("boundText",e.value),this.notifications.addNotification({message:"bound value: '"+e.value+"'",type:"success",autoClear:!0,clearDuration:2e3})},bind2:function(e){this.set("boundText",e.value),this.notifications.addNotification({message:"bound2 value: '"+e.value+"'",type:"success",autoClear:!0,clearDuration:2e3})},toggleError:function(){this.toggleProperty("error")}},autofocus:{alias:"autofocus",template:"\n    {{frost-text <a>autofocus</a>=<bd>true</bd>}}\n    "},disabled:{alias:"disabled",template:"\n      {{frost-text <a>disabled</a>=<bd>true</bd>}}\n    "},error1:{alias:"error",controller:"\n    <ba>isError</ba>: <bd>true</bd>\n    ",template:"\n      {{frost-text <e>classNameBindings</e>='<ba>isError</ba>:<c>error</c>'}}\n    "},readonly:{alias:"readonly",template:"\n      {{frost-text <a>readonly</a>=<bd>true</bd> <a>value</a>=<bd>'read only text'</bd>}}\n    "},oninput:{alias:"on-input",template:"\n      {{frost-text <a>on-input</a>=(<e>action</e> <ac>'updatePassword'</ac>)}}\n    ",controller:"\n      <e>actions</e>: {\n        <ac>updatePassword</ac>(<ad>attrs</ad>) {\n          console.log(<ad>attrs.value</ad>);\n        }\n      }\n    "}})}),define("dummy/pods/demo/route",["exports","ember"],function(e,t){e["default"]=t["default"].Route.extend({})}),define("dummy/pods/demo/template",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.4.2",loc:{source:null,start:{line:2,column:2},end:{line:4,column:2}},moduleName:"dummy/pods/demo/template.hbs"},isEmpty:!1,arity:1,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),r=e.createTextNode("      ");e.appendChild(t,r);var r=e.createComment("");e.appendChild(t,r);var r=e.createTextNode("\n");return e.appendChild(t,r),t},buildRenderNodes:function(e,t,r){var n=new Array(1);return n[0]=e.createMorphAt(t,1,1,r),n},statements:[["inline","notification-message",[],["notification",["subexpr","@mut",[["get","notification",["loc",[null,[3,42],[3,54]]]]],[],[]]],["loc",[null,[3,6],[3,56]]]]],locals:["notification"],templates:[]}}(),t=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.4.2",loc:{source:null,start:{line:43,column:4},end:{line:48,column:4}},moduleName:"dummy/pods/demo/template.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),r=e.createTextNode("      ");e.appendChild(t,r);var r=e.createElement("div");e.setAttribute(r,"class","text");var n=e.createTextNode("Toggle error");e.appendChild(r,n),e.appendChild(t,r);var r=e.createTextNode("\n");return e.appendChild(t,r),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}();return{meta:{fragmentReason:{name:"missing-wrapper",problems:["multiple-nodes"]},revision:"Ember@2.4.2",loc:{source:null,start:{line:1,column:0},end:{line:66,column:0}},moduleName:"dummy/pods/demo/template.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),r=e.createElement("div");e.setAttribute(r,"class","dummy-notification-container");var n=e.createTextNode("\n");e.appendChild(r,n);var n=e.createComment("");e.appendChild(r,n),e.appendChild(t,r);var r=e.createTextNode("\n\n");e.appendChild(t,r);var r=e.createElement("h2"),n=e.createTextNode("frost-text");e.appendChild(r,n),e.appendChild(t,r);var r=e.createTextNode("\n\n");e.appendChild(t,r);var r=e.createElement("div");e.setAttribute(r,"id","content");var n=e.createTextNode("\n  ");e.appendChild(r,n);var n=e.createElement("div");e.setAttribute(n,"class","dummy-header");var a=e.createTextNode("Basic");e.appendChild(n,a),e.appendChild(r,n);var n=e.createTextNode("\n  ");e.appendChild(r,n);var n=e.createElement("div");e.setAttribute(n,"style","padding: 10px 20px;");var a=e.createTextNode("\n    ");e.appendChild(n,a);var a=e.createComment("");e.appendChild(n,a);var a=e.createTextNode("\n  ");e.appendChild(n,a),e.appendChild(r,n);var n=e.createTextNode("\n\n  ");e.appendChild(r,n);var n=e.createElement("div");e.setAttribute(n,"class","dummy-header");var a=e.createTextNode("Action");e.appendChild(n,a),e.appendChild(r,n);var n=e.createTextNode("\n  ");e.appendChild(r,n);var n=e.createElement("div");e.setAttribute(n,"style","padding: 10px 20px;");var a=e.createTextNode("\n    ");e.appendChild(n,a);var a=e.createComment("");e.appendChild(n,a);var a=e.createTextNode("\n  ");e.appendChild(n,a),e.appendChild(r,n);var n=e.createTextNode("\n\n  ");e.appendChild(r,n);var n=e.createElement("div");e.setAttribute(n,"class","dummy-header");var a=e.createTextNode("Bound");e.appendChild(n,a),e.appendChild(r,n);var n=e.createTextNode("\n  ");e.appendChild(r,n);var n=e.createElement("div");e.setAttribute(n,"style","padding: 10px 20px;");var a=e.createTextNode("\n    ");e.appendChild(n,a);var a=e.createComment("");e.appendChild(n,a);var a=e.createTextNode("\n    ");e.appendChild(n,a);var a=e.createElement("br");e.appendChild(n,a);var a=e.createTextNode("Bound Text: ");e.appendChild(n,a);var a=e.createComment("");e.appendChild(n,a);var a=e.createElement("br");e.appendChild(n,a);var a=e.createTextNode("\n    ");e.appendChild(n,a);var a=e.createComment("");e.appendChild(n,a);var a=e.createTextNode("\n  ");e.appendChild(n,a),e.appendChild(r,n);var n=e.createTextNode("\n\n  ");e.appendChild(r,n);var n=e.createElement("div");e.setAttribute(n,"class","dummy-header");var a=e.createTextNode("Error");e.appendChild(n,a),e.appendChild(r,n);var n=e.createTextNode("\n  ");e.appendChild(r,n);var n=e.createElement("div");e.setAttribute(n,"style","padding: 10px 20px;");var a=e.createTextNode("\n    ");e.appendChild(n,a);var a=e.createComment("");e.appendChild(n,a);var a=e.createTextNode("\n");e.appendChild(n,a);var a=e.createComment("");e.appendChild(n,a);var a=e.createTextNode("  ");e.appendChild(n,a),e.appendChild(r,n);var n=e.createTextNode("\n\n  ");e.appendChild(r,n);var n=e.createElement("div");e.setAttribute(n,"class","dummy-header");var a=e.createTextNode("Attributes - e.g. Disabled");e.appendChild(n,a),e.appendChild(r,n);var n=e.createTextNode("\n  ");e.appendChild(r,n);var n=e.createElement("div");e.setAttribute(n,"style","padding: 10px 20px;");var a=e.createTextNode("\n    ");e.appendChild(n,a);var a=e.createComment("");e.appendChild(n,a);var a=e.createTextNode("\n  ");e.appendChild(n,a),e.appendChild(r,n);var n=e.createTextNode("\n\n  ");e.appendChild(r,n);var n=e.createElement("div");e.setAttribute(n,"class","dummy-header");var a=e.createTextNode("Attributes - e.g. Read-only");e.appendChild(n,a),e.appendChild(r,n);var n=e.createTextNode("\n  ");e.appendChild(r,n);var n=e.createElement("div");e.setAttribute(n,"style","padding: 10px 20px;");var a=e.createTextNode("\n    ");e.appendChild(n,a);var a=e.createComment("");e.appendChild(n,a);var a=e.createTextNode("\n  ");e.appendChild(n,a),e.appendChild(r,n);var n=e.createTextNode("\n");e.appendChild(r,n),e.appendChild(t,r);var r=e.createTextNode("\n");return e.appendChild(t,r),t},buildRenderNodes:function(e,t,r){var n=e.childAt(t,[4]),a=e.childAt(n,[11]),l=e.childAt(n,[15]),i=new Array(10);return i[0]=e.createMorphAt(e.childAt(t,[0]),1,1),i[1]=e.createMorphAt(e.childAt(n,[3]),1,1),i[2]=e.createMorphAt(e.childAt(n,[7]),1,1),i[3]=e.createMorphAt(a,1,1),i[4]=e.createMorphAt(a,5,5),i[5]=e.createMorphAt(a,8,8),i[6]=e.createMorphAt(l,1,1),i[7]=e.createMorphAt(l,3,3),i[8]=e.createMorphAt(e.childAt(n,[19]),1,1),i[9]=e.createMorphAt(e.childAt(n,[23]),1,1),i},statements:[["block","each",[["get","notifications",["loc",[null,[2,10],[2,23]]]]],[],0,null,["loc",[null,[2,2],[4,11]]]],["inline","frost-text",[],["autofocus",!0,"placeholder","basic field"],["loc",[null,[12,4],[15,6]]]],["inline","frost-text",[],["on-input",["subexpr","action",["text"],[],["loc",[null,[21,15],[21,30]]]]],["loc",[null,[20,4],[22,6]]]],["inline","frost-text",[],["on-input",["subexpr","action",["bind"],[],["loc",[null,[28,15],[28,30]]]],"value",["subexpr","@mut",[["get","boundText",["loc",[null,[29,12],[29,21]]]]],[],[]]],["loc",[null,[27,4],[30,6]]]],["content","boundText",["loc",[null,[31,20],[31,33]]]],["inline","frost-text",[],["on-input",["subexpr","action",["bind2"],[],["loc",[null,[33,15],[33,31]]]],"value",["subexpr","@mut",[["get","boundText",["loc",[null,[34,12],[34,21]]]]],[],[]]],["loc",[null,[32,4],[35,6]]]],["inline","frost-text",[],["class",["subexpr","concat",[["subexpr","if",[["get","error",[]],["subexpr","-normalize-class",["error",["get","error",[]]],[],[]]],[],[]]," "],[],[]]],["loc",[null,[40,4],[42,6]]]],["block","frost-button",[],["class","small secondary","on-click",["subexpr","action",["toggleError"],[],["loc",[null,[45,15],[45,37]]]]],1,null,["loc",[null,[43,4],[48,21]]]],["inline","frost-text",[],["disabled",!0],["loc",[null,[53,4],[55,6]]]],["inline","frost-text",[],["readonly",!0,"value","Read only text"],["loc",[null,[60,4],[63,6]]]]],locals:[],templates:[e,t]}}())}),define("dummy/router",["exports","ember","dummy/config/environment"],function(e,t,r){var n=t["default"].Router.extend({location:r["default"].locationType});n.map(function(){this.route("demo",{path:"/"})}),e["default"]=n}),define("dummy/templates/components/notification-container",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.4.2",loc:{source:null,start:{line:2,column:2},end:{line:4,column:2}},moduleName:"dummy/templates/components/notification-container.hbs"},isEmpty:!1,arity:1,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),r=e.createTextNode("    ");e.appendChild(t,r);var r=e.createComment("");e.appendChild(t,r);var r=e.createTextNode("\n");return e.appendChild(t,r),t},buildRenderNodes:function(e,t,r){var n=new Array(1);return n[0]=e.createMorphAt(t,1,1,r),n},statements:[["inline","notification-message",[],["notification",["subexpr","@mut",[["get","notification",["loc",[null,[3,40],[3,52]]]]],[],[]]],["loc",[null,[3,4],[3,54]]]]],locals:["notification"],templates:[]}}();return{meta:{fragmentReason:{name:"triple-curlies"},revision:"Ember@2.4.2",loc:{source:null,start:{line:1,column:0},end:{line:6,column:0}},moduleName:"dummy/templates/components/notification-container.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),r=e.createElement("div");e.setAttribute(r,"class","c-notification__container");var n=e.createTextNode("\n");e.appendChild(r,n);var n=e.createComment("");e.appendChild(r,n),e.appendChild(t,r);var r=e.createTextNode("\n");return e.appendChild(t,r),t},buildRenderNodes:function(e,t,r){var n=new Array(1);return n[0]=e.createMorphAt(e.childAt(t,[0]),1,1),n},statements:[["block","each",[["get","notifications",["loc",[null,[2,10],[2,23]]]]],[],0,null,["loc",[null,[2,2],[4,11]]]]],locals:[],templates:[e]}}())}),define("dummy/templates/components/notification-message",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.4.2",loc:{source:null,start:{line:9,column:0},end:{line:11,column:0}},moduleName:"dummy/templates/components/notification-message.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),r=e.createTextNode("  ");e.appendChild(t,r);var r=e.createElement("div");e.setAttribute(r,"class","c-notification__countdown"),e.appendChild(t,r);var r=e.createTextNode("\n");return e.appendChild(t,r),t},buildRenderNodes:function(e,t,r){var n=e.childAt(t,[1]),a=new Array(1);return a[0]=e.createAttrMorph(n,"style"),a},statements:[["attribute","style",["get","notificationClearDuration",["loc",[null,[10,49],[10,74]]]]]],locals:[],templates:[]}}();return{meta:{fragmentReason:{name:"missing-wrapper",problems:["multiple-nodes","wrong-type"]},revision:"Ember@2.4.2",loc:{source:null,start:{line:1,column:0},end:{line:15,column:0}},moduleName:"dummy/templates/components/notification-message.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),r=e.createElement("div");e.setAttribute(r,"class","c-notification__icon");var n=e.createTextNode("\n  ");e.appendChild(r,n);var n=e.createElement("span"),a=e.createTextNode("\n    ");e.appendChild(n,a);var a=e.createElement("i");e.appendChild(n,a);var a=e.createTextNode("\n  ");e.appendChild(n,a),e.appendChild(r,n);var n=e.createTextNode("\n");e.appendChild(r,n),e.appendChild(t,r);var r=e.createTextNode("\n");e.appendChild(t,r);var r=e.createElement("div");e.setAttribute(r,"class","c-notification__content");var n=e.createTextNode("\n  ");e.appendChild(r,n);var n=e.createComment("");e.appendChild(r,n);var n=e.createTextNode("\n");e.appendChild(r,n),e.appendChild(t,r);var r=e.createTextNode("\n");e.appendChild(t,r);var r=e.createComment("");e.appendChild(t,r);var r=e.createElement("span");e.setAttribute(r,"class","c-notification__close"),e.setAttribute(r,"title","Dismiss this notification");var n=e.createTextNode("\n  ");e.appendChild(r,n);var n=e.createElement("i");e.appendChild(r,n);var n=e.createTextNode("\n");e.appendChild(r,n),e.appendChild(t,r);var r=e.createTextNode("\n");return e.appendChild(t,r),t},buildRenderNodes:function(e,t,r){var n=e.childAt(t,[0,1,1]),a=e.childAt(t,[5]),l=e.childAt(a,[1]),i=new Array(5);return i[0]=e.createAttrMorph(n,"class"),i[1]=e.createMorphAt(e.childAt(t,[2]),1,1),i[2]=e.createMorphAt(t,4,4,r),i[3]=e.createElementMorph(a),i[4]=e.createAttrMorph(l,"class"),i},statements:[["attribute","class",["get","notificationIcon",["loc",[null,[3,15],[3,31]]]]],["content","notification.message",["loc",[null,[7,2],[7,26]]]],["block","if",[["get","notification.autoClear",["loc",[null,[9,6],[9,28]]]]],[],0,null,["loc",[null,[9,0],[11,7]]]],["element","action",["removeNotification"],[],["loc",[null,[12,36],[12,67]]]],["attribute","class",["get","closeIcon",["loc",[null,[13,13],[13,22]]]]]],locals:[],templates:[e]}}())}),define("dummy/transitions",["exports"],function(e){e["default"]=function(){}}),define("dummy/config/environment",["ember"],function(e){var t="dummy";try{var r=t+"/config/environment",n=e["default"].$('meta[name="'+r+'"]').attr("content"),a=JSON.parse(unescape(n));return{"default":a}}catch(l){throw new Error('Could not read config from meta tag with name "'+r+'".')}}),runningTests||require("dummy/app")["default"].create({name:"ember-frost-text",version:"v1.3.0"});