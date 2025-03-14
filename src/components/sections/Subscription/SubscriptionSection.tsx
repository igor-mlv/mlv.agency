import { subscriptionSection } from "@/constants"
import Image from "next/image"

export default function SubscriptionSection() {
    return (
        <section id="subscription" className="relative flex flex-col mt-[150px] px-2">
            <div className="relative w-full flex justify-center items-center flex-col md:space-y-[16px] space-y-[100px] ">
                {subscriptionSection.map((card) => (
                    <div key={card.id} className="w-full flex md:flex-row flex-col items-center justify-between md:px-[24px] md:py-[16px] md:bg-[#FAF6F6] md:bg-opacity-[5%] md:rounded-[24px] md:space-y-0 space-y-[24px]">
                        <div className="flex justify-center items-center">
                            {/* <div className="flex items-baseline w-[180px]">
                                <p className="md:text-[2.5rem] text-[2rem]">{card.price}</p>
                                <p className="md:text-[1.125rem] text-[1rem] text-gray">{card.month}</p>
                            </div> */}
                            <h4 className="text-violet text-[1.5rem] md:ml-[24px]">{card.title}</h4>
                        </div>


                        <ul className="list-disc text-gray max-w-[610px]">
                            {card.list.map((listItem, index) => (
                                <li key={index} className="relative ml-[20px]">
                                    <p className="text-[18px] text-gray">{listItem}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <Image
                width={570}
                height={570}
                src="/assets/vectorCercle.png"
                alt="general vector for mlv web agency that makes custom websites for Canada and US"
                className="absolute md:top-[-100px] top-[50px] md:right-[-350px] right-[-250px] z-0 opacity-80" />
        </section>
    )
}