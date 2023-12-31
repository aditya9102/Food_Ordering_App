import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/search/v3?lat=18.619974&lng=73.911863&str=McDonald%27s&trackingId=3f1d6240-ad7b-0fb9-d18a-ddfbd00ef0f8&submitAction=ENTER&queryUniqueId=44c2ed4f-4a24-0c08-84c0-11a3622eed6e"
    );
    const json = await data.json();

    console.log(json);
    setResInfo(json.data);
  };

  if (resInfo === null) return <Shimmer />;

  const {
    name,
    cuisines,
    costForTwoMessage,
    sla: { deliveryTime },
  } = resInfo?.cards[1]?.groupedCard.cardGroupMap?.RESTAURANT?.cards[0]?.card
    ?.card?.info;

  return (
    <div>
      <h1>{name}</h1>
      <h3>{cuisines.join(", ")}</h3>
      <p>{costForTwoMessage}</p>
      <p>{deliveryTime} minutes</p>
    </div>
  );
};
export default RestaurantMenu;
