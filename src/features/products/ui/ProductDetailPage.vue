<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-buttons slot="start">
          <ion-back-button default-href="/productos" />
        </ion-buttons>
        <ion-title>Detalle</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <!-- TODO(Parte 2): cargar el producto con getProduct(id) y mostrar su detalle
           (nombre, precio, categoria y existencias). Maneje tambien la carga y el
           error (producto inexistente o falla del servicio). -->
      <h2>Detalle del producto {{ productId }}</h2>
      <p>TODO(Parte 2): mostrar los datos del producto.</p>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/vue'

const route = useRoute()
const productId = computed(() => Number(route.params.id))
</script>
