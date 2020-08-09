<template>
  <div>
    <h1 id="title">Login</h1>
    <input type="text" id="input-username" />
    <input type="password" id="input-password" />
    <button id="btn-sign-in" @click="login">Sign In</button>
  </div>
</template>

<script>
import api from '@/lib/api';

export default {
  methods: {
    login() {
      api.login().then(() => {
        this.$router.push('home');
      });
    },
  },
};
</script>
