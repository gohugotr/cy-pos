import CartTotal from '../components/cart/CartTotal'
import Categories from '../components/categories/Categories'
import UstHeader from '../components/header/UstHeader'
import Products from '../components/products/Products'

const HomePage = () => {
  return (
    <>
      <UstHeader />
      <div className='flex flex-col justify-between gap-10 px-6 pb-20 home md:flex-row md:pb-0'>
        <div className='categories overflow-auto max-h-[calc(100vh_-_112px)]'>
          <Categories />
        </div>
        <div className='products flex-[8] overflow-y-auto max-h-[calc(100vh_-_112px)] '>
          <Products />
        </div>
        <div className='border cart-wrapper min-w-[300px] md:mt-[-24px] md:mr-[-24px] '>
          <CartTotal />
        </div>
      </div>
    </>
  )
}

export default HomePage
