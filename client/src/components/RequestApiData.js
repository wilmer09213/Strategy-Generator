import Axios from 'axios'



const base_url = "https://api.pandascore.co/lol"
    const token = "NRtYUNhVOJSFqnuqvIEKMe2GJzr6kLX7Tq3tdjELV8c5YhGmRFA"

export let RequestChampionsData = async (counter) => {


        const respChamp = await Axios.get(`${base_url}/champions?page[size]=100&page[number]=${counter}&token=${token}`)

     return respChamp.data
}


export const RequestItemsData = async (counter) => {

           
    const respItem = await Axios.get(`${base_url}/items?page[size]=100&page[number]=${counter}&token=${token}`)



    const filteredItems = respItem.data.filter(itemPrice => itemPrice.gold_total >= 2000)


    return filteredItems
}
