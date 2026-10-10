<template>
  <!-- COMPONENTE DADO: ejemplo de un componente reutilizable con props tipadas.
       ProductCard.vue se construye por analogia: props con defineProps<...>() y un
       evento con defineEmits<...>(). -->
  <div class="empty-state" role="status">
    <h2>{{ title }}</h2>
    <p>{{ message }}</p>
    <ion-button v-if="actionLabel" @click="emit('action')">{{ actionLabel }}</ion-button>
  </div>
</template>

<script setup lang="ts">
import { IonButton } from '@ionic/vue'

defineProps<{
  title: string
  message: string
  actionLabel?: string
}>()

// Evento "action" sin datos adicionales.
const emit = defineEmits<{
  action: []
}>()
</script>

<style scoped>
.empty-state {
  padding: 48px 24px;
  text-align: center;
}
</style>
