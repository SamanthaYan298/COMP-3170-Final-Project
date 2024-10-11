import { Link } from "react-router-dom";
import '../App.css';

export default function MovieInfo() {
    return (
        <>
            <div>
                <div className="back-btn">
                    <Link to="/" className='movie-page'>
                        <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="24.5" cy="24.5" r="24.5" fill="#D43128"/>
                            <path d="M10.5858 23.5858C9.80474 24.3668 9.80474 25.6332 10.5858 26.4142L23.3137 39.1421C24.0948 39.9232 25.3611 39.9232 26.1421 39.1421C26.9232 38.3611 26.9232 37.0948 26.1421 36.3137L14.8284 25L26.1421 13.6863C26.9232 12.9052 26.9232 11.6389 26.1421 10.8579C25.3611 10.0768 24.0948 10.0768 23.3137 10.8579L10.5858 23.5858ZM36 27C37.1046 27 38 26.1046 38 25C38 23.8954 37.1046 23 36 23V27ZM12 27H36V23H12V27Z" fill="white"/>
                        </svg>
                    </Link>
                </div>
                <div>
                    {/* <Image src="https://m.media-amazon.com/images/I/71eOCcHVtNL._AC_UF1000,1000_QL80_.jpg" alt="Princess Mononoke poster" height={300} width={auto}/> */}
                </div>
            </div>
        </>
    )
}