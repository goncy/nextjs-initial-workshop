import type {GetStaticPaths, GetStaticProps, NextPage} from "next";
import type {ParsedUrlQuery} from "querystring";

import Link from "next/link";

import {Store} from "../types";
import api from "../api";
import StoreCard from "../components/StoreCard";

interface Props {
  store: Store;
}

interface Params extends ParsedUrlQuery {
  id: string;
}

export const getStaticProps: GetStaticProps<Props, Params> = async ({params}) => {
  const {id} = params as Params;
  const store = await api.fetch(id);

  if (!store) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      store,
    },
  };
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const list = await api.list();

  return {
    paths: list.map((store) => ({
      params: {
        id: store.id,
      },
    })),
    fallback: "blocking",
  };
};

const Store: NextPage<Props> = ({store}) => {
  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
      <StoreCard store={store} />
      <iframe
        allowFullScreen
        height="450"
        loading="lazy"
        src={store.location.map}
        style={{border: 0, marginTop: 24}}
        width="600"
      />
      <div style={{marginTop: 24, textAlign: "center"}}>
        <Link href="/">Volver al inicio</Link>
      </div>
    </div>
  );
};

export default Store;
