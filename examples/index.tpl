<!--
 * @path        : \yv-vue-components\examples\index.tpl
 * @message     : 
 * @Author      : yvangod
-->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
    />
    <title>YvVueComponents 组件</title>
    <link rel="stylesheet" href="//shadow.elemecdn.com/npm/highlight.js@9.3.0/styles/color-brewer.css">
    <meta
      name="description"
      content="YvVueComponents，基于 Vue 2.0、ElementUI 的桌面端组件库"
    />
  </head>
  <body>
    <script>
      if (!window.Promise) {
        document.write(
          '<script src="//cdn.jsdelivr.net/npm/es6-promise@4.1.1/dist/es6-promise.min.js"><\/script><script>ES6Promise.polyfill()<\/script>'
        )
      }
    </script>
    <div id="app"></div>
    <% if (process.env.NODE_ENV === 'production') { %>
    <script src="//shadow.elemecdn.com/npm/vue@2.5.21/dist/vue.runtime.min.js"></script>
    <script src="//shadow.elemecdn.com/npm/vue-router@3.0.1/dist/vue-router.min.js"></script>
    <script src="//shadow.elemecdn.com/app/element/highlight.pack.b1f71b31-3c07-11e9-ba1a-55bba1877129.js"></script>
    <% } %>
  </body>
</html>
