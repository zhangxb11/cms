<template>    
    <!-- 卡片视图         -->
    <el-card >
    <!-- 搜索     -->
        <el-row :gutter="16">
            <el-col :span="8">
                <el-input placeholder="请选择日期" suffix-icon="el-icon-date"></el-input>
            </el-col>
            <el-col :span="8">
                <el-input placeholder="请输入关键字" prefix-icon="el-icon-search"></el-input>
            </el-col>
            <el-col :span="4">
                <el-button type="primary" disabled icon="el-icon-search"></el-button>
            </el-col>
            <el-col :span="4">
                <el-button type="danger"  disabled icon="el-icon-circle-plus-outline">   add   </el-button>
            </el-col>
        </el-row>
        <div></div>
        <div></div>
        <span></span>
    <!-- 会议一览表     -->
        <el-table :data="tableData" style="width: 100%" border row-key="id" lazy
            :load="load"
            :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
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
            <el-table-column label="讲师"  width="100">
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
                    <el-button size="mini" @click="handleEdit(scope.$index, scope.row)" icon="el-icon-edit">edit</el-button>
                    <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)" icon="el-icon-delete">delete</el-button>
                </template>
            </el-table-column>
        </el-table>
<!-- 分页显示 -->
<el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="1"
      :page-sizes="[1, 2, 3, 4]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="4">
    </el-pagination>

    </el-card> 
           
</template>

<script>
export default {
    data() {
      return {
        tableData: [{
          id: 1,
          name: '日语N5',
          properties: '必修',
          date: '2020-07-13',
          teacher: '周子奥',
          address: '508',
          number: '30',
          children: [{
              id: 31,
              date: '2016-05-01',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1519 弄'
            }, {
              id: 32,
              date: '2016-05-01',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1519 弄'
          }]
        }]
      }
    },
    created(){
        
    },
    methods:{
load(tree, treeNode, resolve) {
        setTimeout(() => {
          resolve([
            {
              id: 1,
              sname: '初级日本语N5',
          properties: '必修',
          date: '2020-07-13',
          teacher: '周子奥',
          address: '508',
          number: '30'
            }, {
              id: 1,
              sname: '初级日本语N5',
          properties: '必修',
          date: '2020-07-13',
          teacher: '周子奥',
          address: '508',
          number: '30'
            }
          ])
        }, 1000)
      },
      handleSizeChange(newSize) {
        console.log(`每页 ${newSize} 条`);
      },
      handleCurrentChange(newPage) {
        console.log(`当前页: ${newPage}`);
      }
    },
}
</script>

<style scoped>
.el-pagination{
    margin-top: 15px;
}
</style>