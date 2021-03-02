<template>
  <div> 
    <el-form >
      <el-form-item label="用户名">
        <el-input v-model="username"></el-input>
      </el-form-item>
      <el-form-item label="密码" >
        <el-input type="password" v-model="password"></el-input>
      </el-form-item>
      <el-form-item label="确认密码">
        <el-input type="password" v-model="checkpass"></el-input>
      </el-form-item>     
      <el-form-item>
        <el-button @click="login()">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {instance2} from '../utils/http'
export default {
  data() {
    return{
      username:'',
      password:'',
      checkpass:''
    }
  },
  methods:{
    login(){

      instance2.post('/api/user/loginin',{
        username:this.username,
        password:this.password
      }).then(res=>{
        // 验证成功，存储localStro
        localStorage.setItem('token',res.token)
        // 跳转到个人中心
        this.$router.push('/center');
      }).catch(err=>{
        alert('用户名或密码错误')
      })
    }
  }
}

</script>

<style lang="scss" scoped>

</style>
