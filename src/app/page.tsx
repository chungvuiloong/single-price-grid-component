import JoinCommunity from '@/components/JoinCommunity'
import MonthlySubscription from '@/components/MonthlySubscription'
import WhyUs from '@/components/WhyUs'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='h-[100vw]'>
        <JoinCommunity />
        <div className='flex lg:flex-row flex-col'>
            <MonthlySubscription />
            <WhyUs />
        </div>
    </main>
  )
}