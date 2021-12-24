import type {GetStaticProps, NextPage} from "next";
import type {Store} from "../types";

import Link from "next/link";

import api from "../api";
import StoreCard from "../components/StoreCard";

interface Props {
  stores: Store[];
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const stores = await api.list();

  return {
    props: {
      stores,
    },
  };
};

const Home: NextPage<Props> = ({stores}) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
        gap: 12,
        flexDirection: "column",
        width: "100%",
      }}
    >
      {stores.map((store) => (
        <Link key={store.id} href={`/${store.id}`}>
          <a>
            <StoreCard store={store} />
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Home;
