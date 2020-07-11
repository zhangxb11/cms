<template>
    <el-container class="manager_container">
    <!-- 头部 -->
        <el-header>
            <div class="title">
                <img src="../assets/fujitsu.png" alt="">
                <span>会议管理系统</span>
            </div>
            <el-button type="info" @click="logout">logout</el-button>
        </el-header>
    <!-- 页面主题     -->
        <el-container>
    <!-- 侧边导航栏     -->
        <el-aside width="200px">
            <el-menu background-color="#333744" text-color="#fff" active-text-color="#ff0000" router>
    <!-- 菜单      -->
                <el-menu-item index="1">
                    <i class="el-icon-menu"></i>
                    <span slot="title">会议/课程管理</span>
                </el-menu-item>
                <el-submenu index="'/' + subItem.patch">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>签到情况统计</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="1-1">必修课签到情况</el-menu-item>
                        <el-menu-item index="1-2">公选课签到情况</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-menu-item index="3" disabled>
                    <i class="el-icon-document"></i>
                <span slot="title">纸质签到解析</span>
                </el-menu-item>
            </el-menu>
        </el-aside>
    <!-- 内容主体 -->
        <el-main>
            <router-view></router-view>
        </el-main>
        </el-container>
    </el-container>
</template>

<script>
export default {
    // data(){
    //     return{
    //         menulist:[]
    //     }
    // },
    created(){
        this.getMenuList()
    },
  methods: {
      logout(){
          this.$router.push("/login");
      },
      async getMenuList(){
        
      }
  }  
};
</script>

<style scoped>
.manager_container{
    height: 100%;
}
.el-header{
    background-color: #373d41;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    align-items: center;
    color: #ffffff;
    font-size: 20px;
}
.img{
    margin: 720px;
}
.title{
    display: flex;
        align-items: center;
        margin-left: 15px;
}
.el-aside{
    background-color: #333744;   
}
.el-menu{
    border-right: none;
}
.el-main{
    background-color: #eaedf1;
}
</style>