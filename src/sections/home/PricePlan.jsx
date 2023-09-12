import PricePlanCard from "../../components/PricePlanCard"

const PricePlan = () => {
    const pricePlanList=[
        {
            iconUrl:'../imgs/home/icon_person.png',
            plan:'個人方案',
            price:0,
            content:'限制營業額與收單筆數',
            featureList:[
                '10 GB 儲存空間',
                '最多可以與 3 位使用者共用',
            ],
            borderColor:'border-gray-d4',
        },
        {
            iconUrl:'../imgs/home/icon_price_level.png',
            plan:'標準方案',
            price:999,
            content:'部分限制營業額與收單筆數',
            featureList:[
                '100 GB 儲存空間',
                '諮詢 Google 專家',
                '最多可以與 5 位使用者共用',
                '額外成員優惠'
            ],
            borderColor:'border-primary-orange',
        },
        {
            iconUrl:'../imgs/home/icon_price_level_adv.png',
            plan:'進階方案',
            price:2490,
            content:'不限營業額與收單筆數',
            featureList:[
                '1 TB 儲存空間',
                '諮詢 Google 專家',
                '最多可以與 15 位使用者共用',
                '額外成員優惠'
            ],
            borderColor:'border-primary-blue',
        }
    ]
    
    return (
        <div className="padding-y">
            <div>
                <div className="flex flex-col justify-center items-center text-center">
                    <span className="bg-primary-orange text-white rounded-[5px] py-2 px-3">
                        價格方案
                    </span>
                    <h1 className="text-2xl md:text-3.5xl font-bold py-6">
                        您絕對負擔的起的價格！
                    </h1>
                    <p className="text-gray-9f text-base  max-sm:text-sm max-sm:px-8 leading-normal">不要讓昂貴的 POS 系統成為您開店的負擔！我們的系統以實惠的價格提供您所需的一切。
                    </p>
                </div>
                <div className="mt-8 flex justify-center items-center max-sm:flex-col gap-x-8">
                    {pricePlanList.map(priceItem =>(
                        <PricePlanCard key={priceItem.price} {...priceItem}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PricePlan