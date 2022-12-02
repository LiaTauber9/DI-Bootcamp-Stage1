import Car from "./Car";

const carinfo = {name: "Ford", model: "Mustang"};

const App = () => {
    return(
        <Car model={carinfo.model} />
    )
}
export default App