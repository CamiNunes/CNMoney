import Modal from 'react-modal';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import closeImg from '../../assets/close.svg';
import { Container, TransactionTypeContainer, ButtonTypeTransaction } from '../NewTransactionModal/styles';
import { useState } from 'react';

interface NewTrasanctionModalProps{
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTrasanctionModal({isOpen, onRequestClose}:NewTrasanctionModalProps){
  const [type, setType] = useState('deposit');
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
          <ButtonTypeTransaction type="button" onClick={ () => { setType('deposit');}} isActive={type === 'deposit'}>
            <img src={incomeImg} alt="Entrada"/>
            <span>Entrada</span>
          </ButtonTypeTransaction>
          <ButtonTypeTransaction type="button" onClick={ () => { setType('withdraw');}} isActive={type === 'withdraw'}>
          <img src={outcomeImg} alt="Saída"/>
          <span>Saída</span>
          </ButtonTypeTransaction>
        </TransactionTypeContainer>
        <input placeholder="Categoria"/>
        <button type="submit">Cadastrar</button>
      </Container>
      
    </Modal>
  );
}