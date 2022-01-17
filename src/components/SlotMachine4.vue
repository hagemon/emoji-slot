<template>
  <div class="container">
    <div
      id="slot-machine"
      class="row justify-content-center flex-nowrap"
    >
      <div id="machine-col" class="col-md-auto pr-0 pl-0">
        <div id="machine-wrapper">
          <div id="machine" class="row justify-content-center">
            <div id="red-bg" class="row"></div>
            <div class="row">
              <div id="mouth"></div>
              <div id="mouth-shadow"></div>
            </div>
          </div>
        </div>
      </div>
      <div id="stick1" class="col-md-auto align-self-center pl-0 pr-0"></div>
      <div id="stick2" class="col-md-auto align-self-center pl-0 pr-0"></div>
      <div id="ball" class="row"></div>
      <div id="handler" class="row"></div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "SlotMachine",
  components: {
  },
};
</script>

<style lang="scss">
.container {
  $black: #000000;
  $red: #eb706b;
  $fore: #fdf6e7;
  $shadow: #cccccc;
  $border-size: 11pt;
  $radius: 30pt;

  // background-color: $fore;
  // width: 100vw;
  // height: 100vh;
  // min-width: 900px;
  // min-height: 700px;
  // position: relative;
  // display: flex;
  // align-items: center;
  // flex-direction: column;
  // justify-content: center;
  // user-select: none;

  #slot-machine {
    padding-top: 100px;
  }
  #machine-col {
    width: 70%;
  }
  #machine-wrapper {
    width: 100%;
    padding-bottom: 55%;
    position: relative;
  }
  #machine {
    border: $border-size solid $black;
    border-radius: 50pt;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    position: absolute;
  }
  #red-bg {
    border-radius: 50pt;
    width: 100%;
    height: 50%;
    background-color: $red;
  }
  #mouth {
    border: $border-size solid $black;
    border-radius: 15pt;
    width: 70%;
    height: 20%;
    margin-top: 40px;
  }

  #mouth-shadow {
    background-color: $shadow;
    width: 65%;
    height: 45px;
    border-radius: 10pt;
    position: relative;
    top: -35px;
    z-index: -1;
  }

  #stick1 {
    width: 15px;
    background-color: $black;
    height: 60px;
    border-radius: 0 5pt 5pt 0;
  }

  #stick2 {
    width: 20px;
    background-color: $black;
    height: 20px;
    border-radius: 0 0 5pt 0;
  }

  #handler {
    position: absolute;
    width: 20px;
    height: 100px;
    background-color: $black;
    left: -5px;
    top: -100px;
  }
}
</style>
