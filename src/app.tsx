import * as React from 'react'
import * as ReactDOM from 'react-dom'

import TubeService from './app/timetable/TubeService'

class App extends React.Component {
    render() {
        return (
            <div className='app'>
                <TubeService tube={{
                    id: 'bakerloo',
                    name: 'Bakerloo',
                    modeName: 'tube',
                    created: '2018-05-30T12:07:19.113Z',
                    modified: '2018-05-30T12:07:19.113Z',
                    disruptions: ['smashed window'],
                    lineStatuses: ['busy'],    
                }} />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('react-app'))

// here component is rending one tube
// make the component render a list of tubes
// create a store and put dummy data into the store
// make components read data out of the store