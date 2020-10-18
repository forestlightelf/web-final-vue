<template >
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
      <a-progress class="loading-progress" v-if="onLoading" status="active" :show-info="false"></a-progress>
  </div>
  <br/>
    <a-form :label-col="{span:6}" :wrapper-col="{span:18}">
    <a-form-item label="试题类型">
      <a-radio-group>
        <a-radio-button value="单选题">
          单选题
        </a-radio-button>
        <a-radio-button value="多选题">
          多选题
        </a-radio-button>
        <a-radio-button value="应用题">
          应用题
        </a-radio-button>
      </a-radio-group>
    </a-form-item>
      <a-form-item label="试题科目">
        <a-select style="width: 120px">
          <a-select-option v-for="item in subjectOptions" :value="item"  :key="item">
            {{item}}
          </a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item label="试题数量">
        <a-input-number></a-input-number>
      </a-form-item>
      <a-form-item label="是否私有">
        <a-radio-group >
          <a-radio :value="'Yes'">
            Yes
          </a-radio>
          <a-radio :value="'No'">
            No
          </a-radio>
        </a-radio-group>
      </a-form-item>
      <a-form-item label="专题索引">
        <a-radio-group >
          <a-radio :value="'Yes'">
            现在
          </a-radio>
          <a-radio :value="'No'">
            完成后
          </a-radio>
        </a-radio-group>
        <a-tooltip  title="设置试题涉及的学科专题，可以有一个或多个" style="transform: translateY(2px)">
          <a-icon type="question-circle" theme="twoTone">
          </a-icon>
        </a-tooltip>
      </a-form-item>
      <a-form-item :wrapper-col="{ span: 12, offset: 6 }">
        <a-button ref="btn" type="primary" :ghost="hover" @mouseover="btnIn" @mouseout="btnOut">
          生成试卷
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
export default {
data(){
  return {
    //status
    onLoading:false,
    hover:true,
    //formData
    subjectOptions:[
      "高等数学",
      "线性代数",
      "概率论",
      "大学物理",
      "电路理论",
      "离散数学",
      "数据结构",
      "数字电路",
    ]
  }
},
  methods:{
  btnIn(){
    this.hover=!this.hover;
  },
  btnOut(){
    this.hover=!this.hover;
  }
  }
};
</script>

<style>
*{
  font-family: Round1;
  font-size:15px;
  font-weight:500;
}

</style>

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
  height: 13.3%;
  top:0;
  display:flex;
  align-items: center;
  justify-content: center;
  border-bottom:1px solid #ebedf0;
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
  height:100%;
  width:100px;
}
.top-guide .title .content{
  position: absolute;
  top:15px;
  margin-left:5px;
  font-size:22px;
}
.loading-progress{
  position:absolute;
  bottom:-10px;
}

</style>

