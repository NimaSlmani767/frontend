<script setup lang="ts">
import { ref } from 'vue'
import ApexChart from 'vue3-apexcharts'

import type { VAvatarProps } from '/@src/components/base/avatar/VAvatar.vue'
import { completionOptions } from '/@src/data/dashboards/personal-v2/taskCompletionChart'
import { barOptions } from '/@src/data/dashboards/personal-v2/teamEfficiencyChart'
import { popovers } from '/@src/data/users/userPopovers'
import * as usersData from '/@src/data/dashboards/personal-v2/users'

const avatarStack1 = usersData.avatarStack1 as VAvatarProps[]
const avatarStack2 = usersData.avatarStack1 as VAvatarProps[]
const avatarStack3 = usersData.avatarStack1 as VAvatarProps[]
const avatarStack4 = usersData.avatarStack1 as VAvatarProps[]

const democheck = ref(['value_2'])
</script>

<template>
  <div class="personal-dashboard personal-dashboard-v2">
    <!--Personal Dashboard V2-->
    <div class="columns is-multiline">
      <div class="column is-12">
        <div class="dashboard-header">
          <VAvatar
            picture="/images/avatars/svg/vuero-1.svg"
            badge="/images/icons/flags/united-states-of-america.svg"
            size="xl"
          />
          <div class="user-meta is-dark-bordered-12">
            <h3 class="title is-4 is-narrow is-bold">خوش آمدی کاربر عزیز.</h3>
            <p class="light-text">از دیدار مجدد شما خوش وقتیم</p>
          </div>
          <div class="user-action">
            <h3 class="title is-2 is-narrow">۳ مورد تسک</h3>
            <p class="light-text">که باید امروز انجام گیرد</p>
            <a class="action-link">مشاهده‌ی تسک‌ها</a>
          </div>
          <div class="cta h-hidden-tablet-p">
            <div class="media-flex inverted-text">
              <i aria-hidden="true" class="lnil lnil-crown-alt-1"></i>
              <p class="white-text">شروع کار با ابزارهای مدیریت پروژه و تیم</p>
            </div>
            <a class="link inverted-text">بیشتر بدانید</a>
          </div>
        </div>
      </div>

      <div class="column is-8">
        <div class="dashboard-card has-margin-bottom">
          <div class="card-head">
            <h3 class="dark-inverted">پروژه‌های فعال</h3>
            <a class="action-link">مشاهده‌ی همه</a>
          </div>
          <div class="active-projects">
            <!--Project-->
            <VBlock
              title="پروژه‌ی اپلیکیشن ارسال مرسوله"
              subtitle="بروزرسانی ۳۰ دقیقه‌ی پیش"
              center
            >
              <template #icon>
                <VAvatar
                  picture="/demo/photos/apps/1.jpg"
                  badge="/images/icons/stacks/illustrator.svg"
                  size="medium"
                  squared
                />
              </template>
              <template #action>
                <VAvatarStack :avatars="avatarStack1" size="small" />
                <ProjectWidgetDropdown />
              </template>
            </VBlock>

            <!--Project-->
            <VBlock title="داشبرد سلامت و فیتنس" subtitle="بروزرسانی 5 ساعت پیش" center>
              <template #icon>
                <VAvatar
                  picture="/demo/photos/apps/2.png"
                  badge="/images/icons/stacks/reactjs.svg"
                  size="medium"
                  squared
                />
              </template>
              <template #action>
                <VAvatarStack :avatars="avatarStack2" size="small" />
                <ProjectWidgetDropdown />
              </template>
            </VBlock>

            <!--Project-->
            <VBlock
              title="داشبرد آموزشی و یادگیری"
              subtitle="بروزرسانی 7 ساعت پیش"
              center
            >
              <template #icon>
                <VAvatar
                  picture="/demo/photos/apps/3.png"
                  badge="/images/icons/stacks/angular.svg"
                  size="medium"
                  squared
                />
              </template>
              <template #action>
                <VAvatarStack :avatars="avatarStack3" size="small" />
                <ProjectWidgetDropdown />
              </template>
            </VBlock>

            <!--Project-->
            <VBlock
              title="داشبرد برای اپلیکیشن حسابداری"
              subtitle="بروزرسانی 10 ساعت پیش"
              center
            >
              <template #icon>
                <VAvatar
                  picture="/demo/photos/apps/4.png"
                  badge="/images/icons/stacks/js.svg"
                  size="medium"
                  squared
                />
              </template>
              <template #action>
                <VAvatarStack :avatars="avatarStack4" size="small" />
                <ProjectWidgetDropdown />
              </template>
            </VBlock>
          </div>
        </div>

        <div class="dashboard-card">
          <div class="card-head">
            <h3 class="dark-inverted">وضعیت امور</h3>
            <a class="action-link">گزارشات</a>
          </div>
          <ApexChart
            id="completion-chart"
            dir="ltr"
            :height="completionOptions.chart.height"
            :type="completionOptions.chart.type"
            :series="completionOptions.series"
            :options="completionOptions"
          >
          </ApexChart>
        </div>

        <div class="dashboard-card">
          <div class="card-head">
            <h3 class="dark-inverted">کارایی تیم</h3>
            <a class="action-link">بروزرسانی‌ها</a>
          </div>
          <ApexChart
            id="efficiency-chart"
            dir="ltr"
            :height="barOptions.chart.height"
            :type="barOptions.chart.type"
            :series="barOptions.series"
            :options="barOptions"
          >
          </ApexChart>
        </div>
      </div>

      <div class="column is-4">
        <div class="dashboard-card">
          <div class="card-head">
            <h3 class="dark-inverted">تیم من</h3>
            <a class="action-link">مشاهده‌ی همه</a>
          </div>
          <div class="active-team">
            <ul class="user-list">
              <li>
                <Tippy class="has-help-cursor" interactive :offset="[0, 10]">
                  <VAvatar picture="/demo/avatars/18.jpg" />
                  <template #content>
                    <UserPopoverContent :user="popovers.user18" />
                  </template>
                </Tippy>
                <div class="user-list-info">
                  <div class="name dark-inverted">بیل گیتس</div>
                  <div class="position">طراح رابط کاربری و تجربه کاربری</div>
                </div>
                <div class="user-list-icons">
                  <a><i aria-hidden="true" class="fas fa-phone"></i></a>
                  <a><i aria-hidden="true" class="fas fa-video"></i></a>
                </div>
              </li>
              <li>
                <Tippy class="has-help-cursor" interactive :offset="[0, 10]">
                  <VAvatar initials="SC" color="h-orange" />
                  <template #content>
                    <UserPopoverContent :user="popovers.user120" />
                  </template>
                </Tippy>
                <div class="user-list-info">
                  <div class="name dark-inverted">ملیسا مایر</div>
                  <div class="position">طراح رابط کاربری و تجربه کاربری</div>
                </div>
                <div class="user-list-icons">
                  <a><i aria-hidden="true" class="fas fa-phone"></i></a>
                  <a><i aria-hidden="true" class="fas fa-video"></i></a>
                </div>
              </li>
              <li>
                <Tippy class="has-help-cursor" interactive :offset="[0, 10]">
                  <VAvatar picture="/demo/avatars/13.jpg" />
                  <template #content>
                    <UserPopoverContent :user="popovers.user13" />
                  </template>
                </Tippy>
                <div class="user-list-info">
                  <div class="name dark-inverted">الیزابت چرچیل</div>
                  <div class="position">طراح رابط کاربری و تجربه کاربری</div>
                </div>
                <div class="user-list-icons">
                  <a><i aria-hidden="true" class="fas fa-phone"></i></a>
                  <a><i aria-hidden="true" class="fas fa-video"></i></a>
                </div>
              </li>
              <li>
                <Tippy class="has-help-cursor" interactive :offset="[0, 10]">
                  <VAvatar initials="NL" color="success" />
                  <template #content>
                    <UserPopoverContent :user="popovers.user121" />
                  </template>
                </Tippy>
                <div class="user-list-info">
                  <div class="name dark-inverted">جووانی شاتول</div>
                  <div class="position">توسعه دهنده‌ی رابط کاربری</div>
                </div>
                <div class="user-list-icons">
                  <a><i aria-hidden="true" class="fas fa-phone"></i></a>
                  <a><i aria-hidden="true" class="fas fa-video"></i></a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div class="dashboard-card">
          <div class="card-head">
            <h3 class="dark-inverted">وظابف امروز</h3>
            <a class="action-link">مشاهده‌ی همه</a>
          </div>
          <div class="active-list">
            <div class="checkboxes-list">
              <!-- List item -->
              <div class="list-item">
                <!-- Animated checkbox-->
                <VAnimatedCheckbox v-model="democheck" value="value_1" />
                <div class="item-meta">
                  <span class="dark-inverted">تماس با آقای تیم کوک</span>
                  <span>مرور طراحی‌های اولیه برای پروژه</span>
                </div>
              </div>
              <!-- List item -->
              <div class="list-item">
                <!-- Animated checkbox-->
                <VAnimatedCheckbox v-model="democheck" value="value_2" />
                <div class="item-meta">
                  <span class="dark-inverted">اتمام طراحی‌های اولیه</span>
                  <span>تمامی تغییرات خواسته شده اعمال شود</span>
                </div>
              </div>
              <!-- List item -->
              <div class="list-item">
                <!-- Animated checkbox-->
                <VAnimatedCheckbox v-model="democheck" value="value_3" />
                <div class="item-meta">
                  <span class="dark-inverted">بروزرسانی زمانبندی‌ها</span>
                  <span>بروزرسانی‌های همه‌ی زمانبندی‌های تیم طراحی</span>
                </div>
              </div>
              <!-- List item -->
              <div class="list-item">
                <!-- Animated checkbox-->
                <VAnimatedCheckbox v-model="democheck" value="value_4" />
                <div class="item-meta">
                  <span class="dark-inverted">درخواست واریز وجه</span>
                  <span>ارسال فاکتور پروژه به مشتری و درخواست هزینه</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="dashboard-card">
          <VPlaceholderSection
            title="نسخه‌ی پرمیوم"
            subtitle="در نسخه‌ی پرمیوم ابزار و ویژگی‌های بیشتری در دسترس است"
          >
            <template #image>
              <img
                class="light-image"
                src="/@src/assets/illustrations/placeholders/chart-guy.svg"
                alt=""
              />
              <img
                class="dark-image"
                src="/@src/assets/illustrations/placeholders/chart-guy-dark.svg"
                alt=""
              />
            </template>

            <template #action>
              <VButton color="primary" elevated> نسخه‌ی پرمیوم </VButton>
            </template>
          </VPlaceholderSection>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../../../../scss/abstracts/mixins';

