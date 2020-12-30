const request = require('request')
    // const url = 'https://community-open-weather-map.p.rapidapi.com/weather'

// request({ url: url, json: true }, (error, response) => {
//     //const data = JSON.parse(response.body)
//     if (error) {
//         console.log('Unable to connect to weather service!')
//     } else if (response.body.message) {
//         console.log('Url is not valid')
//     } else {
//         console.log(response.body)
//     }
// })

//ده مهيشه علشان بس منساش اللى كام ف الكورس نفسه 

// const geoCodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibW9zdGFmYXNhbXkiLCJhIjoiY2tqMjAzcjk1MXd4cjJ1bng5MHY0eGV6YiJ9.ADCp-NI1ehcwZ6jLDj-FCA&limit=1'

// request({ url: geoCodeUrl, json: true }, (error, { body }) => {
//     if (error) {
//         console.log('Unable to connect to Location service!')
//     } else if (body.features.length === 0) {
//         console.log('Unable to find location.')
//     } else {
//         const latitude = body.features[0].center[0]
//         const langitude = body.features[0].center[1]
//         console.log(latitude, langitude)
//     }
// })

// ده ليا انا علشان اطبق علشان الموقع اللى شغال بيه ف الكورس بتاع الطقس مش شغال 

// const geoCodeUrl = 'https://jsonplaceholder.typicode.com/posts'

// const req = request({ url: geoCodeUrl, json: true }, (error, { body }) => {
//     if (error) {
//         //console.log('Unable to connect to Location service!')
//         return 'Unable to connect to Location service!'
//     } else if (body === 0) {
//         // console.log('Unable to find location.')
//         return 'Unable to find location.'
//     } else {
//         // body.forEach(element => {
//         //     console.log(element.id)
//         // });
//         console.log(body[0])

//         return body[0]
//     }
// })

const req = (callback) => {
    const geoCodeUrl = 'https://jsonplaceholder.typicode.com/posts'

    request({ url: geoCodeUrl, json: true }, (error, request) => {
        if (error) {
            //console.log('Unable to connect to Location service!')
            callback('Unable to connect to Location service!', undefined)
        } else if (request.body === {}) {
            // console.log('Unable to find location.')
            callback('Unable to find location!', undefined)
        } else {
            // body.forEach(element => {
            //     console.log(element.id)
            // });
            callback(undefined, request.body)
        }
    })
}

module.exports = {
    request: req
}