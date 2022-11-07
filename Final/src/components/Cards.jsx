const PriceData = () => {
	var maxPrice = 15;
	var randomPrice = Math.floor((Math.random() * maxPrice) + 1).toFixed(2);

  return (
	<>
	£{randomPrice}
	</>
  );
};

const StockData = () => {
	var maxStock = 5;
	var randomStock = Math.floor((Math.random() * maxStock) + 1).toFixed(0);

  return (
	<>
	{randomStock}
	</>
  );
};

const BuyBtn = () => {
	const btn = <button className="rating-value">BUY</button>;

	return (
	<>
	{btn}
	</>
  );	
};

const Card = ({movie}) => {
	let img_path = 'https://image.tmdb.org/t/p/w500'
	return (
		<div>
			<div className="movie-card" >
				<img src={img_path + movie.poster_path} alt="" className="poster"></img>
				<div className="movie-details">
					<div className="box">
						<h4 className="title">{movie.title}</h4>
						<h4 className="release">{movie.release_date}</h4>
						<h4 className="price"><PriceData/></h4>
						<h4 className="stock"><StockData/></h4>
						<h4 className="release">{movie.genres_name}</h4>
						<div className="rating">
							<span className="rating-value"><BuyBtn/></span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
export default Card
