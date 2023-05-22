const $this = $('.mod-banner')
const init = () => {
  $this.each((index, el) => {
    console.log(el, index)
  })
}

const ModBanner = (() => {
  if ($this.length) {
    init()
  }
})()
export default ModBanner
