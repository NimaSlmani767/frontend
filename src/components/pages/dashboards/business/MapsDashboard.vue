<script lang="ts">
import 'mapbox-gl/src/css/mapbox-gl.css'
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css'
</script>

<script setup lang="ts">
import { onMounted, ref, watch, watchPostEffect } from 'vue'
import mapboxgl from 'mapbox-gl'
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.min.js'
import { useThemeColors } from '/@src/composable/useThemeColors'
const themeColors = useThemeColors()
import { useDarkmode } from '/@src/stores/darkmode'

// You can set the VITE_MAPBOX_ACCESS_TOKEN inside .env file
mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN as string

const props = defineProps<{
  reversed?: boolean
}>()

const darkmode = useDarkmode()
const mapElement = ref<HTMLElement>()
const geocoderElement = ref<HTMLElement>()
const popupElement = ref<HTMLElement>()
const selectedFeature = ref()
const selectedFeatureLatLng = ref()
const selectedFeatureName = ref('')
let map: mapboxgl.Map | undefined
let popup: mapboxgl.Popup | undefined
let geocoder: any

const locations = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: {
        name: 'پیتزا فست',
        logo: '/images/icons/logos/fastpizza.svg',
        distance: 0.3,
        openingCount: '6 ب.ظ',
        phone: '+1 555 456-5659',
        website: 'https://huro.cssninja.io',
        description:
          'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.',
      },
      geometry: {
        type: 'Point',
        coordinates: [-77.038659, 38.931567],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'انواتو',
        logo: '/images/icons/logos/envato.svg',
        distance: 0.8,
        openingCount: '5 ب.ظ',
        phone: '+1 555 154-4568',
        website: 'https://huro.cssninja.io',
        description:
          'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.',
      },
      geometry: {
        type: 'Point',
        coordinates: [-77.003168, 38.894651],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'لیپ فلو',
        logo: '/images/icons/logos/lipflow.svg',
        distance: 1.2,
        openingCount: '8 ب.ظ',
        phone: '+1 555 456-7897',
        website: 'https://huro.cssninja.io',
        description:
          'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.',
      },
      geometry: {
        type: 'Point',
        coordinates: [-77.090372, 38.881189],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'متافیلمز',
        logo: '/images/icons/logos/metamovies.svg',
        distance: 0.5,
        openingCount: '11 ب.ظ',
        phone: '+1 555 456-5659',
        website: 'https://huro.cssninja.io',
        description:
          'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.',
      },
      geometry: {
        type: 'Point',
        coordinates: [-77.111561, 38.882342],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'اسلایزر',
        logo: '/images/icons/logos/slicer.svg',
        distance: 0.2,
        openingCount: '4:30 ب.ظ',
        phone: '+1 555 456-7568',
        website: 'https://huro.cssninja.io',
        description:
          'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.',
      },
      geometry: {
        type: 'Point',
        coordinates: [-77.052477, 38.943951],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'دراپ',
        logo: '/images/icons/logos/drop.svg',
        distance: 2.1,
        openingCount: '7 ب.ظ',
        phone: '+1 555 456-5659',
        website: 'https://huro.cssninja.io',
        description:
          'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.',
      },
      geometry: {
        type: 'Point',
        coordinates: [-77.043444, 38.909664],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'فرسکو',
        logo: '/images/icons/logos/fresco.svg',
        distance: 0.6,
        openingCount: '6 ب.ظ',
        phone: '+1 555 456-5659',
        website: 'https://huro.cssninja.io',
        description:
          'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.',
      },
      geometry: {
        type: 'Point',
        coordinates: [-77.031706, 38.914581],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'هیرز',
        logo: '/images/icons/logos/hairz.svg',
        distance: 0.3,
        openingCount: '6 ب.ظ',
        phone: '+1 555 755-3382',
        website: 'https://huro.cssninja.io',
        description:
          'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.',
      },
      geometry: {
        type: 'Point',
        coordinates: [-77.020945, 38.878241],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'وگو ال سی',
        logo: '/images/icons/logos/vego.svg',
        distance: 0.3,
        openingCount: '9 ب.ظ',
        phone: '+1 555 456-8984',
        website: 'https://huro.cssninja.io',
        description:
          'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.',
      },
      geometry: {
        type: 'Point',
        coordinates: [-77.007481, 38.876516],
      },
    },
  ],
}

