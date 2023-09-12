const PricePlanCard = ({ iconUrl, plan, price, content, featureList,borderColor }) => {
    return (
        <div className={`bg-white ${borderColor} border-primary-orange border-[3px] w-[354px] rounded-3xl py-10 px-9 ${price=== 999 ?'my-8 shadow-xl' :'mt-16'}`}>
            <div className="flex justify-center items-center">
                <img src={iconUrl} alt="" />
                <h5 className="font-bold text-lg">{plan}</h5>
            </div>
            <div className="flex flex-col justify-center items-center">
                <p className="text-primary-orange text-4xl pb-2">
                    <span className="text-2xl"> $ </span>
                    {price}
                    {price !== 0 && <span className="text-base text-black"> / 月</span>}
                </p>
                <p className="text-gray-9f">{content}</p>
            </div>
            <div className="mt-6 pt-6">
                <h1>DineTech 提供以下功能：</h1>
                <div className="min-h-[168px]">
                    {featureList.map((item, index) => (
                        <div className="flex gap-2 my-4" key={item + index}>
                            <img src="../imgs/home/icon_check.png" alt="" />
                            <p>{item}</p>
                        </div>
                    )
                    )}
                </div>
                <button className="bg-gray-e9 py-3 w-[282px] rounded-[5px] hover:bg-secondary-yellow">選擇方案</button>
            </div>
        </div>
    )
}

export default PricePlanCard