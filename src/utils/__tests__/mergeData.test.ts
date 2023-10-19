import { describe, expect, it } from 'vitest'
import mergeData from '../mergeData'

describe('mergeData', () => {
  it('should merge propsData and alternatesData into a single array of objects', () => {
    // Arrange
    const alternatesData = [
      {
        playerName: 'Player 1',
        playerId: 1,
        statType: 'Stat 1',
        statTypeId: 1,
        line: 10,
        underOdds: 0.3,
        overOdds: 0.4,
        pushOdds: 0.2,
      },
      {
        playerName: 'Player 2',
        playerId: 2,
        statType: 'Stat 2',
        statTypeId: 2,
        line: 20,
        underOdds: 0.2,
        overOdds: 0.3,
        pushOdds: 0.5,
      },
    ]

    const propsData = [
      {
        playerName: 'Player 1',
        playerId: 1,
        teamId: 1,
        teamNickname: 'Team A',
        teamAbbr: 'TA',
        statType: 'Stat 1',
        statTypeId: 1,
        position: 'Position A',
        marketSuspended: 0,
        line: 10,
      },
      {
        playerName: 'Player 2',
        playerId: 2,
        teamId: 2,
        teamNickname: 'Team B',
        teamAbbr: 'TB',
        statType: 'Stat 2',
        statTypeId: 2,
        position: 'Position B',
        marketSuspended: 1,
        line: 20,
      },
    ]

    // Act
    const result = mergeData(alternatesData, propsData)

    // Assert
    expect(result).toEqual([
      {
        playerName: 'Player 1',
        playerId: 1,
        teamId: 1,
        teamNickname: 'Team A',
        teamAbbr: 'TA',
        statType: 'Stat 1',
        statTypeId: 1,
        position: 'Position A',
        marketSuspended: 0,
        line: 10,
        lowLine: 10,
        highLine: 10,
        isMarketOpen: true,
        rowId: '1-1',
      },
      {
        playerName: 'Player 2',
        playerId: 2,
        teamId: 2,
        teamNickname: 'Team B',
        teamAbbr: 'TB',
        statType: 'Stat 2',
        statTypeId: 2,
        position: 'Position B',
        marketSuspended: 1,
        line: 20,
        lowLine: 20,
        highLine: 20,
        isMarketOpen: false,
        rowId: '2-2',
      },
    ])
  })

  // TODO: Add test for checkMarketStatus
})
