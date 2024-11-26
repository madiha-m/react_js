import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/layout'
import { ThemeProvider } from './context/theme-provider'
import Dashboard from './pages/dashboard'
import CityPage from './pages/city-page'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <ThemeProvider defaultTheme='dark'>
            <Layout>
              <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='/city/:cityName' element={<CityPage />} />
              </Routes>
            </Layout>
          </ThemeProvider>
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false}/>
      </QueryClientProvider>
    </>
  )
}

export default App
