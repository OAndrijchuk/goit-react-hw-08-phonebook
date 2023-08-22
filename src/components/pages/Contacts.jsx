import React, { useEffect } from 'react';
import { Section } from '../Section/Section';
import { SimpleForm } from '../Form/SimpleForm';
import { ContactsList } from '../ContactsList/ContactsList';
import { Filter } from '../Filter/Filter';
import { Container } from './Contacts.styled';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContactsThunk } from 'redux/asyncThuncs';
import { contactsSelector } from 'redux/selectors';
import { ThreeDots } from 'react-loader-spinner';
import { selectIsAuth } from 'redux/auth/selectors';

const Contacts = () => {
  const { isLoading } = useSelector(contactsSelector);
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();
  useEffect(() => {
    isAuth && dispatch(fetchContactsThunk());
  }, [dispatch, isAuth]);
  return (
    <Container>
      <Section>
        <SimpleForm />
        <Filter />
      </Section>
      {isLoading ? (
        <ThreeDots
          height="100"
          width="100"
          radius="9"
          color="#212121"
          wrapperStyle={{ margin: '0 auto' }}
          visible={true}
        />
      ) : (
        <Section title="Contacts">
          <ContactsList />
        </Section>
      )}
    </Container>
  );
};
export default Contacts;
