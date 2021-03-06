import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'mobx-react'
import { AppContainer } from 'react-hot-loader' //eslint-disable-line
import App from './views/App'
import AppState from './store/app-state'

const initialState = window.__INITIAL_STATE__  || {} // eslint-disable-line

const root = document.getElementById('root');
const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate
const render = (Component) => {
  renderMethod(
    <AppContainer>
      <Provider appState={new AppState(initialState.appState)}>
        <BrowserRouter>
          <Component />
        </BrowserRouter>
      </Provider>
    </AppContainer>,
    root)
}
render(App)
if (module.hot) {
  module.hot.accept('./views/App', () => {
    const NextApp = require('./views/App').default // eslint-disable-line
    render(NextApp)
  })
}
