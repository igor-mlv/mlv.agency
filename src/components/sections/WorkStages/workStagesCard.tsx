export default function workStagesCard(item: { id: string, title: string, list: string[] }) {
    return (
        <div key={item.id} className="flex flex-col justify-between md:w-[412px] w-full md:h-[420px] h-auto px-[24px] md:py-[40px] py-[24px] md:space-y-[0px] space-y-[16px] bg-[#FAF6F6] bg-opacity-[5%] rounded-[24px] border-gray border-[2px] border-opacity-0 hover:border-opacity-100 transition">
            <div className="w-full space-y-[8px]">
                <h6>{item.id}</h6>
                <h4 className="w-[262px]">{item.title}</h4>
            </div>

            <div className="w-full">
                <ul className="list-disc text-gray">
                    {item.list.map((listItem, index) => (
                        <li key={index} className="relative ml-[20px]">
                            <p className="text-[18px] text-gray">{listItem}</p>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    )
}