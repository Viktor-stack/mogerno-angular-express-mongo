import {SelectClass} from './select/select'
import './scss/select.scss'

export const select = new SelectClass('#select', {
  placeholder: 'Выберите пожалуйста пункт',
  selectedID: '4',
  data: [
    {id: '1', value: 'React'},
    {id: '2', value: 'Angular'},
    {id: '3', value: 'VueJS'},
    {id: '4', value: 'React Native'},
    {id: '5', value: 'Next'},
    {id: '6', value: 'Next'},
  ],
  onSelect(item) {
    console.log('Selected Item', item)
  }
})


window.s = select
