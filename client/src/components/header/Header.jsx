import {
  SearchOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
  CopyOutlined,
  UserOutlined,
  BarChartOutlined,
  LogoutOutlined,
} from '@ant-design/icons'
import { Input, Badge } from 'antd'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='mb-6 border-b'>
      <header className='flex items-center justify-between gap-10 px-6 py-4 header'>
        <div className='logo'>
          <Link to={'/'}>
            <h2 className='text-2xl font-bold text-slate-700 md:text-4xl'>LOGO</h2>
            {/* <div className='w-16 h-16 my-auto bg-center bg-cover bg-logo'></div> */}
          </Link>
        </div>
        <div className='flex justify-center flex-1 header-search'>
          <Input
            size='large'
            placeholder='Ürün Ara...'
            className='rounded-full max-w-[800px]'
            prefix={<SearchOutlined />}
          />
        </div>
        <div className='fixed bottom-0 left-0 z-50 flex items-center justify-between w-screen gap-6 px-4 text-center bg-white border-t border-1 md:w-auto menu-links md:static md:bg-transparent md:border-t-0 md:px-0'>
          <Link to={'/'} className='flex flex-col menu-link hover:text-[#40a9ff] transition-all'>
            <HomeOutlined className='text-lg md:text-xl' />
            <span className='text-xs md:text-[10px]'>Ana Sayfa</span>
          </Link>
          <Badge count={5} offset={[0, 8]} className='hidden mx-2 md:flex bottom-[1px]'>
            <Link
              to={'/cart'}
              className='flex flex-col menu-link hover:text-[#40a9ff] transition-all'
            >
              <ShoppingCartOutlined className='text-lg md:text-xl' />
              <span className='text-xs md:text-[10px] '>Sepet</span>
            </Link>
          </Badge>
          <Link
            to={'/invoices'}
            className='flex flex-col menu-link hover:text-[#40a9ff] transition-all'
          >
            <CopyOutlined className='text-lg md:text-xl' />
            <span className='text-xs md:text-[10px]'>Fişler</span>
          </Link>
          <Link to={'/customer'} className='flex flex-col menu-link hover:text-[#40a9ff] transition-all'>
            <UserOutlined className='text-lg md:text-xl' />
            <span className='text-xs md:text-[10px]'>Müşteriler</span>
          </Link>
          <Link to={'/'} className='flex flex-col menu-link hover:text-[#40a9ff] transition-all'>
            <BarChartOutlined className='text-lg md:text-xl' />
            <span className='text-xs md:text-[10px]'>İstatistikler</span>
          </Link>
          <Link to={'/'} className='flex flex-col menu-link hover:text-[#40a9ff] transition-all'>
            <LogoutOutlined className='text-lg md:text-xl' />
            <span className='text-xs md:text-[10px]'>Çıkış</span>
          </Link>
        </div>
        <Badge count={5} offset={[0, 6]} className='flex mx-2 md:hidden'>
          <Link
            to={'/cart'}
            className='flex flex-col menu-link hover:text-[#40a9ff] transition-all '
          >
            <ShoppingCartOutlined className='text-2xl' />
            <span className='text-xs md:text-[10px]'>Sepet</span>
          </Link>
        </Badge>
      </header>
    </div>
  )
}

export default Header
