import { useState } from 'react'
import Style from '../../styles/servico.module.css'
import ServicoAdicionar from './ServicoAdicionar'
import { FaProcedures } from "react-icons/fa";
import { FaPlusSquare } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import ListaServicos from './ListaServicos'

function Servico1(){
    const [mostrarFormulario, setMostrarFormulario] = useState(false)

    const handleAdicionarClick = () => {
        setMostrarFormulario(true)
    }
    
    const [servicos,setServicos] = useState([])

    const adicionarServicos = (novoServico) => {
        setServicos(prevServicos => [...prevServicos, novoServico])
        setMostrarFormulario(false)
    }

    return(
        <div className={Style.servico1}>
            <div className={Style.item1}>
                <label htmlFor="" className={Style.l1}>Serviços Médicos</label>
                <label htmlFor="" className={Style.l2}>Faça a gestão dos serviços médicos disponível para os pacientes</label>
                <input type="text" placeholder='Pesquise o serviço que voçê deseja'/>
            </div>
            <div className={Style.item2}>
                <FaProcedures className={Style.ima} size={300} color='#00AEEF'/>
                {servicos.length > 0 && (
                <ListaServicos servicos = {servicos}/>
                )}
            </div> 
            <div className={Style.item3}>
                <label htmlFor="" className={Style.l1}>
                Adicionar Serviço
                </label>
                <div className={Style.im}>
                   <FaPlusSquare size={100} color='#00AEEF'/> 
                </div>
                <button className={Style.bot} onClick={handleAdicionarClick}><FaPlus size={15}/> Adicionar Serviço</button>

            { mostrarFormulario && (<ServicoAdicionar onCancelar = {() => {setMostrarFormulario(false)}} onCadastrar = {adicionarServicos}/>)

            }
            </div>
        </div>
    )
}

export default Servico1