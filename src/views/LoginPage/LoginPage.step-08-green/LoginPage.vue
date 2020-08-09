<template>
  <div>
    <h1 id="title">Login</h1>
    <input type="text" id="input-username" />
    <input type="password" id="input-password" />
    <button id="btn-sign-in" @click="login">Sign In</button>
    <div v-if="isError" id="msg-error">Login failed</div>
  </div>
</template>

<script>
import api from '@/lib/api';

export default {
  data() {
    return {
      isError: false,
    };
  },
  methods: {
    login() {
      api
        .login()
        .then(() => {
          this.$router.push('home');
        })
        .catch(() => {
          this.isError = true;
        });
    },
  },
};
</script>
