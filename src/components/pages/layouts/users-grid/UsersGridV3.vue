<script setup lang="ts">
import { computed, ref } from 'vue'
import { users } from '/@src/data/layouts/user-grid-v3'

const props = withDefaults(
  defineProps<{
    activeTab?: 'all' | 'team'
  }>(),
  {
    activeTab: 'all',
  }
)

const filters = ref('')
const tab = ref(props.activeTab)

const filteredData = computed(() => {
  if (!filters.value) {
    return users
  } else {
    return users.filter((item) => {
      return (
        item.username.match(new RegExp(filters.value, 'i')) ||
        item.location.match(new RegExp(filters.value, 'i')) ||
        item.position.match(new RegExp(filters.value, 'i')) ||
        item.badge.match(new RegExp(filters.value, 'i'))
      )
    })
  }
})
</script>

<template>
  <div>
    <div class="user-grid-toolbar is-reversed tabs-wrapper is-slider">
      <VControl icon="feather:search">
        <input
          v-model="filters"
          class="input custom-text-filter"
          placeholder="جستجو..."
        />
      </VControl>

      <div class="tabs-inner">
        <div class="tabs">
          <ul>
            <li :class="[tab === 'all' && 'is-active']">
              <a tabindex="0" @keydown.space.prevent="tab = 'all'" @click="tab = 'all'"
                ><span>All</span></a
              >
            </li>
            <li :class="[tab === 'team' && 'is-active']">
              <a tabindex="0" @keydown.space.prevent="tab = 'team'" @click="tab = 'team'"
                ><span>Team</span></a
              >
            </li>
            <li class="tab-naver"></li>
          </ul>
        </div>
      </div>
    </div>

    <div class="user-grid user-grid-v3">
      <!--List Empty Search Placeholder -->
      <VPlaceholderPage
        :class="[filteredData.length !== 0 && 'is-hidden']"
        title="ما هیچ نتیجه مطابقی پیدا نکردیم."
        subtitle="خیلی بد. به نظر می رسد هیچ نتیجه مطابقی برای عبارات جستجویی که وارد کرده اید پیدا نکردیم. لطفاً عبارتها یا معیارهای جستجوی مختلف را امتحان کنید."
        larger
      >
        <template #image>
          <img
            class="light-image"
            src="/@src/assets/illustrations/placeholders/search-5.svg"
            alt=""
          />
          <img
            class="dark-image"
            src="/@src/assets/illustrations/placeholders/search-5-dark.svg"
            alt=""
          />
        </template>
      </VPlaceholderPage>

      <!--Active Tab-->
      <div
        id="active-items-tab"
        class="tab-content"
        :class="[tab === 'all' && 'is-active']"
      >
        <TransitionGroup
          name="list"
          tag="div"
          class="columns is-multiline is-flex-tablet-p is-half-tablet-p"
        >
          <!--Grid item-->
          <div v-for="item in filteredData" :key="item.id" class="column is-3">
            <TabbedGridItem :user="item" />
          </div>
        </TransitionGroup>
      </div>

      <!--inactive Tab-->
      <div
        id="inactive-items-tab"
        class="tab-content"
        :class="[tab === 'team' && 'is-active']"
      >
        <!--Empty placeholder-->
        <VPlaceholderPage
          title="بدون عضو در تیم"
          subtitle="به نظر می رسد شما هنوز هیچ تیمی ندارید. هنگامی که شروع به اضافه کردن تعدادی به تیم خود می کنید ، آنها در اینجا نشان داده می شوند."
        >
          <template #image>
            <img
              class="light-image is-larger"
              src="/@src/assets/illustrations/placeholders/team.svg"
              alt=""
            />
            <img
              class="dark-image is-larger"
              src="/@src/assets/illustrations/placeholders/team-dark.svg"
              alt=""
            />
          </template>
        </VPlaceholderPage>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../../../../scss/abstracts/mixins';

