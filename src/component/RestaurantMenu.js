import { useState, useEffect } from "react";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

// import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  });

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setResInfo(json.data);
  };

  // const resInfo = useRestaurantMenu(resId);

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
      <div>
        <h1>{name}</h1>
        <h3>{cuisines.join(", ")}</h3>
        <p>{costForTwoMessage}</p>
        <p>{deliveryTime} minutes</p>
      </div>
    </div>
  );
};

export default RestaurantMenu;
