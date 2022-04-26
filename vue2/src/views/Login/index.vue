<template>
  <div class="main">
    <a-form
      id="components-form-demo-normal-login"
      :form="form"
      class="login-form"
      @submit="handleSubmit"
    >
      <a-form-item>
        <a-input
          v-decorator="[
            'userName',
            { initialValue: 'admin' },
            {
              rules: [{ required: true, message: '请输入用户名！' }],
            },
          ]"
          placeholder="账号"
        >
          <a-icon
            slot="prefix"
            type="user"
            style="color: rgba(0, 0, 0, 0.25)"
          />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input
          v-decorator="[
            'password',
            { initialValue: 'admin' },
            {
              rules: [{ required: true, message: '请输入密码！' }],
            },
          ]"
          type="password"
          placeholder="密码"
        >
          <a-icon
            slot="prefix"
            type="lock"
            style="color: rgba(0, 0, 0, 0.25)"
          />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-button type="primary" html-type="submit" class="login-form-button">
          登录
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "Login",
  data() {
    return {
      form: this.$form.createForm(this, { name: "login" }),
    };
  },
  methods: {
    ...mapMutations("admin/user", ["setUserInfo"]),
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          this.setUserInfo({
            // access: ["user","admin"],
            access: ["admin"],
            url: "avatar",
          });

          this.$router.push({ name: "Home" });
        }
      });
    },
  },
  // beforeCreate() {
  //   this.form = this.$form.createForm(this, { name: "login" });
  // },
};
</script>

<style scoped lang="less">
.main {
  width: 100%;
  height: 100%;
  background: url("../../assets/svg/body.svg");

  display: flex;
  justify-content: center;
  align-items: center;

  /deep/ .login-form {
    width: 400px;
  }
  /deep/ .login-form-forgot {
    float: right;
  }
  /deep/ .login-form-button {
    width: 100%;
  }
}
</style>