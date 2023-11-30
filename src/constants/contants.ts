import { ICategories } from "../types/types";

// @ts-ignore
import cats from "../assets/ico/cat.ico";
// @ts-ignore
import bird from "../assets/ico/bird.ico";
// @ts-ignore
import discount from "../assets/ico/discount.ico";
// @ts-ignore
import dogs from "../assets/ico/dog.ico";
// @ts-ignore
import fish from "../assets/ico/fish.ico";
// @ts-ignore
import rats from "../assets/ico/rat.ico";

export const IMAGES_DISCOUNT = [
  "https://downloader.disk.yandex.ru/preview/d23144fdced0ab24809f74ef251fe10891e19dce30c95a426b00c444505edfdd/6568c4bd/ZjT6NWGixMxK0vPr0Nw2rFkW6PIrVCzuJm3VVshQV47FkjGQ90TzufXTiVXK-MAkiSLMIppB5fdCPAupi6ElpQ%3D%3D?uid=0&filename=discount_1.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=2048x2048",
  "https://downloader.disk.yandex.ru/preview/0ad52498165f7813e312bb3766bd3e380adc367df84e2680b2b99cc89dd56f1a/655f86da/9MefoaGUHp4LOGaK4y6aEZmqd6PAaEGdV9AHGW2qvuy8cLDHdwoEAgsA1b2d6A9Kx2oOrZqzj5GYL5FGaWi2uQ%3D%3D?uid=0&filename=discount_8.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=2048x2048",
  "https://4.downloader.disk.yandex.ru/preview/66905e02d18e29a45016dfc42daf16aa6bd09f65026a00c25fb6990f6faf80f2/inf/q1kWyMBMDDE26EwhM_iwu1kW6PIrVCzuJm3VVshQV47hTDCDwOPO___9Nzujb6l_ofcg2gJ6hjVV6Xy9kx0eSg%3D%3D?uid=1704833648&filename=discount_3.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=1704833648&tknv=v2&size=1838x935",
];

export const ANIMAL_CATEGORIES: ICategories[] = [
  {
    route: "discount",
    name: "Акции",
    imgUrl: discount,
  },
  {
    route: "cats",
    name: "Кошки",
    imgUrl: cats,
  },
  {
    route: "dogs",
    name: "Собаки",
    imgUrl: dogs,
  },
  {
    route: "rats",
    name: "Грызуны",
    imgUrl: rats,
  },
  {
    route: "fish",
    name: "Рыбы",
    imgUrl: fish,
  },
  {
    route: "bird",
    name: "Птицы",
    imgUrl: bird,
  },
];
