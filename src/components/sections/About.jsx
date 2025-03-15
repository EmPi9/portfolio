export const About = () => {

    const frontendSkills = [
        "React",
        "Vue", 
        "Typescript", 
        "TailwindCSS", 
        "SCSS"];

    const backendSkills = [
        "Node.js",
        "PHP", 
        "Docker",
        "PostgreSQL",
    ];

    return <section id="about" className="min-h-screen flex items-center justify-center py-20">
        <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent text-center">
                О себе
            </h2>

            <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                <p className="text-gray-300 mb-6">
                    Разработчик с коммерческим опытом, увлеченный созданием масштабируемых 
                    веб-приложений и внедрением инновационных решений.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Frontend</h3>
                        <div className="flex flex-wrap gap-2">
                            {frontendSkills.map((tech, key) =>(
                                <span className="bg-purple-600/10 text-purple-600 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 transition cursor-pointer"
                                key={key}>
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Backend</h3>
                        <div className="flex flex-wrap gap-2">
                            {backendSkills.map((tech, key) =>(
                                <span className="bg-purple-600/10 text-purple-600 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 transition cursor-pointer"
                                key={key}>
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4">Образование</h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li><strong>Информационные системы и программирование</strong> - ГАПОУ «АПТ» (2020-2024)</li>
                        <li><strong>Прикладная информатика</strong> - КНИТУ-КАИ (2024-20XX)</li>
                    </ul>
                </div>
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4">Карьера</h3>
                    <div className="space-y-4 text-gray-300">
                        <div>
                            <h4 className="font-semibold">Full-Stack Developer в Командной веб-разработке на CRM (2024 - Настоящее)</h4>
                            <p>Разработка и поддержка сайтов, на CRM.</p>
                        </div>
                        <div>
                            <h4 className="font-semibold">PLC Programmer в КМ (2023 - 2024)</h4>
                            <p>Разработка алгоритмов управления для промышленного оборудования</p>
                        </div>
                    </div>
                </div>
                            
            </div>
        </div>
    </section>;
}