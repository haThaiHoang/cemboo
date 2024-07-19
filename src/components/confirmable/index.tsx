"use client"

import { Component, ReactNode } from 'react'
import { Modal } from 'antd'

import Text from '@/components/text'
import Button from '@/components/button'
import Space from '@/components/space'
import Box from '@/components/box'
import styles from './confirmable.module.scss'

type TOpenParams = {
  content: string | ReactNode,
  acceptButtonText?: string
  hideCancelButton?: string
}

let instance: any

class Confirmable extends Component {
  state = {
    visible: false,
    content: null,
    acceptButtonText: null,
    hideCancelButton: false
  }

  _resolve?: (value: unknown) => void

  static setInstance = (ref: any) => {
    instance = ref
  }

  static open = (params: TOpenParams) => {
    if (instance) {
      return instance.open(params)
    }

    return null
  }

  open = ({
    content,
    acceptButtonText,
    hideCancelButton
  } : TOpenParams) => new Promise((resolve) => {
    this._resolve = resolve
    this.setState({
      visible: true,
      content,
      acceptButtonText,
      hideCancelButton
    })
  })

  _onClose = () => {
    this.setState({
      visible: false
    })
  }

  _onCancel = () => {
    this._resolve?.(false)

    this._onClose()
  }

  _onAccept = () => {
    this._onClose()

    setTimeout(() => {
      this._resolve?.(true)
    }, 300)
  }

  render() {
    const { visible, content, acceptButtonText, hideCancelButton } = this.state

    return (
      <Modal
        open={visible}
        centered
        destroyOnClose
        className={styles.confirmable}
        onCancel={this._onCancel}
        footer={null}
      >
        <div className="modal-content">
          <div className="body">
            <Text size="big" className={styles.content}>
              {content}
            </Text>
            <Space size={20} />
            <div className="action-box">
              <Box>
                <Box flex={1}>
                  <Button
                    block
                    type="primary"
                    onClick={this._onAccept}
                    size="large"
                    className="action-button"
                  >
                    {acceptButtonText || 'OK'}
                  </Button>
                </Box>
                {!hideCancelButton && (
                  <>
                    <Space horizontal size={15} />
                    <Box flex={1}>
                      <Button
                        block
                        size="large"
                        onClick={this._onCancel}
                        className="action-button"
                      >
                        Close
                      </Button>
                    </Box>
                  </>
                )}
              </Box>
            </div>
          </div>
        </div>
      </Modal>
    )
  }
}

export default Confirmable
