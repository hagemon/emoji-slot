<template>
  <svg
    ref="window"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    version="1.1"
    width="93px"
    height="198px"
    viewBox="-0.5 -0.5 93 198"
    content='&lt;mxfile host="Electron" modified="2022-01-19T06:56:15.658Z" agent="5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) draw.io/16.1.2 Chrome/96.0.4664.55 Electron/16.0.5 Safari/537.36" etag="cAe0pxM49uLDJOUO1JQb" version="16.1.2" type="device"&gt;&lt;diagram id="yi_Bq6QczukJAim1dr7Y" name="第 1 页"&gt;7ZbBcpswEIafhmM7gIwN15K47XRyKYeeFbQGTQRLhAi4T19hFjAlGSedpJdEF0n/7kpafasBh8VF91XzKr9BAcrxXdE57Mrxfc9zfdv1ynFQwm0wCJmWgpxmIZG/gUSX1EYKqBeOBlEZWS3FFMsSUrPQuNbYLt0OqJa7VjyDlZCkXK3VX1KYnLLwd7P+DWSWjzt722iwFHx0pkzqnAtszyR27bBYI5phVHQxqP7yxnsZ4vZPWKeDaSjNcwJY/fDzx72Mvt/e6bAUm/DqHj/RKg9cNZQwHdYcxxuw5676IXR2my8Cm9uTxbMTjU0pQNCszaWBpOJpb25tOVgtN4Ui85S/ayeZ4nVN4wOWZs8LqfoSibGQqT1AwsvadjcJOVBlhH1AbTTeQYwKtZVKLGESR0a7PkwqNTo5PnNPzeqUMmgD3ZN36U2EbGkDFmD00bpQAAuoiqmq2YYgt3ONMJLys/LYksapKrNp5RmcHRC7F3D0Pzj+E8fdXxyD3edgRTJ4hKT/ViTZOySp0XAjsbRy9GovNFySdR8j63mb/4h2cxmtXcV+2eAyuyXotyIp4MAbZVYwozXM/X5r2yvBi9wFvOlv4MKjDF5Ozk7nT/DJdvYjw67/AA==&lt;/diagram&gt;&lt;/mxfile&gt;'
  >
    <defs />
    <g :class="[{ active: active }, { disabled: disabled }]">
      <rect
        x="3"
        y="134"
        width="30"
        height="60"
        rx="4.5"
        ry="4.5"
        fill="#000000"
        stroke="none"
        pointer-events="all"
      />
      <rect
        x="11"
        y="142"
        width="14"
        height="44"
        rx="2.1"
        ry="2.1"
        fill="#000000"
        stroke="none"
        pointer-events="all"
      />
      <rect
        x="23"
        y="151.5"
        width="50"
        height="20"
        rx="3"
        ry="3"
        fill="#000000"
        stroke="none"
        pointer-events="all"
      />
      <rect
        x="31"
        y="159.5"
        width="34"
        height="4"
        rx="0.6"
        ry="0.6"
        fill="#000000"
        stroke="none"
        pointer-events="all"
      />
      <rect
        class="stick"
        ref="stick"
        x="6"
        y="101.5"
        width="114"
        height="20"
        rx="3"
        ry="3"
        fill="#000000"
        stroke="none"
        transform="rotate(-90,63,111.5)"
        pointer-events="all"
      >
        <animate
          id="stick-change"
          ref="stickMove"
          attributeName="width"
          values="114;0;114"
          keyTimes="0;0.3;1"
          begin="idenfinite"
          dur="1s"
          repeatCount="1"
        />
      </rect>
      <ellipse
        class="ball"
        id="ball"
        ref="ball"
        cx="63"
        cy="29"
        rx="25"
        ry="25"
        fill="#ff6666"
        stroke="rgb(0, 0, 0)"
        stroke-width="9"
        :style="{ cursor: active ? '' : 'pointer' }"
        :pointer-events="active ? 'none' : 'all'"
      >
        <animate
          ref="ballMove"
          attributeName="cy"
          values="25;151.5;25"
          keyTimes="0;0.3;1"
          begin="indefinite"
          dur="1s"
          repeatCount="1"
        />
      </ellipse>
    </g>
  </svg>
</template>

<script>
export default {
  name: "Handler",
  props: {
    active: Boolean,
    disabled: Boolean,
  },
};
</script>

<style>
</style>
