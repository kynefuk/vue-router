<template>
  <div>
    <p>Users</p>
    <router-link to="/users/1">User1</router-link>
    <router-link :to="{name: 'users', params: {id: 2}}" tag="button">User2</router-link>
    <hr />
    <!-- $routeはこのページの状態オブジェクト -->
    <h3>User No. {{ id }}</h3>
    <router-link :to="{name: 'users', params:{id: Number(id+1)}}">次のユーザ</router-link>
    <router-view :hoge="id" :id="id"></router-view>
  </div>
</template>

<script>
export default {
  props: ["id", "hoge"], // URLの:idが入ってくる

  // idで切り替えを行う場合は、watchで$routeの変更をチェックする
  // $routeが変更された(idの切り替えがあった場合)はwatchで処理を行う
  watch: {
    $route(to, from) {
      console.log(to);
      console.log(from);
    }
  },
  // インスタンス作成前に実行されるのでthisは使えない
  // next実行時に非同期的にpropsにアクセスはできる
  beforeRouteEnter(to, from, next) {
    console.log("beforeRouteEnter");
    next(vm => {
      console.log(vm.id);
    });
  },
  // $routeが変わる時に実行される
  beforeRouteUpdate(to, from, next) {
    console.log("beforeRouteUpdate");
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log("beforeRouteLeave");
    const isLeave = window.confirm("ページを離れますか？");
    if (isLeave) {
      next();
    }
    next(false);
  }
};
</script>