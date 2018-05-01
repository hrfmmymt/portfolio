import { h } from 'preact'
import Scroll from 'react-scroll'
const Events = Scroll.Events

export const focusTargetElement = () => {
  Events.scrollEvent.register('end', (to, element) => {
    element.setAttribute('tabindex', '-1')
    element.focus()
  })
}

export const formatTime = ({ from, to }) =>
  [from, to].filter(val => val).join(' - ')

export const nl2p = line =>
  line.split('\n').map((text, i) => <p key={i}>{text}</p>)
