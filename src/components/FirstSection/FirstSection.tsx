"use client"
import Link from "next/link"
import { Transition } from "../Transition"
import Image from "next/image"
import { Reveal } from "../Reveal"


export function FirstSection() {
    return (
        <div className="relative p-4 md:py-30 mt-14">
        <div className="grid max-w-5xl mx-auto md:grid-cols-2">
            <div>
                <Reveal>
                    <h1 className="text-5xl font-semibold">
                       El nuevo
                       <span className="block degradedBlue bg-blueLight">
                           Monitor de Salud de URL
                       </span>
                       para todos
                    </h1>
                </Reveal>
                <Reveal>
                    <p className="max-w-md mt-10">Nuestro equipo de expertos utiliza una metodología para identificar y supervisar la disponibilidad y el funcionamiento óptimo de tus sitios web, URLs y servicios API. Configura la frecuencia de las comprobaciones y recibe notificaciones en tiempo real si se detecta algún problema en tus sitios web.</p>
                </Reveal>
                <Reveal>
                    <div className="my-8">
                       <Link href="#clients" className="px-4 py-3 rounded-md font-bold text-white bg-sky-500/100">Empieza ahora</Link>
                    </div>
                </Reveal>
            </div>
            <Transition className="flex items-center justify-center">
                <Image src="/assets/monitor.png" alt="Card" width={450} height={450} className="h-auto w-72 md:w-full" />
            </Transition>
        </div>
     </div>
    )
}