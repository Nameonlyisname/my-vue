<template>
  <div class="formTable">
    <form @submit.prevent="handle">
      <div>账号:<input type="number" v-model.number="userInfo.account" /></div>
      <div>密码:<input type="password" v-model="userInfo.password" /></div>
      <div>
        性别:
        <span
          >男<input type="radio" name="sex" v-model="userInfo.sex" value="male"
        /></span>
        <span
          >女<input
            type="radio"
            name="sex"
            v-model="userInfo.sex"
            value="female"
        /></span>
      </div>

      <div>
        爱好:
        <span
          >学习<input type="checkbox" v-model="userInfo.hobby" value="study"
        /></span>
        <span
          >打游戏<input type="checkbox" v-model="userInfo.hobby" value="game"
        /></span>
        <span
          >吃饭<input type="checkbox" v-model="userInfo.hobby" value="eat"
        /></span>
      </div>

      <div>
        所属校区
        <select v-model="userInfo.city">
          <option value="">请选择校区</option>
          <option value="beijing">北京</option>
          <option value="shanghai">上海</option>
          <option value="guangdong">广东</option>
          <option value="shenzheng">深圳</option>
        </select>
      </div>

      <div>
        其他信息：
        <textarea v-model="userInfo.other" id="" cols="30" rows="10"></textarea>
      </div>
      <div>
        <input type="checkbox" v-model="userInfo.agree" />阅读并接受<a
          href="http://wwww.baidu.com"
          >《用户协议》</a
        >
      </div>
      <button>提交</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInfo: {
        account: "",
        password: "",
        sex: "female",
        hobby: [],
        city: "",
        other: "",
        agree: "",
      },
      list: [1, 2, 3, 4],
    };
  },
  methods: {
    handle() {
      this.log(111111111);
    },
  },
};
</script>
<style scoped>
</style>
 