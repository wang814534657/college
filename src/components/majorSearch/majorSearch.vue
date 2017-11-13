
<template>
<div class="container">  
    <div class="ips">

         <input type="search" placeholder="请输入你所输入的专业名称" class="form-control" id="search" name="searchText" v-model="str">
         {{str}}
         
    </div>
    <div id="btn">
        <input type="button" class="btn btn-success" value="检索" @click="searchtext">
    </div>


<div class="subject clearfix" >
                <p class="subject-title">选考科目分析</p>
                <p class="subject-text">
                  科目比例：要求所选选考科目的专业总数/条件范围内专业总数。
                  以专业为例：经济统计学专业历史所占比例为66.7%，
                  意为选考历史，66.7%的经济统计学专业均可报考。
                </p>
                <Table-list :subject-list = "$store.state.subject_obj" :search-text="text"></Table-list>
            </div>
</div>
</template>
<script>
import TableList from "../table/table";
export default {
  name: "collegesearch",
  components: {
    TableList
  },
  data() {
    return {
      str:"",
      text:"历史",
    };
  },
    methods:{
    searchtext:function(){
      this.text = this.str;
      console.log(this.text);
    }
  },
  created: function() {
    var vm = this;
    this.$http.get("static/college.json").then(function(res) {
      let subjectList = res.data.result.analysisData;
      vm.$store.commit("updatesubject", subjectList);
    });
  },

};
</script>
<style scoped>
.ips {
  width: 550px;
  height: 40px;
  margin: 15px 0 25px 0;
  float: left;
}
#btn {
  margin-top: 15px;
  float: left;
}
.subject {
  text-align: left;
  clear: both;
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
