import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

type TabName = 'TAB_ADD_NEW' | 'TAB_SEARCH'

interface TabsState {
  selectedTab: TabName
}

const initialState: TabsState = {
  selectedTab: 'TAB_ADD_NEW',
}

const tabsSlice = createSlice({
  name: 'tabs',
  initialState,
  reducers: {
    switchToTab: (state, action: PayloadAction<TabName>) => {
      state.selectedTab = action.payload
    },
  },
})

export default tabsSlice.reducer
