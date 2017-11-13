<template>

                       <div class="school-range clearfix">
                           <div class="left-title">高校层次：</div>
                           <div class="right-area">
                               <filter-item v-for="(value,index) in schoolRangeList" :key="index" :index="index" :range-object="value" :catagory="'高校层次'"></filter-item>
                           </div>
                       </div>
</template>

<script>

import filterItem from "./filterItem";

export default {
  name: "school-range",
  components: {
    filterItem
  },
  props: {
    schoolRangeList: {
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


