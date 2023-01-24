import $ from 'jquery'

$(() => {
  const $parent = $('.adaptive')
  const $controller = $parent.find('.adaptive__controller')
  const $box = $parent.find('.adaptive__box')
  const $menuItem = $parent.find('.to')
  let isOpen = false

  init()
  $controller.on('click', () => {
    if ($parent.hasClass('adaptive_open')) {
      close()
    } else {
      open()
    }
  })

  $menuItem.on('click', () => {
    if ($parent.hasClass('adaptive_open')) {
      close()
    }
  })
  $parent.on('click', (e) => {
    e.stopPropagation()
  })
  $(window).on('click', () => {
    if (isOpen && isMobile()) {
      close()
    }
  })
  $(window).on('resize', () => {
    console.log('resize')
    init()
  })
  function init() {
    if (!isMobile()) {
      clearClass()
    }
  }
  function clearClass() {
    $parent.removeClass('adaptive_open')
    $parent.removeClass('adaptive_close')
  }
  function close() {
    isOpen = false
    $parent.addClass('adaptive_close')

    $parent.removeClass('adaptive_open')
  }
  function open() {
    isOpen = true
    $parent.addClass('adaptive_open')
    $parent.removeClass('adaptive_close')
  }
  function isMobile() {
    const size = $(window).width()

    if (size < 994) {
      return true
    }
    return false
  }
})
