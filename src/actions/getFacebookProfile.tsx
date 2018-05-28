import { action } from 'mobx'

export default action('getFacebookProfile', async () => {
    const rawResponse = await fetch('url')
    const jsonResponse = await rawResponse.json()
    console.log(jsonResponse)
})