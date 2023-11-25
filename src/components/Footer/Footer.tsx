import Image from "next/image";
import { Reveal } from "../Reveal";
import { footerData} from "./Footer.data";
import Link from "next/link";


export function Footer() {
    return (
        <div className="max-w-5xl p-6 mx-auto mt-10 md:-mt-40">
            <div className="justify-between md:flex">
                <div>
                    <Image src="/assets/logo.png" width={200} height={40} alt="Logo Bank" />
                    <Reveal>
                        <p className="mt-5 text-primaryDark max-w-[250px]">Una nueva forma de hacer pagos de forma sencilla</p>
                    </Reveal>
                </div>
                {footerData.map(({ id, title, links }) => (
                    <div key={id}>
                        <h4 className="mt-8 text-lg md:mt-0"><Reveal>{title}</Reveal></h4>
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
                <div className="my-3">
                    <Reveal>
                        2023 Boras Bank. All Rights Reserved.
                    </Reveal>
                </div>
            </div>

        </div>
    )
} 