function loadLayers() {
  if (!map) {
    return
  }

  // Do nothing if source already added
  if (map.getSource('places')) {
    return
  }

  map.addSource('places', {
    type: 'geojson',
    data: locations as any,
  })

  // Add a layer showing the places.
  map.addLayer({
    id: 'places',
    type: 'circle',
    source: 'places',
    paint: {
      'circle-color': darkmode.isDark ? themeColors.accent : themeColors.primary,
      'circle-radius': 6,
      'circle-stroke-width': 2,
      'circle-stroke-color': darkmode.isDark
        ? themeColors.accentLight
        : themeColors.primaryMedium,
    },
  })

  map.on('click', 'places', (e: any) => {
    selectedFeature.value = e.features[0]
    selectedFeatureLatLng.value = e.lngLat
  })

  // Change the cursor to a pointer when the mouse is over the places layer.
  map.on('mouseenter', 'places', () => {
    if (!map) {
      return
    }

    map.getCanvas().style.cursor = 'pointer'
  })

  // Change it back to a pointer when it leaves.
  map.on('mouseleave', 'places', () => {
    if (!map) {
      return
    }

    map.getCanvas().style.cursor = ''
  })
}

function selectFeature(feature: any) {
  selectedFeature.value = undefined
  selectedFeature.value = feature
}

onMounted(() => {
  if (!mapElement.value || !geocoderElement.value) {
    return
  }

  map = new mapboxgl.Map({
    container: mapElement.value,
    style: darkmode.isDark
      ? 'mapbox://styles/mapbox/dark-v10'
      : 'mapbox://styles/mapbox/light-v10',
    center: [-77.04, 38.907],
    zoom: 12,
  })

  geocoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    mapboxgl: mapboxgl,
    marker: true,
    placeholder: 'جستجو',
  })

  map.on('styledata', () => {
    const loadingStyles = () => {
      if (!map?.isStyleLoaded()) {
        setTimeout(loadingStyles, 1500)
        return
      }

      loadLayers()
    }
    loadingStyles()
  })

  geocoderElement.value.appendChild(geocoder.onAdd(map))
})

watchPostEffect(() => {
  if (!selectedFeature.value || !popupElement.value || !map) {
    return
  }

  const feature = selectedFeature.value
  const { geometry, properties } = feature
  const { name } = properties
  const coordinates = geometry.coordinates.slice()
  // const logo = selectedFeature.value.properties.logo
  // const openingCount = selectedFeature.value.properties.openingCount
  // const description = selectedFeature.value.properties.description

  console.log('zooming at: ', properties, coordinates)

  // Ensure that if the map is zoomed out such that multiple
  // copies of the feature are visible, the popup appears
  // over the copy being pointed to.
  if (selectedFeatureLatLng.value) {
    while (Math.abs(selectedFeatureLatLng.value.lng - coordinates[0]) > 180) {
      coordinates[0] += selectedFeatureLatLng.value.lng > coordinates[0] ? 360 : -360
    }
  }

  map.flyTo({
    center: coordinates,
    zoom: 15,
    bearing: 0,
    essential: true, // this animation is considered essential with respect to prefers-reduced-motion
  })

  if (popup) {
    popup.remove()
  }

  popup = new mapboxgl.Popup()
    .on('open', () => {
      selectedFeatureName.value = name
    })
    .on('close', () => {
      selectedFeatureName.value = ''
    })
    .setLngLat(coordinates)
    .setHTML(popupElement.value.innerHTML)
    .addTo(map)
})

watch(
  () => darkmode.isDark,
  () => {
    if (!map) {
      return
    }

    if (darkmode.isDark) {
      map.setStyle('mapbox://styles/mapbox/dark-v10')
    } else {
      map.setStyle('mapbox://styles/mapbox/light-v10')
    }
  }
)
</script>

<template>
  <div class="dashboard-map-wrapper">
    <div class="dashboard-map-wrapper-inner" :class="[props.reversed && 'is-reversed']">
      <div ref="mapElement" class="map-section">
        <div ref="geocoderElement" class="geocoder"></div>
        <div ref="popupElement" style="display: none; visibility: hidden">
          <MapMarker
            v-if="selectedFeature"
            :logo="selectedFeature.properties.logo"
            :name="selectedFeature.properties.name"
            :opening-count="selectedFeature.properties.openingCount"
            :description="selectedFeature.properties.description"
          />
        </div>
      </div>
      <div class="content-section">
        <slot name="header"></slot>
        <div class="content-section-body" data-simplebar>
          <!--Title-->
          <h4 class="content-section-title">لوکیشن‌های اخیر</h4>

          <!--Map Box-->
          <div
            v-for="(feature, key) in locations.features"
            :key="key"
            class="box map-box"
            :class="[selectedFeatureName === feature.properties.name && 'is-active']"
            tabindex="0"
            @keydown.space.prevent="selectFeature(feature)"
            @click="selectFeature(feature)"
          >
            <div class="map-box-place">
              <div class="map-box-header">
                <VBlock
                  :title="feature.properties.name"
                  :subtitle="`باز تا ${feature.properties.openingCount}`"
                  center
                >
                  <template #icon>
                    <VAvatar size="small" :picture="feature.properties.logo" />
                  </template>
                </VBlock>
              </div>
              <div class="map-box-body">
                <p>
                  {{ feature.properties.description }}
                </p>
              </div>
              <div class="map-box-actions">
                <div class="rating">
                  <i aria-hidden="true" class="fas fa-star highlighted"></i>
                  <i aria-hidden="true" class="fas fa-star highlighted"></i>
                  <i aria-hidden="true" class="fas fa-star highlighted"></i>
                  <i aria-hidden="true" class="fas fa-star highlighted"></i>
                  <i aria-hidden="true" class="fas fa-star highlighted"></i>
                </div>
                <div class="actions">
                  <div class="action">
                    <i aria-hidden="true" class="iconify" data-icon="feather:flag"></i>
                    <span class="dark-inverted">
                      {{ feature.properties.distance }} کیلومتر
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../../../../scss/abstracts/mixins';

