
import Style from '../../styles/medico.module.css'
import { FaTrash, FaEdit } from 'react-icons/fa';

function ListaMedicos({servicos}){
    return(
        <div>
            
                <table className={Style.tabelaMedico}>
                    <thead className={Style.tabelaH}>
                        <tr >
                            <th className={Style.tabelaData}>Tipo De Cosulta</th>
                            <th className={Style.tabelaData}>Preço Da Consulta</th>
                            <th className={Style.tabelaData}>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                    {servicos.map((servico,idx) => (
                        <tr key={idx} className={Style.tabelaR}>
                            <td className={Style.tabelaData}>{servico.tipoConsulta}</td>
                            <td className={Style.tabelaData}>{servico.precoConsulta}</td>
                            <td className={Style.tabelaData}><FaEdit  className={Style.icone_editar}/><FaTrash className={Style.icone_excluir}/></td>
                        </tr>
                    ))}
                    </tbody>
                </table>
           
        </div>
    )
}

export default ListaMedicos