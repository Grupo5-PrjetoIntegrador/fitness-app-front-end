import { GithubLogo } from '@phosphor-icons/react';

function Footer() {

    let data = new Date().getFullYear()

    return (
        <>
            <div className="flex justify-center bg-gray-900 text-gray-200">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold'>
                            Gen Fit - PI Grupo 5 | Copyright: {data}
                        </p>
                    <p className='text-lg'>Para mais de nossos projetos:</p>
                    <div className='flex gap-2'>
                        <a href="https://github.com/Grupo5-PrjetoIntegrador">
                            <GithubLogo size={48} weight='bold' className='hover:text-accent-color' />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;