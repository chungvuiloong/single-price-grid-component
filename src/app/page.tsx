import JoinCommunity from '@/components/JoinCommunity'
import MonthlySubscription from '@/components/MonthlySubscription'
import WhyUs from '@/components/WhyUs'

export default function Home() {
  return (
    <main className='relative flex flex-col justify-center mx-auto'>
            <div className='max-w-[650px] m-[30px] rounded-md overflow-hidden self-center'>
                <JoinCommunity />
                <div className='flex lg:flex-row flex-col w-auto'>
                    <MonthlySubscription />
                    <WhyUs />
                </div>
            </div>
    </main>
  )
}