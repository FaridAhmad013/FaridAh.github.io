import React, {useContext} from 'react'
import { AppContext } from '../context'

const Modal = ({title, children}) => {
    const {setModal} = useContext(AppContext)
    return (
        <div className="fixed inset-0 flex items-center justify-center min-h-screen bg-black bg-opacity-70">
            <div className="w-full max-w-lg">
                <div className="overflow-hidden bg-white border rounded-lg shadow">
                    <header className='flex justify-between px-4 py-2 font-semibold text-gray-700 bg-opacity-50 border-b-2'>
                        <div>{title}</div>
                        <button onClick={() => setModal(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </header>
                    <section className='p-4 leading-relaxed'>
                        {children}
                    </section>
                </div>
            </div>
        </div>)
}

export default Modal