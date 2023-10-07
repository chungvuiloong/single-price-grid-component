import Image from 'next/image'

export default function Home() {
  return (
    <main>
        
        <div className='bg-white p-10 flex flex-col gap-2'>
            <h1 className='text-2xl text-Cyan font-bold mb-3.5'>Join our community</h1>
            <h2 className='text-lg text-Bright-Yellow font-bold'>30-day, hassle-free money back guarantee</h2>
            <p className='text-Grayish-Blue text-base'>  Gain access to our full library of tutorials along with expert code reviews. 
  Perfect for any developers who are serious about honing their skills.</p>
        </div>
        <div className='flex flex-col gap-3 bg-Cyan p-10 text-white'>
            <h2 className='text-lg'>Monthly Subscription</h2>
            <div className='flex flex-col gap-1'>
                <div className='flex flex-row gap-4'>
                    <div className='text-3xl font-bold'>$29</div> 
                    <div className='self-center text-Light-Gray'>per month</div>
                </div>
                <div>Full access for less than $1 a day</div>
            </div>
            <button className="mt-4 p-3.5 bg-Bright-Yellow border-none text-white rounded-md ">Sign Up</button>
        </div>

    </main>
  )
}

// 

//   

//   Gain access to our full library of tutorials along with expert code reviews. 
//   Perfect for any developers who are serious about honing their skills.

//   Monthly Subscription

//   &dollar;29 per month

//   Full access for less than &dollar;1 a day

//   Sign Up

//   Why Us

//   Tutorials by industry experts
//   Peer &amp; expert code review
//   Coding exercises
//   Access to our GitHub repos
//   Community forum
//   Flashcard decks
//   New videos every week