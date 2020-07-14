import React from 'react';
import StickyBox from 'react-sticky-box';
import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from './styles';
import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <StickyBox>
        <Body>
          <List
            title="Talvez você curta"
            elements={[
              <FollowSuggestion
                key={1}
                name="Rocketseat"
                nickname="@rocketseat"
              />,
              <FollowSuggestion
                key={2}
                name="Higo Sousa"
                nickname="@higosnunes"
              />,
              <FollowSuggestion
                key={3}
                name="João de Maria"
                nickname="@joaomaria"
              />,
            ]}
          />
          <List
            title="Talvez você curta"
            elements={[
              <News key="1" />,
              <News key="2" />,
              <News key="3" />,
              <News key="4" />,
            ]}
          />
          <List
            title="Talvez você curta"
            elements={[
              <News key="1" />,
              <News key="2" />,
              <News key="3" />,
              <News key="4" />,
            ]}
          />
          <List
            title="Talvez você curta"
            elements={[
              <News key="1" />,
              <News key="2" />,
              <News key="3" />,
              <News key="4" />,
            ]}
          />
          <List
            title="Talvez você curta"
            elements={[
              <News key="1" />,
              <News key="2" />,
              <News key="3" />,
              <News key="4" />,
            ]}
          />
          <List
            title="Talvez você curta"
            elements={[
              <News key="1" />,
              <News key="2" />,
              <News key="3" />,
              <News key="4" />,
            ]}
          />
        </Body>
      </StickyBox>
    </Container>
  );
};

export default SideBar;
