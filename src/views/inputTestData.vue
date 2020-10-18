<template>
  <div class="sideBoard"
  style="
  width:257px;
  height:100vh;
  border:1px #e8e8e8 solid;
  ">
    <div class="sideBoardTop"
    style="
    position:relative;
    height:150px;
    width:100%;
    display: block;
    margin-bottom: 10px;
    ">
      <a-avatar style="
      left:50%;
      margin-bottom: 0;
      margin-top:60px;
      transform: translateX(-50%) scale(2.5);
      color: #f56a00;
      backgroundColor: #fde3cf;
      box-sizing: content-box;
      border:3px white;
      box-shadow:0 0 5px #f00;
      ">
        <span style="font-weight:600 !important; ">U</span>
      </a-avatar>
      <span
          style="
          position:absolute;
          bottom: 0;
          left:50%;
          margin-bottom: 5px;
          width:auto;
          transform: translateX(-50%);
      ">
        userName
      </span>
    </div>
    <a-menu
        style="width: 256px;"
        :default-selected-keys="['1']"
        :open-keys.sync="openKeys"
        mode="inline"
        @click="handleClick"
        @select="configSelection"
    >
      <a-menu-item key="edit">
        <a-icon type="highlight" />
        试题编辑
      </a-menu-item>
      <a-menu-item key="configuration" >
        <a-icon type="setting" />
        试题配置
        <a-icon type="right" :style="{
        position:'absolute',
        top:'50%',
        transform: 'translateY(-35%) '+arrowRotation,
        transition:'1s',
        right:0}"/>
      </a-menu-item>
      <a-menu-item key="preview">
        <a-icon type="eye" />
        预览
      </a-menu-item>
    </a-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
      current: ['mail'],
      openKeys: ['sub1'],
      arrowRotation:' rotate(0deg)'
    };
  },
  watch: {
    openKeys(val) {
      console.log('openKeys', val);
    },
  },
  methods: {
    configSelection(e){
      //箭头动效
      if(e.key==='configuration')
        this.arrowRotation=' rotate(-180deg)' ;
        else if(this.arrowRotation===' rotate(-180deg)')
          this.arrowRotation=' rotate(0deg)';

    },
    handleClick(e) {
      console.log('click', e);
    },
    titleClick(e) {
      console.log('titleClick', e);
    },
  },
};
</script>

<style scoped>



</style>
