import { useRef } from 'react'
import finderIcon from '../../assets/images/webp/finder.png'
import calculatorIcon from '../../assets/images/webp/calculator.png'
import vscodeIcon from '../../assets/images/webp/vscode.png'
import calendarIcon from '../../assets/images/webp/calendar.png'
import weatherIcon from '../../assets/images/webp/weather.png'
import photosIcon from '../../assets/images/webp/photos.png'
import musicIcon from '../../assets/images/webp/applemusic.png'
import githubIcon from '../../assets/images/webp/github.png'
import { scaleValue } from '../../utils/scaleValue'
import './MacOSFooter.style.css'

const maxAdditionalSize = 5

const MacOSFooter = () => {
  const dockItems = [
    {
      image: finderIcon,
      title: 'Finder'
    },
    {
      image: photosIcon,
      title: 'Photos'
    },
    {
      image: calculatorIcon,
      title: 'Calculator'
    },
    {
      image: vscodeIcon,
      title: 'VS Code'
    },
    {
      image: calendarIcon,
      title: 'Calendar'
    },
    {
      image: githubIcon,
      title: 'GitHub'
    },
    {
      image: weatherIcon,
      title: 'Weather'
    },
    {
      image: musicIcon,
      title: 'Apple Music'
    }
  ]
  const dockRef = useRef<HTMLDivElement>(null)

  const handleAppHover = (ev: React.MouseEvent<HTMLLIElement>) => {
    if (!dockRef.current) return

    const mousePosition = ev.clientX
    const iconPositionLeft = ev.currentTarget.getBoundingClientRect().left
    const iconWidth = ev.currentTarget.getBoundingClientRect().width

    const cursorDistance = (mousePosition - iconPositionLeft) / iconWidth
    const offsetPixels = scaleValue(
      cursorDistance,
      [0, 1],
      [maxAdditionalSize * -1, maxAdditionalSize]
    )

    dockRef.current.style.setProperty(
      '--dock-offset-left',
      `${offsetPixels * -1}px`
    )

    dockRef.current.style.setProperty(
      '--dock-offset-right',
      `${offsetPixels}px`
    )
  }

  return (
    <div className="footer-container">
      <nav ref={dockRef} className="dock">
        <ul>
          {dockItems.map((item, index) => (
            <li key={index} className="dock-item" onMouseMove={handleAppHover}>
              <button>
                <img src={item.image} />
                <span className="tooltip">{item.title}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default MacOSFooter
