<script setup lang="ts">
import { useHead } from '@vueuse/head'

useHead({
  title: import.meta.env.VITE_SITE_TITLE as string,
})
</script>

<template>
  <LandingLayout theme="light">
    <div class="landing-page-wrapper">
      <!-- Hero and Navbar -->
      <div id="Vuero-marketing" class="hero marketing-hero is-left is-fullheight">
        <!-- Navbar partial -->
        <LandingEmptyNavigation />

        <!--Hexagon shapes-->
        <img
          class="hexagon hexagon-1 light-image-l"
          src="/images/icons/hexagons/accent.svg"
          alt=""
        />
        <img
          class="hexagon hexagon-1 dark-image-l"
          src="/images/icons/hexagons/accent-heavy.svg"
          alt=""
        />
        <img
          class="hexagon hexagon-2 light-image-l"
          src="/images/icons/hexagons/accent.svg"
          alt=""
        />
        <img
          class="hexagon hexagon-2 dark-image-l"
          src="/images/icons/hexagons/accent-heavy.svg"
          alt=""
        />
        <img
          class="hexagon hexagon-3 light-image-l"
          src="/images/icons/hexagons/green.svg"
          alt=""
        />
        <img
          class="hexagon hexagon-3 dark-image-l"
          src="/images/icons/hexagons/green-heavy.svg"
          alt=""
        />
        <img
          class="hexagon hexagon-4 light-image-l"
          src="/images/icons/hexagons/purple.svg"
          alt=""
        />
        <img
          class="hexagon hexagon-4 dark-image-l"
          src="/images/icons/hexagons/purple-heavy.svg"
          alt=""
        />

        <div class="hero-body">
          <div class="container">
            <div class="columns is-vcentered">
              <div class="column is-5">
                <h1 class="title is-1 is-bold">Easier development. Beautiful projects</h1>
                <h3 class="subtitle is-4 pt-2 light-text">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
                  از طراحان گرافیک است.
                </h3>
                <div class="buttons">
                  <VButton color="primary" bold rounded raised> شروع کنید </VButton>
                  <VButton color="primary" outlined bold rounded raised>
                    14-day Trial
                  </VButton>
                </div>
              </div>
              <div class="column is-7">
                <img
                  class="light-image-l hero-mockup"
                  src="/@src/assets/illustrations/landing/app-2.png"
                  alt=""
                />
                <img
                  class="dark-image-l hero-mockup"
                  src="/@src/assets/illustrations/landing/app-2-dark.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--Feature boxes section-->
      <a id="features" name="features" aria-label="Features" />
      <MarketingFeaturesIcons />

      <!--Pricing section-->
      <MarketingPricings />

      <!--Mockup Section-->
      <MarketingMockup />

      <!--Side Features Section-->
      <MarketingSideFeatures />

      <!--About section-->
      <MarketingAbout />

      <!-- Footer -->
      <LandingFooter />

      <!-- Back To Top Button -->
      <div id="backtotop">
        <a href="#" aria-label="back to top">
          <i aria-hidden="true" class="fas fa-angle-up"></i>
        </a>
      </div>
    </div>
  </LandingLayout>
</template>

<style lang="scss">
@import '../scss/abstracts/mixins';
@import '../scss/_demo/landing';

