import { combineReducers } from '@reduxjs/toolkit'
import accountSlice from './account/accountSlice'
import appSlice from './user/appSlice'
import connectedHotspotSlice from './connectedHotspot/connectedHotspotSlice'
import heliumDataSlice from './helium/heliumDataSlice'
import hotspotDetailsSlice from './hotspotDetails/hotspotDetailsSlice'
import hotspotsSlice from './hotspots/hotspotsSlice'
import activitySlice from './activity/activitySlice'

const rootReducer = combineReducers({
  app: appSlice.reducer,
  account: accountSlice.reducer,
  activity: activitySlice.reducer,
  connectedHotspot: connectedHotspotSlice.reducer,
  heliumData: heliumDataSlice.reducer,
  hotspotDetails: hotspotDetailsSlice.reducer,
  hotspots: hotspotsSlice.reducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
