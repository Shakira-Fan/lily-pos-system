import { contactCityOptions, contactOperationOptions, contactPeriodOptions, contactReasonOptions, contactSourceOptions } from "../../data/contact"

const BookingForm = () => {
    return (
        <div className="padding grid grid-cols-3 gap-8 xl:mx-48 max-sm:text-center  max-sm:grid-cols-1 max-sm:w-full max-sm:gap-x-0">
            <div>
                <span className="bg-primary-orange py-2 px-3 text-white rounded-[5px]">
                    預約諮詢
                </span>
                <h1 className="text-2xl md:text-3.5xl font-bold py-6">
                    讓我們的諮詢團隊與您一起規劃出最合適的 POS 方案。
                </h1>
                <p className="text-gray-9f text-base  max-sm:text-sm w-full leading-normal">
                    我們的諮詢團隊不僅在 POS 系統的實施和設置方面經驗豐富，更重要的是，他們深刻理解餐飲行業的營運和管理，能夠為您提供最有價值的建議和支援。
                </p>
            </div>
            <div className="bg-secondary-white p-12 col-span-2 max-sm:p-4">
                <form action="" className="grid grid-cols-2 gap-4">
                    <div className="max-sm:col-span-2 flex flex-col text-start">
                        <label htmlFor="" className="mb-1">店家名稱<span className="text-secondary-red">*</span></label>
                        <input type="text" className="text-xl border border-gray-d4 rounded-[5px] py-[5px]" />
                    </div>
                    <div className="max-sm:col-span-2 flex flex-col text-start">
                        <label htmlFor="" className="mb-1">Email<span className="text-secondary-red">*</span></label>
                        <input type="text" className="text-xl border border-gray-d4 rounded-[5px] py-[5px]" />
                    </div>
                    <div className="max-sm:col-span-2 flex flex-col text-start">
                        <label htmlFor="" className="mb-1">聯絡人<span className="text-secondary-red">*</span></label>
                        <input type="text" className="text-xl border border-gray-d4 rounded-[5px] py-[5px]" />
                    </div>
                    <div className="max-sm:col-span-2 flex flex-col text-start">
                        <label htmlFor="" className="mb-1">聯絡電話<span className="text-secondary-red">*</span></label>
                        <input type="text" className="text-xl border border-gray-d4 rounded-[5px] py-[5px]" />
                    </div>
                    <div className="max-sm:col-span-2 flex flex-col text-start">
                        <label htmlFor="" className="mb-1">所在縣市<span className="text-secondary-red">*</span></label>
                        <select name="city" id="city" className="text-xl border border-gray-d4 rounded-[5px] py-[5px]">
                            {contactCityOptions.map(item => (
                                <option key={item.name} name={item.name} value={item.value}>{item.value}</option>
                            ))}

                        </select>
                    </div>
                    <div className="max-sm:col-span-2 flex flex-col text-start">
                        <label htmlFor="" className="mb-1">希望聯繫時段<span className="text-secondary-red">*</span></label>
                        <select name="time" id="time" className="text-xl border border-gray-d4 rounded-[5px] py-[5px]">
                            {contactPeriodOptions.map(item => (
                                <option key={item.value} value={item.value}>{item.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="max-sm:col-span-2 flex flex-col text-start">
                        <label htmlFor="" className="mb-1">營業狀態<span className="text-secondary-red">*</span></label>
                        <div className="flex justify-around items-start">
                            {contactOperationOptions.map((item) => (
                                <div key={item.value}>
                                    <input type="radio" id={item.value} name={item.name} value={item.value} />
                                    <label htmlFor={item.label}>{item.label}</label>
                                </div>
                            ))}
                        </div>

                    </div>
                    <div className="max-sm:col-span-2 flex flex-col text-start">
                        <label htmlFor="" className="mb-1">從何處知道我們<span className="text-secondary-red">*</span></label>
                        <select name="whereKnowUs" id="whereKnowUs" className="text-xl border border-gray-d4 rounded-[5px] py-[5px]">
                            {contactSourceOptions.map(item => (
                                <option key={item.name} name={item.name} value={item.value}>{item.value}</option>
                            ))}
                        </select>
                    </div>
                    <div className="col-span-2 flex flex-col text-start">
                        <label htmlFor="" className="mb-1">詢問內容（可複選）<span className="text-secondary-red">*</span></label>
                        <div className="flex flex-wrap">
                            {contactReasonOptions.map(item => (
                                <div key={item.value} className="py-1 ml-1">
                                    <input type="checkbox" id="scales" name={item.name} value={item.value} className="mr-1 checked:text-primary-orange checked:ring-transparent focus:ring-transparent focus:border-gray-9f checked:bg-primary-orange" />
                                    <label htmlFor="scales">{item.label}</label>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-span-2 flex flex-col text-start">
                        <label htmlFor="" className="mb-1">其他需求<span className="text-secondary-red">*</span></label>
                        <textarea
                            rows="4"
                            name="other"
                            placeholder="請詳盡說明您的需求"
                            className="block px-4 py-2 w-full text-gray-66 placeholder:text-gray-d4 border border-gray-d4 rounded-md focus:border-secondary-yellow"
                        ></textarea>
                    </div>
                    <div className="col-span-2 flex justify-end">
                        <button
                            type="submit"
                            className="md:w-1/2 w-full py-2.5 bg-primary-orange text-secondary-white rounded-md hover:opacity-90 ease-in duration-50"
                        >
                            送出表單
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default BookingForm