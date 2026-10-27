import {
  LuPlane,
  LuRadar,
  LuTruck,
  LuShip,
  LuBrainCircuit,
  LuCrosshair,
  LuShieldCheck,
  LuTarget,
  LuBoxes,
  LuEye,
  LuAntenna,
  LuZap,
  LuActivity,
  LuLock,
  LuScan,
  LuSignal,
} from 'react-icons/lu'

const map = {
  uas: LuPlane,
  ram: LuRadar,
  vehicle: LuTruck,
  maritime: LuShip,
  ai: LuBrainCircuit,
  mrad: LuCrosshair,
  shield: LuShieldCheck,
  stryker: LuTarget,
  allinone: LuBoxes,
  force: LuEye,
  aesa: LuAntenna,
  gan: LuZap,
  doppler: LuActivity,
  eccm: LuLock,
  scan: LuScan,
  signal: LuSignal,
}

export default function Icon({ name, className = '' }) {
  const Cmp = map[name] || LuRadar
  return <Cmp className={className} />
}
