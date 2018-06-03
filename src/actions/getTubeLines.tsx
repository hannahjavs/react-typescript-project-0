import { action } from 'mobx'

export default action('getTubeLines', async () => {
    const rawResponse = await fetch('https://api.tfl.gov.uk/Line/Mode/tube')
    const jsonResponse = await rawResponse.json()
    console.log(jsonResponse)
})