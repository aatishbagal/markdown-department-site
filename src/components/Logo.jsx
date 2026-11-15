import { site } from '../site'

const base = import.meta.env.BASE_URL

export default function Logo({ height }) {
  if (!site.logoLight && !site.logoDark) {
    return null
  }

  const light = site.logoLight || site.logoDark
  const dark = site.logoDark || site.logoLight

  return (
    <>
      <img className="logo logo-light" src={`${base}${light}`} alt="" style={{ height }} />
      <img className="logo logo-dark" src={`${base}${dark}`} alt="" style={{ height }} />
    </>
  )
}
