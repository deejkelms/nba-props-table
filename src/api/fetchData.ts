import { PlayerAlternateStat, PlayerPropStat, ResponseData } from '../types'

const fetchData = async (): Promise<ResponseData | undefined> => {
  try {
    const propsResponse = await fetch(`http://localhost:3000/props`).then(
      (response) => {
        if (!response.ok) {
          throw new Error(response.statusText)
        }
        return response.json() as Promise<PlayerPropStat[]>
      }
    )

    const alternatesResponse = await fetch(
      `http://localhost:3000/alternates`
    ).then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      return response.json() as Promise<PlayerAlternateStat[]>
    })

    const data: ResponseData = {
      propsResponse,
      alternatesResponse,
    }

    return data
  } catch (error) {
    console.error('Error fetching data:', error)
    return undefined
  }
}

export default fetchData
