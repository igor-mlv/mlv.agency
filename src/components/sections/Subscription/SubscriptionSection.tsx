import { subscriptionSection } from "@/constants"

export default function SubscriptionSection() {
    return (
        <section id="subscription" className="relative flex flex-col mt-[150px] px-2">
            <div className="relative mt-[60px] w-full flex justify-center items-center flex-col md:space-y-[16px] space-y-[100px] ">
                {subscriptionSection.map((card) => (
                    <div key={card.id} className="w-full flex md:flex-row flex-col items-center justify-between md:px-[24px] md:py-[16px] md:bg-[#FAF6F6] md:bg-opacity-[5%] md:rounded-[24px] md:space-y-0 space-y-[24px]">
                        <div className="flex justify-center items-center">
                            <div className="flex items-baseline w-[180px]">
                                <p className="md:text-[2.5rem] text-[2rem]">{card.price}</p>
                                <p className="md:text-[1.125rem] text-[1rem] text-gray">{card.month}</p>
                            </div>
                            <h4 className="text-violet text-[1.5rem] md:ml-[24px] md:max-w-max max-w-[190px]">{card.title}</h4>
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

            <div className="absolute w-[470px] h-[470px] top-[-100px] right-[-350px] opacity-20 bg-violet rounded-full blur-[70px] z-0" />
        </section>
    )
}