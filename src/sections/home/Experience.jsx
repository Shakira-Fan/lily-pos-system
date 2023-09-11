const Experience = () => {
  return (
    <div className="w-4/5 mx-auto max-sm:text-center max-sm:w-[351px]">
      <span className="bg-primary-orange px-3 py-2 text-white rounded-[5px]">
        產品體驗
      </span>
      <h1 className="text-2xl md:text-3.5xl font-bold py-6">
        優異的使用體驗
      </h1>
      <p className="text-gray-9f text-base  max-sm:text-sm w-3/4 max-sm:w-full leading-normal">
        POS 系統不應該是讓你頭痛的問題，而是幫助你提升業務的工具。我們的系統以使用者為中心，設計簡單易用的界面，讓你不用花費太多時間學習就能輕鬆掌握。
      </p>
      <div className="mt-6 flex gap-4 max-sm:flex-col-reverse">
        <img src="../imgs/home/img_doing.png" alt="" className="max-sm:h-[400px] object-cover rounded-2xl"/>
        <div className="flex flex-col justify-evenly p-6 bg-gray-f7 rounded-2xl">
          <div className="max-sm:text-center mb-4">
            <h1 className="text-2xl text-gray-66 mb-2">
              我們引以為傲的點餐流程！
            </h1>
            <p className="text-gray-9f w-3/5 max-sm:w-full">
              系統提供簡單易懂的點餐流程，讓您的員工快速上手，大幅提升點餐效率。快速、準確、方便，每一位客人都能夠享受到無煩惱的用餐體驗。
            </p>
          </div>
          <img src="../imgs/home/img_order.svg" alt=""/>
        </div>
      </div>
    </div>
  )
}

export default Experience