
import Link from 'next/link';
import 'react-calendar/dist/Calendar.css';

export default function Home() {

  return (
    <div className="mx-auto max-w-screen-lg text-center">
      <Link href={'/reservation'}>Do strony rezerwacji</Link>
    </div>
  )
}

