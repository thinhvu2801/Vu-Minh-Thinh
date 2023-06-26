export default class ModTestimonials {
    constructor () {
      this.$this = $('.mod-testimonials')
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
        // infinite: true,
        rows: 0,
        
        slidesToShow: 1,
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
              slidesToShow: 3,
              // variableWidth: true,
            }
          },
          {
            breakpoint: 1919,
            settings: {
                // slidesToShow: 3,
            }
          },
        ]
      })
    }
  }
  new ModTestimonials().init()
  console.log('VMT')