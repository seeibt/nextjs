"use client"

import { signIn, signOut } from "next-auth/react"
import Image from "next/image"
import { BsPersonPlus } from "react-icons/bs"


export default ({ session }) => {
    return(
        <>
            {!session ? (
                    <button className="p-3 bg-transparent text-xl" onClick={() => signIn()}>
                        <BsPersonPlus />
                    </button>
                ) : (
                    <button onClick={() => signOut()}>
                        <Image className="h-12 w-12 rounded-full object-fill" src={session.user.image} alt='Sair da conta' width={50} height={50} />
                    </button>
                )
            }
        </>
    )
}
