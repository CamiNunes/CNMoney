import Modal from 'react-modal';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import closeImg from '../../assets/close.svg';
import { Container, TransactionTypeContainer } from '../NewTransactionModal/styles';

interface NewTrasanctionModalProps{
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTrasanctionModal({isOpen, onRequestClose}:NewTrasanctionModalProps){
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} overlayClassName="react-modal-overlay" className="react-modal-content">
      <button type="button">
        <img src={closeImg} alt="Fechar Modal" onClick={onRequestClose} className="react-modal-close"/>
      </button>
      <Container>
        <h2>Cadastrar Transação</h2>  
        <input placeholder="Título"/>
        <input type="number" placeholder="Valor"/>
        <TransactionTypeContainer>
          <button type="button">
            <img src={incomeImg} alt="Entrada"/>
            <span>Entrada</span>
          </button>
          <button type="button">
          <img src={outcomeImg} alt="Saída"/>
          <span>Saída</span>
          </button>
        </TransactionTypeContainer>
        <input placeholder="Categoria"/>
        <button type="submit">Cadastrar</button>
      </Container>
      
    </Modal>
  );
}