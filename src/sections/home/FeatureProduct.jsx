import HomeFeatureCard from "../../components/HomeFeatureCard"

const FeatureProduct = () => {
    const productFeatureList=[
        {
            imgUrl: '../imgs/home/img_adv_1.png',
            title: '優異的使用體驗，POS 用起來就該這麼簡單',
            content: 'DineTech 提供更加簡單易用的介面和操作方式，讓店家和員工更加輕鬆地處理點餐、結帳等工作。'
        },
        {
            imgUrl: '../imgs/home/img_adv_2.png',
            title: '月費不到 1,000 元，小資也能使用 POS 系統',
            content: 'DineTech 採取月費制，單一費率即可同步連線您店裡的所有 iPad，不限營業額與收單筆數。'
        },
        {
            imgUrl: '../imgs/home/img_adv_3.png',
            title: '多樣化的管理功能，不只是個點餐系統',
            content: '除了點餐功能，我們還提供了一系列像是客戶管理、訂單管理、優惠券管理等功能，讓管理者輕鬆過好每一天。'
        },
        {
            imgUrl: '../imgs/home/img_adv_4.png',
            title: '全年無休的支援服務，不必在場也能解決問題',
            content: '我們有信心能夠全年無休地提供遠端技術支援，保證在您最需要的時候迅速解決各類突發狀況。'
        }
    ]
    return (
        <div className="padding-y px-1">
            <div className="flex flex-col justify-center items-center text-center">
                <button className="bg-primary-orange text-white rounded-[5px] py-2 px-3">
                    產品特色
                </button>
                <h1 className="text-2xl md:text-3.5xl font-bold py-4">
                    更快、也更簡單！經營一家餐廳最好幫手
                </h1>
                <h1 className="text-2xl md:text-3.5xl font-bold text-primary-orange">
                    是什麼讓我們如此與眾不同？
                </h1>
                <p className="text-gray-9f text-base  max-sm:text-sm w-2/5 max-sm:w-full leading-normal pt-4">DineTech 是一套現代化的雲端系統，除了提供簡單易用的介面和操作方式以外，我們也提供 24/7/365 全年無休的遠端技術支援服務，讓您用的放心！
                </p>
            </div>
            <div className="flex justify-between min-h-full max-sm:flex-col max-sm:items-center bg-primary-bg w-4/5  max-sm:w-[351px] mx-auto mt-4 rounded-2xl">
                <div className="p-3 md:p-6 flex flex-col justify-around">
                    {productFeatureList.map(product =>(
                        <HomeFeatureCard key={product.title} {...product}/>
                    ))}
                </div>
                <div>
                    <img src="../imgs/home/img_adv.png" alt="img bannder adv" className="rounded-r-xl max-sm:rounded-b-xl max-sm:rounded-tr-none max-sm:h-[400px] max-sm:w-[351px] h-[484px] object-cover self-stretch"/>
                </div>
            </div>
        </div>
    )
}

export default FeatureProduct