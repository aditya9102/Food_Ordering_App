import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) return <Shimmer />;

  const {
    name,
    cuisines,
    costForTwoMessage,
    sla: { deliveryTime },
  } = resInfo?.cards[1]?.groupedCard.cardGroupMap?.RESTAURANT?.cards[0]?.card
    ?.card?.info;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  // Access Issue
  // const { itemCards } =
  //   resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  return (
    <div>
      <div className="text-center">
        <h1 className="font-bold my-6 text-2xl">{name}</h1>
        <h3 className="font-bold text-lg">{cuisines.join(", ")}</h3>
        <p className="font-bold text-lg">{costForTwoMessage}</p>
        <p className="font-bold text-lg">{deliveryTime} minutes</p>

        {/* categories accordians */}
        {/* {categories.map((category, index) => (
          // controlled component
          <RestaurantCategory
            key={category?.card?.card.title}
            data={category?.card?.card}
            showItems={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
            dummy={dummy}
          />
        ))} */}
      </div>
    </div>
  );
};

export default RestaurantMenu;
