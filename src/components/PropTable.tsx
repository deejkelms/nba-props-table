import 'react-data-grid/lib/styles.css'
import DataGrid from 'react-data-grid'
import { TableFilters, MergedTableData, MarketStatus } from '../types'

type TableProps = {
  tableData: MergedTableData[]
  tableFilters: TableFilters
  onUpdateMarketStatus: (rowId: string, isMarketOpen: boolean) => void
}

const PropTable: React.FC<TableProps> = ({
  tableData,
  tableFilters,
  onUpdateMarketStatus,
}) => {
  const filteredData = tableData.filter((row) => {
    const { market, position, status, search } = tableFilters

    if (market && row.statType !== market) {
      return false
    }

    if (position && row.position !== position) {
      return false
    }

    if (status === MarketStatus.Open && !row.isMarketOpen) {
      return false
    } else if (status === MarketStatus.Suspended && row.isMarketOpen) {
      return false
    }

    // Search filter currently only searches (athlete name, team name or team abbreviation)
    if (search) {
      const searchQuery = search.toLowerCase()
      if (
        !row.playerName.toLowerCase().includes(searchQuery) &&
        !row.teamNickname.toLowerCase().includes(searchQuery) &&
        !row.teamAbbr.toLowerCase().includes(searchQuery)
      ) {
        return false
      }
    }

    return true
  })

  const columns = [
    {
      name: 'Player Name',
      key: 'playerName',
    },
    {
      name: 'Team',
      key: 'teamNickname',
    },
    {
      name: 'Position',
      key: 'position',
    },
    {
      name: 'Market',
      key: 'statType',
    },
    {
      name: 'Low Line',
      key: 'lowLine',
    },
    {
      name: 'High Line',
      key: 'highLine',
    },
    {
      name: 'Market Status',
      key: 'isMarketOpen',
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error need to find out how to fix this, related to ReactDataGrid
      renderCell: ({ row }) => {
        // TODO: fix type, update to a toggle or slider to be more visually clear
        return (
          <div>
            <input
              type="checkbox"
              id={row.rowId}
              name="is-suspended"
              checked={row.isMarketOpen}
              onChange={() => {
                onUpdateMarketStatus(row.rowId, !row.isMarketOpen)
              }}
            />
            <label htmlFor={row.rowId}>
              {row.isMarketOpen ? MarketStatus.Open : MarketStatus.Suspended }
            </label>
          </div>
        )
      },
    },
  ]

  return <DataGrid columns={columns} rows={filteredData} />
}

export default PropTable
