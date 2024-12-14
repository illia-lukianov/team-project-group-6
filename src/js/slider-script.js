// document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".reviews-slider"),e=document.querySelector(".slider-line"),n=document.querySelectorAll(".reviews-item");let d=0,i;const o=window.innerWidth<1280&&768<=window.innerWidth,s=window.innerWidth<768;window.innerWidth<375&&(i=t.offsetWidth,e.style.width=i*n.length+"px",n.forEach(t=>{t.style.width=i+"px"}));var r=parseInt(getComputedStyle(e).gap);const h=n[0].offsetWidth+r;function c(t){this.startX=("touchstart"===t.type?t.touches[0]:t).clientX}function l(t){t=("touchend"===t.type?t.changedTouches[0]:t).clientX,t=this.startX-t;50<t?s&&d<n.length-1||o&&d<n.length-2?d++:d=0:t<-50&&(0<d?d--:s?d=n.length-1:o&&(d=n.length-2)),e.style.transform=`translateX(-${d*h}px)`}e.addEventListener("touchstart",c),e.addEventListener("touchend",l),e.addEventListener("mousedown",c),e.addEventListener("mouseup",l)});
document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector(".reviews-slider")
    const sliderLine = document.querySelector(".slider-line")
    const items = document.querySelectorAll(".reviews-item")
  
    let currentIndex = 0
    let width
  
    const isTablet = window.innerWidth < 1280 && window.innerWidth >= 768
    const isMobile = window.innerWidth < 768
    const isSmallMobile = window.innerWidth < 375
  
    if (isSmallMobile) init()
  
    const gap = parseInt(getComputedStyle(sliderLine).gap)
    const itemWidth = items[0].offsetWidth + gap
  
    function init() {
      width = slider.offsetWidth
      sliderLine.style.width = width * items.length + "px"
    //   items.forEach((item) => {
    //     item.style.width = width + "px"
    //   })
    }
  
    function updateSlider() {
      sliderLine.style.transform = `translateX(-${currentIndex * itemWidth}px)`
    }
  
    function swipeStart(event) {
      this.startX =
        event.type === "touchstart" ? event.touches[0].clientX : event.clientX
    }
  
    function swipeEnd(event) {
      const endX =
        event.type === "touchend"
          ? event.changedTouches[0].clientX
          : event.clientX
      const diff = this.startX - endX
  
      if (diff > 50) {
        if (isMobile && currentIndex < items.length - 1) {
          currentIndex++
        } else if (isTablet && currentIndex < items.length - 2) {
          currentIndex++
        } else {
          currentIndex = 0
        }
      } else if (diff < -50) {
        if (currentIndex > 0) {
          currentIndex--
        } else {
          if (isMobile) currentIndex = items.length - 1
          else if (isTablet) currentIndex = items.length - 2
        }
      }
      updateSlider()
    }
  
    sliderLine.addEventListener("touchstart", swipeStart)
    sliderLine.addEventListener("touchend", swipeEnd)
    sliderLine.addEventListener("mousedown", swipeStart)
    sliderLine.addEventListener("mouseup", swipeEnd)
  })