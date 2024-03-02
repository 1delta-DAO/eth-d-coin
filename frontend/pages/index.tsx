import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Navbar from './components/Navbar';
import Pools from './components/Pools';
import Manager from './components/Manager';
import { HStack } from '@chakra-ui/react';
import { Pool, pools } from './src/constants';
import { useState } from 'react';
import { useFetchPrices } from './hooks/useFetchPrices';

const Home: NextPage = () => {

  const [pool, setPool] = useState<Pool>(pools[0]);

  const prices = useFetchPrices()

  return (
    <div>
      <Head>
        <title>RainbowKit App</title>
        <meta
          content="Generated by @rainbow-me/create-rainbowkit"
          name="description"
        />
      </Head>

      <Navbar />

      <HStack
        minH='100vh'
        w='100%'
        maxW="1400px"
        m="auto"
        mt="2em"
        gap="2em"
        px="2em"
        alignItems="flex-start"
      >
        <div className='flex flex-col w-2/3'>
          <Pools
            selectedPool={pool}
            setPool={setPool}
          />
        </div>
        <div className='flex flex-col w-1/3'>
          <Manager
            selectedPool={pool}
            prices={prices}
          />
        </div>
      </HStack>

      <footer className={styles.footer}>
        <a href="https://rainbow.me" rel="noopener noreferrer" target="_blank">
          Made with ❤️ by your frens at 1delta
        </a>
      </footer>
    </div>
  );
};

export default Home;
