<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Productos</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <!-- TODO(Parte 2): lista de productos con tres estados.
           1. Carga: mientras llega la respuesta de getProducts() (ion-spinner o skeleton).
           2. Vacio: cuando no hay productos que mostrar (mensaje + accion).
           3. Error: cuando getProducts() falla (mensaje + boton "Reintentar").
           Cada producto se muestra con el componente ProductCard (ver ProductCard.vue).
           Pruebe el error abriendo /productos?error=1 -->
      <h2>Lista de productos</h2>
      <p>TODO(Parte 2): implementar la lista con los estados de carga, vacio y error.</p>

      <!-- Enlaces de navegacion provisionales: reemplacelos por la lista real. -->
      <ion-button router-link="/productos/1" fill="outline">Ver detalle del producto 1</ion-button>
      <ion-button router-link="/productos/nuevo" fill="outline">Nuevo producto</ion-button>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue'
</script>
