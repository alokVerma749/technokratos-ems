"use client"

import { createContext, Dispatch, useReducer } from 'react'

const INITIAL_AUTH_STATE = {
  email: '',
  isAdmin: false
}

export const SET_CURRENT_AUTH = 'SET_CURRENT_AUTH'

const ViewReducer = (state, action) => {
  switch (action.type) {
    case 'SET_CURRENT_AUTH':
      return { ...state, email: action.payload.email, isAdmin: action.payload.isAdmin }
    default:
      return state
  }
}

export const AuthContext = createContext([INITIAL_AUTH_STATE, () => null])

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ViewReducer, INITIAL_AUTH_STATE)

  return <AuthContext.Provider value={[state, dispatch]}>{children}</AuthContext.Provider>
}
