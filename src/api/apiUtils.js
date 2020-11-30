import { BASE_URL } from "./api"
import _ from 'lodash'

export const fetchData = (url, method = 'POST', body, timeout = 10000, response) => {

    const abortController = new AbortController()

    let params = {
        method: method,
        headers: {
            Accept: 'application/json, text/plain, */*',
            'Content-Type': 'application/json; charset=utf-8;multipart/form-data;',
        },
        signal: abortController.signal
    }

    if (!_.isEmpty(body)) {
        // do not want to stringify body for formdata
        if (body.file) {
            params.body = body
        } else {
            params.body = JSON.stringify(body)

        }
    }

    async function fetchApi() {
        console.log('fetching api...')
        setTimeout(() => {
            abortController.abort()
            clearTimeout()
        }, timeout)
        await fetch(`${BASE_URL}${url}`, params)
            .then((response) => response.json())
            //If response is in json then in success
            .then((responseJson) => {
                response({ error: null, result: responseJson.result, message: responseJson.message })
                console.log('Sukses Fetch');
            })
            //If response is not in json then in error
            .catch((error) => {
                if (error.message == "Aborted") {
                    response({ error: "Request timeout error, please try again!", result: null, message: null })
                    return
                } else if (error.message == 'Network request failed') {
                    response({ error: "Please check your internet connection!", result: null, message: null })
                    return
                } else {
                    response({ error: "Something went wrong and try again!", result: null, message: null })
                    return
                }
            })
    }

    fetchApi()

    return () => abortController.abort()
}