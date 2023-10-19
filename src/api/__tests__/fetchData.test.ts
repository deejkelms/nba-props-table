import { describe, expect, it } from 'vitest'
import fetchData from '../fetchData'

// TODO: https://vitest.dev/guide/mocking.html
describe('fetchData', () => {
  it('should fetch data from props and alternates endpoints successfully', async () => {
    const response = await fetchData()
    // need to mock the server and rewrite tests
    expect(response).toBeUndefined()
  })
})
