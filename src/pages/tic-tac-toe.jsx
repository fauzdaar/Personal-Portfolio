function board(){
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            return(
            <input 
                placeholder={j}
                type="text"
                className="h-20 w-20 bg-black" 
            />)
        }  
    }
}

export default function ticTacToe(){
    return(
        <section className="bg-cyan-800 min-h-screen text-white ps-6 py-12 flex justify-center items-center">
            {board()}
        </section>
    );
}