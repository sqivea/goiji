import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

export const TabNames = {
  TAB_ADD_NEW: 'TAB_ADD_NEW',
  TAB_SEARCH: 'TAB_SEARCH',
} as const

export type TabName = (typeof TabNames)[keyof typeof TabNames]

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

export const { switchToTab } = tabsSlice.actions

export default tabsSlice.reducer
