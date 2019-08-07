<template>
  <div id="app">
    <a-layout style="height: 100%;">
      <a-layout-sider :trigger="null" breakpoint="md" class="sider" collapsedWidth="0" collapsible theme="dark"
                      v-model="collapsed">
        <div class="logo">
          <svg alt="logo" aria-hidden="true" fill="currentColor"
               height="128" version="1.1" viewBox="0 0 128 128" width="128"
               xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>Vue</title>
            <desc>Created with Sketch.</desc>
            <defs>
              <linearGradient id="linearGradient-1" x1="69.644116%" x2="69.644116%" y1="0%" y2="100%">
                <stop offset="0%" stop-color="#29CDFF"></stop>
                <stop offset="37.8600687%" stop-color="#148EFF"></stop>
                <stop offset="100%" stop-color="#0A60FF"></stop>
              </linearGradient>
              <linearGradient id="linearGradient-2" x1="-19.8191553%" x2="138.57919%" y1="-36.7931464%"
                              y2="157.637507%">
                <stop offset="0%" stop-color="#29CDFF"></stop>
                <stop offset="100%" stop-color="#0F78FF"></stop>
              </linearGradient>
              <linearGradient id="linearGradient-3" x1="68.1279872%" x2="30.4400914%" y1="-35.6905737%"
                              y2="114.942679%">
                <stop offset="0%" stop-color="#FA8E7D"></stop>
                <stop offset="51.2635191%" stop-color="#F74A5C"></stop>
                <stop offset="100%" stop-color="#F51D2C"></stop>
              </linearGradient>
            </defs>
            <g fill="none" fill-rule="evenodd" id="Vue" stroke="none" stroke-width="1">
              <g id="Group" transform="translate(19.000000, 9.000000)">
                <path
                  d="M89.96,90.48 C78.58,93.48 68.33,83.36 67.62,82.48 L46.6604487,62.2292258 C45.5023849,61.1103236 44.8426845,59.5728835 44.8296987,57.9626396 L44.5035564,17.5209948 C44.4948861,16.4458744 44.0537714,15.4195095 43.2796864,14.6733517 L29.6459999,1.53153737 C28.055475,-0.00160504005 25.5232423,0.0449126588 23.9900999,1.63543756 C23.2715121,2.38092066 22.87,3.37600834 22.87,4.41143746 L22.87,64.3864751 C22.87,67.0807891 23.9572233,69.6611067 25.885409,71.5429748 L63.6004615,108.352061 C65.9466323,110.641873 69.6963584,110.624605 72.0213403,108.313281"
                  fill="url(#linearGradient-1)" fill-rule="nonzero" id="Path-Copy"
                  transform="translate(56.415000, 54.831157) scale(-1, 1) translate(-56.415000, -54.831157) "></path>
                <path
                  d="M68,90.1163122 C56.62,93.1163122 45.46,83.36 44.75,82.48 L23.7904487,62.2292258 C22.6323849,61.1103236 21.9726845,59.5728835 21.9596987,57.9626396 L21.6335564,17.5209948 C21.6248861,16.4458744 21.1837714,15.4195095 20.4096864,14.6733517 L6.7759999,1.53153737 C5.185475,-0.00160504005 2.65324232,0.0449126588 1.12009991,1.63543756 C0.401512125,2.38092066 3.90211878e-13,3.37600834 3.90798505e-13,4.41143746 L3.94351218e-13,64.3864751 C3.94681177e-13,67.0807891 1.08722326,69.6611067 3.01540903,71.5429748 L40.7807092,108.401101 C43.1069304,110.671444 46.8180151,110.676525 49.1504445,108.412561"
                  fill="url(#linearGradient-2)" fill-rule="nonzero" id="Path"></path>
                <path
                  d="M43.2983488,19.0991931 L27.5566079,3.88246244 C26.7624281,3.11476967 26.7409561,1.84862177 27.5086488,1.05444194 C27.8854826,0.664606611 28.4044438,0.444472651 28.9466386,0.444472651 L60.3925021,0.444472651 C61.4970716,0.444472651 62.3925021,1.33990315 62.3925021,2.44447265 C62.3925021,2.9858375 62.1730396,3.50407742 61.7842512,3.88079942 L46.0801285,19.0975301 C45.3051579,19.8484488 44.0742167,19.8491847 43.2983488,19.0991931 Z"
                  fill="url(#linearGradient-3)" id="Path"></path>
              </g>
            </g>
          </svg>
          <h1>Antd Pro</h1>
        </div>
        <a-menu :defaultSelectedKeys="[activeMenu]"
                @click="handleRoute"
                style="padding: 16px 0"
                theme="dark"
        >
          <a-menu-item key="/">
            <a-icon type="home"/>
            <span>首页</span>
          </a-menu-item>
          <a-menu-item key="/about">
            <a-icon type="video-camera"/>
            <span>关于</span>
          </a-menu-item>
        </a-menu>
      </a-layout-sider>

      <a-layout>
        <a-layout-header style="background: #fff; padding: 0; box-shadow: 0 1px 4px rgba(0,21,41,.08); z-index: 1">
          <a-row justify="space-between" style="padding-right: 16px;" type="flex">
            <a-col :span="10">
              <a-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'" @click="()=> collapsed = !collapsed"
                      class="trigger"/>
            </a-col>
            <a-col :lg="6" :md="8" :sm="10" :xl="4" :xs="14" :xxl="6">
              <a-input-search @keyup.enter="logDevice" @search="logDevice"
                              placeholder="搜索记录"
                              v-model="keyword"></a-input-search>
            </a-col>
          </a-row>
        </a-layout-header>

        <a-layout-content>
          <page-header title="关于">
            <p slot="content">关于这个项目的一句话描述</p>
          </page-header>
          <transition mode="out-in" name="fadeInUp">
            <div style="margin: 24px 24px 0;">
              <router-view/>
            </div>
          </transition>
        </a-layout-content>
        <a-layout-footer style="textAlign: center">
          Ant Design ©2019 Created by You and I
        </a-layout-footer>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
  import PageHeader from '@/components/PageHeader';

  export default {
    name: 'app',
    components: {
      PageHeader
    },
    data() {
      return {
        collapsed: false,
        keyword: '',
      };
    },
    mounted() {
    },
    methods: {
      handleRoute({ key }) {
        if (key && key !== window.location.pathname) {
          this.$router.push(key);
        }
      },
      logDevice() {
      }
    },
    computed: {
      // 跟随路由变化
      activeMenu() {
        return '/' + this.$route.path.split('/')[1];
      },
    }
  };
</script>

<style lang="less">
  #app {
    /*color: #2c3e50;*/
    box-sizing: border-box;
    position: absolute;
    height: 100%;
    width: 100%;
  }

  .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color .3s;
  }

  .sider {
    box-shadow: 2px 0 6px rgba(0, 21, 41, .35);

    .logo {
      position: relative;
      height: 64px;
      padding-left: 24px;
      line-height: 64px;
      transition: all .3s;

      svg {
        height: 32px;
        width: 32px;
        vertical-align: middle;
      }

      h1 {
        color: #fff;
        font-size: 20px;
        margin: 0 0 0 12px;
        font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
        font-weight: 600;
        vertical-align: middle;
        display: inline-block;
      }
    }
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translate(0, 50px);
    }

    to {
      opacity: 1;
      transform: none;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  .fadeInUp-enter-active {
    animation: fadeIn .5s;
  }
</style>
