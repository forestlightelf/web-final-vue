<template>
  <!--当前页面的container,从属于整个单页面应用的container:<div id="app" --->
  <!--动画上，v-bind是滑动，v-if是浮现--->
<div class="window-container">
<div class="login-register">
  <div class="operation" :class="{active:change}">
    <div class="login-moudle" v-if="change">
      <p class="title">账户登录</p>
      <div class='input-form'>
        <input type="email" placeholder="用户名" v-model="uName" >
        <span class="errTips" v-if="uNameError">{{ uNameErrorMassage }}</span>
        <input type="password" placeholder="密码" v-model="uPassword">
        <span class="errTips" v-if="uPasswordError">{{ uPasswordErrorMassage }}</span>
      </div>
      <button class="button" @click="login">登录</button>
    </div>
    <div class="register-moudle" v-else>
      <div class="title">创建账户</div>
      <div class="input-form">
        <input type="text" placeholder="用户名" v-model="uName">
        <span class="errTips" v-if="uNameExisted">* 用户名已经存在！ *</span>
        <input type="email" placeholder="邮箱" v-model="uEmail">
        <span class="errTips" v-if="uEmailExisted">* 邮箱已经存在！ *</span>
        <input type="password" placeholder="密码" v-model="upwd">
      </div>
      <button class="button" @click="register">注册</button>
    </div>
  </div>
  <div class="welcome" :class="{active:change}">
    <div class="login-moudle" v-if="change">
      <p class="title">你好，朋友！</p>
      <p class="content">开始注册，和我们一起旅行</p>
      <button class="button" @click="changeType">注册</button>
    </div>
    <div class="register-moudle" v-else>
      <p class="title">欢迎回来!</p>
      <p class="content">与我们保持联系，请登录你的账户</p>
      <button class="button" @click="changeType">登录</button>
    </div>
  </div>
</div>
</div>

</template>

<script>
export default {
  name:'loginRegister',
  data() {
    return {
      change:false,
      uNameError:false,
      uPasswordError:false,

      uNameExisted:false,
      uEmailExisted:false,

      uNameErrorMassage:'',
      uPasswordErrorMassage:'',
      uName:'',
      uEmail:'',
      uPassword:''
    }
  },

  methods:{
    clearBox(){
      this.uName='';
      this.uEmail='';
      this.uPassword='';
      this.uNameError=false;
      this.uPasswordError=false;
    },
    changeType(){
      this.change=!this.change;
      this.clearBox();
    },

    login()
    {
      //checkNull
      this.uNameError=false;
      this.uPasswordError=false;
      if(this.uName===''){
        this.uNameError=true;
        this.uNameErrorMassage='用户名不能为空'
      }
      if(this.uPassword===''){
        this.uPasswordError=true;
        this.uPasswordErrorMassage='密码不能为空'
      }
      if(this.uNameError||this.uPasswordError){
        return;
      }
      //check
      this.$axios.get(
        'http://localhost:8080/server_war_exploded/s01',{
        params: {    //这里是发送给后台的数据
          //qs.stringify()将对象 序列化成URL的形式，以&进行拼接
          uName: '张三',
          uPassword: 12345678,
        }}
      ).then((res) =>{
        this.$router.push({path:'/HelloWorld'})
        console.log(res)       //请求成功返回的数据
      }).catch((error) =>{
        console.log(error)       //请求失败返回的数据
      })

    }
  }


}
</script>

<style scoped="scoped">
.window-container{
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
}

.login-register{

  width: 50%;
  height: 55%;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 0 4px 2px #f0f0f0;
}

.operation {
  width: 70%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 30%;
  transform: translateX(0%);
  transition: all 1s;
}
.operation .login-moudle,.operation .register-moudle{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.operation .title{
  font-size: 1.5em;
  font-weight: bold;
  color: rgb(57,167,176);
}
.operation .input-form{
  width: 100%;
  height: 40%;
  padding: 2em 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;/*四周留有间距排列，相当于默认margin*/
  align-items: center;
}
.operation .input-form .errTips{
  display: block;
  width: 50%;
  text-align: left;
  color: red;
  font-size: 0.7em;
  margin-left: 1em;
}
.operation input{
  width: 50%;
  height: 30px;
  border: none;
  outline: none;
  border-radius: 10px;
  padding-left: 2em;
  background-color: #f0f0f0;
}
.operation .button{
  width: 20%;
  height: 40px;
  border-radius: 24px;
  border: none;
  outline: none;
  background-color: rgb(57,167,176);
  color: #fff;
  font-size: 0.9em;
  cursor: pointer;
}

.welcome{
  width: 30%;
  height: 100%;
  background: linear-gradient(135deg, rgb(58, 187, 198), rgb(75, 234, 186));
  position: absolute;
  top: 0;
  left: 0;
  transition: all 1s;
  border-top-left-radius: inherit;
  border-bottom-left-radius: inherit;
}
.welcome .login-moudle,.welcome .register-moudle{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.welcome .title{
  font-size: 1.5em;
  font-weight: bold;
  color: #fff;
}
.welcome .content{
  font-size: 0.8em;
  color: #fff;
  text-align: center;
  padding: 2em 4em;
  line-height: 1.7em;
}
.welcome .button{
  width: 60%;
  height: 40px;
  border-radius: 24px;
  border: 1px solid #fff;
  outline: none;
  background-color: transparent;
  color: #fff;
  font-size: 0.9em;
  cursor: pointer;
}

.operation.active{
  left: 0;
  transition: all 1s;
}
.welcome.active{
  left: 100%;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: inherit;
  border-bottom-right-radius: inherit;
  transform: translateX(-100%);
  transition: all 1s;
}
</style>
