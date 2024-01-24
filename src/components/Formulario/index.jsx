import { useState, useEffect } from "react"

const Formulario = () => {

    // let [valor,setValor] = useState(0); <- formato basico
    const [materiaA,setMateriaA] = useState(0);
    const [materiaB,setMateriaB] = useState(0);
    const [materiaC,setMateriaC] = useState(0);
    const [nome, setNome] = useState('');

    useEffect (() => {
        console.log ("o componente iniciou")
    },[]);

    useEffect (() => {
        console.log ("o estado nome mudou")
    },[nome]); //assim vai ativar quando o item do array for alterado

    useEffect (() => {
        console.log ("Materia A mudou para: " + materiaA)
    },[materiaA, materiaB, materiaC]);

    useEffect (() => {
        console.log ("o componente iniciou")

        return () => {
            console.log ("o componente finalizou")
        }
    },[]);


    const alteraNome = (evento) => {
        // setNome(evento.target.value);
        setNome(estadoAnterior => {

            return evento.target.value
    })

    }


    const renderizaResultado = () => {
        const soma = materiaA + materiaB + materiaC;
        const media = soma / 3;

        if (media >= 7) {
            return (
                <p>{nome} foi aprovado</p>
            )
        } else {
            return (
                <p>{nome} nao foi aprovado</p>
            )
        }
    }

    return (
        <form>
            <ul>
                {[1,2,3,4,5].map(item => (
                <li key={item}>{item}</li>
                ))}
            </ul>

            <input type="text" placeholder="Seu nome" onChange={alteraNome} />
            <input type="number" placeholder="Nota materia A" onChange={evento => setMateriaA(parseInt(evento.target.value))}/>
            <input type="number" placeholder="Nota materia B" onChange={evento => setMateriaB(parseInt(evento.target.value))}/>
            <input type="number" placeholder="Nota materia C" onChange={evento => setMateriaC(parseInt(evento.target.value))}/>
            {renderizaResultado()}
        </form>
    )
}

export default Formulario


//versao desestruturada:
//<input type="number" placeholder="Nota materia A" onChange={({target}) => setMateriaA(parseInt(target.value))}/>

// return (
//     <form>
//         <input type="number" placeholder="Nota materia A" onChange={evento => setMateriaA(evento.target.value)}/>
//         <input type="number" placeholder="Nota materia B" onChange={evento => setMateriaB(evento.target.value)}/>
//         <input type="number" placeholder="Nota materia C" onChange={evento => setMateriaC(evento.target.value)}/>
//         <p> O aluno foi aprovado</p>
//         {materiaA}
//         {materiaB}
//         {materiaC}
//     </form>
// )



{/* <ul>
{[1,2,3,4,5].map(item => (
<>
<b>{item}</b>
<li>{item}</li>
</>
))}
</ul> */}