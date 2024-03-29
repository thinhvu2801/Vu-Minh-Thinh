export default class SliderMod2col {
  constructor () {
    this.$this = $('.mod-2-col')
  }
  init () {
    if (this.$this.length) {
      this.addSlick()
    }
  }
  addSlick() {
    this.$this.find('.slider').slick({
      mobileFirst: true,
      arrows: true,
      dots: true,
      infinite: true,
      centerMode: false,
      rows: 0,
      
      slidesToShow: 1,
      // autoplay: false,
      // autoplaySpeed: 2000,
      dotsClass: 'btn-dots',
      prevArrow: '<button class="slick-prev btn-prev arrows h1 text-blue-400"><span class="icomoon icon-chevron-left"></span><span class="sr-only">Prev slider</span></button>',
      nextArrow: '<button class="slick-next btn-next arrows h1 text-blue-400"><span class="icomoon icon-chevron-right"></span><span class="sr-only">Next slider</span></button>',

      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 1279,
          settings: {
            variableWidth: true,
          }
        },
        {
          breakpoint: 1919,
          settings: {
            slidesToShow: 2,
            variableWidth: true,

          }
        },
      ]
    })
  }
  }
  new SliderMod2col().init()
  console.log('ola')