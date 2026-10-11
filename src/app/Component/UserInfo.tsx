
'use client';
import { authClient, signOut } from '@/lib/auth-client';



import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import toast from 'react-hot-toast';





const UserInfo = () => {
  const {data:session , isPending} =authClient.useSession();

  const[signedOut,setSignedOut]=useState(false)
  const [loading,setLoading] =useState(false)

  const router = useRouter();


    const user= signedOut ? null :session?.user;
   
        
     const handleSignOut = async()=>{

        try{ 
            setLoading(true);
            
            await signOut(
            {
            fetchOptions: {
              onSuccess: () => {
                toast.error(" User সাইন আউট  হয়েেছ ।")
                setSignedOut(true)
                router.replace("/"); 
                router.refresh();
            },
            }}
        );
      }catch (error){
        console.error('Sign out Failed', error)
      }finally{
        setLoading(false)
      }
      
    } 
      
       if(isPending && !signedOut){
        return <div> Loading...</div>
       }
         
   
    return (
       
             <div>

                 {user ? ( <div>
                               
                         <button className="btn border border-[#05893E]" popoverTarget="popover-1" style={{ anchorName: "--anchor-1" } }>
                                👤 {user?.name}
                        </button>

                        <div className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm" popover="auto" id="popover-1" style={{ positionAnchor: "--anchor-1" } }>
                            <Link href={'/Profile'}>
                              <button  className='btn'>এডিট প্রোফাইল</button>
                            </Link>  
                                
                            <button
                             onClick={handleSignOut}
                             disabled={loading}
                              className='btn' >
                                {loading? "সাইন আউট হচ্ছে...":"⤶ সাইন আউট"}
                                </button>
                             
                        </div>

                         </div>):(
                            <div>
                              <Link href={'/SignIn'}>
                                 <button className='py-2 px-5'>সাইন ইন</button>
                              </Link>
                            
                              <Link href={'/SignUp'}>
                                 <button className='bg-[#05893E] text-white py-2 px-5 rounded-[5px]'>সাইন আপ</button>
                               </Link>

                            </div>
                                 
                          )}
                           
                            
                 </div>
            
        
    );
};

export default UserInfo;