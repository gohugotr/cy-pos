import { Modal } from 'antd'
import React from 'react'

const CreateBill = ({isModalOpen, setIsModalOpen}) => {
  return (
    <>
      <Modal
        title='Fatura Oluştur'
        footer={false}
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  )
}

export default CreateBill
