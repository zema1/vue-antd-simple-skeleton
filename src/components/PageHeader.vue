<template>
  <div class="page-header">
    <div class="page-header-index-wide">
      <div class="detail">
        <div class="main" v-if="!$route.meta.hiddenHeaderContent">
          <div class="row">
            <img :src="logo" class="logo" v-if="logo"/>
            <h1 class="title" v-if="title">{{ title }}</h1>
            <div class="action">
              <slot name="action"></slot>
            </div>
          </div>
          <div class="row">
            <div class="avatar" v-if="avatar">
              <a-avatar :src="avatar"/>
            </div>
            <div class="headerContent" v-if="this.$slots.content">
              <slot name="content"></slot>
            </div>
            <div class="extra" v-if="this.$slots.extra">
              <slot name="extra"></slot>
            </div>
          </div>
          <div>
            <slot name="pageMenu"></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'PageHeader',
    props: {
      title: {
        type: [String, Boolean],
        default: true,
        required: false
      },
      logo: {
        type: String,
        default: '',
        required: false
      },
      avatar: {
        type: String,
        default: '',
        required: false
      }
    },
    data() {
      return {};
    }
  };
</script>

<style lang="less" scoped>
  .page-header {
    background: #fff;
    padding: 16px 32px 0;
    border-bottom: 1px solid #e8e8e8;

    .breadcrumb {
      margin-bottom: 16px;
    }

    .detail {
      display: flex;
      /*margin-bottom: 16px;*/

      .avatar {
        flex: 0 1 72px;
        margin: 0 24px 8px 0;

        & > span {
          border-radius: 72px;
          display: block;
          width: 72px;
          height: 72px;
        }
      }

      .main {
        width: 100%;
        flex: 0 1 auto;

        .row {
          display: flex;
          width: 100%;

          .avatar {
            margin-bottom: 16px;
          }
        }

        .title {
          font-size: 20px;
          font-weight: 500;
          font-size: 20px;
          line-height: 28px;
          font-weight: 500;
          color: rgba(0, 0, 0, 0.85);
          margin-bottom: 16px;
          flex: auto;
        }

        .logo {
          width: 28px;
          height: 28px;
          border-radius: 4px;
          margin-right: 16px;
        }

        .content,
        .headerContent {
          flex: auto;
          color: rgba(0, 0, 0, 0.45);
          line-height: 22px;

          .link {
            margin-top: 16px;
            line-height: 24px;

            a {
              font-size: 14px;
              margin-right: 32px;
            }
          }
        }

        .extra {
          flex: 0 1 auto;
          margin-left: 88px;
          min-width: 242px;
          text-align: right;
        }

        .action {
          margin-left: 56px;
          min-width: 266px;
          flex: 0 1 auto;
          text-align: right;

          &:empty {
            display: none;
          }
        }
      }
    }
  }

  .mobile .page-header {
    .main {
      .row {
        flex-wrap: wrap;

        .avatar {
          flex: 0 1 25%;
          margin: 0 2% 8px 0;
        }

        .content,
        .headerContent {
          flex: 0 1 70%;

          .link {
            margin-top: 16px;
            line-height: 24px;

            a {
              font-size: 14px;
              margin-right: 10px;
            }
          }
        }

        .extra {
          flex: 1 1 auto;
          margin-left: 0;
          min-width: 0;
          text-align: right;
        }

        .action {
          margin-left: unset;
          min-width: 266px;
          flex: 0 1 auto;
          text-align: left;
          margin-bottom: 12px;

          &:empty {
            display: none;
          }
        }
      }
    }
  }
</style>