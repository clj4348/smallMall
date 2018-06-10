<template>
  <div class="order-list">
    <table class="order-list-table header">
      <tbody>
        <tr>
          <th class="order-list-cell cell-img">&nbsp;</th>
          <th class="order-list-cell cell-info">商品信息</th>
          <th class="order-list-cell cell-price">单价</th>
          <th class="order-list-cell cell-count">数量</th>
          <th class="order-list-cell cell-total">合计</th>
        </tr>
      </tbody>
    </table>
    <table class="order-list-table order-item">
      <tbody>
        <tr>
          <td class="order-info" colspan="6">
            <span class="order-text">
              <span>订单号：</span>
              <a class="link" href="./order-detail.html?orderNumber=1528377421067">1528377421067</a>
            </span>
            <span class="order-text">2018-06-07 21:17:01</span>
            <span class="order-text">
              <span>收件人：asdf</span>
            </span>
            <span class="order-text">
              <span>订单状态：已取消</span>
            </span>
            <span class="order-text">
              <span>订单总价：</span>
              <span class="enhance">￥6997</span>
            </span>
            <a class="link pull-right" href="./order-detail.html?orderNumber=1528377421067">查看详情&gt;</a>
          </td>
      </tr>
      <tr>
        <td class="order-list-cell cell-img">
          <a href="./detail.html?productId=26" target="_blank">
            <img class="p-img" src="http://img.happymmall.com/241997c4-9e62-4824-b7f0-7425c3c28917.jpeg" alt="测试使用Apple iPhone 7 Plus (A1661) 128G手机">
          </a>
        </td>
        <td class="order-list-cell cell-info">
          <a class="link p-name" href="./detail.html?productId=26" target="_blank">测试使用Apple iPhone 7 Plus (A1661) 128G手机</a>
        </td>
        <td class="order-list-cell cell-price">￥6997</td>
        <td class="order-list-cell cell-count">1</td>
        <td class="order-list-cell cell-total">￥6997</td>
      </tr>
    </tbody>
    </table>
  </div>
</template>
<script>

export default{
  name: 'OrderCon',
  data () {
    return {
      title: '我的订单',
    }
  }
}
</script>

<style lang="stylus" scoped>
.pull-right
  float: right
.order-list-table
  width: 100%
  border-collapse: collapse
  background: #fafafa
  margin-bottom: 20px
.order-list-cell
  color: #666
  border-bottom: 1px solid #eee
.order-list-table .cell-count,.order-list-table .cell-price,.order-list-table .cell-total
  width: 15%
  text-align: center
.order-list-table.header
  background: #eee
 .cell-img 
    width: 10%
    padding: 10px 
    .p-img 
      width: 80px
      height: 80px
      border: 1px solid #ddd
   .cell-info
      width: 45%
      padding: 0 10px
      text-align: left
      .p-name
        font-size: 12px
        line-height: 18px
.order-list-table .order-info
  background: #eee
  padding: 10px
.order-text
  margin-right: 25px
  color: #999
  font-size: 12px
</style>
