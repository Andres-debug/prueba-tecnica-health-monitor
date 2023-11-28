"use client"

import Link from "next/link"
import { Reveal } from "../Reveal"
import { dataFeaturesSection } from "./SecondSection.data"
import Image from "next/image"

export function SecondSection() {
    return (
        <div className="relative px-6 py-20 pb-48" id="features">
    <div className="grid max-w-5xl mx-auto md:grid-cols-2">
        <div>
            <Reveal>
                <h2 className="text-5xl font-semibold">
                    <span className="block degradedBlue bg-blueLight">Tu tranquilidad, nuestra prioridad</span>
                    Monitorizamos tus URLs<br /> 
                    para tu paz mental
                </h2>
            </Reveal>
            <Reveal>
                <p className="max-w-md mt-10">Con la herramienta adecuada, asegura la disponibilidad constante de tus sitios web, URLs y servicios API. Obtén alertas en tiempo real sobre tiempos de inactividad o problemas con certificados SSL. Simplificamos la detección de errores para que puedas mantener tus servicios en línea y tu negocio activo.</p>
            </Reveal>
            <Reveal>
                <div className="my-8">
                    <Link href="/plans" className="px-4 py-3 rounded-md font-bold text-white bg-sky-500/100">Elige tu plan</Link>
                </div>
            </Reveal>
        </div>

        <div className="grid items-center py-5 md:p-8">
            {dataFeaturesSection.map(({ id, icon, title, description }) => (
                <Reveal key={id}>
                    <div className="grid grid-flow-col gap-5 px-4 py-2 rounded-lg group hover:bg-radialBlueBlack">
                         <Image src={`/assets/${icon}.png`} alt={title} width={40} height={40} /> 
                        <div>
                            <h4 >{title}</h4>
                            <p className="text-primaryDark py-2">{description}</p>
                        </div>
                    </div>
                </Reveal>
            ))}
        </div>
    </div>
</div>
    )
}