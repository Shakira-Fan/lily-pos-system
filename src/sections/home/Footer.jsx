const Footer = () => {
  return (
    <div className="text-gray-d4 text-sm">
      <div className="flex justify-between max-sm:flex-wrap">
        <div>
          <img src="imgs/home/img_logo_footer.png" alt="footer" />
        </div>
        <div>
          <ul className="flex gap-4 mt-4 max-sm:w-3/4 max-sm:flex-wrap ">
            <li className="hover:text-secondary-white">產品服務</li>
            <li className="hover:text-secondary-white">價格方案</li>
            <li className="hover:text-secondary-white">技術支援</li>
            <li className="hover:text-secondary-white">預約諮詢</li>
            <li className="hover:text-secondary-white">系統展示</li>
          </ul>
        </div>
      </div>
      <hr className="my-4" />
      <div className="flex justify-between max-sm:flex-col-reverse">
        <div>
          <div className="w-[440px] max-sm:w-full mb-2">
            DineTech
            以技術創新為基石，致力於為餐飲業者提供專業的技術支援和服務，協助餐飲業者提升經營效率和顧客體驗。
          </div>
          <span>2023 ® DineTech. All rights reserved.</span>
        </div>
        <div className="my-2">
          <ul>
            <li className="flex gap-2">
              <img
                src="imgs/home/icon_call.png"
                alt=""
                width={20}
                height={20}
                className="object-contain"
              />
              <span className="text-sm">07-222-5881</span>
            </li>
            <li className="flex gap-2">
              <img
                src="imgs/home/icon_mail.png"
                alt=""
                width={20}
                height={20}
                className="object-contain"
              />
              <span className="text-sm">north4@hexshool.project.com</span>
            </li>
            <li className="flex gap-2">
              <img
                src="imgs/home/icon_location.png"
                alt=""
                width={20}
                height={20}
                className="object-contain"
              />
              <span className="text-sm">高雄市鹽埕區七賢三路 123 號 2F</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
