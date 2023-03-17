import Header from '../components/header/Header'
import StatisticCart from '../components/statistics/StatisticCart'

const Statistic = () => {
  return (
    <>
      <Header />
      <div className='px-6'>
        <h1 className='mb-4 text-4xl font-bold text-center'>İstatistikler</h1>
        <div className='statistic-section'>
          <h2 className='mb-6 text-lg'>
            Hoşgeldin <span className='text-xl font-bold text-green-700'>admin</span>
          </h2>
          <statistics className='grid gap-4 md:gap-10 xl:grid-cols-4 statistic-cards md:grid-cols-2'>
            <StatisticCart img='images\user.png' title='Toplam Müşteri' amount='6' />
            <StatisticCart img='images\money.png' title='Toplam Kazanç' amount='660.96 ₺' />
            <StatisticCart img='images\sale.png' title='Toplam Satış' amount='6' />
            <StatisticCart img='images\product.png' title='Toplam Ürün' amount='28' />
          </statistics>
        </div>
      </div>
    </>
  )
}

export default Statistic
