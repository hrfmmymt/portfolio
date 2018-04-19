import Scroll from 'react-scroll'
const Events = Scroll.Events

export const focusTargetElement = () => {
  Events.scrollEvent.register('end', (to, element) => {
    element.setAttribute('tabindex', '-1')
    element.focus()
  })
}
