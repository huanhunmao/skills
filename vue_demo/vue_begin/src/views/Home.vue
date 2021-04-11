<template>
<div>
  <div class="home">{{msg}}</div>
    <div class="left">
      <form action="" v-show="isShow">
        <div class="item" >
          菜品名称
          <input type="text" v-model="unit.name">
        </div>
        <div class="item" >
          菜品图片
          <input type="text" v-model="unit.url">
        </div>
        <div class="item" >
          菜品分类
          <input type="text" v-model="unit.type">
        </div>
        <div class="item" >
          菜品单价
          <input type="text" v-model="unit.price">
        </div>
        <button  @click="submit">确认</button>
      </form>
      <div class="info" v-if="!isShow">
        {{unit.name}}--{{unit.url}}--{{unit.price}}--{{unit.type}}
         <div class="ctrl">
           <button @click='add'>添加</button>
           <button @click='cancle'>取消</button>
         </div>
      </div>
    </div>
    <div class="right">
      <!-- 列表循环 -->
      <ul>
        <li  v-for ='(index,item) in lists' :key='item.name'>
                {{item.name}}--{{item.type}}--{{item.price}}
        </li>
      </ul>

    </div>
</div>

</template>

<style scoped>

.home {
  width: 50%;
  padding-left: 100px;
}
.left {
  width:300px;
  margin-top: 20px;
  padding-left: 100px;

}
.right {
  margin-top: -155px;
  padding-left: 500px;
}
</style>
<script>
export default {
  name: 'Home',
  data () {
    return {
      isShow: true,
      msg: 'hello vue',
      unit: {
        name: '',
        price: '',
        url: '',
        type: ''
      },
      lists: []
    }
  },
  mounted () {
  },
  methods: {
    submit () {
      this.isShow = false
    },
    add () {
      // 添加 unit 菜单项目到list 列表
      // ... 扩展运算符 相当于新创建对象 let = new Object()
      this.lists.push({ ...this.unit })
      // 将原来到 unit 清空
      this.unit.name = ''
      this.unit.price = ''
      this.unit.url = ''
      this.unit.type = ''
      this.isShow = true
    },
    cancle () {
      this.isShow = true
    }
  }
}
</script>
