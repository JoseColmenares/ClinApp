import { useState } from 'react'
import Style from '../../styles/medico.module.css'
import ListaMedico from './ListaMedicos'
function MedicoAdicionar({onCancelar, onCadastrar}){
    const [Formulario, setFormulario] = useState(
        {
            nome:'',
            crm:'',
            turno: '',
            telefone:'',
            email:'',
            especialidade:''
        }
    )

    const [enviarDados,setEnviarDados] = useState(null)
    
    const handleOne = (e) => {
    const {name,value} = e.target;
    setFormulario({...Formulario, [name]:value});
    }


    const onSubmit = (e) => {
          e.preventDefault()
          console.log("Apertado!")
          //setEnviarDados(Formulario)
          onCadastrar(Formulario)
          setFormulario({
            nome:'',
            crm:'',
            turno: '',
            telefone:'',
            email:'',
            especialidade :''
        })
    }

    return (
        <div className={Style.medicoAdicionar}>
          <form className={Style.fo} onSubmit={onSubmit}>
            <div className={Style.di1}>
                <label htmlFor="" className={Style.le1}>Adicionar um médico novo</label>
                <label htmlFor="" className={Style.le2}>Complete os campos e registre um médico novo</label>
            </div>
            <div className={Style.di2}>
                <label htmlFor=""  className={Style.leb}>Nome Completo</label>
                <input type="text" className={Style.dil} value={Formulario.nome} name='nome' onChange={handleOne} required/>
                 <label htmlFor="" className={Style.leb}>Número de CRM</label>
                <input type="number" className={Style.dil} value={Formulario.crm} name='crm' onChange={handleOne} min={0} required/>
                 <label htmlFor="" className={Style.leb}>Turno</label>
                <input type="text" className={Style.dil} value={Formulario.turno} name='turno' onChange={handleOne} required/>
            </div>
            <div className={Style.di3}>
                 <label htmlFor="" className={Style.leb}>Número Telefone</label>
                <input type="text" className={Style.dil} value={Formulario.telefone} name='telefone' onChange={handleOne} required/>
                 <label htmlFor="" className={Style.leb}>Email</label>
                <input type="email" className={Style.dil} value={Formulario.email} name='email' onChange={handleOne} required/>
                 <label htmlFor="" className={Style.leb}>Especialidade</label>
                 <select className={Style.dil} value={Formulario.especialidade} name='especialidade' onChange={handleOne} required>
                    <option disabled>Selecionar</option>
                    <option>Odonotologia</option>
                    <option>Cardiologia</option>
                    <option>Oftamologia</option>
                 </select>
            </div>
            <div className={Style.di4}>
                <div className={
                    Style.botoes
                }>
                    <button className={Style.bota} onClick={onCancelar}>Cancelar</button>
                     <button className={Style.bota2}>Cadastrar</button>
                </div>
                
            </div>
          </form>
        </div>
    )
}

export default MedicoAdicionar