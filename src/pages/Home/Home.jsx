import React from 'react';
import {
  HeroBtnStyled,
  HomeContStyled,
  SubContStyled,
  TitleStyled,
} from './Home.styled';
import { useSelector } from 'react-redux';
import { selectIsAuth } from 'redux/auth/selectors';

const Home = () => {
  const isAuth = useSelector(selectIsAuth);
  return (
    <HomeContStyled>
      <SubContStyled>
        <TitleStyled>Welcome to our website!</TitleStyled>
        <h2>
          We developed it and continue to improve it together with you and for
          your comfort.
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          eligendi quaerat tempore magni tempora qui dicta esse nulla dolores
          eum incidunt deserunt provident quam ut, officia doloribus dolorem id
          voluptatum.
        </p>
        {!isAuth && (
          <HeroBtnStyled to="/register">Sign up &#10143;</HeroBtnStyled>
        )}
      </SubContStyled>
    </HomeContStyled>
  );
};

export default Home;
