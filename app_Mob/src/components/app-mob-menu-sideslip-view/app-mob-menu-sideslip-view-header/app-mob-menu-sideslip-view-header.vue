<template>
  <div class="app-mob-menu-sideslip-view-header">
    <div class="header">
      <img src="assets/images/logo.png" class="ibizLogo"/>
      <div class="title">账号信息：{{srfloginname}}</div>
      <div class="text">{{text}}</div>
      <van-notice-bar left-icon="volume-o" :scrollable="false">
        <van-swipe
          vertical
          class="notice-swipe"
          :autoplay="3000"
          :show-indicators="false"
        >
          <van-swipe-item @click="toNotice">#论坛地址——{{notice1}}</van-swipe-item>
          <van-swipe-item>#开放平台——{{notice2}}</van-swipe-item>
          <van-swipe-item>#统一地址——{{notice3}}</van-swipe-item>
        </van-swipe>
      </van-notice-bar>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit, Model } from 'vue-property-decorator';
import { Environment } from '@/environments/environment';
@Component({
    components: {
    }
})
export default class AppMobMenuSideslipView extends Vue {

  /**
    * 账号信息
    *
    * @type {*}
    * @memberof AppMobMenuSideslipViewHeader
    */
  public srfloginname?:any;

  /**
    * 软件信息
    *
    * @type {string}
    * @memberof AppMobMenuSideslipViewHeader
    */
  public text?:string;

  /**
    * 信息
    *
    * @type {string}
    * @memberof AppMobMenuSideslipViewHeader
    */
  public notice1?:string;
  public notice2?:string;
  public notice3?:string;

  /**
    * 生命周期
    *
    * @memberof AppMobMenuSideslipViewHeader
    */
  public created(){
    this.text = Environment.AppTitle;
    this.notice1 = Environment.ibizbbstUrl;
    this.notice2 = Environment.ibizlabtUrl;
    this.notice3 = Environment.uniteAddress;
    let appdata = this.$store.state.appdata;
    this.srfloginname = appdata.context.srfloginname;
  }

  /**
    * 跳转论坛
    *
    * @memberof AppMobMenuSideslipViewHeader
    */
  public toNotice(){
    // window.location.href = 'https://bbs.ibizlab.cn';
    window.open('https://bbs.ibizlab.cn','_blank');
  }
}
</script>

<style lang="less">
@import "./app-mob-menu-sideslip-view-header.less";
</style>