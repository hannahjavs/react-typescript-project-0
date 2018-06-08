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