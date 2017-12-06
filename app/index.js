require('bootstrap/dist/css/bootstrap.min.css');
require('./assets/style/main.scss')
import Vue from 'vue';
import loremIpsum from 'lorem-ipsum'
import { Carousel, Slide } from 'vue-carousel';
import header from './components/header/index.vue';
Vue.component('nav-bar', header);
new Vue({
  el: '#app',
  data: {
    freeText: loremIpsum({
        count: 5                      // Number of words, sentences, or paragraphs to generate. 
      , units: 'paragraphs'
    })
  }
});

const buildSlideMarkup = (count) => {
	let slideMarkup = '';
  for (var i = 1; i <= count; i++) {
  	slideMarkup += '<slide><span class="label">' + i + '</span></slide>'
  }
  return slideMarkup;
};

new Vue({
	el: '#carousel',
  components: {
  	'carousel': Carousel,
    'slide': Slide
  },
  template: '<div><carousel :perPageCustom="[[768, 1], [1024,3]]" paginationActiveColor="red" paginationColor="mediumslateblue">' + buildSlideMarkup(6) + '</carousel></div>'
});