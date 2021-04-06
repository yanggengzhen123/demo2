<template>
  <div class="login-container">
    <div class="bg_img">
      <img src="../../assets/login_bg.png" alt="">
    </div>
    <div class="login_block">
      <div class="login_wrap">
      <!-- 凸形状头部 -->
        <div class="centerRect">
          <div class="login_title">攻防演练系统登录</div>
          <div class="leftRect">
            <div class="border-blue_wrap">
              <img src="../../assets/border-blue.png" alt="">
            </div>
            <div class="tri">
              <div class="tri_border"></div>
            </div>
            <div class="bottomRect"></div>
          </div>
          <div class="rightRect">
            <div class="border-blue_wrap">
              <img src="../../assets/border-orange.png" alt="">
            </div>
            <div class="righttri">
              <div class="tri_border"></div>
            </div>
            <div class="rightBottomRect"></div>
          </div>
        </div>
        <!-- 登录面板 -->
        <div class="login_main">
          <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" auto-complete="on" label-position="left">
            <el-form-item prop="username">
              <!-- <span class="svg-container">
                <svg-icon icon-class="user" />
              </span> -->
              <div class="svg-container">
                <img src="../../assets/username.png" alt="">
              </div>
              <el-input
                ref="username"
                v-model="loginForm.username"
                placeholder="手机号/用户名/邮箱"
                name="username"
                type="text"
                tabindex="1"
                auto-complete="on"
              />
            </el-form-item>

            <el-form-item prop="password">
              <div class="svg-container">
                <img src="../../assets/lock.png" alt="">
              </div>
              <el-input
                :key="passwordType"
                ref="password"
                v-model="loginForm.password"
                :type="passwordType"
                placeholder="密码"
                name="password"
                tabindex="2"
                auto-complete="on"
                @keyup.enter.native="handleLogin"
              />
              <span class="show-pwd" @click="showPwd">
                <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
              </span>
            </el-form-item>
            <el-button class="login_button" :loading="loading" type="primary" style="width:100%;margin-bottom:35px;" @click.native.prevent="handleLogin">登录</el-button>
            <div class="otherButton">
              <span>快速注册</span>
              <span>找回密码</span>
            </div>
          </el-form>
          <footer>
            <div class="border-blue_wrap rotate_l">
              <img src="../../assets/border-orange.png" alt="">
            </div>
            <div class="border-blue_wrap rotate_r">
              <img src="../../assets/border-blue.png" alt="">
            </div>
          </footer>
        </div>
      </div>
    </div>
    
    <div class="footer_title">2021@攻防演练系统© GUANGZHOU TEM</div>
  </div>
</template>

<script>
import { validUsername } from '@/utils/validate'

export default {
  name: 'Login',
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!validUsername(value)) {
        callback(new Error('请输入手机号/用户名/邮箱'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('请输入密码'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        username: '',
        password: ''
      },
      loginRules: {
        username: [{ required: true, trigger: 'blur', validator: validateUsername }],
        password: [{ required: true, trigger: 'blur', validator: validatePassword }]
      },
      loading: false,
      passwordType: 'password',
      redirect: undefined
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  methods: {
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('user/login', this.loginForm).then(() => {
            this.$router.push({ path: this.redirect || '/' })
            this.loading = false
          }).catch(() => {
            this.loading = false
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss">
  @import './index.scss';
    
</style>
