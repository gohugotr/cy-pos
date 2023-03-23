import { Button } from 'antd'
import { ClearOutlined, PlusOutlined, MinusOutlined } from '@ant-design/icons'

const CartTotal = () => {
  return (
    <div className='flex flex-col h-auto cart min-h-[calc(100vh_-_80px)]'>
      <h2 className='py-4 text-sm font-bold tracking-wide text-center text-white bg-blue-600 '>
        Sepetteki Ürünler
      </h2>
      <ul className='flex flex-col px-2 py-2 overflow-y-auto cart-items gap-y-2 '>
        <li className='flex justify-between cart-item'>
          <div className='flex items-center'>
            <img
              className='object-cover w-16 h-16'
              src='https://i.lezzet.com.tr/images-xxlarge-secondary/elma-nasil-yenir-221135ca-f383-474c-a4f5-ad02a45db978.jpg'
              alt=''
            />
            <div className='flex flex-col ml-2'>
              <b>Elma</b>
              <span>12₺ x 2</span>
            </div>
          </div>
          <div className='flex items-center gap-x-1'>
            <Button
              size='small'
              type='primary'
              className='flex items-center justify-center !rounded-full'
              icon={<PlusOutlined />}
            />
            <span className='font-bold'>2</span>
            <Button
              size='small'
              type='primary'
              className='flex items-center justify-center !rounded-full'
              icon={<MinusOutlined />}
            />
          </div>
        </li>
        <li className='flex justify-between cart-item'>
          <div className='flex items-center'>
            <img
              className='object-cover w-16 h-16'
              src='https://i.lezzet.com.tr/images-xxlarge-secondary/elma-nasil-yenir-221135ca-f383-474c-a4f5-ad02a45db978.jpg'
              alt=''
            />
            <div className='flex flex-col ml-2'>
              <b>Elma</b>
              <span>12₺ x 2</span>
            </div>
          </div>
          <div className='flex items-center gap-x-1'>
            <Button
              size='small'
              type='primary'
              className='flex items-center justify-center !rounded-full'
              icon={<PlusOutlined />}
            />
            <span className='font-bold'>3</span>
            <Button
              size='small'
              type='primary'
              className='flex items-center justify-center !rounded-full'
              icon={<MinusOutlined />}
            />
          </div>
        </li>
        <li className='flex justify-between cart-item'>
          <div className='flex items-center'>
            <img
              className='object-cover w-16 h-16'
              src='https://i.lezzet.com.tr/images-xxlarge-secondary/elma-nasil-yenir-221135ca-f383-474c-a4f5-ad02a45db978.jpg'
              alt=''
            />
            <div className='flex flex-col ml-2'>
              <b>Elma</b>
              <span>12₺ x 2</span>
            </div>
          </div>
          <div className='flex items-center gap-x-1'>
            <Button
              size='small'
              type='primary'
              className='flex items-center justify-center !rounded-full'
              icon={<PlusOutlined />}
            />
            <span className='font-bold'>1</span>
            <Button
              size='small'
              type='primary'
              className='flex items-center justify-center !rounded-full'
              icon={<MinusOutlined />}
            />
          </div>
        </li>
      </ul>
      <div className='mt-auto cart-totals'>
        <div className='border-t border-b'>
          <div className='flex justify-between p-2'>
            <b>Ara Toplam</b>
            <span className=''>99₺</span>
          </div>
          <div className='flex justify-between p-2'>
            <b>KDV %8</b>
            <span className='text-red-700'>7,92₺</span>
          </div>
        </div>
        <div className='mt-4 border-b'>
          <div className='flex items-center justify-between p-2'>
            <b className='text-xl text-green-600'>Genel Toplam</b>
            <span className='text-xl'>99₺</span>
          </div>
        </div>
      </div>
      <div className='px-2 py-4'>
        <Button size='large' type='primary' className='w-full'>
          Sipariş Oluştur
        </Button>
        <Button
          size='large'
          type='primary'
          className='flex items-center justify-center w-full mt-2'
          icon={<ClearOutlined />}
          danger
        >
          Temizle
        </Button>
      </div>
    </div>
  )
}

export default CartTotal
