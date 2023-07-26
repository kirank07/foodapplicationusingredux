import { useState } from 'react';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useRestaurant from '../utils/useRestaurant';
import RestaurantCategory from './RestaurantCategory';

const RestaurantMenu = () => {
	const { resId } = useParams();
	const restaurantMenuInfo = useRestaurant(resId);
	const [showIndex, setShowIndex] = useState();
	if (restaurantMenuInfo === null) return <Shimmer />;

	const { name, cuisines, costForTwoMessage, avgRating } =
		restaurantMenuInfo?.cards[0]?.card.card.info;

	const { itemCards } =
		restaurantMenuInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
			?.card?.card;
	const categories =
		restaurantMenuInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
			c =>
				c.card?.card?.['@type'] ===
				'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
		);

	return (
		<div className='text-center'>
			<h1 className='font-bold uppercase my-7 text-lg'>{name}</h1>
			<p className='font-bold text-md'>
				{cuisines.join(', ')} - {costForTwoMessage}
			</p>

			{categories.map((category, index) => (
				//controlled component
				<RestaurantCategory
					key={category?.card?.card.title}
					category={category?.card?.card}
					showItems={index === showIndex ? true : false}
					setShowIndex={() => setShowIndex(index)}
				/>
			))}
		</div>
	);
};

export default RestaurantMenu;
