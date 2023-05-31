<script setup lang="ts">
import { onMounted } from 'vue'
import { useFarmStore } from '/@src/stores/farm'
import { ref } from 'vue'

// define props for using in the component
// Access params with `params.id`
const showLossesModal = ref(false)
const showFeedingCheckingModal = ref(false)
const showWaterQualityModal = ref(false)

const params = defineProps({
  id: {
    type: String,
    required: true,
  },
})

const farmStore = useFarmStore()

onMounted(async () => {
  await farmStore.getFarm(params.id)
})
</script>

<template>
  <div class="page-content-inner">
    <!-- <FeedingChecking :show="showLossesModal" />
    <Losses :show="showFeedingCheckingModal" />
    <WaterQuality :show="showWaterQualityModal" /> -->
    <div class="nav-buttons-ponds">
      <VButton color="light-border" @click="showLossesModal = true" raised>تلفات</VButton>
      <VButton color="light-border" @click="showFeedingCheckingModal = true" raised
        >غذادهی</VButton
      >
      <VButton color="light-border" @click="showWaterQualityModal = true" raised
        >اندازه گیری</VButton
      >
    </div>
    <!-- <TestDashboard /> -->
    <div class="business-dashboard course-dashboard">
      <!--Tile Grid v1-->
      <div class="columns is-multiline tile-grid tile-grid-v2">
        <PondList />
        <CreatePondForm />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.nav-buttons-ponds {
  width: 100%;
  // height: 50px;
  background: white;
  border: 1px solid rgb(228, 228, 228);
  border-radius: 5px;
  margin-bottom: 15px;
  padding: 10px;
  .button {
    width: 100% !important;
  }
  .button:not(:last-child) {
    margin-bottom: 10px;
  }
}
@media screen and (min-width: 600px) {
  .nav-buttons-ponds {
    display: grid;
    grid-template-columns: 32.7% 32.7% 32.7%;
    justify-content: space-between;
    .button {
      margin-bottom: 0 !important;
    }
  }
}
</style>
