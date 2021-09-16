import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import companyReducer from '../reducers/company'
import jobReducer from '../reducers/job'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
export const initialState = {
  favoriteCompany: {
    companies: [],
  },
  job:{
    jobs:[],
    loading: true,
    error: false,
  }
}

const bigReducer = combineReducers({
  favoriteCompany: companyReducer,
  job: jobReducer,
  
})
const configureStore = createStore(
  bigReducer,
  initialState,
  process.env.REACT_APP_DEVELOPMENT ? composeEnhancers(applyMiddleware(thunk)) : compose(applyMiddleware(thunk)))

export default configureStore
