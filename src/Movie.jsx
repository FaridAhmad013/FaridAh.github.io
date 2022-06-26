import React, { useContext } from 'react'
import { AppContext } from './context'
import './Movie.css'
import SingleMovie from './SingleMovie'

const Movie = ({ omdbID }) => {
    let { movies, loading, modal, setModal, query, setQuery } = useContext(AppContext)


    return (
        <>
            {modal ? <SingleMovie /> : (
                <section className={`flex flex-wrap`}>

                    {movies.map((movie, index) => {
                        const { Title, imdbID, Year, Poster } = movie
                        return (
                            <div className="w-full p-4 lg:w-1/4 md:w-1/3 sm:w-1/2">
                                <div className='relative p-4 bg-transparent border border-black rounded-lg hover:bg-slate-600 link' onClick={() => {
                                    setQuery(`&i=${imdbID}`)
                                    setModal(true)

                                }}>
                                    <header className='font-semibold text-center text-gray-600'>{Title}</header>
                                    <section className='relative h-full p-4 lg:h-96'>
                                        <img src={Poster} alt="" srcset="" className='w-full h-full overflow-hidden duration-300 rounded-md lg:max-w-sm max-h-fit' />
                                    </section>
                                </div>
                            </div>
                        )
                    }

                    )
                    }

                </section>
            )
            }

        </>
    )
}

export default Movie