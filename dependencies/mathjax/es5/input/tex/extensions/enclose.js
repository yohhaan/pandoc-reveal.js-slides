!function(){"use strict";var a={645:function(a,t){t.x=void 0,t.x="3.2.2"},654:function(a,t,e){var o=this&&this.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(t,"__esModule",{value:!0}),t.EncloseConfiguration=t.EncloseMethods=t.ENCLOSE_OPTIONS=void 0;var n=e(783),r=e(691),i=o(e(938));t.ENCLOSE_OPTIONS={"data-arrowhead":1,color:1,mathcolor:1,background:1,mathbackground:1,"data-padding":1,"data-thickness":1},t.EncloseMethods={},t.EncloseMethods.Enclose=function(a,e){var o=a.GetArgument(e).replace(/,/g," "),n=a.GetBrackets(e,""),r=a.ParseArg(e),l=i.default.keyvalOptions(n,t.ENCLOSE_OPTIONS);l.notation=o,a.Push(a.create("node","menclose",[r],l))},new r.CommandMap("enclose",{enclose:"Enclose"},t.EncloseMethods),t.EncloseConfiguration=n.Configuration.create("enclose",{handler:{macro:["enclose"]}})},155:function(a,t){MathJax._.components.global.isObject,MathJax._.components.global.combineConfig,MathJax._.components.global.combineDefaults,t.bK=MathJax._.components.global.combineWithMathJax,MathJax._.components.global.MathJax},783:function(a,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Configuration=MathJax._.input.tex.Configuration.Configuration,t.ConfigurationHandler=MathJax._.input.tex.Configuration.ConfigurationHandler,t.ParserConfiguration=MathJax._.input.tex.Configuration.ParserConfiguration},938:function(a,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=MathJax._.input.tex.ParseUtil.default},691:function(a,t){Object.defineProperty(t,"__esModule",{value:!0}),t.parseResult=MathJax._.input.tex.SymbolMap.parseResult,t.AbstractSymbolMap=MathJax._.input.tex.SymbolMap.AbstractSymbolMap,t.RegExpMap=MathJax._.input.tex.SymbolMap.RegExpMap,t.AbstractParseMap=MathJax._.input.tex.SymbolMap.AbstractParseMap,t.CharacterMap=MathJax._.input.tex.SymbolMap.CharacterMap,t.DelimiterMap=MathJax._.input.tex.SymbolMap.DelimiterMap,t.MacroMap=MathJax._.input.tex.SymbolMap.MacroMap,t.CommandMap=MathJax._.input.tex.SymbolMap.CommandMap,t.EnvironmentMap=MathJax._.input.tex.SymbolMap.EnvironmentMap}},t={};function e(o){var n=t[o];if(void 0!==n)return n.exports;var r=t[o]={exports:{}};return a[o].call(r.exports,r,r.exports,e),r.exports}var o=e(155),n=e(645),r=e(654);MathJax.loader&&MathJax.loader.checkVersion("[tex]/enclose",n.x,"tex-extension"),(0,o.bK)({_:{input:{tex:{enclose:{EncloseConfiguration:r}}}}})}();