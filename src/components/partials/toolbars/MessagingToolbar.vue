<script setup lang="ts">
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'

import { useDarkmode } from '/@src/stores/darkmode'
import { usePanels } from '/@src/stores/panels'
import { useDropdown } from '/@src/composable/useDropdown'
import { onceImageErrored } from '/@src/utils/via-placeholder'

const panels = usePanels()
const darkmode = useDarkmode()
const emit = defineEmits(['close'])

const { locale } = useI18n()
const dropdownElement = ref<HTMLElement>()
const dropdown = useDropdown(dropdownElement)

const localFlagSrc = computed(() => {
  switch (locale.value) {
    case 'fr':
      return '/images/icons/flags/france.svg'
    case 'es':
      return '/images/icons/flags/spain.svg'
    case 'es-MX':
      return '/images/icons/flags/mexico.svg'
    case 'de':
      return '/images/icons/flags/germany.svg'
    case 'zh-CN':
      return '/images/icons/flags/china.svg'
    case 'en':
      return '/images/icons/flags/united-states-of-america.svg'
    case 'fa':
    default:
      return '/images/icons/flags/iran.svg'
  }
})
</script>

<template>
  <div class="toolbar mr-auto">
    <div class="toolbar-link">
      <label class="dark-mode mr-auto">
        <input
          type="checkbox"
          :checked="!darkmode.isDark"
          tabindex="0"
          @keydown.space.prevent="(e) => (e.target as HTMLLabelElement).click()"
          @change="darkmode.onChange"
        />
        <span></span>
      </label>
    </div>

    <a
      class="toolbar-link right-panel-trigger"
      tabindex="0"
      @keydown.space.prevent="panels.setActive('languages')"
      @click="panels.setActive('languages')"
    >
      <img :src="localFlagSrc" alt="" />
    </a>

    <div class="toolbar-notifications is-hidden-mobile">
      <div
        ref="dropdownElement"
        class="dropdown is-spaced is-dots is-right dropdown-trigger"
      >
        <div class="is-trigger" aria-haspopup="true" @click="dropdown.toggle">
          <i aria-hidden="true" class="iconify" data-icon="feather:bell"></i>
          <span class="new-indicator pulsate"></span>
        </div>
        <div class="dropdown-menu" role="menu">
          <div class="dropdown-content">
            <div class="heading">
              <div class="heading-left">
                <h6 class="heading-title">اعلانات</h6>
              </div>
              <div class="heading-right">
                <RouterLink
                  class="notification-link"
                  :to="{ name: 'sidebar-layouts-profile-notifications' }"
                >
                  See all
                </RouterLink>
              </div>
            </div>
            <ul class="notification-list">
              <li>
                <a class="notification-item">
                  <div class="img-left">
                    <img
                      class="user-photo"
                      alt=""
                      src="/demo/avatars/7.jpg"
                      @error.once="(event) => onceImageErrored(event, '150x150')"
                    />
                  </div>
                  <div class="user-content">
                    <p class="user-info">
                      <span class="name">آلیس</span> یک کامنت گذاشت.
                    </p>
                    <p class="time">1 ساعت پیش</p>
                  </div>
                </a>
              </li>
              <li>
                <a class="notification-item">
                  <div class="img-left">
                    <img
                      class="user-photo"
                      alt=""
                      src="/demo/avatars/12.jpg"
                      @error.once="(event) => onceImageErrored(event, '150x150')"
                    />
                  </div>
                  <div class="user-content">
                    <p class="user-info">
                      <span class="name">آرنولد اینشتین</span> فایلی را آپلود کرد.
                    </p>
                    <p class="time">2 ساعت پیش</p>
                  </div>
                </a>
              </li>
              <li>
                <a class="notification-item">
                  <div class="img-left">
                    <img
                      class="user-photo"
                      alt=""
                      src="/demo/avatars/13.jpg"
                      @error.once="(event) => onceImageErrored(event, '150x150')"
                    />
                  </div>
                  <div class="user-content">
                    <p class="user-info">
                      <span class="name">تارا</span> یک پیام به شما فرستاده است.
                    </p>
                    <p class="time">2 ساعت پیش</p>
                  </div>
                </a>
              </li>
              <li>
                <a class="notification-item">
                  <div class="img-left">
                    <img
                      class="user-photo"
                      alt=""
                      src="/demo/avatars/25.jpg"
                      @error.once="(event) => onceImageErrored(event, '150x150')"
                    />
                  </div>
                  <div class="user-content">
                    <p class="user-info">
                      <span class="name">ملانی</span> یک کامنت گذاشت.
                    </p>
                    <p class="time">3 ساعت پیش</p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <a
      id="hide-chat-side"
      class="toolbar-link"
      tabindex="0"
      @keydown.space.prevent="emit('close')"
      @click="emit('close')"
    >
      <i aria-hidden="true" class="iconify" data-icon="feather:chevron-left"></i>
    </a>
  </div>
</template>
