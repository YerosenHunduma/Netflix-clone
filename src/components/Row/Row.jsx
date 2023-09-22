import { useState, useEffect } from "react";
import axios from "../../axios";
import "./Row.css";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original/";
function Row(props) {
	const { title, fetchUrl, isLargeRow } = props;

	const [Movies, setMovies] = useState([]);
	const [trailerUrl, setTrailerUrl] = useState("");

	useEffect(() => {
		async function fetchData() {
			const request = await axios.get(fetchUrl);
			// console.log(request);
			setMovies(request.data.results);
			return request;
		}
		fetchData();
	}, [fetchUrl]);
	// console.log(Movies);
	const opts = {
		heighr: "390",
		width: "100%",
		playerVars: {
			autoplay: 1,
		},
	};

	const handleClick = (m) => {
		if (trailerUrl) {
			setTrailerUrl("");
		} else {
			movieTrailer(m?.original_name || m?.title || "")
				.then((url) => {
					const urlParams = new URLSearchParams(new URL(url).search);
					setTrailerUrl(urlParams.get("v"));
				})
				.catch((error) => console.log(error));
		}
	};
	return (
		<div className="row">
			<h2>{title} </h2>
			<div className="row__posters">
				{Movies.map((m) => (
					<img
						key={m.id}
						onClick={() => handleClick(m)}
						className={`row__poster ${isLargeRow && "row__posterLarge"}`}
						src={`${base_url}${isLargeRow ? m.poster_path : m.backdrop_path}`}
						alt={m.name}
					/>
				))}
			</div>
			<div style={{ padding: "40px" }}>
				{trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
			</div>
		</div>
	);
}

export default Row;
