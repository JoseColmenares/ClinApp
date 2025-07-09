import { useState } from 'react'
import Style from '../../styles/servico.module.css'

function ServicoAdicionar({onCancelar, onCadastrar}){

    const [Formulario, setFormulario] = useState({
        tipoConsulta:'',
        precoConsulta:'',
        descricao:''
    })


    const handleOne = (e) =>{
        const {name,value} = e.target;
        setFormulario({...Formulario, [name]:value})
    }


    const onSubmit = (e) => {
        e.preventDefault()
        onCadastrar(Formulario)
        console.log("Botão Apertado!")
        console.log(Formulario)
        setFormulario(
        {
        tipoConsulta:'',
        precoConsulta:'',
        descricao:''
        }
        )
    }

    return(
          <div className={Style.servicoAdicionar}>
          <form className={Style.fo} onSubmit={onSubmit}>
            <div className={Style.di1}>
                <label htmlFor="" className={Style.le1}>Adicionar um serviço novo</label>
                <label htmlFor="" className={Style.le2}>Complete os campos e registre um serviço novo</label>
            </div>
            <div className={Style.di2}>
                <input type="text" className={Style.in2} placeholder='Digite o tipo de consulta' onChange={handleOne} name='tipoConsulta' required/>
                <input type="number" className={Style.in2} placeholder='Digite o preço da consulta' min={0} onChange={handleOne} name='precoConsulta' required/>
                <label htmlFor="" className={Style.l2}>Resumo Da Consulta</label>
                <textarea id="" placeholder='Digite um resumo da consulta' className={Style.a2} onChange={handleOne} name= 'descricao' required></textarea>
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

export default ServicoAdicionar