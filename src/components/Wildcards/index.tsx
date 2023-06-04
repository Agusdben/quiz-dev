import { type WildcardTracker, type WildcardAvailable } from '@/types/wildcards'
import React, { useState } from 'react'
import CheckDoubleIcon from '../Icons/CheckDouble'
import BombIcon from '../Icons/BombIcon'
import ForwardIcon from '../Icons/ForwardIcon'
import ModalConfirm from '../ModalConfirm'
import useModal from '@/hooks/useModal'

type WildcardIcons = { [key in WildcardAvailable]: React.ReactElement<SVGSVGElement> }

interface Props {
  wildcards: WildcardTracker[]
  isWildcardActive: boolean
  onWildcardActive: (wildcard: WildcardAvailable) => void
}

const Wildcards: React.FC<Props> = ({ wildcards, isWildcardActive, onWildcardActive }) => {
  const modal = useModal({ title: 'Use wildcard?' })
  const [wildcardToConfirm, setWildcardToConfirm] = useState<WildcardTracker | undefined>(undefined)

  const wildCardsIcons: WildcardIcons = {
    'doble chance': <CheckDoubleIcon />,
    bomb: <BombIcon />,
    skip: <ForwardIcon />
  }

  const handleWildcard = (wildcard: WildcardAvailable): void => {
    const wildcardToConfirm = wildcards.filter(w => w.name === wildcard && !w.used)

    if (wildcardToConfirm.length > 0) {
      modal.handleModal()
      setWildcardToConfirm(wildcardToConfirm[0])
    }
  }

  const handleConfirmWildcard = (): void => {
    if (wildcardToConfirm?.name === undefined) return
    onWildcardActive(wildcardToConfirm.name)
    modal.handleModal()
  }

  const handleCancelWildcard = (): void => {
    setWildcardToConfirm(undefined)
    modal.handleModal()
  }

  return (
    <div className='flex gap-4'>
      {
      wildcards.map(w => {
        const icon = wildCardsIcons[w.name]
        return (
          <button
            key={w.name}
            className='[&_svg]:fill-primary border-2 border-primary p-4 rounded-full hover:bg-primary [&_svg]:hover:fill-black-800 transition-colors disabled:opacity-30'
            disabled={w.used || isWildcardActive}
            onClick={() => { handleWildcard(w.name) }}
          >
            {icon}
          </button>
        )
      })
      }
      <ModalConfirm
        modal={modal}
        description={wildcardToConfirm?.description}
        onConfirm={handleConfirmWildcard}
        onCancel={handleCancelWildcard}
      />
    </div>
  )
}

export default Wildcards
