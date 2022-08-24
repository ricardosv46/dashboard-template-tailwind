import { Login } from '@interface/index'
import { AuthInitialState, initialState } from './AuthState'

type action = { type: 'logout' } | { type: 'login'; payload: Login }

const AuthReducer = (
  state: AuthInitialState,
  action: action
): AuthInitialState => {
  switch (action.type) {
    case 'login':
      return { ...state, user: action.payload, isAuth: true }
    case 'logout':
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      return { ...state, user: initialState.user, isAuth: false }

    default:
      return state
  }
}

export default AuthReducer
