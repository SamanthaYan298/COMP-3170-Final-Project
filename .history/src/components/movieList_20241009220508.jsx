import { Link } from 'react-router-dom';
import { useState } from 'react'
import './App.css'

const movies = [
  {
    id: 1,
    title: 'Movie Title 1',
    image_url: 'https://via.placeholder.com/300x450',
    releaseDate: '2024-01-01',
    rating: 8.5,
  },
  {
    id: 2,
    title: 'Movie Title 2',
    image_url: 'https://via.placeholder.com/300x450',
    releaseDate: '2024-02-01',
    rating: 7.2,
  }
];

const moviesList = () => {
  return (
<div class="bg-white">
    {movies.map((movie) => (
        <div key={movie.id} class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 class="text-2xl font-bold tracking-tight text-gray-900">Trending In</h2>
      
          <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            <div class="group relative">
              <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img 
                    src={moviesList.image_url} 
                    alt={movie.title} 
                    class="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div class="mt-4 flex justify-between">
                <div>
                  <h3 class="text-sm text-gray-700">
                    <a href="#">
                      <span aria-hidden="true" class="absolute inset-0"></span>
                      Basic Tee
                    </a>
                  </h3>
                  <p class="mt-1 text-sm text-gray-500">Black</p>
                </div>
                <p class="text-sm font-medium text-gray-900">$35</p>
              </div>
            </div>
          </div>
        </div>
    ))}
</div>

    )

}

function App() {

  return (
    <>
      <div className='app-container'>
        <div className='top-nav'>
          <svg className='menu' width="32" height="20" viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 2H30" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M2 10.1667H30" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M2 18.3333H30" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <h1>ANIMATION</h1>
          <svg className='search' width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M23 23L30 30" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M2 14C2 20.6274 7.37258 26 14 26C17.3194 26 20.3242 24.6522 22.4966 22.474C24.6616 20.3034 26 17.308 26 14C26 7.37258 20.6274 2 14 2C7.37258 2 2 7.37258 2 14Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
    </>
  )
}

export default App
