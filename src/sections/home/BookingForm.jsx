const BookingForm = () => {
    return (
        <div className="padding w-4/5 mx-auto grid grid-cols-3 gap-4 max-sm:text-center max-sm:w-[351px]">
            <div>
                <span className="bg-primary-orange px-3 py-2 text-white rounded-[5px]">
                    產品體驗
                </span>
                <h1 className="text-2xl md:text-3.5xl font-bold py-6">
                    優異的使用體驗
                </h1>
                <p className="text-gray-9f text-base  max-sm:text-sm w-full leading-normal">
                    POS 系統不應該是讓你頭痛的問題，而是幫助你提升業務的工具。我們的系統以使用者為中心，設計簡單易用的界面，讓你不用花費太多時間學習就能輕鬆掌握。
                </p>
            </div>
            <div className="bg-secondary-white p-12 col-span-2">
                <form action="" className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col">
                        <label htmlFor="">店家名稱<span className="text-secondary-red">*</span></label>
                        <input type="text" className="border border-gray-d4 rounded-[5px]" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="">店家名稱<span className="text-secondary-red">*</span></label>
                        <input type="text" className="border border-gray-d4 rounded-[5px]" />
                    </div>
                    <div>
                        <label htmlFor="">店家名稱<span className="text-secondary-red">*</span></label>
                        <input type="text" className="border border-gray-d4 rounded-[5px]" />
                    </div>
                    <div>
                        <label htmlFor="">店家名稱<span className="text-secondary-red">*</span></label>
                        <input type="text" className="border border-gray-d4 rounded-[5px]" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default BookingForm