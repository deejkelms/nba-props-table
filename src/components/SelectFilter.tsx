import { css } from '@emotion/react'

type FilterProps = {
  options: string[]
  label: string
  onFilterChange: (filter: string | '') => void
}

// https://emotion.sh/docs/best-practices#use-typescript-and-object-styles
const selectFilterStyle = {
  // self: css({
  //   backgroundColor: 'white',
  //   border: '1px solid #eee',
  //   borderRadius: '0.5rem',
  //   padding: '1rem',
  // }),

  title: css({
    fontSize: '1.15rem',
    backgroundColor: 'white',
    border: '1px solid #eee',
    borderRadius: '0.5rem',
    padding: '1rem',
    cursor: 'pointer',
  }),
}

const SelectFilter = ({ options, label, onFilterChange }: FilterProps) => {
  return (
    <select
      css={selectFilterStyle.title}
      data-testid="select-filter"
      name={label}
      onChange={(e) => onFilterChange(e.target.value || '')}
    >
      <option value="">{`Select ${label}`}</option>
      {options.map((option, idx) => (
        <option key={`${option}${idx}`}>{option.toString()}</option>
      ))}
    </select>
  )
}

export default SelectFilter
