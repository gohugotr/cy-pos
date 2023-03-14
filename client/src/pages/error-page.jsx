import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id='error-page' className='flex flex-col justify-center h-screen text-2xl text-center'>
      <h1 className='p-4 text-4xl'>Hata!</h1>
      <p>Üzgünüz, beklenmeyen bir hata oluştu.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  )
}