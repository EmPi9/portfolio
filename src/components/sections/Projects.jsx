export const Projects = () => {
    return <section id="projects" className="min-h-screen flex items-center justify-center py-20">
        <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent text-center">
                Пет-проекты
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-purple-600/30 transition-all">
                    <h3 className="text-xl font-bold mb-2">Интернет-магазин(CRUD) "Макулатура" </h3>
                    <p className="text-gray-400 mb-4">Интернет-магазин — где пользователи могут просматривать, выбирать и покупать товары в корзине. Также он включает админ-панель для конролирование контента на сайте.</p>

                <div>
                    {["TailwindCSS", "JavaScript", "PHP", "PostgreSQL"].map((tech, key) => (
                        <span className="bg-purple-600/10 text-purple-600 py-1 px-3 mx-1 rounded-full text-sm hover:bg-purple-500/20 transition-all cursor-pointer"
                        key={key}>
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="flex justify-center items-center">
                    <a href="https://github.com/EmPi9/makylatyra.pes" className="bg-purple-600 text-white py-1 px-2 mt-6 rounded transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(137, 44, 250, 0.3)]">Посмотреть</a>
                </div>
                </div>

                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-purple-600/30 transition-all">
                    <h3 className="text-xl font-bold mb-2">Портфолио</h3>
                    <p className="text-gray-400 mb-4">Сайт портфолио — это платформа, где я демонстрирую свои работы, навыки и опыт в веб-разработке. Пользователи могут ознакомиться с моими проектами и узнать обо мне.</p>

                <div>
                    {["TailwindCSS", "React"].map((tech, key) => (
                        <span className="bg-purple-600/10 text-purple-600 py-1 px-3 mx-1 rounded-full text-sm hover:bg-purple-500/20 transition-all cursor-pointer"
                        key={key}>
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="flex justify-center items-center">
                    <a href="https://github.com/EmPi9/portfolio" className="bg-purple-600 text-white py-1 px-2 mt-6 rounded transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(137, 44, 250, 0.3)]">Посмотреть</a>
                </div>
                </div>
            </div>

        </div>
    </section>
}