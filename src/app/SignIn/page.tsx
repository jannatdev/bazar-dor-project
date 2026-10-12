"use client";
import { signIn } from "@/lib/auth-client";
import { Fieldset, Form } from "@heroui/react";
import Image from "next/image";
import google from "@/app/asset/icons8-google-48.png";
import github from '@/app/asset/github-logo.png'
import Link from "next/link";

import toast from "react-hot-toast";


const SignInPage = () => {
    
  const onSubmit = async(e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget)
    const user = Object.fromEntries(formData.entries()) as{name:string,email:string,password:string}

      const {data,error}=await signIn.email({
        ...user,
        callbackURL: "/",
        
      })
    
      if(data){
        console .log(data);
       
        toast.success("সাইন ইন সফল হয়েেছ ।")
      }
      if(error){
        console.log(error);
        toast.error("সাইন ইন ব্যর্থ হয়েেছ, পুনরায় চেষ্টা করুন !")
      }
    }
    const handleGoogleSignIn=async()=>{
            await signIn.social({
                provider:"google",
                callbackURL: "/",
                
            })
            toast.success("সাইন ইন সফল হয়েেছ ।")
    
          }

          const handleGithubSignIn=async()=>{
            await signIn.social({
              provider:"github",
              callbackURL: "/",

            })
             toast.success("সাইন ইন সফল হয়েেছ ।")
    
          }
        
    
    return (

        <div className="max-w-7xl mx-auto">
            <div className="text-center mt-10 ">
                <h2 className="text-[24px] text-[#1D271F] font-bold">সাইন ইন</h2>
                <p className="text-[14px] text-[#323934]">বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।</p>

            </div>
            
            <Form className="flex w-90 md:w-100 flex-col gap-4 max-w-7xl mx-auto mt-5" onSubmit={onSubmit}>
              <Fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full md:w-md border p-4">
                 

                    <label className="label text-[14px] text-[#1D271F] font-medium">ইমেইল</label>
                     <input name="email" type="email" className="input w-full md:w-md" placeholder="you@example.com" />

                     <label className="label text-[14px] text-[#1D271F] font-medium">পাসওয়ার্ড</label>
                    <input name="password" type="password" className="input w-sm md:w-md " placeholder="কমপক্ষে ৮ অক্ষর" />

                    

                    <button className="btn bg-[#05893E] text-[14px] font-semibold text-white mt-4">সাইন ইন</button>

                    <div className="flex items-center justify-center">
                        <span className="text-3xl  text-gray-400 font-light"> ──────── </span>
                        <h1 className="text-[14px] text-[#1D271F] font-mediuml"> অথবা </h1>
                        <span className="text-3xl  text-gray-400"> ────────</span>

                  </div>

            </Fieldset>

            </Form>
               <div className="bg-base-200  w-120  ml-30 md:ml-140 max-w-7xl mx-auto py-4">
                <div className="flex gap-4 ml-8">
                     <button
                     onClick={handleGoogleSignIn}
                      className="btn flex items-center gap-4 text-[14px] text-[#1D271F] font-semibold">
                        <Image src={google} alt="icon" width={16} height={16}/>
                        Google দিয়ে চালিয়ে যান
                        </button>
                      <button 
                      onClick={handleGithubSignIn}
                      className="btn flex items-center gap-4 text-[14px] text-[#1D271F] font-semibold">
                        <Image src={github} alt="icon" width={16} height={16}/>
                        Github দিয়ে চালিয়ে যান
                        </button>

                  </div>

                  <div className="flex gap-2 justify-center mt-2">
                     <p className="text-[14px] text-[#323934]">অ্যাকাউন্ট আছে?</p>
                     <Link href={'/SignUp'}>
                       <p className="text-[14px] text-[#05893E]">সাইন আপ করুন</p>
                     </Link>
                     

                  </div>


              </div>

            <Link href={'/'}>
            <p className="text-center text-[14px] text-[#323934] mt-6 ml-15">←  হোম পেজে ফিরে যান</p>
            </Link>

             
            

        </div>
         
    );

}
export default SignInPage;