.marketing-hero {
  position: relative;

  &.is-left,
  &.is-right {
    .hero-body {
      h1 {
        max-width: 480px;
      }

      h3 {
        max-width: 520px;
      }
    }
  }

  &.is-centered {
    background: var(--widget-grey);

    .hero-body {
      .columns {
        padding-top: 6rem;
      }

      .title,
      .subtitle,
      .switch-wrapper {
        margin-left: auto;
        margin-right: auto;
      }

      h1 {
        max-width: 880px;
      }

      h3 {
        max-width: 520px;
      }

      .hero-mockup {
        max-width: 640px;
        margin: 0 auto;
      }
    }
  }

  &.is-left,
  &.is-centered {
    background: var(--widget-grey);

    .hexagon {
      position: absolute;
      animation: rotating 15s infinite;
      animation-timing-function: linear;

      &.hexagon-1 {
        top: -180px;
        left: -180px;
        height: 450px;
        width: 450px;
        transform: rotate(39deg);
      }

      &.hexagon-2 {
        bottom: 80px;
        right: 80px;
        height: 360px;
        width: 360px;
        transform: rotate(75deg);
        animation-delay: 2s;
      }

      &.hexagon-3 {
        bottom: 40px;
        left: 40px;
        height: 190px;
        width: 190px;
        transform: rotate(95deg);
        animation-delay: 0.5s;
      }

      &.hexagon-4 {
        top: -155px;
        left: 50%;
        height: 230px;
        width: 230px;
        transform: rotate(135deg);
        animation-delay: 1s;
      }
    }
  }

  &.is-right {
    background: var(--widget-grey);

    .hexagon {
      position: absolute;
      animation: rotating 15s infinite;
      animation-timing-function: linear;

      &.hexagon-1 {
        top: -180px;
        right: -180px;
        height: 450px;
        width: 450px;
        transform: rotate(39deg);
      }

      &.hexagon-2 {
        bottom: 80px;
        left: 80px;
        height: 360px;
        width: 360px;
        transform: rotate(75deg);
        animation-delay: 2s;
      }

      &.hexagon-3 {
        bottom: 40px;
        right: 40px;
        height: 190px;
        width: 190px;
        transform: rotate(95deg);
        animation-delay: 0.5s;
      }

      &.hexagon-4 {
        top: -155px;
        left: 50%;
        height: 230px;
        width: 230px;
        transform: rotate(135deg);
        animation-delay: 1s;
      }
    }
  }

  .hero-body {
    .buttons {
      .button {
        min-height: 44px;
        min-width: 140px;
      }
    }

    .hero-mockup {
      box-shadow: var(--light-box-shadow);
      border: 1px solid var(--border);
      border-radius: 0.75rem;
    }
  }
}

.is-dark {
  .marketing-hero {
    &.is-left,
    &.is-right,
    &.is-centered {
      background: var(--landing-xxx-dark-2);

      .hexagon {
        opacity: 0.3;
      }

      .hero-body {
        .hero-mockup {
          border-color: var(--landing-xxx-light-8);
        }

        .buttons {
          .button {
            &:not(.is-outlined) {
              background: var(--primary) !important;
              border-color: var(--primary) !important;

              &:hover,
              &:focus {
                box-shadow: var(--primary-box-shadow) !important;
              }
            }

            &.is-outlined {
              color: var(--primary) !important;
              border-color: var(--primary) !important;

              &:hover,
              &:focus {
                background: var(--primary) !important;
                color: var(--white) !important;
                box-shadow: var(--primary-box-shadow) !important;
              }
            }
          }
        }
      }
    }
  }
}

.centered-mockup-wrapper {
  margin: 2rem auto;
  max-width: 740px;

  .mockup-container {
    position: relative;

    .hexagon {
      position: absolute;
      animation: rotating 15s infinite;

      &.hexagon-1 {
        top: -110px;
        left: -110px;
        height: 230px;
        width: 230px;
        transform: rotate(39deg);
        animation-delay: 2s;
      }

      &.hexagon-2 {
        bottom: 160px;
        right: -80px;
        height: 160px;
        width: 160px;
        transform: rotate(75deg);
        z-index: 2;
        animation-delay: 0.5s;
      }

      &.hexagon-3 {
        bottom: 60px;
        left: -180px;
        height: 100px;
        width: 100px;
        transform: rotate(125deg);
        z-index: 2;
        animation-delay: 1s;
      }
    }
  }

  img:not(.hexagon) {
    position: relative;
    border-radius: 0.75rem;
    z-index: 1;

    &.light-image-l {
      box-shadow: var(--light-box-shadow);
      border: 1px solid var(--border);
    }

    &.dark-image-l {
      box-shadow: var(--light-box-shadow);
      border: 1px solid var(--dark-sidebar-light-12);
    }
  }
}

