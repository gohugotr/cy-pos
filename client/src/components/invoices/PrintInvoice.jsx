import { Button, Modal } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

const PrintInvoice = ({ isModalOpen, setIsModalOpen }) => {
  return (
    <>
      <Modal
        title='Fiş Yazdır'
        footer={false}
        open={isModalOpen}
        width={800}
        onCancel={() => setIsModalOpen(false)}
      >
        <section className='py-20 bg-black'>
          <div className='max-w-5xl px-6 mx-auto bg-white'>
            <article className='overflow-hidden'>
              <div className='my-6 logo'>
                <Link to={'/'}>
                  <h2 className='text-2xl font-bold text-slate-700 md:text-4xl'>LOGO</h2>
                </Link>
              </div>
              <div className='mb-4 invoice_details'>
                <div className='grid grid-cols-3 gap-12 sm:grid-cols-4'>
                  <div className='text-md text-slate-500'>
                    <b className='text-slate-700'>Fatura Detayı:</b>
                    <p>Unwrapped</p>
                    <p>Fake Street 123</p>
                    <p>Zafer Mh.</p>
                    <p>Pk: 47001</p>
                  </div>
                  <div className='text-md text-slate-500'>
                    <b className='text-slate-700'>Fatura:</b>
                    <p>The Boring Company</p>
                    <p>Bahariye Cad. 134</p>
                    <p>Elçibey Mh.</p>
                    <p>Pk: 47001</p>
                  </div>
                  <div className='flex flex-col justify-between text-md text-slate-500'>
                    <div>
                      <b className='text-slate-700'>Fatura No:</b>
                      <p>00041</p>
                    </div>
                    <div>
                      <b className='text-slate-700'>Veriliş Tarihi:</b>
                      <p>04.08.2023</p>
                    </div>
                  </div>
                  <div className='flex-col justify-between hidden text-md text-slate-500 sm:block'>
                    <div>
                      <b className='text-slate-700'>Şartlar:</b>
                      <p>10 gün</p>
                    </div>
                    <div>
                      <b className='text-slate-700'>Teslim Tarihi:</b>
                      <p>05.08.2024</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='mt-8 bill-table-area'>
                <table className='min-w-full overflow-hidden divide-y divide-slate-500'>
                  <thead>
                    <tr className='border-b border-slate-200'>
                      <th
                        scope='col'
                        className='py-3.5 text-left text-sm font-normal text-slate-700 md:pl-0 sm:table-cell hidden'
                      >
                        Görsel
                      </th>
                      <th
                        scope='col'
                        className='py-3.5 text-left text-sm font-normal text-slate-700 md:pl-0 sm:table-cell hidden'
                      >
                        Başlık
                      </th>
                      <th
                        colSpan={4}
                        scope='col'
                        className='py-3.5 text-left text-sm font-normal text-slate-700 md:pl-0 sm:hidden'
                      >
                        Başlık
                      </th>
                      <th
                        scope='col'
                        className='py-3.5 text-center text-sm font-normal text-slate-700 md:pl-0 sm:table-cell hidden'
                      >
                        Fiyat
                      </th>
                      <th
                        scope='col'
                        className='py-3.5 text-center text-sm font-normal text-slate-700 md:pl-0 sm:table-cell hidden'
                      >
                        Adet
                      </th>
                      <th
                        scope='col'
                        className='py-3.5 text-end text-sm font-normal text-slate-700 md:pl-0'
                      >
                        Toplam
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className='border-b border-slate-200'>
                      <td className='hidden py-4 sm:table-cell'>
                        <img
                          src='https://i.lezzet.com.tr/images-xxlarge-secondary/elma-nasil-yenir-221135ca-f383-474c-a4f5-ad02a45db978.jpg'
                          alt=''
                          className='object-cover w-12 h-12'
                        />
                      </td>
                      <td className='hidden py-4 sm:table-cell'>
                        <div className='flex flex-col'>
                          <span className='font-medium'>Şalgam</span>
                          <span className='inline-block text-xs sm:hidden'>Birim Fiyatı 5₺</span>
                        </div>
                      </td>
                      <td className='py-4 sm:hidden' colSpan={4}>
                        <div className='flex flex-col'>
                          <span className='font-medium'>Şalgam</span>
                          <span className='inline-block text-xs sm:hidden'>Birim Fiyatı 5₺</span>
                        </div>
                      </td>
                      <td className='hidden py-4 text-center sm:table-cell'>
                        <span>5₺</span>
                      </td>
                      <td className='hidden py-4 text-right sm:text-center sm:table-cell'>
                        <span>1</span>
                      </td>
                      <td className='py-4 text-end'>
                        <span>5.00₺</span>
                      </td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <th className='hidden pt-4 text-right sm:table-cell' colSpan='4' scope='row'>
                        <span className='font-normal text-slate-700'>Ara Toplam</span>
                      </th>
                      <th className='pt-4 text-left sm:hidden' scope='row' colSpan='4'>
                        <p className='font-normal text-slate-700'>Ara Toplam</p>
                      </th>
                      <th className='pt-4 text-right' scope='row'>
                        <span className='font-normal text-slate-700'>61₺</span>
                      </th>
                    </tr>
                    <tr>
                      <th className='hidden pt-4 text-right sm:table-cell' colSpan='4' scope='row'>
                        <span className='font-normal text-slate-700'>KDV</span>
                      </th>
                      <th className='pt-4 text-left sm:hidden' scope='row' colSpan='4'>
                        <p className='font-normal text-slate-700'>KDV</p>
                      </th>
                      <th className='pt-4 text-right' scope='row'>
                        <span className='font-normal text-red-600'>+4.88₺</span>
                      </th>
                    </tr>
                    <tr>
                      <th className='hidden pt-4 text-right sm:table-cell' colSpan='4' scope='row'>
                        <span className='font-normal text-slate-700'>Genel Toplam</span>
                      </th>
                      <th className='pt-4 text-left sm:hidden' scope='row' colSpan='4'>
                        <p className='font-normal text-slate-700'>Genel Toplam</p>
                      </th>
                      <th className='pt-4 text-right' scope='row'>
                        <span className='font-normal text-slate-700'>65.88₺</span>
                      </th>
                    </tr>
                  </tfoot>
                </table>
                <div className='py-9'>
                  <div className='border-t pt-9 border-slate-200'>
                    <p className='text-sm font-light text-slate-700'>
                      Ödeme koşulları 14 gündür. Paketlenmemiş Borçların Geç Ödenmesi Yasası 0000'e
                      göre, serbest çalışanların bu süreden sonra borçların ödenmemesi durumunda
                      00.00 gecikme ücreti talep etme hakkına sahip olduklarını ve bu noktada bu
                      ücrete ek olarak yeni bir fatura sunulacağını lütfen unutmayın. Revize
                      faturanın 14 gün içinde ödenmemesi durumunda, vadesi geçmiş hesaba ek faiz ve
                      %8 yasal oran artı %0,5 Bank of England tabanı olmak üzere toplam %8,5
                      uygulanacaktır. Taraflar Kanun hükümleri dışında sözleşme yapamazlar.
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>
        <div className='flex justify-end mt-4'>
          <Button type='primary' size='large'>
            Yazdır
          </Button>
        </div>
      </Modal>
    </>
  )
}

export default PrintInvoice
