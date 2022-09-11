import Navbar from '@components/layout/Navbar'
import Sidebar from '@components/layout/Sidebar'
import Spinner from '@components/shared/Spinner/Spinner'
import WelcomePage from '@pages/home/WelcomePage'
import NotFound from '@pages/NotFound'
import { Suspense, useEffect, useMemo } from 'react'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import { getRoutes } from './routes'

const HomeRouter = () => {
  const { mainRoutes, subRoutes } = useMemo(() => getRoutes(), [])

  return (
    <div className="flex justify-between h-screen">
      <div className="hidden h-full lg:block">
        <Sidebar mobile={false} onToggle={() => {}} onClose={() => {}} />
      </div>

      <div className="flex-col w-full h-full overflow-y-auto">
        <Navbar />

        <Suspense fallback={<Spinner className="w-10 h-10 mx-auto my-20 border-4" />}>
          <Routes>
            <Route index element={<WelcomePage />} />

            {mainRoutes.map(({ path, name, component: Component }) => {
              return <Route key={name} path={path} element={<Component />} />
            })}

            {subRoutes.map(({ path, name, component: Component }) => {
              return <Route key={name} path={path} element={<Component />} />
            })}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  )
}

export default HomeRouter
