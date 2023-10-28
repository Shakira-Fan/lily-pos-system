const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full bg-primary-bg">
      <nav className="flex justify-between items-center max-container">
        <div>
          <img src="icons/img_logo.svg" alt="" />
        </div>
        <div>
          <ul className="flex-1 flex justify-center items-center gap-8 max-md:hidden">
            <li>產品特色</li>
            <li>價格方案</li>
            <li>技術支援</li>
            <li>
              <button
                type="button"
                className="flex justify-center items-center gap-2 bg-gray-e9 rounded-[5px] px-4 py-2"
              >
                <img src="icons/ic_message.png" alt="" />
                預約諮詢
              </button>
            </li>
            <li>
              <button
                type="button"
                className="flex justify-center items-center gap-2 bg-primary-orange text-white rounded-[5px] px-4 py-2"
              >
                <img src="icons/ic_display_white.png" alt="" />
                系統展示
              </button>
            </li>
          </ul>
        </div>
        <div className="hidden max-md:block">
          <img src="imgs/home/hamburger.png" alt="" />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
