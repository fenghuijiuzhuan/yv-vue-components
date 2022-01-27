/*
 * @path        : \yv-vue-components\examples\route.config.js
 * @message     : 
 * @Author      : YvanGuo
 */
import navConfig from './nav.config';

const load = function(path) {
  return r => require.ensure([], () =>
    r(require(`./pages/${path}.vue`)))
};

const loadDocs = function(path) {
  return r => require.ensure([], () =>
    r(require(`./docs${path}.md`)));
};

const registerRoute = (navConfig) => {
  let route = [
    {
      path: `/`, // 首页
      meta: {},
      name: 'home',
      component: load('index')
    },
    {
      path: `/component`,
      redirect: `/component/scroll-tabs`,
      component: load('component'),
      children: []
    },
  ];
  navConfig.forEach(nav => { // nav：路由对象
    if (nav.href) return;
    if (nav.groups) {
      nav.groups.forEach(group => {
        group.list.forEach(nav => {
          addRoute(nav);
        });
      });
    } else if (nav.children) {
      nav.children.forEach(nav => {
        addRoute(nav);
      });
    } else {
      addRoute(nav);
    }
  });
  function addRoute(page) {
    const component = loadDocs(page.path);
    let child = {
      path: page.path.slice(1),
      meta: {
        title: page.title || page.name,
        description: page.description
      },
      name: 'component-' + (page.title || page.name),
      component: component.default || component
    };

    route[1].children.push(child);
  }

  return route;
};

let route = registerRoute(navConfig);

route.push({
  path: '/play',
  name: 'play',
  component: require('./play/index.vue')
});

route = route.concat([{
  path: '*',
  redirect: '/'
}]);

export default route;
