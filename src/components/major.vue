<template>
                 <div class="major-range clearfix">
                    <div class="left-title">专业层次：</div>
                    <div class="right-area">
                          <filter-item v-for="(value,index) in majorRangeList" :key="index" :index="index" :range-object="value" :catagory="'专业层次'"></filter-item>
                      </span>
                    </div>
                </div>
</template>

<script>
import filterItem from './filterItem';
export default {
  name: "major",
  components:{
     filterItem,
  },
  props: {
    majorRangeList: {
      required: true,
      type: Array
    }
  }
};
</script>
<style>
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
  text-align: left;
}
</style>
