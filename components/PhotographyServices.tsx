import React from "react";
import Link from "next/link";
import Image from "next/image";
import whatsapplogo from "../assets/images/whatsapp.png"

const PhotographyServices = () => {
    const photographyBoxes = [
        {
            id: 1,
            title: "Basic",
            Price: "GHC99.99",
            Use: "3 Professionally Edited Photos",
            Turnaround: "5–6 Business Days (Could be earlier)",
            color: "#ffffff22",
            bordercolor: "#ffffff44",
            pricecolor: "#ffffff44",
        },
        {
            id: 2,
            title: "Standard",
            Price: "GHC199.99",
            Use: "5 Professionally Edited Photos",
            Turnaround: "6–7 Business Days (Could be earlier)",
            color: "#ffffff22",
            bordercolor: "#ffffff44",
            pricecolor: "#ffffff44",
        },
        {
            id: 3,
            title: "Premium",
            Price: "GHC499.99",
            Use: "10 Professionally Edited Photos",
            Concept: "A Well Edited Video documentation",
            Turnaround: "7–8 Business Days (Could be earlier)",
            color: "#FFD70044",
            bordercolor: "#FFD70044",
            pricecolor: "#FFD70099",

        },
    ];

    return (
        <div className="w-full px-4 py-6">
            {/* CARDS */}
            <div className="flex flex-col md:flex-row justify-center items-stretch gap-6">
                {photographyBoxes.map((box) => (
                    <div
                        key={box.id}
                        style={{ backgroundColor: box.color, borderColor: box.bordercolor }}
                        className="flex flex-col border-2 rounded-lg w-full md:w-[26%] px-4 py-4"
                    >
                        {/* TITLE */}
                        <div
                            style={{ backgroundColor: box.color, borderColor: box.bordercolor }}
                            className="border-2 rounded-md px-3 py-2 w-fit mb-4"
                        >
                            <h4 className="text-xs font-bold whitespace-nowrap">
                                {box.title}
                            </h4>
                        </div>

                        {/* DETAILS */}
                        <div className="text-gray-200 text-sm space-y-3 flex-grow">
                            {[
                                box.Use,
                                box.Concept,
                                box.Turnaround,
                            ].map((item, i) => (
                                <div key={i}>
                                    <p>{item}</p>
                                    <div className="w-[80%] h-[0.5px] bg-white/20 mt-2" />
                                </div>
                            ))}
                        </div>

                        {/* PRICE */}
                        <div
                            style={{ backgroundColor: box.pricecolor }}
                            className="mt-6 self-start px-4 py-3 rounded-md"
                        >
                            <h3 className="text-xs font-bold text-center">{box.Price}</h3>

                        </div>

                        <div
                            className="mt-6 self-start bg-red-600 px-4 py-1 rounded-md justify-center items-center"
                        >
                            <Link
                                href="https://forms.gle/Tk2aoPku37Tkj2SX9"
                                target="_blank"
                                className="hover:scale-105 transition text-sm font-semibold"
                            >Book a session 📧</Link>
                        </div>





                    </div>
                ))}
            </div>





            {/* FOOTER / CONTACT */}
            <div className="mt-16 w-full">
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 bg-white/10 rounded-lg p-6 text-xs">
                    <p>
                        <span className="text-white/50">Email:</span>{" "}
                        helloskidstudio@gmail.com
                    </p>

                    <span className="hidden md:block text-white/30">|</span>

                    <p>
                        <span className="text-white/50">Contact:</span> +233-535-587-994
                    </p>

                    <span className="hidden md:block text-white/30">|</span>

                    <Link
                        href="https://wa.me/message/UZ126BKGNUKQCI"
                        target="_blank"
                        className="hover:scale-105 transition"
                    >
                        <Image
                            src={whatsapplogo}
                            alt="WhatsApp"
                            width={28}
                            height={28}
                        />
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default PhotographyServices;
