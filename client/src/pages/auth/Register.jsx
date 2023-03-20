import { Button, Carousel, Checkbox, Form, Input } from 'antd'
import { Link } from 'react-router-dom'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import AuthCarousel from './AuthCarousel'

const Register = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values)
  }
  /* eslint-disable no-template-curly-in-string */
  const validateMessages = {
    required: '${label} zorunludur!',
    types: {
      email: '${label} adresi, geçerli bir e-posta değil!',
      number: '${label} geçerli bir numara deği!',
    },
    number: {
      range: '${label} ${min} ile ${max} arasında olmalıdır.',
    },
    password: {},
  }

  return (
    <>
      <div className=''>
        <div className='grid h-screen grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 md:col-span-2'>
          <div
            id='left'
            className='self-center col-span-1 p-16 sm:col-span-1 xl:col-span-1 lg:col-span-1 md:col-span-1 xl:p-8 lg:p-10 md:p-14 sm:p-10'
          >
            <h2 className='mb-2 text-5xl font-bold text-center'>LOGO</h2>
            <div>
              <Form
                layout='vertical'
                name='registerForm'
                className='grid login-form '
                initialValues={{ remember: true }}
                onFinish={onFinish}
                validateMessages={validateMessages}
              >
                <Form.Item label='Kullanıcı Adı' name={'username'} rules={[{ required: true }]}>
                  <Input
                    prefix={<UserOutlined className='site-form-item-icon' />}
                    placeholder='Kullanıcı Adı'
                  />
                </Form.Item>
                <Form.Item
                  label='E-Posta'
                  name={'email'}
                  rules={[{ required: true, type: 'email' }]}
                >
                  <Input placeholder='E-Posta' />
                </Form.Item>
                <Form.Item
                  name='password'
                  label='Şifre'
                  rules={[
                    {
                      required: true,
                      message: 'Lütfen şifrenizi girin!',
                    },
                  ]}
                  hasFeedback
                >
                  <Input.Password
                    prefix={<LockOutlined className='site-form-item-icon' />}
                    type='password'
                    placeholder='Şifre'
                  />
                </Form.Item>

                <Form.Item
                  name='confirm'
                  label='Şifre Tekrar'
                  dependencies={['password']}
                  hasFeedback
                  rules={[
                    {
                      required: true,
                      message: 'Lütfen şifrenizi doğrulayınız!',
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue('password') === value) {
                          return Promise.resolve()
                        }
                        return Promise.reject(new Error('Girdiğiniz iki şifre uyuşmuyor!'))
                      },
                    }),
                  ]}
                >
                  <Input.Password
                    prefix={<LockOutlined className='site-form-item-icon' />}
                    type='password'
                    placeholder='Şifre Tekrar'
                  />
                </Form.Item>

                <Form.Item>
                  <Form.Item name='remember' valuePropName='checked' noStyle>
                    <Checkbox>Beni hatırla</Checkbox>
                  </Form.Item>
                  <Link className='text-blue-600 login-form-forgot' to='/'>
                    Şifremi Unuttum
                  </Link>
                </Form.Item>
                <Form.Item>
                  <Button type='primary' htmlType='submit' className='w-full'>
                    Oturum Aç
                  </Button>
                  veya{' '}
                  <Link to='/register' className='text-blue-600'>
                    Kayıt Ol!
                  </Link>
                </Form.Item>
              </Form>
            </div>
          </div>
          <div
            id='right'
            className='bg-[#6c63ff] hidden sm:block sm:col-span-1 xl:col-span-3 lg:col-span-2 md:col-span-1 pt-8'
          >
            <Carousel effect='fade' autoplay='true'>
              <AuthCarousel
                img='images/responsive.svg'
                title='Responsive'
                desc='Tüm Cihaz Boyutlarıyla Uyumluluk'
              />
              <AuthCarousel
                img='images/customer.svg'
                title='Müşteri Memnuniyeti'
                desc='Deneyim Sonunda Üründen Memnun Müşteriler'
              />
              <AuthCarousel
                img='images/statistic.svg'
                title='İstatistikler'
                desc='Geniş Tutulan İstatistikler'
              />
              <AuthCarousel
                img='images/admin.svg'
                title='Yönetici Paneli'
                desc='Tek Yerden Yönetim'
              />
            </Carousel>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register
