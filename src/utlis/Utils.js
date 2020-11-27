import { getFocusedRouteNameFromRoute } from '@react-navigation/native'
import md5 from 'md5'
//validating email
export const validateEmail = (email) => {
    const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return expression.test(String(email).toLowerCase())
}

export const getIsTabBarVisible = (route) => {
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'Daily'

    switch (routeName) {
        case 'Daily':
            return true;
        case 'Event':
            return true;
        default:
            return false;
    }
}

export const stringToMD5 = (text) => {
    if (!text) return null
    return md5(text)
}

export const getLocaleDate = () => {
    const event = new Date()
    const arrDay = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu']
    const arrMonth = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des']

    const getDay = event.getDay()
    const getDate = event.getDate()
    const getMonth = event.getMonth()
    const getYear = event.getFullYear()

    return `${arrDay[getDay]}, ${getDate} ${arrMonth[getMonth + 1]} ${getYear}`
}

export const getLocaleTime = () => {
    const event = new Date()
    let hour = event.getHours()
    let minute = event.getMinutes()
    let second = event.getSeconds()

    if (hour < 10) {
        hour = `0${hour}`
    }

    if (minute < 10) {
        minute = `0${minute}`
    }

    if (second < 10) {
        second = `0${second}`
    }

    return `${hour}:${minute}:${second}`
}