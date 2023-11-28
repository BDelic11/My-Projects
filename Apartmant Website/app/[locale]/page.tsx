import LandingPage from './components/LandingPage/LandingPage'
import Navbar from './components/Navbar/Navbar';

import {useTranslations} from 'next-intl';
import Link from 'next/dist/client/link';



 
export default function Home() {
  const t = useTranslations('Home');
  return (
    <main>
      <div className='relative z-100 top-32'>

       <Link href="/en" locale="en">
          In english
        </Link>{" "}
        |{" "}
        <Link href="/hr" locale="hr">
          In croatian
        </Link>
         <h1>{t("welcome")}</h1>
      <Navbar />
      <LandingPage />
      </div>
    </main>

  ) // Add to Cart
}

