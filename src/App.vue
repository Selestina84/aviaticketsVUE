<template>
  <v-app>
    <v-container>
      <v-app-bar app color="deep-purple" dense dark>
        <div class="app-bar d-flex justify-space-around">
          <div class="d-flex align-center mr-auto">
          <v-icon>mdi-airplane-takeoff</v-icon>
          <v-toolbar-title>Avia Tickets</v-toolbar-title>
        </div>


        <v-btn class="ml-auto" text icon>
          <span>Избранное</span>
          <v-icon color="yellow lighten-2">mdi-star</v-icon>
        </v-btn>
        </div>
      </v-app-bar>

      <v-main>
        <SearchForm />
      </v-main>
    </v-container>
  </v-app>
</template>

<script>
import SearchForm from "@/components/SearchForm";

export default {
  name: "App",

  components: {
    SearchForm
  },

  data: () => ({
    //
  }),
};
</script>

<style>
.app-bar{
  margin: 0 auto;
  max-width: 1200px;
  width: 100%;
}
</style>
