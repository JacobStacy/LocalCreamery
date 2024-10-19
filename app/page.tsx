import Image from "next/image";
import { hennyPenny } from "./ui/fonts";
import { cormorant } from "./ui/fonts";

export default function LandingPage() {
    return (
        <main 
            className="
                h-screen 
                md:min-h-screen 
                relative 
                flex 
                flex-col 
                md:flex-row 
                overflow-y-scroll
                md:overflow-y-hidden
            "
            style={{backgroundColor: "#A76F6C"}}
        >
            <div className={`
                md:w-2/3
                w-full
                h-full
                flex
                flex-col
                justify-center 
                items-center
                text-white
                drop-shadow-md
                text-center
                relative
                py-6
        
            `}>
                <Image
                    src="/shop-image-upscaled.png"
                    alt="picture of inside the icecream shop"
                    width={2200}
                    height={1466}
                    className="
                        md:h-full
                        sm:h-auto
                        h-auto
                        md:w-auto
                        sm:w-full
                        w-full
                        aspect-[1100/733]
                        object-cover
                        absolute
                        top-0
                        left
                        bg-center
                        brightness-75
                    "
                />
                <div
                    className={`
                        sm:text-8xl
                        text-6xl
                        z-10 
                        ${hennyPenny.className}
                    `}
                >
                    Local <br/> Creamery
                </div>
                <div
                    className={`
                        text-xl
                        z-10    
                        ${cormorant.className}
                    `}
                >
                    3488 Main St, Detroit, MI
                </div>
            </div>
            <div 
                className={`
                    md:w-1/3
                    w-full
                    md:h-full
                    h-fit
                    z-10 
                    text-white 
                    flex 
                    flex-col
                    justify-between
                    drop-shadow-xl
                    ${cormorant.className}
                `}
                style={{backgroundColor: "#F1ACA6"}}
            >
                <div>
                    <Image
                        src="/text-divider-upscaled.png"
                        alt=""
                        aria-hidden
                        width={1030}
                        height={110}
                        className="
                            brightness-200
                            pt-6
                            mx-auto
                            w-3/4
                        "
                    />
                    <h1 className="
                        text-5xl 
                        w-full 
                        flex 
                        justify-center 
                        font-light
                        mt-3
                    ">
                        About
                    </h1>
                    <div className="
                        w-full 
                        flex 
                        justify-center 
                        px-7
                        text-center
                        font-light
                        mt-2
                        lg:text-2xl 
                        text-xl 
                    ">
                        Welcome to Local Creamery your go-to spot for delicious, 
                        handcrafted flavors since 1999! We take pride in using the freshest 
                        local ingredients to create delightful treats that bring smiles 
                        to all ages. Swing by to enjoy a scoop (or two!) and experience the 
                        sweet memories we've been making for over two decades!
                    </div>
                    <h1 className="
                        text-5xl 
                        w-full 
                        flex 
                        justify-center 
                        font-light
                        mt-4
                    ">
                        Open Hours
                    </h1>
                    <div className="
                        flex
                        w-full
                        justify-center 
                        text-center
                        font-light
                        mt-2
                        gap-4
                        lg:text-2xl 
                        text-xl
                    ">
                        <div className="">
                            <div>Monday</div>
                            <div>Tuesday</div>
                            <div>Wednesday</div>
                            <div>Thursday</div>
                            <div>Friday</div>
                            <div>Saturday</div>
                            <div>Sunday</div>
                        </div>
                        
                        <div className="">
                            <div>5pm - 10pm</div> {/* Monday */}
                            <div>5pm - 10pm</div> {/* Tuesday */}
                            <div>5pm - 10pm</div> {/* Wednesday */}
                            <div>5pm - 12am</div> {/* Thursday */}
                            <div>12pm - 12am</div> {/* Friday */}
                            <div>12pm - 12am</div> {/* Saturday */}
                            <div>3pm - 12am</div> {/* Sunday */}
                        </div>
                    </div>
                </div>

                <Image
                    src="/text-divider-upscaled.png"
                    alt=""
                    aria-hidden
                    width={1030}
                    height={110}
                    className="
                        brightness-200
                        mx-auto
                        w-3/4
                        rotate-180
                        mt-3
                        mb-6
                    "
                />
            </div>
            
        </main>
    );
}
