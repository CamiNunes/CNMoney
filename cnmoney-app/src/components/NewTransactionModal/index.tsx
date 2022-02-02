import { FormEvent, useState, useContext } from 'react';
import Modal from 'react-modal';
import { TransactionsContext } from '../../TransactionsContext';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import closeImg from '../../assets/close.svg';
import { Container, TransactionTypeContainer, ButtonTypeTransaction } from './styles';

interface NewTrasanctionModalProps{
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTrasanctionModal({isOpen, onRequestClose}:NewTrasanctionModalProps){
  const { createTransaction } = useContext(TransactionsContext);

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState('deposit');

  function handleCreateNewTransaction(event: FormEvent) { 
    event.preventDefault();

    createTransaction({
      title,
      amount, 
      category,
      type
    })
  }

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} overlayClassName="react-modal-overlay" className="react-modal-content">
      <button type="button">
        <img src={closeImg} alt="Fechar Modal" onClick={onRequestClose} className="react-modal-close"/>
      </button>
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar Transação</h2>  
        <input placeholder="Título" value={title} onChange={event => setTitle(event.target.value)}/>
        <input type="number" placeholder="Valor" value={amount} onChange={event => setAmount(Number(event.target.value))}/>
        <TransactionTypeContainer>
          <ButtonTypeTransaction type="button" onClick={ () => { setType('deposit');}} isActive={type === 'deposit'} activeColor="green" >
            <img src={incomeImg} alt="Entrada"/>
            <span>Entrada</span>
          </ButtonTypeTransaction>
          <ButtonTypeTransaction type="button" onClick={ () => { setType('withdraw');}} isActive={type === 'withdraw'} activeColor="red" >
          <img src={outcomeImg} alt="Saída"/>
          <span>Saída</span>
          </ButtonTypeTransaction>
        </TransactionTypeContainer>
        <input placeholder="Categoria" value={category} onChange={event => setCategory(event.target.value)}/>
        <button type="submit">Cadastrar</button>
      </Container>
      
    </Modal>
  );
}