.is-navbar {
  .personal-dashboard {
    margin-top: 30px;
  }
}

.personal-dashboard-v2 {
  .dashboard-header {
    @include vuero-s-card;

    display: flex;
    align-items: center;
    padding: 30px;

    .user-meta {
      padding: 0 3rem;
      border-right: 1px solid var(--fade-grey-dark-3);
      [dir='rtl'] & {
        border-right: none;
        border-left: 1px solid var(--fade-grey-dark-3);
      }

      h3 {
        max-width: 180px;
      }
    }

    .user-action {
      padding: 0 3rem;
    }

    .cta {
      position: relative;
      flex-grow: 2;
      max-width: 275px;
      margin-left: auto;
      [dir='rtl'] & {
        margin-left: 0;
        margin-right: auto;
      }
      background: var(--primary-light-8);
      padding: 20px;
      border-radius: var(--radius-large);
      box-shadow: var(--primary-box-shadow);

      .lnil,
      .lnir {
        position: absolute;
        bottom: 1rem;
        right: 1rem;
        [dir='rtl'] & {
          left: 1rem;
          right: auto;
        }
        font-size: 4rem;
        opacity: 0.3;
      }

      .link {
        font-family: var(--font-alt);
        display: block;
        font-weight: 500;
        margin-top: 0.5rem;

        &:hover,
        &:focus {
          color: var(--smoke-white);
          opacity: 0.6;
        }
      }
    }
  }

  .dashboard-card {
    @include vuero-s-card;

    padding: 30px;

    &:not(:last-child) {
      margin-bottom: 1.5rem;
    }

    .card-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 20px;

      h3 {
        font-family: var(--font-alt);
        font-size: 1rem;
        font-weight: 600;
        color: var(--dark-text);
        margin-bottom: 0;
      }
    }

    .active-projects,
    .active-team,
    .active-list {
      padding: 10px 0;
    }
  }
}

.is-dark {
  .personal-dashboard-v2 {
    .dashboard-header,
    .dashboard-card {
      @include vuero-card--dark;
    }

    .home-header {
      .cta {
        background: var(--primary-light-2);
        box-shadow: var(--primary-box-shadow);
      }
    }
  }
}

@media only screen and (max-width: 767px) {
  .personal-dashboard-v2 {
    .dashboard-header {
      flex-direction: column;
      text-align: center;

      .v-avatar {
        margin-bottom: 10px;
      }

      .user-meta {
        padding-top: 10px;
        padding-bottom: 10px;
        border: none;
        [dir='rtl'] & {
          border: none;
        }
      }

      .user-action {
        padding-bottom: 30px;
      }

      .cta {
        margin-left: 0;
        [dir='rtl'] & {
          margin-right: 0;
        }
      }
    }

    .active-projects {
      .media-flex-center {
        .flex-end {
          .avatar-stack {
            display: none;
          }
        }
      }
    }
  }
}
</style>
