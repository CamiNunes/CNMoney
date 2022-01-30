import logoImg from "../../assets/logo.svg";
import { Container, Content } from './styles';
interface Headerprops{
  onOpenNewTrasactionModal: () => void;
}

export function Header({ onOpenNewTrasactionModal }: Headerprops){
  return(
    <Container>
      <Content>
        <img src={logoImg} alt="cn money" />
        <button type="button" onClick={onOpenNewTrasactionModal}>Nova Transação</button>
      </Content>
    </Container>
  )
}