.is-dark {
  .centered-mockup-wrapper {
    .title {
      color: var(--white) !important;
    }
  }

  .video-section {
    .title {
      color: var(--white) !important;
    }

    .video-player-container {
      &.reversed-play {
        .plyr--full-ui.plyr--video .plyr__control--overlaid {
          border-color: var(--primary) !important;
          color: var(--primary) !important;

          &:hover,
          &:focus {
            background: var(--primary) !important;

            svg {
              stroke: var(--white) !important;
              fill: var(--white) !important;
            }
          }

          svg {
            stroke: var(--primary) !important;
          }
        }
      }
    }
  }
}

.pricing-wrapper {
  font-family: var(--font);
  font-weight: 400;
  color: #9f9f9f;
  font-size: 15px;
  display: flex;
  justify-content: center;
  max-width: 1040px;
  margin: 0 auto;

  .pricing-plan {
    width: calc(33.3% - 1.5rem);
    height: auto;
    background: var(--white);
    border: 1px solid var(--border);
    border-radius: 0.65rem;
    display: inline-block;
    padding: 24px;
    text-align: center;
    position: relative;
    margin: 0 0.75rem;
    overflow: hidden;
    transition: box-shadow 0.3s;

    &:hover,
    &:focus {
      box-shadow: var(--light-box-shadow);
    }

    &.is-featured {
      border-color: var(--primary);

      &::before {
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 64px 64px 0 0;
        border-color: var(--primary) transparent transparent transparent;
        position: absolute;
        left: 0;
        top: 0;
        content: '';
      }

      &::after {
        font-family: 'Font Awesome 5 Free';
        font-weight: 900;
        content: '\f00c';
        color: var(--white);
        position: absolute;
        left: 11px;
        top: 11px;
        text-shadow: 0 0 2px var(--primary);
        font-size: 1rem;
      }
    }

    .name {
      color: var(--dark-text);
      font-weight: 300;
      font-size: 2rem;
      margin-top: -5px;
    }

    img {
      max-width: 55px;
      margin: 0 auto;
    }

    .price {
      font-size: 1.8rem;
      margin: 0.75rem 0 1.5rem;
      font-weight: bold;

      &::after {
        content: ' /per month';
        font-size: 1rem;
        font-weight: normal;
        color: var(--light-text);
      }
    }

    hr {
      background-color: var(--border);
      border: none;
      height: 1px;
    }

    .trial {
      font-size: 0.9rem;
      font-weight: 600;
      padding: 2px 21px;
      color: var(--primary);
      border: 1px solid var(--border);
      display: inline-block;
      border-radius: 15px;
      background-color: var(--white);
    }

    ul {
      list-style: none;
      padding: 0;
      text-align: left;
      margin-top: 29px;
    }

    li {
      margin-bottom: 15px;

      &::before {
        font-family: 'Font Awesome 5 Free';
        font-weight: 900;
        content: '\f00c';
        font-size: 0.9rem;
        color: var(--success);
        margin-right: 6px;
      }
    }
  }
}

.is-dark {
  .pricing-wrapper {
    .pricing-plan {
      border-color: var(--landing-xxx-light-12);
      background: var(--landing-xxx-light-6);

      &.is-featured {
        border-color: var(--primary);

        &::before {
          border-color: var(--primary) transparent transparent transparent;
        }
      }

      .name {
        color: var(--dark-dark-text);
      }

      .price {
        color: var(--white);
      }

      .trial {
        color: var(--primary);
        border-color: var(--landing-xxx-light-12);
        background: var(--landing-xxx-light-2);
      }

      hr {
        background: var(--landing-xxx-light-12);
      }

      li {
        color: var(--light-text);

        strong {
          color: var(--white);
        }
      }
    }
  }
}

