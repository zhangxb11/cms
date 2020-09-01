<template>
    <div class="login_container">
        <div class="login_box">
            <!-- 头像 -->
            <div class="avatar_box">
                <img src="../assets/logo.png">
            </div>

            <!-- 表单 -->
            <el-form ref="loginFormRef" :model="loginForm" :rules="loginFormRules" label-width="0px" class="login_form">
                <!-- 用户名 -->
                <el-form-item prop="username">
                    <el-input v-model="loginForm.username" prefix-icon="el-icon-user-solid"></el-input>
                </el-form-item>
                <!-- 密码 -->
                <el-form-item prop="password">
                     <el-input v-model="loginForm.password" prefix-icon="el-icon-lock" type="password"></el-input>
                </el-form-item>  
                <!-- 按钮    -->
                <el-form-item class="btn">
                 <el-button type="primary" @click="login">Login</el-button>
                 <el-button type="info" @click="resetLoginForm">reset</el-button>
                </el-form-item >
            </el-form>
            
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return{
            //登陆表单
            loginForm:{
                username:'zxy',
                password:'123'
            },
            //验证规则
            loginFormRules:{
                username:[
                    {required: true, message: '请输入域账号', trigger: 'blur'},
                    { min: 3, max: 5, message: '域账号格式不正确', trigger: 'blur' }
                ],
                password:[
                    {required: true, message: '请输入密码', trigger: 'blur'},
                    { min: 3, max: 5, message: '密码不正确', trigger: 'blur' }
                ]
            }
        };
    },
    methods:{
    resetLoginForm(){
            this.$refs.loginFormRef.resetFields();
        },
    login(){
             this.$refs.loginFormRef.validate(valid => {
                 this.$router.push("/manager");
                 if(!valid)return;
                 return this.$message.success('登录成功');
                 
             });
    }    
    }
};
</script>

<style>
.login_container{
    background-color: #2b4b6b;
    height: 100%
}
.login_box{
    width: 450px;
    height: 300px;
    background-color: #ffffff;
    border-radius: 3px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
}
.avatar_box{
    height: 130px;
    width: 130px;
    border:1px solid #eee;
    border-radius: 50%;
    padding: 10px;
    box-shadow: 0 0 10px #ddd;
    position: absolute;
    left: 50%;
    transform: translate(-50%,-50%);
    background-color: #fff;
}
img{
    height: 100%;
    height: 100%; 
    border-radius: 50%;  
    background-color: #eee;
    }
.login_form{
    position: absolute;
    bottom: 0px;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
}
.btn{
display: flex;
justify-content: flex-end;
}
</style>

