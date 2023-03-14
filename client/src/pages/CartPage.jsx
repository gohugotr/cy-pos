import { Button, Card, Table } from 'antd'
import UstHeader from '../components/header/UstHeader'
import { useState } from 'react'
import CreateBill from '../components/cart/CreateBill'

const CartPage = () => {
  const dataSource = [
    {
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
  ]

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  ]
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  return (
    <>
      <UstHeader />
      <div className='px-6'>
        <Table dataSource={dataSource} columns={columns} pagination={false} bordered />
        <div className='flex justify-end mt-4 cart-total'>
          <Card className='w-72'>
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
            <Button
              onClick={() => {
                setIsModalOpen(true)
              }}
              className='w-full mt-4'
              type='primary'
              size='large'
            >
              Sipariş Oluştur
            </Button>
          </Card>
        </div>
        <CreateBill isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      </div>
    </>
  )
}

export default CartPage
