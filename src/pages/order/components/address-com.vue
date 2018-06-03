<template>
  <div class="modal mask close clearfix">
    <div class="modal-container">
      <div class="modal-header">
        <h1>使用新地址</h1>
        <i class="fa fa-close close" @click="showHide">X</i>
      </div>
    <div class="modal-body">
      <div class="form">
        <div class="form-line clearfix">
          <label class="label">
          <span class="form-require">*</span>收件人姓名:</label>
          <input class="form-item name"
            id="receiver-name"
            type="text"
            v-model="dataForm.receiverName"
            placeholder="请输入收件人姓名"
            value="">
        </div>
        <div class="form-line clearfix">
          <label class="label">
            <span class="form-require">*</span>所在城市:
          </label>
          <div class="form-item province-select" @click.stop="provinShowFun()">
            {{dataForm.receiverProvince}}
            <ul class="province-list" v-if="provinShow">
              <li v-for="provinceItem of provinceList"
                @click="addProvince(provinceItem)"
                :key="provinceItem">
                {{
                  provinceItem
                }}
              </li>
            </ul>
          </div>
          <div class="form-item city-select" @click.stop="cityShowFun()">
            {{dataForm.receiverCity}}
            <ul class="city-list" v-if="cityShow">
              <li v-for="cityItem of cityList"
                @click="addCity(cityItem)"
                :key="cityItem">
                {{
                  cityItem
                }}
              </li>
            </ul>
          </div>
        </div>
        <div class="form-line clearfix">
          <label class="label">
            <span class="form-require">*</span>详细地址:
          </label>
          <input class="form-item" 
            type="text"
            placeholder="请精确到门牌号" 
            value=""
            v-model="dataForm.receiverAddress">
        </div>
        <div class="form-line clearfix">
          <label class="label">
            <span class="form-require">*</span>收件人手机号:
          </label>
            <input class="form-item" 
            type="text"
            placeholder="请输入11位手机号"
            value=""
            v-model="dataForm.receiverMobile">
          </div>
          <div class="form-line clearfix">
            <label class="label">邮政编码:</label>
            <input class="form-item"
            id="receiver-zip"
            type="text"
            placeholder="如：100000" 
            value=""
            v-model="dataForm.receiverZip">
          </div>
          <div class="form-line clearfix">
            <input type="hidden" id="receiver-id" value="">
            <a class="btn form-btn address-save" @click="creatAddress">保存收货地址</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import cities from '../../../assets/js/citys.js'
export default {
  name: 'AddressCom',
  data(){
    return {
      dataForm: {
        userId: this.$store.state.userMsg.data.id,
        receiverName: '',
        receiverPhone: '010',
        receiverMobile: '',
        receiverProvince: '请选择', // 省
        receiverCity: '请选择', // 市
        receiverAddress: '', // 详细地址
        receiverZip: '' // 邮政编码
      },
      phoneReg: /^1\d{10}$/, //手机号正则
      provinShow:false,
      cityShow: false,
      provinceList: cities.getProvinces(),
      cityList: [],
      selectDef: ''
    }
  },
  methods: {
    // 显示隐藏
    showHide() {
      this.$emit('showHide', false)
    },
    // 地址二级联动
    addProvince(option, idx){
      this.dataForm.receiverProvince = option
      if(this.selectDef != option){
        this.dataForm.receiverCity = '请选择'
        this.selectDef = this.dataForm.receiverProvince
      }
      this.cityList = cities.getCities(option)
    },
    // 城市选择
    addCity(option){ 
      this.dataForm.receiverCity = option
    },
    // 城市显隐的方法
    cityShowFun(){
      if(this.dataForm.receiverProvince == '请选择') return 
      this.cityShow = !this.cityShow
      this.provinShow = false
    },
    // 省显隐的方法
    provinShowFun(el){
      this.provinShow = !this.provinShow
      this.cityShow = false
    },
    // 创建地址
    creatAddress() {
      if(this.receiverName()) return
      if(this.receiverProvince()) return
      if(this.receiverCity()) return
      if(this.receiverAddress()) return
      if(this.isPhone()) return
      axios.get('api/shipping/add.do', {
        params:this.dataForm
      }).then((res) => {
        if(res.data.status == 0){
          this.showHide()
        }else{
          alert(res.data.msg)
        }
      }).catch((err) => {

      })
    },
    // 手机
    isPhone () {
      if(this.dataForm.receiverMobile == ''){
        alert('手机号不能为空')
        return true
      } else if(!this.phoneReg.test(this.dataForm.receiverMobile)){
        alert('请输入正确的手机号')
        return true
      }
      this.phoneErr = ''
      
      return false
    },
    //省份
    receiverProvince(){
      if(this.dataForm.receiverProvince == '请选择'){
        alert('省份不能为空')
        return true
      }
      return false
    },
    // 城市
    receiverCity() {
      if(this.dataForm.receiverCity == '请选择'){
        alert('城市不能为空')
        return true
      }
      return false
    },
    // 详细地址
    receiverAddress(){
       if(this.dataForm.receiverAddress == ''){
        alert('详细地址不能为空')
        return true
      }
      return false
    },
    // 收件人
    receiverName() {
      if(this.dataForm.receiverName == ''){
        alert('收件人不能为空')
        return true
      }
      return false
    }
  },
  mounted() {
    let bodyTap = document.body
    let _this = this;
    bodyTap.onclick = function(){
      _this.provinShow = false
      _this.cityShow = false
    }
  }
}
</script> 
<style lang="stylus" scoped>
  @import '../style/address-com.styl'
</style>