<template>
  <div id="container">
    <label style="font-size:30px;">实时查询</label>
    <label style="font-size:30px;font-weight:bold">抄表</label>
    <el-row :gutter="48">
      <el-col :span="3">
        <label id="test">统计时间</label>
      </el-col>
      <el-col :span="4">
        <el-date-picker v-model="dataPicker" type="date" placeholder="选择日期"></el-date-picker>
      </el-col>
      <el-col :span="0.5">至</el-col>
      <el-col :span="4">
        <el-date-picker v-model="dataPicker" type="date" placeholder="选择日期"></el-date-picker>
      </el-col>
      <el-col :span="3">
        <el-select v-model="value" placeholder="任意指定">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-col>
      <el-col :span="3">
        <label>统计进度</label>
      </el-col>
      <el-col :span="3">
        <el-select v-model="value" placeholder="按楼层">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="6">
        <el-button>查询</el-button>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="2">
        <label>查询结果</label>
      </el-col>
      <el-col :span="6">
        <el-button>导出EXCEL</el-button>
      </el-col>
    </el-row>
    <el-table :data="tableData" height="250" style="width: 100%" :header-cell-style="{background:'#eef1f6',color:'#606266'}">
      <el-table-column prop="level1" label="层级1" width="75"></el-table-column>
      <el-table-column prop="level2" label="层级2" width="75"></el-table-column>
      <el-table-column prop="level3" label="层级3" width="75"></el-table-column>
      <el-table-column prop="level4" label="层级4" width="75"></el-table-column>
      <el-table-column prop="total" label="总电量" width="75"></el-table-column>
      <el-table-column prop="time0" label="0时" width="39.5"></el-table-column>
      <el-table-column prop="time0" label="1时" width="39.5"></el-table-column>
      <el-table-column prop="time0" label="2时" width="39.5"></el-table-column>
      <el-table-column prop="time0" label="3时" width="39.5"></el-table-column>
      <el-table-column prop="time0" label="4时" width="39.5"></el-table-column>
      <el-table-column prop="time0" label="5时" width="39.5"></el-table-column>
      <el-table-column prop="time0" label="6时" width="39.5"></el-table-column>
      <el-table-column prop="time0" label="7时" width="39.5"></el-table-column>
      <el-table-column prop="time0" label="8时" width="39.5"></el-table-column>
      <el-table-column prop="time0" label="9时" width="39.5"></el-table-column>
      <el-table-column prop="time0" label="10时" width="39.5"></el-table-column>
      <el-table-column prop="time0" label="11时" width="39.5"></el-table-column>
      <el-table-column prop="time0" label="12时" width="39.5"></el-table-column>
      <el-table-column prop="time0" label="13时" width="39.5"></el-table-column>
      <el-table-column prop="time0" label="14时" width="39.5"></el-table-column>
      <el-table-column prop="time0" label="15时" width="39.5"></el-table-column>
      <el-table-column prop="time0" label="16时" width="39.5"></el-table-column>
      <el-table-column prop="time0" label="17时" width="39.5"></el-table-column>
      <el-table-column prop="time0" label="18时" width="39.5"></el-table-column>
      <el-table-column prop="time0" label="19时" width="39.5"></el-table-column>
      <el-table-column prop="time0" label="20时" width="39.5"></el-table-column>
      <el-table-column prop="time0" label="21时" width="39.5"></el-table-column>
      <el-table-column prop="time0" label="22时" width="39.5"></el-table-column>
      <el-table-column prop="time0" label="23时" width="39.5"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataPicker: new Date,
      options: [
        {
          value: "选项2",
          label: "今日",
        },
        {
          value: "选项3",
          label: "昨日",
        },
        {
          value: "选项4",
          label: "24小时前",
        },
      ],
      value: "",
      tableData: [
        {
          level1: "level1",
          level2: "level2",
          level3: "level3",
          level4:"level4",
          total:"",
          time0: "4",
        },
      ],
    };
  },
};
</script>

<style scoped>
#container {
  min-width: 1200px;
}
.el-date-picker {
  width: 100%;
}
.label {
  text-align: end;
}
.el-row {
  padding: 10px;
  text-align: bottom;
}
.el-table {
  display: table-cell !important;
}
.label{
    padding-bottom: 10px;
}
</style>