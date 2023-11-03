export const Button = ({title, link} : {title : string, link : string}) => {
    return(
        <a 
        target="_blank"
        rel="noreferrer"
        className="p-3 text-black font-bold border-2 border-green-500 dark:text-white ml-4 shadow-lg shadow-green-500/100 dark:shadow-green-500/50 " href={link}>{title}</a>
    )
}