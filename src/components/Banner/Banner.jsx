import { useEffect, useState } from "react";
import axios from "../../axios";
import "./Banner.css";
import requests from "../../requests";
function Banner() {
	const [Movie, setMovie] = useState([]);
	useEffect(() => {
		async function fetchData() {
			const request = await axios.get(requests.fetchNetflixOriginals);
			setMovie(
				request.data.results[
					Math.floor(Math.random() * request.data.results.length)
				]
			);
			return request;
		}
		fetchData();
	}, []);

	// console.log(Movie);
	function truncate(str, n) {
		return str?.length > n ? str.substr(0, n - 1) + "..." : str;
	}
	return (
		<header
			className="banner"
			style={{
				backgroundImage: `url("https://image.tmdb.org/t/p/original/${Movie?.backdrop_path}")`,
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
		>
			<div className="banner__contents">
				<h2 className="banner__title">
					{Movie?.title || Movie?.name || Movie.original_name}
				</h2>
				<div className="banner__buttons">
					<button>Play</button>
					<button>My List</button>
				</div>
				<h1 className="banner__description">
					{truncate(Movie?.overview, 150)}
				</h1>
			</div>
			<div className="banner__fadeBottom" />
		</header>
	);
}

export default Banner;
