/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react'
import Cards from './Cards'
import Pagination from './Pagination'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const API_key = '&api_key=84743ee32095533fcd630a3079c2d3f0',
	base_url = 'https://api.themoviedb.org/3'
let url = `${base_url}/discover/movie?sort_by=popularity.desc${API_key}`
let categories = ['Popular', 'Sci-Fi', 'Fantasy', 'Drama', 'Comedy', 'Animation', 'Horror', 'Old2New', 'New2Old']

const Main = () => {
	const [movieData, setData] = useState([])
	const [url_set, setUrl] = useState(url)
	const [search, setSearch] = useState()
	const [sideNavOpen, setSideNavOpen] = useState(false)
	useEffect(() => {
		fetch(url_set)
			.then((res) => res.json())
			.then((data) => {
				setData(data.results)
			})
	}, [url_set])

	const getData = (movieType) => {
		// eslint-disable-next-line default-case
		switch (movieType) {
			case 'Popular':
				url = `${base_url}/discover/movie?sort_by=popularity.desc${API_key}`
				break
			case 'Fantasy':
				url = `${base_url}/discover/movie?with_genres=14${API_key}`
				break
			case 'Sci-Fi':
				url = `${base_url}/discover/movie?with_genres=878${API_key}`
				break
			case 'Drama':
				url = `${base_url}/discover/movie?with_genres=18${API_key}`
				break
			case 'Comedy':
				url = `${base_url}/discover/movie?with_genres=35${API_key}`
				break
			case 'Animation':
				url = `${base_url}/discover/movie?with_genres=16${API_key}`
				break
			case 'Horror':
				url = `${base_url}/discover/movie?with_genres=27${API_key}`
				break
			case 'Old2New':
				url = `${base_url}/discover/movie?primary_release_year=2022&sort_by=release_date.desc&sort_by=popularity.desc${API_key}`
				break
			case 'New2Old':
				url = `${base_url}/discover/movie?primary_release_year=2022&sort_by=release_date.asc&sort_by=popularity.desc${API_key}`
				break	
		}
		setUrl(url)
	}
	
	const searchMovie = (e) => {
		if (e.key === 'Enter') {
			e.preventDefault()
			url = `${base_url}/search/movie?api_key=db95773a7fb212ba790d71f6adac0e7e&query=${search}`
			setUrl(url)
			setSearch('')
		}
	}

	const toggleSideMenu = () => {
		setSideNavOpen(!sideNavOpen)
	}



	return (
		<>
			<div className="header">
				<div className="logo">Movies R Us</div>
				<nav>
					<div className={sideNavOpen ? 'wrapper-menu open' : 'wrapper-menu'} id="toggle-menu" onClick={toggleSideMenu}>
						<div className="line-menu half start"></div>
						<div className="line-menu"></div>
						<div className="line-menu half end"></div>
					</div>
					<div className={sideNavOpen ? 'nav' : 'nav hide'} id="side-nav">
						<ul>
							{categories.map((value, pos) => {
								return (
									<li>
										<a
											href="#"
											key={pos}
											name={value}
											onClick={(e) => {
												getData(e.target.name)
											}}
										>
											{value}
										</a>
									</li>
								)
							})}
						</ul>
					</div>
					<ul className="navbar">
						{categories.map((value, pos) => {
							return (
								<li>
									<a
										href="#"
										key={pos}
										name={value}
										onClick={(e) => {
											getData(e.target.name)
										}}
									>
										{value}
									</a>
								</li>
							)
						})}
					</ul>
				</nav>
				<div className='cart'>
				<FontAwesomeIcon icon={faCartShopping} />
				</div>
				<form>
					<div className="search-btn">
						<input
							type="text"
							placeholder="Enter Movie Name"
							className="inputText"
							onChange={(e) => {
								setSearch(e.target.value)
							}}
							value={search}
							onKeyPress={searchMovie}
						></input>
					</div>
				</form>
			</div>
			<div className="container">
				{movieData.length === 0 ? (
					<div className="notfound">No Matching Movies Found!</div>
				) : (
					movieData.map((res, pos) => {
						return <Cards movie={res} key={pos} />
					})
				)}
			</div>
			<div className="pagination">
				<Pagination/>
			</div>
		</>
	)
}
export default Main
