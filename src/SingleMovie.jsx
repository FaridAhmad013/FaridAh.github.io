import React, { useContext, useState } from 'react'
import Modal from './components/Modal'
import { AppContext } from './context'

const SingleMovie = () => {
    const { movies } = useContext(AppContext)
    return (
        <>
        <Modal title="Title" >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, delectus! Aut quae earum necessitatibus illo nihil architecto modi? Eius quaerat non cum autem aperiam at quas reiciendis sequi amet tempore?
        </Modal>
        
    </>
    )
}

export default SingleMovie