import { Button } from "./Button"

export const Header = () => {
    return(
        <header className="h-screen flex flex-col justify-center dark:bg-black items-center max-w-7xl ">
            <div className="p-5">
                <h1 className="text-green-700 text-center text-6xl mb-12 lg:mb-10 md:text-8xl lg:text-8xl">Monique de Pádua <div className="text-2xl md:text-3xl lg:text-6xl mt-3 text-green-400 dark:text-green-200">Programadora Front-End</div></h1>
                <p className="text-xl text-center text-black dark:text-white">Estudante de programação com conhecimento em HTML, CSS e JavaScript. Atualmente estudando e aprimorando meus conhecimentos em ReactJS.</p>
            </div>
            <div className="my-12 lg:my-10">
            <Button 
            title="Download CV"
            link="https://docs.google.com/document/d/1LIZ2eopbZ4Z3KcfsC_3XkF1Ml28u93u2bbGpAkV-kDg/edit?usp=sharing"
            />
             <Button 
            title="Linkedin"
            link="https://www.linkedin.com/in/monique-de-p%C3%A1dua-pereira-78329912b/"
            />
            </div>
        </header>
    )
    }