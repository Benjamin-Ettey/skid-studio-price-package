import React from "react";


const MotionGraphicsServices = () => {
    const motionBoxes = [
        {
            id: 1,
            title: "Basic Motion Promo",
            Price: "GHC499.99",
            Use: "Short social media clips or simple motion posts",
            Duration: "Up to 15 seconds",
            Concept: "1 unique animation idea",
            Revisions: "1 Round of Minor Revisions",
            Visuals: "Basic graphics & stock animations",
            FileType: "MP4, GIF",
            Turnaround: "5–6 Business Days",
            color: "#00c85333",
            bordercolor: "#00c85344",
            pricecolor: "#00c853",
        },
        {
            id: 2,
            title: "Standard Motion Package",
            Price: "GHC999.99",
            Use: "General business promos or marketing campaigns",
            Duration: "Up to 30 seconds",
            Concept: "2 initial animation ideas",
            Revisions: "2 Rounds of Minor Revisions",
            Visuals: "Custom graphics, stock animations & basic effects",
            FileType: "MP4, MOV",
            Turnaround: "6–7 Business Days",
            color: "#ff980033",
            bordercolor: "#ff980044",
            pricecolor: "#ff9800",
        },
        {
            id: 3,
            title: "Pro Motion Launch",
            Price: "GHC1999.99",
            Use: "High-end campaigns, commercials & full motion branding",
            Duration: "Up to 60 seconds",
            Concept: "3 initial animation concepts",
            Revisions: "3 Rounds of Minor Revisions",
            Visuals: "Premium custom animations, 3D elements & advanced effects",
            FileType: "MP4, MOV, Source Files",
            Turnaround: "7–8 Business Days",
            color: "#d500f933",
            bordercolor: "#d500f944",
            pricecolor: "#d500f9",
        },
    ];

    return (
        <div className="w-full px-4 py-6">
            {/* CARDS */}
            <div className="flex flex-col md:flex-row justify-center items-stretch gap-6">
                {motionBoxes.map((box) => (
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
                                box.Duration,
                                box.Concept,
                                box.Revisions,
                                box.Visuals,
                                box.FileType,
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
                    </div>
                ))}
            </div>


        </div>
    );
};

export default MotionGraphicsServices;
