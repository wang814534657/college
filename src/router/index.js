import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)
import Search from '../components/Search';
import college from '../components/collegeSearch/college';
import majorsearch from '../components/majorSearch/majorSearch';
var route = new Router({
  routes: [{
      path: '/',
      redirect: 'search'
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/college',
      name: 'college',
      component:college
      
    },
    {
      path: '/major',
      name: 'major',
      component: majorsearch
    },

  ]
})
export default route;
