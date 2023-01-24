import $ from 'jquery'

$(() => {
  const $parent = $('.tokenomics')
  const $collection = $parent.find('.tokenomics__img-anim')

  // const start = 0
  const length = $collection.length - 1
  let current = 0
  setInterval(() => {
    const elem = $collection.get(current)
    const $elem = $(elem)
    // console.log(current, 'current')
    // console.log('elem', $elem)
    $elem.addClass('tokenomics__img-anim_active')
    $elem.siblings().removeClass('tokenomics__img-anim_active')
    if (current >= length) {
      current = 0
      return
    }
    current++
  }, 2000)
})
