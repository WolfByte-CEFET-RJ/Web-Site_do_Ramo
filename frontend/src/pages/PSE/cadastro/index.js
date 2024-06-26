import { useEffect } from 'react';
import { useRouter } from 'next/router';

import api from '../../../services/api';

import Page1 from './_page1';
import Page2 from './_page2';
import Page3 from './_page3';
import Page4 from './_page4';
import Page5 from './_page5';
import styles from '../../../styles/pseCadastro.module.scss';
import Head from 'next/head';
import { isBefore } from 'date-fns';

export default function cadastro({ hasActivePSE, dynamicDates }) {
  const router = useRouter();
  const { page } = router.query;

  useEffect(() => {
    if (!hasActivePSE) {
      router.replace('/PSE');
    }
  }, []);

  useEffect(() => {
    if (
      page &&
      page !== '1' &&
      page !== '2' &&
      page !== '3' &&
      page !== '4' &&
      page !== '5'
    ) {
      router.push('/PSE/cadastro?page=1');
    }
  }, [page]);

  if (!hasActivePSE) {
    return <></>;
  }

  return (
    <div className={styles.pageContainer}>
      <Head>
        <title>Formulário PSE | IEEE CEFET-RJ</title>
      </Head>

      <section className={styles.container}>
        {page === '1' && <Page1 />}
        {page === '2' && <Page2 />}
        {page === '3' && <Page3 dynamicDates={dynamicDates} />}
        {page === '4' && <Page4 />}
        {page === '5' && <Page5 />}
      </section>
    </div>
  );
}

export const getServerSideProps = async () => {

  let dynamicDates = [];

  try {
    const { data } = await api.get('/dinamycDates');

    dynamicDates = Object.values(data);
  } catch (error) {
    dynamicDates = []; //não precisa, mas vou deixar aqui para entendimento.
  }

  let hasActivePSE = false;

  try {
    const { data } = await api.get('/pse');

    if (!isBefore(new Date(), new Date(data.start))) {
      hasActivePSE = true;
    }
  } catch (error) {
    hasActivePSE = false;
  }

  //hasActivePSE = true; // Isso aqui força abrir o PSE

  return {
    props: {
      hasActivePSE,
      dynamicDates
    }
  };
};
