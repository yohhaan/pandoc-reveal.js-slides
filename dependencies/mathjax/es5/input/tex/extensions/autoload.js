!function(){"use strict";var t={645:function(t,e){e.x=void 0,e.x="3.2.2"},310:function(t,e,a){var o=this&&this.__read||function(t,e){var a="function"==typeof Symbol&&t[Symbol.iterator];if(!a)return t;var o,r,n=a.call(t),i=[];try{for(;(void 0===e||e-- >0)&&!(o=n.next()).done;)i.push(o.value)}catch(t){r={error:t}}finally{try{o&&!o.done&&(a=n.return)&&a.call(n)}finally{if(r)throw r.error}}return i},r=this&&this.__values||function(t){var e="function"==typeof Symbol&&Symbol.iterator,a=e&&t[e],o=0;if(a)return a.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&o>=t.length&&(t=void 0),{value:t&&t[o++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")};Object.defineProperty(e,"__esModule",{value:!0}),e.AutoloadConfiguration=void 0;var n=a(783),i=a(691),l=a(365),u=a(636),p=a(284),c=a(32);function s(t,e,a,n){var i,l,c,s;if(p.Package.packages.has(t.options.require.prefix+a)){var d=t.options.autoload[a],M=o(2===d.length&&Array.isArray(d[0])?d:[d,[]],2),h=M[0],m=M[1];try{for(var b=r(h),y=b.next();!y.done;y=b.next()){var _=y.value;x.remove(_)}}catch(t){i={error:t}}finally{try{y&&!y.done&&(l=b.return)&&l.call(b)}finally{if(i)throw i.error}}try{for(var v=r(m),g=v.next();!g.done;g=v.next()){var O=g.value;f.remove(O)}}catch(t){c={error:t}}finally{try{g&&!g.done&&(s=v.return)&&s.call(v)}finally{if(c)throw c.error}}t.string=(n?e+" ":"\\begin{"+e.slice(1)+"}")+t.string.slice(t.i),t.i=0}(0,u.RequireLoad)(t,a)}var x=new i.CommandMap("autoload-macros",{},{}),f=new i.CommandMap("autoload-environments",{},{});e.AutoloadConfiguration=n.Configuration.create("autoload",{handler:{macro:["autoload-macros"],environment:["autoload-environments"]},options:{autoload:(0,c.expandable)({action:["toggle","mathtip","texttip"],amscd:[[],["CD"]],bbox:["bbox"],boldsymbol:["boldsymbol"],braket:["bra","ket","braket","set","Bra","Ket","Braket","Set","ketbra","Ketbra"],bussproofs:[[],["prooftree"]],cancel:["cancel","bcancel","xcancel","cancelto"],color:["color","definecolor","textcolor","colorbox","fcolorbox"],enclose:["enclose"],extpfeil:["xtwoheadrightarrow","xtwoheadleftarrow","xmapsto","xlongequal","xtofrom","Newextarrow"],html:["href","class","style","cssId"],mhchem:["ce","pu"],newcommand:["newcommand","renewcommand","newenvironment","renewenvironment","def","let"],unicode:["unicode"],verb:["verb"]})},config:function(t,e){var a,n,i,p,c,d,M=e.parseOptions,h=M.handlers.get("macro"),m=M.handlers.get("environment"),b=M.options.autoload;M.packageData.set("autoload",{Autoload:s});try{for(var y=r(Object.keys(b)),_=y.next();!_.done;_=y.next()){var v=_.value,g=b[v],O=o(2===g.length&&Array.isArray(g[0])?g:[g,[]],2),J=O[0],C=O[1];try{for(var k=(i=void 0,r(J)),w=k.next();!w.done;w=k.next()){var S=w.value;h.lookup(S)&&"color"!==S||x.add(S,new l.Macro(S,s,[v,!0]))}}catch(t){i={error:t}}finally{try{w&&!w.done&&(p=k.return)&&p.call(k)}finally{if(i)throw i.error}}try{for(var P=(c=void 0,r(C)),q=P.next();!q.done;q=P.next()){var R=q.value;m.lookup(R)||f.add(R,new l.Macro(R,s,[v,!1]))}}catch(t){c={error:t}}finally{try{q&&!q.done&&(d=P.return)&&d.call(P)}finally{if(c)throw c.error}}}}catch(t){a={error:t}}finally{try{_&&!_.done&&(n=y.return)&&n.call(y)}finally{if(a)throw a.error}}M.packageData.get("require")||u.RequireConfiguration.config(t,e)},init:function(t){t.options.require||(0,c.defaultOptions)(t.options,u.RequireConfiguration.options)},priority:10})},155:function(t,e){MathJax._.components.global.isObject,MathJax._.components.global.combineConfig,MathJax._.components.global.combineDefaults,e.bK=MathJax._.components.global.combineWithMathJax,MathJax._.components.global.MathJax},32:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.isObject=MathJax._.util.Options.isObject,e.APPEND=MathJax._.util.Options.APPEND,e.REMOVE=MathJax._.util.Options.REMOVE,e.OPTIONS=MathJax._.util.Options.OPTIONS,e.Expandable=MathJax._.util.Options.Expandable,e.expandable=MathJax._.util.Options.expandable,e.makeArray=MathJax._.util.Options.makeArray,e.keys=MathJax._.util.Options.keys,e.copy=MathJax._.util.Options.copy,e.insert=MathJax._.util.Options.insert,e.defaultOptions=MathJax._.util.Options.defaultOptions,e.userOptions=MathJax._.util.Options.userOptions,e.selectOptions=MathJax._.util.Options.selectOptions,e.selectOptionsFromKeys=MathJax._.util.Options.selectOptionsFromKeys,e.separateOptions=MathJax._.util.Options.separateOptions,e.lookup=MathJax._.util.Options.lookup},783:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.Configuration=MathJax._.input.tex.Configuration.Configuration,e.ConfigurationHandler=MathJax._.input.tex.Configuration.ConfigurationHandler,e.ParserConfiguration=MathJax._.input.tex.Configuration.ParserConfiguration},365:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.Symbol=MathJax._.input.tex.Symbol.Symbol,e.Macro=MathJax._.input.tex.Symbol.Macro},691:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.parseResult=MathJax._.input.tex.SymbolMap.parseResult,e.AbstractSymbolMap=MathJax._.input.tex.SymbolMap.AbstractSymbolMap,e.RegExpMap=MathJax._.input.tex.SymbolMap.RegExpMap,e.AbstractParseMap=MathJax._.input.tex.SymbolMap.AbstractParseMap,e.CharacterMap=MathJax._.input.tex.SymbolMap.CharacterMap,e.DelimiterMap=MathJax._.input.tex.SymbolMap.DelimiterMap,e.MacroMap=MathJax._.input.tex.SymbolMap.MacroMap,e.CommandMap=MathJax._.input.tex.SymbolMap.CommandMap,e.EnvironmentMap=MathJax._.input.tex.SymbolMap.EnvironmentMap},636:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.RequireLoad=MathJax._.input.tex.require.RequireConfiguration.RequireLoad,e.RequireMethods=MathJax._.input.tex.require.RequireConfiguration.RequireMethods,e.options=MathJax._.input.tex.require.RequireConfiguration.options,e.RequireConfiguration=MathJax._.input.tex.require.RequireConfiguration.RequireConfiguration},284:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.PackageError=MathJax._.components.package.PackageError,e.Package=MathJax._.components.package.Package}},e={};function a(o){var r=e[o];if(void 0!==r)return r.exports;var n=e[o]={exports:{}};return t[o].call(n.exports,n,n.exports,a),n.exports}var o=a(155),r=a(645),n=a(310);MathJax.loader&&MathJax.loader.checkVersion("[tex]/autoload",r.x,"tex-extension"),(0,o.bK)({_:{input:{tex:{autoload:{AutoloadConfiguration:n}}}}})}();