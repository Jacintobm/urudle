import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const AboutModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal
      title="sobre este juego"
      isOpen={isOpen}
      handleClose={handleClose}
    >
      <p className="text-sm text-gray-500 dark:text-gray-300">
        este es un juego basado en el código open-source de Boludle -{' '}
        <a
          href="https://github.com/sjaquemate/boludle"
          className="underline font-bold"
        >
          mira el código uruguayo acá
        </a>{' '}
        -{' '}
        <a
          href="https://github.com/Jacintobm/urudle"
          className="underline font-bold"
        >
          y el código original acá
        </a>{' '}
      </p>
    </BaseModal>
  )
}
