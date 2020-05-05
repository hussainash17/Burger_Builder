import axios from 'axios'



const Instance = axios.create({
   baseURL:  'https://my-burger-24ae9.firebaseio.com/'
})

export default Instance