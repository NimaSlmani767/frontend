<script setup lang="ts">
import type { Ref, ComputedRef } from 'vue'
import { ref, computed } from 'vue'
import { debouncedWatch } from '@vueuse/core'

import sidebar from '/@src/data/landing/sidebar.json'
import auth from '/@src/data/landing/auth.json'
import minimal from '/@src/data/landing/minimal.json'
import starters from '/@src/data/landing/starters.json'
import navbar from '/@src/data/landing/navbar.json'

export interface DemoItem {
  name: string
  category: string
  keywords: string
  displayOrder: number
  new: boolean
  route: {
    name: string
    path: string
  }
  screenshot: {
    light: string
    dark: string
  }
}

// This is a helper function that generate a computed items filtered with the input
function useFilter(items: DemoItem[], filter: Ref<string>): ComputedRef<DemoItem[]> {
  return computed(() => {
    if (!filter.value) {
      return items
    }

    if (filter.value === 'new') {
      return items.filter((demo) => demo.new)
    }

    const searchValue = filter.value.replace(/[^A-Za-z0-9]/g, '')
    const filterRe = new RegExp(searchValue, 'i')

    return items.filter((demo) => {
      return (
        demo.name.match(filterRe) ||
        demo.category.match(filterRe) ||
        demo.keywords?.match(filterRe) ||
        demo.route.name.replace(/-/g, ' ').match(filterRe)
      )
    })
  })
}

function generateFeatureRequestLink(name: string) {
  return `https://github.com/cssninjaStudio/vuero-public/issues/new?assignees=&labels=feature-request%2Ctriage&template=feature_request.yml&title=%5BFeature%5D%3A+%20${name}`
}

function displayOrder(a: { displayOrder: number }, b: { displayOrder: number }) {
  if (a.displayOrder < b.displayOrder) {
    return -1
  }
  if (a.displayOrder > b.displayOrder) {
    return 1
  }
  return 0
}

const sidebarDemos = sidebar.sort(displayOrder) as DemoItem[]
const authDemos = auth.sort(displayOrder) as DemoItem[]
const minimalDemos = minimal.sort(displayOrder) as DemoItem[]
const templatesDemos = starters.sort(displayOrder) as DemoItem[]
const navbarDemos = navbar.sort(displayOrder) as DemoItem[]

const totalDemos =
  sidebarDemos.length +
  authDemos.length +
  minimalDemos.length +
  templatesDemos.length +
  navbarDemos.length

const filterInput = ref('')
const sidebarDemosFiltered = useFilter(sidebarDemos, filterInput)
const authDemosFiltered = useFilter(authDemos, filterInput)
const minimalDemosFiltered = useFilter(minimalDemos, filterInput)
const templatesDemosFiltered = useFilter(templatesDemos, filterInput)
const navbarDemosFiltered = useFilter(navbarDemos, filterInput)

const totalResults = computed(() => {
  return (
    sidebarDemosFiltered.value.length +
    authDemosFiltered.value.length +
    minimalDemosFiltered.value.length +
    templatesDemosFiltered.value.length +
    navbarDemosFiltered.value.length
  )
})

const searchLabel = computed(() => {
  if (!filterInput.value) {
    return `جستجو در ${totalDemos} دمو`
  }

  if (!totalResults.value) {
    return `متاسفانه هنوز برای "${filterInput.value}" دمو درست نشده است.`
  }

  return `${totalResults.value} دمو از ${totalDemos} برای جستجوی شما قابل نمایش است`
})

// We use debouncedWatch to debounce the filter input
debouncedWatch(
  filterInput,
  () => {
    if (filterInput.value.length < 3) {
      return
    }

    // gtag and is injected via vite-plugin-radar
    if (window && window.gtag) {
      window.gtag('event', 'search', {
        search_term: filterInput.value,
      })
      console.log(window.dataLayer)
    }
  },
  { debounce: 300 }
)
</script>

