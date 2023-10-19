import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import PropTable from '../PropTable'

describe('PropTable', () => {
  it('It should render the prop table ', () => {
    // Arrange
    const tableData = [
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
    ]
    const tableFilters = {
      search: '',
      market: '',
      position: '',
      status: '',
    }

    const onUpdateMarketStatus = () => {}

    // Act
    render(
      <PropTable
        tableFilters={tableFilters}
        tableData={tableData}
        onUpdateMarketStatus={onUpdateMarketStatus}
      />
    )

    // Assert
    expect(screen.getByRole('grid')).toBeInTheDocument()
    expect(screen.getByText('Player 1')).toBeInTheDocument()
  })
})
