import Image from 'next/image'
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'
import Navbar from '@/app/components/navbar'

export default async function Home() {
  const supabase = createClient()
  
  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/login')
  }

  return (
    <>
    <Navbar />
    <div className='h-[80vh] w-full flex flex-col justify-center items-center'>
      <h1 className='text-2xl pb-5'>Welcome to profile page! 👋</h1>
      <div className="card w-1/4 bg-base-100 shadow-xl p-5">
        <div className="z-10 absolute top-4 right-4 badge badge-outline badge-primary p-3 text-gray-700">Employee</div>

        <div className='flex justify-center items-center space-x-5'>
          <div className="avatar">
            <div className="w-24 rounded-full">
              <Image width={80} height={80} src={data.user["user_metadata"]["avatar_url"]} alt='user-avatar' />
            </div>
          </div>
          <div>
            <label className='font-light text-gray-500'>Name</label>
            <h1 className='pb-5 text-xl'>{data.user.user_metadata.full_name}</h1>
            <label className='font-light text-gray-500'>Email</label>
            <h1 className='pb-5 text-xl'>{data.user.email}</h1>
          </div>
        </div>

      </div>
    </div>
    </>
  )
}
