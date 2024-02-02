'use client'
import { createClient } from "@/utils/supabase/client";

import { cookies } from "next/headers";
import { useEffect } from "react";

const Page = () => {
  const supabase = createClient();
  useEffect(() => {
    try {
      // supabase.from('leaderboard').select('*').then((data) => {
      //   console.log('data:',data.data)
      //   console.log('error:',data.error)

      // })
      supabase.from('students').select('*').then((data) => {
        console.log('data:',data.data)
        console.log('error:',data.error)
      })
    } catch(e){
      console.log(e)
    }
  }, [])
  return <div>hello</div>;
}

export default Page;