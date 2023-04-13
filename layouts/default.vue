<template>
  <b-container fluid class="no-padding" style="min-height:100%; position:relative;">
    
    
        <b-row no-gutters>
            <b-col cols="12">
                <Nav :menu="items_menu" />
            </b-col>
            <b-col cols="12" v-if="!$route.params.slug">
                <Banner />
            </b-col>
            <b-col v-else>
              <div style="margin-bottom: 8em"></div>
            </b-col>
        </b-row>

        <b-row no-gutters class="mb-5">
          <b-col class="mb-5">
            <Nuxt />
          </b-col>
        </b-row>

        <b-container fluid class="no-padding">
          <Footer />
        </b-container>        
    
    
  </b-container>
</template>

<script>
export default {
  data () {
    return {
      items_menu: [
        // {title: 'LGPD', url: 'https://lgpd.guacemmi.com.br'},
        {title: 'Contato', url: '#contato'},
        {title: 'Notícias', url: '#noticias'},
        {title: 'Quem Somos', url: '#sobre'},
        {title: 'Empreendimentos', url: '#empreendimentos'},
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.no-padding{
  padding: 0 !important;
}
</style>
