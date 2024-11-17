import { Link } from "react-router-dom";
import '../App.css';

export default function MovieInfo() {
    return (
            <div className="movie-info-container">
                <div className="back-btn">
                    <Link to="/" className='movie-page'>
                        <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="24.5" cy="24.5" r="24.5" fill="#D43128"/>
                            <path d="M10.5858 23.5858C9.80474 24.3668 9.80474 25.6332 10.5858 26.4142L23.3137 39.1421C24.0948 39.9232 25.3611 39.9232 26.1421 39.1421C26.9232 38.3611 26.9232 37.0948 26.1421 36.3137L14.8284 25L26.1421 13.6863C26.9232 12.9052 26.9232 11.6389 26.1421 10.8579C25.3611 10.0768 24.0948 10.0768 23.3137 10.8579L10.5858 23.5858ZM36 27C37.1046 27 38 26.1046 38 25C38 23.8954 37.1046 23 36 23V27ZM12 27H36V23H12V27Z" fill="white"/>
                        </svg>
                    </Link>
                </div>
                <div className="image-container">
                    <img 
                        src="https://m.media-amazon.com/images/I/71eOCcHVtNL._AC_UF1000,1000_QL80_.jpg" 
                        alt="Princess Mononoke poster"
                        className="movie-poster"
                    />
                    <div className="gradient-overlay"></div>
                </div>
                <div>
                    <div>
                        <h3 className="movie-title-1">Princess</h3>
                        <h3 className="movie-title-2">Mononoke</h3>
                        <p className="category">Action | Fantasy Amine | 1997 ·
                        2h 13m</p>
                        <svg className="play-btn" width="72" height="71" viewBox="0 0 72 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_d_78_323)">
                            <circle cx="31.5" cy="31.5" r="31.5" fill="black"/>
                            <path d="M25.6049 18.1501C24.8963 17.7302 24 18.241 24 19.0646V43.6806C24 44.5043 24.8963 45.0151 25.6049 44.5952L46.3748 32.2872C47.0694 31.8754 47.0694 30.8698 46.3748 30.4581L25.6049 18.1501Z" fill="#D43128"/>
                            </g>
                            <defs>
                            <filter id="filter0_d_78_323" x="0" y="0" width="72" height="71" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dx="5" dy="4"/>
                            <feGaussianBlur stdDeviation="2"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_78_323"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_78_323" result="shape"/>
                            </filter>
                            </defs>
                        </svg>
                    </div>
                    <div className="rating-container">
                        <p>IMDb Rating</p>
                        <p className="rating">⭐ 8.3/10</p>
                    </div>
                    <div className="line"></div>
                    <p className="description">On a journey to find the cure for a Tatarigami's curse, Ashitaka finds himself in the middle of a war between the forest gods and Tatara, a mining colony. In this quest he also meets San, the Mononoke Hime.</p>
                    <div className="line-2"></div>
                </div>
                <h3 className="characters-section">Characters</h3>
                <div className="characters">
                    <img 
                        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4505aab9-e0fb-45d6-88dd-9f026f3842c5/d4k3023-a75bc414-97de-46e4-84a6-2cd4cacebf5c.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQ1MDVhYWI5LWUwZmItNDVkNi04OGRkLTlmMDI2ZjM4NDJjNVwvZDRrMzAyMy1hNzViYzQxNC05N2RlLTQ2ZTQtODRhNi0yY2Q0Y2FjZWJmNWMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0._-A0KDfzfGEGp-tQKyReGuPRaNO52vrgNptMrRtBpoU" 
                        alt="Hime image"
                        className="character-1"
                    />
                    <img 
                        src="https://m.media-amazon.com/images/M/MV5BM2I3NWY2OWUtY2ZkOC00OGE5LWExOGMtNjY0YTM2M2RjMjQyXkEyXkFqcGc@._V1_.jpg" 
                        alt="Ashitaks image"
                        className="character-2"
                    />
                    <img 
                        src="https://preview.redd.it/kdbg0kt07gk91.png?width=922&format=png&auto=webp&s=84dfa4847985f1e9cade06fc751861f2957a6673" 
                        alt="Forest spirit image"
                        className="character-3"
                    />
                    <div className="overlay"></div>
                </div>
            </div>
    )
}