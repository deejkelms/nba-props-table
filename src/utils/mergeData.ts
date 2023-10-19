// A market is suspended if any of these 3 cases are true
// 1. marketSuspended = 1 for that market in props.json
// 2. That market’s optimal line does not exist in alternates.json. i.e. Jordan Poole points
// 3. That market exists in alternates.json, but none of the 3 probabilities for the optimal line are greater than 40%.
// - i.e. Steph Curry steals. His optimal line is 1, but the under, push, and over probs are each under .4
import { PlayerAlternateStat, PlayerPropStat } from '../types'

const checkMarketStatus = (
  matchingAlternates: PlayerAlternateStat[],
  propsMarket: PlayerPropStat
) => {
  const optimalLineExistsInAlternates = matchingAlternates.some(
    (market: PlayerAlternateStat) => market.line === propsMarket.line
  )

  const areAllProbabilitiesUnder40 = matchingAlternates.every(
    (market: PlayerAlternateStat) =>
      market.underOdds < 0.4 && market.overOdds < 0.4 && market.pushOdds < 0.4
  )

  console.log('is market suspended?', propsMarket.marketSuspended === 0)
  console.log('does the optimal line exist', optimalLineExistsInAlternates)
  console.log('are probabilities over 40', !areAllProbabilitiesUnder40)

  return (
    propsMarket.marketSuspended === 0 &&
    optimalLineExistsInAlternates &&
    !areAllProbabilitiesUnder40
  )
}

// Function to merge propsResponse and alternatesResponse to form the table data
const mergeData = (
  alternatesData: PlayerAlternateStat[],
  propsData: PlayerPropStat[]
) => {
  return propsData.map((propsMarket) => {
    // Improvement, find more efficient way to find an object in an array of objects
    // so we dont have to go through all of alternatesData for every element in propsMarket
    const matchingAlternates = alternatesData.filter(
      (alternate: PlayerAlternateStat) =>
        alternate.playerId === propsMarket.playerId &&
        alternate.statTypeId === propsMarket.statTypeId
    )
    const lowLine = Math.min(
      ...matchingAlternates.map((alt: PlayerAlternateStat) => alt.line)
    )
    const highLine = Math.max(
      ...matchingAlternates.map((alt: PlayerAlternateStat) => alt.line)
    )

    const isMarketOpen = checkMarketStatus(matchingAlternates, propsMarket)

    const rowId = `${propsMarket.playerId}-${propsMarket.statTypeId}`

    return { ...propsMarket, lowLine, highLine, isMarketOpen, rowId }
  })
}

export default mergeData
