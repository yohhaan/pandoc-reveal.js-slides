!function(){"use strict";var t={645:function(t,a){a.x=void 0,a.x="3.2.2"},334:function(t,a,e){var o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(a,"__esModule",{value:!0}),a.BboxConfiguration=a.BboxMethods=void 0;var n=e(783),i=e(691),r=o(e(844));a.BboxMethods={},a.BboxMethods.BBox=function(t,a){for(var e,o,n,i=t.GetBrackets(a,""),x=t.ParseArg(a),l=i.split(/,/),M=0,s=l.length;M<s;M++){var c=l[M].trim(),d=c.match(/^(\.\d+|\d+(\.\d*)?)(pt|em|ex|mu|px|in|cm|mm)$/);if(d){if(e)throw new r.default("MultipleBBoxProperty","%1 specified twice in %2","Padding",a);var f=u(d[1]+d[3]);f&&(e={height:"+"+f,depth:"+"+f,lspace:f,width:"+"+2*parseInt(d[1],10)+d[3]})}else if(c.match(/^([a-z0-9]+|\#[0-9a-f]{6}|\#[0-9a-f]{3})$/i)){if(o)throw new r.default("MultipleBBoxProperty","%1 specified twice in %2","Background",a);o=c}else if(c.match(/^[-a-z]+:/i)){if(n)throw new r.default("MultipleBBoxProperty","%1 specified twice in %2","Style",a);n=p(c)}else if(""!==c)throw new r.default("InvalidBBoxProperty",'"%1" doesn\'t look like a color, a padding dimension, or a style',c)}e&&(x=t.create("node","mpadded",[x],e)),(o||n)&&(e={},o&&Object.assign(e,{mathbackground:o}),n&&Object.assign(e,{style:n}),x=t.create("node","mstyle",[x],e)),t.Push(x)};var p=function(t){return t},u=function(t){return t};new i.CommandMap("bbox",{bbox:"BBox"},a.BboxMethods),a.BboxConfiguration=n.Configuration.create("bbox",{handler:{macro:["bbox"]}})},155:function(t,a){MathJax._.components.global.isObject,MathJax._.components.global.combineConfig,MathJax._.components.global.combineDefaults,a.bK=MathJax._.components.global.combineWithMathJax,MathJax._.components.global.MathJax},783:function(t,a){Object.defineProperty(a,"__esModule",{value:!0}),a.Configuration=MathJax._.input.tex.Configuration.Configuration,a.ConfigurationHandler=MathJax._.input.tex.Configuration.ConfigurationHandler,a.ParserConfiguration=MathJax._.input.tex.Configuration.ParserConfiguration},691:function(t,a){Object.defineProperty(a,"__esModule",{value:!0}),a.parseResult=MathJax._.input.tex.SymbolMap.parseResult,a.AbstractSymbolMap=MathJax._.input.tex.SymbolMap.AbstractSymbolMap,a.RegExpMap=MathJax._.input.tex.SymbolMap.RegExpMap,a.AbstractParseMap=MathJax._.input.tex.SymbolMap.AbstractParseMap,a.CharacterMap=MathJax._.input.tex.SymbolMap.CharacterMap,a.DelimiterMap=MathJax._.input.tex.SymbolMap.DelimiterMap,a.MacroMap=MathJax._.input.tex.SymbolMap.MacroMap,a.CommandMap=MathJax._.input.tex.SymbolMap.CommandMap,a.EnvironmentMap=MathJax._.input.tex.SymbolMap.EnvironmentMap},844:function(t,a){Object.defineProperty(a,"__esModule",{value:!0}),a.default=MathJax._.input.tex.TexError.default}},a={};function e(o){var n=a[o];if(void 0!==n)return n.exports;var i=a[o]={exports:{}};return t[o].call(i.exports,i,i.exports,e),i.exports}var o=e(155),n=e(645),i=e(334);MathJax.loader&&MathJax.loader.checkVersion("[tex]/bbox",n.x,"tex-extension"),(0,o.bK)({_:{input:{tex:{bbox:{BboxConfiguration:i}}}}})}();