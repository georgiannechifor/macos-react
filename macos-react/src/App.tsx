import MacOSNavigation from './components/macos-navigation/MacOSNavigation'
import MacOSFooter from './components/macos-footer/MacOSFooter'
import './App.css'

const App = () => {
  return (
    <div className="main-app">
      <MacOSNavigation />

      {/* content */}

      <MacOSFooter />
    </div>
  )
}

export default App
