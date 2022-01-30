import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import { GlobalStyle } from "./styles/global";
import Modal from 'react-modal';
import { useState } from "react";

Modal.setAppElement('#root');

export function App() {
  const [isNewTrasactionModalOpen, setIsNewTrasactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal(){
    setIsNewTrasactionModalOpen(true);
  }

  function handleCloseNewTransactionModal(){
    setIsNewTrasactionModalOpen(false);  
  }

  return (
    <>
      <Header onOpenNewTrasactionModal={handleOpenNewTransactionModal}/>
      <Dashboard/>  
      <Modal isOpen={isNewTrasactionModalOpen} onRequestClose={handleCloseNewTransactionModal}>
        <h2>Cadastrar Transação</h2>  
      </Modal>
      <GlobalStyle/>
    </>
  );
}