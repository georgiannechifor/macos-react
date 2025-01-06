import { useRef } from "react";
import finderIcon from "../../assets/images/webp/finder.png";
import calculatorIcon from "../../assets/images/webp/calculator.png";
import vscodeIcon from "../../assets/images/webp/vscode.png";
import calendarIcon from "../../assets/images/webp/calendar.png";
import weatherIcon from "../../assets/images/webp/weather.png";
import photosIcon from "../../assets/images/webp/photos.png";
import musicIcon from "../../assets/images/webp/applemusic.png";
import githubIcon from "../../assets/images/webp/github.png";
import { scaleValue } from "../../utils/scaleValue";
import "./MacOSFooter.style.css";

const maxAdditionalSize = 5;

const MacOSFooter = () => {
  const dockRef = useRef<HTMLDivElement>(null);

  const handleAppHover = (ev: React.MouseEvent<HTMLLIElement>) => {
    if (!dockRef.current) return;

    const mousePosition = ev.clientX;
    const iconPositionLeft = ev.currentTarget.getBoundingClientRect().left;
    const iconWidth = ev.currentTarget.getBoundingClientRect().width;

    const cursorDistance = (mousePosition - iconPositionLeft) / iconWidth;
    const offsetPixels = scaleValue(
      cursorDistance,
      [0, 1],
      [maxAdditionalSize * -1, maxAdditionalSize],
    );

    dockRef.current.style.setProperty(
      "--dock-offset-left",
      `${offsetPixels * -1}px`,
    );

    dockRef.current.style.setProperty(
      "--dock-offset-right",
      `${offsetPixels}px`,
    );
  };

  return (
    <div className="footer-container">
      <nav ref={dockRef} className="dock">
        <ul>
          <li className="dock-item" onMouseMove={handleAppHover}>
            <button>
              <img src={finderIcon} />
              <span className="tooltip">Finder</span>
            </button>
          </li>
          <li className="dock-item" onMouseMove={handleAppHover}>
            <button>
              <img src={photosIcon} />
              <span className="tooltip">Photos</span>
            </button>
          </li>
          <li className="dock-item" onMouseMove={handleAppHover}>
            <button>
              <img src={calculatorIcon} />
              <span className="tooltip">Calculator</span>
            </button>
          </li>
          <li className="dock-item" onMouseMove={handleAppHover}>
            <button>
              <img src={vscodeIcon} />
              <span className="tooltip">VS Code</span>
            </button>
          </li>
          <li className="dock-item" onMouseMove={handleAppHover}>
            <button>
              <img src={calendarIcon} />
              <span className="tooltip">Calendar</span>
            </button>
          </li>
          <li className="dock-item" onMouseMove={handleAppHover}>
            <button>
              <img src={githubIcon} />
              <span className="tooltip">GitHub</span>
            </button>
          </li>
          <li className="dock-item" onMouseMove={handleAppHover}>
            <button>
              <img src={weatherIcon} />
              <span className="tooltip">Weather</span>
            </button>
          </li>
          <li className="dock-item" onMouseMove={handleAppHover}>
            <button>
              <img src={musicIcon} />
              <span className="tooltip">Apple Music</span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MacOSFooter;
