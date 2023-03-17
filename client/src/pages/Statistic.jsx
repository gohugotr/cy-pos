import Header from '../components/header/Header'
import StatisticArea from '../components/statistics/StatisticArea'
import StatisticCart from '../components/statistics/StatisticCart'
import StatisticPasta from '../components/statistics/StatisticPasta'


const Statistic = () => {

  return (
    <>
      <Header />
      <div className='h-screen px-6 pb-10'>
        <h1 className='mb-4 text-4xl font-bold text-center'>İstatistikler</h1>
        <div className='statistic-section'>
          <h2 className='mb-5 text-lg'>
            Hoşgeldin <span className='text-xl font-bold text-green-700'>admin</span>
          </h2>
          <div className='md:max-h-[calc(100vh_-_110px)] overflow-y-auto max-h-[calc(100vh_-_260px)]'>
            <div className='grid gap-4 md:gap-8 xl:grid-cols-4 statistic-cards md:grid-cols-2'>
              <StatisticCart img='images\user.png' title='Toplam Müşteri' amount='6' />
              <StatisticCart img='images\money.png' title='Toplam Kazanç' amount='660.96 ₺' />
              <StatisticCart img='images\sale.png' title='Toplam Satış' amount='6' />
              <StatisticCart img='images\product.png' title='Toplam Ürün' amount='28' />
            </div>
            <div className='grid xl:grid-cols-2 md:grid-cols-2'>
              <div className='h-auto md:h-96'>
                <StatisticArea />
              </div>
              <div className='h-auto mt-6 md:h-96'>
                <StatisticPasta />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Statistic
