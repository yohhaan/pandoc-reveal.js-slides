!function(){"use strict";var e={645:function(e,t){t.x=void 0,t.x="3.2.2"},186:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.AmsCdConfiguration=void 0;var o=a(783);a(309),t.AmsCdConfiguration=o.Configuration.create("amscd",{handler:{character:["amscd_special"],macro:["amscd_macros"],environment:["amscd_environment"]},options:{amscd:{colspace:"5pt",rowspace:"5pt",harrowsize:"2.75em",varrowsize:"1.75em",hideHorizontalLabels:!1}}})},309:function(e,t,a){var o=this&&this.__createBinding||(Object.create?function(e,t,a,o){void 0===o&&(o=a);var r=Object.getOwnPropertyDescriptor(t,a);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,o,r)}:function(e,t,a,o){void 0===o&&(o=a),e[o]=t[a]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)"default"!==a&&Object.prototype.hasOwnProperty.call(e,a)&&o(t,e,a);return r(t,e),t},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var l=n(a(691)),c=i(a(66)),s=i(a(330));new l.EnvironmentMap("amscd_environment",c.default.environment,{CD:"CD"},s.default),new l.CommandMap("amscd_macros",{minCDarrowwidth:"minCDarrowwidth",minCDarrowheight:"minCDarrowheight"},s.default),new l.MacroMap("amscd_special",{"@":"arrow"},s.default)},330:function(e,t,a){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var r=o(a(823)),n=a(106),i=a(854),l=o(a(677)),c={CD:function(e,t){e.Push(t);var a=e.itemFactory.create("array"),o=e.configuration.options.amscd;return a.setProperties({minw:e.stack.env.CD_minw||o.harrowsize,minh:e.stack.env.CD_minh||o.varrowsize}),a.arraydef={columnalign:"center",columnspacing:o.colspace,rowspacing:o.rowspace,displaystyle:!0},a},arrow:function(e,t){var a=e.string.charAt(e.i);if(!a.match(/[><VA.|=]/))return(0,n.Other)(e,t);e.i++;var o=e.stack.Top();o.isKind("array")&&!o.Size()||(c.cell(e,t),o=e.stack.Top());for(var s,u=o,d=u.table.length%2==1,m=(u.row.length+(d?0:1))%2;m;)c.cell(e,t),m--;var p={minsize:u.getProperty("minw"),stretchy:!0},M={minsize:u.getProperty("minh"),stretchy:!0,symmetric:!0,lspace:0,rspace:0};if("."===a);else if("|"===a)s=e.create("token","mo",M,"\u2225");else if("="===a)s=e.create("token","mo",p,"=");else{var f={">":"\u2192","<":"\u2190",V:"\u2193",A:"\u2191"}[a],h=e.GetUpTo(t+a,a),_=e.GetUpTo(t+a,a);if(">"===a||"<"===a){if(s=e.create("token","mo",p,f),h||(h="\\kern "+u.getProperty("minw")),h||_){var x={width:"+.67em",lspace:".33em"};if(s=e.create("node","munderover",[s]),h){var b=new r.default(h,e.stack.env,e.configuration).mml(),v=e.create("node","mpadded",[b],x);l.default.setAttribute(v,"voffset",".1em"),l.default.setChild(s,s.over,v)}if(_){var g=new r.default(_,e.stack.env,e.configuration).mml();l.default.setChild(s,s.under,e.create("node","mpadded",[g],x))}e.configuration.options.amscd.hideHorizontalLabels&&(s=e.create("node","mpadded",s,{depth:0,height:".67em"}))}}else{var C=e.create("token","mo",M,f);s=C,(h||_)&&(s=e.create("node","mrow"),h&&l.default.appendChildren(s,[new r.default("\\scriptstyle\\llap{"+h+"}",e.stack.env,e.configuration).mml()]),C.texClass=i.TEXCLASS.ORD,l.default.appendChildren(s,[C]),_&&l.default.appendChildren(s,[new r.default("\\scriptstyle\\rlap{"+_+"}",e.stack.env,e.configuration).mml()]))}}s&&e.Push(s),c.cell(e,t)},cell:function(e,t){var a=e.stack.Top();(a.table||[]).length%2==0&&0===(a.row||[]).length&&e.Push(e.create("node","mpadded",[],{height:"8.5pt",depth:"2pt"})),e.Push(e.itemFactory.create("cell").setProperties({isEntry:!0,name:t}))},minCDarrowwidth:function(e,t){e.stack.env.CD_minw=e.GetDimen(t)},minCDarrowheight:function(e,t){e.stack.env.CD_minh=e.GetDimen(t)}};t.default=c},155:function(e,t){MathJax._.components.global.isObject,MathJax._.components.global.combineConfig,MathJax._.components.global.combineDefaults,t.bK=MathJax._.components.global.combineWithMathJax,MathJax._.components.global.MathJax},854:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.TEXCLASS=MathJax._.core.MmlTree.MmlNode.TEXCLASS,t.TEXCLASSNAMES=MathJax._.core.MmlTree.MmlNode.TEXCLASSNAMES,t.indentAttributes=MathJax._.core.MmlTree.MmlNode.indentAttributes,t.AbstractMmlNode=MathJax._.core.MmlTree.MmlNode.AbstractMmlNode,t.AbstractMmlTokenNode=MathJax._.core.MmlTree.MmlNode.AbstractMmlTokenNode,t.AbstractMmlLayoutNode=MathJax._.core.MmlTree.MmlNode.AbstractMmlLayoutNode,t.AbstractMmlBaseNode=MathJax._.core.MmlTree.MmlNode.AbstractMmlBaseNode,t.AbstractMmlEmptyNode=MathJax._.core.MmlTree.MmlNode.AbstractMmlEmptyNode,t.TextNode=MathJax._.core.MmlTree.MmlNode.TextNode,t.XMLNode=MathJax._.core.MmlTree.MmlNode.XMLNode},783:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Configuration=MathJax._.input.tex.Configuration.Configuration,t.ConfigurationHandler=MathJax._.input.tex.Configuration.ConfigurationHandler,t.ParserConfiguration=MathJax._.input.tex.Configuration.ParserConfiguration},677:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=MathJax._.input.tex.NodeUtil.default},66:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=MathJax._.input.tex.ParseMethods.default},691:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.parseResult=MathJax._.input.tex.SymbolMap.parseResult,t.AbstractSymbolMap=MathJax._.input.tex.SymbolMap.AbstractSymbolMap,t.RegExpMap=MathJax._.input.tex.SymbolMap.RegExpMap,t.AbstractParseMap=MathJax._.input.tex.SymbolMap.AbstractParseMap,t.CharacterMap=MathJax._.input.tex.SymbolMap.CharacterMap,t.DelimiterMap=MathJax._.input.tex.SymbolMap.DelimiterMap,t.MacroMap=MathJax._.input.tex.SymbolMap.MacroMap,t.CommandMap=MathJax._.input.tex.SymbolMap.CommandMap,t.EnvironmentMap=MathJax._.input.tex.SymbolMap.EnvironmentMap},823:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=MathJax._.input.tex.TexParser.default},106:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Other=MathJax._.input.tex.base.BaseConfiguration.Other,t.BaseTags=MathJax._.input.tex.base.BaseConfiguration.BaseTags,t.BaseConfiguration=MathJax._.input.tex.base.BaseConfiguration.BaseConfiguration}},t={};function a(o){var r=t[o];if(void 0!==r)return r.exports;var n=t[o]={exports:{}};return e[o].call(n.exports,n,n.exports,a),n.exports}var o=a(155),r=a(645),n=a(186),i=a(330);MathJax.loader&&MathJax.loader.checkVersion("[tex]/amscd",r.x,"tex-extension"),(0,o.bK)({_:{input:{tex:{amscd:{AmsCdConfiguration:n,AmsCdMethods:i}}}}})}();