import HomeFeatureCard from "../../components/HomeFeatureCard";

const PowerFeture = () => {
  const productFeatureList = [
    {
      imgUrl: "../imgs/home/img_number_1.png",
      title: "資訊彙整，多重顯示 ",
      content:
        "隨時都可快速瀏覽每日訂候位列表、桌位圖以及顧客資訊，訂位從各平台串連，皆多重顯示，一覽無遺。",
    },
    {
      imgUrl: "../imgs/home/img_number_2.png",
      title: "⾃動確認訂位",
      content:
        "顧客用餐前，系統再次自動寄送簡訊進行確認，降低人為疏失，訂位管理更有效率。",
    },
    {
      imgUrl: "../imgs/home/img_number_3.png",
      title: "顧客資料庫",
      content:
        "餐廳可隨時調閱顧客跨餐廳、跨分店消費記錄，每筆訂候位都會存入後台，建立餐飲業龐大資料庫。",
    },
    {
      imgUrl: "../imgs/home/img_number_4.png",
      title: "記錄顧客喜好",
      content:
        "這位客人不吃辣？這位客人喜歡坐室外？DineTech 全部幫你記錄起來，餐廳可自訂客人喜好，往後對回頭客的新進訂候位就可以貼心應對！",
    },
    {
      imgUrl: "../imgs/home/img_number_5.png",
      title: "統計數據管理",
      content:
        "針對不同顧客，DineTech 提供輔助行銷、數據收集、統計報表等顧客關係管理工具，增加餐廳好感度，有效提高顧客回頭率。",
    },
  ];

  return (
    <div className="w-4/5 mx-auto max-sm:text-center max-sm:w-[351px]">
      <span className="bg-primary-orange px-3 py-2 text-white rounded-[5px]">
        強大功能
      </span>
      <h1 className="text-2xl md:text-3.5xl font-bold py-6">優異的使用體驗</h1>
      <div className="mt-2 flex gap-4 max-sm:flex-col-reverse">
        <img
          src="imgs/home/img_power_feature.png"
          alt=""
          className="max-sm:h-[400px] object-cover rounded-2xl"
        />
        <div className="flex flex-col justify-evenly p-6 bg-gray-f7 rounded-2xl">
          {productFeatureList.map((product) => (
            <HomeFeatureCard key={product.title} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PowerFeture;