.has-top-nav {
  .dashboard-map-wrapper {
    top: 80px;
    height: calc(100% - 80px);
  }
}

.dashboard-map-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  .dashboard-map-wrapper-inner {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: stretch;

    &.is-reversed {
      flex-direction: row-reverse;
    }

    .map-section {
      position: relative;
      width: calc(100% - 380px);
    }

    .content-section {
      width: 380px;
      background: var(--white);

      .content-section-header {
        height: 80px;
        width: 100%;
        display: flex;
        align-items: center;
        padding: 0 2rem;

        ~ .content-section-body {
          height: calc(100% - 80px);
          padding: 0 2rem 2rem;
        }
      }

      .content-section-body {
        height: 100%;
        overflow-y: auto;
        padding: 2rem;

        .content-section-title {
          font-family: var(--font);
          font-size: 0.8rem;
          color: var(--light-text);
          text-transform: uppercase;
          margin-bottom: 0.75rem;
        }

        .map-box {
          border: 1px solid var(--border);
          border-radius: 0.75rem;
          box-shadow: none;
          cursor: pointer;
          transition: border 0.3s, box-shadow 0.3s;

          &:focus-visible {
            outline-offset: var(--accessibility-focus-outline-offset);
            outline-width: var(--accessibility-focus-outline-width);
            outline-style: var(--accessibility-focus-outline-style);
            outline-color: var(--accessibility-focus-outline-color);
          }

          &.is-active {
            border-color: var(--primary);
            box-shadow: var(--light-box-shadow);
          }

          .map-box-body {
            padding: 0.5rem 0;

            p {
              font-size: 0.95rem;
            }
          }

          .map-box-actions {
            display: flex;
            align-items: center;
            justify-content: space-between;

            .rating {
              i {
                font-size: 0.9rem;
                color: var(--widget-grey);

                &.highlighted {
                  color: var(--yellow);
                }
              }
            }

            .action {
              display: flex;
              align-items: center;
              font-family: var(--font);
              font-size: 0.9rem;
              color: var(--dark-text);

              svg {
                height: 16px;
                width: 16px;
                margin-right: 0.25rem;
                color: var(--light-text);
              }
            }
          }
        }
      }
    }
  }
}

.mapboxgl-popup {
  &.mapboxgl-popup-anchor-bottom {
    .mapboxgl-popup-tip {
      z-index: 30;
      position: relative;
      top: -2px;
    }
  }

  &.mapboxgl-popup-anchor-top {
    .mapboxgl-popup-tip {
      z-index: 30;
      position: relative;
      bottom: -2px;
    }
  }

  &.mapboxgl-popup-anchor-right {
    .mapboxgl-popup-tip {
      z-index: 30;
      position: relative;
      left: -2px;
    }
  }

  &.mapboxgl-popup-anchor-left {
    .mapboxgl-popup-tip {
      z-index: 30;
      position: relative;
      right: -2px;
    }
  }

  .mapboxgl-popup-content {
    border: 1px solid var(--border);
    box-shadow: var(--light-box-shadow);
    padding: 1.25rem;
    border-radius: 0.5rem;

    .map-box-location {
      .map-box-body {
        padding: 0.5rem 0;

        p {
          line-height: 1.4;
        }
      }
    }
  }
}

.geocoder {
  position: absolute;
  z-index: 1;
  width: 100%;
  max-width: 380px;
  top: 1rem;
  left: 0;
  right: 0;
  margin: 0 auto;
}

