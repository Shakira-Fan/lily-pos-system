const PricePlanCard = ({ iconUrl, plan, price, content, featureList, borderColor }) => {
    return (
        <div className={`bg-secondary-white ${borderColor} border-[3px] w-[354px] max-sm:w-[300px] h-[507px] max-sm:h-[388px] rounded-3xl ${price === 999 ? 'my-8 shadow-xl' : 'mt-16'} max-sm:mt-0`}>
            <div className="pt-10 max-sm:pt-6 px-9 max-sm:px-[26px]">
                <div className="flex justify-center items-center gap-4 max-sm:gap-3">
                    <img src={iconUrl} alt="" />
                    <h5 className="font-bold text-lg max-sm:text-base">{plan}</h5>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <p className="text-primary-orange text-4xl pb-2">
                        <span className="text-2xl"> $ </span>
                        {price}
                        {price !== 0 && <span className="text-base text-black"> / 月</span>}
                    </p>
                    <p className="text-gray-9f max-sm:text-sm">{content}</p>
                </div>
            </div>
            <hr className="text-gray-9f p-0 mt-4 max-sm:mt-2" />
            <div className="py-10 max-sm:py-6 px-9 max-sm:px-[26px]">
                <h1>DineTech 提供以下功能：</h1>
                <div className="h-[156px] max-sm:h-[120px]">
                    {featureList.map((item, index) => (
                        <div className="flex gap-2 my-4 max-sm:my-1" key={item + index}>
                            <img src="../imgs/home/icon_check.png" alt="" />
                            <p className="font-bold max-sm:text-sm">{item}</p>
                        </div>
                    )
                    )}
                </div>
                <div>
                    <button className="bg-gray-e9 py-3 w-[282px] max-sm:w-[252px] rounded-[5px] hover:bg-secondary-yellow">選擇方案</button>
                </div>
            </div>
        </div>
    )
}

export default PricePlanCard