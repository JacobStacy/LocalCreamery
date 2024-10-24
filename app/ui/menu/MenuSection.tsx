




export default function MenuSection({
    header,
} : {
    header:string,
}) {

    return(
        <div className="
            w-8/12
            mx-auto
        ">
            <h1 className="
                text-3xl
                text-white
                font-black
                mt-3
            ">
                {header}
            </h1>
            <div>
            </div>
        </div>
    )
}