.card-icon-box {
  border: 1px solid var(--border);
  border-radius: 0.65rem;
  box-shadow: none;
  transition: box-shadow 0.3s;

  &:hover,
  &:focus {
    box-shadow: var(--light-box-shadow);
  }

  .v-icon {
    margin-bottom: 0.75rem;
  }
}

.is-dark {
  .card-icon-box {
    border-color: var(--landing-xxx-light-12);
    background: var(--landing-xxx-light-4);

    .v-icon {
      background: transparent;
      border: 2px solid var(--landing-xxx-light-12);
    }

    .title {
      color: var(--white);
    }
  }
}

.has-bg-dots {
  background-image: radial-gradient(circle, #f0f4ff 10%, transparent 15%),
    radial-gradient(circle, #f0f4ff 10%, transparent 15%);
  background-size: 50px 50px;
  background-position: 0 0, 0 0;
}

.is-dark {
  .has-bg-dots {
    background-image: radial-gradient(
        circle,
        var(--landing-xxx-light-4) 10%,
        transparent 15%
      ),
      radial-gradient(circle, var(--landing-xxx-light-4) 10%, transparent 15%);
    background-size: 50px 50px;
    background-position: 0 0, 0 0;
  }
}

.boxed-cta {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 430px;
  max-width: 1040px;
  margin: 0 auto;
  background: var(--primary);
  border-radius: 1rem;
  padding: 3rem;
  box-shadow: var(--primary-box-shadow);
  overflow: hidden;
  margin-bottom: 5rem;

  .v-avatar {
    position: absolute;

    &.v-avatar-1 {
      top: -7%;
      left: 4%;
    }

    &.v-avatar-2 {
      top: 5%;
      right: 5%;
    }

    &.v-avatar-3 {
      bottom: -9%;
      left: 5%;
    }

    &.v-avatar-4 {
      bottom: -9%;
      right: 5%;
    }

    &.v-avatar-5 {
      top: -7%;
      left: 50%;
    }

    &.v-avatar-6 {
      top: 40%;
      right: -3%;
    }

    &.v-avatar-7 {
      top: 30%;
      right: 12%;
    }

    &.v-avatar-8 {
      bottom: 30%;
      right: 16%;
    }

    &.v-avatar-9 {
      top: 9%;
      right: 21%;
    }

    &.v-avatar-10 {
      top: 40%;
      left: -3%;
    }

    &.v-avatar-11 {
      top: 30%;
      left: 12%;
    }

    &.v-avatar-12 {
      bottom: 17%;
      left: 16%;
    }

    &.v-avatar-13 {
      top: 9%;
      left: 21%;
    }

    &.v-avatar-14 {
      bottom: 20%;
      left: 1%;
    }

    &.v-avatar-15 {
      bottom: -7%;
      left: 39%;
    }

    &.v-avatar-16 {
      bottom: 12%;
      right: 30%;
    }

    .avatar {
      border: 4px solid var(--primary-light-8);
    }
  }

  .boxed-cta-content {
    max-width: 440px;

    .title,
    .subtitle {
      color: var(--white) !important;
    }

    .subtitle {
      opacity: 0.8;
    }

    .v-button {
      min-height: 44px;
      min-width: 190px;
      font-weight: 600;
      color: var(--primary) !important;
      background-color: var(--white) !important;
      border-color: var(--primary) !important;
    }
  }
}

.is-dark {
  .boxed-cta {
    background: var(--primary);
    box-shadow: var(--primary-box-shadow);

    .v-avatar {
      .avatar {
        border-color: var(--primary-light-8);
      }
    }

    .boxed-cta-content {
      .v-button {
        color: var(--primary);
      }
    }
  }
}

@media (max-width: 767px) {
  .marketing-hero {
    &.is-left,
    &.is-right,
    &.is-centered {
      text-align: center;

      .hexagon {
        &.hexagon-1 {
          top: -110px;
          left: -80px;
          height: 230px;
          width: 230px;
        }

        &.hexagon-2 {
          bottom: 45px;
          right: -80px;
          height: 220px;
          width: 220px;
        }

        &.hexagon-3 {
          bottom: 50%;
          left: -110px;
        }

        &.hexagon-4 {
          top: -165px;
          left: 70%;
          height: 230px;
          width: 230px;
        }
      }
    }

    .hero-body {
      .title,
      .subtitle {
        margin-left: auto;
        margin-right: auto;
      }

      .title {
        font-size: 2.5rem;
      }

      .buttons {
        justify-content: center;
        margin-bottom: 2rem;
      }

      .switch-wrapper {
        margin: 0 auto;
      }

      .hero-mockup {
        max-width: 100% !important;
        margin: 0 auto;
      }
    }
  }

  .centered-mockup-wrapper {
    .hexagon {
      &.hexagon-2 {
        bottom: 120px !important;
        right: -40px !important;
        height: 80px !important;
        width: 80px !important;
      }
    }
  }

  .pricing-wrapper {
    flex-wrap: wrap;

    .pricing-plan {
      width: calc(100% - 1.5rem);

      &:not(:last-child) {
        margin-bottom: 1.5rem;
      }
    }
  }

  .boxed-cta {
    .v-avatar {
      &.v-avatar-12,
      &.v-avatar-9,
      &.v-avatar-8,
      &.v-avatar-11,
      &.v-avatar-4,
      &.v-avatar-6,
      &.v-avatar-1 {
        display: none;
      }

      &.v-avatar-7 {
        right: -6%;
      }

      &.v-avatar-13 {
        top: 3%;
        left: -4%;
      }

      &.v-avatar-14 {
        left: -13%;
      }

      &.v-avatar-15 {
        bottom: -4%;
        left: 48%;
      }

      &.v-avatar-16 {
        right: -7%;
      }
    }

    .boxed-cta-content {
      .title {
        font-size: 2.5rem;
      }
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
  .marketing-hero {
    &.is-centered {
      text-align: center;

      .hexagon {
        &.hexagon-2 {
          bottom: 45px;
          right: -80px;
        }

        &.hexagon-3 {
          bottom: 50%;
          left: -110px;
        }
      }
    }

    &.is-left {
      text-align: center;

      .hexagon {
        &.hexagon-2 {
          bottom: 45px;
          right: -80px;
        }

        &.hexagon-3 {
          bottom: 50%;
          left: -110px;
        }
      }
    }

    &.is-right {
      text-align: center;

      .hexagon {
        &.hexagon-2 {
          bottom: 45px;
          right: -80px;
        }

        &.hexagon-3 {
          bottom: 50%;
          left: -110px;
        }
      }
    }

    .hero-body {
      .title,
      .subtitle {
        margin-left: auto;
        margin-right: auto;
      }

      .buttons {
        justify-content: center;
        margin-bottom: 2rem;
      }

      .switch-wrapper {
        margin: 0 auto;
      }

      .hero-mockup {
        max-width: 640px;
        margin: 0 auto;
      }
    }
  }

  .card-icon-boxes {
    display: flex;

    .column {
      min-width: 50%;
      width: 50%;
    }
  }

  .centered-mockup-wrapper {
    max-width: 640px;

    .columns {
      display: flex;
    }
  }

  .video-section {
    .columns .columns {
      display: flex;
      flex-wrap: wrap;
      max-width: 480px;
      margin: 0 auto;

      .column {
        min-width: 50%;
        width: 50%;
      }
    }
  }

  .boxed-cta {
    .v-avatar {
      &.v-avatar-12,
      &.v-avatar-9,
      &.v-avatar-8,
      &.v-avatar-11 {
        display: none;
      }
    }
  }
}
</style>
