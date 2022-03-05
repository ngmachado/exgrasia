import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import tinycolor from 'tinycolor2';
import { CORE_CONTRACT_ADDRESS, REGISTRY_CONTRACT_ADDRESS } from 'common-contracts';
import GameManager from '../backend/GameManager';
import { EthConnection } from '@darkforest_eth/network';
import { getEthConnection, loadRegistryContract } from '../backend/Blockchain';
import {
  address,
  DEV_TEST_PRIVATE_KEY,
  Tile,
  TileContractMetaData,
  TileType,
  WorldCoords,
} from 'common-types';
import { tileTypeToColor, getTileEmoji, nullAddress, generatePrivateKey } from '../utils';
import { useInfo, useInitted, useTiles } from './Utils/AppHooks';
import { useHistory, useParams } from 'react-router-dom';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import SplashMap from './SplashMap.json';
import {
  Mainnet,
  DAppProvider,
  useEtherBalance,
  useEthers,
  Config,
  useContractFunction,
  useSendTransaction,
} from '@usedapp/core';
import { makeContractsAPI } from '../backend/ContractsAPI';
import { TinyWorldRegistry, TinyWorldRegistryFactory } from 'common-contracts/typechain';
import registryContractAbi from 'common-contracts/abis/TinyWorldRegistry.json';
import { Contract } from '@ethersproject/contracts';
import { ethers } from 'ethers';

const entropyMessage =
  'Sign this message as an entropy seed\nfor your proxy wallet.\n\nDO NOT SIGN this for any URL\nexcept the official Exgrasia\nwebsite: exgrasia.xyz';

