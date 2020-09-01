<template>
  <!-- 卡片视图         -->
  <el-card>
    <!-- 搜索     -->
    <el-row :gutter="16">
      <el-col :span="8">
        <el-input placeholder="请选择日期" suffix-icon="el-icon-date"></el-input>
      </el-col>
      <el-col :span="8">
        <el-input placeholder="请输入关键字" prefix-icon="el-icon-search" v-model="queryInfo.query"></el-input>
      </el-col>
      <el-col :span="4">
        <el-button type="primary" disabled icon="el-icon-search"></el-button>
      </el-col>
      <el-col :span="4">
        <el-button type="danger" disabled icon="el-icon-circle-plus-outline">add</el-button>
      </el-col>
    </el-row>
    <div></div>
    <div></div>
    <span></span>
    <!-- 会议一览表     -->
    <el-table
      :data="tableData"
      style="width: 100%"
      border
      row-key="id"
      lazy
      :load="load"
      :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
    >
      <el-table-column type="index" width="30"></el-table-column>
      <el-table-column label="课程名称" width="110">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>简介: {{ scope.row.name }}</p>
            <p>参与人数: {{ scope.row.address }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.name }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column label="日期" width="100">
        <template slot-scope="scope">
          <span>{{ scope.row.date }}</span>
        </template>
      </el-table-column>
      <el-table-column label="讲师" width="100">
        <span style="margin-left: 10px">-</span>
      </el-table-column>
      <el-table-column label="地点" width="100">
        <span style="margin-left: 10px">508</span>
      </el-table-column>
      <el-table-column label="性质" width="100">
        <span style="margin-left: 10px">必修</span>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="dialogFormVisible = true"
            icon="el-icon-edit"
          >编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            icon="el-icon-delete"
          >delete</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="活动名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="活动区域" :label-width="formLabelWidth">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 分页显示 -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="1"
      :page-sizes="[1, 2, 3, 4]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="4"
    ></el-pagination>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
        dialogFormVisible: false,
        formLabelWidth: '120px',
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
      //获取用户数据列表
      queryInfo: {
        query: "",
        pagenum: 1,
        pagesize: 2
      },
      total: 0,
      tableData: [
        {
          id: 1,
          name: "日语N5",
          properties: "必修",
          date: "2020-07-13",
          teacher: "周子奥",
          address: "508",
          number: "30",
          id: 2,
          name: "日语N5",
          properties: "必修",
          date: "2020-07-13",
          teacher: "周子奥",
          address: "508",
          number: "30",
          id: 3,
          name: "日语N5",
          properties: "必修",
          date: "2020-07-13",
          teacher: "周子奥",
          address: "508",
          number: "30",
          children: [
            {
              id: 31,
              date: "2016-05-01",
              name: "王小虎",
              address: "上海市普陀区金沙江路 1519 弄"
            },
            {
              id: 32,
              date: "2016-05-01",
              name: "王小虎",
              address: "上海市普陀区金沙江路 1519 弄"
            }
          ]
        }
      ]
    };
  },
  created() {
    // this.getMeetingsList();
  },
  methods: {
    load(tree, treeNode, resolve) {
      setTimeout(() => {
        resolve([
          {
            id: 1,
            sname: "初级日本语N5",
            properties: "必修",
            date: "2020-07-13",
            teacher: "周子奥",
            address: "508",
            number: "30"
          },
          {
            id: 1,
            sname: "初级日本语N5",
            properties: "必修",
            date: "2020-07-13",
            teacher: "周子奥",
            address: "508",
            number: "30"
          }
        ]);
      }, 1000);
    },
    handleSizeChange(newSize) {
      console.log(`每页 ${newSize} 条`);
    },
    handleCurrentChange(newPage) {
      console.log(`当前页: ${newPage}`);
    }
  },

  getMeetingsList() {
    this.$http.get("users", { params: this.queryInfo });
  }
};
</script>

<style scoped>
.el-pagination {
  margin-top: 15px;
}
</style>