<template>
  <div class="vuero-demos">
    <div class="demo-search-section">
      <VFlex justify-content="center">
        <VField :label="searchLabel">
          <VControl icon="feather:search">
            <input
              v-model="filterInput"
              type="search"
              class="input is-rounded"
              placeholder="فوتبال، پرواز، فروشگاه، اپلیکیشن ..."
            />
          </VControl>
        </VField>
      </VFlex>
    </div>
    <div v-if="totalResults === 0">
      <VPlaceholderPage
        title="ما هیچ نتیجه مطابقی پیدا نکردیم."
        subtitle="خیلی بد. به نظر می رسد هیچ نتیجه مطابقی برای عبارات جستجویی که وارد کرده اید پیدا نکردیم. لطفاً عبارتها یا معیارهای جستجوی مختلف را امتحان کنید."
        larger
      >
        <template #image>
          <img
            class="light-image"
            src="/@src/assets/illustrations/placeholders/search-4.svg"
            alt=""
          />
          <img
            class="dark-image"
            src="/@src/assets/illustrations/placeholders/search-4-dark.svg"
            alt=""
          />
        </template>

        <template #action>
          <VButton
            :href="generateFeatureRequestLink(filterInput)"
            target="_blank"
            icon="feather:github"
          >
            Fill a request feature on github
          </VButton>
        </template>
      </VPlaceholderPage>
    </div>

    <!--ADMIN-->
    <div v-if="sidebarDemosFiltered.length > 0" class="demo-section">
      <div class="demo-section-title">
        <img
          class="light-image-block-l"
          src="/images/icons/components/layout-1.svg"
          alt=""
        />
        <img
          class="dark-image-block-l"
          src="/images/icons/components/layout-1-dark.svg"
          alt=""
        />
        <div class="title-meta">
          <h3>طرح سایدبردار</h3>
          <p>همراه با یک منوی عمودی در سایدبر</p>
        </div>
      </div>

      <div class="columns is-multiline">
        <!-- Demo item -->
        <div
          v-for="(item, index) in sidebarDemosFiltered"
          :key="index"
          class="column is-4 has-text-centered"
        >
          <figure
            class="vuero-demo-wrapper loaded"
            tabindex="0"
            @keydown.space.prevent="(e) => ((e.target as HTMLElement).querySelector('a[href]') as HTMLAnchorElement)?.click()"
          >
            <span v-if="item.new" class="new-tag">جدید</span>
            <img
              class="light-image-block-l"
              :src="item.screenshot.light"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              :src="item.screenshot.dark"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>{{ item.category }}</span>
                  <span>{{ item.name }}</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="item.route" tabindex="-1">
                    مشاهده‌ی دمو
                    <i aria-hidden="true" class="fas fa-angle-left"></i>
                  </RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>
      </div>
    </div>

    <!--WEBAPP-->
    <div v-if="navbarDemosFiltered.length > 0" class="demo-section">
      <div class="demo-section-title">
        <img
          class="light-image-block-l"
          src="/images/icons/components/layout-2.svg"
          alt=""
        />
        <img
          class="dark-image-block-l"
          src="/images/icons/components/layout-2-dark.svg"
          alt=""
        />
        <div class="title-meta">
          <h3>طرح منودار</h3>
          <p>همراه با یک منوی افقی در بالای صفحه</p>
        </div>
      </div>

      <div class="columns is-multiline">
        <!-- Demo item -->
        <div
          v-for="(item, index) in navbarDemosFiltered"
          :key="index"
          class="column is-4 has-text-centered"
        >
          <figure class="vuero-demo-wrapper loaded">
            <span v-if="item.new" class="new-tag">جدید</span>
            <img
              class="light-image-block-l"
              :src="item.screenshot.light"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              :src="item.screenshot.dark"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>{{ item.category }}</span>
                  <span>{{ item.name }}</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="item.route">
                    مشاهده‌ی دمو
                    <i aria-hidden="true" class="fas fa-angle-left"></i>
                  </RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>
      </div>
    </div>

    <!--MINIMAL-->
    <div v-if="minimalDemosFiltered.length > 0" class="demo-section">
      <div class="demo-section-title">
        <img
          class="light-image-block-l"
          src="/images/icons/components/layout-3.svg"
          alt=""
        />
        <img
          class="dark-image-block-l"
          src="/images/icons/components/layout-3-dark.svg"
          alt=""
        />
        <div class="title-meta">
          <h3>طرح مینیمال</h3>
          <p>بدون هیچ گونه منو</p>
        </div>
      </div>

      <div class="columns is-multiline">
        <!-- Demo item -->
        <div
          v-for="(item, index) in minimalDemosFiltered"
          :key="index"
          class="column is-4 has-text-centered"
        >
          <figure class="vuero-demo-wrapper loaded">
            <span v-if="item.new" class="new-tag">جدید</span>
            <img
              class="light-image-block-l"
              :src="item.screenshot.light"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              :src="item.screenshot.dark"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>{{ item.category }}</span>
                  <span>{{ item.name }}</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="item.route" tabindex="-1">
                    مشاهده‌ی دمو
                    <i aria-hidden="true" class="fas fa-angle-left"></i>
                  </RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>
      </div>
    </div>

    <!--AUTH-->
    <div v-if="authDemosFiltered.length > 0" class="demo-section">
      <div class="demo-section-title">
        <img
          class="light-image-block-l"
          src="/images/icons/components/layout-3.svg"
          alt=""
        />
        <img
          class="dark-image-block-l"
          src="/images/icons/components/layout-3-dark.svg"
          alt=""
        />
        <div class="title-meta">
          <h3>Auth</h3>
          <p>Sign-In &amp; Sign-Up templates</p>
        </div>
      </div>

      <div class="columns is-multiline">
        <!-- Demo item -->
        <div
          v-for="(item, index) in authDemosFiltered"
          :key="index"
          class="column is-4 has-text-centered"
        >
          <figure class="vuero-demo-wrapper loaded" tabindex="0">
            <span v-if="item.new" class="new-tag">جدید</span>
            <img
              class="light-image-block-l"
              :src="item.screenshot.light"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              :src="item.screenshot.dark"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>{{ item.category }}</span>
                  <span>{{ item.name }}</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="item.route" tabindex="-1">
                    مشاهده‌ی دمو
                    <i aria-hidden="true" class="fas fa-angle-left"></i>
                  </RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>
      </div>
    </div>

    <!--TEMPLATES-->
    <div v-if="templatesDemosFiltered.length > 0" class="demo-section">
      <div class="demo-section-title">
        <img
          class="light-image-block-l"
          src="/images/icons/components/layout-3.svg"
          alt=""
        />
        <img
          class="dark-image-block-l"
          src="/images/icons/components/layout-3-dark.svg"
          alt=""
        />
        <div class="title-meta">
          <h3>صفحات</h3>
          <p>صفحات خالی برای استارت سریع</p>
        </div>
      </div>

      <div class="columns is-multiline">
        <!-- Demo item -->
        <div
          v-for="(item, index) in templatesDemosFiltered"
          :key="index"
          class="column is-4 has-text-centered"
        >
          <figure class="vuero-demo-wrapper loaded" tabindex="0">
            <span v-if="item.new" class="new-tag">جدید</span>
            <img
              class="light-image-block-l"
              :src="item.screenshot.light"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              :src="item.screenshot.dark"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>{{ item.category }}</span>
                  <span>{{ item.name }}</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="item.route" tabindex="-1">
                    مشاهده‌ی دمو
                    <i aria-hidden="true" class="fas fa-angle-right"></i>
                  </RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.demo-search-section {
  margin-bottom: 2rem;

  &:deep(.label) {
    text-align: center !important;
  }

  .input {
    min-width: 300px;
  }
}

