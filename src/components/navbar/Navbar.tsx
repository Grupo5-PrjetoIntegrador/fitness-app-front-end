import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            <div className='w-full flex justify-center py-4
            			   bg-gray-900 text-gray-100'>
            
                <div className="container flex justify-between text-lg">
                    <h1 className="text-3xl font-bold">Gen Fit</h1>
                    <div className='flex gap-4 text-2xl'>
                        <p className="hover:text-slate-400">Sobre Nós</p>
                        <p className="hover:text-slate-400">Produto</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;