import React, { FC } from 'react';
import Block from './block';

import { Container, Row } from './styles';

const Grid: FC = () => {
  return (
    <Container data-cy="grid-container">
      {React.Children.toArray(
        [...Array(9)].map((_, rowIdx) => (
          <Row data-cy="grid-row-container">
            {React.Children.toArray(
              [...Array(9)].map((_, colIdx) => (
                <Block rowIndex={rowIdx} colIndex={colIdx} />
              ))
            )}
          </Row>
        ))
      )}
    </Container>
  );
};

export default Grid;
