import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            <div className='w-full flex justify-center py-4
            			   bg-gray-900 text-gray-200'>
            
                <div className="container flex justify-between text-lg">
                    <Link to='/home' className="text-3xl font-bold">Gen Fit</Link>
                    <div className='flex gap-4 text-2xl'>
                        <Link to='/sobrenos' className="hover:text-accent-color">Sobre Nós</Link>
                        <Link to='/exercicios' className="hover:text-accent-color">Exercícios</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;