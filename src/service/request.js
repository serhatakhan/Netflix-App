import Client from "./instance"

// eğer parametre alırsa diye params da ekledik
export async function getRequest(URL, params){
    const res = await Client.get(`${URL}`, {params: params})
    return res
}
export async function postRequest(URL, payload){
    const res = await Client.post(`${URL}`, payload)
    return res
}
export async function patchRequest(URL, payload){
    const res = await Client.patch(`${URL}`, payload)
    return res
}
// put isteğinde tüm veriyi göndermemiz gerekirken, patch de sadece değişecek veriyi gönderiyoruz
export async function putRequest(URL, payload){
    const res = await Client.put(`${URL}`, payload)
    return res
}
export async function deleteRequest(URL, payload){
    const res = await Client.delete(`${URL}`, payload)
    return res
}