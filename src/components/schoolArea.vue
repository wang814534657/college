<template>
                       <div class="school-area clearfix">
                           <div class="left-title">高校地区：</div>
                           <div class="right-area">
                                <filter-item v-for="(value,index) in schoolAreaList" :catagory="'高校地区'" :index="index" :key="index" :range-object="value"></filter-item>
                           </div>    
                       </div>
</template>

<script>

import filterItem from "./filterItem";
export default {
  name: "school_area",
  components: {
    filterItem
  },
  props: {
    schoolAreaList: {
      required: true,
      type: Array
    }
  },
  data: function() {
    return {
      sreset: false
    };
  },
  mounted: function() {}
};
</script>
<style scoped>
.left-title,
.right-area {
  float: left;
  box-sizing: border-box;
}
.left-title {
  margin: 5px 0;
  text-indent: 10px;
  width: 10%;
}
.right-area {
  width: 90%;
}
</style>
