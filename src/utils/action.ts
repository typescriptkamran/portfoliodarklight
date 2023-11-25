"use server"
export const fatchAnime = async (page: number)  => {
    const response = await fetch(`https://shikimori.one/api/animes?page=${page}&limit=8&orderpopularity`)
    const data = await response.json()
    return data
    
}
 