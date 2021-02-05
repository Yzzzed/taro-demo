import dva from './dva'
import models from '../models'

const dvaApp = dva.createApp({
  initialState: {},
  models: models,
  onError(e, dispatch) {
    console.log('error ===> ', e, dispatch)
  }
})

const store = dvaApp.getStore()

export default store