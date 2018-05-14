import { h } from 'preact'
import App from '../src/components/app'
import { shallow } from 'preact-render-spy'

test('rendering App component', () => {
  const actual = shallow(<App />)
  expect(actual.find('div')).toBeTruthy()
})

test('rendering Home component', () => {
  const actual = shallow(<App />)
  expect(actual.find('Home')).toBeTruthy()
})
