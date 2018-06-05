<template>
  <div>
    <Crumbs></Crumbs>
    <div class="confirm-wrap w">
      <Address @showHide="showHide"
        @editAddress="editAddress"
        @aginAddressList="aginAddressList"
        :addressList="addressList"
        @isEdit="isEdit">
      </Address>
      <goods-list :orderList="orderList"></goods-list>
    </div>
    <div v-if="show">
      <address-com @showHide="showHide"
        @aginAddressList="aginAddressList"
        :editObj="editObj"
        :isUpdate="isUpdate"
        :createAdress="createAdress"></address-com>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import Crumbs from '../common/crumbs'
import Address from './components/address'
import GoodsList from './components/goods-list'
import AddressCom from './components/address-com'
export default {
  name: 'Order',
  components: {
    Crumbs,
    Address,
    GoodsList,
    AddressCom
  },
  data(){
    return {
      orderList: {},
      addressList: [],
      show: false,
      createAdress:{
        userId: this.$store.state.userMsg.data.id,
        receiverName: '',
        receiverPhone: '010',
        receiverMobile: '',
        receiverProvince: '请选择', // 省
        receiverCity: '请选择', // 市
        receiverAddress: '', // 详细地址
        receiverZip: '' // 邮政编码
      },
      isUpdate: 0,
      editObj: {}
    }
  },
  methods:{
    // 商品清单
    getOrderList () {
      axios.get('/api/order/get_order_cart_product.do')
      .then((res) => {
        this.orderList = res.data.data
      })
      .catch((arr) => {

      })
    },
    aginAddressList(){
      this.getAddressList()
    },
    getAddressList () {
      axios.get('/api/shipping/list.do',{
        params: {
          pageNum: 1,
          pageSize: 10
        } 
      })
      .then((res) => {
        this.addressList = res.data.data.list
      })
      .catch((arr) => {

      })
    },
    // 显示隐藏
    showHide (flag) {
      this.show = flag
    },
    isEdit(flg){
      this.isUpdate = flg
    },
    editAddress(params){
      this.editObj = params
    }
  },
  mounted () {
    this.getAddressList()
    this.getOrderList()
  }
}
</script>
<style lang="stylus" scoped>
  .confirm-wrap >>> .panel-title
    font-size: 15px
    font-weight: 700
    line-height: 35px
    height: 35px
    color: #333
    border-bottom: 1px solid #ddd
</style>