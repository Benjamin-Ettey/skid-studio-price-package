import React from 'react'
import LightRays from "@/components/LightRays";
import LandingPage from "@/app/LandingPage";

const Page = () => {

    return (

        <div
            className="flex-col flex w-full  overflow-x-hidden min-h-screen">

            <div style={{ width: '100%', height: '600px', position: 'absolute', zIndex: -1 }}>
                <LightRays
                    raysOrigin="top-center"
                    raysColor="#ffffff"
                    raysSpeed={1.5}
                    lightSpread={5}
                    rayLength={1.5}
                    followMouse={true}
                    mouseInfluence={0.1}
                    noiseAmount={0.1}
                    distortion={0.05}
                    className="custom-rays"
                />
            </div>
            <main className="flex-1 mx-[-20px]  items-center justify-center  w-full ">
                    <LandingPage/>
            </main>


        </div>
    )
}
export default Page
