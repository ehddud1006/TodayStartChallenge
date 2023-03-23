import { css } from '@emotion/react';

import bellImage from '@/assets/images/bell.png';
import flagImage from '@/assets/images/flag.png';
import hamburgerImage from '@/assets/images/hamburger.png';
import logoImage from '@/assets/images/logo.png';
import peopleImage from '@/assets/images/people.png';
import searchImage from '@/assets/images/search.png';

import * as Styled from './Header.styles';

const Header = () => {
  return (
    <Styled.Root>
      <Styled.CircleContainer>
        <Styled.Circle color='red' />
        <Styled.Circle color='orange' />
        <Styled.Circle color='green' />
      </Styled.CircleContainer>

      <Styled.HeaderContainer>
        <Styled.Logo src={logoImage} alt='로고' />

        <Styled.TitleContainer>
          <Styled.Title>하루 시작 챌린지!</Styled.Title>
          <Styled.PeopleContainer>
            <Styled.People src={peopleImage} alt='사람 아이콘' />
            <Styled.PeopleCount>3</Styled.PeopleCount>
          </Styled.PeopleContainer>
        </Styled.TitleContainer>

        <Styled.IconContainer>
          <Styled.IconCircle>
            <Styled.Icon src={searchImage} alt='검색 아이콘' />
          </Styled.IconCircle>
          <Styled.IconCircle>
            <Styled.Icon
              css={css`
                width: 16px;
                height: 16px;
              `}
              src={bellImage}
              alt='검색 아이콘'
            />
          </Styled.IconCircle>
          <Styled.IconCircle>
            <Styled.Icon src={flagImage} alt='검색 아이콘' />
          </Styled.IconCircle>
          <Styled.IconCircle>
            <Styled.Icon src={hamburgerImage} alt='검색 아이콘' />
          </Styled.IconCircle>
        </Styled.IconContainer>
      </Styled.HeaderContainer>
    </Styled.Root>
  );
};

export default Header;