.mapboxgl-ctrl-geocoder {
  min-width: 100% !important;
  border-radius: 0.65rem !important;
  border: 1px solid var(--border);
  box-shadow: var(--light-box-shadow);

  .mapboxgl-ctrl-geocoder--input {
    &:focus-visible {
      border-radius: 4px;
      outline-offset: var(--accessibility-focus-outline-offset);
      outline-width: var(--accessibility-focus-outline-width);
      outline-style: var(--accessibility-focus-outline-style);
      outline-color: var(--accessibility-focus-outline-color);
    }
  }

  .mapboxgl-ctrl-geocoder--suggestion-title {
    font-family: var(--font);
  }

  .mapboxgl-ctrl-geocoder--suggestion-address {
    font-family: var(--font);
  }

  .mapboxgl-ctrl-geocoder--icon-search {
    top: 13px;
    left: 12px;
    transition: stroke 0.3s;
    fill: var(--light-text);
  }

  .mapboxgl-ctrl-geocoder--pin-right > * {
    top: 11px !important;
    right: 11px !important;
  }

  .mapboxgl-ctrl-geocoder--button {
    background: none !important;
  }

  input {
    height: 44px;
    padding-left: 3rem;
    border-radius: 0.75rem;
    background: var(--white);
    transition: all 0.3s; // transition-all test

    &:focus {
      ~ .mapboxgl-ctrl-geocoder--icon-search {
        fill: var(--primary) !important;
      }
    }
  }
}

.is-dark {
  .dashboard-map-wrapper {
    .dashboard-map-wrapper-inner {
      .content-section {
        background: var(--dark-sidebar-dark-3);

        .content-section-body {
          .map-box {
            background: var(--dark-sidebar-light-3);
            border-color: var(--dark-sidebar-light-10);

            &.is-active {
              border-color: var(--primary) !important;
            }
          }
        }
      }
    }
  }

  .mapboxgl-popup {
    &.mapboxgl-popup-anchor-bottom {
      .mapboxgl-popup-tip {
        border-top-color: var(--dark-sidebar-dark-3);
      }
    }

    &.mapboxgl-popup-anchor-top {
      .mapboxgl-popup-tip {
        border-bottom-color: var(--dark-sidebar-dark-3);
      }
    }

    &.mapboxgl-popup-anchor-left {
      .mapboxgl-popup-tip {
        border-right-color: var(--dark-sidebar-dark-3);
      }
    }

    &.mapboxgl-popup-anchor-right {
      .mapboxgl-popup-tip {
        border-left-color: var(--dark-sidebar-dark-3);
      }
    }

    .mapboxgl-popup-content {
      background: var(--dark-sidebar-dark-3);
      border-color: var(--dark-sidebar-light-10);

      .mapboxgl-popup-close-button {
        color: var(--dark-dark-text) !important;
      }
    }
  }

  .mapboxgl-marker {
    svg {
      circle {
        fill: var(--dark-sidebar-light-3) !important;
      }
    }
  }

  .mapboxgl-ctrl-geocoder {
    background: var(--dark-sidebar-dark-3);
    border-color: var(--dark-sidebar-light-10);

    input {
      color: var(--white);
      background: var(--dark-sidebar-dark-3);
    }

    .suggestions-wrapper {
      .suggestions {
        background: var(--dark-sidebar-dark-3);
        border-color: var(--dark-sidebar-light-10);
      }
    }

    .suggestions > .active > a,
    .suggestions > li > a:hover {
      background: var(--dark-sidebar-dark-6);
    }

    .mapboxgl-ctrl-geocoder--suggestion-title {
      color: var(--dark-dark-text);
    }

    .mapboxgl-ctrl-geocoder--suggestion-address {
      color: var(--light-text);
    }
  }
}

@media only screen and (max-width: 767px) {
  .has-top-nav {
    .dashboard-map-wrapper {
      top: 0;
      height: 100%;
    }
  }

  .dashboard-map-wrapper {
    overflow-x: hidden;

    .dashboard-map-wrapper-inner {
      flex-direction: column;

      &.is-reversed {
        flex-direction: column;
      }

      .map-section {
        min-height: 30vh;
        width: 100%;
      }

      .content-section {
        height: 70vh;
      }
    }
  }

  .geocoder {
    padding: 0 2rem;
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
  .has-top-nav {
    .dashboard-map-wrapper {
      top: 0;
      height: 100%;
    }
  }

  .dashboard-map-wrapper {
    overflow-x: hidden;

    .dashboard-map-wrapper-inner {
      flex-direction: column;

      &.is-reversed {
        flex-direction: column;
      }

      .map-section {
        min-height: 30vh;
        width: 100%;
      }

      .content-section {
        height: calc(70vh - 60px);
        width: 100%;
      }
    }
  }

  .geocoder {
    padding: 0 2rem;
  }
}
</style>
