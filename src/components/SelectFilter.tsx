import { css } from '@emotion/react'

type FilterProps = {
  options: string[]
  label: string
  onFilterChange: (filter: string | '') => void
}

const style = {
  filter: css`
    select {
      width: 8rem;
    }
  `,
}
const SelectFilter = ({ options, label, onFilterChange }: FilterProps) => {
  return (
    <div css={style.filter}>
      <select
        data-testid="select-filter"
        name={label}
        onChange={(e) => onFilterChange(e.target.value || '')}
      >
        <option value="">{`Select ${label}`}</option>
        {options.map((option, idx) => (
          <option key={`${option}${idx}`}>{option.toString()}</option>
        ))}
      </select>
    </div>
  )
}

export default SelectFilter
