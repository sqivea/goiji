import { useSelector, useDispatch } from 'react-redux'

import Grid from 'components/Grid'
import Tab from 'components/Tab'
import { RootState } from 'services/store'
import { tabNames, switchToTab } from 'services/store/slices/tabs'
import Button from 'components/Button'

function App() {
  const selectedTab = useSelector((state: RootState) => state.tabs.selectedTab)
  const dispatch = useDispatch()

  return (
    <Grid>
      <Tab
        isSelected={selectedTab === tabNames.TAB_ADD_NEW}
        callback={() => {
          dispatch(switchToTab(tabNames.TAB_ADD_NEW))
        }}
      >
        Add new
      </Tab>
      <Tab
        isSelected={selectedTab === tabNames.TAB_SEARCH}
        callback={() => {
          dispatch(switchToTab(tabNames.TAB_SEARCH))
        }}
      >
        Search
      </Tab>
      <div className="border">
        <Button variant="outline">Click me</Button>
      </div>
      <div className="border" />
    </Grid>
  )
}

export default App
