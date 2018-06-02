// import React from 'react'
// import { Route } from 'react-router-dom'

// const config = {
//     // route route
//     '/': {
//         component: require('app/mainmenu/Menu'),
//         params: {},
//     },

//     // Bus Service
//     '/busservice': {
//         component: require('app/busservice'),
//         params: {},
//     },

//     // Train Service
//     '/trainservice': {
//         component: require('app/trainservice'),
//         params: {},
//     },

//     // if there is no component, the route won't work - so don't emit it
//     if (!c.component) {
//         delete config[k]
//         if (process.env.NODE_ENV !== 'produciton') {
//             console.warn('Invalid route config:', c)
//         }
//     }
// }