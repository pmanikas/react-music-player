import { get } from "./api.service";

const SONGS_URL = "./songs/chillhopList.json";

export const getAll = async () => {
  const res = await get(SONGS_URL);
  return res ? res.data : [];
};
