const link = 'https://sasha20044002.github.io/hotek/hote-list.json';

const vue = new Vue({
  el: '#vue',
  data() {
    return {
      hotelList: [],
      metro: []
    }
  },
  methods: {
    makeGETRequest(url, cb) {
      let xhr;

      if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
      } else if (window.ActiveXObject) {
        xhr = new ActiveXObject('Microsoft.XMLHTTP')
      }

      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          cb(xhr.responseText);
        }
      }

      xhr.open('GET', url, true);
      xhr.send();
    },
  },
  mounted() {
    this.makeGETRequest(link, goods => {
      JSON.stringify(goods)
      this.hotelList = JSON.parse(goods);
    })
  }
})


Vue.component('hotel', {
  props: [`name`, 'address', 'desc', 'time', 'phone', 'metroname', 'metrolink', 'key', 'item'],
  template: `
  <li class="content__hotels-list__item">
  <div class="content__hotels-list__content">
      <span class="content__hotels-list__content__title">{{name}}</span>
      <div class="padding-left">
          <span class="content__hotels-list__content__address">{{address}}</span>
          <metro v-for="(metro, index) in item.metro"
            :key="index"
            :name="item.metro[index][0]"
            :link="item.metro[index][1]"></metro>
          <span class="content__hotels-list__content__work-time">Режим работы: {{time}}</span>
          <a href="tel:+74958888888" class="content__hotels-list__content__phone">{{phone}}</a>
          <span class="content__hotels-list__content__desc">{{desc}}</span>
      </div>
  </div>
</li>
  `
})

Vue.component('metro', {
  props: ['name', 'link'],
  template: `<div class="content__hotels-list__content__metro">
  <div>
      <img :src="link" alt="metro-logo"
          class="content__hotels-list__content__metro__icon">
      <span class="content__hotels-list__content__metro__name">{{name}}</span>
  </div>
</div>
  `
})