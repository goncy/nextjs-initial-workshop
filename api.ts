import {Store} from "./types";

const MOCK = [
  {
    id: "manolo-rivadavia",
    title: "Manolo Rivadavia",
    description: "Los churros más icónicos de Mar del Plata",
    image:
      "https://lh5.googleusercontent.com/p/AF1QipPNwL6yRmKi-Hkc08DSbJkM0Pfd3VOzBhjR5Mnw=w203-h114-k-no",
    link: "http://churrosmanolo.com/es/",
    location: {
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25147.79033508727!2d-57.5473714!3d-38.001392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584dc4acea437cf%3A0x3d0b14007abe7d25!2sManolo!5e0!3m2!1ses!2sar!4v1640036194553!5m2!1ses!2sar",
      address: "CMA, Rivadavia 2371",
      lat: -38.001392,
      lng: -57.5473714,
    },
  },
  {
    id: "manolo-ramos",
    title: "Manolo Ramos",
    description: "Los churros más icónicos de Mar del Plata",
    image:
      "https://lh5.googleusercontent.com/p/AF1QipPNwL6yRmKi-Hkc08DSbJkM0Pfd3VOzBhjR5Mnw=w203-h114-k-no",
    link: "http://churrosmanolo.com/es/",
    location: {
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25147.79033508727!2d-57.5473714!3d-38.001392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584dc4acea437cf%3A0x3d0b14007abe7d25!2sManolo!5e0!3m2!1ses!2sar!4v1640036194553!5m2!1ses!2sar",
      address: "Av. Patricio Peralta Ramos 4900",
      lat: -38.0127326,
      lng: -57.5596429,
    },
  },
  {
    id: "manolo-alem",
    title: "Manolo Alem",
    description: "Los churros más icónicos de Mar del Plata",
    image:
      "https://lh5.googleusercontent.com/p/AF1QipPNwL6yRmKi-Hkc08DSbJkM0Pfd3VOzBhjR5Mnw=w203-h114-k-no",
    link: "http://churrosmanolo.com/es/",
    location: {
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25147.79033508727!2d-57.5473714!3d-38.001392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584dc4acea437cf%3A0x3d0b14007abe7d25!2sManolo!5e0!3m2!1ses!2sar!4v1640036194553!5m2!1ses!2sar",
      address: "Leandro N. Alem 3980",
      lat: -38.0297605,
      lng: -57.5549408,
    },
  },
];

const api = {
  list: async (): Promise<Store[]> => MOCK,
  fetch: async (id: string): Promise<Store> => {
    const store = MOCK.find((store) => store.id === id);

    if (!store) {
      throw new Error("Store not found");
    }

    return store;
  },
  hot: async (): Promise<Store> => {
    const index = Math.floor(Math.random() * MOCK.length);

    return MOCK[index];
  },
};

export default api;
