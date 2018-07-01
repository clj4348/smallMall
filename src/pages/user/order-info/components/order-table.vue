<template>
  <div class="clearfix">
    <div class="panel-title">商品清单</div>
    <div class="panel-body">
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
      <p class="total">
        <span>订单总价：</span>
        <span class="enhance">￥6997</span>
      </p>
    </div>
  </div>
</template>
<script>
export default{
  name: 'InfoCon',
  data () {
    return {
    }
  }
}
</script>

<style lang="stylus" scoped>

.panel-title 
  margin-top: 20px;
  padding: 10px
  font-size: 14px
  border-bottom: 1px solid #eee
  color: #666
  font-weight: 700
.order-list-table
    width: 100%
    border-collapse: collapse
    background: #fafafa
.order-list-table.header
  background: #eee
.order-list-cell
    color: #666
    border-bottom: 1px solid #eee
.order-list-table .cell-img
  width: 10%
  padding: 10px
.cell-info
    width: 45%
    padding: 0 10px
    text-align: left
.order-list-table .cell-count, .order-list-table .cell-price, .order-list-table .cell-total 
    width: 15%
    text-align: center
.cell-img .p-img
    width: 80px
    height: 80px
    border: 1px solid #ddd
.cell-info .p-name
    line-height: 18px
.total
  font-size: 14px
  line-height: 40px
  height: 40px
  margin-top: 10px
  margin-right: 20px
  float: right
.enhance
    font-weight: 700
    color: #c60023
    font-size: 16px
</style>
