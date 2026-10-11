'use client';
import { authClient } from '@/lib/auth-client';
import { Fieldset, Form } from '@heroui/react';
import { signOut, updateUser } from "@/lib/auth-client";

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import toast from 'react-hot-toast';


const ProfilePage = () => {
    const {data:session, isPending} =authClient.useSession();
    const[signedOut,setSignedOut]=useState(false)
      const [loading,setLoading] =useState(false)
    const router = useRouter();
    
        const user=signedOut ? null : session?.user;

     const handleUpdateProfile=async(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const newUserdata= Object.fromEntries(formData.entries()) as{name:string}

            await updateUser({
               ...newUserdata,
            })
           
     }
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
             <div className="text-center mt-10 ">
                <h2 className="text-[24px] text-[#1D271F] font-bold">আমার প্রোফাইল</h2>
                <p className="text-[14px] text-[#323934]">আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।</p>

            </div>
            <div className='max-w-7xl mx-auto flex justify-between items-center  w-120 ml-145 bg-base-200 p-5 mt-5 '>
                <div className='flex gap-4'>
                    <span className='text-4xl'>🪪</span>
                    <div>
                        <h2 className='text-[20px] font-bold'>{user?.name}</h2>
                        <p className='text-[#3e4740] text-[14px]'>{user?.email}</p>
                    </div>

                </div>

                <button
                             onClick={handleSignOut}
                             disabled={loading}
                              className='btn border border-red-500 text-red-500' >
                                {loading? "সাইন আউট হচ্ছে...":"⤶ সাইন আউট"}
                                </button>
                             
                
                
            </div>
               <Form className="flex w-96 flex-col gap-4 max-w-7xl mx-auto mt-5" onSubmit={handleUpdateProfile}>
                            <Fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-md border p-4">
                               
              
                                  <label className="label text-[14px] text-[#1D271F] font-medium">নাম</label>
                                   <input name="name" type="text" className="input w-md" placeholder="নাম" />
              
                                 
              
                                  <button className="btn bg-[#05893E] text-[14px] font-semibold text-white mt-4">আপডেট </button>
              
                                 
                            </Fieldset>
              
                          </Form>
            
            <div>

            </div>
        </div> 
       
       
    );
};

export default ProfilePage;