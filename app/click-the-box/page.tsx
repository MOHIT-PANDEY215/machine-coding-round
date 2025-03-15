import BoxContainer from "../components/click-the-box/BoxContainer";

export default function page(){

    return(
        <>
        <div className="flex flex-col gap-8 items-center w-full min-h-screen py-10">
           <h2 className="text-xl"> Click The box</h2>
           <BoxContainer/>
        </div>
        </>
    )
}