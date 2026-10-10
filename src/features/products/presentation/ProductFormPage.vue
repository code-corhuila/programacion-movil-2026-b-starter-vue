<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Formulario de producto</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <!-- TODO(Parte 3): formulario para CREAR (/productos/nuevo) y EDITAR
           (/productos/:id/editar). La misma pagina atiende las dos rutas: si la ruta
           trae el parametro "id", es edicion y el formulario parte con los datos
           actuales (getProduct); si no, es creacion.
           - Campos: nombre, precio, existencias (ion-input) y categoria (un ion-button por
             categoria de CATEGORIES, como en el filtro de la lista).
           - Validacion en linea con validateProduct(): el mensaje aparece junto al campo
             (al salir del campo o al enviar) y el envio se bloquea mientras haya errores.
           - Al enviar un formulario valido llame a createProduct() o updateProduct().
             Si la API rechaza (ApiError con status 400), muestre error.message y la
             lista error.details; si es un error de red, avise que no hay conexion.
           - Al terminar, regrese a la lista (crear) o al detalle (editar). -->
      <h2>Formulario de producto</h2>
      <p>TODO(Parte 3): implementar el formulario y su validacion.</p>
      <ion-button router-link="/productos" fill="outline">Volver a la lista</ion-button>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue'
</script>
