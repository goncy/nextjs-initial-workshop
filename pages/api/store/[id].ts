import type {NextApiRequest, NextApiResponse} from "next";
import type {Store} from "../../../types";

import api from "../../../api";

interface Request extends NextApiRequest {
  query: {
    id: string;
  };
}

export default async function handler(req: Request, res: NextApiResponse<Store>) {
  const store = await api.fetch(req.query.id);

  if (!store) {
    return res.status(404).end();
  }

  return res.status(200).json(store);
}
