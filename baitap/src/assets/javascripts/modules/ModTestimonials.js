// export default class ModTestimonials {
//     constructor () {
//       this.$this = $('.mod-testimonials')
//     }
//     init () {
//       if (this.$this.length) {
//         this.addSlick()
//       }
//     }
//     addSlick() {
//       this.$this.find('.slider').slick({
//         mobileFirst: true,
//         adaptiveHeight: true,
//         arrows: true,
//         dots: true,
//         dotsClass: 'dots',
//         autoplay: false,
//         autoplaySpeed: 2000,
//         slidesToShow: 1,
//         infinite: true,
//         centerMode: false,
//         prevArrow: '<button class="slick-prev prev arrows h1 text-Midnight-Blue"><span class="icomoon icon-chevron-left"></span><span class="sr-only">Prev slider</span></button>',
//         nextArrow: '<button class="slick-next next arrows h1 text-Midnight-Blue"><span class="icomoon icon-chevron-right"></span><span class="sr-only">Next slider</span></button>',
//         responsive: [
//           {
//             breakpoint: 767,
//             settings: {
//               slidesToShow: 2,
//             }
//           },
//           {
//             breakpoint: 1279,
//             settings: {
//               slidesToShow: 1,
//               centerMode: true,
//               centerPadding: '100px', 
//             }
//           },
//           {
//             breakpoint: 1919,
//             settings: {
//               centerMode: true,
//               centerPadding: '160px', 
//             }
//           },
//         ]
//       })
//     }
//   }
//   new ModTestimonials().init()
//   console.log('VMT')