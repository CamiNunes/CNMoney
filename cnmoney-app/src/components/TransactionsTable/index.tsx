import { Container } from './styles'

export function TransactionsTable(){
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
            <td>Teste</td>
            <td>R$100,00</td>
            <td>Teste 2</td>
            <td>25/11/2021</td>
          </tr>
          <tr>
            <td>Teste</td>
            <td>R$100,00</td>
            <td>Teste 2</td>
            <td>25/11/2021</td>
          </tr>
          <tr>
            <td>Teste</td>
            <td>R$100,00</td>
            <td>Teste 2</td>
            <td>25/11/2021</td>
          </tr>
          <tr>
            <td>Teste</td>
            <td>R$100,00</td>
            <td>Teste 2</td>
            <td>25/11/2021</td>
          </tr>
          <tr>
            <td>Teste</td>
            <td>R$100,00</td>
            <td>Teste 2</td>
            <td>25/11/2021</td>
          </tr>
        </tbody>
      </table>  
    </Container>
  );
}