import dayjs from 'dayjs'
import appleLogo from '../../assets/images/applelogo.png'
import SettingsDropdown from '../settings-dropdown/SettingsDropdown'

import './MacOSNavigation.style.css'

const MacOSNavigation = () => {
  return (
    <div className="flex flex-row gap-5 bg-black/30 py-1.5 px-5 nav-container">
      <img src={appleLogo} />
      <p>Finder</p>
      <p>File</p>
      <p>Edit</p>
      <p>View</p>
      <p>Go</p>
      <p>Window</p>
      <p>Help</p>

      <div className="ml-auto flex items-center gap-3">
        <SettingsDropdown />
        <p>{dayjs().format('ddd MMM D HH:mm')}</p>
      </div>
    </div>
  )
}

export default MacOSNavigation