.vuero-demos {
  .demo-section {
    margin-bottom: 100px;

    .demo-section-title {
      display: flex;
      align-items: center;
      margin-bottom: 30px;

      img {
        display: block;
        width: 100%;
        max-width: 100px;
      }

      .title-meta {
        margin-left: 12px;
        [dir='rtl'] & {
          margin-left: 0;
          margin-right: 12px;
        }

        line-height: 1.2;

        h3 {
          font-family: var(--font-alt);
          font-weight: 500;
          font-size: 1.3rem;
          color: var(--dark-text);
        }

        p {
          font-family: var(--font);
          font-size: 1.1rem;
          color: var(--light-text);
        }
      }
    }
  }
}

.vuero-demo-wrapper {
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  border: 1px solid var(--fade-grey-dark-5);
  min-height: 205px;

  &:focus-visible {
    outline-offset: var(--accessibility-focus-outline-offset);
    outline-width: var(--accessibility-focus-outline-width);
    outline-color: var(--accessibility-focus-outline-color);
    outline-style: var(--accessibility-focus-outline-style);
  }

  &:hover {
    .circle-overlay {
      transform: scale(35);
    }

    .demo-title {
      opacity: 1;
      transform: translateY(0);
      transition-delay: 0 !important;
    }

    .demo-link {
      color: var(--white);
      opacity: 1;
      transform: translateY(0);
      transition-delay: 0 !important;
    }
  }

  &::after {
    // @extend %loader;

    position: absolute !important;
    top: 40%;
    left: 42%;
    height: 3.5rem;
    width: 3.5rem;
    transform: translate(-50%, -50%);
    z-index: 4;
  }

  &.loaded {
    &::after {
      display: none !important;
    }
  }

  img {
    border-radius: 10px;
    max-width: 100%;
    width: 100%;
  }

  .new-tag {
    position: absolute;
    bottom: 10px;
    right: 10px;
    background: red;
    color: var(--white);
    font-family: var(--font);
    padding: 6px 16px;
    border-radius: 8px;
    text-transform: uppercase;
    font-size: 0.8rem;
    z-index: 3;
  }

  .circle-overlay {
    position: absolute;
    top: -60px;
    left: -60px;
    width: 60px;
    height: 60px;
    border-radius: var(--radius-rounded);
    background: var(--primary);
    transform: scale(1);
    transition: all 0.5s;
    z-index: 1;
  }

  .demo-info {
    position: absolute;
    margin: 0 auto;
    top: 26%;
    left: 0;
    right: 0;
    z-index: 2;
    color: var(--white);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .demo-title {
    color: var(--white);
    font-family: var(--font);
    font-size: 1.5rem;
    font-weight: 600;
    opacity: 0;
    margin-bottom: 12px;
    padding-bottom: 12px;
    border-bottom: 1px solid var(--primary-light-20);
    transform: translateY(20px);
    transition: all 0.3s; // transition-all test
    transition-delay: 0.1s;

    span {
      display: block;

      &:first-child {
        text-transform: uppercase;
        font-size: 0.75rem;
      }

      &:nth-child(2) {
        font-weight: 300;
      }
    }
  }

  .demo-link {
    opacity: 0;
    transform: translateY(20px);
    transition: transform 0.3s, opacity 0.3s, color 0.3s;
    transition-delay: 0.2s;

    a {
      font-family: var(--font);
      color: var(--white);
      font-size: 1rem;
      margin-left: 8px;

      i {
        position: relative;
        top: 1px;
        opacity: 0;
        transform: translateX(0);
        transition: all 0.3s ease-out;
      }

      &:hover i {
        opacity: 1;
        transform: translateX(5px);
        [dir='rtl'] & {
          transform: translateX(-5px);
        }
      }
    }
  }
}

.is-dark {
  .landing-page-wrapper {
    .vuero-demos {
      .demo-section {
        .demo-section-title {
          .title-meta {
            h3 {
              color: var(--dark-dark-text);
            }
          }
        }
      }

      .vuero-demo-wrapper {
        border-color: var(--dark-sidebar-light-12);

        .circle-overlay {
          background: var(--primary);
        }

        .demo-title {
          border-color: var(--primary-light-10);
        }
      }
    }
  }
}

@media (max-width: 767px) {
  .landing-page-wrapper {
    .vuero-demo-wrapper {
      min-height: 184px;
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
  .landing-page-wrapper {
    .vuero-demos {
      .demo-section {
        .columns {
          display: flex;

          .column.is-4 {
            min-width: 50% !important;
          }
        }
      }
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  .landing-page-wrapper {
    .vuero-demo-wrapper {
      min-height: 174px;
    }
  }
}
</style>
