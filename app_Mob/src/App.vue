<template>
	<ion-app id="app" :class="[themeClass,alignClass,navigationClass]" class="ios ion-page hydrated">
		          <router-view></router-view>
	</ion-app>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { appConfig } from '@/config/appConfig'
@Component({})
export default class App extends Vue { 

	/**
     * 当前主题
     *
     * @readonly
     * @memberof App
     */
    get themeClass() {
        if (this.$router.app.$store.state.selectTheme) {
            return this.$router.app.$store.state.selectTheme;
        } else if (localStorage.getItem('theme-class')) {
            return localStorage.getItem('theme-class');
        } else {
            return appConfig.defaultTheme;
        }
	}

	/**
     * 当前文本对齐方式
     *
     * @readonly
     * @memberof App
     */
    get alignClass() {
        if (this.$router.app.$store.state.selectTextAlign) {
            return this.$router.app.$store.state.selectTextAlign;
        } else if (localStorage.getItem('align-class')) {
            return localStorage.getItem('align-class');
        } else {
            return 'app-text-align-right';
        }
  }
  
	/**
     * 当前导航栏样式
     *
     * @readonly
     * @memberof App
     */
    get navigationClass() {
        if (this.$router.app.$store.state.selectNaviStyle) {
            return this.$router.app.$store.state.selectNaviStyle;
        } else if (localStorage.getItem('navigation-class')) {
            return localStorage.getItem('navigation-class');
        } else {
            return 'app-navi-new';
        }
	}

  	/**
     * 视图条数
     *
     * @memberof App
     */
    public viewCount = 0;

    /**
     * 动画
     *
     * @memberof App
     */
    get fold(){
        return this.$router.app.$store.state.pageTagList.length > this.viewCount?'fold-left':'fold-right'
    }

    /**
     * 监听路由
     *
     * @memberof App
     */
    @Watch("$route")
        routeChange(to:any, from:any){
        setTimeout(() => {
            this.viewCount = this.$router.app.$store.state.pageTagList.length;
        }, 1000);
    }

    /**
     * 设置第三方应用
     *
     * @readonly
     * @memberof App
     */
    public setThirdPartyPath(){
        let name = this.$viewTool.getThirdPartyName();
        if(name){
            this.$router.app.$store.commit('setThirdPartyName',name);
        }
    }

	/**
     * 生命周期
     *
     * @readonly
     * @memberof App
     */
    public created(){
        this.setThirdPartyPath();
    }
}
</script>
<style>
.fold-left-enter-active {
    animation-name: fold-left-in;
    animation-duration: .3s;
  }
  .fold-left-leave-active {
    animation-name: fold-left-out;
    animation-duration: .3s;
  }
  @keyframes fold-left-in {
    0% {
      -webkit-transform: translate3d(100%, 0, 0);
      transform: translate3d(100%, 0, 0);
      /* visibility: visible; */
    }
    /*50% {
      transform: translate3d(50%, 0, 0);
    }*/
    100% {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }
  @keyframes fold-left-out {
    0% {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
    /*50% {
      transform: translate3d(-50%, 0 , 0);
    }*/
    100% {
      -webkit-transform: translate3d(-100%, 0, 0);
      transform: translate3d(-100%, 0, 0);
      /* visibility: hidden; */
    }
  }
  .fold-right-enter-active {
    animation-name: fold-right-in;
    animation-duration: .3s;
  }
  .fold-right-leave-active {
    animation-name: fold-right-out;
    animation-duration: .3s;
  }
  @keyframes fold-right-in{
    0% {
      width: 100%;
      -webkit-transform: translate3d(-100%, 0, 0);
      transform: translate3d(-100%, 0, 0);
      /* visibility: visible; */
    }
    /*50% {
      transform: translate3d(50%, 0, 0);
    }*/
    100% {
      width: 100%;
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }
  @keyframes fold-right-out  {
    0% {
      width: 100%;
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
    /*50% {
      transform: translate3d(-50%, 0 , 0);
    }*/
    100% {
      width: 100%;
      -webkit-transform: translate3d(100%, 0, 0);
      transform: translate3d(100%, 0, 0);
      /* visibility: hidden; */
    }
  }
</style>