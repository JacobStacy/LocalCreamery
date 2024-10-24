
import { hennyPenny } from "@/app/ui/fonts";
import { cormorant } from "@/app/ui/fonts";



export default function MenuLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <>
            <header
                className={`
                    flex
                    justify-center
                    items-center
                    w-full
                    h-14
                    bg-customPink
                    text-white
                    text-3xl
                    ${hennyPenny.className}
                `}
            >
                Local Creamery
            </header>
            <main
                className={`
                    bg-customPinkOff
                    min-h-screen
                    ${cormorant.className}
                `}
            >
                {children}
            </main>
            <footer>

            </footer>
        </>
    )
}