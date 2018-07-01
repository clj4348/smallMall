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
      <tbody v-for="(item, index) in orderList" :key="item.orderNo">
        <tr>
          <td class="order-info" colspan="6">
            <span class="order-text">
              <span>订单号：</span>
              <a class="link" href="./order-detail.html?orderNumber=1528377421067">{{item.orderNo}}</a>
            </span>
            <span class="order-text">{{item.createTime}}</span>
            <span class="order-text">
              <span>收件人：{{item.receiverName}}</span>
            </span>
            <span class="order-text">
              <span>订单状态：{{item.statusDesc}}</span>
            </span>
            <span class="order-text">
              <span>订单总价：</span>
              <span class="enhance">￥{{item.payment}}</span>
            </span>
            <router-link class="link pull-right" to="/user/order-info">查看详情&gt;</router-link>
          </td>
      </tr>
      <tr v-for="orderItem in item.orderItemVoList">
        <td class="order-list-cell cell-img">
          <a href="./detail.html?productId=26">
            <img class="p-img" :src="'http://img.happymmall.com/' + orderItem.productImage" alt="测试使用Apple iPhone 7 Plus (A1661) 128G手机">
          </a>
        </td>
        <td class="order-list-cell cell-info">
          <a class="link p-name" href="./detail.html?productId=26" target="_blank">测试使用Apple iPhone 7 Plus (A1661) 128G手机</a>
        </td>
        <td class="order-list-cell cell-price">￥{{orderItem.currentUnitPrice}}</td>
        <td class="order-list-cell cell-count">{{orderItem.quantity}}</td>
        <td class="order-list-cell cell-total">￥{{orderItem.totalPrice}}</td>
      </tr>
    </tbody>
    </table>
    <div class="pagination" v-if="pages > 1">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :page-size="pageSize"
        background
        :pager-count="5"
        layout="prev, pager, next"
        :total="totalSize">
      </el-pagination>
    </div>
  </div>
</template>

<script>

export default{
  name: 'OrderCon',
  data () {
    return {
      title: '我的订单',
      pageSize: 10,
      pageNum: 1,
      pages: 1,
      totalSize: 0,
      orderList: []
    }
  },
  methods: {
    getOrderList(){
      this.axios.get('/api/order/list.do',{
        pageSize: this.pageSize,
        pageNum: this.pageNum
      }).then((res) => {
        this.totalSize = res.data.total
        this.orderList = res.data.list
        this.pages = res.data.pages 
        console.log(this.pages)
        console.log(this.totalSize)
      })
    },
    handleSizeChange(val){
      console.log(val)
    },
    handleCurrentChange(val){
      this.pageNum = val
      this.getOrderList()
    }
  },

  mounted() {
    this.getOrderList()
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
.order-list-table .cell-count,
.order-list-table .cell-price,
.order-list-table .cell-total
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
.enhance
  font-weight: 700
  color: #c60023
.pagination
  margin: auto
  display: table-cell
  text-align: center
  width: 1%
</style>