export default function Splash() {
  const history = useHistory();
  const [liveMap, setLiveMap] = useState<TileType[][]>(SplashMap);
  const [ticks, setTicks] = useState(36);
  const [tickDirection, setTickDirection] = useState(true);
  const { activateBrowserWallet, account } = useEthers();
  const [whitelist, setWhitelist] = useState(false);
  const { library } = useEthers();
  const [proxyPrivKey, setProxyPrivKey] = useState('');
  const [proxyPubKey, setProxyPubKey] = useState('');
  const registryContract = new Contract(REGISTRY_CONTRACT_ADDRESS, registryContractAbi);
  const { state: registryState, send: registrySend } = useContractFunction(
    registryContract,
    'setProxyAddress',
    {
      transactionName: 'Register',
    }
  );
  const { state: transferState, sendTransaction: transferSend } = useSendTransaction();
  const [nuxDone, setNuxDone] = useState(false);
  const [nuxStepOneDone, setNuxStepOneDone] = useState(false);
  const [character, setCharacter] = useState('');
  const characterMapping = {
    monkey: '🐵',
    bear: '🐻',
    frog: '🐸',
    dog: '🐶',
    cat: '🐱',
    mouse: '🐭',
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTicks((ticks) => (tickDirection ? ticks + 1 : ticks - 1));
    }, 800);
    return () => clearInterval(interval);
  }, [tickDirection]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTickDirection((tickDirection) => !tickDirection);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    getEthConnection().then(async (ethConnection) => {
      const contractsApi = await makeContractsAPI(ethConnection);
      console.log('account', account);
      if (account) setWhitelist(await contractsApi.isWhitelisted(account));
    });
  }, [account]);

  useEffect(() => {
    if (registryState.status != 'Success') return;
    transferSend({ to: proxyPubKey, value: ethers.utils.parseEther('0.0001') });
  }, [registryState.status]);

  useEffect(() => {
    if (transferState.status != 'Success') return;
    setNuxStepOneDone(true);
  }, [transferState.status]);

  useEffect(() => {
    if (!nuxDone) return;
    history.push({
      pathname: '/game',
      state: {
        proxyPrivKey,
        character,
      },
    });
  }, [nuxDone]);

  const submitRegistry = (pubkey: string) => {
    registrySend(ethers.utils.getAddress(pubkey));
  };

  const getHumanisedStatus = (status: string) => {
    if (status == 'PendingSignature') return '⏳ Waiting';
    if (status == 'Mining') return '⛏️ Mining';
    if (status == 'Success') return '✅ Successful';
    if (status == 'Fail') return '❌ Failed';
    else return '🤨 Unknown';
  };

  useEffect(() => {
    if (!library || !account) return;
    const signer = library.getSigner();
    signer.signMessage(entropyMessage).then((sig) => {
      const privKey = generatePrivateKey(sig);
      setProxyPrivKey(privKey);
      const pubKey = ethers.utils.computeAddress(privKey);
      setProxyPubKey(pubKey);
      console.log('pubKey', pubKey);
      console.log('privKey', privKey);
      getEthConnection().then(async (ethConnection) => {
        const contractsApi = await makeContractsAPI(ethConnection);
        console.log('account', account);
        const proxyAddress = await contractsApi.getProxyAddress(account);
        console.log('proxyAddress', proxyAddress);
        if (proxyAddress == nullAddress) {
          submitRegistry(pubKey);
        } else if (proxyAddress.toLowerCase() != pubKey.toLowerCase()) {
          console.log('fucked up', pubKey, proxyAddress);
        } else {
          ethConnection.setAccount(privKey);
          const isInitted = await contractsApi.getInitted();
          if (isInitted) setNuxDone(true);
          else setNuxStepOneDone(true);
        }
      });
    });
  }, [whitelist]);

  return (
    <>
      <Page>
        {liveMap &&
          liveMap.map((row, i) => (
            <GridRow key={i}>
              {row.map((tile: TileType, j) => (
                <GridSquare
                  key={100 * i + j}
                  style={{
                    backgroundColor: tinycolor(
                      i + j <= ticks && i >= 10 && j >= 12
                        ? tileTypeToColor[TileType.WATER]
                        : tileTypeToColor[tile]
                    ).toHexString(),
                  }}
                ></GridSquare>
              ))}
            </GridRow>
          ))}
      </Page>
      <Page style={{ zIndex: 1 }}>
        <Title>εxgrasia</Title>
        {nuxStepOneDone ? (
          <SubTitle>
            choose character
            <p>
              {Object.keys(characterMapping).map((name) => {
                return (
                  <Emoji
                    key={name}
                    role='img'
                    aria-label={name}
                    onClick={() => {
                      setCharacter(name);
                      setNuxDone(true);
                    }}
                  >
                    {characterMapping[name as keyof typeof characterMapping]}
                  </Emoji>
                );
              })}
            </p>
          </SubTitle>
        ) : (
          <SubTitle>
            {account ? (
              <>connected</>
            ) : (
              <ConnectButton onClick={() => activateBrowserWallet()}>connect wallet</ConnectButton>
            )}
            {account && (
              <p style={{ fontSize: '32px' }}>
                {whitelist ? '✅ whitelisted' : '❌ not whitelisted'}
              </p>
            )}
            {whitelist && registryState && (
              <p style={{ fontSize: '32px' }}>{`Registration: ${getHumanisedStatus(
                registryState.status
              )}`}</p>
            )}
            {whitelist && registryState.status == 'Success' && transferState && (
              <p style={{ fontSize: '32px' }}>{`Funding: ${getHumanisedStatus(
                transferState.status
              )}`}</p>
            )}
          </SubTitle>
        )}
        <Twitter>
          <a href='https://twitter.com/exgrasia' target='_blank' style={{ textDecoration: 'none' }}>
            <span role='img' aria-label='bird'>
              🐦
            </span>
          </a>
        </Twitter>
      </Page>
    </>
  );
}

const Title = styled.div`
  font-size: 96px;
  vertical-align: middle;
  margin: 0;
  position: absolute;
  top: 25%;
  left: 25%;
  color: white;
  font-weight: 400;
  user-select: none;
`;

const Emoji = styled.span`
  margin: 10px;
  user-select: none;
  cursor: pointer;
`;

const SubTitle = styled.div`
  font-size: 64px;
  vertical-align: middle;
  margin: 0;
  position: absolute;
  top: 60%;
  right: 25%;
  color: white;
  font-weight: 300;
  line-height: 1.1;
`;

const ConnectButton = styled.div`
  user-select: none;
  cursor: pointer;
  text-decoration: underline;
`;

const Twitter = styled.div`
  font-size: 64px;
  vertical-align: middle;
  margin: 0;
  position: absolute;
  bottom: 1%;
  left: 1%;
  color: white;
  font-weight: 300;
  line-height: 1.1;
  a {
    text-decoration: none;
  }
  user-select: none;
`;

const Page = styled.div`
  overflow: hidden;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  vertical-align: middle;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

const GridRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100%;
  width: 100%;
`;

const GridSquare = styled.div`
  width: 100%;
  height: 100%;
  border-color: rgba(0, 0, 0, 0.15);
  border-style: solid;
  border-width: 1px;
  justify-content: center;
  vertical-align: middle;
`;
