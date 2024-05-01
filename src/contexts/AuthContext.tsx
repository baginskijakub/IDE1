'use client'
import React, { PropsWithChildren } from 'react'

interface AuthContextType {
  isLoggedIn: boolean
  login: () => void
  logout: () => void
}

const AuthContext = React.createContext({} as AuthContextType)
export const AuthContextProvider = (props: PropsWithChildren) => {
  const { children } = props
  const [isLoggedIn, setIsLoggedIn] = React.useState(false)

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        login: () => setIsLoggedIn(true),
        logout: () => setIsLoggedIn(false),
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = React.useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used within a AuthProvider')
  }

  return context
}
