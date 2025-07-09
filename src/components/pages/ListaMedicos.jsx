
import Style from '../../styles/medico.module.css'
import { FaTrash, FaEdit } from 'react-icons/fa';

function ListaMedicos({medicos}){
    return(
        <div>
            
                <table className={Style.tabelaMedico}>
                    <thead className={Style.tabelaH}>
                        <tr >
                            <th className={Style.tabelaData}>Nome Médico</th>
                            <th className={Style.tabelaData}>Número CRM</th>
                            <th className={Style.tabelaData}>Especialidade</th>
                            <th className={Style.tabelaData}>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                    {medicos.map((medico,idx) => (
                        <tr key={idx} className={Style.tabelaR}>
                            <td className={Style.tabelaData}>{medico.nome}</td>
                            <td className={Style.tabelaData}>{medico.crm}</td>
                            <td className={Style.tabelaData}>{medico.especialidade}</td>
                            <td className={Style.tabelaData}><FaEdit  className={Style.icone_editar}/><FaTrash className={Style.icone_excluir}/></td>
                        </tr>
                    ))}
                    </tbody>
                </table>
           
        </div>
    )
}

export default ListaMedicos