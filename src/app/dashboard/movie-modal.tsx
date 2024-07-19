import React, { useState, useImperativeHandle, forwardRef } from 'react'

import Modal from '@/components/modal'

const MovieModal = forwardRef((_, ref) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useImperativeHandle(ref, () => ({
    open: () => {
      setIsModalOpen(true)
    },
    close: () => setIsModalOpen(false),
  }))

  return (
    <Modal
      open={isModalOpen}
      onCancel={() => setIsModalOpen(false)}
      width={1000}
    >
      {isModalOpen && (
        <iframe
          width="100%"
          height="500"
          src="https://www.youtube.com/embed/tgbNymZ7vqY">
        </iframe>
      )}
    </Modal>
  )
})
MovieModal.displayName = "MovieModal"

export default MovieModal
