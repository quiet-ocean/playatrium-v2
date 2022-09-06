import { useState, createContext } from 'react'

type TAppContext = {
  integrationsPG: number
  setIntegrationsPG: AnyFunction
}

export const AppContext = createContext<TAppContext>({} as TAppContext)

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [integrationsPG, setIntegrationsPG] = useState(0)
  return (
    <AppContext.Provider value={{ integrationsPG, setIntegrationsPG }}>
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider
