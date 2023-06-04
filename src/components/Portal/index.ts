import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

interface Props {
  children: React.ReactNode
  elementID: 'modal'
}

const Portal: React.FC<Props> = ({ children, elementID }) => {
  const [mounted, setMounted] = useState(false)

  const portalRoot = document.querySelector(`#${elementID}`)

  useEffect(() => {
    setMounted(true)

    return () => { setMounted(false) }
  }, [])

  if (portalRoot === null) {
    console.error(`Portal to ID: "${elementID}" not found`)
    return null
  }

  return mounted
    ? createPortal(children, portalRoot)
    : null
}

export default Portal
