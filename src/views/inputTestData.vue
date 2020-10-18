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
      "
      >
        U
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
    >
      <a-sub-menu key="sub1" @titleClick="titleClick">
        <span slot="title"><a-icon type="mail" /><span>Navigation One</span></span>
        <a-menu-item-group key="g1">
          <template slot="title"> <a-icon type="qq" /><span>Item 1</span> </template>
          <a-menu-item key="1">
            Option 1
          </a-menu-item>
          <a-menu-item key="2">
            Option 2
          </a-menu-item>
        </a-menu-item-group>
        <a-menu-item-group key="g2" title="Item 2">
          <a-menu-item key="3">
            Option 3
          </a-menu-item>
          <a-menu-item key="4">
            Option 4
          </a-menu-item>
        </a-menu-item-group>
      </a-sub-menu>
      <a-sub-menu key="sub2" @titleClick="titleClick">
        <span slot="title"><a-icon type="appstore" /><span>Navigation Two</span></span>
        <a-menu-item key="5">
          Option 5
        </a-menu-item>
        <a-menu-item key="6">
          Option 6
        </a-menu-item>
        <a-sub-menu key="sub3" title="Submenu">
          <a-menu-item key="7">
            Option 7
          </a-menu-item>
          <a-menu-item key="8">
            Option 8
          </a-menu-item>
        </a-sub-menu>
      </a-sub-menu>
      <a-sub-menu key="sub4">
        <span slot="title"><a-icon type="setting" /><span>Navigation Three</span></span>
        <a-menu-item key="9">
          Option 9
        </a-menu-item>
        <a-menu-item key="10">
          Option 10
        </a-menu-item>
        <a-menu-item key="11">
          Option 11
        </a-menu-item>
        <a-menu-item key="12">
          Option 12
        </a-menu-item>
      </a-sub-menu>
    </a-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
      current: ['mail'],
      openKeys: ['sub1'],
    };
  },
  watch: {
    openKeys(val) {
      console.log('openKeys', val);
    },
  },
  methods: {
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
