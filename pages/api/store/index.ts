import type {NextApiRequest, NextApiResponse} from "next";
import type {Store} from "../../../types";

import api from "../../../api";

export default async function handler(_req: NextApiRequest, res: NextApiResponse<Store[]>) {
  const stores = await api.list();

  res.status(200).json(stores);
}
