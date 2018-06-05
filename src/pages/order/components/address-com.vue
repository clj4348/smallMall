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
            placeholder="请输入收件人姓名"
            :value="dataForm.receiverName"
            @input="inName($event)">
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
            :value="dataForm.receiverAddress"
            @input="inNAddress($event)">
        </div>
        <div class="form-line clearfix">
          <label class="label">
            <span class="form-require">*</span>收件人手机号:
          </label>
            <input class="form-item" 
            type="text"
            placeholder="请输入11位手机号"
            :value="dataForm.receiverMobile"
            maxlength="11" 
            @input="inMobile($event)">
          </div>
          <div class="form-line clearfix">
            <label class="label">邮政编码:</label>
            <input class="form-item"
            id="receiver-zip"
            type="text"
            placeholder="如：100000" 
            :value="dataForm.receiverZip"
            @input="inZip($event)">
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
  props: {
    isEdit: Number, // 0 为新增， 1代表编辑
    editObj: Object,
    createAdress: Object,
    isUpdate: Number
  },
  data(){
    return {
      dataForm: {},
      phoneReg: /^1\d{10}$/, //手机号正则
      provinShow:false,
      cityShow: false,
      provinceList: cities.getProvinces(),
      cityList: [],
      isUpdataAddress: 0
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
    // 这里主要考虑编辑页面需要绑定默认值
    // 收件人名称双向绑定
    inName(e){
      this.dataForm.receiverName = e.target.value
    },
    // 详细地址双向绑定
    inNAddress(e){
      this.dataForm.receiverAddress = e.target.value
    },
    // 手机号双向数据绑定
    inMobile(e){
      this.dataForm.receiverMobile = e.target.value
    },
    // 邮政编码双向数据绑定
    inZip(e){
      this.dataForm.receiverZip = e.target.value
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
      let url = ''
      let datas = {}
      if(this.isUpdate == 0){
        url = '/api/shipping/add.do'
        datas = this.dataForm
      }else{
        url = '/api/shipping/update.do'
        datas = {
          id: this.dataForm.id,
          receiverName: this.dataForm.receiverName,
          receiverPhone: this.dataForm.receiverPhone,
          receiverMobile: this.dataForm.receiverMobile,
          receiverProvince: this.dataForm.receiverProvince,
          receiverCity: this.dataForm.receiverCity,
          receiverAddress: this.dataForm.receiverAddress,
          receiverZip:this.dataForm.receiverZip
        }
      }
      
      axios.get(url, {
        params: datas
      }).then((res) => {
        if(res.data.status == 0){
          this.showHide()
          this.$emit('aginAddressList')
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
    console.log(this.createAdress)
    if(this.isUpdate == 0){
      this.dataForm = this.createAdress
    }else{
      this.dataForm = this.editObj
    }
  }
}
</script> 
<style lang="stylus" scoped>
  @import '../style/address-com.styl'
</style>