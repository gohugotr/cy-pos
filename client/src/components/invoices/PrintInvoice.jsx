import { Button,  Modal } from 'antd'
import React from 'react'

const PrintInvoice = ({ isModalOpen, setIsModalOpen }) => {
  return (
    <>
      <Modal
        title='Fiş Yazdır'
        footer={false}
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
      >
        <span>Fişler</span>
        <div className='flex justify-end mt-4'>
          <Button
            onClick={() => {
              setIsModalOpen(true)
            }}
            type='primary'
            htmlType='submit'
          >
            Fiş Yazdır
          </Button>
        </div>
      </Modal>
    </>
  )
}

export default PrintInvoice
