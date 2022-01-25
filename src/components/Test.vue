<template>
  <div class="wrapper">
    <div class="machine">
      <div class="machine-header"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Test",
  data() {
    return {};
  },
  components: {},
  methods: {},
  mounted() {},
};
</script>

<style lang="scss">
$red: #eb706b;

.machine {
  width: 80vw;
  height: 50vw;
  border: 8px solid black;
  border-radius: 35px;
  max-width: 540px;
  max-height: 370px;
  background-color: white;
}

.machine-header {
  width: 100%;
  height: 50%;
  background-color: $red;
  border-radius: 28px 28px 15px 15px;
  z-index: -1;
  max-height: 160px;
  max-width: 530px;
}
</style>
