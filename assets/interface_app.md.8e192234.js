import{_ as t,c as d,o as e,a}from"./app.dbcb0a6f.js";const f='{"title":"propertys","description":"","frontmatter":{},"headers":[{"level":2,"title":"propertys","slug":"propertys"},{"level":2,"title":"methods","slug":"methods"}],"relativePath":"interface/app.md","lastUpdated":1653027185000}',r={},o=a('<div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u7EE7\u627F\u81EA <a href="/interface/plugin.html">Plugin</a></p></div><h2 id="propertys" tabindex="-1">propertys <a class="header-anchor" href="#propertys" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>middlewares</td><td><a href="/interface/middleware.html">Middleware</a>[]</td><td>\u5B58\u653EApp\u4E0A\u7684\u6240\u6709\u4E2D\u95F4\u4EF6</td></tr><tr><td>bots</td><td><a href="/interface/bot.html">Bot</a>[]</td><td>\u5B58\u653EApp\u4E0A\u7684\u6240\u6709Bot</td></tr><tr><td>commandList</td><td><a href="/interface/command.html">Command</a>[]</td><td>\u5B58\u653EApp\u4E0A\u7684\u6240\u6709\u6307\u4EE4</td></tr><tr><td>_commands</td><td>Map&lt;string,<a href="/interface/command.html">Command</a>&gt;</td><td>\u5E26\u7ED3\u6784\u4FE1\u606F\u7684\u6307\u4EE4Map</td></tr></tbody></table><h2 id="methods" tabindex="-1">methods <a class="header-anchor" href="#methods" aria-hidden="true">#</a></h2><table><thead><tr><th>\u65B9\u6CD5</th><th>\u53C2\u6570</th><th>\u8FD4\u56DE\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>addBot</td><td>config:<a href="/config/bot.html"><code>Bot.Config</code></a></td><td><a href="/interface/bot.html">Bot</a></td><td>\u6DFB\u52A0\u4E00\u4E2ABot</td></tr><tr><td>removeBot</td><td>uin:<code>number</code></td><td>boolean</td><td>\u79FB\u9664\u6307\u5B9ABot</td></tr><tr><td>broadcast</td><td>msgChannelIds:<code>MsgChannelId[]</code>,msg:<a href="https://oicqjs.github.io/oicq/modules.html#Sendable" target="_blank" rel="noopener noreferrer"><code>Sendable</code></a></td><td>void</td><td>\u5E7F\u64AD\u6D88\u606F</td></tr><tr><td>start</td><td>-</td><td>void</td><td>\u542F\u52A8App</td></tr></tbody></table>',5),h=[o];function s(n,c,i,l,p,m){return e(),d("div",null,h)}var b=t(r,[["render",s]]);export{f as __pageData,b as default};
