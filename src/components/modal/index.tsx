import { Modal, ModalProps } from 'antd'

import styles from './modal.module.scss'

interface IProps extends ModalProps {
  children: any
}

const ModalComponent = ({ children, ...props }: IProps) => (
  <Modal
    centered
    footer={null}
    className={styles.modal}
    {...props}
  >
    {children}
  </Modal>
)

export default ModalComponent
