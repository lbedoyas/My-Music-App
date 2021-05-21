const  getTracks = async () => {
    const accessToken = 'BQBp1Qr34dGqQ_Ljoq1BTQdfF47MqxFhScefXisSx0NIzEvsYguSW0s_bnj_Pan470H0AQr0zHLyCLYW_syQ0WrU9AxEAgw5Oo2YZ_dLGBBp07riQ3-Lg4X7HNMfj81OISyBdAFNCwg890airzSx6T5hMkOWqebC8lMJruOvfWbJ3ltttYeWJ4rc2NkAAujVBc5g_LPO2CVdzFNH1z1-hcevQKuPPIbZaLfCTKhDjdQaxjO6dekMm3xQ6D-K2azSedo6eel05qFdln7FCTDN0vc6kvJJcfVu4Ld20P4m'
    const respAPI = await fetch('https://api.spotify.com/v1/playlists/4XHRvQjQFoH9jzGKELY5pZ/tracks', {
            method: 'GET', headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + accessToken
            }
    })
        const respAPIPromise = await respAPI.json();
        let listItemsAPI = respAPIPromise.items.map(item => item.track);
        return listItemsAPI;
}

export const HTTP = {
    getTracks
}