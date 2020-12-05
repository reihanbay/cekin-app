export const BASE_URL = 'https://script.google.com/macros/s/AKfycbzGovuUJFr0nxMqPRW1bPo6y8CAATq1QZSTRs5DnPrpx3e8ux4/exec?action='


//absen api
export const WriteDataToDaily = 'addItem'


//ambil list api ( all )
export const ReadDataDaily = 'getItems'

//ambil list absen by id
export const GetDetailDatabyId = (id) => {
    return `getDetail&id=${id}`
}


//ambil by hass
export const GetDataByHash = (hash) => {
    return `getItemsbyId&hash=${hash}`
}