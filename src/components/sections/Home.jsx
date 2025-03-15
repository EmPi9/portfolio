export const Home = () => {
    return(
    <section 
     id="home" 
     className="min-h-screen flex items-center justify-center relative">
        <div className="text-center z-10 px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leading-right">
                Привет, я Кирилл
            </h1>
            <p className="text-white text-lg mb-8 max-w-lg mx-auto">
                full-stack разработчик с уклоном в front-end, создаю чистые и функциональные веб-приложения. Уделяю внимание производительности и удобству интерфейсов, чтобы пользователи получали удовольствие от взаимодействия.
            </p>
            <div className="flex justify-center space-x-4">
                <a href="#projects" 
                   className="bg-purple-600 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(137, 44, 250, 0.3)]">
                    Пет-проеты
                </a>
                <a href="#contacts" 
                   className="border border-purple-600/60 text-purple-600 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(137, 44, 250, 0.3)] hover:bg-purple-600/10">
                    Контанты
                </a>
            </div>
        </div>
    </section>
    );
   
}