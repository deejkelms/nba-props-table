import { useState, useEffect } from 'react'
import { css, useTheme } from '@emotion/react'
import {
  MergedTableData,
  RequestStatus,
  ResponseData,
  TableFilters,
  MarketStatus,
  NbaMarket,
  NbaPosition,
} from '../types'
import fetchData from '../api/fetchData'
import mergeData from '../utils/mergeData.ts'
import PropTable from '../components/PropTable'
import SelectFilter from '../components/SelectFilter'

const style = {
  container: css`
    h1 {
      font-size: 3.2em;
      line-height: 1.1;
    }
  `,
  title: css`
    text-align: center;
  `,
  filters: css`
    display: flex;
    gap: 8px;
    margin-bottom: 8px;
  `,

  searchbar: css`
    width: 16rem;
  `,
}

const PropTableContainer = () => {
  const { colors } = useTheme()

  const [tableData, setTableData] = useState<MergedTableData[]>([])
  const [tableFilters, setTableFilters] = useState<TableFilters>({
    market: '',
    position: '',
    status: '',
    search: '',
  })
  const [requestStatus, setRequestStatus] = useState<RequestStatus>(
    RequestStatus.pending
  )

  useEffect(() => {
    fetchData()
      .then((data: ResponseData | undefined) => {
        setRequestStatus(RequestStatus.success)

        if (data?.alternatesResponse && data?.propsResponse) {
          const mergedData = mergeData(
            data.alternatesResponse,
            data.propsResponse
          )
          setTableData(mergedData)
        } else {
          setRequestStatus(RequestStatus.failed)
        }
      })
      .catch(() => {
        setRequestStatus(RequestStatus.failed)
      })
  }, [])

  const onUpdateMarketStatus = (rowId: string, status: boolean) => {
    setTableData((prevData) => {
      return prevData.map((row: MergedTableData) =>
        row.rowId === rowId ? { ...row, isMarketOpen: status } : row
      )
    })
  }

  // would use debounce if filtering were actually making new requests
  const searchBar = (
    <div>
      <input
        css={{ color: colors.primary }}
        id="playerSearch"
        name="playerSearch"
        type="text"
        onChange={(e) =>
          setTableFilters({ ...tableFilters, search: e.target.value })
        }
        placeholder="Search by player or team"
        value={tableFilters.search}
      />
    </div>
  )

  const getContent = (requestStatus: RequestStatus) => {
    switch (requestStatus) {
      case RequestStatus.failed:
        return <h1>Error</h1>
      case RequestStatus.pending:
        return <h1>Loading...</h1>
      case RequestStatus.success:
        return (
          <PropTable
            onUpdateMarketStatus={onUpdateMarketStatus}
            tableData={tableData}
            tableFilters={tableFilters}
          />
        )
    }
  }

  return (
    <div css={style.container}>
      <header>
        <h1 data-testid="app-heading">NBA Player Props</h1>
        <div css={style.filters}>
          {searchBar}
          <SelectFilter
            options={Object.values(NbaMarket)}
            label={'Market'}
            onFilterChange={(filter: string) =>
              setTableFilters({ ...tableFilters, market: filter })
            }
          />
          <SelectFilter
            options={Object.values(NbaPosition)}
            label={'Position'}
            onFilterChange={(filter: string) => {
              setTableFilters({ ...tableFilters, position: filter })
            }}
          />
          <SelectFilter
            options={Object.values(MarketStatus)}
            label={'Status'}
            onFilterChange={(filter: string) =>
              setTableFilters({ ...tableFilters, status: filter })
            }
          />
        </div>
      </header>
      {getContent(requestStatus)}
    </div>
  )
}

export default PropTableContainer
