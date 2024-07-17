<template>
  <Transition
    @before-enter="beforeEnter"
    @enter="enter"
    @after-enter="afterEnter"
    @before-leave="beforeLeave"
    @leave="leave"
    @after-leave="afterLeave"
  >
    <slot></slot>
  </Transition>
</template>

<script setup lang="ts">
const beforeLeave = (el: Element) => {
  const elHtml = el as HTMLElement
  elHtml.style.transition = '0.3s height ease-in-out'
	elHtml.style.overflow = 'hidden'
}

const leave = (el: Element) => {
  const elHtml = el as HTMLElement
  elHtml.style.height = 'auto'
  elHtml.style.height = window.getComputedStyle(el).height
  elHtml.offsetHeight
  elHtml.style.height = '0px'
}

const afterLeave = (el: Element) => {
  const elHtml = el as HTMLElement
  elHtml.style.height = ''
  elHtml.style.transition = ''
  elHtml.style.overflow = 'visible'
}

const beforeEnter = (el: Element) => {
  const elHtml = el as HTMLElement
  elHtml.style.transition = '0.3s height ease-in-out'
	elHtml.style.overflow = 'hidden'
}

const enter = (el: Element) => {
  const elHtml = el as HTMLElement
  elHtml.style.height = 'auto'
  const endWidth = window.getComputedStyle(el).height
  elHtml.style.height = '0px'
  elHtml.offsetHeight
  elHtml.style.height = endWidth
}

const afterEnter =  (el: Element) => {
  const elHtml = el as HTMLElement
  elHtml.style.height = ''
  elHtml.style.transition = ''
  elHtml.style.overflow = 'visible'
}
</script>