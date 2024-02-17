'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { IoReload } from "react-icons/io5";

const ButtonReloadCards = () => {

    const [loading,setLoading] = useState<boolean>(false)

    const router = useRouter()
  return (
    <div>
        <IoReload onClick={() => {
            setLoading(true)
            router.replace('/planos')
            router.refresh()
            window.location.reload()
        }} size={35} className={`bg-[#202130] p-1 rounded-full text-white flex gap-2 items-center ${loading && 'animate-spin'}`}/>
    </div>
  )
}

export default ButtonReloadCards
