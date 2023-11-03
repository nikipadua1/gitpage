import { Button } from "./Button"

export const Contact = () => {
  
    return(
       <div className="w-full bg-white h-screen dark:bg-black flex flex-col justify-center items-center overflow-hidden">
            <p className="text-lg mb-3 text-black dark:text-white">Entre em contato:</p>
            <div className="max-w-7xl w-3/4 lg:w-2/4">
                <form 
                className="flex flex-col w-full p-2 text-black dark:text-white" 
                
                action="https://formsubmit.co/moniquepaduapereira@gmail.com" method="POST">
                    <input type="text" name="name" placeholder="Nome" className="mb-3 bg-transparent border-b-2 p-2 border-green-800 test"/>
                    <input type="text" name="email" placeholder="Email" className="mb-3 bg-transparent border-b-2 p-2 border-green-800 test"/>
                    <input type="text" name="subject" placeholder="Assunto" className="mb-3 bg-transparent border-b-2 border-green-800 p-2 test"/>
                    <textarea name="message" placeholder="Mensagem" className="h-60 resize-none overflow-y-scroll bg-transparent border-b-2 border-green-800 scrollbar-hide p-2 test"/>
                    <div className="self-center">
                    <button type="submit" className="mt-6 py-2 pb-2 pl-4 pr-4 border-2 border-green-800 hover:border-green-700 hover:scale-105">Enviar</button>
                    </div>
                </form>
            </div>
       </div>
    )
}