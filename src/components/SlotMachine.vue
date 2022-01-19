<template>
  <div class="container">
    <div class="row header" :style="{ height: this.header + 'px' }"></div>
    <div id="wrapper" class="row justify-content-center pl-4 pr-4">
      <div id="emoji-wrapper" v-if="this.windowSpan">
        <div
          class="row flex-nowrap row-wrapper"
          :style="{
            'margin-top': this.emojiY + 'px',
            height: this.emojiSize + 'px',
            width: this.windowSpan + 'px',
          }"
        >
          <Emoji
            :size="this.emojiSize"
            :gutter="this.gutter"
            :emojis="this.eyes"
            :duration="3000"
            :trigger="this.trigger"
            @finished="isFinished"
          />
          <Emoji
            :size="this.emojiSize"
            :gutter="this.gutter"
            :emojis="this.mouths"
            :duration="4000"
            :trigger="this.trigger"
            @finished="isFinished"
          />
          <Emoji
            :size="this.emojiSize"
            :gutter="this.gutter"
            :emojis="this.eyes"
            :duration="5000"
            :trigger="this.trigger"
            @finished="isFinished"
          />
        </div>
      </div>
      <Machine ref="machine" />
    </div>
    <div class="row utils justify-content-center flex-nowrap pl-4 pr-4 pt-2">
      <button
        type="button"
        :class="[
          'btn',
          'btn-danger',
          'col-md-3',
          'mr-2',
          { disabled: disabled },
        ]"
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
      eyes: ["T", "^", "O", "$", "@", "Q"],
      mouths: ["^", "_", "o", "3", "m", "v"],
      trigger: null,
      result: "",
      disabled: false,
      offset: 6,
    };
  },
  components: {
    Machine,
    Emoji,
  },
  methods: {
    getEmojiY() {
      let rect = this.$refs.machine.$refs.rect1.getBoundingClientRect();
      return rect.top + 14 - this.header;
    },
    getEmojiSize() {
      let rect = this.$refs.machine.$refs.rect1.getBoundingClientRect();
      return rect.width - 14 - this.offset;
    },
    getWindowSpan() {
      let rect1 = this.$refs.machine.$refs.rect1.getBoundingClientRect();
      let rect3 = this.$refs.machine.$refs.rect3.getBoundingClientRect();
      return rect3.x + rect3.width - rect1.x - 14 - this.offset;
      //   return rect1.width * 3;
    },
    getGutter() {
      let rect1 = this.$refs.machine.$refs.rect1.getBoundingClientRect();
      let rect2 = this.$refs.machine.$refs.rect2.getBoundingClientRect();
      return rect2.x - rect1.x - rect1.width + 14 + this.offset;
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
    setParam() {
      this.emojiY = this.getEmojiY();
      this.emojiSize = this.getEmojiSize();
      this.windowSpan = this.getWindowSpan();
      this.gutter = this.getGutter();
    },
  },
  mounted() {
    this.setParam();
    window.onresize = this.setParam;
  },
};
</script>

<style lang="scss">
$red: #eb706b;
$dark-red: #e65c5c;
#emoji-wrapper {
  position: absolute;
  text-align: center;
}

.emoji {
  height: 100%;
}

.row-wrapper {
  overflow: hidden;
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
