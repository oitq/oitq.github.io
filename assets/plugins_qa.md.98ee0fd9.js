import{_ as e,c as d,o as a,a as c}from"./app.dbcb0a6f.js";const b='{"title":"\u95EE\u7B54\u7BA1\u7406","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u63D0\u4F9B\u7684\u670D\u52A1","slug":"\u63D0\u4F9B\u7684\u670D\u52A1"},{"level":2,"title":"\u63D0\u4F9B\u7684\u6307\u4EE4","slug":"\u63D0\u4F9B\u7684\u6307\u4EE4"},{"level":3,"title":"\u95EE\u7B54\u6307\u4EE4\u6837\u4F8B\uFF1A","slug":"\u95EE\u7B54\u6307\u4EE4\u6837\u4F8B\uFF1A"},{"level":2,"title":"\u914D\u7F6E","slug":"\u914D\u7F6E"}],"relativePath":"plugins/qa.md","lastUpdated":1653027185000}',o={},t=c('<h1 id="\u95EE\u7B54\u7BA1\u7406" tabindex="-1">\u95EE\u7B54\u7BA1\u7406 <a class="header-anchor" href="#\u95EE\u7B54\u7BA1\u7406" aria-hidden="true">#</a></h1><h2 id="\u63D0\u4F9B\u7684\u670D\u52A1" tabindex="-1">\u63D0\u4F9B\u7684\u670D\u52A1 <a class="header-anchor" href="#\u63D0\u4F9B\u7684\u670D\u52A1" aria-hidden="true">#</a></h2><p>QA</p><p>\u53EF\u901A\u8FC7ctx.qa.addQuestion\u6DFB\u52A0\u95EE\u7B54</p><h2 id="\u63D0\u4F9B\u7684\u6307\u4EE4" tabindex="-1">\u63D0\u4F9B\u7684\u6307\u4EE4 <a class="header-anchor" href="#\u63D0\u4F9B\u7684\u6307\u4EE4" aria-hidden="true">#</a></h2><table><thead><tr><th>\u6307\u4EE4\u540D</th><th>\u89E6\u53D1\u4E8B\u4EF6</th><th>\u4F9D\u8D56\u670D\u52A1</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>qa</td><td>message</td><td><a href="/plugins/database.html">database</a></td><td>\u589E\u5220\u6539\u67E5\u95EE\u7B54</td></tr></tbody></table><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u522B\u540D\uFF1A#</p></div><h3 id="\u95EE\u7B54\u6307\u4EE4\u6837\u4F8B\uFF1A" tabindex="-1">\u95EE\u7B54\u6307\u4EE4\u6837\u4F8B\uFF1A <a class="header-anchor" href="#\u95EE\u7B54\u6307\u4EE4\u6837\u4F8B\uFF1A" aria-hidden="true">#</a></h3><h4 id="\u589E\u52A0\u95EE\u7B54-\u57FA\u672C" tabindex="-1">\u589E\u52A0\u95EE\u7B54-\u57FA\u672C <a class="header-anchor" href="#\u589E\u52A0\u95EE\u7B54-\u57FA\u672C" aria-hidden="true">#</a></h4><p>qa \u5141\u8BB8\u4F60\u901A\u8FC7 qa [question:string] [answer:string]\u7684\u683C\u5F0F\u6DFB\u52A0\u95EE\u7B54</p><p><code>qa \u4F60\u597D\u5440 \u90FD\u597D\u90FD\u597D</code></p><p>\u6B64\u65F6\uFF0C\u5728\u7528\u6237\u8F93\u5165<code>\u4F60\u597D\u5440</code>\u65F6\u5C06\u4F1A\u56DE\u7B54<code>\u90FD\u597D\u90FD\u597D</code></p><h4 id="\u589E\u52A0\u95EE\u7B54-\u8BBE\u7F6E\u89E6\u53D1\u6982\u7387\u6743\u91CD-\u9ED8\u8BA4\uFF1A1" tabindex="-1">\u589E\u52A0\u95EE\u7B54-\u8BBE\u7F6E\u89E6\u53D1\u6982\u7387\u6743\u91CD(\u9ED8\u8BA4\uFF1A1) <a class="header-anchor" href="#\u589E\u52A0\u95EE\u7B54-\u8BBE\u7F6E\u89E6\u53D1\u6982\u7387\u6743\u91CD-\u9ED8\u8BA4\uFF1A1" aria-hidden="true">#</a></h4><p>\u5728\u6DFB\u52A0\u95EE\u7B54\u7684\u540C\u65F6\uFF0C\u4F60\u53EF\u4EE5\u8BBE\u5B9A\u8BE5\u95EE\u7B54\u7684\u89E6\u53D1\u6982\u7387\u6743\u91CD</p><p><code>qa -p 2 \u4F60\u597D\u5440 \u6211\u4E0D\u592A\u597D</code></p><p>\u6B64\u65F6\uFF0C\u5728\u7528\u6237\u8F93\u5165<code>\u4F60\u597D\u5440</code>\u65F6\u5C06\u67091/(1+2)\u7684\u6982\u7387\u56DE\u7B54<code>\u90FD\u597D\u90FD\u597D</code>\uFF0C\u67092/(1+2)\u7684\u6982\u7387\u56DE\u7B54<code>\u6211\u4E0D\u592A\u597D</code></p><h4 id="\u589E\u52A0\u95EE\u7B54-\u8BBE\u7F6E\u89E6\u53D1\u573A\u666F-\u9ED8\u8BA4\uFF1A\u6240\u6709\u73AF\u5883\uFF0C\u53EF\u9009\uFF1Agroup-private-group-\u7FA4\u53F7-\uFF0Cprivate-\u597D\u53CBqq" tabindex="-1">\u589E\u52A0\u95EE\u7B54-\u8BBE\u7F6E\u89E6\u53D1\u573A\u666F(\u9ED8\u8BA4\uFF1A\u6240\u6709\u73AF\u5883\uFF0C\u53EF\u9009\uFF1Agroup,private,group:[\u7FA4\u53F7]\uFF0Cprivate:[\u597D\u53CBqq]) <a class="header-anchor" href="#\u589E\u52A0\u95EE\u7B54-\u8BBE\u7F6E\u89E6\u53D1\u573A\u666F-\u9ED8\u8BA4\uFF1A\u6240\u6709\u73AF\u5883\uFF0C\u53EF\u9009\uFF1Agroup-private-group-\u7FA4\u53F7-\uFF0Cprivate-\u597D\u53CBqq" aria-hidden="true">#</a></h4><p>\u5728\u6DFB\u52A0\u95EE\u7B54\u7684\u540C\u65F6\uFF0C\u4F60\u53EF\u4EE5\u6307\u5B9A\u8BE5\u95EE\u7B54\u7684\u89E6\u53D1\u73AF\u5883</p><p><code>qa -t group \u4F60\u8BE5\u5728\u54EA\u513F\u89E6\u53D1 \u6211\u53EA\u5728\u7FA4\u804A\u89E6\u53D1</code></p><p>\u6B64\u65F6\uFF0C\u53EA\u6709\u5728\u7FA4\u804A\u4E2D\u8F93\u5165<code>\u4F60\u8BE5\u5728\u54EA\u513F\u89E6\u53D1</code>\uFF0C\u624D\u4F1A\u56DE\u7B54<code>\u6211\u53EA\u5728\u7FA4\u804A\u89E6\u53D1</code></p><h4 id="\u589E\u52A0\u95EE\u7B54-\u91CD\u5B9A\u5411\u95EE\u7B54" tabindex="-1">\u589E\u52A0\u95EE\u7B54-\u91CD\u5B9A\u5411\u95EE\u7B54 <a class="header-anchor" href="#\u589E\u52A0\u95EE\u7B54-\u91CD\u5B9A\u5411\u95EE\u7B54" aria-hidden="true">#</a></h4><p>\u5728\u6DFB\u52A0\u95EE\u7B54\u7684\u540C\u65F6\uFF0C\u4F60\u901A\u8FC7<code>=&gt;</code>\u6307\u5B9A\u89E6\u53D1\u8BE5\u95EE\u9898\u65F6\u8DF3\u8F6C\u5230\u5DF2\u6709\u7684\u54EA\u4E00\u6761\u56DE\u7B54</p><p><code>qa hello =&gt; \u4F60\u597D\u5440</code></p><p>\u6B64\u65F6\uFF0C\u5F53\u7528\u6237\u8F93\u5165<code>hello</code>\u65F6\uFF0C\u5C06\u7B49\u540C\u4E8E\u8F93\u5165\u4E86<code>\u4F60\u597D\u5440</code></p><h4 id="\u589E\u52A0\u95EE\u7B54-\u6B63\u5219\u5339\u914D" tabindex="-1">\u589E\u52A0\u95EE\u7B54-\u6B63\u5219\u5339\u914D <a class="header-anchor" href="#\u589E\u52A0\u95EE\u7B54-\u6B63\u5219\u5339\u914D" aria-hidden="true">#</a></h4><p>\u5728\u6DFB\u52A0\u95EE\u7B54\u7684\u540C\u65F6\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528<code>-x</code>\u8868\u793A\u8BE5\u95EE\u9898\u4E3A\u4E00\u4E2A\u6B63\u5219\u8868\u8FBE\u5F0F\uFF0C\u4E14\u4F60\u53EF\u5728\u56DE\u7B54\u91CC\u9762\u4F7F\u7528\u6B63\u5219\u5339\u914D\u51FA\u6765\u7684\u503C</p><p><code>qa -x /^\u4F60\u662F(\\S+)$ \u4F60\u624D\u662F$1</code></p><p>\u6B64\u65F6\uFF0C\u5F53\u7528\u6237\u8F93\u5165<code>\u4F60\u662F\u50BBX</code>\u65F6\uFF0C\u5C06\u4F1A\u56DE\u7B54<code>\u4F60\u624D\u662F\u50BB\u53C9</code></p><h4 id="\u589E\u52A0\u95EE\u7B54-\u63D2\u503C\u8C03\u7528" tabindex="-1">\u589E\u52A0\u95EE\u7B54-\u63D2\u503C\u8C03\u7528 <a class="header-anchor" href="#\u589E\u52A0\u95EE\u7B54-\u63D2\u503C\u8C03\u7528" aria-hidden="true">#</a></h4><p>\u5728\u6DFB\u52A0\u95EE\u7B54\u7684\u540C\u65F6\uFF0C\u4F60\u53EF\u4EE5\u5728\u56DE\u7B54\u91CC\u9762\u4F7F\u7528<code>$(command)</code>\u7684\u5F62\u5F0F\u8C03\u7528\u5DF2\u5B58\u5728\u7684\u6307\u4EE4\uFF0C\u6307\u4EE4\u8FD4\u56DE\u503C\u5C06\u4F1A\u66FF\u6362\u5BF9\u5E94\u4F4D\u7F6E\u7684\u6587\u672C</p><p><code>qa \u51E0\u70B9\u4E86 \u73B0\u5728\u7684\u65F6\u95F4\u662F\uFF1A$(time)</code></p><p>\u6B64\u65F6\uFF0C\u5F53\u7528\u6237\u8F93\u5165<code>\u51E0\u70B9\u4E86</code>\u65F6\uFF0C\u5C06\u4F1A\u56DE\u7B54<code>\u73B0\u5728\u7684\u65F6\u95F4\u662F:2022-05-19 12:00:00</code>\uFF08\u8FD4\u56DE\u5F53\u524D\u65F6\u95F4\uFF0C\u6B64\u5904\u4EC5\u505A\u529F\u80FD\u5C55\u793A\uFF0C\u5E76\u975E\u5B9E\u9645\u6570\u636E\uFF09</p><h4 id="\u7F16\u8F91\u95EE\u7B54" tabindex="-1">\u7F16\u8F91\u95EE\u7B54 <a class="header-anchor" href="#\u7F16\u8F91\u95EE\u7B54" aria-hidden="true">#</a></h4><p>\u6DFB\u52A0<code>-e</code>\u9009\u9879\u8868\u793A\u5C06\u6307\u5B9A\u95EE\u9898\u7684\u95EE\u7B54\u66F4\u6539\u4E3A\u5F53\u524D\u56DE\u7B54</p><p><code>qa -e \u51E0\u70B9\u4E86 \u73B0\u5728\u7684\u65F6\u95F4\u662F\uFF1A$(time -f hh:mm:ss)</code></p><p>\u6B64\u65F6\uFF0C\u5F53\u7528\u6237\u8F93\u5165<code>\u51E0\u70B9\u4E86</code>\u65F6\uFF0C\u5C06\u4F1A\u56DE\u7B54<code>\u73B0\u5728\u7684\u65F6\u95F4\u662F:12:00:00</code>\uFF08\u8FD4\u56DE\u5F53\u524D\u65F6\u95F4\uFF0C\u6B64\u5904\u4EC5\u505A\u529F\u80FD\u5C55\u793A\uFF0C\u5E76\u975E\u5B9E\u9645\u6570\u636E\uFF09</p><h4 id="\u95EE\u7B54\u5217\u8868" tabindex="-1">\u95EE\u7B54\u5217\u8868 <a class="header-anchor" href="#\u95EE\u7B54\u5217\u8868" aria-hidden="true">#</a></h4><p>\u6DFB\u52A0<code>-l</code>\u9009\u9879\u8868\u793A\u67E5\u770B\u5F53\u524D\u7CFB\u7EDF\u6536\u5F55\u7684\u95EE\u7B54\u5217\u8868\uFF0C\u5DF2\u505A\u5206\u9875\uFF0C\u4F60\u53EF\u989D\u5916\u6DFB\u52A0\u9009\u9879<code>/ number</code>\u63D2\u4EF6\u6307\u5B9A\u9875\u7684\u95EE\u7B54\uFF0C\u9ED8\u8BA4\u7B2C\u4E00\u9875 \u4F8B\uFF1A</p><p><code>qa -l</code>\u67E5\u770B\u7B2C\u4E00\u9875 <code>qa -l / 2</code>\u67E5\u770B\u7B2C\u4E8C\u9875</p><h4 id="\u641C\u7D22\u95EE\u7B54" tabindex="-1">\u641C\u7D22\u95EE\u7B54 <a class="header-anchor" href="#\u641C\u7D22\u95EE\u7B54" aria-hidden="true">#</a></h4><p>\u6DFB\u52A0<code>-s &lt;keyword&gt;</code>\u53EF\u641C\u7D22\u6307\u5B9A\u5173\u952E\u8BCD\u76F8\u5173\u7684\u95EE\u7B54 \u4F8B\uFF1A</p><p><code>qa -s \u4F60\u597D</code>\u67E5\u770B\u5173\u4E8E<code>\u4F60\u597D</code>\u7684\u95EE\u7B54</p><h4 id="\u67E5\u770B\u95EE\u7B54\u8BE6\u60C5" tabindex="-1">\u67E5\u770B\u95EE\u7B54\u8BE6\u60C5 <a class="header-anchor" href="#\u67E5\u770B\u95EE\u7B54\u8BE6\u60C5" aria-hidden="true">#</a></h4><p>\u6DFB\u52A0<code>-d</code>\u9009\u9879\u8868\u793A\u67E5\u770B\u6307\u5B9Aid\u7684\u95EE\u7B54\u8BE6\u60C5\uFF0C\u9700\u8981\u4F60\u4F7F\u7528<code>-i</code>\u6307\u5B9Aid\u6216\u8005\u76F4\u63A5\u4F7F\u7528\u5FEB\u6377\u65B9\u5F0F<code>#&lt;id&gt; -d</code>\u67E5\u770B\u6307\u5B9A\u95EE\u7B54</p><p><code>qa -d -i 123</code>\u666E\u901A\u6A21\u5F0F</p><p><code>#123 -d</code>\u5FEB\u6377\u65B9\u5F0F\u6A21\u5F0F (id\u8BF7\u67E5\u770B\u95EE\u7B54\u5217\u8868\u7684\u8FD4\u56DE\u503C)</p><h4 id="\u5220\u9664\u95EE\u7B54" tabindex="-1">\u5220\u9664\u95EE\u7B54 <a class="header-anchor" href="#\u5220\u9664\u95EE\u7B54" aria-hidden="true">#</a></h4><p>\u6DFB\u52A0<code>-r</code>\u9009\u9879\u8868\u793A\u5220\u9664\u6307\u5B9Aid\u7684\u95EE\u7B54\uFF0C\u9700\u8981\u4F60\u4F7F\u7528<code>-i</code>\u6307\u5B9Aid\u6216\u8005\u76F4\u63A5\u4F7F\u7528\u5FEB\u6377\u65B9\u5F0F<code>#&lt;id&gt; -r</code>\u5220\u9664\u6307\u5B9A\u95EE\u7B54</p><p><code>qa -r -i 123</code>\u666E\u901A\u6A21\u5F0F</p><p><code>#123 -r</code>\u5FEB\u6377\u65B9\u5F0F\u6A21\u5F0F (id\u8BF7\u67E5\u770B\u95EE\u7B54\u5217\u8868\u7684\u8FD4\u56DE\u503C)</p><h2 id="\u914D\u7F6E" tabindex="-1">\u914D\u7F6E <a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a></h2><p>\u65E0</p>',52),r=[t];function h(i,p,s,n,l,u){return a(),d("div",null,r)}var f=e(o,[["render",h]]);export{b as __pageData,f as default};
