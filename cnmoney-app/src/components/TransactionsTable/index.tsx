import { useEffect } from 'react';
import { Container } from './styles'

export function TransactionsTable(){
  useEffect(() => {
    fetch('http://localhost:3000/api/transactions')
      .then(response => response.json()) //pego a resposta e transformo em json
      .then(data => console.log(data)) // escrevo na tela o resultado
  }, []);

  return(
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>  
        <tbody>
          <tr>
            <td>Criação de Site (Freela)</td>
            <td className="deposit">R$2.000,00</td>
            <td>Teste 2</td>
            <td>25/11/2021</td>
          </tr>
          <tr>
            <td>Mensalidade da Casa</td>
            <td className="withdraw"> - R$792,00</td>
            <td>Teste 2</td>
            <td>25/11/2021</td>
          </tr>
          <tr>
            <td>Freela</td>
            <td className="deposit">R$5.000,00</td>
            <td>Teste 2</td>
            <td>25/11/2021</td>
          </tr>
          <tr>
            <td>Mesalidade Seguro Carro</td>
            <td className="withdraw"> - R$1000,00</td>
            <td>Teste 2</td>
            <td>25/11/2021</td>
          </tr>
        </tbody>
      </table>  
    </Container>
  );
}