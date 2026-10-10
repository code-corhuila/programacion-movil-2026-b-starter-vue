<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Productos</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <!-- TODO(Parte 3): lista de productos.
           - Cargue con getProducts() (ya resuelta en data/products-api.ts), guarde el
             resultado en un ref y vuelva a cargar cada vez que la pantalla se muestre
             (onIonViewWillEnter), para que aparezcan los productos nuevos o editados.
           - Buscador por texto (ion-input) y filtro por categoria con un ion-button por
             categoria ("Todas" + CATEGORIES) y una variable de estado; filtre con
             filterProducts().
           - Cuatro estados: cargando, vacio (la API no tiene productos), sin resultados
             (hay productos pero el filtro no coincide) y error con boton "Reintentar".
             EmptyState.vue (dado) sirve para los estados vacio y sin resultados.
           - Un ProductCard por producto; al tocarlo, navegue a /productos/:id.
           - Boton para ir a /productos/nuevo. -->
      <h2>Lista de productos</h2>
      <p>TODO(Parte 3): implementar la lista con busqueda, filtro y estados.</p>

      <!-- Enlaces de navegacion provisionales: reemplacelos por la lista real. -->
      <ion-button router-link="/productos/1" fill="outline">Ver detalle del producto 1</ion-button>
      <ion-button router-link="/productos/nuevo" fill="outline">Nuevo producto</ion-button>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue'
</script>
