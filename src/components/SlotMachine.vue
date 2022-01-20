<template>
  <div class="container">
    <div
      class="row header justify-content-center"
      :style="{ height: this.header + 'px' }"
    >
      <h1>EMOJI SLOT</h1>
    </div>
    <div id="wrapper" class="row justify-content-center pl-4 pr-4 flex-nowrap">
      <div id="emoji-wrapper" v-if="this.windowSpan">
        <div
          class="row flex-nowrap row-wrapper"
          :style="{
            'margin-top': this.emojiY + 'px',
            height: this.emojiSize + 'px',
            width: this.windowSpan + 'px',
            'margin-right': `${this.handlerWidth}px`,
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
      <Handler
        ref="handler"
        id="handler"
        :disabled="disabled"
        :active="active"
      />
    </div>
    <div class="row justify-content-center btn-wrapper">
      <button
        type="button"
        :class="[
          'copy-btn',
          'btn',
          'btn-dark',
          'col-md-3',
          'ml-2',
          { disabled: disabled },
        ]"
        :style="{
          position: 'relative',
          bottom: `${this.btnMargin}px`,
          width: '50%',
        }"
        @click="copyHandler"
      >
        Copy
      </button>
    </div>
    <div class="row hint-wrapper justify-content-center">
      <div
        class="alert alert-success hint"
        role="alert"
        :style="{
          position: 'relative',
          bottom: `${this.btnMargin - 10}px`,
          width: '70%',
          'text-align': 'center',
        }"
      >
        Copied: {{ this.result }}
      </div>
    </div>
  </div>
</template>

<script>
import Machine from "./Machine.vue";
import Emoji from "./Emoji.vue";
import Handler from "./Handler.vue";
export default {
  name: "SlotMachine",
  data() {
    return {
      emojiY: null,
      emojiSize: null,
      windowSpan: null,
      gutter: null,
      handlerWidth: null,
      header: 100,
      eyes: ["T", "^", "O", "$", "@", "Q"],
      mouths: ["^", "_", "o", "3", "m", "v"],
      trigger: null,
      result: "",
      disabled: false,
      active: false,
      offset: 6,
      btnMargin: null,
    };
  },
  components: {
    Machine,
    Emoji,
    Handler,
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
    },
    getGutter() {
      let rect1 = this.$refs.machine.$refs.rect1.getBoundingClientRect();
      let rect2 = this.$refs.machine.$refs.rect2.getBoundingClientRect();
      return rect2.x - rect1.x - rect1.width + 14 + this.offset;
    },
    getMachineSize() {
      let outer = this.$refs.machine.$refs.outer.getBoundingClientRect();
      return outer.width + 22;
    },
    getHandlerWidth() {
      let handler = this.$refs.handler.$refs.window.getBoundingClientRect();
      return handler.width - 14;
    },
    turn() {
      this.result = "";
      this.disabled = true;
      this.active = true;
      this.trigger = new Date();
    },
    isFinished(val) {
      const autoTurnList = this.$el.querySelectorAll(".autoTurn");
      this.result += val;
      if (autoTurnList.length === 1) {
        this.disabled = false;
        this.active = false;
        console.log(this.result);
      }
    },
    setParam() {
      this.emojiY = this.getEmojiY();
      this.emojiSize = this.getEmojiSize();
      this.windowSpan = this.getWindowSpan();
      this.gutter = this.getGutter();
      this.handlerWidth = this.getHandlerWidth();
      this.btnMargin = this.getBtnMargin();
      this.$el.style.setProperty("--machineSize", `${this.getMachineSize()}px`);
    },
    configHandler() {
      // let stick = this.$refs.handler.$refs.stick;
      let ball = this.$refs.handler.$refs.ball;
      ball.onclick = () => {
        if (!this.active) {
          let ballMove = this.$refs.handler.$refs.ballMove;
          let stickMove = this.$refs.handler.$refs.stickMove;
          ballMove.beginElement();
          stickMove.beginElement();
          this.turn();
        }
      };
    },
    getBtnMargin() {
      let svgRect = this.$refs.machine.$refs.svg.getBoundingClientRect();
      let outerRect = this.$refs.machine.$refs.outer.getBoundingClientRect();
      return svgRect.height - outerRect.height - 15;
    },
    copyHandler() {
      if (this.result === "") {
        this.result = this.eyes[0] + this.mouths[0] + this.eyes[0];
      }
      navigator.clipboard.writeText(this.result);
    },
  },
  mounted() {
    this.setParam();
    this.configHandler();
    window.onresize = this.setParam;
  },
};
</script>

<style lang="scss">
$red: #eb706b;
$dark-red: #e65c5c;
$machineSize: var(--machineSize);

.header {
  line-height: 100%;
  align-items: center;
  h1 {
    border: dashed $red;
    padding: 3px 30px;
  }
}

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

#handler {
  position: relative;
  left: -5px;
  .active {
    .ball {
      top: 50px;
    }
  }
}
</style>
