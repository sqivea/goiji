import { useSelector, useDispatch } from 'react-redux'

import Grid from 'components/Grid'
import Tab from 'components/Tab'
import { RootState } from 'services/store'
import { TabNames, switchToTab } from 'services/store/slices/tabs'

function App() {
  const selectedTab = useSelector((state: RootState) => state.tabs.selectedTab)
  const dispatch = useDispatch()

  return (
    <Grid>
      <Tab
        isSelected={selectedTab === TabNames.TAB_ADD_NEW}
        callback={() => {
          dispatch(switchToTab(TabNames.TAB_ADD_NEW))
        }}
      >
        Add new
      </Tab>
      <Tab
        isSelected={selectedTab === TabNames.TAB_SEARCH}
        callback={() => {
          dispatch(switchToTab(TabNames.TAB_SEARCH))
        }}
      >
        Search
      </Tab>
      <div className="border" />
      <div className="border" />
    </Grid>
  )
}

export default App
