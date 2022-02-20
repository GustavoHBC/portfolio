import type { NextPage, GetServerSideProps } from 'next';
import Home from './home';
import Broxas from './broxas';

interface Props {
  wildcard?: string;
}

type TPageHandler = {
  [key: string]: JSX.Element;
};

const Index: NextPage<Props> = ({ wildcard }) => {
  const pageHandler: TPageHandler = {
    broxas: <Broxas />,
    home: <Home />,
  };

  return pageHandler[wildcard && pageHandler[wildcard] ? wildcard : 'home'];
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  let wildcard = req.headers.host ? req.headers.host.split('.')[0] : 'home';

  return { props: { wildcard } };
};

export default Index;
