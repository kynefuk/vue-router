<template>
  <div>
    <p>Home</p>
    <hr />
    <button @click="toUsers">Users123</button>
  </div>
</template>

<script>
export default {
  methods: {
    toUsers() {
      // usersに遷移する
      this.$router.push({ name: "users", params: { id: 123 } });
    }
  }
};
</script>