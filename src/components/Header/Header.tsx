"use client"

import Image from "next/image"
import Link from "next/link"
import { dataHeader } from "./Header.data"
import { useState } from "react"
import { Transition } from "../Transition/"

export function Header() {
    const [openMobileMenu, setOpenMobileMenu] = useState(false)

    return (
        <Transition>
            <nav className="flex flex-wrap items-center justify-between w-full mx-auto "style={{background: "linear-gradient(90deg, #2980b9 0%, rgba(0, 128, 168, 0.6) 95.83%)"}}>
                <Link href="/" className="flex items-center">
                    <Image src="/assets/logo.png" width="150" height="40" alt="Logo Bank" />
                </Link>
                <div className={`${openMobileMenu ? 'block' : 'hidden'} w-full md:block md:w-auto`}>
                    <div className="flex flex-col p-8 mt-4 md:p-6 md:flex-row md:space-x-8 md:mt-0 md:border-0">
                        {dataHeader.map(({ id, name, idLink }) => (
                            <div key={id} className="px-4 transition-all duration-500 ease-in-out">
                                <Link href={idLink} className="text-lg font-bold text-white hover:text-secondary">{name}</Link>
                            </div>
                        ))}
                    </div>
                </div>
            </nav>
        </Transition>
    )
}