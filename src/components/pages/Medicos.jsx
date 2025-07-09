import { useState } from 'react'
import Style from '../../styles/medico.module.css'
import MedicoAdicionar from './MedicoAdicionar'
import { FaUserMd } from 'react-icons/fa';
import { FaUsers } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import ListaMedico from './ListaMedicos';

function Medico1(){
    const [mostrarFormulario, setMostrarFormulario] = useState(false)

    const handleAdicionarClick = () => {
        setMostrarFormulario(true)
    }

    const [medicos,setMedicos] = useState([])

    const adicionarMedicos = (novoMedico) => {
        setMedicos(prevMedicos => [...prevMedicos, novoMedico])
        setMostrarFormulario(false)
    }

    return(
        <div className={Style.medico1}>
            <div className={Style.item1}>
                <label htmlFor="" className={Style.l1}>Profissional Médico</label>
                <label htmlFor="" className={Style.l2}>Faça a gestão da equipa médica e suas especialidades</label>
                <input type="text" placeholder='Pesquisar médicos pelo seu nome'/>
            </div>
            <div className={Style.item2}>
                <FaUserMd className={Style.ima}  color='#00AEEF'/>
                {medicos.length > 0 && (
                    <ListaMedico medicos = {medicos}/>
                )}
            </div>
            <div className={Style.item3}>
                <label htmlFor="" className={Style.l1}>Adicionar Médico</label>
                <div className={Style.im}><FaUserPlus size={150} color='#00AEEF'/></div>
                <button className={Style.bot} onClick={handleAdicionarClick}><FaPlus size={15}/> Adicionar Médico</button>

            { mostrarFormulario && (<MedicoAdicionar onCancelar = {() => {setMostrarFormulario(false)}} onCadastrar = {adicionarMedicos}/>)

            }
            </div>
        </div>
    )
}

export default Medico1