<template>
  <div class="cart-list">
    <table class="cart-table" data-product-id="30" data-checked="1">
      <tbody>
      <tr>
        <td class="cart-cell cell-check">
          <input type="checkbox" class="cart-select" checked="checked">
        </td>
        <td class="cart-cell cell-img">
          <a href="./detail.html?productId=30" target="_blank">
            <img class="p-img" src="http://img.happymmall.com/f3182089-e21f-4560-a5ce-e600e3408a98.jpeg" alt="【测试学习使用】thinkpad旗舰本">
          </a>
        </td>
        <td class="cart-cell cell-info">
          <a class="link p-name" href="./detail.html?productId=30" target="_blank">【测试学习使用】thinkpad旗舰本</a>
        </td>
        <td class="cart-cell cell-price">￥4288</td>
        <td class="cart-cell cell-count">
          <span class="count-btn" data-opera-type="minus">-</span>
          <input class="count-input" data-max="100347" value="1">
          <span class="count-btn" data-opera-type="plus">+</span>
        </td>
        <td class="cart-cell cell-total">￥4288</td>
        <td class="cart-cell cell-opera">
          <a class="link cart-delete">删除</a>
        </td>
      </tr>
    </tbody>
  </table>
  <table class="cart-table" data-product-id="53" data-checked="1">
    <tbody>
      <tr>
        <td class="cart-cell cell-check">
          <input type="checkbox" class="cart-select" checked="checked">
        </td>
        <td class="cart-cell cell-img">
          <a href="./detail.html?productId=53" target="_blank">
            <img class="p-img" src="http://img.happymmall.com/0cf7e53e-8c2d-4d9c-ab15-419d555b44dc.png" alt="【测试学习使用】三只松鼠 开心果225g休闲零食坚果特产无漂白2件起售">
          </a>
        </td>
        <td class="cart-cell cell-info">
          <a class="link p-name" href="./detail.html?productId=53" target="_blank">【测试学习使用】三只松鼠 开心果225g休闲零食坚果特产无漂白2件起售</a>
        </td>
        <td class="cart-cell cell-price">￥27.9</td>
        <td class="cart-cell cell-count">
          <span class="count-btn" data-opera-type="minus">-</span>
          <input class="count-input" data-max="9953" value="1">
          <span class="count-btn" data-opera-type="plus">+</span>
        </td>
        <td class="cart-cell cell-total">￥27.9</td>
        <td class="cart-cell cell-opera">
          <a class="link cart-delete">删除</a>
        </td>
      </tr>
    </tbody>
  </table>
  <table class="cart-table" data-product-id="26" data-checked="1">
    <tbody>
      <tr>
        <td class="cart-cell cell-check">
          <input type="checkbox" class="cart-select" checked="checked">   </td>
          <td class="cart-cell cell-img">
            <a href="./detail.html?productId=26" target="_blank">
              <img class="p-img" src="http://img.happymmall.com/241997c4-9e62-4824-b7f0-7425c3c28917.jpeg" alt="【测试学习使用】Apple iPhone 7 Plus (A1661) 128G手机">
            </a>
          </td>
          <td class="cart-cell cell-info">
            <a class="link p-name" href="./detail.html?productId=26" target="_blank">【测试学习使用】Apple iPhone 7 Plus (A1661) 128G手机</a> 
          </td>
          <td class="cart-cell cell-price">￥6997</td>
          <td class="cart-cell cell-count">
            <span class="count-btn" data-opera-type="minus">-</span>
            <input class="count-input" data-max="119732" value="1">
            <span class="count-btn" data-opera-type="plus">+</span>
          </td>
          <td class="cart-cell cell-total">￥6997</td>
          <td class="cart-cell cell-opera">
            <a class="link cart-delete">删除</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>  
</template>
<script>
  export default{
    name: 'CartList',
    data () {
      return {
       
      }
    },
    computed:{
     
    },
    methods:{
       
    },
    mounted () {
    }
  }
</script>

<style lang="stylus" scoped>
.cart-wrap .cart-table
    width: 100%
    border-collapse: collapse
    border: 1px solid #ebebeb
    margin-bottom: 10px
.cart-wrap .cart-table .cell-check 
    width: 30px
    padding-left: 20px
    text-align: left
.cart-wrap .cart-list .cart-table .cell-img 
    width: 80px
    padding: 10px
.cart-wrap .cart-list .cart-table .cell-img .p-img 
    width: 80px
    height: 80px
    border: 1px solid #ddd
.cart-wrap .cart-table .cell-info .p-name 
    line-height: 18px
.cart-wrap .cart-table .cell-count .count-btn
    display: inline-block
    width: 20px
    height: 28px
    line-height: 28px
    border: 1px solid #ddd
    vertical-align: middle
    cursor: pointer
    background: #fff
    -moz-user-select: none
    -webkit-user-select: none
    -ms-user-select: none
    user-select: none
.cart-wrap .cart-table .cell-count .count-input
    width: 60px
    height: 28px
    line-height: 28px
    border: 1px solid #ddd
    text-align: center
    vertical-align: middle
    outline: none
</style>