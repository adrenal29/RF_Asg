
import './App.css'
import MainContent from './components/MainContent'
import Sidebar from './components/Sidebar'

function App() {

  return (
    <>
    <div className='flex'>
      <div className='w-3/12 border-r border-gray-300 fixed z-30 bg-white'>
      <Sidebar/>
      </div>
      <div className='flex-grow md:ml-[calc(3/12*100vw)] '>
      <MainContent/>
      </div>
    </div>
    </>
  )
}

export default App
