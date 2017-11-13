<template>
  <div class="tabletwo">
    <el-table :data="schoolList" style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-table :data="tableList" style="width: 100%">
            <el-table-column prop="province" label="高校地区" width="100">
            </el-table-column>
            <el-table-column prop="collegeName" label="高校名称" width="100">
            </el-table-column>
            <el-table-column prop="majorName" label="专业(类)" width="240">
            </el-table-column>
            <el-table-column prop="subjectRangeNames" label="类中所含专业">
            </el-table-column>
            <el-table-column prop="remark" label="选考科目范围" width="240">
            </el-table-column>
          </el-table>
        </template>
      </el-table-column>
      <el-table-column label="高校名称" prop="collegename">
      </el-table-column>
      <el-table-column label="专业类" prop="major">
      </el-table-column>
      <el-table-column label="物理" prop="phy">
      </el-table-column>
      <el-table-column label="化学" prop="chemistry">
      </el-table-column>
      <el-table-column label="生物" prop="biology">
      </el-table-column>
      <el-table-column label="技术" prop="skill">
      </el-table-column>
      <el-table-column label="历史" prop="history">
      </el-table-column>
      <el-table-column label="地理" prop="geography">
      </el-table-column>
      <el-table-column label="政治" prop="politilcs">
      </el-table-column>
    </el-table>
  </div>
</template>

<style>
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
.tabletwo{
  margin-top: 50px;
}
</style>

<script>
export default {
  data() {
    return {};
  },
  props:{
    schoolList:{
      required: true,
    },
    tableList:{
      required: true,
    },
  }
};
</script>