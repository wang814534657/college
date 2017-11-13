<template>
  <el-table
    :data="subjectList"
    border
    style="width: 100%">
    <el-table-column
      prop="subject"
      label="选考科目"
      >
    </el-table-column>
    <el-table-column
      prop="collegesCount"
      label="高校数"
      >
    </el-table-column>
    <el-table-column
      prop="majorCount"
      label="专业(类)数">
    </el-table-column>
    <el-table-column
      prop="rate"
      label="科目比例">
    </el-table-column>
   <el-table-column
      prop="subject"
      label="选考科目"
      >
    </el-table-column>
    <el-table-column
      prop="collegesCount"
      label="高校数"
      >
    </el-table-column>
    <el-table-column
      prop="majorCount"
      label="专业(类)数">
    </el-table-column>
    <el-table-column
      prop="rate"
      label="科目比例">
    </el-table-column>
   
  </el-table>
</template>

<script>
export default {
  name: "table",
  data() {
    return {
      tableData: []
    };
  },
  props: {
    subjectList: {
      required: true,
    }
  },
  mounted: function() {
    
    this.tableData = this.subjectList;
  }
};
</script>
<style scoped>
   .has-gutter tr th{
     background: rgba(0, 160, 92, 1)!important;
     color: #fff;
   }
</style>
