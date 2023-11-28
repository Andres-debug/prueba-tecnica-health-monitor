import Image from "next/image";
import { Reveal } from "../Reveal";
import { footerData} from "./Footer.data";
import Link from "next/link";


export function Footer() {
    return (
        <div className="w-full p-6 mx-auto mt-10 md:-mt-10" style={{background: "linear-gradient(90deg, #2980b9 0%, rgba(0, 128, 168, 0.6) 95.83%)"}}>
            <div className="justify-around md:flex">
                <div>
                    <Image src="/assets/logo.png" width={200} height={40} alt="Logo Bank" />
                </div>
                {footerData.map(({ id, title, links }) => (
                    <div key={id}>
                        <h4 className="mt-8 text-lg md:mt-0 font-bold text-white"><Reveal>{title}</Reveal></h4>
                        {links.map(({ id, name, link }) => (
                            <Link key={id} href={link} className="block mt-4 text-primaryDark hover:text-white">
                                <Reveal>
                                    {name}
                                </Reveal>
                            </Link>
                        ))}
                    </div>
                ))}
            </div>

            <div className="border-[#3F3E45] border-[1px] my-7" />

            <div className="items-center justify-between md:flex">
                <div className="my-3 text-white">
                    <Reveal>
                        2023 Andres Diaz. All Rights Reserved.
                    </Reveal>
                </div>
            </div>

        </div>
    )
} 