"use client";
import React from "react";
import SplitText from "@/components/SplitText";
import MotionGraphicsServices from "@/components/MotionGraphicsServices";

const LandingPage = () => {

    const boxes = [
        {
            id: 1,
            title: "Basic Promo (Digital Only)",
            Price: "GHC199.99",
            Use: " Quick social media posts or simple announcements",
            Sides: "Single-sided (1 page)",
            Concept: "1 unique design idea",
            Revisions: "1 Round of Minor Revisions",
            Imagery: "Basic free stock used",
            FileType: "JPEG, PNG (Web/Digital Only)",
            Turnaround: "2-3 Business Days",
            color: "#007aff33",
            bordercolor: "#007aff44",
            pricecolor: "#007aff",
        },
        {
            id: 2,
            title: "Standard Impact (Print & Digital)",
            Price: "GHC349.99",
            Use: "General business promotions and print handouts",
            Sides: "Single-sided (1 page)",
            Concept: "2 initial design idea",
            Revisions: "2 Round of Minor Revisions",
            Imagery: "Licensed stock images included",
            FileType: "Print-Ready PDF & Web PNG/JPEG",
            Turnaround: "3-4 Business Days",
        },
        {
            id: 3,
            title: "Pro Launch (Full Service)",
            Price: "GHC599.99",
            Use: "Detailed campaigns requiring maximum visual appeak",
            Sides: "Double-sided (2 page)",
            Concept: "3 initial design idea",
            Revisions: "3 Round of Minor Revisions",
            Imagery: "Premium licensed stock images included",
            FileType: "Source File(AI/PSD/PSB), Print-Ready, PDF, Web Files",
            Turnaround: "2-3 Business Days",
        },
    ];

    const handleAnimationComplete = () => {
        console.log("All letters have animated!");
    };

    return (
        <div className="flex flex-col items-center justify-center w-full m-5 mt-12">

            <div className="px-2 justify-center items-center">
                <SplitText
                    text="Skid Studio Price Package"
                    className="text-4xl font-black md:font-bold text-center tracking-tighter mt-[15%] md:text-6xl md:mt-[8%]"
                    delay={100}
                    duration={0.6}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="-100px"
                    textAlign="center"
                    onLetterAnimationComplete={handleAnimationComplete}
                />
            </div>

            <div className="font-light text-medium md:max-w-1/2 mb-12 leading-tight tracking-tight font-BricolageGrotesque mt-2 mx-5 px-2 text-center hover:text-gray-200">
                <p>Explore different prices packages and see what suits you best. Prices are negotiable.</p>
            </div>

            <div className="font-light bg-white/10 py-2 px-3 border-2 border-white/20 rounded-full text-medium md:max-w-1/2 mb-4 leading-tight tracking-tight font-BricolageGrotesque mt-2 mx-5 text-center">
                <p className="text-sm font-medium">Graphic Design Services</p>
            </div>

            {/* FIX 1: removed h-10 */}
            <div className="w-full px-3 py-2 justify-center items-center">
                <div className="flex-col md:flex-row justify-center w-full flex items-center gap-4">

                    {boxes.map((box) => (
                        <div
                            key={box.id}
                            style={{
                                backgroundColor: box.color,
                                borderColor: box.bordercolor,
                            }}
                            className="bg-white/10 flex flex-col border-2 border-white/20 rounded-md md:min-w-[25%] md:max-w-[25%] w-[90%] px-3 py-2"
                        >
                            <div
                                style={{ backgroundColor: box.color, borderColor: box.color }}
                                className="p-2 bg-white/20 border-2 mt-1 block w-[55%] flex-nowrap border-white/30 rounded-md justify-center items-center"
                            >
                                <h4 className="whitespace-nowrap text-xs truncate font-bold tracking-normal">
                                    {box.title}
                                </h4>
                            </div>

                            <div className="px-2 py-5 mb-8 text-gray-200">
                                <div className="w-full">{box.Use}</div>
                                <div className="w-[80%] bg-white/20 h-[0.5px] mt-2 mb-2"></div>

                                <div className="w-full">
                                    {box.Sides}
                                    <div className="w-[80%] bg-white/20 h-[0.5px] mt-2 mb-2"></div>
                                </div>

                                <div className="w-full">
                                    {box.Concept}
                                    <div className="w-[80%] mt-2 bg-white/20 h-[0.5px] mb-2"></div>
                                </div>

                                <div className="w-full">
                                    {box.Revisions}
                                    <div className="w-[80%] mt-2 bg-white/20 h-[0.5px] mb-2"></div>
                                </div>

                                <div className="w-full">
                                    {box.Imagery}
                                    <div className="w-[80%] mt-2 bg-white/20 h-[0.5px] mb-2"></div>
                                </div>

                                <div className="w-full">
                                    {box.FileType}
                                    <div className="w-[80%] mt-2 bg-white/20 h-[0.5px] mb-2"></div>
                                </div>

                                <div className="w-full">
                                    {box.Turnaround}
                                    <div className="w-[80%] mt-2 bg-white/20 h-[0.5px] mb-2"></div>
                                </div>
                            </div>

                            {/* FIX 2: removed stray div */}
                            <div
                                style={{ backgroundColor: box.pricecolor, borderColor: box.bordercolor }}
                                className="bg-red-600 mx-2 mb-2 px-5 py-3 w-[35%] rounded-md
             flex items-center justify-center
             whitespace-nowrap overflow-hidden"
                            >
                                <h3 className="text-xs font-bold">{box.Price}</h3>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex-col md:flex-row justify-center w-full flex items-center gap-4 mt-20">
                    <div className="font-light bg-white/10 py-2 px-3 border-2 border-white/20 rounded-full text-medium md:max-w-1/2 mb-4 leading-tight tracking-tight font-BricolageGrotesque mt-2 mx-5 text-center">
                        <p className="text-sm font-medium">Motion Graphics Services</p>
                    </div>
                </div>

                <MotionGraphicsServices />
            </div>
        </div>
    );
};

export default LandingPage;
