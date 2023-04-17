<template>
  <div>
      <b-row class="p-0 m-0">
        <b-col cols="12" class="conteudo alinhamento-central">
          <div class="etiqueta" ref="printcontent">
            <div class="consumo">
              <b-button @click="consumo('a')"></b-button> 
              <span v-show="cc.a == true">
                A <div></div>
              </span>
              <b-button @click="consumo('b')"></b-button> 
              <span v-show="cc.b == true">
                B <div></div>
              </span>
              <b-button @click="consumo('c')"></b-button> 
              <span v-show="cc.c == true">
                C <div></div>
              </span>
              <b-button @click="consumo('d')"></b-button> 
              <span v-show="cc.d == true">
                D <div></div>
              </span>
              <b-button @click="consumo('e')"></b-button> 
              <span v-show="cc.e == true">
                E <div></div>
              </span>
              <b-button @click="consumo('f')"></b-button> 
              <span v-show="cc.f == true">
                F <div></div>
              </span>
              <b-button @click="consumo('g')"></b-button> 
              <span v-show="cc.g == true">
                G <div></div>
              </span>
            </div>
            <div class="chuva">
              <b-button @click="chuva('a')"></b-button> 
              <span v-show="ch.a == true">
                A <div></div>
              </span>
              <b-button @click="chuva('b')"></b-button> 
              <span v-show="ch.b == true">
                B <div></div>
              </span>
              <b-button @click="chuva('c')"></b-button> 
              <span v-show="ch.c == true">
                C <div></div>
              </span>
              <b-button @click="chuva('d')"></b-button> 
              <span v-show="ch.d == true">
                D <div></div>
              </span>
              <b-button @click="chuva('e')"></b-button> 
              <span v-show="ch.e == true">
                E <div></div>
              </span>
              <b-button @click="chuva('f')"></b-button> 
              <span v-show="ch.f == true">
                F <div></div>
              </span>
              <b-button @click="chuva('g')"></b-button> 
              <span v-show="ch.g == true">
                G <div></div>
              </span>
            </div>
            <b-form-input v-model="etiqueta.db" placeholder="65dB" id="db"></b-form-input>
          </div>          
        </b-col>
      </b-row>
    <b-button id="print" @click="printThis">
      <span>baixar imagem</span><b-img src="images/icon-download.png"></b-img>
    </b-button>
  </div>
</template>

<script>
export default {
  head: {
    script: [
      {
        type: 'module',
        src: 'https://cdn.jsdelivr.net/npm/html2canvas@1.0.0-rc.7/dist/html2canvas.min.js'
      }
    ]
  },
  data(){
    return{
      cc: { a: true, b: false, c: false, d: false, e: false, f: false, g: false },
      ch: { a: true, b: false, c: false, d: false, e: false, f: false, g: false },
      etiqueta: { consumo: '', chuva: '', db: '' }
    }
  },
  methods:{
    consumo(index){
      Object.keys(this.cc).forEach((item) => {
        if(item == index){
          this.cc[index] = true
          this.etiqueta.consumo = index
        } else {
          this.cc[item] = false
        }
      })
    },
    chuva(index){
      Object.keys(this.ch).forEach((item) => {
        if(item == index){
          this.ch[index] = true
          this.etiqueta.chuva = index
        } else {
          this.ch[item] = false
        }
      })
    },
    async printThis() {
      // console.log("printing..");
      const el = this.$refs.printcontent;

      const options = {
        type: "dataURL",
      };
      const printCanvas = await html2canvas(el, options);

      const link = document.createElement("a");
      if(this.etiqueta.consumo == '' || this.etiqueta.chuva == '' || this.etiqueta.db == ''){
        this.etiqueta.consumo = 'a'
        this.etiqueta.chuva = 'a'
        this.etiqueta.db = '65dB'
      }
      link.setAttribute("download", `etiqueta_${this.etiqueta.consumo}-${this.etiqueta.chuva}-${this.etiqueta.db}.jpg`);
      link.setAttribute(
        "href",
        printCanvas
          .toDataURL("image/jpg")
          .replace("image/jpg", "image/octet-stream")
      );
      link.click();

      // console.log("done");
    },
  },
}
</script>

<style lang="scss" scoped>
// @import url('~/assets/collors.scss');

</style>
