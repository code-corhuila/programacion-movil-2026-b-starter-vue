<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Detalle</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <!-- TODO(Parte 3): detalle del producto.
           - Cargue con getProduct(id) cuando la pantalla se muestre; maneje carga y error
             (por ejemplo, un id que no existe devuelve 404) con "Reintentar" y "Volver".
           - Muestre todos los campos: nombre, categoria, precio y etiqueta de stock.
           - Boton "Editar" hacia /productos/:id/editar.
           - Boton "Eliminar" con confirmacion simple en pantalla (sin librerias nuevas):
             primero muestra "¿Eliminar este producto?" con "Si, eliminar" y "Cancelar";
             al confirmar llama a deleteProduct(id) y regresa a /productos.
           - Boton para volver a /productos. -->
      <h2>Detalle del producto {{ productId }}</h2>
      <p>TODO(Parte 3): mostrar los datos del producto.</p>
      <ion-button router-link="/productos" fill="outline">Volver a la lista</ion-button>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue'

const route = useRoute()
const productId = ref(Number(route.params.id))
</script>
