<script setup lang="ts">
import { ref, onMounted } from 'vue'

const showPopup = ref(false)
const consent = ref({
  essential: true,
  analytics: false,
  marketing: false,
})

onMounted(() => {
  const saved = localStorage.getItem('cookie_consent')
  if (saved) {
    consent.value = JSON.parse(saved)
  } else {
    showPopup.value = true
  }
})

const saveConsent = () => {
  localStorage.setItem('cookie_consent', JSON.stringify(consent.value))
  showPopup.value = false

  if (consent.value.analytics) {
    initAnalytics()
  }
}

const acceptAll = () => {
  consent.value.analytics = true
  consent.value.marketing = true
  saveConsent()
}

const initAnalytics = () => {
  console.log('✅ Analytics geladen')
}
</script>

<template>
  <transition name="fade">
    <div
      v-if="showPopup"
      class="fixed bottom-4 right-4 z-50 bg-white p-4 rounded-lg shadow-lg w-80 max-w-full text-sm border border-gray-200"
    >
      <h2 class="font-semibold text-gray-800 mb-2">Cookie-Einstellungen</h2>
      <p class="text-gray-600 mb-3">
        Wir verwenden Cookies, um unsere Website zu verbessern. Du kannst selbst wählen, welche Kategorien du erlaubst.
      </p>

      <div class="space-y-2 mb-3">
        <label class="flex items-center gap-2">
          <input type="checkbox" disabled checked />
          <span>Essenzielle Cookies</span>
        </label>
        <label class="flex items-center gap-2">
          <input type="checkbox" v-model="consent.analytics" />
          <span>Statistik</span>
        </label>
        <label class="flex items-center gap-2">
          <input type="checkbox" v-model="consent.marketing" />
          <span>Marketing</span>
        </label>
      </div>

      <div class="flex justify-end gap-2">
        <button
          @click="saveConsent"
          class="px-3 py-1.5 rounded bg-gray-200 hover:bg-gray-300"
        >
          Speichern
        </button>
        <button
          @click="acceptAll"
          class="px-3 py-1.5 rounded bg-primary text-white hover:bg-primary-dark"
        >
          Alle akzeptieren
        </button>
      </div>
    </div>
  </transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
