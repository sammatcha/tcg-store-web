'use client'

import { useState } from "react"


export default function NewsletterForm(){
    const [email, setEmail] = useState("")
    const [submit, setSubmit] = useState(false)

    function handleSubmit(e: React.FormEvent){
        e.preventDefault()
        setSubmit(true)
    }

    return(
        <form onSubmit={handleSubmit} className="flex flex-col gap-2 mt-3 self-start w-48">
            <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email here"
                className="border-b py-2 text-sm bg-transparent outline-none w-full mb-1"
            />
             <button
            type="submit"
            className="bg-white text-black rounded-full py-3 px-3 text-sm font-semibold uppercase"
            >
                Subscribe
            </button>

          
        </form>
    )
}