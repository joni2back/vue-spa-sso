<template>
  <div class="rotating">
    <svg version="1.1" viewBox="-58 -58 116 116" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> 
      <g stroke-linecap="round" stroke-width="15">
        <path id="a" d="m0 35 0,14"/>
        <use transform="rotate(210)" xlink:href="#a" stroke="#f0f0f0"/>
        <use transform="rotate(240)" xlink:href="#a" stroke="#ebebeb"/>
        <use transform="rotate(270)" xlink:href="#a" stroke="#d3d3d3"/>
        <use transform="rotate(300)" xlink:href="#a" stroke="#bcbcbc"/>
        <use transform="rotate(330)" xlink:href="#a" stroke="#a4a4a4"/>
        <use transform="rotate(0)" xlink:href="#a" stroke="#8d8d8d"/>
        <use transform="rotate(30)" xlink:href="#a" stroke="#757575"/>
        <use transform="rotate(60)" xlink:href="#a" stroke="#5e5e5e"/>
        <use transform="rotate(90)" xlink:href="#a" stroke="#464646"/>
        <use transform="rotate(120)" xlink:href="#a" stroke="#2f2f2f"/>
        <use transform="rotate(150)" xlink:href="#a" stroke="#171717"/>
        <use transform="rotate(180)" xlink:href="#a" stroke="#000"/>
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'loading',
}
</script>

<style scoped>
@-webkit-keyframes rotating {
  from {
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes rotating {
  from {
    -ms-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -ms-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
.rotating {
  -webkit-animation: rotating 2s linear infinite;
  -moz-animation: rotating 2s linear infinite;
  -ms-animation: rotating 2s linear infinite;
  -o-animation: rotating 2s linear infinite;
  animation: rotating 2s linear infinite;

  width: 40px;
  margin: 15px auto;
}
</style>