import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import { NewTrasanctionModal } from "./components/NewTransactionModal";
import { GlobalStyle } from "./styles/global";
import { useState } from "react";
import Modal from 'react-modal';

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
      <NewTrasanctionModal isOpen={isNewTrasactionModalOpen} onRequestClose={handleCloseNewTransactionModal}/> 
      <GlobalStyle/>
    </>
  );
}