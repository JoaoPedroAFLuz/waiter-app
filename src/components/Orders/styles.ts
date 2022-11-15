import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1216px;
  margin: 40px auto;
  display: flex;
  gap: 32px;
`;

export const Board = styled.div`
  padding: 16px;
  border: 1px solid rgba(204, 204, 204, 0.4);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;

  header {
    padding: 8px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

export const OrdersContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 24px;

  button {
    width: 100%;
    background: #ffffff;
    border: 1px solid rgba(204, 204, 204, 0.4);
    height: 128px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;

    strong {
      font-weight: 500;
    }

    span {
      font-size: 14px;
      color: #666666
    }

    & + button {
      margin-top: 24px;
    }
  }
`;
