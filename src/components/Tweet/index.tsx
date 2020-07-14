import React from 'react';

import {
  Container,
  Retweeted,
  RetweetNameIcon,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon,
} from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <RetweetNameIcon /> Você retweetou
      </Retweeted>

      <Body>
        <Avatar></Avatar>
        <Content>
          <Header>
            <strong>RocketSeat</strong>
            <span>@rocketseat</span>
            <Dot />
            <time>27 de jun</time>
          </Header>
          <Description>Foguete não tem ré</Description>

          <ImageContent />

          <Icons>
            <Status>
              <CommentIcon />
              34
            </Status>
            <Status>
              <RetweetIcon />
              85
            </Status>
            <Status>
              <LikeIcon />
              958
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
};

export default Tweet;
