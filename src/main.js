// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';


import axios from "axios";
//axios.defaults.baseURL = ' http://10.0.0.132:8088';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';


import router from "./router/index"
import Vuex from "vuex";





// ELEment ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)


Vue.use(Vuex);
import App from './App';

let query = {
  install: function (v) {
    v.prototype.$http = axios;
  }
}

Vue.use(query);

Vue.config.productionTip = false;

let store = new Vuex.Store({
  state: {
    major_range_obj: [],
    school_range_obj: [],
    school_area_obj: [],
    subject_obj:[],
  },
  mutations: {
    updatemajor: function (state, skep) {
         state.major_range_obj = skep;
    },
    updateschool_range: function (state, skep) {
         state.school_range_obj = skep;
    },
    updateschool_area: function (state, skep) {
         state.school_area_obj = skep;
    },

    updatesubject:function(state,skep){
         state.subject_obj = skep; 
         
    },

    //  操作渲染的span数据
    operationMajor: function (state, item) {
      console.log(item);
      let arr = state.major_range_obj;
      arr.map(function (value, index) {
        value.selected = false;
        if (index == item.index) {
          value.selected = item.selected;
        }
      });

      let selected_one = true;
      arr.forEach(function (item, index) {
        //  遍历数组除了不限,继续往下找
        if (index == 0) return;
        // 如果后面的有一个selected为true,  就把开关改变为false
        if (item.selected == true) {
          selected_one = false;
        }
      })
      //  和上面的正好相反,如果除了不限后面的selected没有一个为true,那就把不限高亮或恢复默认选中状态
      if (selected_one == true) {
        arr[0].selected = true;
      }
    },
    operationSchoolRange: function (state, item) {
      console.log(item);
      let arr = state.school_range_obj;
      arr.map(function (value, index) {
        value.selected = false;
        if (index == item.index) {
          value.selected = item.selected;
        }
        return value;
      });

      let selected_one = true;
      arr.forEach(function (item, index) {
        //  遍历数组除了不限,继续往下找
        if (index == 0) return;
        // 如果后面的有一个selected为true,  就把开关改变为false
        if (item.selected == true) {
          selected_one = false;
        }
      })
      //  和上面的正好相反,如果除了不限后面的selected没有一个为true,那就把不限高亮或恢复默认选中状态
      if (selected_one == true) {
        arr[0].selected = true;
      }
    },
    operationSchoolArea: function (state, item) {
      console.log(item);
      let arr = state.school_area_obj;
      arr[0].selected = false;
      if (item.index == 0) {
        arr.map(function (value, index) {
          value.selected = (index == 0)
          return value;
        });
      }
      arr.map(function (value, index) {
        if (index == item.index) {
          value.selected = item.selected;
        }
      });

      let selected_one = true;
      arr.forEach(function (item, index) {
        //  遍历数组除了不限,继续往下找
        if (index == 0) return;
        // 如果后面的有一个selected为true,  就把开关改变为false
        if (item.selected == true) {
          selected_one = false;
        }
      })
      //  和上面的正好相反,如果除了不限后面的selected没有一个为true,那就把不限高亮或恢复默认选中状态
      if (selected_one == true) {
        arr[0].selected = true;
      }

    },

    clear_major: function (state, item) {
      state.major_range_obj.map(function (value, index) {
        value.selected = (index == 0);
        return value;
      })
    },
    clear_range: function (state, item) {
      state.school_range_obj.map(function (value, index) {
        value.selected = (index == 0);
        return value;
      })

    },
    clear_area: function (state, item) {
      state.school_area_obj.map(function (value, index) {
        value.selected = (index == 0);
        return value;
      })

    },
  },
  getters: {
    majorselected: function (state) {
      let str = '';
      let arr = state.major_range_obj;
      arr.forEach(function (value, item) {
        if (value.selected) {
          str += value.value;
        }
      })
      return str;
    },
    rangeselected: function (state) {
      let str = '';
      let arr = state.school_range_obj;
      arr.forEach(function (value, item) {
        if (value.selected) {
          str += value.value;
        }
      })
      return str;
    },
    areaselected: function (state) {
      let str = '';
      let arr = state.school_area_obj;
      arr.forEach(function (value, item) {
        if (value.selected) {
          str += value.value + " ,";
        }
      })
      return str;
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store: store,
  router: router,
  template: '<App/>',
  components: {
    App,
  }
});
