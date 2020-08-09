<template>
  <div>
    <h1 id="title">Login</h1>
    <input v-model="username" type="text" id="input-username" />
    <input v-model="password" type="password" id="input-password" />
    <button id="btn-sign-in" @click="login">Sign In</button>
    <div v-if="error" id="msg-error">{{ error }}</div>
  </div>
</template>

<script>
import api from '@/lib/api';

export default {
  data() {
    return {
      username: '',
      password: '',
      error: '',
    };
  },
  methods: {
    login() {
      if (!this.username) {
        this.error = 'Username is required';
        return;
      } else if (!this.password) {
        this.error = 'Password is required';
        return;
      }

      api
        .login()
        .then(() => {
          this.$router.push('home');
        })
        .catch(() => {
          this.error = 'Login failed';
        });
    },
  },
};
</script>
