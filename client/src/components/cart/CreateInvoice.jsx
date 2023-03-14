import { Button, Card, Form, Input, Modal, Select } from 'antd'
import React from 'react'

const CreateInvoice = ({ isModalOpen, setIsModalOpen }) => {
  const onFinish = (values) => {
    console.log('Success:', values)
  }
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }
  const odemeYontemi = [
    {
      label: 'nakit',
      value: 'Nakit',
    },
    {
      label: 'kredikarti',
      value: 'Kredi Kartı',
    },
  ]
  return (
    <>
      <Modal
        title='Fatura Oluştur'
        footer={false}
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
      >
        <Form
          name='siparis_olustur'
          layout={'vertical'}
          labelCol={{ span: 8 }}
          // wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          // initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete='off'
        >
          <Form.Item
            label='Müşteri adı'
            name='customername'
            rules={[{ required: true, message: 'Lütfen Müşteri Adı giriniz!' }]}
          >
            <Input placeholder='Müşteri adı giriniz' />
          </Form.Item>
          <Form.Item
            label='Tel No'
            name='phoneNumber'
            rules={[{ required: true, message: 'Lütfen Telefon No giriniz!' }]}
          >
            <Input placeholder='Müşteri adı giriniz' maxLength={13}/>
          </Form.Item>
          <Form.Item label='Ödeme Yöntemi' name='paymentMode'>
            <Select placeholder='Ödeme Yöntemi seçiniz'>
              <Select options={odemeYontemi} />
            </Select>
          </Form.Item>
          <div className='flex justify-end mt-4 cart-total'>
            <Card className='w-full'>
              <div className='flex justify-between'>
                <span>Ara Toplam</span>
                <span>549₺</span>
              </div>
              <div className='flex justify-between my-2'>
                <span>KDV Toplam %8</span>
                <span className='text-red-600'>+43,92₺</span>
              </div>
              <div className='flex justify-between'>
                <b>Toplam</b>
                <b>592,92₺</b>
              </div>
              <Form.Item className='flex justify-end mt-4'>
                <Button
                  onClick={() => {
                    setIsModalOpen(true)
                  }}
                  type='primary'
                  
                  htmlType='submit'
                >
                  Sipariş Oluştur
                </Button>
              </Form.Item>
            </Card>
          </div>
        </Form>
      </Modal>
    </>
  )
}

export default CreateInvoice
