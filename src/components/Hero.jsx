import imageMockUps from "../assets/images/image-mockups.png"
import Button from "./Button"
export default function Hero() {
    return (
        <section className="flex flex-col-reverse items-center md:flex-row mt-4">
            <div className=" w-full md:w-1/2 flex flex-col text-left items-center   mt-10">
                <h1 className="heading text-4xl">Next generation digital banking</h1>
                <p className="">Take your financial life online. Your Easybank
                    account will be a one-stop-shop for spending, saving, budgeting,
                    investing, and much more.
                </p>
                <Button />
            </div>
            <div className="max-h-screen">
                <img src={imageMockUps} alt="background image mobile" height={500} width={500} className="md:absolute -top-10 -right-28 z-10" />
            </div>            
        </section>
    )

}