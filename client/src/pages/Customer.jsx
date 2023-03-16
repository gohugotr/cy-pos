import { Button, Card, Table } from 'antd'
import Header from '../components/header/Header'
import { useState } from 'react'
import PrintInvoice from '../components/invoices/PrintInvoice'

const Customer = () => {
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


  return (
    <>
      <Header />
      <div className='px-6'>
        <h1 className='mb-4 text-4xl font-bold text-center'>Müşteriler</h1>
        <Table dataSource={dataSource} columns={columns} pagination={false} bordered />
    
  
      </div>
    </>
  )
}

export default Customer
