import {
  useEffect,
  useRef,
  useState,
  FC,
  FunctionComponent,
  SVGProps
} from 'react'
import SettingsIcon from '../../assets/images/svg/settings.svg?react'
import LocationIcon from '../../assets/images/svg/location.svg?react'
import AnimationsIcon from '../../assets/images/svg/animations.svg?react'
import AirdropIcon from '../../assets/images/svg/airdrop.svg?react'
import BluetoothIcon from '../../assets/images/svg/bluetooth.svg?react'
import ScreenMirroringIcon from '../../assets/images/svg/screen-mirroring.svg?react'

interface RenderSettingsItemProps {
  handleOnClick: () => void
  title: string
  Icon: FunctionComponent<SVGProps<SVGSVGElement>>
  isActive: boolean
  fill?: boolean
}

const SettingsDropdownComponent: FC<{ settingsOpen: boolean }> = ({
  settingsOpen
}) => {
  const [locationActive, setLocationActive] = useState<boolean>(false)
  const [airdropActive, setAirdropActive] = useState<boolean>(false)
  const [animationsActive, setAnimationsActive] = useState<boolean>(false)
  const [screenMirroringActive, setScreenMirroringActive] =
    useState<boolean>(false)
  const [bluetoothActive, setBluetoothActive] = useState<boolean>(false)

  const renderSettingsItem = ({
    handleOnClick,
    Icon,
    title,
    isActive,
    fill = true
  }: RenderSettingsItemProps) => (
    <div className="flex flex-row gap-2 items-center">
      <div
        onClick={handleOnClick}
        className={`${isActive ? 'bg-blue-500' : 'bg-gray-600'} rounded-full w-8 h-8 flex items-center justify-center`}
      >
        <Icon height={16} {...(fill ? { fill: '#fff' } : {})} />
      </div>
      <div className="flex flex-col">
        <p className="!text-[12px]">{title}</p>
        <span className="text-[11px] text-gray-300">
          {isActive ? 'On' : 'Off'}
        </span>
      </div>
    </div>
  )

  return (
    <div
      className={`absolute top-10 right-2 p-3 min-w-[300px] rounded-xl bg-black/30 ${settingsOpen ? 'opacity-1' : 'opacity-0'} transition-all ease-in-out duration-300`}
    >
      <div className="flex flex-row gap-2">
        <div className="h-fit flex flex-col justify-center gap-4 flex-1 bg-gray-600/20 rounded-xl p-2 border border-1 border-solid border-white/10">
          {renderSettingsItem({
            handleOnClick: () => setLocationActive(!locationActive),
            title: 'Location',
            Icon: LocationIcon,
            isActive: locationActive
          })}
          {renderSettingsItem({
            handleOnClick: () => setAirdropActive(!airdropActive),
            title: 'AirDrop',
            Icon: AirdropIcon,
            isActive: airdropActive
          })}
          {renderSettingsItem({
            handleOnClick: () => setBluetoothActive(!bluetoothActive),
            title: 'Bluetooth',
            Icon: BluetoothIcon,
            isActive: bluetoothActive
          })}
        </div>

        <div className="flex flex-col gap-2 flex-1">
          <div className="h-fit flex flex-col justify-center gap-4 flex-1 bg-gray-600/20 rounded-xl p-2 border border-1 border-solid border-white/10">
            {renderSettingsItem({
              handleOnClick: () => setAnimationsActive(!animationsActive),
              title: 'Animations',
              Icon: AnimationsIcon,
              isActive: animationsActive
            })}
          </div>
          <div className="h-fit flex flex-col justify-center gap-4 flex-1 bg-gray-600/20 rounded-xl p-2 border border-1 border-solid border-white/10">
            {renderSettingsItem({
              handleOnClick: () =>
                setScreenMirroringActive(!screenMirroringActive),
              title: 'Screen Mirroring',
              Icon: ScreenMirroringIcon,
              fill: false,
              isActive: screenMirroringActive
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

const SettingsDropdown = () => {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [settingsOpen, setSettingsOpen] = useState<boolean>(false)

  // close settings dropdown when clicking outside its container
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

      <SettingsDropdownComponent settingsOpen={settingsOpen} />
    </div>
  )
}

export default SettingsDropdown
