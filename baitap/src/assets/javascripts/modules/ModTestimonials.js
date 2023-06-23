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
        infinite: true,
        centerMode: false,
        
        // slidesToShow: 1,
        // autoplay: false,
        // autoplaySpeed: 2000,
        dotsClass: 'btn-dots',
        prevArrow: '<button class="slick-prev btn-prev arrows h1 text-blue-400"><span class="icomoon icon-chevron-left"></span><span class="sr-only">Prev slider</span></button>',
        nextArrow: '<button class="slick-next btn-next arrows h1 text-blue-400"><span class="icomoon icon-chevron-right"></span><span class="sr-only">Next slider</span></button>',

        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 1280,
            settings: {
              slidesToShow: 3,
              variableWidth: true,
            }
          },
          {
            breakpoint: 1920,
            settings: {
                slidesToShow: 3,
            }
          },
        ]
      })
    }
  }
  new ModTestimonials().init()
  console.log('VMT')