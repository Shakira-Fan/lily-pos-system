const Home = () => {
  return (
    <div className="md:container-lg mx-auto">
      <header>
        <nav>
          <div>
            <img src="../icons/img_logo.svg" alt="" />
          </div>
          <div>
            <ul className="flex justify-end space-x-8">
              <li>產品特色</li>
              <li>價格方案</li>
              <li>技術支援</li>
              <li>預約諮詢</li>
              <li>系統展示</li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Home;
