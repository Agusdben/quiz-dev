import { type Modal as ModalType } from '@/types/modal'
import Modal from '../Modal'

interface Props {
  modal: ModalType
  description: string | undefined
  onConfirm: () => void
  onCancel: () => void
}

const ModalConfirm: React.FC<Props> = ({ modal, description, onConfirm, onCancel }) => {
  return (
    <Modal isOpen={modal.isOpen} onClose={modal.handleModal} title={modal.title}>
      <div className='flex flex-col gap-4'>
        <div>
          <p className='text-xl text-center'>{description}</p>
        </div>
        <div className='flex gap-2 items-center justify-end font-bold'>
          <button type='button' className='px-4 py-2 border-primary border-2 hover:bg-primary transition-colors hover:text-black' onClick={onCancel}>Cancel</button>
          <button type='button' className='px-4 py-2 border-primary border-2 text-black bg-primary hover:bg-transparent hover:text-white' onClick={onConfirm}>Confirm</button>
        </div>
      </div>
    </Modal>
  )
}

export default ModalConfirm
