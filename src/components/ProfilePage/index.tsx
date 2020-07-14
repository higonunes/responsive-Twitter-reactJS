import React from 'react';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from './styles';
import Feed from '../Feed';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar Perfil</EditButton>
        <h1>Higo Sousa</h1>
        <h2>@higos.nunes</h2>

        <p>Developer Frontend and Backend</p>

        <ul>
          <li>
            <LocationIcon />
            São Luís, Brasil
          </li>
          <li>
            <CakeIcon />
            01 de outubro
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>97</strong>
          </span>
          <span>
            <strong>2551 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
};

export default ProfilePage;
