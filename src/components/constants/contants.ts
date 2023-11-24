import { ICategories } from "../../types/types";

// @ts-ignore
import cats from "../../assets/ico/cat.ico";
// @ts-ignore
import bird from "../../assets/ico/bird.ico";
// @ts-ignore
import discount from "../../assets/ico/discount.ico";
// @ts-ignore
import dogs from "../../assets/ico/dog.ico";
// @ts-ignore
import fish from "../../assets/ico/fish.ico";
// @ts-ignore
import rats from "../../assets/ico/rat.ico";

export const IMAGES_DISCOUNT = [
  "https://downloader.disk.yandex.ru/preview/0ad52498165f7813e312bb3766bd3e380adc367df84e2680b2b99cc89dd56f1a/655f86da/9MefoaGUHp4LOGaK4y6aEZmqd6PAaEGdV9AHGW2qvuy8cLDHdwoEAgsA1b2d6A9Kx2oOrZqzj5GYL5FGaWi2uQ%3D%3D?uid=0&filename=discount_8.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=2048x2048",
  "https://s115sas.storage.yandex.net/rdisk/48bc2c2b4767e719aa73f39d4970f38b9af5662dcfdd7f2ba2613ce84c23bfb8/655f8971/gcGA9NSaLq54xgcQLO7fRlH1iCeUBHD8FdV06EE60XdBcTPd2Cn4tqLKd2DJ51zFHvLDYuHfc76EpW8HiOyybg==?uid=1704833648&filename=discount_6.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=1704833648&fsize=84579&hid=b9b4be26ffb52e5d96ea744b9f04caee&media_type=image&tknv=v2&etag=8d00c38b6869d1cf0436e732a74de19f&rtoken=VgyoERtVPXKV&force_default=yes&ycrid=na-6dd7123bec0ee8186c256b404fc7a236-downloader14e&ts=60ad506f07e40&s=71d86abffd9cadc863b469233c6e647e0453e5aa04ab6463bad85b0a5d7709f1&pb=U2FsdGVkX18RLOItVX6j8Ad1_lJ5s3BJh-DqC2abAN2j2N-BpXW7TSkjyNPDySirJwzBh9BgrXllIiNknHaTTksuSpsutK4NKmK1BdUmt04",
  "https://s980sas.storage.yandex.net/rdisk/b5b732ce0193d007407cbba5b1975426ecfa411082ff7a39a4e5983825768f82/655f89d2/gcGA9NSaLq54xgcQLO7fRgOLc-GC-a5D2GteTXu2c6gNuPDu7OfnknjORyerr4c86GBJudCGJl7__AaVGPSVnw==?uid=1704833648&filename=discount_5.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=1704833648&fsize=84437&hid=fe110c899f76eba553e056035d5312d6&media_type=image&tknv=v2&etag=472196352f9fa79741f23b0bbd2b693f&rtoken=vfVxjtN8wpCT&force_default=yes&ycrid=na-a95b867af29d0a10e2663ccc1b7f23ae-downloader2h&ts=60ad50cb89880&s=855415e4f34d9eb1396f18bc6957cca8e391dbbe285ff5995699b632f2f1e1e3&pb=U2FsdGVkX1-mWoP4Lb4UtaMy_IVXVaNKAVeiww8JDbth1BMgIZSU0HdJ9vtFYfF-ciKbdxqVVZhV0liGGQwY7MY597kCNZwZx04_3BmSr1k",
  "https://s988sas.storage.yandex.net/rdisk/3680fcc186be08faea6c2686d2c9aa37b1426804f407ce87393fd3b2a7e7d6c3/655f8a07/gcGA9NSaLq54xgcQLO7fRilc2C5n0vf3P5OVEaW0Y7rL7TyizwgY-9OqAILFPDjB9g_-Gd1dT2O2kmd_-_Iphg==?uid=1704833648&filename=discount_4.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=1704833648&fsize=75461&hid=a22e214973100eb3a29a4d9f7c5b891f&media_type=image&tknv=v2&etag=fa10441114dc6eb8e7f42e214bb2b1ca&rtoken=Fht65saLiQvW&force_default=yes&ycrid=na-43331c3bfe02019474719d9b233fb4f6-downloader1h&ts=60ad50fe14fc0&s=6e808ae142c5a41b584fc4fb6e476a1b415134b3afbb26b327274fdaf36d71ea&pb=U2FsdGVkX1-JJJJqUMeXU25f9_5-DGFnNdccnz3E7Ud6gu8q3bUbRTWNklM9321qhfHmVEgb_Hz3_s720uP8BlHsY_d0D3gOFs8CfuHZW7M",
  "https://s393vla.storage.yandex.net/rdisk/89cbbef918e54948884db6899aa154a9f26f09d5a2a766e2b638e799406f6e8e/655f8a5b/gcGA9NSaLq54xgcQLO7fRvEvwnBr1joSP18yWBCIwi_H_q9f3ZIYHy5gvKg4EUXagM7dqTh26xA6WZzmL88Z0A==?uid=1704833648&filename=discount_3.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=1704833648&fsize=51125&hid=06cef71e2d12e33d23efff2bb87224cf&media_type=image&tknv=v2&etag=d062540e09d40e99a207c7c5c02e8b4b&rtoken=rvwGPekl13Zk&force_default=yes&ycrid=na-a0142bc95d28722aa37b62226e60e4ea-downloader6e&ts=60ad514e30cc0&s=4673dc3b7de87e0bf44b43a0873f0be0054f7831e353209838070fcb03e78165&pb=U2FsdGVkX19AAo6o9w26UfHUDhk-Mo841SjIsLdems5IFH1RvF8jpsiQURxWXB6X6fgyQCkFoTJPEMtRCj0B_5Kzzr1WjcvJJs-oxG1qd3o",
  "https://s594sas.storage.yandex.net/rdisk/96fbe53c1b259d27bba3f20cf1530ed0f802ccd45252fdf69cd2a1a0711ba66f/655f8a6b/gcGA9NSaLq54xgcQLO7fRoPZ-Lwg1QsgDd1mM8XtfcfjFDuJrp-kFMD-dpnTalgq-p6GxatJGI58lHorilfKwg==?uid=1704833648&filename=discount_2.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=1704833648&fsize=70231&hid=fa688891c1ecb885e6952c4b8057ab36&media_type=image&tknv=v2&etag=39092e7d296517379203bf0e87770936&rtoken=yW0zyAZkuLk8&force_default=yes&ycrid=na-46939983ae711b31ef55c3308819e039-downloader24h&ts=60ad515d730c0&s=6dbe7c9484809bd688454c57997b4354bf13ccd3de15de9a24c33b691d17d4a3&pb=U2FsdGVkX1_7cjCHu9cE0gDlIkdNhqKjpM_r2N8bwpoPcNHvnadIwr7CqGyTW2gTjqjbHcLeD_rdVHhNNAn9hUd3h2WYJL1eFmJ02wV906o",
  "https://s790sas.storage.yandex.net/rdisk/d2c0c6f8ef97bc360c1ce5736e2b55fa198c5a99fb1c004a9d10b777564d6b4b/655f8a81/gcGA9NSaLq54xgcQLO7fRi70U55jmemUXi4Bw3fgAeV43Sn_xAbS2msIYnsN-S5EnGTksbw6z9yc99E9xRrG0A==?uid=1704833648&filename=discount_1.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=1704833648&fsize=39578&hid=c098978f8a397163831ce4b1fa21c036&media_type=image&tknv=v2&etag=ce2483b8ceee667c394dd8a3f76511c7&rtoken=OQy9TMeeXyET&force_default=yes&ycrid=na-5736929cab4ce828cfcc8217131791ea-downloader1f&ts=60ad51726e240&s=be49c45043e4db550f745964319b662cc218816719e9a86260f3520d959edb14&pb=U2FsdGVkX18TtDTz7tMtOkh-iOBTZheEr9yUE-LXk9ZkffC_gqZ5xG-AxyAS2ckmUeBVktcqybVSnDh4wGvfbJZq6pZhPn50ZI2erybmk0o",
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
