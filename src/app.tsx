import * as React from 'react'
import * as ReactDOM from 'react-dom'

import TubeList from './app/timetable/TubeList'

class App extends React.Component {
    render() {
        return (
            <div className='app'>
                <TubeList tubes={[
                    {
                        id: 'bakerloo',
                        name: 'Bakeroo',
                        modeName: 'Tube',
                        created: '2018-05-30T12:07:19.113Z',
                        modified: '2018-05-30T12:07:19.113Z',    
                        disruptions: ['All clear captain'], 
                        lineStatuses: ['Spiffing'],
                    },
                    // CENTRAL LINE
                    {
                        id: 'central',
                        name: 'Central',
                        modeName: 'Tube',
                        created: '2017-05-30T12:07:19.113Z',
                        modified: '2017-05-30T12:07:19.113Z',    
                        disruptions: ['Very disrupted'], 
                        lineStatuses: ['Assiduous'],
                    },
                    // NORTHERN LINE
                    {
                        id: 'northern',
                        name: 'Northern',
                        modeName: 'Tube',
                        created: '2016-05-30T12:07:19.113Z',
                        modified: '2016-05-30T12:07:19.113Z',    
                        disruptions: ['OK'], 
                        lineStatuses: ['Smelly'],
                    },
                ]} />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('react-app'))

// here component is rending one tube
// make the component render a list of tubes
// create a store and put dummy data into the store
// make components read data out of the store

// App - for now just a test component which passes dummy data
//     TubeList - takes an array of tube data via props and renders...
//         Tube - takes a single tube via props and renders...