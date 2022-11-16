import styled from 'styled-components';

export const Container = styled.header`
  background: #d73035;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 198px;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1216px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 8px;

  .page-details {
    h1 {
      color: #ffffff;
      font-size: 32px;
      margin-bottom: 6px;
    }

    h2 {
      color: #ffffff;
      font-size: 16px;
      font-weight: 400;
      opacity: 0.9;
    }
  }
`;
