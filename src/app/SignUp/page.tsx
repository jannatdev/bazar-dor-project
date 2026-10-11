"use client";
import { signIn, signUp } from "@/lib/auth-client";
import { Fieldset, Form } from "@heroui/react";
import Image from "next/image";
import google from "@/app/asset/icons8-google-48.png";
import github from '@/app/asset/github-logo.png'
import Link from "next/link";
import toast from "react-hot-toast";



const SignUpPage = () => {
    
  const onSubmit = async(e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget)
    const user = Object.fromEntries(formData.entries()) as{name:string,email:string,password:string}

      const {data,error}=await signUp.email({
        ...user,
        callbackURL: "/",
        
      })
    
      if(data){
         toast.success("সাইন আপ সফল হয়েেছ ।")
          e.currentTarget.reset();
        
      }
      if(error){
     
        toast.error("এই একাউন্টি ইতিমধ্যে সাইন আপ করা হয়েছে")
      }
      
    }
    const handleGoogleSignIn=async()=>{
        await signIn.social({
            provider:"google",
            
        })
        toast.success("সাইন ইন সফল হয়েেছ ।")

      }
    
    return (

        <div>
            <div className="text-center mt-10 ">
                <h2 className="text-[24px] text-[#1D271F] font-bold">অ্যাকাউন্ট তৈরি করুন</h2>
                <p className="text-[14px] text-[#323934]">বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।</p>

            </div>
            
            <Form className="flex w-96 flex-col gap-4 max-w-7xl mx-auto mt-5" onSubmit={onSubmit}>
              <Fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-md border p-4">
                 

                    <label className="label text-[14px] text-[#1D271F] font-medium">নাম</label>
                     <input name="name" type="text" className="input w-md" placeholder="নাম" />

                    <label className="label text-[14px] text-[#1D271F] font-medium">ইমেইল</label>
                     <input name="email" type="email" className="input w-md" placeholder="you@example.com" />

                     <label className="label text-[14px] text-[#1D271F] font-medium">পাসওয়ার্ড</label>
                    <input name="password" type="password" className="input w-md " placeholder="কমপক্ষে ৮ অক্ষর" />

                     <label className="labe text-[14px] text-[#1D271F] font-mediuml">পাসওয়ার্ড নিশ্চিত করুন</label>
                    <input name="password" type="password" className="input w-md" placeholder="আবার লিখুন" />

                    <button className="btn bg-[#05893E] text-[14px] font-semibold text-white mt-4">অ্যাকাউন্ট তৈরি করুন</button>

                    <div className="flex items-center justify-center">
                        <span className="text-3xl  text-gray-400 font-light"> ──────── </span>
                        <h1 className="text-[14px] text-[#1D271F] font-mediuml"> অথবা </h1>
                        <span className="text-3xl  text-gray-400"> ────────</span>

                  </div>

                 
                   
                      
                </Fieldset>

            </Form>
              <div className="bg-base-200  w-120 ml-142 max-w-7xl mx-auto py-4">
                <div className="flex gap-4 ml-8">
                     <button
                     onClick={handleGoogleSignIn}
                      className="btn flex items-center gap-4 text-[14px] text-[#1D271F] font-semibold">
                        <Image src={google} alt="icon" width={16} height={16}/>
                        Google দিয়ে চালিয়ে যান
                        </button>
                      <button className="btn flex items-center gap-4 text-[14px] text-[#1D271F] font-semibold">
                        <Image src={github} alt="icon" width={16} height={16}/>
                        Google দিয়ে চালিয়ে যান
                        </button>

                  </div>

                  <div className="flex gap-2 justify-center mt-2">
                     <p className="text-[14px] text-[#323934]">অ্যাকাউন্ট আছে?</p>
                     <p className="text-[14px] text-[#05893E]">সাইন আপ করুন</p>

                  </div>


              </div>

             <Link href={'/'}>
            <p className="text-center text-[14px] text-[#323934] mt-6 ml-15">←  হোম পেজে ফিরে যান</p>
            </Link>
           

        </div>
         
    );

}
export default SignUpPage;