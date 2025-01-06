import { useEffect, useRef, useState } from 'react'
import SettingsIcon from '../../assets/images/svg/settings.svg?react'
import LocationIcon from '../../assets/images/svg/location.svg?react'
import AnimationsIcon from '../../assets/images/svg/animations.svg?react'
import AirdropIcon from '../../assets/images/svg/airdrop.svg?react'

const SettingsDropdown = () => {
  const wrapperRef = useRef<HTMLDivElement>(null)

  const [settingsOpen, setSettingsOpen] = useState<boolean>(false)
  const [locationActive, setLocationActive] = useState<boolean>(false)
  const [airdropActive, setAirdropActive] = useState<boolean>(false)
  const [animationsActive, setAnimationsActive] = useState<boolean>(false)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // @ts-expect-error current is node and event target is eventTarge type
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setSettingsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div ref={wrapperRef}>
      <SettingsIcon
        height={15}
        fill="#fff"
        className="cursor-pointer"
        onClick={() => setSettingsOpen(!settingsOpen)}
      />

      <div
        className={`absolute top-10 right-2 p-3 min-w-[300px] rounded-xl bg-black/30 ${settingsOpen ? 'opacity-1' : 'opacity-0'} transition-all ease-in-out duration-300`}
      >
        <div className="flex flex-row gap-2">
          <div className="h-fit flex flex-col gap-4 flex-1 bg-gray-600/20 rounded-xl p-2 border border-1 border-solid border-white/10">
            <div className="flex flex-row gap-2 items-center">
              <div
                onClick={() => setLocationActive(!locationActive)}
                className={`${locationActive ? 'bg-blue-500' : 'bg-gray-600'} rounded-full w-8 h-8 flex items-center justify-center`}
              >
                <LocationIcon height={16} fill="#fff" />
              </div>
              <div className="flex flex-col">
                <p className="!text-[12px]">Location</p>
                <span className="text-[11px] text-gray-300">
                  {locationActive ? 'On' : 'Off'}
                </span>
              </div>
            </div>

            <div className="flex flex-row gap-2 items-center">
              <div
                onClick={() => setAirdropActive(!airdropActive)}
                className={`${airdropActive ? 'bg-blue-500' : 'bg-gray-600'} rounded-full w-8 h-8 flex items-center justify-center`}
              >
                <AirdropIcon height={16} fill="#fff" />
              </div>
              <div className="flex flex-col">
                <p className="!text-[12px]">AirDrop</p>
                <span className="text-[11px] text-gray-300">
                  {airdropActive ? 'On' : 'Off'}
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 flex-1">
            <div className="h-fit flex flex-col gap-3 flex-1 bg-gray-600/20 rounded-xl p-1 items-center justify-center border border-1 border-solid border-white/10">
              <div className="flex flex-row gap-2 items-center">
                <div
                  onClick={() => setAnimationsActive(!animationsActive)}
                  className={`${animationsActive ? 'bg-blue-500' : 'bg-gray-600'} rounded-full w-7 h-7 flex items-center justify-center`}
                >
                  <AnimationsIcon height={15} fill="white" />
                </div>
                <div className="flex flex-col">
                  <p className="!text-[12px]">Animations</p>
                  <span className="text-[11px] text-gray-300">
                    {animationsActive ? 'On' : 'Off'}
                  </span>
                </div>
              </div>
            </div>
            <div className="h-fit flex flex-col gap-3 flex-1 bg-gray-600/20 rounded-xl p-1 items-center justify-center border border-1 border-solid border-white/10">
              <div className="flex flex-row gap-2 items-center">
                <div
                  onClick={() => setAnimationsActive(!animationsActive)}
                  className={`${animationsActive ? 'bg-blue-500' : 'bg-gray-600'} rounded-full w-7 h-7 flex items-center justify-center`}
                >
                  <AnimationsIcon height={15} fill="white" />
                </div>
                <div className="flex flex-col">
                  <p className="!text-[12px]">Animations</p>
                  <span className="text-[11px] text-gray-300">
                    {animationsActive ? 'On' : 'Off'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SettingsDropdown
