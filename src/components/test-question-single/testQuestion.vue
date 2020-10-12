<template>
  <div class="board">
  <div class="top-guide">
      <div class="loading-img">
        <img src="https://i.loli.net/2020/10/16/4uYpQla3yIUEkrc.png">
      </div>
      <div class="title">
        <div class="content">
          试题设置
        </div>
      </div>
  </div>
  </div>
</template>

<script>
export default {

};
</script>

<style scoped>
.board{
  width: 400px;
  height: 500px;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 0 4px 2px #f0f0f0;
}
.top-guide{
  position: relative;
  width:100%;
  height: 10%;
  top:0;

  display:flex;

  align-items: center;
  justify-content: center;
}
.loading-img{


  height:24px;
  width:24px;
 }
.loading-img img{
  width:100%;
  height: 100%;
}
.top-guide .title{
  top:-10px;
  height:100%;
  width:100px;

}
.top-guide .title .content{
  font-family: Wawati SC;
  top:-40px;
  font-size:20px;
}
</style>

