<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-buttons slot="start">
          <ion-back-button default-href="/productos" />
        </ion-buttons>
        <ion-title>Nuevo producto</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <!-- TODO(Parte 2): formulario con nombre, precio, categoria y existencias.
           - Valide con validateProduct() (nombre obligatorio, precio mayor que 0)
             y muestre el mensaje de error junto a cada campo.
           - Si es valido, llame a createProduct() y regrese a la lista.
           - Maneje tambien el error del servicio. -->
      <h2>Formulario de producto</h2>
      <p>TODO(Parte 2): implementar el formulario y su validacion.</p>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/vue'
</script>
