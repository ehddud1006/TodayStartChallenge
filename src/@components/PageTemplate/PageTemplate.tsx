import { PropsWithChildren } from 'react';

import Header from '@/@components/Header';

import * as Styled from './PageTemplate.styles';

// type PageTemplateProps = {};

const PageTemplate = (props: PropsWithChildren) => {
  const { children } = props;

  return (
    <Styled.Root>
      <Styled.Container>{children}</Styled.Container>
    </Styled.Root>
  );
};

export default PageTemplate;
