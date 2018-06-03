<template>
  <div class="modal mask close">
    <div class="modal-container">
      <div class="modal-header">
        <h1>使用新地址</h1>
        <i class="fa fa-close close">X</i>
      </div>
    <div class="modal-body">
    <div class="form">
    <div class="form-line">
    <label class="label">
    <span class="form-require">*</span>收件人姓名:</label>
    <input class="form-item name" id="receiver-name" type="text" placeholder="请输入收件人姓名" value="">
    </div>
    <div class="form-line">
    <label class="label">
      <span class="form-require">*</span>所在城市:
    </label>
    <div class="form-item province-select">
      <ul class="province-list">
        <li>北京</li>
        <li>上海</li>
        <li>天津</li>
      </ul>
    </div>
    <div class="form-item city-select">
      <ul class="city-list">
        <li>北京</li>
        <li>上海</li>
        <li>天津</li>
      </ul>
    </div>
  </div>
  <div class="form-line">
    <label class="label">
      <span class="form-require">*</span>详细地址:</label>
      <input class="form-item" id="receiver-address" type="text" placeholder="请精确到门牌号" value="">
    </div>
      <div class="form-line">
        <label class="label">
          <span class="form-require">*</span>收件人手机号:</label>
          <input class="form-item" id="receiver-phone" type="text" placeholder="请输入11位手机号" value="">
        </div>
          <div class="form-line">
            <label class="label">邮政编码:</label>
            <input class="form-item" id="receiver-zip" type="text" placeholder="如：100000" value="">
          </div>
          <div class="form-line">
            <input type="hidden" id="receiver-id" value="">
            <a class="btn form-btn address-save">保存收货地址</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AddressCom',
  data(){
    return {

    }
  }
}
</script>
<style lang="stylus" scoped>
.modal
  overflow-x: hidden
  overflow-y: auto
.mask
  position: fixed
  top: 0
  right: 0
  bottom: 0
  left: 0
  z-index: 1000
  background: rgba(0,0,0,.4)
.modal .modal-container
  width: 700px
  margin: 50px auto
  background: #fff
  border-radius: 4px
.modal .modal-container .modal-header
  position: relative
  padding: 15px
  border-bottom: 1px solid #ccc
.modal .modal-container .modal-header h1
  font-size: 14px
.modal .modal-container .modal-header .close
  position: absolute
  right: 20px
  top: 20px
  cursor: pointer
.modal .modal-container .modal-body
  padding: 15px
.form .form-line
  overflow: hidden
  margin: 5px 0
.form .form-line .label
  cursor: pointer
  width: 80px
  display: block
  float: left
  text-align: right
  margin-right: 10px
  height: 30px
  line-height: 30px
.form .form-require
  color: red
.form .form-line .form-item
  padding: 0 5px
  height: 30px
  line-height: 30px
  outline: none
  margin-right: 10px
  border: 1px solid #e5e5e5
.province-select, .city-select
  position: relative
  float: left
  width: 200px
.city-list
  position: absolute
</style>