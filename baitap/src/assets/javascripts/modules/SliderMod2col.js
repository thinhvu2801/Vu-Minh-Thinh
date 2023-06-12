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
        adaptiveHeight: true,
        arrows: true,
        dots: true,
        dotsClass: 'dots',
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        infinite: false,
        centerMode: false,
        prevArrow: '<button class="slick-prev prev arrows h1"><span class="icomoon icon-chevron-left"></span><span class="sr-only">Prev slider</span></button>',
        nextArrow: '<button class="slick-next next arrows h1"><span class="icomoon icon-chevron-right"></span><span class="sr-only">Next slider</span></button>',
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 1279,
            settings: {
              slidesToShow: 1,
              centerMode: true,
              centerPadding: '100px', 
            }
          },
          {
            breakpoint: 1919,
            settings: {
              centerMode: true,
              centerPadding: '160px', 
            }
          },
        ]
      })
    }
  }
  new SliderMod2col().init()
  console.log('hello everyone')