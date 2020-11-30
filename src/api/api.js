export const BASE_URL = 'https://script.google.com/macros/s/AKfycbzGovuUJFr0nxMqPRW1bPo6y8CAATq1QZSTRs5DnPrpx3e8ux4/exec?action='

export const WriteDataToDaily = 'addItem'

export const ReadDataDaily = 'getItems'

export const GetDetailDatabyId = (id) => {
    return `getDetail&id=${id}`
}

export const GetDataByHash = (hash) => {
    return `getItemsbyId&hash=${hash}`
}