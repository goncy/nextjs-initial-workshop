export interface Store {
  id: string;
  title: string;
  image: string;
  description: string;
  location: {
    address: string;
    map: string;
    lat: number;
    lng: number;
  };
}
