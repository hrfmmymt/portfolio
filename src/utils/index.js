import { h } from 'preact'
import Scroll from 'react-scroll'
const Events = Scroll.Events

export const focusTargetElement = () => {
  Events.scrollEvent.register('end', (to, element) => {
    element.setAttribute('tabindex', '-1')
    element.focus()
  })
}

export const formatDate = ({ from, to }) => {
  const fromMm = Date.parse(from)
  const fromDate = new Date(fromMm)
  const fromYear = fromDate.getFullYear()
  const fromMonth = fromDate.getMonth() + 1
  const fromFormatDate = fromYear + '-' + ('0' + fromMonth).slice(-2)

  const toMm = Date.parse(to)
  const toDate = new Date(toMm)
  const toYear = toDate.getFullYear()
  const toMonth = toDate.getMonth() + 1
  const toFormatDate = toYear + '-' + ('0' + toMonth).slice(-2)

  return {
    from: fromFormatDate,
    to: toFormatDate
  }
}

export const nl2p = line =>
  line.split('\n').map((text, i) => <p key={i}>{text}</p>)
