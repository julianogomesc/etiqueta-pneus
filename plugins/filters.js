import Vue from 'vue'

// Vue.filter('dataBR', (value) => {
//     var item = value.split()
// })

// Vue.filter('dataBr', function(valor){
//     var vetor =  (valor || "").split("T")
//     vetor = vetor.slice(0, -1);
//     vetor = vetor[0].split('-')
//     return vetor[2]+"/"+vetor[1]+"/"+vetor[0]
// })
Vue.filter('dataBr', function(valor){
    var content = (valor || '').split("T")
    content = (content[0]).split("-")
    return content[2]+"/"+content[1]+"/"+content[0]
  })
Vue.filter('dataPost', function(valor){
    var content = (valor || '').split(" ")
    content = (content[0]).split("-")
    return content[2]+"/"+content[1]+"/"+content[0]
  })