.user-grid-v3 {
  .columns {
    margin-left: -0.5rem !important;
    margin-right: -0.5rem !important;
    margin-top: -0.5rem !important;
  }

  .column {
    padding: 0.5rem !important;
  }

  .grid-item {
    @include vuero-s-card;

    text-align: center;

    > .v-avatar {
      display: block;
      margin: 0 auto 4px;
    }

    h3 {
      font-family: var(--font-alt);
      font-size: 1.1rem;
      font-weight: 600;
      color: var(--dark-text);
    }

    p {
      font-size: 0.85rem;
      margin-bottom: 16px;
    }

    .icon-tabs-wrapper {
      padding-bottom: 20px;

      .icon-tabs {
        width: 100%;
        max-width: 180px;
        margin: 0 auto;
        border: 1px solid var(--fade-grey-dark-4);
        border-radius: 8px;
        background: var(--white);
        box-shadow: var(--light-box-shadow);
        margin-bottom: 16px;

        .icon-tabs-inner {
          position: relative;
          display: flex;
          width: 100%;

          .tab-item {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 33.3%;
            color: var(--light-text);
            padding: 4px 8px;
            margin: 8px 0;

            &.is-active {
              color: var(--primary);
            }

            &:first-child {
              &.is-active ~ .icon-tabs-naver {
                margin-left: 0;
                [dir='rtl'] & {
                  margin-left: unset;
                  margin-right: 0;
                }
              }
            }

            &:nth-child(2) {
              border-left: 1px solid var(--fade-grey-dark-4);
              border-right: 1px solid var(--fade-grey-dark-4);

              &.is-active ~ .icon-tabs-naver {
                margin-left: 33% !important;
                [dir='rtl'] & {
                  margin-left: unset !important;
                  margin-right: 33% !important;
                }
              }
            }

            &:nth-child(3) {
              &.is-active ~ .icon-tabs-naver {
                margin-left: 66.6%;
                [dir='rtl'] & {
                  margin-left: unset;
                  margin-right: 66.6%;
                }
              }
            }

            svg {
              pointer-events: none;
              height: 16px;
              width: 16px;
              stroke-width: 1.6px;
            }
          }

          .icon-tabs-naver {
            position: absolute;
            bottom: -1px;
            left: 0;
            [dir='rtl'] & {
              left: unset;
              right: 0;
            }
            display: block;
            width: 33.3% !important;
            height: 2px;
            background: var(--primary);
            z-index: 1;
            transition: all 0.3s; // transition-all test
            border-radius: 12px;
          }
        }
      }

      .icon-tabs-content {
        display: none;
        animation: fadeInLeft 0.5s;
        [dir='rtl'] & {
          animation: fadeInRight 0.5s;
        }
        padding-top: 16px;

        &.is-active {
          display: block;
        }
      }

      .chart-block {
        display: flex;
        align-items: center;
        justify-content: space-between;
        max-width: 165px;
        margin: 0 auto;

        .stats {
          span {
            display: block;

            &:first-child {
              font-family: var(--font);
              font-size: 1.8rem;
              color: var(--dark-text);
              font-weight: 700;
              line-height: 1;
            }

            &:nth-child(2) {
              font-family: var(--font-alt);
              color: var(--light-text);
            }
          }
        }
      }
    }

    .buttons {
      display: flex;
      justify-content: space-between;
      margin-bottom: 0;

      .button,
      .v-button {
        width: calc(50% - 4px);
        color: var(--light-text);
        margin-bottom: 0;

        &:hover,
        &:focus {
          border-color: var(--fade-grey-dark-4);
          color: var(--primary);
          box-shadow: var(--light-box-shadow);
        }
      }
    }
  }
}

.is-dark {
  .user-grid-v3 {
    .grid-item {
      @include vuero-card--dark;

      .icon-tabs-wrapper {
        .icon-tabs {
          background: var(--dark-sidebar-light-2);
          border-color: var(--dark-sidebar-light-10);

          .icon-tabs-inner {
            .tab-item {
              border-color: var(--dark-sidebar-light-10);

              &.is-active {
                color: var(--primary);
              }
            }

            .icon-tabs-naver {
              background: var(--primary);
            }
          }
        }
      }
    }
  }
}
</style>
