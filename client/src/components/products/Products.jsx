const Products = () => {
  return (
    <div className='grid gap-4 products-wrapper grid-cols-card'>
      {/* overflow-y-auto h-[680px] */}
      {/* satır içi vermek için grid-cols-[repeat(auto-fill,_minmax(150px,_1fr))] */}
      <div className='transition-all border cursor-pointer select-none product-item hover:shadow-lg'>
        <div className='product-img'>
          <img
            src='https://i.lezzet.com.tr/images-xxlarge-secondary/elma-nasil-yenir-221135ca-f383-474c-a4f5-ad02a45db978.jpg'
            alt=''
            className='object-cover w-full border-b h-28'
          />
        </div>
        <div className='flex flex-col p-1 product-info'>
          <span>Elma</span>
          <span>12₺</span>
        </div>
      </div>
      <div className='transition-all border cursor-pointer select-none product-item hover:shadow-lg'>
        <div className='product-img'>
          <img
            src='https://i.lezzet.com.tr/images-xxlarge-secondary/elma-nasil-yenir-221135ca-f383-474c-a4f5-ad02a45db978.jpg'
            alt=''
            className='object-cover w-full border-b h-28'
          />
        </div>
        <div className='flex flex-col p-1 product-info'>
          <span>Portakal</span>
          <span>24₺</span>
        </div>
      </div>
      <div className='transition-all border cursor-pointer select-none product-item hover:shadow-lg'>
        <div className='product-img'>
          <img src='img/salgam.jpeg' alt='' className='object-cover w-full border-b h-28' />
        </div>
        <div className='flex flex-col p-1 product-info'>
          <span>Şalgam</span>
          <span>12₺</span>
        </div>
      </div>
      <div className='transition-all border cursor-pointer select-none product-item hover:shadow-lg'>
        <div className='product-img'>
          <img
            src='https://i.lezzet.com.tr/images-xxlarge-secondary/elma-nasil-yenir-221135ca-f383-474c-a4f5-ad02a45db978.jpg'
            alt=''
            className='object-cover w-full border-b h-28'
          />
        </div>
        <div className='flex flex-col p-1 product-info'>
          <span>Portakal</span>
          <span>24₺</span>
        </div>
      </div>{' '}
      <div className='transition-all border cursor-pointer select-none product-item hover:shadow-lg'>
        <div className='product-img'>
          <img
            src='https://i.lezzet.com.tr/images-xxlarge-secondary/elma-nasil-yenir-221135ca-f383-474c-a4f5-ad02a45db978.jpg'
            alt=''
            className='object-cover w-full border-b h-28'
          />
        </div>
        <div className='flex flex-col p-1 product-info'>
          <span>Elma</span>
          <span>12₺</span>
        </div>
      </div>
      <div className='transition-all border cursor-pointer select-none product-item hover:shadow-lg'>
        <div className='product-img'>
          <img
            src='https://i.lezzet.com.tr/images-xxlarge-secondary/elma-nasil-yenir-221135ca-f383-474c-a4f5-ad02a45db978.jpg'
            alt=''
            className='object-cover w-full border-b h-28'
          />
        </div>
        <div className='flex flex-col p-1 product-info'>
          <span>Portakal</span>
          <span>24₺</span>
        </div>
      </div>{' '}
      <div className='transition-all border cursor-pointer select-none product-item hover:shadow-lg'>
        <div className='product-img'>
          <img
            src='https://i.lezzet.com.tr/images-xxlarge-secondary/elma-nasil-yenir-221135ca-f383-474c-a4f5-ad02a45db978.jpg'
            alt=''
            className='object-cover w-full border-b h-28'
          />
        </div>
        <div className='flex flex-col p-1 product-info'>
          <span>Elma</span>
          <span>12₺</span>
        </div>
      </div>
      <div className='transition-all border cursor-pointer select-none product-item hover:shadow-lg'>
        <div className='product-img'>
          <img
            src='https://i.lezzet.com.tr/images-xxlarge-secondary/elma-nasil-yenir-221135ca-f383-474c-a4f5-ad02a45db978.jpg'
            alt=''
            className='object-cover w-full border-b h-28'
          />
        </div>
        <div className='flex flex-col p-1 product-info'>
          <span>Portakal</span>
          <span>24₺</span>
        </div>
      </div>{' '}
      <div className='transition-all border cursor-pointer select-none product-item hover:shadow-lg'>
        <div className='product-img'>
          <img
            src='https://i.lezzet.com.tr/images-xxlarge-secondary/elma-nasil-yenir-221135ca-f383-474c-a4f5-ad02a45db978.jpg'
            alt=''
            className='object-cover w-full border-b h-28'
          />
        </div>
        <div className='flex flex-col p-1 product-info'>
          <span>Elma</span>
          <span>12₺</span>
        </div>
      </div>
      <div className='transition-all border cursor-pointer select-none product-item hover:shadow-lg'>
        <div className='product-img'>
          <img
            src='https://i.lezzet.com.tr/images-xxlarge-secondary/elma-nasil-yenir-221135ca-f383-474c-a4f5-ad02a45db978.jpg'
            alt=''
            className='object-cover w-full border-b h-28'
          />
        </div>
        <div className='flex flex-col p-1 product-info'>
          <span>Portakal</span>
          <span>24₺</span>
        </div>
      </div>
    </div>
  )
}

export default Products
