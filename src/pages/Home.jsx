const Home = () => {
  return (
    <div>
      <header className='padding-x py-8 absolute z-10 w-full'>
        <nav className="flex justify-between items-center max-container">
          <div>
            <img src="../icons/img_logo.svg" alt="" />
          </div>
          <div>
            <ul className="flex-1 flex justify-center items-center gap-8 max-md:hidden">
              <li>產品特色</li>
              <li>價格方案</li>
              <li>技術支援</li>
              <li>預約諮詢</li>
              <li>系統展示</li>
            </ul>
          </div>
          <div className="hidden max-md:block">
            <img src="../imgs/hamburger.png" alt="" />
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Home;
