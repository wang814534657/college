<template>
   <div class="container">
        <div class="filter-box">
            <div class="selected-condations clearfix">
                <div class="left-title">已选条件：</div>
                <div class="right-area">
                     <p class="selected-text" v-if="$store.getters.majorselected != '不限'">
                         {{$store.getters.majorselected}}
                         <span class="close"  @click="$store.commit('clear_major')">x</span>
                     </p>
                     <p class="selected-range" v-if="$store.getters.rangeselected != '不限'">
                        {{$store.getters.rangeselected}}
                         <span class="close"  @click="$store.commit('clear_range')">x</span>
                     </p>
                     <p class="selected-area" v-if="$store.getters.areaselected != '不限 ,'">
                         {{$store.getters.areaselected}}
                         <span class="close" @click="$store.commit('clear_area')">x</span>
                     </p>

                </div>
            </div>
            <div class="condations-box">
                <!-- 专业层次 -->
                <major :major-range-list="$store.state.major_range_obj"></major>   
                 <!--高校层次  -->
                <school-range :school-range-list="$store.state.school_range_obj"></school-range>
                <!-- 高校地区 -->
                <school-area :school-area-list="$store.state.school_area_obj"></school-area>
            </div>
            <div class="subject">
                <p class="subject-title">选考科目分析</p>
                <p class="subject-text">
                  科目比例：要求所选选考科目的专业总数/条件范围内专业总数。
                  以专业为例：经济统计学专业历史所占比例为66.7%，
                  意为选考历史，66.7%的经济统计学专业均可报考。
                </p>
                <Table-list :subject-list = "$store.state.subject_obj"></Table-list>
            </div>
        </div>
    </div>

</template>

<script>
import major from "./major";
import schoolRange from "./schoolRange";
import schoolArea from "./schoolArea";
import TableList from "./table/table";

export default {
  name: "Search",
  components: {
    major,
    schoolRange,
    schoolArea,
    TableList
  },
  data() {
    return {};
  },
  created: function() {
    var vm = this;
    // 转化专业层次对象

    this.$http.get("static/majorRange.json").then(function(res) {
      let majorrangelist = res.data.major_range.map((value, index) => {
        return index == 0
          ? { value: value, selected: true }
          : { value: value, selected: false };
      });
      vm.$store.commit("updatemajor", majorrangelist);
    });

    // 转化高校层次的对象

    this.$http.get("static/majorRange.json").then(function(res) {
      let schoolrangelist = res.data.school_range.map((value, index) => {
        return index == 0
          ? { value: value, selected: true }
          : { value: value, selected: false };
      });
      console.log(schoolrangelist);
      vm.$store.commit("updateschool_range", schoolrangelist);
    });

    // // 转化高校地区的对象
    this.$http.get("static/majorRange.json").then(function(res) {
      let schoolarealist = res.data.school_area.map((value, index) => {
        return index == 0
          ? { value: value, selected: true }
          : { value: value, selected: false };
      });

      vm.$store.commit("updateschool_area", schoolarealist);
    });

     this.$http.get("static/college.json").then(function(res){
          let subjectList =  res.data.result.analysisData;
          vm.$store.commit('updatesubject',subjectList);
     });
  },
  mounted: function() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.selected-text,
.selected-range,
.selected-area {
  display: inline-block;
  width: auto;
  border: 1px solid #000;
  padding: 0px 10px;
  border-radius: 5px;
}
.close {
  display: inline-block;
  padding: 5px 6px;
}
.filter-box {
  width: 90%;
  margin: 10px auto;
}
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
  text-align: left;
  width: 90%;
}
.selected-condations {
  padding: 10px;
  line-height: 35px;
}
.condations-box {
  border: 1px solid #ccc;
  padding: 10px;
  line-height: 35px;
}
.filter-item {
  display: inline-block;
  min-width: 70px;
  padding: 0 9px;
  height: 35px;
  color: #333333;
  text-align: center;
  line-height: 35px;
  margin: 5px 5px 5px 16px;
  cursor: pointer;
}
.filter-item.selected {
  background: rgba(0, 160, 92, 1);
  color: #fff;
}
.filter-item:hover {
  background: rgba(0, 160, 92, 1);
  color: #fff;
}
.subject {
  text-align: left;
}
.subject-title {
  width: 100%;
  height: 45px;
  line-height: 45px;
  font-size: 14px;
  border-bottom: 1px solid #ccc;
}

.subject-text {
  color: #f00;
  line-height: 30px;
  font-size: 13px;
}
</style>
