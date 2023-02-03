import { subDays, format } from 'date-fns'
import _ from 'lodash'

const data = [
  {
      username: 'nico',
      role: 'admin'
  },
  {
      username: 'Valentina',
      role: 'seller'
  },
  {
      username: 'Zulema',
      role: 'seller'
  },
  {
      username: 'Santiago',
      role: 'seller'
  }
]

console.log('substract 30 days from today: ', format(subDays(new Date(), 30), 'yyyy/MM/dd'))
console.log(_.groupBy(data, item => item.role))
