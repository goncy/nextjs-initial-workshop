export interface Store {
  title: string;
  description: string;
  id: string;
  image: string;
  location: {
    map: string;
    address: string;
    lat: number;
    lng: number;
  };
}
