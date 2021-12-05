import { useState } from 'react';
import Modal from 'react-modal';
import closeImg from '../../assets/close.svg';
import IncomeImg from '../../assets/income.svg';
import OutcomeImg from '../../assets/outcome.svg';
import { Container, TransactionTypeContainer, RadioBox } from './styles';

interface NewTransactionModalProps {
    isOpen: boolean,
    onRequestClose: () => void
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  const [type, setType] = useState('deposit');

  return (
    <Modal
        isOpen={isOpen}
        onRequestClose={() => onRequestClose()}
        overlayClassName="react-modal-overlay"
        className="react-modal-content">
        <button 
          type="button" 
          onClick={onRequestClose} 
          className="react-modal-close">
          <img src={closeImg} alt="Fechar modal" />
        </button>
        <Container>
          <h2>Cadastrar transação</h2>

          <input placeholder="Título" />
          <input type="number" placeholder="Valor" />
          <TransactionTypeContainer>
            <RadioBox
            type='button'
            onClick={() => setType('deposit')}
            activeColor='green'
            isActive={type === 'deposit'}>
                <img src={IncomeImg} alt="Entrada"></img>
                <span>Entrada</span>
            </RadioBox>
            <RadioBox
            type='button'
            onClick={() => setType('withdraw')}
            activeColor='red'
            isActive={type === 'withdraw'}>
              <img src={OutcomeImg} alt="Saída"></img>
              <span>Saída</span>
            </RadioBox>
          </TransactionTypeContainer>
          <input placeholder="Categoria" />

          <button type="submit">Cadastrar</button>
        </Container>
    </Modal>
  );
}