'use client'
import Link from 'next/link'

const Home = ({}) => {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center">
    <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">Do Sitio</h1>
        <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">O que é esta Aplicação?</h2>
            <p className="text-gray-600">
                Esta aplicação permite que você explore a coleção de produtos de maneira fácil e rápida. Utilizamos uma API para gerenciar e listar todos os produtos disponíveis, garantindo que você tenha acesso às informações sobre nosso inventário.
            </p>
        </section>
        <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">Funcionalidade Principal</h2>
            <h3 className="text-xl font-medium mb-2 text-gray-700">Listagem de Produtos</h3>
            <ul className="list-disc list-inside text-gray-600">
                <li><strong>Ver Todos os Produtos Disponíveis:</strong> Navegue pela lista completa de produtos que oferecemos. Cada produto é apresentado com seus detalhes essenciais, como nome, quantidade disponível e categoria.</li>
            </ul>
        </section>
        <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">Como Funciona?</h2>
            <p className="text-gray-600">
                A listagem de produtos é feita através de uma integração com nossa API, que coleta dados diretamente do nosso banco de dados e os exibe de maneira organizada e acessível.
            </p>
        </section>
        <section>
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">Experimente Agora!</h2>
            <p className="text-gray-600">
                Explore a lista de produtos e encontre tudo o que você precisa com facilidade.
            </p>
        </section>
        <br/>
        <div className='flex justify-end'>
          <Link href="/login" className=' inline-block px-4 py-2 rounded bg-gray-200 font-bold mb-2 text-black-800'>Login</Link>
        </div>
    </div>
</main>
  );
};

export default Home;