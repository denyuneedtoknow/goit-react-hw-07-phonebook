import axios from 'axios'

axios.defaults.baseURL = 'https://6193c189d3ae6d0017da8819.mockapi.io'

export const fetchContacts = () => {
    return axios.get('/contacts').then(response => response.data)
};

// export const addContact = contact => {
//     return axios.post('/contacts', contact).then(({ data })) => data)
// }
