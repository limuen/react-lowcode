import type { RouteObject } from "react-router-dom"
import { useRoutes } from "react-router-dom"
import DataScreen from '@/views/dataScreen'

const Routes: RouteObject[] = [
  {
    path: '/',
    element: <DataScreen />
  }
]

const App = () => {
  return (
    <>
      {useRoutes(Routes)}
    </>
  )
}

export default App