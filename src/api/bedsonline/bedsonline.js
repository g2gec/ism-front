import { sha256 } from 'js-sha256';
import axios from 'axios'

const apiKey = '16b5d502e1dadb035dd1ecf05ab91c8c'
const secret = '1d726d3b32'
// const server = 'https://api.test.hotelbeds.com'
// http://167.172.138.14:8081
const server = 'http://127.0.0.1:8000/api/auth'
// http://127.0.0.1:8000
// http://ism.g2g.ec:8081/api/
const cors = 'https://cors-anywhere.herokuapp.com/'

function time() {
    var timestamp = Math.floor(new Date().getTime() / 1000)
    return timestamp;
}


const signature = sha256( apiKey + secret + time() )

const headers = {
    'Content-type': 'application/json',
    'Api-key': '16b5d502e1dadb035dd1ecf05ab91c8c',
    'Access-Control-Allow-Origin': "*",
    'Access-Control-Allow-Headers': "*",
    "X-Signature": signature,
}


const bedsOnline = {
    get: async (endpoint) => {
        let url = server + endpoint
        let jsonRS = await fetch(url, {
                method: 'get',
                headers: headers
            })
            .then(rslt => rslt.json())
            .catch(err => console.log({err}))
        ;
        return jsonRS || []
    },

    post: async (endpoint, request) => {
        let url = server + endpoint
        let jsonRS = await fetch(url, {
                method: 'post',
                body: JSON.stringify(request),
                headers: headers
            })
            .then(rslt => rslt.json())
            .catch(err => console.log({err}))
        ;
        return jsonRS || []
    }
    
}


export default bedsOnline;
