import JoinCommunity from '@/components/JoinCommunity'
import MonthlySubscription from '@/components/MonthlySubscription'
import WhyUs from '@/components/WhyUs'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='h-[100vh] flex flex-col justify-center'>
        <div className='mx-auto'>
            <div className='max-w-[650px]'>
                <JoinCommunity />
                <div className='flex lg:flex-row flex-col w-auto'>
                    <MonthlySubscription />
                    <WhyUs />
                </div>
            </div>
        </div>
    </main>
  )
}