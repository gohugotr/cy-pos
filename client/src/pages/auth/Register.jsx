import { Carousel } from 'antd'

const Register = () => {
  return (
    <>
      <div className='flex justify-between h-screen'>
        <div className='min-w-[300px]  '>
          <h2>LOGO</h2>
        </div>
        <div className='bg-[#6c63ff] 2xl:w-11/12 xl:w-5/6 lg:w-4/5 md:w-3/5 hidden sm:flex'>
          <Carousel>
            <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
          </Carousel>
        </div>
      </div>
    </>
  )
}

export default Register
