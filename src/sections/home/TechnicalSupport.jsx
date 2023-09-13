const TechnicalSupport = () => {
    return (
        <div className="py-12 px-2">
            <div className="flex flex-col justify-center items-center text-center">
                <span className="bg-primary-orange text-white rounded-[5px] py-2 px-3">
                    技術支援
                </span>
                <h1 className="text-2xl md:text-3.5xl font-bold pt-4">
                    全年無休的技術服務
                </h1>
                <p className="text-sm md:text-base text-gray-9f my-2">
                    <span className="md:block">
                        我們的 POS 系統不僅價格實惠，還具備全年無休的技術支援服務。當您遇到任何問題時，
                    </span>
                    <span className="md:block">
                        我們的專業團隊將隨時待命，為您提供快速而有效的幫助。無論是節假日還是晚上，
                    </span>
                    <span className="md:block">我們都會全力以赴，確保您的生意不會因技術問題而受到影響。</span>
                </p>
            </div>
            <div className="flex justify-center max-sm:items-center mx-auto mt-4 px-16">
                <img src="../imgs/home/img_tech.png" alt="" className="object-cover rounded-2xl w-[1180px] h-[484px] max-sm:w-[351px] max-sm:h-[400px]" />
            </div>
        </div>
    )
}

export default TechnicalSupport