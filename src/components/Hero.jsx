import imageMockUps from "../assets/images/image-mockups.png"
import Button from "./Button"
export default function Hero() {
    return (
        <section className="flex flex-col-reverse items-center md:flex-row max-w-full overflow-x-hidden mt-4">
            <div className=" w-full md:w-1/2 flex flex-col text-left items-center md:p-20  mt-20 p-5">
                <h1 className="heading text-4xl">Next generation digital banking</h1>
                <p className="my-3">Take your financial life online. Your Easybank
                    account will be a one-stop-shop for spending, saving, budgeting,
                    investing, and much more.
                </p>
                <Button />
            </div>
            <div className="intro-image min-h-72 md:h-full">
                <img src={imageMockUps} alt="background image mobile" height={500} width={500} className=" absolute -top-20 md:-top-5 right-0 md:-right-28 z-0" />
            </div>            
        </section>
    )

}