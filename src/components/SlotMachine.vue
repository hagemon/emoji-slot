<template>
  <div class="container">
    <div class="row header" :style="{ height: this.header + 'px' }"></div>
    <div id="wrapper" class="row justify-content-center pl-4 pr-4">
      <div id="emoji-wrapper" v-if="this.windowSpan">
        <div
          class="row flex-nowrap"
          :style="{
            'margin-top': this.emojiY + 'px',
            height: this.emojiSize + 'px',
            width: this.windowSpan + 'px',
          }"
        >
          <div
            class="emoji pl-0 pr-0"
            :style="{ width: this.emojiSize + 'px' }"
          >
            <Emoji
              :size="this.emojiSize"
              :emojis="this.eyes"
              :duration="1000"
              :trigger="this.trigger"
              @finished="isFinished"
            />
          </div>
          <div
            class="emoji pl-0 pr-0"
            :style="{
              'margin-left': this.gutter + 'px',
              'margin-right': this.gutter + 'px',
              width: this.emojiSize + 'px',
            }"
          >
            <Emoji
              :size="this.emojiSize"
              :emojis="this.mouths"
              :duration="1000"
              :trigger="this.trigger"
              @finished="isFinished"
            />
          </div>
          <div
            class="emoji pl-0 pr-0"
            :style="{ width: this.emojiSize + 'px' }"
          >
            <Emoji
              :size="this.emojiSize"
              :emojis="this.eyes"
              :duration="1000"
              :trigger="this.trigger"
              @finished="isFinished"
            />
          </div>
        </div>
      </div>
      <Machine ref="machine" />
    </div>
    <div class="row utils justify-content-center flex-nowrap pl-4 pr-4 pt-2">
      <button
        type="button"
        class="btn btn-danger col-md-3 mr-2"
        @click="turn()"
      >
        Roll
      </button>
      <button
        type="button"
        :class="['btn', 'btn-dark', 'col-md-3', 'ml-2', { disabled: disabled }]"
      >
        Copy
      </button>
    </div>
  </div>
</template>

<script>
import Machine from "./Machine.vue";
import Emoji from "./Emoji.vue";
export default {
  name: "SlotMachine",
  data() {
    return {
      emojiY: NaN,
      emojiSize: NaN,
      windowSpan: NaN,
      gutter: NaN,
      header: 100,
      eyes: ["T", "^", "O", "$", "@", "Q", "O", "$", "@", "Q"],
      mouths: ["w", "_", "o", "3", "m", "v"],
      trigger: null,
      result: "",
      disabled: false,
    };
  },
  components: {
    Machine,
    Emoji,
  },
  methods: {
    getEmojiY() {
      let rect = this.$refs.machine.$refs.rect1.getBoundingClientRect();
      return rect.top + 5 - this.header;
    },
    getEmojiSize() {
      let rect = this.$refs.machine.$refs.rect1.getBoundingClientRect();
      return rect.width - 2.5;
    },
    getWindowSpan() {
      let rect1 = this.$refs.machine.$refs.rect1.getBoundingClientRect();
      let rect3 = this.$refs.machine.$refs.rect3.getBoundingClientRect();
      return rect3.x + rect3.width - rect1.x;
      //   return rect1.width * 3;
    },
    getGutter() {
      let rect1 = this.$refs.machine.$refs.rect1.getBoundingClientRect();
      let rect2 = this.$refs.machine.$refs.rect2.getBoundingClientRect();
      return rect2.x - rect1.x - rect1.width;
    },
    turn() {
      this.result = "";
      this.disabled = true;
      this.trigger = new Date();
    },
    isFinished(val) {
      const autoTurnList = this.$el.querySelectorAll(".autoTurn");
      this.result += val;
      if (autoTurnList.length === 1) {
        this.disabled = false;
        console.log(this.result);
      }
    },
  },
  mounted() {
    this.emojiY = this.getEmojiY();
    this.emojiSize = this.getEmojiSize();
    this.windowSpan = this.getWindowSpan();
    this.gutter = this.getGutter();
  },
};
</script>

<style lang="scss">
$red: #eb706b;
$dark-red: #e65c5c;
#emoji-wrapper {
  position: absolute;
  text-align: center;
  // overflow: hidden;
}

.emoji {
  height: 100%;
}

.btn-danger,
.btn-danger:active,
.btn-danger:visited {
  background-color: $red !important;
}

.btn-danger:hover {
  background-color: $dark-red !important;
}
</style>
