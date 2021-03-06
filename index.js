import React from 'react'

import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'
import App from './src/App'
import { name as appName } from './app.json'
import './src/utils/i18n'

import store from './src/store/store'

// eslint-disable-next-line no-undef
if (__DEV__) {
  import('./ReactotronConfig')
}

const render = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

AppRegistry.registerComponent(appName, () => render)
