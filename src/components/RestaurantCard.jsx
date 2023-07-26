import { CDN_URL } from '../utils/constants';
const RestaurantCard = props => {
	const { resData } = props;
	const {
		cloudinaryImageId,
		name,
		cuisines,
		avgRating,
		deliveryTime,
		costForTwo
	} = resData?.data;
	return (
		<div className='m-4 p-4 w-64 rounded-md  hover:bg-white-400 hover:shadow-lg'>
			<img
				alt={cloudinaryImageId}
				src={CDN_URL + cloudinaryImageId}
				className='rounded-md'
			/>
			<h3 className='font-bold py-4 text-base'>{name}</h3>
			<h4>{cuisines.join(', ')}</h4>
			<h4>{avgRating}</h4>
			<h4>{deliveryTime}</h4>
			<h4>Rs. {costForTwo / 100} for Two persons</h4>
		</div>
	);
};

// Higher order component
//input - RestaurantCard => RestaurantCardPromoted

export const WithPromotedLabel = RestaurantCard => {
	return props => {
		return (
			<div>
				<label className='absolute bg-gray-600 text-white uppercase border-orange-400 rounded p-1 m-2 shadow-md'>
					Promoted
				</label>
				<RestaurantCard {...props} />
			</div>
		);
	};
};
export default RestaurantCard;
