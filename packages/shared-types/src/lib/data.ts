import { Game } from "./interfaces";

export const MockData: { games: Game[] } = {
  games: [
    {
      slug: 'the-witcher-3-wild-hunt',
      name: 'The Witcher 3: Wild Hunt',
      playtime: 46,
      platforms: [
        {
          platform: {
            id: 4,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 187,
            name: 'PlayStation 5',
            slug: 'playstation5',
          },
        },
        {
          platform: {
            id: 1,
            name: 'Xbox One',
            slug: 'xbox-one',
          },
        },
        {
          platform: {
            id: 18,
            name: 'PlayStation 4',
            slug: 'playstation4',
          },
        },
        {
          platform: {
            id: 186,
            name: 'Xbox Series S/X',
            slug: 'xbox-series-x',
          },
        },
        {
          platform: {
            id: 7,
            name: 'Nintendo Switch',
            slug: 'nintendo-switch',
          },
        },
      ],
      stores: [
        {
          store: {
            id: 1,
            name: 'Steam',
            slug: 'steam',
          },
        },
        {
          store: {
            id: 3,
            name: 'PlayStation Store',
            slug: 'playstation-store',
          },
        },
        {
          store: {
            id: 2,
            name: 'Xbox Store',
            slug: 'xbox-store',
          },
        },
        {
          store: {
            id: 5,
            name: 'GOG',
            slug: 'gog',
          },
        },
        {
          store: {
            id: 6,
            name: 'Nintendo Store',
            slug: 'nintendo',
          },
        },
      ],
      released: '2015-05-18',
      tba: false,
      background_image:
        'https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg',
      rating: 4.66,
      rating_top: 5,
      ratings: [
        {
          id: 5,
          title: 'exceptional',
          count: 4814,
          percent: 77.41,
        },
        {
          id: 4,
          title: 'recommended',
          count: 993,
          percent: 15.97,
        },
        {
          id: 3,
          title: 'meh',
          count: 257,
          percent: 4.13,
        },
        {
          id: 1,
          title: 'skip',
          count: 155,
          percent: 2.49,
        },
      ],
      ratings_count: 6122,
      reviews_text_count: 67,
      added: 18740,
      added_by_status: {
        yet: 1072,
        owned: 10763,
        beaten: 4467,
        toplay: 739,
        dropped: 858,
        playing: 841,
      },
      metacritic: 92,
      suggestions_count: 666,
      updated: '2023-07-14T02:48:05',
      id: 3328,
      score: null,
      clip: null,
      tags: [
        {
          id: 31,
          name: 'Singleplayer',
          slug: 'singleplayer',
          language: 'eng',
          games_count: 206544,
          image_background:
            'https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg',
        },
        {
          id: 42396,
          name: 'Для одного игрока',
          slug: 'dlia-odnogo-igroka',
          language: 'rus',
          games_count: 35171,
          image_background:
            'https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg',
        },
        {
          id: 42417,
          name: 'Экшен',
          slug: 'ekshen',
          language: 'rus',
          games_count: 32438,
          image_background:
            'https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg',
        },
        {
          id: 42392,
          name: 'Приключение',
          slug: 'prikliuchenie',
          language: 'rus',
          games_count: 30382,
          image_background:
            'https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg',
        },
        {
          id: 40836,
          name: 'Full controller support',
          slug: 'full-controller-support',
          language: 'eng',
          games_count: 14476,
          image_background:
            'https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg',
        },
        {
          id: 13,
          name: 'Atmospheric',
          slug: 'atmospheric',
          language: 'eng',
          games_count: 29635,
          image_background:
            'https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg',
        },
        {
          id: 42400,
          name: 'Атмосфера',
          slug: 'atmosfera',
          language: 'rus',
          games_count: 6083,
          image_background:
            'https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg',
        },
        {
          id: 42401,
          name: 'Отличный саундтрек',
          slug: 'otlichnyi-saundtrek',
          language: 'rus',
          games_count: 4463,
          image_background:
            'https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg',
        },
        {
          id: 42,
          name: 'Great Soundtrack',
          slug: 'great-soundtrack',
          language: 'eng',
          games_count: 3241,
          image_background:
            'https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg',
        },
        {
          id: 42394,
          name: 'Глубокий сюжет',
          slug: 'glubokii-siuzhet',
          language: 'rus',
          games_count: 9153,
          image_background:
            'https://media.rawg.io/media/games/b7b/b7b8381707152afc7d91f5d95de70e39.jpg',
        },
        {
          id: 24,
          name: 'RPG',
          slug: 'rpg',
          language: 'eng',
          games_count: 17413,
          image_background:
            'https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg',
        },
        {
          id: 42412,
          name: 'Ролевая игра',
          slug: 'rolevaia-igra',
          language: 'rus',
          games_count: 13830,
          image_background:
            'https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg',
        },
        {
          id: 118,
          name: 'Story Rich',
          slug: 'story-rich',
          language: 'eng',
          games_count: 18334,
          image_background:
            'https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg',
        },
        {
          id: 42442,
          name: 'Открытый мир',
          slug: 'otkrytyi-mir',
          language: 'rus',
          games_count: 4494,
          image_background:
            'https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg',
        },
        {
          id: 36,
          name: 'Open World',
          slug: 'open-world',
          language: 'eng',
          games_count: 6316,
          image_background:
            'https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg',
        },
        {
          id: 42435,
          name: 'Шедевр',
          slug: 'shedevr',
          language: 'rus',
          games_count: 1059,
          image_background:
            'https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg',
        },
        {
          id: 149,
          name: 'Third Person',
          slug: 'third-person',
          language: 'eng',
          games_count: 9504,
          image_background:
            'https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg',
        },
        {
          id: 42441,
          name: 'От третьего лица',
          slug: 'ot-tretego-litsa',
          language: 'rus',
          games_count: 5015,
          image_background:
            'https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg',
        },
        {
          id: 42480,
          name: 'Фэнтези',
          slug: 'fentezi',
          language: 'rus',
          games_count: 8364,
          image_background:
            'https://media.rawg.io/media/games/8d4/8d46786ca86b1d95f3dc7e700e2dc4dd.jpg',
        },
        {
          id: 64,
          name: 'Fantasy',
          slug: 'fantasy',
          language: 'eng',
          games_count: 24622,
          image_background:
            'https://media.rawg.io/media/screenshots/88b/88b5f27f07d6ca2f8a3cd0b36e03a670.jpg',
        },
        {
          id: 37,
          name: 'Sandbox',
          slug: 'sandbox',
          language: 'eng',
          games_count: 5956,
          image_background:
            'https://media.rawg.io/media/games/c50/c5085506fe4b5e20fc7aa5ace842c20b.jpg',
        },
        {
          id: 97,
          name: 'Action RPG',
          slug: 'action-rpg',
          language: 'eng',
          games_count: 5761,
          image_background:
            'https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg',
        },
        {
          id: 42489,
          name: 'Ролевой экшен',
          slug: 'rolevoi-ekshen',
          language: 'rus',
          games_count: 2740,
          image_background:
            'https://media.rawg.io/media/games/21a/21ad672cedee9b4378abb6c2d2e626ee.jpg',
        },
        {
          id: 42477,
          name: 'Мрачная',
          slug: 'mrachnaia',
          language: 'rus',
          games_count: 3664,
          image_background:
            'https://media.rawg.io/media/games/7ac/7aca7ccf0e70cd0974cb899ab9e5158e.jpg',
        },
        {
          id: 41,
          name: 'Dark',
          slug: 'dark',
          language: 'eng',
          games_count: 14171,
          image_background:
            'https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg',
        },
        {
          id: 42406,
          name: 'Нагота',
          slug: 'nagota',
          language: 'rus',
          games_count: 4644,
          image_background:
            'https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg',
        },
        {
          id: 44,
          name: 'Nudity',
          slug: 'nudity',
          language: 'eng',
          games_count: 5029,
          image_background:
            'https://media.rawg.io/media/games/8ca/8ca40b562a755d6a0e30d48e6c74b178.jpg',
        },
        {
          id: 42390,
          name: 'Решения с последствиями',
          slug: 'resheniia-s-posledstviiami',
          language: 'rus',
          games_count: 3860,
          image_background:
            'https://media.rawg.io/media/games/a6c/a6ccd34125c594abf1a9c9821b9a715d.jpg',
        },
        {
          id: 336,
          name: 'controller support',
          slug: 'controller-support',
          language: 'eng',
          games_count: 293,
          image_background:
            'https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg',
        },
        {
          id: 42529,
          name: 'Для взрослых',
          slug: 'dlia-vzroslykh',
          language: 'rus',
          games_count: 2035,
          image_background:
            'https://media.rawg.io/media/games/5fa/5fae5fec3c943179e09da67a4427d68f.jpg',
        },
        {
          id: 145,
          name: 'Choices Matter',
          slug: 'choices-matter',
          language: 'eng',
          games_count: 3651,
          image_background:
            'https://media.rawg.io/media/games/471/4712c9ac591f556f553556b864a7e92b.jpg',
        },
        {
          id: 42506,
          name: 'Тёмное фэнтези',
          slug: 'tiomnoe-fentezi',
          language: 'rus',
          games_count: 1970,
          image_background:
            'https://media.rawg.io/media/games/511/5116b4524cea34c6b3f12e0ca027d850.jpg',
        },
        {
          id: 192,
          name: 'Mature',
          slug: 'mature',
          language: 'eng',
          games_count: 2222,
          image_background:
            'https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg',
        },
        {
          id: 40,
          name: 'Dark Fantasy',
          slug: 'dark-fantasy',
          language: 'eng',
          games_count: 3283,
          image_background:
            'https://media.rawg.io/media/games/a6c/a6ccd34125c594abf1a9c9821b9a715d.jpg',
        },
        {
          id: 42391,
          name: 'Средневековье',
          slug: 'srednevekove',
          language: 'rus',
          games_count: 2353,
          image_background:
            'https://media.rawg.io/media/games/d09/d096ad37b7f522e11c02848252213a9a.jpg',
        },
        {
          id: 66,
          name: 'Medieval',
          slug: 'medieval',
          language: 'eng',
          games_count: 5409,
          image_background:
            'https://media.rawg.io/media/games/7f0/7f021d4a3577ac9d591a628a431fc2e5.jpg',
        },
        {
          id: 82,
          name: 'Magic',
          slug: 'magic',
          language: 'eng',
          games_count: 8148,
          image_background:
            'https://media.rawg.io/media/games/330/330952c1726bbb56fc3b9f8a8c83ab1d.jpg',
        },
        {
          id: 42478,
          name: 'Магия',
          slug: 'magiia',
          language: 'rus',
          games_count: 2790,
          image_background:
            'https://media.rawg.io/media/games/886/8868f9ea0c91d45316319ebf5dd4fc64.jpg',
        },
        {
          id: 218,
          name: 'Multiple Endings',
          slug: 'multiple-endings',
          language: 'eng',
          games_count: 7148,
          image_background:
            'https://media.rawg.io/media/games/e63/e635b8c7fbe3ffd69ad6c1c586cd250e.jpg',
        },
        {
          id: 42508,
          name: 'Нелинейность',
          slug: 'nelineinost',
          language: 'rus',
          games_count: 1017,
          image_background:
            'https://media.rawg.io/media/games/046/0464f4a36cd975a37c95b93b06058855.jpg',
        },
      ],
      esrb_rating: {
        id: 4,
        name: 'Mature',
        slug: 'mature',
        name_en: 'Mature',
        name_ru: 'С 17 лет',
      },
      user_game: null,
      reviews_count: 6219,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      short_screenshots: [
        {
          id: -1,
          image:
            'https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg',
        },
        {
          id: 30336,
          image:
            'https://media.rawg.io/media/screenshots/1ac/1ac19f31974314855ad7be266adeb500.jpg',
        },
        {
          id: 30337,
          image:
            'https://media.rawg.io/media/screenshots/6a0/6a08afca95261a2fe221ea9e01d28762.jpg',
        },
        {
          id: 30338,
          image:
            'https://media.rawg.io/media/screenshots/cdd/cdd31b6b4a687425a87b5ce231ac89d7.jpg',
        },
        {
          id: 30339,
          image:
            'https://media.rawg.io/media/screenshots/862/862397b153221a625922d3bb66337834.jpg',
        },
        {
          id: 30340,
          image:
            'https://media.rawg.io/media/screenshots/166/166787c442a45f52f4f230c33fd7d605.jpg',
        },
        {
          id: 30342,
          image:
            'https://media.rawg.io/media/screenshots/f63/f6373ee614046d81503d63f167181803.jpg',
        },
      ],
      parent_platforms: [
        {
          platform: {
            id: 1,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 2,
            name: 'PlayStation',
            slug: 'playstation',
          },
        },
        {
          platform: {
            id: 3,
            name: 'Xbox',
            slug: 'xbox',
          },
        },
        {
          platform: {
            id: 7,
            name: 'Nintendo',
            slug: 'nintendo',
          },
        },
      ],
      genres: [
        {
          id: 3,
          name: 'Adventure',
          slug: 'adventure',
        },
        {
          id: 4,
          name: 'Action',
          slug: 'action',
        },
        {
          id: 5,
          name: 'RPG',
          slug: 'role-playing-games-rpg',
        },
      ],
    },
    {
      slug: 'portal',
      name: 'Portal',
      playtime: 4,
      platforms: [
        {
          platform: {
            id: 4,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 7,
            name: 'Nintendo Switch',
            slug: 'nintendo-switch',
          },
        },
        {
          platform: {
            id: 21,
            name: 'Android',
            slug: 'android',
          },
        },
        {
          platform: {
            id: 5,
            name: 'macOS',
            slug: 'macos',
          },
        },
        {
          platform: {
            id: 6,
            name: 'Linux',
            slug: 'linux',
          },
        },
        {
          platform: {
            id: 14,
            name: 'Xbox 360',
            slug: 'xbox360',
          },
        },
        {
          platform: {
            id: 16,
            name: 'PlayStation 3',
            slug: 'playstation3',
          },
        },
      ],
      stores: [
        {
          store: {
            id: 1,
            name: 'Steam',
            slug: 'steam',
          },
        },
        {
          store: {
            id: 8,
            name: 'Google Play',
            slug: 'google-play',
          },
        },
      ],
      released: '2007-10-09',
      tba: false,
      background_image:
        'https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg',
      rating: 4.51,
      rating_top: 5,
      ratings: [
        {
          id: 5,
          title: 'exceptional',
          count: 2736,
          percent: 60.98,
        },
        {
          id: 4,
          title: 'recommended',
          count: 1487,
          percent: 33.14,
        },
        {
          id: 3,
          title: 'meh',
          count: 172,
          percent: 3.83,
        },
        {
          id: 1,
          title: 'skip',
          count: 92,
          percent: 2.05,
        },
      ],
      ratings_count: 4450,
      reviews_text_count: 24,
      added: 14971,
      added_by_status: {
        yet: 414,
        owned: 9204,
        beaten: 4681,
        toplay: 242,
        dropped: 354,
        playing: 76,
      },
      metacritic: 90,
      suggestions_count: 283,
      updated: '2023-07-13T17:21:50',
      id: 13536,
      score: null,
      clip: null,
      tags: [
        {
          id: 31,
          name: 'Singleplayer',
          slug: 'singleplayer',
          language: 'eng',
          games_count: 206544,
          image_background:
            'https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg',
        },
        {
          id: 42396,
          name: 'Для одного игрока',
          slug: 'dlia-odnogo-igroka',
          language: 'rus',
          games_count: 35171,
          image_background:
            'https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg',
        },
        {
          id: 42417,
          name: 'Экшен',
          slug: 'ekshen',
          language: 'rus',
          games_count: 32438,
          image_background:
            'https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg',
        },
        {
          id: 42392,
          name: 'Приключение',
          slug: 'prikliuchenie',
          language: 'rus',
          games_count: 30382,
          image_background:
            'https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg',
        },
        {
          id: 40847,
          name: 'Steam Achievements',
          slug: 'steam-achievements',
          language: 'eng',
          games_count: 30840,
          image_background:
            'https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg',
        },
        {
          id: 13,
          name: 'Atmospheric',
          slug: 'atmospheric',
          language: 'eng',
          games_count: 29635,
          image_background:
            'https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg',
        },
        {
          id: 42400,
          name: 'Атмосфера',
          slug: 'atmosfera',
          language: 'rus',
          games_count: 6083,
          image_background:
            'https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg',
        },
        {
          id: 42401,
          name: 'Отличный саундтрек',
          slug: 'otlichnyi-saundtrek',
          language: 'rus',
          games_count: 4463,
          image_background:
            'https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg',
        },
        {
          id: 42,
          name: 'Great Soundtrack',
          slug: 'great-soundtrack',
          language: 'eng',
          games_count: 3241,
          image_background:
            'https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg',
        },
        {
          id: 42394,
          name: 'Глубокий сюжет',
          slug: 'glubokii-siuzhet',
          language: 'rus',
          games_count: 9153,
          image_background:
            'https://media.rawg.io/media/games/b7b/b7b8381707152afc7d91f5d95de70e39.jpg',
        },
        {
          id: 118,
          name: 'Story Rich',
          slug: 'story-rich',
          language: 'eng',
          games_count: 18334,
          image_background:
            'https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg',
        },
        {
          id: 8,
          name: 'First-Person',
          slug: 'first-person',
          language: 'eng',
          games_count: 28676,
          image_background:
            'https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg',
        },
        {
          id: 42429,
          name: 'От первого лица',
          slug: 'ot-pervogo-litsa',
          language: 'rus',
          games_count: 7731,
          image_background:
            'https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg',
        },
        {
          id: 42435,
          name: 'Шедевр',
          slug: 'shedevr',
          language: 'rus',
          games_count: 1059,
          image_background:
            'https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg',
        },
        {
          id: 32,
          name: 'Sci-fi',
          slug: 'sci-fi',
          language: 'eng',
          games_count: 17236,
          image_background:
            'https://media.rawg.io/media/games/198/1988a337305e008b41d7f536ce9b73f6.jpg',
        },
        {
          id: 42423,
          name: 'Научная фантастика',
          slug: 'nauchnaia-fantastika',
          language: 'rus',
          games_count: 6108,
          image_background:
            'https://media.rawg.io/media/games/8e4/8e4de3f54ac659e08a7ba6a2b731682a.jpg',
        },
        {
          id: 40845,
          name: 'Partial Controller Support',
          slug: 'partial-controller-support',
          language: 'eng',
          games_count: 9866,
          image_background:
            'https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg',
        },
        {
          id: 30,
          name: 'FPS',
          slug: 'fps',
          language: 'eng',
          games_count: 12151,
          image_background:
            'https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg',
        },
        {
          id: 42427,
          name: 'Шутер от первого лица',
          slug: 'shuter-ot-pervogo-litsa',
          language: 'rus',
          games_count: 4139,
          image_background:
            'https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg',
        },
        {
          id: 42482,
          name: 'Смешная',
          slug: 'smeshnaia',
          language: 'rus',
          games_count: 6600,
          image_background:
            'https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg',
        },
        {
          id: 42465,
          name: 'Головоломка',
          slug: 'golovolomka',
          language: 'rus',
          games_count: 11685,
          image_background:
            'https://media.rawg.io/media/games/fd8/fd882c8267a44621a0de6f9cec77ae90.jpg',
        },
        {
          id: 4,
          name: 'Funny',
          slug: 'funny',
          language: 'eng',
          games_count: 22604,
          image_background:
            'https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg',
        },
        {
          id: 42461,
          name: 'Классика',
          slug: 'klassika',
          language: 'rus',
          games_count: 1394,
          image_background:
            'https://media.rawg.io/media/games/7a2/7a2500ee8b2c0e1ff268bb4479463dea.jpg',
        },
        {
          id: 193,
          name: 'Classic',
          slug: 'classic',
          language: 'eng',
          games_count: 1728,
          image_background:
            'https://media.rawg.io/media/games/b54/b54598d1d5cc31899f4f0a7e3122a7b0.jpg',
        },
        {
          id: 189,
          name: 'Female Protagonist',
          slug: 'female-protagonist',
          language: 'eng',
          games_count: 10614,
          image_background:
            'https://media.rawg.io/media/games/5a4/5a44112251d70a25291cc33757220fce.jpg',
        },
        {
          id: 42481,
          name: 'Юмор',
          slug: 'iumor',
          language: 'rus',
          games_count: 4260,
          image_background:
            'https://media.rawg.io/media/games/e04/e04963f3ac4c4fa83a1dc0b9231e50db.jpg',
        },
        {
          id: 42404,
          name: 'Женщина-протагонист',
          slug: 'zhenshchina-protagonist',
          language: 'rus',
          games_count: 2413,
          image_background:
            'https://media.rawg.io/media/games/3cf/3cff89996570cf29a10eb9cd967dcf73.jpg',
        },
        {
          id: 123,
          name: 'Comedy',
          slug: 'comedy',
          language: 'eng',
          games_count: 10929,
          image_background:
            'https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg',
        },
        {
          id: 42463,
          name: 'Платформер',
          slug: 'platformer-2',
          language: 'rus',
          games_count: 6582,
          image_background:
            'https://media.rawg.io/media/games/9cc/9cc11e2e81403186c7fa9c00c143d6e4.jpg',
        },
        {
          id: 40838,
          name: 'Includes level editor',
          slug: 'includes-level-editor',
          language: 'eng',
          games_count: 1648,
          image_background:
            'https://media.rawg.io/media/games/e0f/e0f05a97ff926acf4c8f43e0849b6832.jpg',
        },
        {
          id: 40833,
          name: 'Captions available',
          slug: 'captions-available',
          language: 'eng',
          games_count: 1236,
          image_background:
            'https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg',
        },
        {
          id: 111,
          name: 'Short',
          slug: 'short',
          language: 'eng',
          games_count: 57476,
          image_background:
            'https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg',
        },
        {
          id: 42457,
          name: 'Короткая',
          slug: 'korotkaia',
          language: 'rus',
          games_count: 1345,
          image_background:
            'https://media.rawg.io/media/games/6a2/6a2e48933245e2cd3c92248c75c925e1.jpg',
        },
        {
          id: 42500,
          name: 'Физика',
          slug: 'fizika',
          language: 'rus',
          games_count: 3762,
          image_background:
            'https://media.rawg.io/media/games/ec3/ec3a7db7b8ab5a71aad622fe7c62632f.jpg',
        },
        {
          id: 114,
          name: 'Physics',
          slug: 'physics',
          language: 'eng',
          games_count: 17813,
          image_background:
            'https://media.rawg.io/media/games/b38/b3825d2c32be1c43d667cc20113230cf.jpg',
        },
        {
          id: 42502,
          name: 'Чёрный юмор',
          slug: 'chiornyi-iumor',
          language: 'rus',
          games_count: 1191,
          image_background:
            'https://media.rawg.io/media/games/df2/df20fd77db56ae7b0a26a7ff4baa9ccc.jpg',
        },
        {
          id: 148,
          name: 'Dark Humor',
          slug: 'dark-humor',
          language: 'eng',
          games_count: 2480,
          image_background:
            'https://media.rawg.io/media/games/e3d/e3ddc524c6292a435d01d97cc5f42ea7.jpg',
        },
        {
          id: 40834,
          name: 'Commentary available',
          slug: 'commentary-available',
          language: 'eng',
          games_count: 254,
          image_background:
            'https://media.rawg.io/media/games/726/7263e11b6bfb15abe35dcfa3b26147f5.jpg',
        },
        {
          id: 40839,
          name: 'Includes Source SDK',
          slug: 'includes-source-sdk',
          language: 'eng',
          games_count: 60,
          image_background:
            'https://media.rawg.io/media/games/48e/48e63bbddeddbe9ba81942772b156664.jpg',
        },
        {
          id: 87,
          name: 'Science',
          slug: 'science',
          language: 'eng',
          games_count: 1519,
          image_background:
            'https://media.rawg.io/media/games/cae/caeb9d0cb154124b132d51861735431e.jpg',
        },
        {
          id: 42501,
          name: 'Наука',
          slug: 'nauka',
          language: 'rus',
          games_count: 561,
          image_background:
            'https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg',
        },
      ],
      esrb_rating: {
        id: 3,
        name: 'Teen',
        slug: 'teen',
        name_en: 'Teen',
        name_ru: 'С 13 лет',
      },
      user_game: null,
      reviews_count: 4487,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      short_screenshots: [
        {
          id: -1,
          image:
            'https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg',
        },
        {
          id: 115793,
          image:
            'https://media.rawg.io/media/screenshots/99e/99e94bd55eb75fa6e75c3dcbb1a570b2.jpg',
        },
        {
          id: 115794,
          image:
            'https://media.rawg.io/media/screenshots/2f0/2f0297a46934d9fa914c626902b1ce20.jpg',
        },
        {
          id: 115795,
          image:
            'https://media.rawg.io/media/screenshots/3b3/3b3713fbca6194dfc4d6e8a8d006d354.jpg',
        },
        {
          id: 115796,
          image:
            'https://media.rawg.io/media/screenshots/c6f/c6f9afc3e4dd51068b22f04acbc6ca99.jpg',
        },
        {
          id: 115797,
          image:
            'https://media.rawg.io/media/screenshots/748/74841207eec76ebc7fc03210168bfb7e.jpg',
        },
        {
          id: 115798,
          image:
            'https://media.rawg.io/media/screenshots/e72/e7256b4caedf099bcb8ebd332f892334.jpg',
        },
      ],
      parent_platforms: [
        {
          platform: {
            id: 1,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 2,
            name: 'PlayStation',
            slug: 'playstation',
          },
        },
        {
          platform: {
            id: 3,
            name: 'Xbox',
            slug: 'xbox',
          },
        },
        {
          platform: {
            id: 8,
            name: 'Android',
            slug: 'android',
          },
        },
        {
          platform: {
            id: 5,
            name: 'Apple Macintosh',
            slug: 'mac',
          },
        },
        {
          platform: {
            id: 6,
            name: 'Linux',
            slug: 'linux',
          },
        },
        {
          platform: {
            id: 7,
            name: 'Nintendo',
            slug: 'nintendo',
          },
        },
      ],
      genres: [
        {
          id: 3,
          name: 'Adventure',
          slug: 'adventure',
        },
        {
          id: 7,
          name: 'Puzzle',
          slug: 'puzzle',
        },
      ],
    },
    {
      slug: 'the-elder-scrolls-v-skyrim',
      name: 'The Elder Scrolls V: Skyrim',
      playtime: 46,
      platforms: [
        {
          platform: {
            id: 4,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 7,
            name: 'Nintendo Switch',
            slug: 'nintendo-switch',
          },
        },
        {
          platform: {
            id: 14,
            name: 'Xbox 360',
            slug: 'xbox360',
          },
        },
        {
          platform: {
            id: 16,
            name: 'PlayStation 3',
            slug: 'playstation3',
          },
        },
      ],
      stores: [
        {
          store: {
            id: 1,
            name: 'Steam',
            slug: 'steam',
          },
        },
        {
          store: {
            id: 3,
            name: 'PlayStation Store',
            slug: 'playstation-store',
          },
        },
        {
          store: {
            id: 6,
            name: 'Nintendo Store',
            slug: 'nintendo',
          },
        },
        {
          store: {
            id: 7,
            name: 'Xbox 360 Store',
            slug: 'xbox360',
          },
        },
      ],
      released: '2011-11-11',
      tba: false,
      background_image:
        'https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg',
      rating: 4.42,
      rating_top: 5,
      ratings: [
        {
          id: 5,
          title: 'exceptional',
          count: 2533,
          percent: 57.26,
        },
        {
          id: 4,
          title: 'recommended',
          count: 1400,
          percent: 31.65,
        },
        {
          id: 3,
          title: 'meh',
          count: 396,
          percent: 8.95,
        },
        {
          id: 1,
          title: 'skip',
          count: 95,
          percent: 2.15,
        },
      ],
      ratings_count: 4379,
      reviews_text_count: 31,
      added: 14760,
      added_by_status: {
        yet: 480,
        owned: 8778,
        beaten: 3515,
        toplay: 386,
        dropped: 1230,
        playing: 371,
      },
      metacritic: 94,
      suggestions_count: 595,
      updated: '2023-07-13T17:21:47',
      id: 5679,
      score: null,
      clip: null,
      tags: [
        {
          id: 31,
          name: 'Singleplayer',
          slug: 'singleplayer',
          language: 'eng',
          games_count: 206544,
          image_background:
            'https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg',
        },
        {
          id: 42396,
          name: 'Для одного игрока',
          slug: 'dlia-odnogo-igroka',
          language: 'rus',
          games_count: 35171,
          image_background:
            'https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg',
        },
        {
          id: 42417,
          name: 'Экшен',
          slug: 'ekshen',
          language: 'rus',
          games_count: 32438,
          image_background:
            'https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg',
        },
        {
          id: 42392,
          name: 'Приключение',
          slug: 'prikliuchenie',
          language: 'rus',
          games_count: 30382,
          image_background:
            'https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg',
        },
        {
          id: 40847,
          name: 'Steam Achievements',
          slug: 'steam-achievements',
          language: 'eng',
          games_count: 30840,
          image_background:
            'https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg',
        },
        {
          id: 13,
          name: 'Atmospheric',
          slug: 'atmospheric',
          language: 'eng',
          games_count: 29635,
          image_background:
            'https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg',
        },
        {
          id: 40849,
          name: 'Steam Cloud',
          slug: 'steam-cloud',
          language: 'eng',
          games_count: 14345,
          image_background:
            'https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg',
        },
        {
          id: 42400,
          name: 'Атмосфера',
          slug: 'atmosfera',
          language: 'rus',
          games_count: 6083,
          image_background:
            'https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg',
        },
        {
          id: 7808,
          name: 'steam-trading-cards',
          slug: 'steam-trading-cards',
          language: 'eng',
          games_count: 7571,
          image_background:
            'https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg',
        },
        {
          id: 42401,
          name: 'Отличный саундтрек',
          slug: 'otlichnyi-saundtrek',
          language: 'rus',
          games_count: 4463,
          image_background:
            'https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg',
        },
        {
          id: 42,
          name: 'Great Soundtrack',
          slug: 'great-soundtrack',
          language: 'eng',
          games_count: 3241,
          image_background:
            'https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg',
        },
        {
          id: 42394,
          name: 'Глубокий сюжет',
          slug: 'glubokii-siuzhet',
          language: 'rus',
          games_count: 9153,
          image_background:
            'https://media.rawg.io/media/games/b7b/b7b8381707152afc7d91f5d95de70e39.jpg',
        },
        {
          id: 24,
          name: 'RPG',
          slug: 'rpg',
          language: 'eng',
          games_count: 17413,
          image_background:
            'https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg',
        },
        {
          id: 42412,
          name: 'Ролевая игра',
          slug: 'rolevaia-igra',
          language: 'rus',
          games_count: 13830,
          image_background:
            'https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg',
        },
        {
          id: 118,
          name: 'Story Rich',
          slug: 'story-rich',
          language: 'eng',
          games_count: 18334,
          image_background:
            'https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg',
        },
        {
          id: 42442,
          name: 'Открытый мир',
          slug: 'otkrytyi-mir',
          language: 'rus',
          games_count: 4494,
          image_background:
            'https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg',
        },
        {
          id: 36,
          name: 'Open World',
          slug: 'open-world',
          language: 'eng',
          games_count: 6316,
          image_background:
            'https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg',
        },
        {
          id: 8,
          name: 'First-Person',
          slug: 'first-person',
          language: 'eng',
          games_count: 28676,
          image_background:
            'https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg',
        },
        {
          id: 42429,
          name: 'От первого лица',
          slug: 'ot-pervogo-litsa',
          language: 'rus',
          games_count: 7731,
          image_background:
            'https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg',
        },
        {
          id: 42435,
          name: 'Шедевр',
          slug: 'shedevr',
          language: 'rus',
          games_count: 1059,
          image_background:
            'https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg',
        },
        {
          id: 149,
          name: 'Third Person',
          slug: 'third-person',
          language: 'eng',
          games_count: 9504,
          image_background:
            'https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg',
        },
        {
          id: 42441,
          name: 'От третьего лица',
          slug: 'ot-tretego-litsa',
          language: 'rus',
          games_count: 5015,
          image_background:
            'https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg',
        },
        {
          id: 40845,
          name: 'Partial Controller Support',
          slug: 'partial-controller-support',
          language: 'eng',
          games_count: 9866,
          image_background:
            'https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg',
        },
        {
          id: 42480,
          name: 'Фэнтези',
          slug: 'fentezi',
          language: 'rus',
          games_count: 8364,
          image_background:
            'https://media.rawg.io/media/games/8d4/8d46786ca86b1d95f3dc7e700e2dc4dd.jpg',
        },
        {
          id: 64,
          name: 'Fantasy',
          slug: 'fantasy',
          language: 'eng',
          games_count: 24622,
          image_background:
            'https://media.rawg.io/media/screenshots/88b/88b5f27f07d6ca2f8a3cd0b36e03a670.jpg',
        },
        {
          id: 37,
          name: 'Sandbox',
          slug: 'sandbox',
          language: 'eng',
          games_count: 5956,
          image_background:
            'https://media.rawg.io/media/games/c50/c5085506fe4b5e20fc7aa5ace842c20b.jpg',
        },
        {
          id: 42444,
          name: 'Песочница',
          slug: 'pesochnitsa',
          language: 'rus',
          games_count: 3191,
          image_background:
            'https://media.rawg.io/media/games/15c/15c95a4915f88a3e89c821526afe05fc.jpg',
        },
        {
          id: 97,
          name: 'Action RPG',
          slug: 'action-rpg',
          language: 'eng',
          games_count: 5761,
          image_background:
            'https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg',
        },
        {
          id: 42489,
          name: 'Ролевой экшен',
          slug: 'rolevoi-ekshen',
          language: 'rus',
          games_count: 2740,
          image_background:
            'https://media.rawg.io/media/games/21a/21ad672cedee9b4378abb6c2d2e626ee.jpg',
        },
        {
          id: 40852,
          name: 'Steam Workshop',
          slug: 'steam-workshop',
          language: 'eng',
          games_count: 1324,
          image_background:
            'https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg',
        },
        {
          id: 468,
          name: 'role-playing',
          slug: 'role-playing',
          language: 'eng',
          games_count: 1499,
          image_background:
            'https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg',
        },
        {
          id: 62,
          name: 'Moddable',
          slug: 'moddable',
          language: 'eng',
          games_count: 774,
          image_background:
            'https://media.rawg.io/media/games/9af/9af24c1886e2c7b52a4a2c65aa874638.jpg',
        },
        {
          id: 42438,
          name: 'Поддержка модификаций',
          slug: 'podderzhka-modifikatsii',
          language: 'rus',
          games_count: 586,
          image_background:
            'https://media.rawg.io/media/games/9af/9af24c1886e2c7b52a4a2c65aa874638.jpg',
        },
        {
          id: 42530,
          name: 'Кастомизация персонажа',
          slug: 'kastomizatsiia-personazha',
          language: 'rus',
          games_count: 2775,
          image_background:
            'https://media.rawg.io/media/games/62c/62c7c8b28a27b83680b22fb9d33fc619.jpg',
        },
        {
          id: 121,
          name: 'Character Customization',
          slug: 'character-customization',
          language: 'eng',
          games_count: 3556,
          image_background:
            'https://media.rawg.io/media/games/10d/10d19e52e5e8415d16a4d344fe711874.jpg',
        },
        {
          id: 40,
          name: 'Dark Fantasy',
          slug: 'dark-fantasy',
          language: 'eng',
          games_count: 3283,
          image_background:
            'https://media.rawg.io/media/games/a6c/a6ccd34125c594abf1a9c9821b9a715d.jpg',
        },
        {
          id: 42391,
          name: 'Средневековье',
          slug: 'srednevekove',
          language: 'rus',
          games_count: 2353,
          image_background:
            'https://media.rawg.io/media/games/d09/d096ad37b7f522e11c02848252213a9a.jpg',
        },
        {
          id: 66,
          name: 'Medieval',
          slug: 'medieval',
          language: 'eng',
          games_count: 5409,
          image_background:
            'https://media.rawg.io/media/games/7f0/7f021d4a3577ac9d591a628a431fc2e5.jpg',
        },
        {
          id: 82,
          name: 'Magic',
          slug: 'magic',
          language: 'eng',
          games_count: 8148,
          image_background:
            'https://media.rawg.io/media/games/330/330952c1726bbb56fc3b9f8a8c83ab1d.jpg',
        },
        {
          id: 42478,
          name: 'Магия',
          slug: 'magiia',
          language: 'rus',
          games_count: 2790,
          image_background:
            'https://media.rawg.io/media/games/886/8868f9ea0c91d45316319ebf5dd4fc64.jpg',
        },
        {
          id: 205,
          name: 'Lore-Rich',
          slug: 'lore-rich',
          language: 'eng',
          games_count: 838,
          image_background:
            'https://media.rawg.io/media/games/bdc/bdcb4e528bdd91bc4b3ab75fedb31f7b.jpg',
        },
        {
          id: 42594,
          name: 'Проработанная вселенная',
          slug: 'prorabotannaia-vselennaia',
          language: 'rus',
          games_count: 865,
          image_background:
            'https://media.rawg.io/media/screenshots/871/87167cbda7085dbeb98bfc92c19d5a42.jpg',
        },
        {
          id: 215,
          name: 'Dragons',
          slug: 'dragons',
          language: 'eng',
          games_count: 2416,
          image_background:
            'https://media.rawg.io/media/games/3e5/3e5b137b31a674513af88ce6f24994e6.jpg',
        },
        {
          id: 42614,
          name: 'Драконы',
          slug: 'drakony',
          language: 'rus',
          games_count: 508,
          image_background:
            'https://media.rawg.io/media/games/c81/c812e158129e00c9b0f096ae8a0bb7d6.jpg',
        },
      ],
      esrb_rating: {
        id: 4,
        name: 'Mature',
        slug: 'mature',
        name_en: 'Mature',
        name_ru: 'С 17 лет',
      },
      user_game: null,
      reviews_count: 4424,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      short_screenshots: [
        {
          id: -1,
          image:
            'https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg',
        },
        {
          id: 118307,
          image:
            'https://media.rawg.io/media/screenshots/3bd/3bd2710bd1ffb6664fdea7b83afd067e.jpg',
        },
        {
          id: 118308,
          image:
            'https://media.rawg.io/media/screenshots/d4e/d4e9b13f54748584ccbd6f998094dade.jpg',
        },
        {
          id: 118309,
          image:
            'https://media.rawg.io/media/screenshots/599/59946a630e9c7871003763d63184404a.jpg',
        },
        {
          id: 118310,
          image:
            'https://media.rawg.io/media/screenshots/c5d/c5dad426038d7d12f933eedbeab48ff3.jpg',
        },
        {
          id: 118311,
          image:
            'https://media.rawg.io/media/screenshots/b32/b326fa01c82db82edd41ed299886ee44.jpg',
        },
        {
          id: 118312,
          image:
            'https://media.rawg.io/media/screenshots/091/091e95b49d5a22de036698fc731395a2.jpg',
        },
      ],
      parent_platforms: [
        {
          platform: {
            id: 1,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 2,
            name: 'PlayStation',
            slug: 'playstation',
          },
        },
        {
          platform: {
            id: 3,
            name: 'Xbox',
            slug: 'xbox',
          },
        },
        {
          platform: {
            id: 7,
            name: 'Nintendo',
            slug: 'nintendo',
          },
        },
      ],
      genres: [
        {
          id: 4,
          name: 'Action',
          slug: 'action',
        },
        {
          id: 5,
          name: 'RPG',
          slug: 'role-playing-games-rpg',
        },
      ],
    },
    {
      slug: 'bioshock-infinite',
      name: 'BioShock Infinite',
      playtime: 12,
      platforms: [
        {
          platform: {
            id: 4,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 1,
            name: 'Xbox One',
            slug: 'xbox-one',
          },
        },
        {
          platform: {
            id: 18,
            name: 'PlayStation 4',
            slug: 'playstation4',
          },
        },
        {
          platform: {
            id: 7,
            name: 'Nintendo Switch',
            slug: 'nintendo-switch',
          },
        },
        {
          platform: {
            id: 6,
            name: 'Linux',
            slug: 'linux',
          },
        },
        {
          platform: {
            id: 14,
            name: 'Xbox 360',
            slug: 'xbox360',
          },
        },
        {
          platform: {
            id: 16,
            name: 'PlayStation 3',
            slug: 'playstation3',
          },
        },
      ],
      stores: [
        {
          store: {
            id: 1,
            name: 'Steam',
            slug: 'steam',
          },
        },
        {
          store: {
            id: 3,
            name: 'PlayStation Store',
            slug: 'playstation-store',
          },
        },
        {
          store: {
            id: 2,
            name: 'Xbox Store',
            slug: 'xbox-store',
          },
        },
        {
          store: {
            id: 4,
            name: 'App Store',
            slug: 'apple-appstore',
          },
        },
        {
          store: {
            id: 6,
            name: 'Nintendo Store',
            slug: 'nintendo',
          },
        },
        {
          store: {
            id: 7,
            name: 'Xbox 360 Store',
            slug: 'xbox360',
          },
        },
        {
          store: {
            id: 11,
            name: 'Epic Games',
            slug: 'epic-games',
          },
        },
      ],
      released: '2013-03-26',
      tba: false,
      background_image:
        'https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg',
      rating: 4.38,
      rating_top: 5,
      ratings: [
        {
          id: 5,
          title: 'exceptional',
          count: 2142,
          percent: 55.35,
        },
        {
          id: 4,
          title: 'recommended',
          count: 1283,
          percent: 33.15,
        },
        {
          id: 3,
          title: 'meh',
          count: 341,
          percent: 8.81,
        },
        {
          id: 1,
          title: 'skip',
          count: 104,
          percent: 2.69,
        },
      ],
      ratings_count: 3833,
      reviews_text_count: 21,
      added: 14248,
      added_by_status: {
        yet: 783,
        owned: 8450,
        beaten: 4085,
        toplay: 376,
        dropped: 458,
        playing: 96,
      },
      metacritic: 94,
      suggestions_count: 589,
      updated: '2023-07-13T17:21:42',
      id: 4062,
      score: null,
      clip: null,
      tags: [
        {
          id: 31,
          name: 'Singleplayer',
          slug: 'singleplayer',
          language: 'eng',
          games_count: 206544,
          image_background:
            'https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg',
        },
        {
          id: 42396,
          name: 'Для одного игрока',
          slug: 'dlia-odnogo-igroka',
          language: 'rus',
          games_count: 35171,
          image_background:
            'https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg',
        },
        {
          id: 42417,
          name: 'Экшен',
          slug: 'ekshen',
          language: 'rus',
          games_count: 32438,
          image_background:
            'https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg',
        },
        {
          id: 42392,
          name: 'Приключение',
          slug: 'prikliuchenie',
          language: 'rus',
          games_count: 30382,
          image_background:
            'https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg',
        },
        {
          id: 40847,
          name: 'Steam Achievements',
          slug: 'steam-achievements',
          language: 'eng',
          games_count: 30840,
          image_background:
            'https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg',
        },
        {
          id: 40836,
          name: 'Full controller support',
          slug: 'full-controller-support',
          language: 'eng',
          games_count: 14476,
          image_background:
            'https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg',
        },
        {
          id: 13,
          name: 'Atmospheric',
          slug: 'atmospheric',
          language: 'eng',
          games_count: 29635,
          image_background:
            'https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg',
        },
        {
          id: 40849,
          name: 'Steam Cloud',
          slug: 'steam-cloud',
          language: 'eng',
          games_count: 14345,
          image_background:
            'https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg',
        },
        {
          id: 42400,
          name: 'Атмосфера',
          slug: 'atmosfera',
          language: 'rus',
          games_count: 6083,
          image_background:
            'https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg',
        },
        {
          id: 7808,
          name: 'steam-trading-cards',
          slug: 'steam-trading-cards',
          language: 'eng',
          games_count: 7571,
          image_background:
            'https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg',
        },
        {
          id: 42401,
          name: 'Отличный саундтрек',
          slug: 'otlichnyi-saundtrek',
          language: 'rus',
          games_count: 4463,
          image_background:
            'https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg',
        },
        {
          id: 42,
          name: 'Great Soundtrack',
          slug: 'great-soundtrack',
          language: 'eng',
          games_count: 3241,
          image_background:
            'https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg',
        },
        {
          id: 42394,
          name: 'Глубокий сюжет',
          slug: 'glubokii-siuzhet',
          language: 'rus',
          games_count: 9153,
          image_background:
            'https://media.rawg.io/media/games/b7b/b7b8381707152afc7d91f5d95de70e39.jpg',
        },
        {
          id: 24,
          name: 'RPG',
          slug: 'rpg',
          language: 'eng',
          games_count: 17413,
          image_background:
            'https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg',
        },
        {
          id: 42412,
          name: 'Ролевая игра',
          slug: 'rolevaia-igra',
          language: 'rus',
          games_count: 13830,
          image_background:
            'https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg',
        },
        {
          id: 118,
          name: 'Story Rich',
          slug: 'story-rich',
          language: 'eng',
          games_count: 18334,
          image_background:
            'https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg',
        },
        {
          id: 42428,
          name: 'Шутер',
          slug: 'shuter',
          language: 'rus',
          games_count: 6857,
          image_background:
            'https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg',
        },
        {
          id: 8,
          name: 'First-Person',
          slug: 'first-person',
          language: 'eng',
          games_count: 28676,
          image_background:
            'https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg',
        },
        {
          id: 42429,
          name: 'От первого лица',
          slug: 'ot-pervogo-litsa',
          language: 'rus',
          games_count: 7731,
          image_background:
            'https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg',
        },
        {
          id: 42435,
          name: 'Шедевр',
          slug: 'shedevr',
          language: 'rus',
          games_count: 1059,
          image_background:
            'https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg',
        },
        {
          id: 32,
          name: 'Sci-fi',
          slug: 'sci-fi',
          language: 'eng',
          games_count: 17236,
          image_background:
            'https://media.rawg.io/media/games/198/1988a337305e008b41d7f536ce9b73f6.jpg',
        },
        {
          id: 42423,
          name: 'Научная фантастика',
          slug: 'nauchnaia-fantastika',
          language: 'rus',
          games_count: 6108,
          image_background:
            'https://media.rawg.io/media/games/8e4/8e4de3f54ac659e08a7ba6a2b731682a.jpg',
        },
        {
          id: 30,
          name: 'FPS',
          slug: 'fps',
          language: 'eng',
          games_count: 12151,
          image_background:
            'https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg',
        },
        {
          id: 42427,
          name: 'Шутер от первого лица',
          slug: 'shuter-ot-pervogo-litsa',
          language: 'rus',
          games_count: 4139,
          image_background:
            'https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg',
        },
        {
          id: 42480,
          name: 'Фэнтези',
          slug: 'fentezi',
          language: 'rus',
          games_count: 8364,
          image_background:
            'https://media.rawg.io/media/games/8d4/8d46786ca86b1d95f3dc7e700e2dc4dd.jpg',
        },
        {
          id: 64,
          name: 'Fantasy',
          slug: 'fantasy',
          language: 'eng',
          games_count: 24622,
          image_background:
            'https://media.rawg.io/media/screenshots/88b/88b5f27f07d6ca2f8a3cd0b36e03a670.jpg',
        },
        {
          id: 42491,
          name: 'Мясо',
          slug: 'miaso',
          language: 'rus',
          games_count: 3940,
          image_background:
            'https://media.rawg.io/media/games/e04/e04963f3ac4c4fa83a1dc0b9231e50db.jpg',
        },
        {
          id: 26,
          name: 'Gore',
          slug: 'gore',
          language: 'eng',
          games_count: 5076,
          image_background:
            'https://media.rawg.io/media/games/f6b/f6bed028b02369d4cab548f4f9337e81.jpg',
        },
        {
          id: 115,
          name: 'Controller',
          slug: 'controller',
          language: 'eng',
          games_count: 9522,
          image_background:
            'https://media.rawg.io/media/games/8d4/8d46786ca86b1d95f3dc7e700e2dc4dd.jpg',
        },
        {
          id: 119,
          name: 'Dystopian',
          slug: 'dystopian',
          language: 'eng',
          games_count: 1806,
          image_background:
            'https://media.rawg.io/media/screenshots/67e/67e5be6ad7a555248f50bd367e9a071c.jpg',
        },
        {
          id: 42665,
          name: 'Антиутопия',
          slug: 'antiutopiia',
          language: 'rus',
          games_count: 882,
          image_background:
            'https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg',
        },
        {
          id: 42690,
          name: 'Красивая',
          slug: 'krasivaia',
          language: 'rus',
          games_count: 536,
          image_background:
            'https://media.rawg.io/media/games/90c/90caf1fcb836cad70013452f6f239008.jpg',
        },
        {
          id: 154,
          name: 'Steampunk',
          slug: 'steampunk',
          language: 'eng',
          games_count: 1117,
          image_background:
            'https://media.rawg.io/media/games/57f/57fc2051dd27c9947d12cdf63790d122.jpg',
        },
        {
          id: 42629,
          name: 'Стимпанк',
          slug: 'stimpank',
          language: 'rus',
          games_count: 399,
          image_background:
            'https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg',
        },
        {
          id: 305,
          name: 'Linear',
          slug: 'linear',
          language: 'eng',
          games_count: 4009,
          image_background:
            'https://media.rawg.io/media/games/e9c/e9c042d14515eb3ff7cb4db9fe78e435.jpg',
        },
        {
          id: 42437,
          name: 'Линейная',
          slug: 'lineinaia',
          language: 'rus',
          games_count: 3953,
          image_background:
            'https://media.rawg.io/media/games/736/736c0eaec96d848d7824b33298a182f2.jpg',
        },
        {
          id: 42566,
          name: 'Альтернативная история',
          slug: 'alternativnaia-istoriia',
          language: 'rus',
          games_count: 771,
          image_background:
            'https://media.rawg.io/media/games/c64/c64d2f63cabeab9126693b7d39539c8d.jpg',
        },
        {
          id: 208,
          name: 'Alternate History',
          slug: 'alternate-history',
          language: 'eng',
          games_count: 1472,
          image_background:
            'https://media.rawg.io/media/screenshots/36d/36d3861a6cdb4ae5b1ca44cec814be8b.jpg',
        },
        {
          id: 317,
          name: 'Time Travel',
          slug: 'time-travel',
          language: 'eng',
          games_count: 1692,
          image_background:
            'https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg',
        },
        {
          id: 42621,
          name: 'Путешествия во времени',
          slug: 'puteshestviia-vo-vremeni',
          language: 'rus',
          games_count: 347,
          image_background:
            'https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg',
        },
        {
          id: 287,
          name: 'Political',
          slug: 'political',
          language: 'eng',
          games_count: 504,
          image_background:
            'https://media.rawg.io/media/screenshots/894/894b41c4664f51b692e07d57c2c2ae1e.jpg',
        },
      ],
      esrb_rating: {
        id: 4,
        name: 'Mature',
        slug: 'mature',
        name_en: 'Mature',
        name_ru: 'С 17 лет',
      },
      user_game: null,
      reviews_count: 3870,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      short_screenshots: [
        {
          id: -1,
          image:
            'https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg',
        },
        {
          id: 98549,
          image:
            'https://media.rawg.io/media/screenshots/bf0/bf07e2c6d2c888d372917d9ef453c8a4.jpg',
        },
        {
          id: 98550,
          image:
            'https://media.rawg.io/media/screenshots/9d3/9d38833952812ad7888a6dc21699934f.jpg',
        },
        {
          id: 98551,
          image:
            'https://media.rawg.io/media/screenshots/595/59572d257b6797986e4eabcd1ee023fd.jpg',
        },
        {
          id: 98552,
          image:
            'https://media.rawg.io/media/screenshots/f71/f71c23eb76f050d6180490e82d58d799.jpg',
        },
        {
          id: 98553,
          image:
            'https://media.rawg.io/media/screenshots/871/8713411d5332ceb2b4092073a6f5f3f2.jpg',
        },
        {
          id: 98554,
          image:
            'https://media.rawg.io/media/screenshots/985/985b56daa78e0a23133518d4226e9f97.jpg',
        },
      ],
      parent_platforms: [
        {
          platform: {
            id: 1,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 2,
            name: 'PlayStation',
            slug: 'playstation',
          },
        },
        {
          platform: {
            id: 3,
            name: 'Xbox',
            slug: 'xbox',
          },
        },
        {
          platform: {
            id: 6,
            name: 'Linux',
            slug: 'linux',
          },
        },
        {
          platform: {
            id: 7,
            name: 'Nintendo',
            slug: 'nintendo',
          },
        },
      ],
      genres: [
        {
          id: 2,
          name: 'Shooter',
          slug: 'shooter',
        },
        {
          id: 4,
          name: 'Action',
          slug: 'action',
        },
      ],
    },
    {
      slug: 'limbo',
      name: 'Limbo',
      playtime: 3,
      platforms: [
        {
          platform: {
            id: 4,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 1,
            name: 'Xbox One',
            slug: 'xbox-one',
          },
        },
        {
          platform: {
            id: 18,
            name: 'PlayStation 4',
            slug: 'playstation4',
          },
        },
        {
          platform: {
            id: 7,
            name: 'Nintendo Switch',
            slug: 'nintendo-switch',
          },
        },
        {
          platform: {
            id: 3,
            name: 'iOS',
            slug: 'ios',
          },
        },
        {
          platform: {
            id: 21,
            name: 'Android',
            slug: 'android',
          },
        },
        {
          platform: {
            id: 5,
            name: 'macOS',
            slug: 'macos',
          },
        },
        {
          platform: {
            id: 6,
            name: 'Linux',
            slug: 'linux',
          },
        },
        {
          platform: {
            id: 14,
            name: 'Xbox 360',
            slug: 'xbox360',
          },
        },
        {
          platform: {
            id: 16,
            name: 'PlayStation 3',
            slug: 'playstation3',
          },
        },
        {
          platform: {
            id: 19,
            name: 'PS Vita',
            slug: 'ps-vita',
          },
        },
      ],
      stores: [
        {
          store: {
            id: 1,
            name: 'Steam',
            slug: 'steam',
          },
        },
        {
          store: {
            id: 3,
            name: 'PlayStation Store',
            slug: 'playstation-store',
          },
        },
        {
          store: {
            id: 2,
            name: 'Xbox Store',
            slug: 'xbox-store',
          },
        },
        {
          store: {
            id: 4,
            name: 'App Store',
            slug: 'apple-appstore',
          },
        },
        {
          store: {
            id: 5,
            name: 'GOG',
            slug: 'gog',
          },
        },
        {
          store: {
            id: 6,
            name: 'Nintendo Store',
            slug: 'nintendo',
          },
        },
        {
          store: {
            id: 7,
            name: 'Xbox 360 Store',
            slug: 'xbox360',
          },
        },
        {
          store: {
            id: 8,
            name: 'Google Play',
            slug: 'google-play',
          },
        },
        {
          store: {
            id: 11,
            name: 'Epic Games',
            slug: 'epic-games',
          },
        },
      ],
      released: '2010-07-21',
      tba: false,
      background_image:
        'https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg',
      rating: 4.15,
      rating_top: 4,
      ratings: [
        {
          id: 4,
          title: 'recommended',
          count: 1641,
          percent: 52.18,
        },
        {
          id: 5,
          title: 'exceptional',
          count: 1088,
          percent: 34.59,
        },
        {
          id: 3,
          title: 'meh',
          count: 313,
          percent: 9.95,
        },
        {
          id: 1,
          title: 'skip',
          count: 103,
          percent: 3.28,
        },
      ],
      ratings_count: 3109,
      reviews_text_count: 24,
      added: 12554,
      added_by_status: {
        yet: 535,
        owned: 7944,
        beaten: 3026,
        toplay: 292,
        dropped: 667,
        playing: 90,
      },
      metacritic: 88,
      suggestions_count: 186,
      updated: '2023-07-12T10:25:03',
      id: 1030,
      score: null,
      clip: null,
      tags: [
        {
          id: 31,
          name: 'Singleplayer',
          slug: 'singleplayer',
          language: 'eng',
          games_count: 206544,
          image_background:
            'https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg',
        },
        {
          id: 42396,
          name: 'Для одного игрока',
          slug: 'dlia-odnogo-igroka',
          language: 'rus',
          games_count: 35171,
          image_background:
            'https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg',
        },
        {
          id: 42417,
          name: 'Экшен',
          slug: 'ekshen',
          language: 'rus',
          games_count: 32438,
          image_background:
            'https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg',
        },
        {
          id: 42392,
          name: 'Приключение',
          slug: 'prikliuchenie',
          language: 'rus',
          games_count: 30382,
          image_background:
            'https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg',
        },
        {
          id: 42398,
          name: 'Инди',
          slug: 'indi-2',
          language: 'rus',
          games_count: 46233,
          image_background:
            'https://media.rawg.io/media/games/9fa/9fa63622543e5d4f6d99aa9d73b043de.jpg',
        },
        {
          id: 40836,
          name: 'Full controller support',
          slug: 'full-controller-support',
          language: 'eng',
          games_count: 14476,
          image_background:
            'https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg',
        },
        {
          id: 13,
          name: 'Atmospheric',
          slug: 'atmospheric',
          language: 'eng',
          games_count: 29635,
          image_background:
            'https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg',
        },
        {
          id: 42400,
          name: 'Атмосфера',
          slug: 'atmosfera',
          language: 'rus',
          games_count: 6083,
          image_background:
            'https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg',
        },
        {
          id: 42399,
          name: 'Казуальная игра',
          slug: 'kazualnaia-igra',
          language: 'rus',
          games_count: 31993,
          image_background:
            'https://media.rawg.io/media/games/852/8522935d8ab27b610a254b52de0da212.jpg',
        },
        {
          id: 42435,
          name: 'Шедевр',
          slug: 'shedevr',
          language: 'rus',
          games_count: 1059,
          image_background:
            'https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg',
        },
        {
          id: 45,
          name: '2D',
          slug: '2d',
          language: 'eng',
          games_count: 188239,
          image_background:
            'https://media.rawg.io/media/games/fd9/fd92f105dcd6491bc5d61135033d1f19.jpg',
        },
        {
          id: 16,
          name: 'Horror',
          slug: 'horror',
          language: 'eng',
          games_count: 41984,
          image_background:
            'https://media.rawg.io/media/games/7c4/7c448374df84b607f67ce9182a3a3ca7.jpg',
        },
        {
          id: 42465,
          name: 'Головоломка',
          slug: 'golovolomka',
          language: 'rus',
          games_count: 11685,
          image_background:
            'https://media.rawg.io/media/games/fd8/fd882c8267a44621a0de6f9cec77ae90.jpg',
        },
        {
          id: 42420,
          name: 'Сложная',
          slug: 'slozhnaia',
          language: 'rus',
          games_count: 4508,
          image_background:
            'https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg',
        },
        {
          id: 49,
          name: 'Difficult',
          slug: 'difficult',
          language: 'eng',
          games_count: 12486,
          image_background:
            'https://media.rawg.io/media/games/1f1/1f1888e1308959dfd3be4c144a81d19c.jpg',
        },
        {
          id: 42463,
          name: 'Платформер',
          slug: 'platformer-2',
          language: 'rus',
          games_count: 6582,
          image_background:
            'https://media.rawg.io/media/games/9cc/9cc11e2e81403186c7fa9c00c143d6e4.jpg',
        },
        {
          id: 115,
          name: 'Controller',
          slug: 'controller',
          language: 'eng',
          games_count: 9522,
          image_background:
            'https://media.rawg.io/media/games/8d4/8d46786ca86b1d95f3dc7e700e2dc4dd.jpg',
        },
        {
          id: 42477,
          name: 'Мрачная',
          slug: 'mrachnaia',
          language: 'rus',
          games_count: 3664,
          image_background:
            'https://media.rawg.io/media/games/7ac/7aca7ccf0e70cd0974cb899ab9e5158e.jpg',
        },
        {
          id: 41,
          name: 'Dark',
          slug: 'dark',
          language: 'eng',
          games_count: 14171,
          image_background:
            'https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg',
        },
        {
          id: 336,
          name: 'controller support',
          slug: 'controller-support',
          language: 'eng',
          games_count: 293,
          image_background:
            'https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg',
        },
        {
          id: 111,
          name: 'Short',
          slug: 'short',
          language: 'eng',
          games_count: 57476,
          image_background:
            'https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg',
        },
        {
          id: 42457,
          name: 'Короткая',
          slug: 'korotkaia',
          language: 'rus',
          games_count: 1345,
          image_background:
            'https://media.rawg.io/media/games/6a2/6a2e48933245e2cd3c92248c75c925e1.jpg',
        },
        {
          id: 42469,
          name: 'Вид сбоку',
          slug: 'vid-sboku',
          language: 'rus',
          games_count: 3094,
          image_background:
            'https://media.rawg.io/media/games/fad/fadc4be043ed07904012d47cd02671e4.jpg',
        },
        {
          id: 113,
          name: 'Side Scroller',
          slug: 'side-scroller',
          language: 'eng',
          games_count: 9479,
          image_background:
            'https://media.rawg.io/media/games/bbf/bbf8d74ab64440ad76294cff2f4d9cfa.jpg',
        },
        {
          id: 42500,
          name: 'Физика',
          slug: 'fizika',
          language: 'rus',
          games_count: 3762,
          image_background:
            'https://media.rawg.io/media/games/ec3/ec3a7db7b8ab5a71aad622fe7c62632f.jpg',
        },
        {
          id: 114,
          name: 'Physics',
          slug: 'physics',
          language: 'eng',
          games_count: 17813,
          image_background:
            'https://media.rawg.io/media/games/b38/b3825d2c32be1c43d667cc20113230cf.jpg',
        },
        {
          id: 110,
          name: 'Cinematic',
          slug: 'cinematic',
          language: 'eng',
          games_count: 1441,
          image_background:
            'https://media.rawg.io/media/games/7ac/7aca7ccf0e70cd0974cb899ab9e5158e.jpg',
        },
        {
          id: 42623,
          name: 'Кинематографичная',
          slug: 'kinematografichnaia',
          language: 'rus',
          games_count: 1348,
          image_background:
            'https://media.rawg.io/media/games/b72/b7233d5d5b1e75e86bb860ccc7aeca85.jpg',
        },
        {
          id: 42468,
          name: 'Головоломка-платформер',
          slug: 'golovolomka-platformer',
          language: 'rus',
          games_count: 2817,
          image_background:
            'https://media.rawg.io/media/games/6c8/6c8cb4780ce30b76b944cf656e8fff49.jpg',
        },
        {
          id: 42672,
          name: 'Сюрреалистичная',
          slug: 'siurrealistichnaia',
          language: 'rus',
          games_count: 1670,
          image_background:
            'https://media.rawg.io/media/screenshots/9d2/9d22689a1c2a7ced9d1690e0c5c66871.jpg',
        },
        {
          id: 46,
          name: 'Surreal',
          slug: 'surreal',
          language: 'eng',
          games_count: 4570,
          image_background:
            'https://media.rawg.io/media/games/d79/d794c9198ec994cc12ede5ebd4672623.jpg',
        },
        {
          id: 83,
          name: 'Puzzle-Platformer',
          slug: 'puzzle-platformer',
          language: 'eng',
          games_count: 9497,
          image_background:
            'https://media.rawg.io/media/screenshots/351/351ee0915fcd5a64e976791794039d5c.jpg',
        },
        {
          id: 42582,
          name: 'Минимализм',
          slug: 'minimalizm',
          language: 'rus',
          games_count: 3775,
          image_background:
            'https://media.rawg.io/media/screenshots/112/112c9ecfe850e318bb999660361782bb.jpeg',
        },
        {
          id: 112,
          name: 'Minimalist',
          slug: 'minimalist',
          language: 'eng',
          games_count: 13787,
          image_background:
            'https://media.rawg.io/media/screenshots/bf3/bf37a864502fb7cf395748420a48c650.jpg',
        },
      ],
      esrb_rating: {
        id: 3,
        name: 'Teen',
        slug: 'teen',
        name_en: 'Teen',
        name_ru: 'С 13 лет',
      },
      user_game: null,
      reviews_count: 3145,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      short_screenshots: [
        {
          id: -1,
          image:
            'https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg',
        },
        {
          id: 30985,
          image:
            'https://media.rawg.io/media/screenshots/512/512f4bc2092016478ddcb9e7e60aeec0.jpg',
        },
        {
          id: 30986,
          image:
            'https://media.rawg.io/media/screenshots/63d/63d30699e8fcab9c808e6714d9d3fd59.jpg',
        },
        {
          id: 30987,
          image:
            'https://media.rawg.io/media/screenshots/de0/de04bbc0fd9904071ef25bf23113c8c4.jpg',
        },
        {
          id: 30988,
          image:
            'https://media.rawg.io/media/screenshots/eed/eedbbca4ae2debf2d4e23e55d1f6cff7.jpg',
        },
        {
          id: 30989,
          image:
            'https://media.rawg.io/media/screenshots/59f/59f472b3ed7b414777a29213d70b4d17.jpg',
        },
        {
          id: 30991,
          image:
            'https://media.rawg.io/media/screenshots/e58/e58d31146e4a9e3786dabcbfc30126bc.jpg',
        },
      ],
      parent_platforms: [
        {
          platform: {
            id: 1,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 2,
            name: 'PlayStation',
            slug: 'playstation',
          },
        },
        {
          platform: {
            id: 3,
            name: 'Xbox',
            slug: 'xbox',
          },
        },
        {
          platform: {
            id: 4,
            name: 'iOS',
            slug: 'ios',
          },
        },
        {
          platform: {
            id: 8,
            name: 'Android',
            slug: 'android',
          },
        },
        {
          platform: {
            id: 5,
            name: 'Apple Macintosh',
            slug: 'mac',
          },
        },
        {
          platform: {
            id: 6,
            name: 'Linux',
            slug: 'linux',
          },
        },
        {
          platform: {
            id: 7,
            name: 'Nintendo',
            slug: 'nintendo',
          },
        },
      ],
      genres: [
        {
          id: 51,
          name: 'Indie',
          slug: 'indie',
        },
        {
          id: 83,
          name: 'Platformer',
          slug: 'platformer',
        },
        {
          id: 3,
          name: 'Adventure',
          slug: 'adventure',
        },
        {
          id: 7,
          name: 'Puzzle',
          slug: 'puzzle',
        },
      ],
    },
    {
      slug: 'doom',
      name: 'DOOM (2016)',
      playtime: 10,
      platforms: [
        {
          platform: {
            id: 4,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 1,
            name: 'Xbox One',
            slug: 'xbox-one',
          },
        },
        {
          platform: {
            id: 18,
            name: 'PlayStation 4',
            slug: 'playstation4',
          },
        },
        {
          platform: {
            id: 7,
            name: 'Nintendo Switch',
            slug: 'nintendo-switch',
          },
        },
      ],
      stores: [
        {
          store: {
            id: 1,
            name: 'Steam',
            slug: 'steam',
          },
        },
        {
          store: {
            id: 3,
            name: 'PlayStation Store',
            slug: 'playstation-store',
          },
        },
        {
          store: {
            id: 2,
            name: 'Xbox Store',
            slug: 'xbox-store',
          },
        },
        {
          store: {
            id: 6,
            name: 'Nintendo Store',
            slug: 'nintendo',
          },
        },
      ],
      released: '2016-05-13',
      tba: false,
      background_image:
        'https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg',
      rating: 4.38,
      rating_top: 5,
      ratings: [
        {
          id: 5,
          title: 'exceptional',
          count: 1762,
          percent: 52.22,
        },
        {
          id: 4,
          title: 'recommended',
          count: 1280,
          percent: 37.94,
        },
        {
          id: 3,
          title: 'meh',
          count: 254,
          percent: 7.53,
        },
        {
          id: 1,
          title: 'skip',
          count: 78,
          percent: 2.31,
        },
      ],
      ratings_count: 3335,
      reviews_text_count: 29,
      added: 12368,
      added_by_status: {
        yet: 541,
        owned: 7702,
        beaten: 2656,
        toplay: 480,
        dropped: 693,
        playing: 296,
      },
      metacritic: 85,
      suggestions_count: 652,
      updated: '2023-07-10T21:50:52',
      id: 2454,
      score: null,
      clip: null,
      tags: [
        {
          id: 31,
          name: 'Singleplayer',
          slug: 'singleplayer',
          language: 'eng',
          games_count: 206544,
          image_background:
            'https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg',
        },
        {
          id: 42396,
          name: 'Для одного игрока',
          slug: 'dlia-odnogo-igroka',
          language: 'rus',
          games_count: 35171,
          image_background:
            'https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg',
        },
        {
          id: 42417,
          name: 'Экшен',
          slug: 'ekshen',
          language: 'rus',
          games_count: 32438,
          image_background:
            'https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg',
        },
        {
          id: 42392,
          name: 'Приключение',
          slug: 'prikliuchenie',
          language: 'rus',
          games_count: 30382,
          image_background:
            'https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg',
        },
        {
          id: 42398,
          name: 'Инди',
          slug: 'indi-2',
          language: 'rus',
          games_count: 46233,
          image_background:
            'https://media.rawg.io/media/games/9fa/9fa63622543e5d4f6d99aa9d73b043de.jpg',
        },
        {
          id: 7,
          name: 'Multiplayer',
          slug: 'multiplayer',
          language: 'eng',
          games_count: 35108,
          image_background:
            'https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg',
        },
        {
          id: 13,
          name: 'Atmospheric',
          slug: 'atmospheric',
          language: 'eng',
          games_count: 29635,
          image_background:
            'https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg',
        },
        {
          id: 42400,
          name: 'Атмосфера',
          slug: 'atmosfera',
          language: 'rus',
          games_count: 6083,
          image_background:
            'https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg',
        },
        {
          id: 42425,
          name: 'Для нескольких игроков',
          slug: 'dlia-neskolkikh-igrokov',
          language: 'rus',
          games_count: 7893,
          image_background:
            'https://media.rawg.io/media/games/713/713269608dc8f2f40f5a670a14b2de94.jpg',
        },
        {
          id: 42401,
          name: 'Отличный саундтрек',
          slug: 'otlichnyi-saundtrek',
          language: 'rus',
          games_count: 4463,
          image_background:
            'https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg',
        },
        {
          id: 42,
          name: 'Great Soundtrack',
          slug: 'great-soundtrack',
          language: 'eng',
          games_count: 3241,
          image_background:
            'https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg',
        },
        {
          id: 18,
          name: 'Co-op',
          slug: 'co-op',
          language: 'eng',
          games_count: 9892,
          image_background:
            'https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg',
        },
        {
          id: 42412,
          name: 'Ролевая игра',
          slug: 'rolevaia-igra',
          language: 'rus',
          games_count: 13830,
          image_background:
            'https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg',
        },
        {
          id: 411,
          name: 'cooperative',
          slug: 'cooperative',
          language: 'eng',
          games_count: 4104,
          image_background:
            'https://media.rawg.io/media/games/476/476178ef18ab0534771d099f51cdc694.jpg',
        },
        {
          id: 42421,
          name: 'Стратегия',
          slug: 'strategiia',
          language: 'rus',
          games_count: 15056,
          image_background:
            'https://media.rawg.io/media/games/21a/21ad672cedee9b4378abb6c2d2e626ee.jpg',
        },
        {
          id: 42428,
          name: 'Шутер',
          slug: 'shuter',
          language: 'rus',
          games_count: 6857,
          image_background:
            'https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg',
        },
        {
          id: 8,
          name: 'First-Person',
          slug: 'first-person',
          language: 'eng',
          games_count: 28676,
          image_background:
            'https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg',
        },
        {
          id: 42429,
          name: 'От первого лица',
          slug: 'ot-pervogo-litsa',
          language: 'rus',
          games_count: 7731,
          image_background:
            'https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg',
        },
        {
          id: 32,
          name: 'Sci-fi',
          slug: 'sci-fi',
          language: 'eng',
          games_count: 17236,
          image_background:
            'https://media.rawg.io/media/games/198/1988a337305e008b41d7f536ce9b73f6.jpg',
        },
        {
          id: 42423,
          name: 'Научная фантастика',
          slug: 'nauchnaia-fantastika',
          language: 'rus',
          games_count: 6108,
          image_background:
            'https://media.rawg.io/media/games/8e4/8e4de3f54ac659e08a7ba6a2b731682a.jpg',
        },
        {
          id: 40845,
          name: 'Partial Controller Support',
          slug: 'partial-controller-support',
          language: 'eng',
          games_count: 9866,
          image_background:
            'https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg',
        },
        {
          id: 16,
          name: 'Horror',
          slug: 'horror',
          language: 'eng',
          games_count: 41984,
          image_background:
            'https://media.rawg.io/media/games/7c4/7c448374df84b607f67ce9182a3a3ca7.jpg',
        },
        {
          id: 30,
          name: 'FPS',
          slug: 'fps',
          language: 'eng',
          games_count: 12151,
          image_background:
            'https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg',
        },
        {
          id: 42427,
          name: 'Шутер от первого лица',
          slug: 'shuter-ot-pervogo-litsa',
          language: 'rus',
          games_count: 4139,
          image_background:
            'https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg',
        },
        {
          id: 42420,
          name: 'Сложная',
          slug: 'slozhnaia',
          language: 'rus',
          games_count: 4508,
          image_background:
            'https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg',
        },
        {
          id: 42461,
          name: 'Классика',
          slug: 'klassika',
          language: 'rus',
          games_count: 1394,
          image_background:
            'https://media.rawg.io/media/games/7a2/7a2500ee8b2c0e1ff268bb4479463dea.jpg',
        },
        {
          id: 42491,
          name: 'Мясо',
          slug: 'miaso',
          language: 'rus',
          games_count: 3940,
          image_background:
            'https://media.rawg.io/media/games/e04/e04963f3ac4c4fa83a1dc0b9231e50db.jpg',
        },
        {
          id: 26,
          name: 'Gore',
          slug: 'gore',
          language: 'eng',
          games_count: 5076,
          image_background:
            'https://media.rawg.io/media/games/f6b/f6bed028b02369d4cab548f4f9337e81.jpg',
        },
        {
          id: 49,
          name: 'Difficult',
          slug: 'difficult',
          language: 'eng',
          games_count: 12486,
          image_background:
            'https://media.rawg.io/media/games/1f1/1f1888e1308959dfd3be4c144a81d19c.jpg',
        },
        {
          id: 193,
          name: 'Classic',
          slug: 'classic',
          language: 'eng',
          games_count: 1728,
          image_background:
            'https://media.rawg.io/media/games/b54/b54598d1d5cc31899f4f0a7e3122a7b0.jpg',
        },
        {
          id: 63,
          name: 'Zombies',
          slug: 'zombies',
          language: 'eng',
          games_count: 9683,
          image_background:
            'https://media.rawg.io/media/games/f6f/f6f39c5b56413f7f4513b25989a1b747.jpg',
        },
        {
          id: 42544,
          name: 'Зомби',
          slug: 'zombi-2',
          language: 'rus',
          games_count: 2033,
          image_background:
            'https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg',
        },
        {
          id: 42612,
          name: 'Быстрая',
          slug: 'bystraia',
          language: 'rus',
          games_count: 1522,
          image_background:
            'https://media.rawg.io/media/games/bee/bee483efadcf9d7e657e52184316a34e.jpg',
        },
        {
          id: 120,
          name: 'Memes',
          slug: 'memes',
          language: 'eng',
          games_count: 1578,
          image_background:
            'https://media.rawg.io/media/games/264/2642b17a7885f7abc4fd018e98943242.jpg',
        },
        {
          id: 131,
          name: 'Fast-Paced',
          slug: 'fast-paced',
          language: 'eng',
          games_count: 10274,
          image_background:
            'https://media.rawg.io/media/games/556/556157feed9ee1f55f2b12b2973e30a3.jpg',
        },
        {
          id: 42561,
          name: 'Мемы',
          slug: 'memy',
          language: 'rus',
          games_count: 1429,
          image_background:
            'https://media.rawg.io/media/games/08a/08aa92e004f13ad2d41127327314c3f9.jpg',
        },
        {
          id: 42466,
          name: 'Римейк',
          slug: 'rimeik',
          language: 'rus',
          games_count: 206,
          image_background:
            'https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg',
        },
        {
          id: 271,
          name: 'Remake',
          slug: 'remake',
          language: 'eng',
          games_count: 1666,
          image_background:
            'https://media.rawg.io/media/games/a4b/a4bb55f42fe837ae7bf1307e7b41cc85.jpg',
        },
        {
          id: 270,
          name: 'Blood',
          slug: 'blood',
          language: 'eng',
          games_count: 1946,
          image_background:
            'https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg',
        },
        {
          id: 42577,
          name: 'Кровь',
          slug: 'krov',
          language: 'rus',
          games_count: 358,
          image_background:
            'https://media.rawg.io/media/screenshots/a97/a97b0e257daca77c23cf93ac9fff7487.jpg',
        },
        {
          id: 187,
          name: 'Demons',
          slug: 'demons',
          language: 'eng',
          games_count: 2001,
          image_background:
            'https://media.rawg.io/media/games/db4/db49a4d8759e7c0fb16d7b3ea35ea64d.jpg',
        },
        {
          id: 42545,
          name: 'Демоны',
          slug: 'demony',
          language: 'rus',
          games_count: 1163,
          image_background:
            'https://media.rawg.io/media/screenshots/9cf/9cfb04d5480b105075226f02121ed3ae.jpg',
        },
      ],
      esrb_rating: {
        id: 4,
        name: 'Mature',
        slug: 'mature',
        name_en: 'Mature',
        name_ru: 'С 17 лет',
      },
      user_game: null,
      reviews_count: 3374,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      short_screenshots: [
        {
          id: -1,
          image:
            'https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg',
        },
        {
          id: 22393,
          image:
            'https://media.rawg.io/media/screenshots/353/353c1e834e7da7d6ceaa6beaff529c29.jpg',
        },
        {
          id: 22394,
          image:
            'https://media.rawg.io/media/screenshots/e50/e50f822107b8cc6af57aa21d76524149.jpg',
        },
        {
          id: 22398,
          image:
            'https://media.rawg.io/media/screenshots/ae9/ae9e9f7bfe19c63bd16151f81f81a7ed.jpg',
        },
        {
          id: 22400,
          image:
            'https://media.rawg.io/media/screenshots/14e/14e33eccb109558b0524761340ff2023.jpg',
        },
        {
          id: 22402,
          image:
            'https://media.rawg.io/media/screenshots/45d/45d16955ac9e90141b726684a07db02a.jpg',
        },
        {
          id: 22404,
          image:
            'https://media.rawg.io/media/screenshots/b77/b77629938389a41160d3b2a56eaed568.jpg',
        },
      ],
      parent_platforms: [
        {
          platform: {
            id: 1,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 2,
            name: 'PlayStation',
            slug: 'playstation',
          },
        },
        {
          platform: {
            id: 3,
            name: 'Xbox',
            slug: 'xbox',
          },
        },
        {
          platform: {
            id: 7,
            name: 'Nintendo',
            slug: 'nintendo',
          },
        },
      ],
      genres: [
        {
          id: 2,
          name: 'Shooter',
          slug: 'shooter',
        },
        {
          id: 4,
          name: 'Action',
          slug: 'action',
        },
      ],
    },
    {
      slug: 'rocket-league',
      name: 'Rocket League',
      playtime: 20,
      platforms: [
        {
          platform: {
            id: 4,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 1,
            name: 'Xbox One',
            slug: 'xbox-one',
          },
        },
        {
          platform: {
            id: 18,
            name: 'PlayStation 4',
            slug: 'playstation4',
          },
        },
        {
          platform: {
            id: 7,
            name: 'Nintendo Switch',
            slug: 'nintendo-switch',
          },
        },
        {
          platform: {
            id: 5,
            name: 'macOS',
            slug: 'macos',
          },
        },
        {
          platform: {
            id: 6,
            name: 'Linux',
            slug: 'linux',
          },
        },
      ],
      stores: [
        {
          store: {
            id: 1,
            name: 'Steam',
            slug: 'steam',
          },
        },
        {
          store: {
            id: 3,
            name: 'PlayStation Store',
            slug: 'playstation-store',
          },
        },
        {
          store: {
            id: 2,
            name: 'Xbox Store',
            slug: 'xbox-store',
          },
        },
        {
          store: {
            id: 6,
            name: 'Nintendo Store',
            slug: 'nintendo',
          },
        },
        {
          store: {
            id: 11,
            name: 'Epic Games',
            slug: 'epic-games',
          },
        },
      ],
      released: '2015-07-07',
      tba: false,
      background_image:
        'https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg',
      rating: 3.94,
      rating_top: 4,
      ratings: [
        {
          id: 4,
          title: 'recommended',
          count: 1473,
          percent: 54.58,
        },
        {
          id: 5,
          title: 'exceptional',
          count: 677,
          percent: 25.08,
        },
        {
          id: 3,
          title: 'meh',
          count: 409,
          percent: 15.15,
        },
        {
          id: 1,
          title: 'skip',
          count: 140,
          percent: 5.19,
        },
      ],
      ratings_count: 2680,
      reviews_text_count: 14,
      added: 11457,
      added_by_status: {
        yet: 179,
        owned: 8337,
        beaten: 776,
        toplay: 105,
        dropped: 1525,
        playing: 535,
      },
      metacritic: 86,
      suggestions_count: 617,
      updated: '2023-07-12T20:56:37',
      id: 3272,
      score: null,
      clip: null,
      tags: [
        {
          id: 31,
          name: 'Singleplayer',
          slug: 'singleplayer',
          language: 'eng',
          games_count: 206544,
          image_background:
            'https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg',
        },
        {
          id: 42396,
          name: 'Для одного игрока',
          slug: 'dlia-odnogo-igroka',
          language: 'rus',
          games_count: 35171,
          image_background:
            'https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg',
        },
        {
          id: 42417,
          name: 'Экшен',
          slug: 'ekshen',
          language: 'rus',
          games_count: 32438,
          image_background:
            'https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg',
        },
        {
          id: 40847,
          name: 'Steam Achievements',
          slug: 'steam-achievements',
          language: 'eng',
          games_count: 30840,
          image_background:
            'https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg',
        },
        {
          id: 42398,
          name: 'Инди',
          slug: 'indi-2',
          language: 'rus',
          games_count: 46233,
          image_background:
            'https://media.rawg.io/media/games/9fa/9fa63622543e5d4f6d99aa9d73b043de.jpg',
        },
        {
          id: 7,
          name: 'Multiplayer',
          slug: 'multiplayer',
          language: 'eng',
          games_count: 35108,
          image_background:
            'https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg',
        },
        {
          id: 40836,
          name: 'Full controller support',
          slug: 'full-controller-support',
          language: 'eng',
          games_count: 14476,
          image_background:
            'https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg',
        },
        {
          id: 40849,
          name: 'Steam Cloud',
          slug: 'steam-cloud',
          language: 'eng',
          games_count: 14345,
          image_background:
            'https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg',
        },
        {
          id: 42425,
          name: 'Для нескольких игроков',
          slug: 'dlia-neskolkikh-igrokov',
          language: 'rus',
          games_count: 7893,
          image_background:
            'https://media.rawg.io/media/games/713/713269608dc8f2f40f5a670a14b2de94.jpg',
        },
        {
          id: 7808,
          name: 'steam-trading-cards',
          slug: 'steam-trading-cards',
          language: 'eng',
          games_count: 7571,
          image_background:
            'https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg',
        },
        {
          id: 42401,
          name: 'Отличный саундтрек',
          slug: 'otlichnyi-saundtrek',
          language: 'rus',
          games_count: 4463,
          image_background:
            'https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg',
        },
        {
          id: 42,
          name: 'Great Soundtrack',
          slug: 'great-soundtrack',
          language: 'eng',
          games_count: 3241,
          image_background:
            'https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg',
        },
        {
          id: 18,
          name: 'Co-op',
          slug: 'co-op',
          language: 'eng',
          games_count: 9892,
          image_background:
            'https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg',
        },
        {
          id: 411,
          name: 'cooperative',
          slug: 'cooperative',
          language: 'eng',
          games_count: 4104,
          image_background:
            'https://media.rawg.io/media/games/476/476178ef18ab0534771d099f51cdc694.jpg',
        },
        {
          id: 42399,
          name: 'Казуальная игра',
          slug: 'kazualnaia-igra',
          language: 'rus',
          games_count: 31993,
          image_background:
            'https://media.rawg.io/media/games/852/8522935d8ab27b610a254b52de0da212.jpg',
        },
        {
          id: 42482,
          name: 'Смешная',
          slug: 'smeshnaia',
          language: 'rus',
          games_count: 6600,
          image_background:
            'https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg',
        },
        {
          id: 9,
          name: 'Online Co-Op',
          slug: 'online-co-op',
          language: 'eng',
          games_count: 4438,
          image_background:
            'https://media.rawg.io/media/screenshots/88b/88b5f27f07d6ca2f8a3cd0b36e03a670.jpg',
        },
        {
          id: 4,
          name: 'Funny',
          slug: 'funny',
          language: 'eng',
          games_count: 22604,
          image_background:
            'https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg',
        },
        {
          id: 42433,
          name: 'Совместная игра по сети',
          slug: 'sovmestnaia-igra-po-seti',
          language: 'rus',
          games_count: 1229,
          image_background:
            'https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg',
        },
        {
          id: 198,
          name: 'Split Screen',
          slug: 'split-screen',
          language: 'eng',
          games_count: 5628,
          image_background:
            'https://media.rawg.io/media/screenshots/f2f/f2f3c93d6153da7aee590f3ab8ccd803.jpg',
        },
        {
          id: 42449,
          name: 'Локальный мультиплеер',
          slug: 'lokalnyi-multipleer',
          language: 'rus',
          games_count: 2944,
          image_background:
            'https://media.rawg.io/media/games/89a/89a700d3c6a76bd0610ca89ccd20da54.jpg',
        },
        {
          id: 75,
          name: 'Local Co-Op',
          slug: 'local-co-op',
          language: 'eng',
          games_count: 4982,
          image_background:
            'https://media.rawg.io/media/games/33b/33b825c76382931df0fd8ecddf5caebe.jpg',
        },
        {
          id: 72,
          name: 'Local Multiplayer',
          slug: 'local-multiplayer',
          language: 'eng',
          games_count: 12509,
          image_background:
            'https://media.rawg.io/media/games/74d/74dafeb9a442b87b9dd4a1d4a2faa37b.jpg',
        },
        {
          id: 11669,
          name: 'stats',
          slug: 'stats',
          language: 'eng',
          games_count: 4503,
          image_background:
            'https://media.rawg.io/media/games/74d/74dafeb9a442b87b9dd4a1d4a2faa37b.jpg',
        },
        {
          id: 40852,
          name: 'Steam Workshop',
          slug: 'steam-workshop',
          language: 'eng',
          games_count: 1324,
          image_background:
            'https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg',
        },
        {
          id: 40832,
          name: 'Cross-Platform Multiplayer',
          slug: 'cross-platform-multiplayer',
          language: 'eng',
          games_count: 2259,
          image_background:
            'https://media.rawg.io/media/games/806/8060a7663364ac23e15480728938d6f3.jpg',
        },
        {
          id: 42612,
          name: 'Быстрая',
          slug: 'bystraia',
          language: 'rus',
          games_count: 1522,
          image_background:
            'https://media.rawg.io/media/games/bee/bee483efadcf9d7e657e52184316a34e.jpg',
        },
        {
          id: 42496,
          name: 'Гонки',
          slug: 'gonki',
          language: 'rus',
          games_count: 2949,
          image_background:
            'https://media.rawg.io/media/games/b22/b227810b1a1bcbe9cf3dda22534c686e.jpg',
        },
        {
          id: 11,
          name: 'Team-Based',
          slug: 'team-based',
          language: 'eng',
          games_count: 1294,
          image_background:
            'https://media.rawg.io/media/games/388/388935d851846f8ec747fffc7c765800.jpg',
        },
        {
          id: 42450,
          name: 'Командная',
          slug: 'komandnaia',
          language: 'rus',
          games_count: 992,
          image_background:
            'https://media.rawg.io/media/games/8bd/8bd24e3c15354a9555bb1437fe555a69.jpg',
        },
        {
          id: 42476,
          name: 'Соревновательная',
          slug: 'sorevnovatelnaia',
          language: 'rus',
          games_count: 834,
          image_background:
            'https://media.rawg.io/media/games/476/476178ef18ab0534771d099f51cdc694.jpg',
        },
        {
          id: 131,
          name: 'Fast-Paced',
          slug: 'fast-paced',
          language: 'eng',
          games_count: 10274,
          image_background:
            'https://media.rawg.io/media/games/556/556157feed9ee1f55f2b12b2973e30a3.jpg',
        },
        {
          id: 170,
          name: 'Competitive',
          slug: 'competitive',
          language: 'eng',
          games_count: 1027,
          image_background:
            'https://media.rawg.io/media/games/c07/c07e1c1e6908a2eeebd5dad0708abd01.jpg',
        },
        {
          id: 42531,
          name: 'Спортивная игра',
          slug: 'sportivnaia-igra',
          language: 'rus',
          games_count: 3561,
          image_background:
            'https://media.rawg.io/media/screenshots/120/120d930368bc171c42f9caab94e33c65.jpg',
        },
        {
          id: 42639,
          name: 'Локальная игра на четверых',
          slug: 'lokalnaia-igra-na-chetverykh',
          language: 'rus',
          games_count: 1088,
          image_background:
            'https://media.rawg.io/media/games/9e5/9e52a797f049e701d4eee84774a99007.jpg',
        },
        {
          id: 182,
          name: '4 Player Local',
          slug: '4-player-local',
          language: 'eng',
          games_count: 938,
          image_background:
            'https://media.rawg.io/media/screenshots/f20/f20b14c39b5387488236ff2d1d40f863.jpg',
        },
        {
          id: 42613,
          name: 'Разделение экрана',
          slug: 'razdelenie-ekrana',
          language: 'rus',
          games_count: 452,
          image_background:
            'https://media.rawg.io/media/games/473/473bd9a5e9522629d6cb28b701fb836a.jpg',
        },
        {
          id: 87822,
          name: '4 giocatori divano',
          slug: '4-giocatori-divano',
          language: 'eng',
          games_count: 32,
          image_background:
            'https://media.rawg.io/media/screenshots/5d3/5d3e51e02a2e28cc8a543de3d8253942.jpg',
        },
        {
          id: 191,
          name: 'Football',
          slug: 'football',
          language: 'eng',
          games_count: 2035,
          image_background:
            'https://media.rawg.io/media/games/c3a/c3a4a7a6337b94e7c5c9a1d2bc8076e7.jpg',
        },
        {
          id: 190,
          name: 'Soccer',
          slug: 'soccer',
          language: 'eng',
          games_count: 1828,
          image_background:
            'https://media.rawg.io/media/games/6a8/6a805daef1a6eb02d4254fbc3fa74607.jpg',
        },
        {
          id: 42636,
          name: 'Американский футбол',
          slug: 'amerikanskii-futbol',
          language: 'rus',
          games_count: 187,
          image_background:
            'https://media.rawg.io/media/screenshots/302/3023872fcbc948d8b829318da203fb43.jpg',
        },
        {
          id: 42635,
          name: 'Футбол',
          slug: 'futbol-2',
          language: 'rus',
          games_count: 209,
          image_background:
            'https://media.rawg.io/media/screenshots/fc9/fc9112a4b6d32fde9364787c849b3522.jpg',
        },
        {
          id: 87821,
          name: 'lan party',
          slug: 'lan-party-2',
          language: 'eng',
          games_count: 3,
          image_background:
            'https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg',
        },
      ],
      esrb_rating: {
        id: 1,
        name: 'Everyone',
        slug: 'everyone',
        name_en: 'Everyone',
        name_ru: 'Для всех',
      },
      user_game: null,
      reviews_count: 2699,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      short_screenshots: [
        {
          id: -1,
          image:
            'https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg',
        },
        {
          id: 29880,
          image:
            'https://media.rawg.io/media/screenshots/6a0/6a0745d9dcd0f7a368d372260baf91aa.jpg',
        },
        {
          id: 29881,
          image:
            'https://media.rawg.io/media/screenshots/5ea/5ea8ab6a35f189489b2ec8713d4f1619.jpg',
        },
        {
          id: 29882,
          image:
            'https://media.rawg.io/media/screenshots/508/5083fd170bf10606afd12afc7d17db04.jpg',
        },
        {
          id: 29883,
          image:
            'https://media.rawg.io/media/screenshots/02d/02d36e8e01a9f1063c6431ce09324e24.jpg',
        },
        {
          id: 29884,
          image:
            'https://media.rawg.io/media/screenshots/036/036ddade8156ac52ecf8de593123d12c.jpg',
        },
        {
          id: 29885,
          image:
            'https://media.rawg.io/media/screenshots/861/8615727f6e52f1632ae38d71e9e4c800.jpg',
        },
      ],
      parent_platforms: [
        {
          platform: {
            id: 1,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 2,
            name: 'PlayStation',
            slug: 'playstation',
          },
        },
        {
          platform: {
            id: 3,
            name: 'Xbox',
            slug: 'xbox',
          },
        },
        {
          platform: {
            id: 5,
            name: 'Apple Macintosh',
            slug: 'mac',
          },
        },
        {
          platform: {
            id: 6,
            name: 'Linux',
            slug: 'linux',
          },
        },
        {
          platform: {
            id: 7,
            name: 'Nintendo',
            slug: 'nintendo',
          },
        },
      ],
      genres: [
        {
          id: 1,
          name: 'Racing',
          slug: 'racing',
        },
        {
          id: 51,
          name: 'Indie',
          slug: 'indie',
        },
        {
          id: 15,
          name: 'Sports',
          slug: 'sports',
        },
      ],
    },
    {
      slug: 'terraria',
      name: 'Terraria',
      playtime: 14,
      platforms: [
        {
          platform: {
            id: 4,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 1,
            name: 'Xbox One',
            slug: 'xbox-one',
          },
        },
        {
          platform: {
            id: 18,
            name: 'PlayStation 4',
            slug: 'playstation4',
          },
        },
        {
          platform: {
            id: 7,
            name: 'Nintendo Switch',
            slug: 'nintendo-switch',
          },
        },
        {
          platform: {
            id: 3,
            name: 'iOS',
            slug: 'ios',
          },
        },
        {
          platform: {
            id: 21,
            name: 'Android',
            slug: 'android',
          },
        },
        {
          platform: {
            id: 8,
            name: 'Nintendo 3DS',
            slug: 'nintendo-3ds',
          },
        },
        {
          platform: {
            id: 5,
            name: 'macOS',
            slug: 'macos',
          },
        },
        {
          platform: {
            id: 6,
            name: 'Linux',
            slug: 'linux',
          },
        },
        {
          platform: {
            id: 14,
            name: 'Xbox 360',
            slug: 'xbox360',
          },
        },
        {
          platform: {
            id: 16,
            name: 'PlayStation 3',
            slug: 'playstation3',
          },
        },
        {
          platform: {
            id: 19,
            name: 'PS Vita',
            slug: 'ps-vita',
          },
        },
        {
          platform: {
            id: 10,
            name: 'Wii U',
            slug: 'wii-u',
          },
        },
      ],
      stores: [
        {
          store: {
            id: 1,
            name: 'Steam',
            slug: 'steam',
          },
        },
        {
          store: {
            id: 3,
            name: 'PlayStation Store',
            slug: 'playstation-store',
          },
        },
        {
          store: {
            id: 2,
            name: 'Xbox Store',
            slug: 'xbox-store',
          },
        },
        {
          store: {
            id: 4,
            name: 'App Store',
            slug: 'apple-appstore',
          },
        },
        {
          store: {
            id: 5,
            name: 'GOG',
            slug: 'gog',
          },
        },
        {
          store: {
            id: 6,
            name: 'Nintendo Store',
            slug: 'nintendo',
          },
        },
        {
          store: {
            id: 8,
            name: 'Google Play',
            slug: 'google-play',
          },
        },
      ],
      released: '2011-05-16',
      tba: false,
      background_image:
        'https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg',
      rating: 4.06,
      rating_top: 4,
      ratings: [
        {
          id: 4,
          title: 'recommended',
          count: 945,
          percent: 42.36,
        },
        {
          id: 5,
          title: 'exceptional',
          count: 826,
          percent: 37.02,
        },
        {
          id: 3,
          title: 'meh',
          count: 339,
          percent: 15.19,
        },
        {
          id: 1,
          title: 'skip',
          count: 121,
          percent: 5.42,
        },
      ],
      ratings_count: 2208,
      reviews_text_count: 14,
      added: 11334,
      added_by_status: {
        yet: 362,
        owned: 8276,
        beaten: 1098,
        toplay: 162,
        dropped: 1234,
        playing: 202,
      },
      metacritic: 81,
      suggestions_count: 298,
      updated: '2023-07-12T23:50:10',
      id: 422,
      score: null,
      clip: null,
      tags: [
        {
          id: 31,
          name: 'Singleplayer',
          slug: 'singleplayer',
          language: 'eng',
          games_count: 206544,
          image_background:
            'https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg',
        },
        {
          id: 40847,
          name: 'Steam Achievements',
          slug: 'steam-achievements',
          language: 'eng',
          games_count: 30840,
          image_background:
            'https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg',
        },
        {
          id: 7,
          name: 'Multiplayer',
          slug: 'multiplayer',
          language: 'eng',
          games_count: 35108,
          image_background:
            'https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg',
        },
        {
          id: 40836,
          name: 'Full controller support',
          slug: 'full-controller-support',
          language: 'eng',
          games_count: 14476,
          image_background:
            'https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg',
        },
        {
          id: 13,
          name: 'Atmospheric',
          slug: 'atmospheric',
          language: 'eng',
          games_count: 29635,
          image_background:
            'https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg',
        },
        {
          id: 40849,
          name: 'Steam Cloud',
          slug: 'steam-cloud',
          language: 'eng',
          games_count: 14345,
          image_background:
            'https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg',
        },
        {
          id: 7808,
          name: 'steam-trading-cards',
          slug: 'steam-trading-cards',
          language: 'eng',
          games_count: 7571,
          image_background:
            'https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg',
        },
        {
          id: 24,
          name: 'RPG',
          slug: 'rpg',
          language: 'eng',
          games_count: 17413,
          image_background:
            'https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg',
        },
        {
          id: 18,
          name: 'Co-op',
          slug: 'co-op',
          language: 'eng',
          games_count: 9892,
          image_background:
            'https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg',
        },
        {
          id: 36,
          name: 'Open World',
          slug: 'open-world',
          language: 'eng',
          games_count: 6316,
          image_background:
            'https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg',
        },
        {
          id: 45,
          name: '2D',
          slug: '2d',
          language: 'eng',
          games_count: 188239,
          image_background:
            'https://media.rawg.io/media/games/fd9/fd92f105dcd6491bc5d61135033d1f19.jpg',
        },
        {
          id: 9,
          name: 'Online Co-Op',
          slug: 'online-co-op',
          language: 'eng',
          games_count: 4438,
          image_background:
            'https://media.rawg.io/media/screenshots/88b/88b5f27f07d6ca2f8a3cd0b36e03a670.jpg',
        },
        {
          id: 6,
          name: 'Exploration',
          slug: 'exploration',
          language: 'eng',
          games_count: 19523,
          image_background:
            'https://media.rawg.io/media/games/9aa/9aa42d16d425fa6f179fc9dc2f763647.jpg',
        },
        {
          id: 37,
          name: 'Sandbox',
          slug: 'sandbox',
          language: 'eng',
          games_count: 5956,
          image_background:
            'https://media.rawg.io/media/games/c50/c5085506fe4b5e20fc7aa5ace842c20b.jpg',
        },
        {
          id: 1,
          name: 'Survival',
          slug: 'survival',
          language: 'eng',
          games_count: 7286,
          image_background:
            'https://media.rawg.io/media/games/b54/b54598d1d5cc31899f4f0a7e3122a7b0.jpg',
        },
        {
          id: 397,
          name: 'Online multiplayer',
          slug: 'online-multiplayer',
          language: 'eng',
          games_count: 3805,
          image_background:
            'https://media.rawg.io/media/games/d1a/d1a1202a378607b6c635c8f18ace95dd.jpg',
        },
        {
          id: 122,
          name: 'Pixel Graphics',
          slug: 'pixel-graphics',
          language: 'eng',
          games_count: 90313,
          image_background:
            'https://media.rawg.io/media/games/bbf/bbf8d74ab64440ad76294cff2f4d9cfa.jpg',
        },
        {
          id: 468,
          name: 'role-playing',
          slug: 'role-playing',
          language: 'eng',
          games_count: 1499,
          image_background:
            'https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg',
        },
        {
          id: 336,
          name: 'controller support',
          slug: 'controller-support',
          language: 'eng',
          games_count: 293,
          image_background:
            'https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg',
        },
        {
          id: 107,
          name: 'Family Friendly',
          slug: 'family-friendly',
          language: 'eng',
          games_count: 5343,
          image_background:
            'https://media.rawg.io/media/games/786/7863e587bac630de82fca50d799236a9.jpg',
        },
        {
          id: 5,
          name: 'Replay Value',
          slug: 'replay-value',
          language: 'eng',
          games_count: 1305,
          image_background:
            'https://media.rawg.io/media/games/476/476178ef18ab0534771d099f51cdc694.jpg',
        },
        {
          id: 125,
          name: 'Crafting',
          slug: 'crafting',
          language: 'eng',
          games_count: 3403,
          image_background:
            'https://media.rawg.io/media/games/7e7/7e79e3296a7f64e7535c9e5bb5aa4b53.jpg',
        },
        {
          id: 39,
          name: 'Building',
          slug: 'building',
          language: 'eng',
          games_count: 5185,
          image_background:
            'https://media.rawg.io/media/games/48c/48cb04ca483be865e3a83119c94e6097.jpg',
        },
        {
          id: 337,
          name: 'overlay',
          slug: 'overlay',
          language: 'eng',
          games_count: 220,
          image_background:
            'https://media.rawg.io/media/games/003/0031c0067559d41df19cf98ad87e02aa.jpg',
        },
      ],
      esrb_rating: {
        id: 3,
        name: 'Teen',
        slug: 'teen',
        name_en: 'Teen',
        name_ru: 'С 13 лет',
      },
      user_game: null,
      reviews_count: 2231,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      short_screenshots: [
        {
          id: -1,
          image:
            'https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg',
        },
        {
          id: 59698,
          image:
            'https://media.rawg.io/media/screenshots/3af/3afd69426804e7162edbe03cd9f8d0f4.jpg',
        },
        {
          id: 59703,
          image:
            'https://media.rawg.io/media/screenshots/48c/48c7e3e1268467b91b24c7da7c6539df.jpg',
        },
        {
          id: 59705,
          image:
            'https://media.rawg.io/media/screenshots/84b/84b447d4df99d42ffe479c7feb438171.jpg',
        },
        {
          id: 59711,
          image:
            'https://media.rawg.io/media/screenshots/de0/de053efd6104719567d23fb0dad58b92.jpg',
        },
        {
          id: 59714,
          image:
            'https://media.rawg.io/media/screenshots/490/4907be07a7771c8a7f0eb30c3a1fadc0.jpg',
        },
        {
          id: 59718,
          image:
            'https://media.rawg.io/media/screenshots/485/485ce1d6c733357664be153777097af1.jpg',
        },
      ],
      parent_platforms: [
        {
          platform: {
            id: 1,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 2,
            name: 'PlayStation',
            slug: 'playstation',
          },
        },
        {
          platform: {
            id: 3,
            name: 'Xbox',
            slug: 'xbox',
          },
        },
        {
          platform: {
            id: 4,
            name: 'iOS',
            slug: 'ios',
          },
        },
        {
          platform: {
            id: 8,
            name: 'Android',
            slug: 'android',
          },
        },
        {
          platform: {
            id: 5,
            name: 'Apple Macintosh',
            slug: 'mac',
          },
        },
        {
          platform: {
            id: 6,
            name: 'Linux',
            slug: 'linux',
          },
        },
        {
          platform: {
            id: 7,
            name: 'Nintendo',
            slug: 'nintendo',
          },
        },
      ],
      genres: [
        {
          id: 83,
          name: 'Platformer',
          slug: 'platformer',
        },
        {
          id: 51,
          name: 'Indie',
          slug: 'indie',
        },
        {
          id: 4,
          name: 'Action',
          slug: 'action',
        },
      ],
    },
    {
      slug: 'warframe',
      name: 'Warframe',
      playtime: 8,
      platforms: [
        {
          platform: {
            id: 4,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 187,
            name: 'PlayStation 5',
            slug: 'playstation5',
          },
        },
        {
          platform: {
            id: 1,
            name: 'Xbox One',
            slug: 'xbox-one',
          },
        },
        {
          platform: {
            id: 18,
            name: 'PlayStation 4',
            slug: 'playstation4',
          },
        },
        {
          platform: {
            id: 186,
            name: 'Xbox Series S/X',
            slug: 'xbox-series-x',
          },
        },
        {
          platform: {
            id: 7,
            name: 'Nintendo Switch',
            slug: 'nintendo-switch',
          },
        },
      ],
      stores: [
        {
          store: {
            id: 1,
            name: 'Steam',
            slug: 'steam',
          },
        },
        {
          store: {
            id: 3,
            name: 'PlayStation Store',
            slug: 'playstation-store',
          },
        },
        {
          store: {
            id: 2,
            name: 'Xbox Store',
            slug: 'xbox-store',
          },
        },
        {
          store: {
            id: 6,
            name: 'Nintendo Store',
            slug: 'nintendo',
          },
        },
        {
          store: {
            id: 11,
            name: 'Epic Games',
            slug: 'epic-games',
          },
        },
      ],
      released: '2013-03-25',
      tba: false,
      background_image:
        'https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg',
      rating: 3.42,
      rating_top: 4,
      ratings: [
        {
          id: 4,
          title: 'recommended',
          count: 816,
          percent: 41.68,
        },
        {
          id: 3,
          title: 'meh',
          count: 621,
          percent: 31.72,
        },
        {
          id: 1,
          title: 'skip',
          count: 261,
          percent: 13.33,
        },
        {
          id: 5,
          title: 'exceptional',
          count: 260,
          percent: 13.28,
        },
      ],
      ratings_count: 1947,
      reviews_text_count: 9,
      added: 11182,
      added_by_status: {
        yet: 275,
        owned: 8901,
        beaten: 239,
        toplay: 67,
        dropped: 1448,
        playing: 252,
      },
      metacritic: 73,
      suggestions_count: 717,
      updated: '2023-07-10T00:47:21',
      id: 766,
      score: null,
      clip: null,
      tags: [
        {
          id: 31,
          name: 'Singleplayer',
          slug: 'singleplayer',
          language: 'eng',
          games_count: 206544,
          image_background:
            'https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg',
        },
        {
          id: 42396,
          name: 'Для одного игрока',
          slug: 'dlia-odnogo-igroka',
          language: 'rus',
          games_count: 35171,
          image_background:
            'https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg',
        },
        {
          id: 42417,
          name: 'Экшен',
          slug: 'ekshen',
          language: 'rus',
          games_count: 32438,
          image_background:
            'https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg',
        },
        {
          id: 7,
          name: 'Multiplayer',
          slug: 'multiplayer',
          language: 'eng',
          games_count: 35108,
          image_background:
            'https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg',
        },
        {
          id: 42425,
          name: 'Для нескольких игроков',
          slug: 'dlia-neskolkikh-igrokov',
          language: 'rus',
          games_count: 7893,
          image_background:
            'https://media.rawg.io/media/games/713/713269608dc8f2f40f5a670a14b2de94.jpg',
        },
        {
          id: 7808,
          name: 'steam-trading-cards',
          slug: 'steam-trading-cards',
          language: 'eng',
          games_count: 7571,
          image_background:
            'https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg',
        },
        {
          id: 24,
          name: 'RPG',
          slug: 'rpg',
          language: 'eng',
          games_count: 17413,
          image_background:
            'https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg',
        },
        {
          id: 18,
          name: 'Co-op',
          slug: 'co-op',
          language: 'eng',
          games_count: 9892,
          image_background:
            'https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg',
        },
        {
          id: 42412,
          name: 'Ролевая игра',
          slug: 'rolevaia-igra',
          language: 'rus',
          games_count: 13830,
          image_background:
            'https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg',
        },
        {
          id: 411,
          name: 'cooperative',
          slug: 'cooperative',
          language: 'eng',
          games_count: 4104,
          image_background:
            'https://media.rawg.io/media/games/476/476178ef18ab0534771d099f51cdc694.jpg',
        },
        {
          id: 42428,
          name: 'Шутер',
          slug: 'shuter',
          language: 'rus',
          games_count: 6857,
          image_background:
            'https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg',
        },
        {
          id: 149,
          name: 'Third Person',
          slug: 'third-person',
          language: 'eng',
          games_count: 9504,
          image_background:
            'https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg',
        },
        {
          id: 42441,
          name: 'От третьего лица',
          slug: 'ot-tretego-litsa',
          language: 'rus',
          games_count: 5015,
          image_background:
            'https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg',
        },
        {
          id: 32,
          name: 'Sci-fi',
          slug: 'sci-fi',
          language: 'eng',
          games_count: 17236,
          image_background:
            'https://media.rawg.io/media/games/198/1988a337305e008b41d7f536ce9b73f6.jpg',
        },
        {
          id: 42423,
          name: 'Научная фантастика',
          slug: 'nauchnaia-fantastika',
          language: 'rus',
          games_count: 6108,
          image_background:
            'https://media.rawg.io/media/games/8e4/8e4de3f54ac659e08a7ba6a2b731682a.jpg',
        },
        {
          id: 40845,
          name: 'Partial Controller Support',
          slug: 'partial-controller-support',
          language: 'eng',
          games_count: 9866,
          image_background:
            'https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg',
        },
        {
          id: 30,
          name: 'FPS',
          slug: 'fps',
          language: 'eng',
          games_count: 12151,
          image_background:
            'https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg',
        },
        {
          id: 42427,
          name: 'Шутер от первого лица',
          slug: 'shuter-ot-pervogo-litsa',
          language: 'rus',
          games_count: 4139,
          image_background:
            'https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg',
        },
        {
          id: 9,
          name: 'Online Co-Op',
          slug: 'online-co-op',
          language: 'eng',
          games_count: 4438,
          image_background:
            'https://media.rawg.io/media/screenshots/88b/88b5f27f07d6ca2f8a3cd0b36e03a670.jpg',
        },
        {
          id: 42433,
          name: 'Совместная игра по сети',
          slug: 'sovmestnaia-igra-po-seti',
          language: 'rus',
          games_count: 1229,
          image_background:
            'https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg',
        },
        {
          id: 79,
          name: 'Free to Play',
          slug: 'free-to-play',
          language: 'eng',
          games_count: 5479,
          image_background:
            'https://media.rawg.io/media/games/d0f/d0f91fe1d92332147e5db74e207cfc7a.jpg',
        },
        {
          id: 42538,
          name: 'Бесплатная игра',
          slug: 'besplatnaia-igra',
          language: 'rus',
          games_count: 5472,
          image_background:
            'https://media.rawg.io/media/games/095/0953bf01cd4e4dd204aba85489ac9868.jpg',
        },
        {
          id: 42446,
          name: 'Шутер от третьего лица',
          slug: 'shuter-ot-tretego-litsa',
          language: 'rus',
          games_count: 1525,
          image_background:
            'https://media.rawg.io/media/games/3cf/3cff89996570cf29a10eb9cd967dcf73.jpg',
        },
        {
          id: 150,
          name: 'Third-Person Shooter',
          slug: 'third-person-shooter',
          language: 'eng',
          games_count: 2917,
          image_background:
            'https://media.rawg.io/media/games/d69/d69810315bd7e226ea2d21f9156af629.jpg',
        },
        {
          id: 25,
          name: 'Space',
          slug: 'space',
          language: 'eng',
          games_count: 41805,
          image_background:
            'https://media.rawg.io/media/games/ae1/ae1518c3dc1e847344661905fd2a8d16.jpg',
        },
        {
          id: 468,
          name: 'role-playing',
          slug: 'role-playing',
          language: 'eng',
          games_count: 1499,
          image_background:
            'https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg',
        },
        {
          id: 42487,
          name: 'Слэшер',
          slug: 'slesher',
          language: 'rus',
          games_count: 1995,
          image_background:
            'https://media.rawg.io/media/games/1f1/1f1888e1308959dfd3be4c144a81d19c.jpg',
        },
        {
          id: 42422,
          name: 'Космос',
          slug: 'kosmos-2',
          language: 'rus',
          games_count: 3187,
          image_background:
            'https://media.rawg.io/media/games/3cf/3cff89996570cf29a10eb9cd967dcf73.jpg',
        },
        {
          id: 68,
          name: 'Hack and Slash',
          slug: 'hack-and-slash',
          language: 'eng',
          games_count: 3480,
          image_background:
            'https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg',
        },
        {
          id: 42453,
          name: 'ММО',
          slug: 'mmo-2',
          language: 'rus',
          games_count: 2177,
          image_background:
            'https://media.rawg.io/media/games/bff/bff7d82316cddea9541261a045ba008a.jpg',
        },
        {
          id: 40837,
          name: 'In-App Purchases',
          slug: 'in-app-purchases',
          language: 'eng',
          games_count: 2113,
          image_background:
            'https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg',
        },
        {
          id: 167,
          name: 'Futuristic',
          slug: 'futuristic',
          language: 'eng',
          games_count: 4381,
          image_background:
            'https://media.rawg.io/media/games/951/951572a3dd1e42544bd39a5d5b42d234.jpg',
        },
        {
          id: 42643,
          name: 'Паркур',
          slug: 'parkur-2',
          language: 'rus',
          games_count: 853,
          image_background:
            'https://media.rawg.io/media/games/341/3413d7275fb1e919f00a925df8288b77.jpg',
        },
        {
          id: 42451,
          name: 'Будущее',
          slug: 'budushchee',
          language: 'rus',
          games_count: 2512,
          image_background:
            'https://media.rawg.io/media/games/88a/88af17cc08783ccdd1608ae63c47eeac.jpg',
        },
        {
          id: 188,
          name: 'Parkour',
          slug: 'parkour',
          language: 'eng',
          games_count: 3172,
          image_background:
            'https://media.rawg.io/media/games/3d9/3d9bac98d79bcd2d445f829e8d6be902.jpg',
        },
        {
          id: 42470,
          name: 'Киберпанк',
          slug: 'kiberpank',
          language: 'rus',
          games_count: 1401,
          image_background:
            'https://media.rawg.io/media/screenshots/67e/67e5be6ad7a555248f50bd367e9a071c.jpg',
        },
        {
          id: 226,
          name: 'Cyberpunk',
          slug: 'cyberpunk',
          language: 'eng',
          games_count: 4119,
          image_background:
            'https://media.rawg.io/media/screenshots/12e/12ee2600684863837596c0dbb1923fca.jpg',
        },
        {
          id: 42567,
          name: 'Игра против ИИ',
          slug: 'igra-protiv-ii',
          language: 'rus',
          games_count: 2327,
          image_background:
            'https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg',
        },
        {
          id: 171,
          name: 'PvE',
          slug: 'pve',
          language: 'eng',
          games_count: 3197,
          image_background:
            'https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg',
        },
        {
          id: 42584,
          name: 'Ниндзя',
          slug: 'nindzia',
          language: 'rus',
          games_count: 375,
          image_background:
            'https://media.rawg.io/media/screenshots/f7e/f7e70957c14ead1fa187a616dfa83e09.jpg',
        },
        {
          id: 186,
          name: 'Ninja',
          slug: 'ninja',
          language: 'eng',
          games_count: 2228,
          image_background:
            'https://media.rawg.io/media/games/71d/71d5c7bed835c723486f7f6e78fca9fd.jpg',
        },
        {
          id: 38844,
          name: 'looter shooter',
          slug: 'looter-shooter',
          language: 'eng',
          games_count: 355,
          image_background:
            'https://media.rawg.io/media/screenshots/4ac/4acfc055b31e0e92a7136b81b809c357.jpg',
        },
      ],
      esrb_rating: {
        id: 4,
        name: 'Mature',
        slug: 'mature',
        name_en: 'Mature',
        name_ru: 'С 17 лет',
      },
      user_game: null,
      reviews_count: 1958,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      short_screenshots: [
        {
          id: -1,
          image:
            'https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg',
        },
        {
          id: 6718,
          image:
            'https://media.rawg.io/media/screenshots/2e1/2e15c9f4cca692ebca67b7652e559f6d.jpg',
        },
        {
          id: 6730,
          image:
            'https://media.rawg.io/media/screenshots/70d/70de629465e39f8108aa533df9cff554.jpg',
        },
        {
          id: 6734,
          image:
            'https://media.rawg.io/media/screenshots/b3a/b3a368123558e7f4010e8b68518d6412.jpg',
        },
        {
          id: 6736,
          image:
            'https://media.rawg.io/media/screenshots/fd2/fd2225327c9dca60c9acea0edca8c5fc.jpg',
        },
        {
          id: 6740,
          image:
            'https://media.rawg.io/media/screenshots/34e/34e3c0d71551f07c3bb709fe12f18ca2.jpg',
        },
        {
          id: 6743,
          image:
            'https://media.rawg.io/media/screenshots/977/977735a2fad2bc47917424e20e9dff56.jpg',
        },
      ],
      parent_platforms: [
        {
          platform: {
            id: 1,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 2,
            name: 'PlayStation',
            slug: 'playstation',
          },
        },
        {
          platform: {
            id: 3,
            name: 'Xbox',
            slug: 'xbox',
          },
        },
        {
          platform: {
            id: 7,
            name: 'Nintendo',
            slug: 'nintendo',
          },
        },
      ],
      genres: [
        {
          id: 2,
          name: 'Shooter',
          slug: 'shooter',
        },
        {
          id: 59,
          name: 'Massively Multiplayer',
          slug: 'massively-multiplayer',
        },
        {
          id: 4,
          name: 'Action',
          slug: 'action',
        },
      ],
    },
    {
      slug: 'the-walking-dead',
      name: 'The Walking Dead: Season 1',
      playtime: 8,
      platforms: [
        {
          platform: {
            id: 4,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 18,
            name: 'PlayStation 4',
            slug: 'playstation4',
          },
        },
        {
          platform: {
            id: 1,
            name: 'Xbox One',
            slug: 'xbox-one',
          },
        },
        {
          platform: {
            id: 7,
            name: 'Nintendo Switch',
            slug: 'nintendo-switch',
          },
        },
        {
          platform: {
            id: 3,
            name: 'iOS',
            slug: 'ios',
          },
        },
        {
          platform: {
            id: 21,
            name: 'Android',
            slug: 'android',
          },
        },
        {
          platform: {
            id: 5,
            name: 'macOS',
            slug: 'macos',
          },
        },
        {
          platform: {
            id: 14,
            name: 'Xbox 360',
            slug: 'xbox360',
          },
        },
        {
          platform: {
            id: 16,
            name: 'PlayStation 3',
            slug: 'playstation3',
          },
        },
        {
          platform: {
            id: 19,
            name: 'PS Vita',
            slug: 'ps-vita',
          },
        },
      ],
      stores: [
        {
          store: {
            id: 1,
            name: 'Steam',
            slug: 'steam',
          },
        },
        {
          store: {
            id: 3,
            name: 'PlayStation Store',
            slug: 'playstation-store',
          },
        },
        {
          store: {
            id: 2,
            name: 'Xbox Store',
            slug: 'xbox-store',
          },
        },
        {
          store: {
            id: 4,
            name: 'App Store',
            slug: 'apple-appstore',
          },
        },
        {
          store: {
            id: 5,
            name: 'GOG',
            slug: 'gog',
          },
        },
        {
          store: {
            id: 6,
            name: 'Nintendo Store',
            slug: 'nintendo',
          },
        },
        {
          store: {
            id: 7,
            name: 'Xbox 360 Store',
            slug: 'xbox360',
          },
        },
        {
          store: {
            id: 8,
            name: 'Google Play',
            slug: 'google-play',
          },
        },
        {
          store: {
            id: 11,
            name: 'Epic Games',
            slug: 'epic-games',
          },
        },
      ],
      released: '2012-04-23',
      tba: false,
      background_image:
        'https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg',
      rating: 4.34,
      rating_top: 5,
      ratings: [
        {
          id: 5,
          title: 'exceptional',
          count: 1225,
          percent: 53.08,
        },
        {
          id: 4,
          title: 'recommended',
          count: 812,
          percent: 35.18,
        },
        {
          id: 3,
          title: 'meh',
          count: 181,
          percent: 7.84,
        },
        {
          id: 1,
          title: 'skip',
          count: 90,
          percent: 3.9,
        },
      ],
      ratings_count: 2289,
      reviews_text_count: 14,
      added: 10502,
      added_by_status: {
        yet: 333,
        owned: 7197,
        beaten: 2480,
        toplay: 147,
        dropped: 305,
        playing: 40,
      },
      metacritic: 92,
      suggestions_count: 640,
      updated: '2023-07-10T21:51:47',
      id: 23027,
      score: null,
      clip: null,
      tags: [
        {
          id: 31,
          name: 'Singleplayer',
          slug: 'singleplayer',
          language: 'eng',
          games_count: 206544,
          image_background:
            'https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg',
        },
        {
          id: 42396,
          name: 'Для одного игрока',
          slug: 'dlia-odnogo-igroka',
          language: 'rus',
          games_count: 35171,
          image_background:
            'https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg',
        },
        {
          id: 42417,
          name: 'Экшен',
          slug: 'ekshen',
          language: 'rus',
          games_count: 32438,
          image_background:
            'https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg',
        },
        {
          id: 42392,
          name: 'Приключение',
          slug: 'prikliuchenie',
          language: 'rus',
          games_count: 30382,
          image_background:
            'https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg',
        },
        {
          id: 40836,
          name: 'Full controller support',
          slug: 'full-controller-support',
          language: 'eng',
          games_count: 14476,
          image_background:
            'https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg',
        },
        {
          id: 13,
          name: 'Atmospheric',
          slug: 'atmospheric',
          language: 'eng',
          games_count: 29635,
          image_background:
            'https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg',
        },
        {
          id: 42400,
          name: 'Атмосфера',
          slug: 'atmosfera',
          language: 'rus',
          games_count: 6083,
          image_background:
            'https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg',
        },
        {
          id: 42394,
          name: 'Глубокий сюжет',
          slug: 'glubokii-siuzhet',
          language: 'rus',
          games_count: 9153,
          image_background:
            'https://media.rawg.io/media/games/b7b/b7b8381707152afc7d91f5d95de70e39.jpg',
        },
        {
          id: 118,
          name: 'Story Rich',
          slug: 'story-rich',
          language: 'eng',
          games_count: 18334,
          image_background:
            'https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg',
        },
        {
          id: 42435,
          name: 'Шедевр',
          slug: 'shedevr',
          language: 'rus',
          games_count: 1059,
          image_background:
            'https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg',
        },
        {
          id: 149,
          name: 'Third Person',
          slug: 'third-person',
          language: 'eng',
          games_count: 9504,
          image_background:
            'https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg',
        },
        {
          id: 16,
          name: 'Horror',
          slug: 'horror',
          language: 'eng',
          games_count: 41984,
          image_background:
            'https://media.rawg.io/media/games/7c4/7c448374df84b607f67ce9182a3a3ca7.jpg',
        },
        {
          id: 42491,
          name: 'Мясо',
          slug: 'miaso',
          language: 'rus',
          games_count: 3940,
          image_background:
            'https://media.rawg.io/media/games/e04/e04963f3ac4c4fa83a1dc0b9231e50db.jpg',
        },
        {
          id: 26,
          name: 'Gore',
          slug: 'gore',
          language: 'eng',
          games_count: 5076,
          image_background:
            'https://media.rawg.io/media/games/f6b/f6bed028b02369d4cab548f4f9337e81.jpg',
        },
        {
          id: 1,
          name: 'Survival',
          slug: 'survival',
          language: 'eng',
          games_count: 7286,
          image_background:
            'https://media.rawg.io/media/games/b54/b54598d1d5cc31899f4f0a7e3122a7b0.jpg',
        },
        {
          id: 42452,
          name: 'Выживание',
          slug: 'vyzhivanie',
          language: 'rus',
          games_count: 4774,
          image_background:
            'https://media.rawg.io/media/games/7f6/7f6cd70ba2ad57053b4847c13569f2d8.jpg',
        },
        {
          id: 63,
          name: 'Zombies',
          slug: 'zombies',
          language: 'eng',
          games_count: 9683,
          image_background:
            'https://media.rawg.io/media/games/f6f/f6f39c5b56413f7f4513b25989a1b747.jpg',
        },
        {
          id: 141,
          name: 'Point & Click',
          slug: 'point-click',
          language: 'eng',
          games_count: 11761,
          image_background:
            'https://media.rawg.io/media/games/df2/df20fd77db56ae7b0a26a7ff4baa9ccc.jpg',
        },
        {
          id: 42544,
          name: 'Зомби',
          slug: 'zombi-2',
          language: 'rus',
          games_count: 2033,
          image_background:
            'https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg',
        },
        {
          id: 42390,
          name: 'Решения с последствиями',
          slug: 'resheniia-s-posledstviiami',
          language: 'rus',
          games_count: 3860,
          image_background:
            'https://media.rawg.io/media/games/a6c/a6ccd34125c594abf1a9c9821b9a715d.jpg',
        },
        {
          id: 43,
          name: 'Post-apocalyptic',
          slug: 'post-apocalyptic',
          language: 'eng',
          games_count: 3351,
          image_background:
            'https://media.rawg.io/media/games/a91/a911f0a91991469e398fa70091507a5b.jpg',
        },
        {
          id: 42488,
          name: 'Пост-апокалипсис',
          slug: 'post-apokalipsis',
          language: 'rus',
          games_count: 749,
          image_background:
            'https://media.rawg.io/media/games/471/4712c9ac591f556f553556b864a7e92b.jpg',
        },
        {
          id: 42529,
          name: 'Для взрослых',
          slug: 'dlia-vzroslykh',
          language: 'rus',
          games_count: 2035,
          image_background:
            'https://media.rawg.io/media/games/5fa/5fae5fec3c943179e09da67a4427d68f.jpg',
        },
        {
          id: 145,
          name: 'Choices Matter',
          slug: 'choices-matter',
          language: 'eng',
          games_count: 3651,
          image_background:
            'https://media.rawg.io/media/games/471/4712c9ac591f556f553556b864a7e92b.jpg',
        },
        {
          id: 192,
          name: 'Mature',
          slug: 'mature',
          language: 'eng',
          games_count: 2222,
          image_background:
            'https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg',
        },
        {
          id: 90,
          name: 'Visual Novel',
          slug: 'visual-novel',
          language: 'eng',
          games_count: 4829,
          image_background:
            'https://media.rawg.io/media/games/2fb/2fb35e31727f7ebc1f00bf998d0e22a7.jpg',
        },
        {
          id: 209,
          name: 'Drama',
          slug: 'drama',
          language: 'eng',
          games_count: 2824,
          image_background:
            'https://media.rawg.io/media/games/0be/0bea0a08a4d954337305391b778a7f37.jpg',
        },
        {
          id: 42445,
          name: 'Сериал',
          slug: 'serial-2',
          language: 'rus',
          games_count: 158,
          image_background:
            'https://media.rawg.io/media/games/48c/48c7e3e1268467b91b24c7da7c6539df.jpg',
        },
        {
          id: 42691,
          name: 'Эмоциональная',
          slug: 'emotsionalnaia',
          language: 'rus',
          games_count: 1737,
          image_background:
            'https://media.rawg.io/media/games/694/694ba14510656e8787536349220cb168.jpg',
        },
        {
          id: 232,
          name: 'Episodic',
          slug: 'episodic',
          language: 'eng',
          games_count: 430,
          image_background:
            'https://media.rawg.io/media/screenshots/25d/25df88db8714961a93e5ae1ecaa50e45.jpg',
        },
        {
          id: 42650,
          name: 'Драма',
          slug: 'drama-2',
          language: 'rus',
          games_count: 2213,
          image_background:
            'https://media.rawg.io/media/games/643/6431f15213a854efd273943f2cf6a925.jpg',
        },
        {
          id: 268,
          name: 'Comic Book',
          slug: 'comic-book',
          language: 'eng',
          games_count: 901,
          image_background:
            'https://media.rawg.io/media/games/aac/aac683272f862540a18625f02f5f3679.jpg',
        },
        {
          id: 42525,
          name: 'По комиксу',
          slug: 'po-komiksu',
          language: 'rus',
          games_count: 921,
          image_background:
            'https://media.rawg.io/media/games/234/23410661770ae13eac11066980834367.jpg',
        },
        {
          id: 269,
          name: 'Quick-Time Events',
          slug: 'quick-time-events',
          language: 'eng',
          games_count: 429,
          image_background:
            'https://media.rawg.io/media/games/7a5/7a5f7a3e58593bfda983507c2ddbc891.jpg',
        },
        {
          id: 222,
          name: 'Choose Your Own Adventure',
          slug: 'choose-your-own-adventure',
          language: 'eng',
          games_count: 2253,
          image_background:
            'https://media.rawg.io/media/screenshots/bf3/bf37a864502fb7cf395748420a48c650.jpg',
        },
        {
          id: 42602,
          name: 'Свобода выбора',
          slug: 'svoboda-vybora',
          language: 'rus',
          games_count: 784,
          image_background:
            'https://media.rawg.io/media/screenshots/e25/e253cc4df0c2604ec2b12cab8b45d58a.jpg',
        },
      ],
      esrb_rating: {
        id: 4,
        name: 'Mature',
        slug: 'mature',
        name_en: 'Mature',
        name_ru: 'С 17 лет',
      },
      user_game: null,
      reviews_count: 2308,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      short_screenshots: [
        {
          id: -1,
          image:
            'https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg',
        },
        {
          id: 227608,
          image:
            'https://media.rawg.io/media/screenshots/d38/d38c78ec9cc707bf42652452235dbe8c.jpg',
        },
        {
          id: 227609,
          image:
            'https://media.rawg.io/media/screenshots/bdb/bdb7dd4891bfbb0a80cd49b36ffd1a20.jpg',
        },
        {
          id: 227610,
          image:
            'https://media.rawg.io/media/screenshots/72b/72b67d15b5ae5538734bac2b195f2976.jpg',
        },
        {
          id: 227611,
          image:
            'https://media.rawg.io/media/screenshots/74d/74d6a18a7b5592777de8f6a7cdbc91f8.jpg',
        },
        {
          id: 227612,
          image:
            'https://media.rawg.io/media/screenshots/52a/52aca015b4748b1b0bbbacf33110e983.jpg',
        },
        {
          id: 227613,
          image:
            'https://media.rawg.io/media/screenshots/94b/94b6701276d06b5b562890601fd6abaa.jpg',
        },
      ],
      parent_platforms: [
        {
          platform: {
            id: 1,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 2,
            name: 'PlayStation',
            slug: 'playstation',
          },
        },
        {
          platform: {
            id: 3,
            name: 'Xbox',
            slug: 'xbox',
          },
        },
        {
          platform: {
            id: 4,
            name: 'iOS',
            slug: 'ios',
          },
        },
        {
          platform: {
            id: 8,
            name: 'Android',
            slug: 'android',
          },
        },
        {
          platform: {
            id: 5,
            name: 'Apple Macintosh',
            slug: 'mac',
          },
        },
        {
          platform: {
            id: 7,
            name: 'Nintendo',
            slug: 'nintendo',
          },
        },
      ],
      genres: [
        {
          id: 3,
          name: 'Adventure',
          slug: 'adventure',
        },
        {
          id: 4,
          name: 'Action',
          slug: 'action',
        },
      ],
    },
    {
      slug: 'bioshock-2',
      name: 'BioShock 2',
      playtime: 3,
      platforms: [
        {
          platform: {
            id: 4,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 1,
            name: 'Xbox One',
            slug: 'xbox-one',
          },
        },
        {
          platform: {
            id: 18,
            name: 'PlayStation 4',
            slug: 'playstation4',
          },
        },
        {
          platform: {
            id: 7,
            name: 'Nintendo Switch',
            slug: 'nintendo-switch',
          },
        },
        {
          platform: {
            id: 5,
            name: 'macOS',
            slug: 'macos',
          },
        },
        {
          platform: {
            id: 14,
            name: 'Xbox 360',
            slug: 'xbox360',
          },
        },
        {
          platform: {
            id: 16,
            name: 'PlayStation 3',
            slug: 'playstation3',
          },
        },
      ],
      stores: [
        {
          store: {
            id: 1,
            name: 'Steam',
            slug: 'steam',
          },
        },
        {
          store: {
            id: 3,
            name: 'PlayStation Store',
            slug: 'playstation-store',
          },
        },
        {
          store: {
            id: 2,
            name: 'Xbox Store',
            slug: 'xbox-store',
          },
        },
        {
          store: {
            id: 4,
            name: 'App Store',
            slug: 'apple-appstore',
          },
        },
        {
          store: {
            id: 7,
            name: 'Xbox 360 Store',
            slug: 'xbox360',
          },
        },
      ],
      released: '2010-02-09',
      tba: false,
      background_image:
        'https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg',
      rating: 4.07,
      rating_top: 4,
      ratings: [
        {
          id: 4,
          title: 'recommended',
          count: 955,
          percent: 52.65,
        },
        {
          id: 5,
          title: 'exceptional',
          count: 579,
          percent: 31.92,
        },
        {
          id: 3,
          title: 'meh',
          count: 195,
          percent: 10.75,
        },
        {
          id: 1,
          title: 'skip',
          count: 85,
          percent: 4.69,
        },
      ],
      ratings_count: 1801,
      reviews_text_count: 7,
      added: 10040,
      added_by_status: {
        yet: 738,
        owned: 6922,
        beaten: 1738,
        toplay: 236,
        dropped: 365,
        playing: 41,
      },
      metacritic: 88,
      suggestions_count: 643,
      updated: '2023-07-13T22:56:56',
      id: 4427,
      score: null,
      clip: null,
      tags: [
        {
          id: 31,
          name: 'Singleplayer',
          slug: 'singleplayer',
          language: 'eng',
          games_count: 206544,
          image_background:
            'https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg',
        },
        {
          id: 42396,
          name: 'Для одного игрока',
          slug: 'dlia-odnogo-igroka',
          language: 'rus',
          games_count: 35171,
          image_background:
            'https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg',
        },
        {
          id: 42417,
          name: 'Экшен',
          slug: 'ekshen',
          language: 'rus',
          games_count: 32438,
          image_background:
            'https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg',
        },
        {
          id: 42392,
          name: 'Приключение',
          slug: 'prikliuchenie',
          language: 'rus',
          games_count: 30382,
          image_background:
            'https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg',
        },
        {
          id: 40847,
          name: 'Steam Achievements',
          slug: 'steam-achievements',
          language: 'eng',
          games_count: 30840,
          image_background:
            'https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg',
        },
        {
          id: 7,
          name: 'Multiplayer',
          slug: 'multiplayer',
          language: 'eng',
          games_count: 35108,
          image_background:
            'https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg',
        },
        {
          id: 40836,
          name: 'Full controller support',
          slug: 'full-controller-support',
          language: 'eng',
          games_count: 14476,
          image_background:
            'https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg',
        },
        {
          id: 13,
          name: 'Atmospheric',
          slug: 'atmospheric',
          language: 'eng',
          games_count: 29635,
          image_background:
            'https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg',
        },
        {
          id: 42400,
          name: 'Атмосфера',
          slug: 'atmosfera',
          language: 'rus',
          games_count: 6083,
          image_background:
            'https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg',
        },
        {
          id: 42425,
          name: 'Для нескольких игроков',
          slug: 'dlia-neskolkikh-igrokov',
          language: 'rus',
          games_count: 7893,
          image_background:
            'https://media.rawg.io/media/games/713/713269608dc8f2f40f5a670a14b2de94.jpg',
        },
        {
          id: 42401,
          name: 'Отличный саундтрек',
          slug: 'otlichnyi-saundtrek',
          language: 'rus',
          games_count: 4463,
          image_background:
            'https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg',
        },
        {
          id: 42,
          name: 'Great Soundtrack',
          slug: 'great-soundtrack',
          language: 'eng',
          games_count: 3241,
          image_background:
            'https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg',
        },
        {
          id: 42394,
          name: 'Глубокий сюжет',
          slug: 'glubokii-siuzhet',
          language: 'rus',
          games_count: 9153,
          image_background:
            'https://media.rawg.io/media/games/b7b/b7b8381707152afc7d91f5d95de70e39.jpg',
        },
        {
          id: 24,
          name: 'RPG',
          slug: 'rpg',
          language: 'eng',
          games_count: 17413,
          image_background:
            'https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg',
        },
        {
          id: 42412,
          name: 'Ролевая игра',
          slug: 'rolevaia-igra',
          language: 'rus',
          games_count: 13830,
          image_background:
            'https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg',
        },
        {
          id: 118,
          name: 'Story Rich',
          slug: 'story-rich',
          language: 'eng',
          games_count: 18334,
          image_background:
            'https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg',
        },
        {
          id: 42428,
          name: 'Шутер',
          slug: 'shuter',
          language: 'rus',
          games_count: 6857,
          image_background:
            'https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg',
        },
        {
          id: 8,
          name: 'First-Person',
          slug: 'first-person',
          language: 'eng',
          games_count: 28676,
          image_background:
            'https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg',
        },
        {
          id: 42429,
          name: 'От первого лица',
          slug: 'ot-pervogo-litsa',
          language: 'rus',
          games_count: 7731,
          image_background:
            'https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg',
        },
        {
          id: 42435,
          name: 'Шедевр',
          slug: 'shedevr',
          language: 'rus',
          games_count: 1059,
          image_background:
            'https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg',
        },
        {
          id: 32,
          name: 'Sci-fi',
          slug: 'sci-fi',
          language: 'eng',
          games_count: 17236,
          image_background:
            'https://media.rawg.io/media/games/198/1988a337305e008b41d7f536ce9b73f6.jpg',
        },
        {
          id: 42423,
          name: 'Научная фантастика',
          slug: 'nauchnaia-fantastika',
          language: 'rus',
          games_count: 6108,
          image_background:
            'https://media.rawg.io/media/games/8e4/8e4de3f54ac659e08a7ba6a2b731682a.jpg',
        },
        {
          id: 16,
          name: 'Horror',
          slug: 'horror',
          language: 'eng',
          games_count: 41984,
          image_background:
            'https://media.rawg.io/media/games/7c4/7c448374df84b607f67ce9182a3a3ca7.jpg',
        },
        {
          id: 30,
          name: 'FPS',
          slug: 'fps',
          language: 'eng',
          games_count: 12151,
          image_background:
            'https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg',
        },
        {
          id: 42427,
          name: 'Шутер от первого лица',
          slug: 'shuter-ot-pervogo-litsa',
          language: 'rus',
          games_count: 4139,
          image_background:
            'https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg',
        },
        {
          id: 97,
          name: 'Action RPG',
          slug: 'action-rpg',
          language: 'eng',
          games_count: 5761,
          image_background:
            'https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg',
        },
        {
          id: 42489,
          name: 'Ролевой экшен',
          slug: 'rolevoi-ekshen',
          language: 'rus',
          games_count: 2740,
          image_background:
            'https://media.rawg.io/media/games/21a/21ad672cedee9b4378abb6c2d2e626ee.jpg',
        },
        {
          id: 42477,
          name: 'Мрачная',
          slug: 'mrachnaia',
          language: 'rus',
          games_count: 3664,
          image_background:
            'https://media.rawg.io/media/games/7ac/7aca7ccf0e70cd0974cb899ab9e5158e.jpg',
        },
        {
          id: 41,
          name: 'Dark',
          slug: 'dark',
          language: 'eng',
          games_count: 14171,
          image_background:
            'https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg',
        },
        {
          id: 119,
          name: 'Dystopian',
          slug: 'dystopian',
          language: 'eng',
          games_count: 1806,
          image_background:
            'https://media.rawg.io/media/screenshots/67e/67e5be6ad7a555248f50bd367e9a071c.jpg',
        },
        {
          id: 42665,
          name: 'Антиутопия',
          slug: 'antiutopiia',
          language: 'rus',
          games_count: 882,
          image_background:
            'https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg',
        },
        {
          id: 154,
          name: 'Steampunk',
          slug: 'steampunk',
          language: 'eng',
          games_count: 1117,
          image_background:
            'https://media.rawg.io/media/games/57f/57fc2051dd27c9947d12cdf63790d122.jpg',
        },
        {
          id: 42629,
          name: 'Стимпанк',
          slug: 'stimpank',
          language: 'rus',
          games_count: 399,
          image_background:
            'https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg',
        },
        {
          id: 305,
          name: 'Linear',
          slug: 'linear',
          language: 'eng',
          games_count: 4009,
          image_background:
            'https://media.rawg.io/media/games/e9c/e9c042d14515eb3ff7cb4db9fe78e435.jpg',
        },
        {
          id: 42660,
          name: 'Подводный мир',
          slug: 'podvodnyi-mir',
          language: 'rus',
          games_count: 319,
          image_background:
            'https://media.rawg.io/media/games/ba9/ba9ad92b6d04825bd15a407c6059db94.jpg',
        },
        {
          id: 250,
          name: 'Underwater',
          slug: 'underwater',
          language: 'eng',
          games_count: 1982,
          image_background:
            'https://media.rawg.io/media/games/b60/b60318b011b69252e97c11bbd194006f.jpg',
        },
        {
          id: 42640,
          name: 'Философская',
          slug: 'filosofskaia',
          language: 'rus',
          games_count: 557,
          image_background:
            'https://media.rawg.io/media/screenshots/5df/5df2d677ec0446b9d774834dcd7bda0e.jpg',
        },
        {
          id: 281,
          name: 'Philisophical',
          slug: 'philisophical',
          language: 'eng',
          games_count: 39,
          image_background:
            'https://media.rawg.io/media/screenshots/573/573f6403cf6de862ca5b886db8cf449a.jpg',
        },
      ],
      esrb_rating: null,
      user_game: null,
      reviews_count: 1814,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      short_screenshots: [
        {
          id: -1,
          image:
            'https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg',
        },
        {
          id: 162566,
          image:
            'https://media.rawg.io/media/screenshots/a13/a130b342c9830f9c56d65c204638fe17.jpg',
        },
        {
          id: 162567,
          image:
            'https://media.rawg.io/media/screenshots/f38/f38a519f1545ef5cda66676c155cc5b8.jpg',
        },
        {
          id: 162568,
          image:
            'https://media.rawg.io/media/screenshots/996/996d1459d3f2ec1f03daba488d96c521.jpg',
        },
        {
          id: 162569,
          image:
            'https://media.rawg.io/media/screenshots/8da/8daab3b2c3d9e355f636e7d408a08315.jpg',
        },
        {
          id: 162570,
          image:
            'https://media.rawg.io/media/screenshots/f5c/f5c713b706c6b153b6a22ca1b08a1f5a.jpg',
        },
        {
          id: 162571,
          image:
            'https://media.rawg.io/media/screenshots/b7c/b7c32275a6be8134744322f1204ce176.jpg',
        },
      ],
      parent_platforms: [
        {
          platform: {
            id: 1,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 2,
            name: 'PlayStation',
            slug: 'playstation',
          },
        },
        {
          platform: {
            id: 3,
            name: 'Xbox',
            slug: 'xbox',
          },
        },
        {
          platform: {
            id: 5,
            name: 'Apple Macintosh',
            slug: 'mac',
          },
        },
        {
          platform: {
            id: 7,
            name: 'Nintendo',
            slug: 'nintendo',
          },
        },
      ],
      genres: [
        {
          id: 2,
          name: 'Shooter',
          slug: 'shooter',
        },
        {
          id: 4,
          name: 'Action',
          slug: 'action',
        },
      ],
    },
    {
      slug: 'apex-legends',
      name: 'Apex Legends',
      playtime: 4,
      platforms: [
        {
          platform: {
            id: 4,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 1,
            name: 'Xbox One',
            slug: 'xbox-one',
          },
        },
        {
          platform: {
            id: 18,
            name: 'PlayStation 4',
            slug: 'playstation4',
          },
        },
        {
          platform: {
            id: 7,
            name: 'Nintendo Switch',
            slug: 'nintendo-switch',
          },
        },
        {
          platform: {
            id: 5,
            name: 'macOS',
            slug: 'macos',
          },
        },
      ],
      stores: [
        {
          store: {
            id: 1,
            name: 'Steam',
            slug: 'steam',
          },
        },
        {
          store: {
            id: 3,
            name: 'PlayStation Store',
            slug: 'playstation-store',
          },
        },
        {
          store: {
            id: 2,
            name: 'Xbox Store',
            slug: 'xbox-store',
          },
        },
        {
          store: {
            id: 6,
            name: 'Nintendo Store',
            slug: 'nintendo',
          },
        },
      ],
      released: '2019-02-04',
      tba: false,
      background_image:
        'https://media.rawg.io/media/games/b72/b7233d5d5b1e75e86bb860ccc7aeca85.jpg',
      rating: 3.66,
      rating_top: 4,
      ratings: [
        {
          id: 4,
          title: 'recommended',
          count: 1094,
          percent: 48.99,
        },
        {
          id: 3,
          title: 'meh',
          count: 597,
          percent: 26.74,
        },
        {
          id: 5,
          title: 'exceptional',
          count: 366,
          percent: 16.39,
        },
        {
          id: 1,
          title: 'skip',
          count: 176,
          percent: 7.88,
        },
      ],
      ratings_count: 2210,
      reviews_text_count: 19,
      added: 9956,
      added_by_status: {
        yet: 153,
        owned: 7318,
        beaten: 386,
        toplay: 85,
        dropped: 1502,
        playing: 512,
      },
      metacritic: 80,
      suggestions_count: 652,
      updated: '2023-07-10T02:27:10',
      id: 290856,
      score: null,
      clip: null,
      tags: [
        {
          id: 42417,
          name: 'Экшен',
          slug: 'ekshen',
          language: 'rus',
          games_count: 32512,
          image_background:
            'https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg',
        },
        {
          id: 42392,
          name: 'Приключение',
          slug: 'prikliuchenie',
          language: 'rus',
          games_count: 30453,
          image_background:
            'https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg',
        },
        {
          id: 7,
          name: 'Multiplayer',
          slug: 'multiplayer',
          language: 'eng',
          games_count: 35146,
          image_background:
            'https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg',
        },
        {
          id: 40836,
          name: 'Full controller support',
          slug: 'full-controller-support',
          language: 'eng',
          games_count: 14502,
          image_background:
            'https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg',
        },
        {
          id: 13,
          name: 'Atmospheric',
          slug: 'atmospheric',
          language: 'eng',
          games_count: 29665,
          image_background:
            'https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg',
        },
        {
          id: 42400,
          name: 'Атмосфера',
          slug: 'atmosfera',
          language: 'rus',
          games_count: 6083,
          image_background:
            'https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg',
        },
        {
          id: 42425,
          name: 'Для нескольких игроков',
          slug: 'dlia-neskolkikh-igrokov',
          language: 'rus',
          games_count: 7914,
          image_background:
            'https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg',
        },
        {
          id: 18,
          name: 'Co-op',
          slug: 'co-op',
          language: 'eng',
          games_count: 9911,
          image_background:
            'https://media.rawg.io/media/games/ec3/ec3a7db7b8ab5a71aad622fe7c62632f.jpg',
        },
        {
          id: 42428,
          name: 'Шутер',
          slug: 'shuter',
          language: 'rus',
          games_count: 6879,
          image_background:
            'https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg',
        },
        {
          id: 8,
          name: 'First-Person',
          slug: 'first-person',
          language: 'eng',
          games_count: 28703,
          image_background:
            'https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg',
        },
        {
          id: 42429,
          name: 'От первого лица',
          slug: 'ot-pervogo-litsa',
          language: 'rus',
          games_count: 7758,
          image_background:
            'https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg',
        },
        {
          id: 32,
          name: 'Sci-fi',
          slug: 'sci-fi',
          language: 'eng',
          games_count: 17251,
          image_background:
            'https://media.rawg.io/media/games/b7b/b7b8381707152afc7d91f5d95de70e39.jpg',
        },
        {
          id: 42423,
          name: 'Научная фантастика',
          slug: 'nauchnaia-fantastika',
          language: 'rus',
          games_count: 6123,
          image_background:
            'https://media.rawg.io/media/games/ec3/ec3a7db7b8ab5a71aad622fe7c62632f.jpg',
        },
        {
          id: 30,
          name: 'FPS',
          slug: 'fps',
          language: 'eng',
          games_count: 12162,
          image_background:
            'https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg',
        },
        {
          id: 42427,
          name: 'Шутер от первого лица',
          slug: 'shuter-ot-pervogo-litsa',
          language: 'rus',
          games_count: 4149,
          image_background:
            'https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg',
        },
        {
          id: 9,
          name: 'Online Co-Op',
          slug: 'online-co-op',
          language: 'eng',
          games_count: 4457,
          image_background:
            'https://media.rawg.io/media/games/21c/21cc15d233117c6809ec86870559e105.jpg',
        },
        {
          id: 6,
          name: 'Exploration',
          slug: 'exploration',
          language: 'eng',
          games_count: 19552,
          image_background:
            'https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg',
        },
        {
          id: 1,
          name: 'Survival',
          slug: 'survival',
          language: 'eng',
          games_count: 7303,
          image_background:
            'https://media.rawg.io/media/games/9dd/9ddabb34840ea9227556670606cf8ea3.jpg',
        },
        {
          id: 42452,
          name: 'Выживание',
          slug: 'vyzhivanie',
          language: 'rus',
          games_count: 4792,
          image_background:
            'https://media.rawg.io/media/games/9dd/9ddabb34840ea9227556670606cf8ea3.jpg',
        },
        {
          id: 42433,
          name: 'Совместная игра по сети',
          slug: 'sovmestnaia-igra-po-seti',
          language: 'rus',
          games_count: 1229,
          image_background:
            'https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg',
        },
        {
          id: 79,
          name: 'Free to Play',
          slug: 'free-to-play',
          language: 'eng',
          games_count: 5501,
          image_background:
            'https://media.rawg.io/media/games/b72/b7233d5d5b1e75e86bb860ccc7aeca85.jpg',
        },
        {
          id: 42436,
          name: 'Тактика',
          slug: 'taktika',
          language: 'rus',
          games_count: 2774,
          image_background:
            'https://media.rawg.io/media/games/14a/14a83c56ff668baaced6e8c8704b6391.jpg',
        },
        {
          id: 80,
          name: 'Tactical',
          slug: 'tactical',
          language: 'eng',
          games_count: 4152,
          image_background:
            'https://media.rawg.io/media/games/b72/b7233d5d5b1e75e86bb860ccc7aeca85.jpg',
        },
        {
          id: 69,
          name: 'Action-Adventure',
          slug: 'action-adventure',
          language: 'eng',
          games_count: 13646,
          image_background:
            'https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg',
        },
        {
          id: 42477,
          name: 'Мрачная',
          slug: 'mrachnaia',
          language: 'rus',
          games_count: 3684,
          image_background:
            'https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg',
        },
        {
          id: 41,
          name: 'Dark',
          slug: 'dark',
          language: 'eng',
          games_count: 14190,
          image_background:
            'https://media.rawg.io/media/games/63f/63f0e68688cad279ed38cde931dbfcdb.jpg',
        },
        {
          id: 157,
          name: 'PvP',
          slug: 'pvp',
          language: 'eng',
          games_count: 7356,
          image_background:
            'https://media.rawg.io/media/games/e1f/e1ffbeb1bac25b19749ad285ca29e158.jpg',
        },
        {
          id: 42434,
          name: 'Игрок против игрока',
          slug: 'igrok-protiv-igroka',
          language: 'rus',
          games_count: 3648,
          image_background:
            'https://media.rawg.io/media/games/8fc/8fc59e74133fd8a8a436b7e2d0fb36c2.jpg',
        },
        {
          id: 42530,
          name: 'Кастомизация персонажа',
          slug: 'kastomizatsiia-personazha',
          language: 'rus',
          games_count: 2782,
          image_background:
            'https://media.rawg.io/media/games/bce/bce62fbc7cf74bf6a1a37340993ec148.jpg',
        },
        {
          id: 121,
          name: 'Character Customization',
          slug: 'character-customization',
          language: 'eng',
          games_count: 3563,
          image_background:
            'https://media.rawg.io/media/games/d0f/d0f91fe1d92332147e5db74e207cfc7a.jpg',
        },
        {
          id: 11,
          name: 'Team-Based',
          slug: 'team-based',
          language: 'eng',
          games_count: 1303,
          image_background:
            'https://media.rawg.io/media/games/c7a/c7a71a0531a9518236d99d0d60abe447.jpg',
        },
        {
          id: 110,
          name: 'Cinematic',
          slug: 'cinematic',
          language: 'eng',
          games_count: 1446,
          image_background:
            'https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg',
        },
        {
          id: 42450,
          name: 'Командная',
          slug: 'komandnaia',
          language: 'rus',
          games_count: 1001,
          image_background:
            'https://media.rawg.io/media/games/b72/b7233d5d5b1e75e86bb860ccc7aeca85.jpg',
        },
        {
          id: 42470,
          name: 'Киберпанк',
          slug: 'kiberpank',
          language: 'rus',
          games_count: 1406,
          image_background:
            'https://media.rawg.io/media/games/8e6/8e699e91cf77c2060b6d515e2135b1b1.jpg',
        },
        {
          id: 1465,
          name: 'combat',
          slug: 'combat',
          language: 'eng',
          games_count: 9558,
          image_background:
            'https://media.rawg.io/media/games/bd2/bd2cc7714e0b9b1adad1ba1b2400d436.jpg',
        },
        {
          id: 226,
          name: 'Cyberpunk',
          slug: 'cyberpunk',
          language: 'eng',
          games_count: 4124,
          image_background:
            'https://media.rawg.io/media/games/d1f/d1f872a48286b6b751670817d5c1e1be.jpg',
        },
        {
          id: 42623,
          name: 'Кинематографичная',
          slug: 'kinematografichnaia',
          language: 'rus',
          games_count: 1353,
          image_background:
            'https://media.rawg.io/media/games/3c4/3c4a44ed99c87c56e0cdcfaaaf5c3628.jpg',
        },
        {
          id: 42675,
          name: 'Королевская битва',
          slug: 'korolevskaia-bitva',
          language: 'rus',
          games_count: 568,
          image_background:
            'https://media.rawg.io/media/screenshots/cd9/cd9b4b42455ca458425ee54052e61806.jpg',
        },
        {
          id: 35162,
          name: 'Battle Royale',
          slug: 'battle-royale-2',
          language: 'eng',
          games_count: 475,
          image_background:
            'https://media.rawg.io/media/screenshots/1ae/1aef4421d7f96e4fb8bb8d121cd3e703_SS9Fznj.jpg',
        },
        {
          id: 49953,
          name: 'Hero Shooter',
          slug: 'hero-shooter-2',
          language: 'eng',
          games_count: 519,
          image_background:
            'https://media.rawg.io/media/games/569/56978b5a77f13aa2ec5d09ec81d01cad.jpg',
        },
        {
          id: 12983,
          name: 'lootboxes',
          slug: 'lootboxes',
          language: 'eng',
          games_count: 5,
          image_background:
            'https://media.rawg.io/media/screenshots/92c/92c14790433315bdf43e30ec58f0ed1a.jpg',
        },
      ],
      esrb_rating: {
        id: 3,
        name: 'Teen',
        slug: 'teen',
        name_en: 'Teen',
        name_ru: 'С 13 лет',
      },
      user_game: null,
      reviews_count: 2233,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      short_screenshots: [
        {
          id: -1,
          image:
            'https://media.rawg.io/media/games/b72/b7233d5d5b1e75e86bb860ccc7aeca85.jpg',
        },
        {
          id: 1830288,
          image:
            'https://media.rawg.io/media/screenshots/a59/a593423f503eae7f29cd642827cda18d.jpg',
        },
        {
          id: 1830289,
          image:
            'https://media.rawg.io/media/screenshots/e7a/e7a1e5ec1b9861c340cdbef43bb47678.jpg',
        },
        {
          id: 1830290,
          image:
            'https://media.rawg.io/media/screenshots/76e/76e5b435f9ba8ed79da0e5dd25762075.jpg',
        },
        {
          id: 1830291,
          image:
            'https://media.rawg.io/media/screenshots/b4b/b4b3c320a4a3965d5da85406dcd05b77.jpg',
        },
        {
          id: 1830292,
          image:
            'https://media.rawg.io/media/screenshots/52a/52a0266fde34d2a24f4ad6aee3da5051.jpg',
        },
        {
          id: 1830293,
          image:
            'https://media.rawg.io/media/screenshots/05a/05a9a772ede23255689d1218b3b9a728.jpg',
        },
      ],
      parent_platforms: [
        {
          platform: {
            id: 1,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 2,
            name: 'PlayStation',
            slug: 'playstation',
          },
        },
        {
          platform: {
            id: 3,
            name: 'Xbox',
            slug: 'xbox',
          },
        },
        {
          platform: {
            id: 5,
            name: 'Apple Macintosh',
            slug: 'mac',
          },
        },
        {
          platform: {
            id: 7,
            name: 'Nintendo',
            slug: 'nintendo',
          },
        },
      ],
      genres: [
        {
          id: 59,
          name: 'Massively Multiplayer',
          slug: 'massively-multiplayer',
        },
        {
          id: 2,
          name: 'Shooter',
          slug: 'shooter',
        },
        {
          id: 3,
          name: 'Adventure',
          slug: 'adventure',
        },
        {
          id: 4,
          name: 'Action',
          slug: 'action',
        },
      ],
    },
    {
      slug: 'hollow-knight',
      name: 'Hollow Knight',
      playtime: 6,
      platforms: [
        {
          platform: {
            id: 4,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 18,
            name: 'PlayStation 4',
            slug: 'playstation4',
          },
        },
        {
          platform: {
            id: 1,
            name: 'Xbox One',
            slug: 'xbox-one',
          },
        },
        {
          platform: {
            id: 7,
            name: 'Nintendo Switch',
            slug: 'nintendo-switch',
          },
        },
        {
          platform: {
            id: 5,
            name: 'macOS',
            slug: 'macos',
          },
        },
        {
          platform: {
            id: 6,
            name: 'Linux',
            slug: 'linux',
          },
        },
        {
          platform: {
            id: 19,
            name: 'PS Vita',
            slug: 'ps-vita',
          },
        },
      ],
      stores: [
        {
          store: {
            id: 1,
            name: 'Steam',
            slug: 'steam',
          },
        },
        {
          store: {
            id: 3,
            name: 'PlayStation Store',
            slug: 'playstation-store',
          },
        },
        {
          store: {
            id: 2,
            name: 'Xbox Store',
            slug: 'xbox-store',
          },
        },
        {
          store: {
            id: 5,
            name: 'GOG',
            slug: 'gog',
          },
        },
        {
          store: {
            id: 6,
            name: 'Nintendo Store',
            slug: 'nintendo',
          },
        },
      ],
      released: '2017-02-23',
      tba: false,
      background_image:
        'https://media.rawg.io/media/games/4cf/4cfc6b7f1850590a4634b08bfab308ab.jpg',
      rating: 4.41,
      rating_top: 5,
      ratings: [
        {
          id: 5,
          title: 'exceptional',
          count: 1470,
          percent: 62.08,
        },
        {
          id: 4,
          title: 'recommended',
          count: 613,
          percent: 25.89,
        },
        {
          id: 3,
          title: 'meh',
          count: 175,
          percent: 7.39,
        },
        {
          id: 1,
          title: 'skip',
          count: 110,
          percent: 4.65,
        },
      ],
      ratings_count: 2322,
      reviews_text_count: 30,
      added: 9864,
      added_by_status: {
        yet: 784,
        owned: 5827,
        beaten: 1387,
        toplay: 576,
        dropped: 793,
        playing: 497,
      },
      metacritic: 88,
      suggestions_count: 486,
      updated: '2023-07-13T09:12:53',
      id: 9767,
      score: null,
      clip: null,
      tags: [
        {
          id: 31,
          name: 'Singleplayer',
          slug: 'singleplayer',
          language: 'eng',
          games_count: 206544,
          image_background:
            'https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg',
        },
        {
          id: 42396,
          name: 'Для одного игрока',
          slug: 'dlia-odnogo-igroka',
          language: 'rus',
          games_count: 35171,
          image_background:
            'https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg',
        },
        {
          id: 42417,
          name: 'Экшен',
          slug: 'ekshen',
          language: 'rus',
          games_count: 32438,
          image_background:
            'https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg',
        },
        {
          id: 42392,
          name: 'Приключение',
          slug: 'prikliuchenie',
          language: 'rus',
          games_count: 30382,
          image_background:
            'https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg',
        },
        {
          id: 40847,
          name: 'Steam Achievements',
          slug: 'steam-achievements',
          language: 'eng',
          games_count: 30840,
          image_background:
            'https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg',
        },
        {
          id: 42398,
          name: 'Инди',
          slug: 'indi-2',
          language: 'rus',
          games_count: 46233,
          image_background:
            'https://media.rawg.io/media/games/9fa/9fa63622543e5d4f6d99aa9d73b043de.jpg',
        },
        {
          id: 40836,
          name: 'Full controller support',
          slug: 'full-controller-support',
          language: 'eng',
          games_count: 14476,
          image_background:
            'https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg',
        },
        {
          id: 13,
          name: 'Atmospheric',
          slug: 'atmospheric',
          language: 'eng',
          games_count: 29635,
          image_background:
            'https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg',
        },
        {
          id: 40849,
          name: 'Steam Cloud',
          slug: 'steam-cloud',
          language: 'eng',
          games_count: 14345,
          image_background:
            'https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg',
        },
        {
          id: 42400,
          name: 'Атмосфера',
          slug: 'atmosfera',
          language: 'rus',
          games_count: 6083,
          image_background:
            'https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg',
        },
        {
          id: 7808,
          name: 'steam-trading-cards',
          slug: 'steam-trading-cards',
          language: 'eng',
          games_count: 7571,
          image_background:
            'https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg',
        },
        {
          id: 42401,
          name: 'Отличный саундтрек',
          slug: 'otlichnyi-saundtrek',
          language: 'rus',
          games_count: 4463,
          image_background:
            'https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg',
        },
        {
          id: 42,
          name: 'Great Soundtrack',
          slug: 'great-soundtrack',
          language: 'eng',
          games_count: 3241,
          image_background:
            'https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg',
        },
        {
          id: 42394,
          name: 'Глубокий сюжет',
          slug: 'glubokii-siuzhet',
          language: 'rus',
          games_count: 9153,
          image_background:
            'https://media.rawg.io/media/games/b7b/b7b8381707152afc7d91f5d95de70e39.jpg',
        },
        {
          id: 118,
          name: 'Story Rich',
          slug: 'story-rich',
          language: 'eng',
          games_count: 18334,
          image_background:
            'https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg',
        },
        {
          id: 42442,
          name: 'Открытый мир',
          slug: 'otkrytyi-mir',
          language: 'rus',
          games_count: 4494,
          image_background:
            'https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg',
        },
        {
          id: 36,
          name: 'Open World',
          slug: 'open-world',
          language: 'eng',
          games_count: 6316,
          image_background:
            'https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg',
        },
        {
          id: 45,
          name: '2D',
          slug: '2d',
          language: 'eng',
          games_count: 188239,
          image_background:
            'https://media.rawg.io/media/games/fd9/fd92f105dcd6491bc5d61135033d1f19.jpg',
        },
        {
          id: 42420,
          name: 'Сложная',
          slug: 'slozhnaia',
          language: 'rus',
          games_count: 4508,
          image_background:
            'https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg',
        },
        {
          id: 49,
          name: 'Difficult',
          slug: 'difficult',
          language: 'eng',
          games_count: 12486,
          image_background:
            'https://media.rawg.io/media/games/1f1/1f1888e1308959dfd3be4c144a81d19c.jpg',
        },
        {
          id: 6,
          name: 'Exploration',
          slug: 'exploration',
          language: 'eng',
          games_count: 19523,
          image_background:
            'https://media.rawg.io/media/games/9aa/9aa42d16d425fa6f179fc9dc2f763647.jpg',
        },
        {
          id: 42463,
          name: 'Платформер',
          slug: 'platformer-2',
          language: 'rus',
          games_count: 6582,
          image_background:
            'https://media.rawg.io/media/games/9cc/9cc11e2e81403186c7fa9c00c143d6e4.jpg',
        },
        {
          id: 42464,
          name: 'Исследование',
          slug: 'issledovanie',
          language: 'rus',
          games_count: 2979,
          image_background:
            'https://media.rawg.io/media/games/174/1743b3dd185bda4a7be349347d4064df.jpg',
        },
        {
          id: 42416,
          name: 'Контроллер',
          slug: 'kontroller',
          language: 'rus',
          games_count: 3979,
          image_background:
            'https://media.rawg.io/media/games/410/41033a495ce8f7fd4b0934bdb975f12a.jpg',
        },
        {
          id: 115,
          name: 'Controller',
          slug: 'controller',
          language: 'eng',
          games_count: 9522,
          image_background:
            'https://media.rawg.io/media/games/8d4/8d46786ca86b1d95f3dc7e700e2dc4dd.jpg',
        },
        {
          id: 42586,
          name: 'Милая',
          slug: 'milaia',
          language: 'rus',
          games_count: 8661,
          image_background:
            'https://media.rawg.io/media/games/cd3/cd3c9c7d3e95cb1608fd6250f1b90b7a.jpg',
        },
        {
          id: 336,
          name: 'controller support',
          slug: 'controller-support',
          language: 'eng',
          games_count: 293,
          image_background:
            'https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg',
        },
        {
          id: 42469,
          name: 'Вид сбоку',
          slug: 'vid-sboku',
          language: 'rus',
          games_count: 3094,
          image_background:
            'https://media.rawg.io/media/games/fad/fadc4be043ed07904012d47cd02671e4.jpg',
        },
        {
          id: 88,
          name: 'Cute',
          slug: 'cute',
          language: 'eng',
          games_count: 29623,
          image_background:
            'https://media.rawg.io/media/games/f8c/f8c6a262ead4c16b47e1219310210eb3.jpg',
        },
        {
          id: 42506,
          name: 'Тёмное фэнтези',
          slug: 'tiomnoe-fentezi',
          language: 'rus',
          games_count: 1970,
          image_background:
            'https://media.rawg.io/media/games/511/5116b4524cea34c6b3f12e0ca027d850.jpg',
        },
        {
          id: 113,
          name: 'Side Scroller',
          slug: 'side-scroller',
          language: 'eng',
          games_count: 9479,
          image_background:
            'https://media.rawg.io/media/games/bbf/bbf8d74ab64440ad76294cff2f4d9cfa.jpg',
        },
        {
          id: 40,
          name: 'Dark Fantasy',
          slug: 'dark-fantasy',
          language: 'eng',
          games_count: 3283,
          image_background:
            'https://media.rawg.io/media/games/a6c/a6ccd34125c594abf1a9c9821b9a715d.jpg',
        },
        {
          id: 218,
          name: 'Multiple Endings',
          slug: 'multiple-endings',
          language: 'eng',
          games_count: 7148,
          image_background:
            'https://media.rawg.io/media/games/e63/e635b8c7fbe3ffd69ad6c1c586cd250e.jpg',
        },
        {
          id: 42508,
          name: 'Нелинейность',
          slug: 'nelineinost',
          language: 'rus',
          games_count: 1017,
          image_background:
            'https://media.rawg.io/media/games/046/0464f4a36cd975a37c95b93b06058855.jpg',
        },
        {
          id: 259,
          name: 'Metroidvania',
          slug: 'metroidvania',
          language: 'eng',
          games_count: 4045,
          image_background:
            'https://media.rawg.io/media/games/1f1/1f1888e1308959dfd3be4c144a81d19c.jpg',
        },
        {
          id: 42462,
          name: 'Метроидвания',
          slug: 'metroidvaniia',
          language: 'rus',
          games_count: 948,
          image_background:
            'https://media.rawg.io/media/games/cfe/cfe5960b5caca432f3575fc7d8ff736b.jpg',
        },
        {
          id: 42483,
          name: 'Рисованная графика',
          slug: 'risovannaia-grafika',
          language: 'rus',
          games_count: 2866,
          image_background:
            'https://media.rawg.io/media/games/8f5/8f51cd193717f03ec820b5caece4f963.jpg',
        },
        {
          id: 258,
          name: 'Hand-drawn',
          slug: 'hand-drawn',
          language: 'eng',
          games_count: 5755,
          image_background:
            'https://media.rawg.io/media/games/c47/c4796c4c49e7e06ad328e07aa8944cdd.jpg',
        },
        {
          id: 42592,
          name: 'Похожа на Dark Souls',
          slug: 'pokhozha-na-dark-souls',
          language: 'rus',
          games_count: 661,
          image_background:
            'https://media.rawg.io/media/games/5ec/5ecac5cb026ec26a56efcc546364e348.jpg',
        },
        {
          id: 204,
          name: 'Gothic',
          slug: 'gothic',
          language: 'eng',
          games_count: 755,
          image_background:
            'https://media.rawg.io/media/games/c32/c323f9c17ac95c363772bb9ff3693dc6.jpg',
        },
      ],
      esrb_rating: {
        id: 2,
        name: 'Everyone 10+',
        slug: 'everyone-10-plus',
        name_en: 'Everyone 10+',
        name_ru: 'С 10 лет',
      },
      user_game: null,
      reviews_count: 2368,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      short_screenshots: [
        {
          id: -1,
          image:
            'https://media.rawg.io/media/games/4cf/4cfc6b7f1850590a4634b08bfab308ab.jpg',
        },
        {
          id: 72619,
          image:
            'https://media.rawg.io/media/screenshots/6b3/6b309936c1fe07e9b7fa5e62a372790d.jpg',
        },
        {
          id: 72620,
          image:
            'https://media.rawg.io/media/screenshots/1a7/1a7a69db58c19d323f1dfbcc340d3f1e.jpg',
        },
        {
          id: 72621,
          image:
            'https://media.rawg.io/media/screenshots/723/7237d0c546b0d17a6a226f38823081d4.jpg',
        },
        {
          id: 72622,
          image:
            'https://media.rawg.io/media/screenshots/331/331095489397e7387681d921e8e472d4.jpg',
        },
        {
          id: 72623,
          image:
            'https://media.rawg.io/media/screenshots/5db/5db89e896496352c8f0a0a0bd545bd6d.jpg',
        },
        {
          id: 72624,
          image:
            'https://media.rawg.io/media/screenshots/843/843e06c9c5b26c309b47bd7075320dae.jpg',
        },
      ],
      parent_platforms: [
        {
          platform: {
            id: 1,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 2,
            name: 'PlayStation',
            slug: 'playstation',
          },
        },
        {
          platform: {
            id: 3,
            name: 'Xbox',
            slug: 'xbox',
          },
        },
        {
          platform: {
            id: 5,
            name: 'Apple Macintosh',
            slug: 'mac',
          },
        },
        {
          platform: {
            id: 6,
            name: 'Linux',
            slug: 'linux',
          },
        },
        {
          platform: {
            id: 7,
            name: 'Nintendo',
            slug: 'nintendo',
          },
        },
      ],
      genres: [
        {
          id: 83,
          name: 'Platformer',
          slug: 'platformer',
        },
        {
          id: 51,
          name: 'Indie',
          slug: 'indie',
        },
        {
          id: 4,
          name: 'Action',
          slug: 'action',
        },
      ],
    },
    {
      slug: 'little-nightmares',
      name: 'Little Nightmares',
      playtime: 3,
      platforms: [
        {
          platform: {
            id: 4,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 1,
            name: 'Xbox One',
            slug: 'xbox-one',
          },
        },
        {
          platform: {
            id: 18,
            name: 'PlayStation 4',
            slug: 'playstation4',
          },
        },
        {
          platform: {
            id: 7,
            name: 'Nintendo Switch',
            slug: 'nintendo-switch',
          },
        },
      ],
      stores: [
        {
          store: {
            id: 1,
            name: 'Steam',
            slug: 'steam',
          },
        },
        {
          store: {
            id: 3,
            name: 'PlayStation Store',
            slug: 'playstation-store',
          },
        },
        {
          store: {
            id: 2,
            name: 'Xbox Store',
            slug: 'xbox-store',
          },
        },
        {
          store: {
            id: 5,
            name: 'GOG',
            slug: 'gog',
          },
        },
      ],
      released: '2017-04-27',
      tba: false,
      background_image:
        'https://media.rawg.io/media/games/8a0/8a02f84a5916ede2f923b88d5f8217ba.jpg',
      rating: 4.04,
      rating_top: 4,
      ratings: [
        {
          id: 4,
          title: 'recommended',
          count: 780,
          percent: 54.78,
        },
        {
          id: 5,
          title: 'exceptional',
          count: 430,
          percent: 30.2,
        },
        {
          id: 3,
          title: 'meh',
          count: 138,
          percent: 9.69,
        },
        {
          id: 1,
          title: 'skip',
          count: 76,
          percent: 5.34,
        },
      ],
      ratings_count: 1398,
      reviews_text_count: 22,
      added: 9743,
      added_by_status: {
        yet: 708,
        owned: 7128,
        beaten: 1201,
        toplay: 347,
        dropped: 240,
        playing: 119,
      },
      metacritic: 81,
      suggestions_count: 313,
      updated: '2023-07-11T21:54:16',
      id: 41,
      score: null,
      clip: null,
      tags: [
        {
          id: 31,
          name: 'Singleplayer',
          slug: 'singleplayer',
          language: 'eng',
          games_count: 206544,
          image_background:
            'https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg',
        },
        {
          id: 42396,
          name: 'Для одного игрока',
          slug: 'dlia-odnogo-igroka',
          language: 'rus',
          games_count: 35171,
          image_background:
            'https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg',
        },
        {
          id: 42417,
          name: 'Экшен',
          slug: 'ekshen',
          language: 'rus',
          games_count: 32438,
          image_background:
            'https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg',
        },
        {
          id: 42392,
          name: 'Приключение',
          slug: 'prikliuchenie',
          language: 'rus',
          games_count: 30382,
          image_background:
            'https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg',
        },
        {
          id: 40847,
          name: 'Steam Achievements',
          slug: 'steam-achievements',
          language: 'eng',
          games_count: 30840,
          image_background:
            'https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg',
        },
        {
          id: 42398,
          name: 'Инди',
          slug: 'indi-2',
          language: 'rus',
          games_count: 46233,
          image_background:
            'https://media.rawg.io/media/games/9fa/9fa63622543e5d4f6d99aa9d73b043de.jpg',
        },
        {
          id: 40836,
          name: 'Full controller support',
          slug: 'full-controller-support',
          language: 'eng',
          games_count: 14476,
          image_background:
            'https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg',
        },
        {
          id: 13,
          name: 'Atmospheric',
          slug: 'atmospheric',
          language: 'eng',
          games_count: 29635,
          image_background:
            'https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg',
        },
        {
          id: 40849,
          name: 'Steam Cloud',
          slug: 'steam-cloud',
          language: 'eng',
          games_count: 14345,
          image_background:
            'https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg',
        },
        {
          id: 42400,
          name: 'Атмосфера',
          slug: 'atmosfera',
          language: 'rus',
          games_count: 6083,
          image_background:
            'https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg',
        },
        {
          id: 7808,
          name: 'steam-trading-cards',
          slug: 'steam-trading-cards',
          language: 'eng',
          games_count: 7571,
          image_background:
            'https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg',
        },
        {
          id: 42401,
          name: 'Отличный саундтрек',
          slug: 'otlichnyi-saundtrek',
          language: 'rus',
          games_count: 4463,
          image_background:
            'https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg',
        },
        {
          id: 42,
          name: 'Great Soundtrack',
          slug: 'great-soundtrack',
          language: 'eng',
          games_count: 3241,
          image_background:
            'https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg',
        },
        {
          id: 42394,
          name: 'Глубокий сюжет',
          slug: 'glubokii-siuzhet',
          language: 'rus',
          games_count: 9153,
          image_background:
            'https://media.rawg.io/media/games/b7b/b7b8381707152afc7d91f5d95de70e39.jpg',
        },
        {
          id: 118,
          name: 'Story Rich',
          slug: 'story-rich',
          language: 'eng',
          games_count: 18334,
          image_background:
            'https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg',
        },
        {
          id: 42421,
          name: 'Стратегия',
          slug: 'strategiia',
          language: 'rus',
          games_count: 15056,
          image_background:
            'https://media.rawg.io/media/games/21a/21ad672cedee9b4378abb6c2d2e626ee.jpg',
        },
        {
          id: 149,
          name: 'Third Person',
          slug: 'third-person',
          language: 'eng',
          games_count: 9504,
          image_background:
            'https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg',
        },
        {
          id: 42441,
          name: 'От третьего лица',
          slug: 'ot-tretego-litsa',
          language: 'rus',
          games_count: 5015,
          image_background:
            'https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg',
        },
        {
          id: 16,
          name: 'Horror',
          slug: 'horror',
          language: 'eng',
          games_count: 41984,
          image_background:
            'https://media.rawg.io/media/games/7c4/7c448374df84b607f67ce9182a3a3ca7.jpg',
        },
        {
          id: 42465,
          name: 'Головоломка',
          slug: 'golovolomka',
          language: 'rus',
          games_count: 11685,
          image_background:
            'https://media.rawg.io/media/games/fd8/fd882c8267a44621a0de6f9cec77ae90.jpg',
        },
        {
          id: 189,
          name: 'Female Protagonist',
          slug: 'female-protagonist',
          language: 'eng',
          games_count: 10614,
          image_background:
            'https://media.rawg.io/media/games/5a4/5a44112251d70a25291cc33757220fce.jpg',
        },
        {
          id: 42404,
          name: 'Женщина-протагонист',
          slug: 'zhenshchina-protagonist',
          language: 'rus',
          games_count: 2413,
          image_background:
            'https://media.rawg.io/media/games/3cf/3cff89996570cf29a10eb9cd967dcf73.jpg',
        },
        {
          id: 42463,
          name: 'Платформер',
          slug: 'platformer-2',
          language: 'rus',
          games_count: 6582,
          image_background:
            'https://media.rawg.io/media/games/9cc/9cc11e2e81403186c7fa9c00c143d6e4.jpg',
        },
        {
          id: 15,
          name: 'Stealth',
          slug: 'stealth',
          language: 'eng',
          games_count: 5742,
          image_background:
            'https://media.rawg.io/media/games/7ac/7aca7ccf0e70cd0974cb899ab9e5158e.jpg',
        },
        {
          id: 42439,
          name: 'Стелс',
          slug: 'stels',
          language: 'rus',
          games_count: 1597,
          image_background:
            'https://media.rawg.io/media/games/bce/bce62fbc7cf74bf6a1a37340993ec148.jpg',
        },
        {
          id: 42477,
          name: 'Мрачная',
          slug: 'mrachnaia',
          language: 'rus',
          games_count: 3664,
          image_background:
            'https://media.rawg.io/media/games/7ac/7aca7ccf0e70cd0974cb899ab9e5158e.jpg',
        },
        {
          id: 41,
          name: 'Dark',
          slug: 'dark',
          language: 'eng',
          games_count: 14171,
          image_background:
            'https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg',
        },
        {
          id: 336,
          name: 'controller support',
          slug: 'controller-support',
          language: 'eng',
          games_count: 293,
          image_background:
            'https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg',
        },
        {
          id: 42471,
          name: 'Хоррор на выживание',
          slug: 'khorror-na-vyzhivanie',
          language: 'rus',
          games_count: 2249,
          image_background:
            'https://media.rawg.io/media/games/c11/c11a0b92b4c28f2e0db489f430142653.jpg',
        },
        {
          id: 17,
          name: 'Survival Horror',
          slug: 'survival-horror',
          language: 'eng',
          games_count: 7621,
          image_background:
            'https://media.rawg.io/media/games/348/348640e78a7fcd4bb7dcad4fea014eeb.jpg',
        },
        {
          id: 111,
          name: 'Short',
          slug: 'short',
          language: 'eng',
          games_count: 57476,
          image_background:
            'https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg',
        },
        {
          id: 42457,
          name: 'Короткая',
          slug: 'korotkaia',
          language: 'rus',
          games_count: 1345,
          image_background:
            'https://media.rawg.io/media/games/6a2/6a2e48933245e2cd3c92248c75c925e1.jpg',
        },
        {
          id: 42468,
          name: 'Головоломка-платформер',
          slug: 'golovolomka-platformer',
          language: 'rus',
          games_count: 2817,
          image_background:
            'https://media.rawg.io/media/games/6c8/6c8cb4780ce30b76b944cf656e8fff49.jpg',
        },
        {
          id: 334,
          name: 'achievements',
          slug: 'achievements',
          language: 'eng',
          games_count: 4890,
          image_background:
            'https://media.rawg.io/media/games/c49/c4983df94a8a8167d652b812de742da8.jpg',
        },
        {
          id: 42667,
          name: 'Псевдотрёхмерность',
          slug: 'psevdotriokhmernost',
          language: 'rus',
          games_count: 1452,
          image_background:
            'https://media.rawg.io/media/games/96b/96b9420bbd4bd1b79bf2a67f7779733a.jpg',
        },
        {
          id: 83,
          name: 'Puzzle-Platformer',
          slug: 'puzzle-platformer',
          language: 'eng',
          games_count: 9497,
          image_background:
            'https://media.rawg.io/media/screenshots/351/351ee0915fcd5a64e976791794039d5c.jpg',
        },
        {
          id: 116,
          name: '2.5D',
          slug: '25d',
          language: 'eng',
          games_count: 1379,
          image_background:
            'https://media.rawg.io/media/games/595/59556e1839b2e79b6f11f2c68a197663.jpg',
        },
      ],
      esrb_rating: {
        id: 3,
        name: 'Teen',
        slug: 'teen',
        name_en: 'Teen',
        name_ru: 'С 13 лет',
      },
      user_game: null,
      reviews_count: 1424,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      short_screenshots: [
        {
          id: -1,
          image:
            'https://media.rawg.io/media/games/8a0/8a02f84a5916ede2f923b88d5f8217ba.jpg',
        },
        {
          id: 258,
          image:
            'https://media.rawg.io/media/screenshots/00a/00a53be1dcfba6c63ac6807637c4a45a.jpg',
        },
        {
          id: 259,
          image:
            'https://media.rawg.io/media/screenshots/78a/78aa666996cf9d2708f529c18784262f.jpg',
        },
        {
          id: 260,
          image:
            'https://media.rawg.io/media/screenshots/96d/96d356977066c0c2159ed7ef3f470cab.jpg',
        },
        {
          id: 261,
          image:
            'https://media.rawg.io/media/screenshots/3dc/3dc7c607ff7873eaa84a8d69eac26335.jpg',
        },
        {
          id: 262,
          image:
            'https://media.rawg.io/media/screenshots/a83/a83cce4aae86d8ed0b7c8d933231b9bf.jpg',
        },
        {
          id: 263,
          image:
            'https://media.rawg.io/media/screenshots/0c6/0c6642fb4a74893a4c950528791fe7dd.jpg',
        },
      ],
      parent_platforms: [
        {
          platform: {
            id: 1,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 2,
            name: 'PlayStation',
            slug: 'playstation',
          },
        },
        {
          platform: {
            id: 3,
            name: 'Xbox',
            slug: 'xbox',
          },
        },
        {
          platform: {
            id: 7,
            name: 'Nintendo',
            slug: 'nintendo',
          },
        },
      ],
      genres: [
        {
          id: 83,
          name: 'Platformer',
          slug: 'platformer',
        },
        {
          id: 4,
          name: 'Action',
          slug: 'action',
        },
      ],
    },
    {
      slug: 'hotline-miami',
      name: 'Hotline Miami',
      playtime: 5,
      platforms: [
        {
          platform: {
            id: 4,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 1,
            name: 'Xbox One',
            slug: 'xbox-one',
          },
        },
        {
          platform: {
            id: 18,
            name: 'PlayStation 4',
            slug: 'playstation4',
          },
        },
        {
          platform: {
            id: 7,
            name: 'Nintendo Switch',
            slug: 'nintendo-switch',
          },
        },
        {
          platform: {
            id: 6,
            name: 'Linux',
            slug: 'linux',
          },
        },
        {
          platform: {
            id: 19,
            name: 'PS Vita',
            slug: 'ps-vita',
          },
        },
      ],
      stores: [
        {
          store: {
            id: 1,
            name: 'Steam',
            slug: 'steam',
          },
        },
        {
          store: {
            id: 3,
            name: 'PlayStation Store',
            slug: 'playstation-store',
          },
        },
        {
          store: {
            id: 5,
            name: 'GOG',
            slug: 'gog',
          },
        },
        {
          store: {
            id: 8,
            name: 'Google Play',
            slug: 'google-play',
          },
        },
      ],
      released: '2012-10-22',
      tba: false,
      background_image:
        'https://media.rawg.io/media/games/9fa/9fa63622543e5d4f6d99aa9d73b043de.jpg',
      rating: 4.38,
      rating_top: 5,
      ratings: [
        {
          id: 5,
          title: 'exceptional',
          count: 1326,
          percent: 54.48,
        },
        {
          id: 4,
          title: 'recommended',
          count: 858,
          percent: 35.25,
        },
        {
          id: 3,
          title: 'meh',
          count: 170,
          percent: 6.98,
        },
        {
          id: 1,
          title: 'skip',
          count: 80,
          percent: 3.29,
        },
      ],
      ratings_count: 2412,
      reviews_text_count: 12,
      added: 9611,
      added_by_status: {
        yet: 350,
        owned: 6360,
        beaten: 2086,
        toplay: 181,
        dropped: 558,
        playing: 76,
      },
      metacritic: 85,
      suggestions_count: 289,
      updated: '2023-07-10T21:51:09',
      id: 3612,
      score: null,
      clip: null,
      tags: [
        {
          id: 31,
          name: 'Singleplayer',
          slug: 'singleplayer',
          language: 'eng',
          games_count: 206544,
          image_background:
            'https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg',
        },
        {
          id: 42396,
          name: 'Для одного игрока',
          slug: 'dlia-odnogo-igroka',
          language: 'rus',
          games_count: 35171,
          image_background:
            'https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg',
        },
        {
          id: 42417,
          name: 'Экшен',
          slug: 'ekshen',
          language: 'rus',
          games_count: 32438,
          image_background:
            'https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg',
        },
        {
          id: 40847,
          name: 'Steam Achievements',
          slug: 'steam-achievements',
          language: 'eng',
          games_count: 30840,
          image_background:
            'https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg',
        },
        {
          id: 42398,
          name: 'Инди',
          slug: 'indi-2',
          language: 'rus',
          games_count: 46233,
          image_background:
            'https://media.rawg.io/media/games/9fa/9fa63622543e5d4f6d99aa9d73b043de.jpg',
        },
        {
          id: 13,
          name: 'Atmospheric',
          slug: 'atmospheric',
          language: 'eng',
          games_count: 29635,
          image_background:
            'https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg',
        },
        {
          id: 42400,
          name: 'Атмосфера',
          slug: 'atmosfera',
          language: 'rus',
          games_count: 6083,
          image_background:
            'https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg',
        },
        {
          id: 7808,
          name: 'steam-trading-cards',
          slug: 'steam-trading-cards',
          language: 'eng',
          games_count: 7571,
          image_background:
            'https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg',
        },
        {
          id: 42401,
          name: 'Отличный саундтрек',
          slug: 'otlichnyi-saundtrek',
          language: 'rus',
          games_count: 4463,
          image_background:
            'https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg',
        },
        {
          id: 42,
          name: 'Great Soundtrack',
          slug: 'great-soundtrack',
          language: 'eng',
          games_count: 3241,
          image_background:
            'https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg',
        },
        {
          id: 42428,
          name: 'Шутер',
          slug: 'shuter',
          language: 'rus',
          games_count: 6857,
          image_background:
            'https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg',
        },
        {
          id: 45,
          name: '2D',
          slug: '2d',
          language: 'eng',
          games_count: 188239,
          image_background:
            'https://media.rawg.io/media/games/fd9/fd92f105dcd6491bc5d61135033d1f19.jpg',
        },
        {
          id: 40845,
          name: 'Partial Controller Support',
          slug: 'partial-controller-support',
          language: 'eng',
          games_count: 9866,
          image_background:
            'https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg',
        },
        {
          id: 42420,
          name: 'Сложная',
          slug: 'slozhnaia',
          language: 'rus',
          games_count: 4508,
          image_background:
            'https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg',
        },
        {
          id: 42491,
          name: 'Мясо',
          slug: 'miaso',
          language: 'rus',
          games_count: 3940,
          image_background:
            'https://media.rawg.io/media/games/e04/e04963f3ac4c4fa83a1dc0b9231e50db.jpg',
        },
        {
          id: 26,
          name: 'Gore',
          slug: 'gore',
          language: 'eng',
          games_count: 5076,
          image_background:
            'https://media.rawg.io/media/games/f6b/f6bed028b02369d4cab548f4f9337e81.jpg',
        },
        {
          id: 49,
          name: 'Difficult',
          slug: 'difficult',
          language: 'eng',
          games_count: 12486,
          image_background:
            'https://media.rawg.io/media/games/1f1/1f1888e1308959dfd3be4c144a81d19c.jpg',
        },
        {
          id: 42402,
          name: 'Насилие',
          slug: 'nasilie',
          language: 'rus',
          games_count: 4884,
          image_background:
            'https://media.rawg.io/media/games/858/858c016de0cf7bc21a57dcc698a04a0c.jpg',
        },
        {
          id: 34,
          name: 'Violent',
          slug: 'violent',
          language: 'eng',
          games_count: 5927,
          image_background:
            'https://media.rawg.io/media/games/5fa/5fae5fec3c943179e09da67a4427d68f.jpg',
        },
        {
          id: 42415,
          name: 'Пиксельная графика',
          slug: 'pikselnaia-grafika',
          language: 'rus',
          games_count: 9128,
          image_background:
            'https://media.rawg.io/media/games/f62/f62eb0901c7017776e0a5c6a94f979d5.jpg',
        },
        {
          id: 42467,
          name: 'Ретро',
          slug: 'retro-2',
          language: 'rus',
          games_count: 5845,
          image_background:
            'https://media.rawg.io/media/games/9cc/9cc11e2e81403186c7fa9c00c143d6e4.jpg',
        },
        {
          id: 122,
          name: 'Pixel Graphics',
          slug: 'pixel-graphics',
          language: 'eng',
          games_count: 90313,
          image_background:
            'https://media.rawg.io/media/games/bbf/bbf8d74ab64440ad76294cff2f4d9cfa.jpg',
        },
        {
          id: 74,
          name: 'Retro',
          slug: 'retro',
          language: 'eng',
          games_count: 39694,
          image_background:
            'https://media.rawg.io/media/games/2ae/2aedae90b1377a0f3e5ce54d24f8e41a.jpg',
        },
        {
          id: 336,
          name: 'controller support',
          slug: 'controller-support',
          language: 'eng',
          games_count: 293,
          image_background:
            'https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg',
        },
        {
          id: 42612,
          name: 'Быстрая',
          slug: 'bystraia',
          language: 'rus',
          games_count: 1522,
          image_background:
            'https://media.rawg.io/media/games/bee/bee483efadcf9d7e657e52184316a34e.jpg',
        },
        {
          id: 131,
          name: 'Fast-Paced',
          slug: 'fast-paced',
          language: 'eng',
          games_count: 10274,
          image_background:
            'https://media.rawg.io/media/games/556/556157feed9ee1f55f2b12b2973e30a3.jpg',
        },
        {
          id: 42515,
          name: 'Вид сверху',
          slug: 'vid-sverkhu',
          language: 'rus',
          games_count: 4428,
          image_background:
            'https://media.rawg.io/media/games/d28/d28e64fd1af23d1846d20b47dfa933f8.jpeg',
        },
        {
          id: 61,
          name: 'Top-Down',
          slug: 'top-down',
          language: 'eng',
          games_count: 23032,
          image_background:
            'https://media.rawg.io/media/screenshots/2fc/2fc6994425146f9dba3133400b414e29.jpg',
        },
        {
          id: 337,
          name: 'overlay',
          slug: 'overlay',
          language: 'eng',
          games_count: 220,
          image_background:
            'https://media.rawg.io/media/games/003/0031c0067559d41df19cf98ad87e02aa.jpg',
        },
        {
          id: 136,
          name: 'Music',
          slug: 'music',
          language: 'eng',
          games_count: 25722,
          image_background:
            'https://media.rawg.io/media/screenshots/695/69511e8a8ec8edf9b85c3e68190844a4.jpg',
        },
        {
          id: 42672,
          name: 'Сюрреалистичная',
          slug: 'siurrealistichnaia',
          language: 'rus',
          games_count: 1670,
          image_background:
            'https://media.rawg.io/media/screenshots/9d2/9d22689a1c2a7ced9d1690e0c5c66871.jpg',
        },
        {
          id: 46,
          name: 'Surreal',
          slug: 'surreal',
          language: 'eng',
          games_count: 4570,
          image_background:
            'https://media.rawg.io/media/games/d79/d794c9198ec994cc12ede5ebd4672623.jpg',
        },
        {
          id: 42517,
          name: 'Затягивающая',
          slug: 'zatiagivaiushchaia',
          language: 'rus',
          games_count: 346,
          image_background:
            'https://media.rawg.io/media/screenshots/321/3213f56333ca5e92a620f41bd3365637.jpg',
        },
        {
          id: 42620,
          name: 'Музыка',
          slug: 'muzyka',
          language: 'rus',
          games_count: 965,
          image_background:
            'https://media.rawg.io/media/screenshots/b86/b865701cd371432f003768598039700f.jpg',
        },
        {
          id: 42607,
          name: 'Шутер с видом сверху',
          slug: 'shuter-s-vidom-sverkhu',
          language: 'rus',
          games_count: 1700,
          image_background:
            'https://media.rawg.io/media/screenshots/173/1735a8c1a2c3386d55e2c63d8b2406e3.jpg',
        },
        {
          id: 236,
          name: 'Top-Down Shooter',
          slug: 'top-down-shooter',
          language: 'eng',
          games_count: 1572,
          image_background:
            'https://media.rawg.io/media/screenshots/fdc/fdc21a8972c4b38fb0e517db7f6e9e23.jpg',
        },
        {
          id: 224,
          name: '1980s',
          slug: '1980s',
          language: 'eng',
          games_count: 1871,
          image_background:
            'https://media.rawg.io/media/games/64a/64a7789943fe9f9d9c93f3a286ee7b20.jpg',
        },
        {
          id: 42619,
          name: 'Психоделия',
          slug: 'psikhodeliia',
          language: 'rus',
          games_count: 978,
          image_background:
            'https://media.rawg.io/media/screenshots/f79/f7984b1ef834dac1262382c75adf6a87.jpg',
        },
        {
          id: 286,
          name: 'Psychedelic',
          slug: 'psychedelic',
          language: 'eng',
          games_count: 1733,
          image_background:
            'https://media.rawg.io/media/games/cf9/cf9063729ff883ddf8c09ed45d3a72c6.jpg',
        },
      ],
      esrb_rating: null,
      user_game: null,
      reviews_count: 2434,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      short_screenshots: [
        {
          id: -1,
          image:
            'https://media.rawg.io/media/games/9fa/9fa63622543e5d4f6d99aa9d73b043de.jpg',
        },
        {
          id: 32084,
          image:
            'https://media.rawg.io/media/screenshots/38b/38b9bb0de0a380434b78587e132b2e21.jpg',
        },
        {
          id: 32085,
          image:
            'https://media.rawg.io/media/screenshots/e7a/e7a11a669aa609b9b3b0c7aeab2dc804.jpg',
        },
        {
          id: 32086,
          image:
            'https://media.rawg.io/media/screenshots/88b/88b907144995e57c45ee043c59dd6810.jpg',
        },
        {
          id: 32087,
          image:
            'https://media.rawg.io/media/screenshots/53f/53fd44fd759bc571b1445898c50b418e.jpg',
        },
        {
          id: 32088,
          image:
            'https://media.rawg.io/media/screenshots/ddd/dddc7151559716c7c0dddb05874496da.jpg',
        },
        {
          id: 32089,
          image:
            'https://media.rawg.io/media/screenshots/b2a/b2a25c20510e3111a13d56a9751cadd7.jpg',
        },
      ],
      parent_platforms: [
        {
          platform: {
            id: 1,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 2,
            name: 'PlayStation',
            slug: 'playstation',
          },
        },
        {
          platform: {
            id: 3,
            name: 'Xbox',
            slug: 'xbox',
          },
        },
        {
          platform: {
            id: 6,
            name: 'Linux',
            slug: 'linux',
          },
        },
        {
          platform: {
            id: 7,
            name: 'Nintendo',
            slug: 'nintendo',
          },
        },
      ],
      genres: [
        {
          id: 51,
          name: 'Indie',
          slug: 'indie',
        },
        {
          id: 2,
          name: 'Shooter',
          slug: 'shooter',
        },
        {
          id: 11,
          name: 'Arcade',
          slug: 'arcade',
        },
        {
          id: 4,
          name: 'Action',
          slug: 'action',
        },
      ],
    },
    {
      slug: 'outlast',
      name: 'Outlast',
      playtime: 3,
      platforms: [
        {
          platform: {
            id: 4,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 1,
            name: 'Xbox One',
            slug: 'xbox-one',
          },
        },
        {
          platform: {
            id: 18,
            name: 'PlayStation 4',
            slug: 'playstation4',
          },
        },
        {
          platform: {
            id: 7,
            name: 'Nintendo Switch',
            slug: 'nintendo-switch',
          },
        },
        {
          platform: {
            id: 5,
            name: 'macOS',
            slug: 'macos',
          },
        },
        {
          platform: {
            id: 6,
            name: 'Linux',
            slug: 'linux',
          },
        },
      ],
      stores: [
        {
          store: {
            id: 1,
            name: 'Steam',
            slug: 'steam',
          },
        },
        {
          store: {
            id: 3,
            name: 'PlayStation Store',
            slug: 'playstation-store',
          },
        },
        {
          store: {
            id: 2,
            name: 'Xbox Store',
            slug: 'xbox-store',
          },
        },
        {
          store: {
            id: 5,
            name: 'GOG',
            slug: 'gog',
          },
        },
        {
          store: {
            id: 11,
            name: 'Epic Games',
            slug: 'epic-games',
          },
        },
      ],
      released: '2013-09-03',
      tba: false,
      background_image:
        'https://media.rawg.io/media/games/9dd/9ddabb34840ea9227556670606cf8ea3.jpg',
      rating: 3.72,
      rating_top: 4,
      ratings: [
        {
          id: 4,
          title: 'recommended',
          count: 907,
          percent: 53.96,
        },
        {
          id: 3,
          title: 'meh',
          count: 343,
          percent: 20.4,
        },
        {
          id: 5,
          title: 'exceptional',
          count: 292,
          percent: 17.37,
        },
        {
          id: 1,
          title: 'skip',
          count: 139,
          percent: 8.27,
        },
      ],
      ratings_count: 1672,
      reviews_text_count: 9,
      added: 9532,
      added_by_status: {
        yet: 577,
        owned: 6833,
        beaten: 1335,
        toplay: 162,
        dropped: 586,
        playing: 39,
      },
      metacritic: 80,
      suggestions_count: 462,
      updated: '2023-07-12T23:51:48',
      id: 3790,
      score: null,
      clip: null,
      tags: [
        {
          id: 31,
          name: 'Singleplayer',
          slug: 'singleplayer',
          language: 'eng',
          games_count: 206544,
          image_background:
            'https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg',
        },
        {
          id: 42396,
          name: 'Для одного игрока',
          slug: 'dlia-odnogo-igroka',
          language: 'rus',
          games_count: 35171,
          image_background:
            'https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg',
        },
        {
          id: 42417,
          name: 'Экшен',
          slug: 'ekshen',
          language: 'rus',
          games_count: 32438,
          image_background:
            'https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg',
        },
        {
          id: 42392,
          name: 'Приключение',
          slug: 'prikliuchenie',
          language: 'rus',
          games_count: 30382,
          image_background:
            'https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg',
        },
        {
          id: 40847,
          name: 'Steam Achievements',
          slug: 'steam-achievements',
          language: 'eng',
          games_count: 30840,
          image_background:
            'https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg',
        },
        {
          id: 42398,
          name: 'Инди',
          slug: 'indi-2',
          language: 'rus',
          games_count: 46233,
          image_background:
            'https://media.rawg.io/media/games/9fa/9fa63622543e5d4f6d99aa9d73b043de.jpg',
        },
        {
          id: 40836,
          name: 'Full controller support',
          slug: 'full-controller-support',
          language: 'eng',
          games_count: 14476,
          image_background:
            'https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg',
        },
        {
          id: 13,
          name: 'Atmospheric',
          slug: 'atmospheric',
          language: 'eng',
          games_count: 29635,
          image_background:
            'https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg',
        },
        {
          id: 40849,
          name: 'Steam Cloud',
          slug: 'steam-cloud',
          language: 'eng',
          games_count: 14345,
          image_background:
            'https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg',
        },
        {
          id: 42400,
          name: 'Атмосфера',
          slug: 'atmosfera',
          language: 'rus',
          games_count: 6083,
          image_background:
            'https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg',
        },
        {
          id: 7808,
          name: 'steam-trading-cards',
          slug: 'steam-trading-cards',
          language: 'eng',
          games_count: 7571,
          image_background:
            'https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg',
        },
        {
          id: 8,
          name: 'First-Person',
          slug: 'first-person',
          language: 'eng',
          games_count: 28676,
          image_background:
            'https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg',
        },
        {
          id: 42429,
          name: 'От первого лица',
          slug: 'ot-pervogo-litsa',
          language: 'rus',
          games_count: 7731,
          image_background:
            'https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg',
        },
        {
          id: 42435,
          name: 'Шедевр',
          slug: 'shedevr',
          language: 'rus',
          games_count: 1059,
          image_background:
            'https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg',
        },
        {
          id: 32,
          name: 'Sci-fi',
          slug: 'sci-fi',
          language: 'eng',
          games_count: 17236,
          image_background:
            'https://media.rawg.io/media/games/198/1988a337305e008b41d7f536ce9b73f6.jpg',
        },
        {
          id: 42423,
          name: 'Научная фантастика',
          slug: 'nauchnaia-fantastika',
          language: 'rus',
          games_count: 6108,
          image_background:
            'https://media.rawg.io/media/games/8e4/8e4de3f54ac659e08a7ba6a2b731682a.jpg',
        },
        {
          id: 16,
          name: 'Horror',
          slug: 'horror',
          language: 'eng',
          games_count: 41984,
          image_background:
            'https://media.rawg.io/media/games/7c4/7c448374df84b607f67ce9182a3a3ca7.jpg',
        },
        {
          id: 30,
          name: 'FPS',
          slug: 'fps',
          language: 'eng',
          games_count: 12151,
          image_background:
            'https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg',
        },
        {
          id: 42420,
          name: 'Сложная',
          slug: 'slozhnaia',
          language: 'rus',
          games_count: 4508,
          image_background:
            'https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg',
        },
        {
          id: 42491,
          name: 'Мясо',
          slug: 'miaso',
          language: 'rus',
          games_count: 3940,
          image_background:
            'https://media.rawg.io/media/games/e04/e04963f3ac4c4fa83a1dc0b9231e50db.jpg',
        },
        {
          id: 26,
          name: 'Gore',
          slug: 'gore',
          language: 'eng',
          games_count: 5076,
          image_background:
            'https://media.rawg.io/media/games/f6b/f6bed028b02369d4cab548f4f9337e81.jpg',
        },
        {
          id: 49,
          name: 'Difficult',
          slug: 'difficult',
          language: 'eng',
          games_count: 12486,
          image_background:
            'https://media.rawg.io/media/games/1f1/1f1888e1308959dfd3be4c144a81d19c.jpg',
        },
        {
          id: 1,
          name: 'Survival',
          slug: 'survival',
          language: 'eng',
          games_count: 7286,
          image_background:
            'https://media.rawg.io/media/games/b54/b54598d1d5cc31899f4f0a7e3122a7b0.jpg',
        },
        {
          id: 42452,
          name: 'Выживание',
          slug: 'vyzhivanie',
          language: 'rus',
          games_count: 4774,
          image_background:
            'https://media.rawg.io/media/games/7f6/7f6cd70ba2ad57053b4847c13569f2d8.jpg',
        },
        {
          id: 15,
          name: 'Stealth',
          slug: 'stealth',
          language: 'eng',
          games_count: 5742,
          image_background:
            'https://media.rawg.io/media/games/7ac/7aca7ccf0e70cd0974cb899ab9e5158e.jpg',
        },
        {
          id: 42439,
          name: 'Стелс',
          slug: 'stels',
          language: 'rus',
          games_count: 1597,
          image_background:
            'https://media.rawg.io/media/games/bce/bce62fbc7cf74bf6a1a37340993ec148.jpg',
        },
        {
          id: 42477,
          name: 'Мрачная',
          slug: 'mrachnaia',
          language: 'rus',
          games_count: 3664,
          image_background:
            'https://media.rawg.io/media/games/7ac/7aca7ccf0e70cd0974cb899ab9e5158e.jpg',
        },
        {
          id: 41,
          name: 'Dark',
          slug: 'dark',
          language: 'eng',
          games_count: 14171,
          image_background:
            'https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg',
        },
        {
          id: 42406,
          name: 'Нагота',
          slug: 'nagota',
          language: 'rus',
          games_count: 4644,
          image_background:
            'https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg',
        },
        {
          id: 44,
          name: 'Nudity',
          slug: 'nudity',
          language: 'eng',
          games_count: 5029,
          image_background:
            'https://media.rawg.io/media/games/8ca/8ca40b562a755d6a0e30d48e6c74b178.jpg',
        },
        {
          id: 336,
          name: 'controller support',
          slug: 'controller-support',
          language: 'eng',
          games_count: 293,
          image_background:
            'https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg',
        },
        {
          id: 42471,
          name: 'Хоррор на выживание',
          slug: 'khorror-na-vyzhivanie',
          language: 'rus',
          games_count: 2249,
          image_background:
            'https://media.rawg.io/media/games/c11/c11a0b92b4c28f2e0db489f430142653.jpg',
        },
        {
          id: 17,
          name: 'Survival Horror',
          slug: 'survival-horror',
          language: 'eng',
          games_count: 7621,
          image_background:
            'https://media.rawg.io/media/games/348/348640e78a7fcd4bb7dcad4fea014eeb.jpg',
        },
        {
          id: 40833,
          name: 'Captions available',
          slug: 'captions-available',
          language: 'eng',
          games_count: 1236,
          image_background:
            'https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg',
        },
        {
          id: 42555,
          name: 'Симулятор ходьбы',
          slug: 'simuliator-khodby',
          language: 'rus',
          games_count: 1850,
          image_background:
            'https://media.rawg.io/media/games/62c/62c7c8b28a27b83680b22fb9d33fc619.jpg',
        },
        {
          id: 42643,
          name: 'Паркур',
          slug: 'parkur-2',
          language: 'rus',
          games_count: 853,
          image_background:
            'https://media.rawg.io/media/games/341/3413d7275fb1e919f00a925df8288b77.jpg',
        },
        {
          id: 188,
          name: 'Parkour',
          slug: 'parkour',
          language: 'eng',
          games_count: 3172,
          image_background:
            'https://media.rawg.io/media/games/3d9/3d9bac98d79bcd2d445f829e8d6be902.jpg',
        },
        {
          id: 91,
          name: 'Walking Simulator',
          slug: 'walking-simulator',
          language: 'eng',
          games_count: 6288,
          image_background:
            'https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg',
        },
        {
          id: 133,
          name: '3D Vision',
          slug: '3d-vision',
          language: 'eng',
          games_count: 587,
          image_background:
            'https://media.rawg.io/media/games/e0f/e0f05a97ff926acf4c8f43e0849b6832.jpg',
        },
      ],
      esrb_rating: {
        id: 4,
        name: 'Mature',
        slug: 'mature',
        name_en: 'Mature',
        name_ru: 'С 17 лет',
      },
      user_game: null,
      reviews_count: 1681,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      short_screenshots: [
        {
          id: -1,
          image:
            'https://media.rawg.io/media/games/9dd/9ddabb34840ea9227556670606cf8ea3.jpg',
        },
        {
          id: 32637,
          image:
            'https://media.rawg.io/media/screenshots/83f/83ff600f8e2dd8507e7961d3e9f32126.jpg',
        },
        {
          id: 32638,
          image:
            'https://media.rawg.io/media/screenshots/283/283c90039e31e07f99979ccb445cf7b7.jpg',
        },
        {
          id: 32639,
          image:
            'https://media.rawg.io/media/screenshots/03f/03f4171763bda5824da07fc087cec609.jpg',
        },
        {
          id: 32640,
          image:
            'https://media.rawg.io/media/screenshots/37a/37acd5ef186c8e018cbd64751b21f064.jpg',
        },
        {
          id: 32641,
          image:
            'https://media.rawg.io/media/screenshots/242/2426226b9eb1a7de43b8bf01ecb2c291.jpg',
        },
        {
          id: 32642,
          image:
            'https://media.rawg.io/media/screenshots/d06/d06d3baecb6da0ac9e53b40ade32d5f2.jpg',
        },
      ],
      parent_platforms: [
        {
          platform: {
            id: 1,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 2,
            name: 'PlayStation',
            slug: 'playstation',
          },
        },
        {
          platform: {
            id: 3,
            name: 'Xbox',
            slug: 'xbox',
          },
        },
        {
          platform: {
            id: 5,
            name: 'Apple Macintosh',
            slug: 'mac',
          },
        },
        {
          platform: {
            id: 6,
            name: 'Linux',
            slug: 'linux',
          },
        },
        {
          platform: {
            id: 7,
            name: 'Nintendo',
            slug: 'nintendo',
          },
        },
      ],
      genres: [
        {
          id: 51,
          name: 'Indie',
          slug: 'indie',
        },
        {
          id: 3,
          name: 'Adventure',
          slug: 'adventure',
        },
        {
          id: 4,
          name: 'Action',
          slug: 'action',
        },
      ],
    },
    {
      slug: 'bioshock-remastered',
      name: 'BioShock Remastered',
      playtime: 4,
      platforms: [
        {
          platform: {
            id: 4,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 1,
            name: 'Xbox One',
            slug: 'xbox-one',
          },
        },
        {
          platform: {
            id: 18,
            name: 'PlayStation 4',
            slug: 'playstation4',
          },
        },
        {
          platform: {
            id: 7,
            name: 'Nintendo Switch',
            slug: 'nintendo-switch',
          },
        },
        {
          platform: {
            id: 5,
            name: 'macOS',
            slug: 'macos',
          },
        },
      ],
      stores: [
        {
          store: {
            id: 1,
            name: 'Steam',
            slug: 'steam',
          },
        },
        {
          store: {
            id: 3,
            name: 'PlayStation Store',
            slug: 'playstation-store',
          },
        },
        {
          store: {
            id: 4,
            name: 'App Store',
            slug: 'apple-appstore',
          },
        },
        {
          store: {
            id: 5,
            name: 'GOG',
            slug: 'gog',
          },
        },
        {
          store: {
            id: 6,
            name: 'Nintendo Store',
            slug: 'nintendo',
          },
        },
        {
          store: {
            id: 11,
            name: 'Epic Games',
            slug: 'epic-games',
          },
        },
      ],
      released: '2016-09-15',
      tba: false,
      background_image:
        'https://media.rawg.io/media/games/be0/be01c3d7d8795a45615da139322ca080.jpg',
      rating: 4.24,
      rating_top: 5,
      ratings: [
        {
          id: 5,
          title: 'exceptional',
          count: 619,
          percent: 47,
        },
        {
          id: 4,
          title: 'recommended',
          count: 527,
          percent: 40.02,
        },
        {
          id: 3,
          title: 'meh',
          count: 105,
          percent: 7.97,
        },
        {
          id: 1,
          title: 'skip',
          count: 66,
          percent: 5.01,
        },
      ],
      ratings_count: 1305,
      reviews_text_count: 7,
      added: 9364,
      added_by_status: {
        yet: 675,
        owned: 7036,
        beaten: 1122,
        toplay: 151,
        dropped: 280,
        playing: 100,
      },
      metacritic: null,
      suggestions_count: 251,
      updated: '2023-07-07T22:53:26',
      id: 10754,
      score: null,
      clip: null,
      tags: [
        {
          id: 31,
          name: 'Singleplayer',
          slug: 'singleplayer',
          language: 'eng',
          games_count: 206544,
          image_background:
            'https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg',
        },
        {
          id: 42396,
          name: 'Для одного игрока',
          slug: 'dlia-odnogo-igroka',
          language: 'rus',
          games_count: 35171,
          image_background:
            'https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg',
        },
        {
          id: 42417,
          name: 'Экшен',
          slug: 'ekshen',
          language: 'rus',
          games_count: 32438,
          image_background:
            'https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg',
        },
        {
          id: 42392,
          name: 'Приключение',
          slug: 'prikliuchenie',
          language: 'rus',
          games_count: 30382,
          image_background:
            'https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg',
        },
        {
          id: 40847,
          name: 'Steam Achievements',
          slug: 'steam-achievements',
          language: 'eng',
          games_count: 30840,
          image_background:
            'https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg',
        },
        {
          id: 40836,
          name: 'Full controller support',
          slug: 'full-controller-support',
          language: 'eng',
          games_count: 14476,
          image_background:
            'https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg',
        },
        {
          id: 13,
          name: 'Atmospheric',
          slug: 'atmospheric',
          language: 'eng',
          games_count: 29635,
          image_background:
            'https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg',
        },
        {
          id: 40849,
          name: 'Steam Cloud',
          slug: 'steam-cloud',
          language: 'eng',
          games_count: 14345,
          image_background:
            'https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg',
        },
        {
          id: 42400,
          name: 'Атмосфера',
          slug: 'atmosfera',
          language: 'rus',
          games_count: 6083,
          image_background:
            'https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg',
        },
        {
          id: 42401,
          name: 'Отличный саундтрек',
          slug: 'otlichnyi-saundtrek',
          language: 'rus',
          games_count: 4463,
          image_background:
            'https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg',
        },
        {
          id: 42,
          name: 'Great Soundtrack',
          slug: 'great-soundtrack',
          language: 'eng',
          games_count: 3241,
          image_background:
            'https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg',
        },
        {
          id: 42394,
          name: 'Глубокий сюжет',
          slug: 'glubokii-siuzhet',
          language: 'rus',
          games_count: 9153,
          image_background:
            'https://media.rawg.io/media/games/b7b/b7b8381707152afc7d91f5d95de70e39.jpg',
        },
        {
          id: 24,
          name: 'RPG',
          slug: 'rpg',
          language: 'eng',
          games_count: 17413,
          image_background:
            'https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg',
        },
        {
          id: 42412,
          name: 'Ролевая игра',
          slug: 'rolevaia-igra',
          language: 'rus',
          games_count: 13830,
          image_background:
            'https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg',
        },
        {
          id: 118,
          name: 'Story Rich',
          slug: 'story-rich',
          language: 'eng',
          games_count: 18334,
          image_background:
            'https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg',
        },
        {
          id: 42428,
          name: 'Шутер',
          slug: 'shuter',
          language: 'rus',
          games_count: 6857,
          image_background:
            'https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg',
        },
        {
          id: 8,
          name: 'First-Person',
          slug: 'first-person',
          language: 'eng',
          games_count: 28676,
          image_background:
            'https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg',
        },
        {
          id: 42429,
          name: 'От первого лица',
          slug: 'ot-pervogo-litsa',
          language: 'rus',
          games_count: 7731,
          image_background:
            'https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg',
        },
        {
          id: 32,
          name: 'Sci-fi',
          slug: 'sci-fi',
          language: 'eng',
          games_count: 17236,
          image_background:
            'https://media.rawg.io/media/games/198/1988a337305e008b41d7f536ce9b73f6.jpg',
        },
        {
          id: 42423,
          name: 'Научная фантастика',
          slug: 'nauchnaia-fantastika',
          language: 'rus',
          games_count: 6108,
          image_background:
            'https://media.rawg.io/media/games/8e4/8e4de3f54ac659e08a7ba6a2b731682a.jpg',
        },
        {
          id: 16,
          name: 'Horror',
          slug: 'horror',
          language: 'eng',
          games_count: 41984,
          image_background:
            'https://media.rawg.io/media/games/7c4/7c448374df84b607f67ce9182a3a3ca7.jpg',
        },
        {
          id: 30,
          name: 'FPS',
          slug: 'fps',
          language: 'eng',
          games_count: 12151,
          image_background:
            'https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg',
        },
        {
          id: 42427,
          name: 'Шутер от первого лица',
          slug: 'shuter-ot-pervogo-litsa',
          language: 'rus',
          games_count: 4139,
          image_background:
            'https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg',
        },
        {
          id: 42461,
          name: 'Классика',
          slug: 'klassika',
          language: 'rus',
          games_count: 1394,
          image_background:
            'https://media.rawg.io/media/games/7a2/7a2500ee8b2c0e1ff268bb4479463dea.jpg',
        },
        {
          id: 193,
          name: 'Classic',
          slug: 'classic',
          language: 'eng',
          games_count: 1728,
          image_background:
            'https://media.rawg.io/media/games/b54/b54598d1d5cc31899f4f0a7e3122a7b0.jpg',
        },
        {
          id: 42477,
          name: 'Мрачная',
          slug: 'mrachnaia',
          language: 'rus',
          games_count: 3664,
          image_background:
            'https://media.rawg.io/media/games/7ac/7aca7ccf0e70cd0974cb899ab9e5158e.jpg',
        },
        {
          id: 41,
          name: 'Dark',
          slug: 'dark',
          language: 'eng',
          games_count: 14171,
          image_background:
            'https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg',
        },
        {
          id: 42390,
          name: 'Решения с последствиями',
          slug: 'resheniia-s-posledstviiami',
          language: 'rus',
          games_count: 3860,
          image_background:
            'https://media.rawg.io/media/games/a6c/a6ccd34125c594abf1a9c9821b9a715d.jpg',
        },
        {
          id: 42466,
          name: 'Римейк',
          slug: 'rimeik',
          language: 'rus',
          games_count: 206,
          image_background:
            'https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg',
        },
        {
          id: 119,
          name: 'Dystopian',
          slug: 'dystopian',
          language: 'eng',
          games_count: 1806,
          image_background:
            'https://media.rawg.io/media/screenshots/67e/67e5be6ad7a555248f50bd367e9a071c.jpg',
        },
        {
          id: 42665,
          name: 'Антиутопия',
          slug: 'antiutopiia',
          language: 'rus',
          games_count: 882,
          image_background:
            'https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg',
        },
        {
          id: 271,
          name: 'Remake',
          slug: 'remake',
          language: 'eng',
          games_count: 1666,
          image_background:
            'https://media.rawg.io/media/games/a4b/a4bb55f42fe837ae7bf1307e7b41cc85.jpg',
        },
        {
          id: 154,
          name: 'Steampunk',
          slug: 'steampunk',
          language: 'eng',
          games_count: 1117,
          image_background:
            'https://media.rawg.io/media/games/57f/57fc2051dd27c9947d12cdf63790d122.jpg',
        },
        {
          id: 42629,
          name: 'Стимпанк',
          slug: 'stimpank',
          language: 'rus',
          games_count: 399,
          image_background:
            'https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg',
        },
        {
          id: 40834,
          name: 'Commentary available',
          slug: 'commentary-available',
          language: 'eng',
          games_count: 254,
          image_background:
            'https://media.rawg.io/media/games/726/7263e11b6bfb15abe35dcfa3b26147f5.jpg',
        },
        {
          id: 42566,
          name: 'Альтернативная история',
          slug: 'alternativnaia-istoriia',
          language: 'rus',
          games_count: 771,
          image_background:
            'https://media.rawg.io/media/games/c64/c64d2f63cabeab9126693b7d39539c8d.jpg',
        },
        {
          id: 208,
          name: 'Alternate History',
          slug: 'alternate-history',
          language: 'eng',
          games_count: 1472,
          image_background:
            'https://media.rawg.io/media/screenshots/36d/36d3861a6cdb4ae5b1ca44cec814be8b.jpg',
        },
        {
          id: 42660,
          name: 'Подводный мир',
          slug: 'podvodnyi-mir',
          language: 'rus',
          games_count: 319,
          image_background:
            'https://media.rawg.io/media/games/ba9/ba9ad92b6d04825bd15a407c6059db94.jpg',
        },
        {
          id: 250,
          name: 'Underwater',
          slug: 'underwater',
          language: 'eng',
          games_count: 1982,
          image_background:
            'https://media.rawg.io/media/games/b60/b60318b011b69252e97c11bbd194006f.jpg',
        },
      ],
      esrb_rating: {
        id: 4,
        name: 'Mature',
        slug: 'mature',
        name_en: 'Mature',
        name_ru: 'С 17 лет',
      },
      user_game: null,
      reviews_count: 1317,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      short_screenshots: [
        {
          id: -1,
          image:
            'https://media.rawg.io/media/games/be0/be01c3d7d8795a45615da139322ca080.jpg',
        },
        {
          id: 84960,
          image:
            'https://media.rawg.io/media/screenshots/c70/c709280e11aabec614d0aafb5779114a.jpg',
        },
        {
          id: 84961,
          image:
            'https://media.rawg.io/media/screenshots/414/41463563e721aa62c605cd0bf8350af3.jpg',
        },
        {
          id: 84962,
          image:
            'https://media.rawg.io/media/screenshots/76d/76d11a76541bcfa63de3ef8fe5a5a668.jpg',
        },
        {
          id: 84963,
          image:
            'https://media.rawg.io/media/screenshots/25a/25ac07efdbf90a2d7e626353ebadc565.jpg',
        },
        {
          id: 84964,
          image:
            'https://media.rawg.io/media/screenshots/0f6/0f69943b1d81710ba2fdcac27d248ca9.jpg',
        },
      ],
      parent_platforms: [
        {
          platform: {
            id: 1,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 2,
            name: 'PlayStation',
            slug: 'playstation',
          },
        },
        {
          platform: {
            id: 3,
            name: 'Xbox',
            slug: 'xbox',
          },
        },
        {
          platform: {
            id: 5,
            name: 'Apple Macintosh',
            slug: 'mac',
          },
        },
        {
          platform: {
            id: 7,
            name: 'Nintendo',
            slug: 'nintendo',
          },
        },
      ],
      genres: [
        {
          id: 2,
          name: 'Shooter',
          slug: 'shooter',
        },
      ],
    },
    {
      slug: 'borderlands',
      name: 'Borderlands',
      playtime: 10,
      platforms: [
        {
          platform: {
            id: 4,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 1,
            name: 'Xbox One',
            slug: 'xbox-one',
          },
        },
        {
          platform: {
            id: 7,
            name: 'Nintendo Switch',
            slug: 'nintendo-switch',
          },
        },
        {
          platform: {
            id: 14,
            name: 'Xbox 360',
            slug: 'xbox360',
          },
        },
        {
          platform: {
            id: 16,
            name: 'PlayStation 3',
            slug: 'playstation3',
          },
        },
      ],
      stores: [
        {
          store: {
            id: 1,
            name: 'Steam',
            slug: 'steam',
          },
        },
        {
          store: {
            id: 3,
            name: 'PlayStation Store',
            slug: 'playstation-store',
          },
        },
        {
          store: {
            id: 2,
            name: 'Xbox Store',
            slug: 'xbox-store',
          },
        },
        {
          store: {
            id: 7,
            name: 'Xbox 360 Store',
            slug: 'xbox360',
          },
        },
      ],
      released: '2009-10-20',
      tba: false,
      background_image:
        'https://media.rawg.io/media/games/c6b/c6bfece1daf8d06bc0a60632ac78e5bf.jpg',
      rating: 3.82,
      rating_top: 4,
      ratings: [
        {
          id: 4,
          title: 'recommended',
          count: 1021,
          percent: 51.93,
        },
        {
          id: 3,
          title: 'meh',
          count: 462,
          percent: 23.5,
        },
        {
          id: 5,
          title: 'exceptional',
          count: 391,
          percent: 19.89,
        },
        {
          id: 1,
          title: 'skip',
          count: 92,
          percent: 4.68,
        },
      ],
      ratings_count: 1948,
      reviews_text_count: 9,
      added: 9024,
      added_by_status: {
        yet: 284,
        owned: 6177,
        beaten: 1584,
        toplay: 161,
        dropped: 759,
        playing: 59,
      },
      metacritic: 81,
      suggestions_count: 658,
      updated: '2023-07-13T06:08:36',
      id: 4828,
      score: null,
      clip: null,
      tags: [
        {
          id: 31,
          name: 'Singleplayer',
          slug: 'singleplayer',
          language: 'eng',
          games_count: 206544,
          image_background:
            'https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg',
        },
        {
          id: 42396,
          name: 'Для одного игрока',
          slug: 'dlia-odnogo-igroka',
          language: 'rus',
          games_count: 35171,
          image_background:
            'https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg',
        },
        {
          id: 42417,
          name: 'Экшен',
          slug: 'ekshen',
          language: 'rus',
          games_count: 32438,
          image_background:
            'https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg',
        },
        {
          id: 42392,
          name: 'Приключение',
          slug: 'prikliuchenie',
          language: 'rus',
          games_count: 30382,
          image_background:
            'https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg',
        },
        {
          id: 40847,
          name: 'Steam Achievements',
          slug: 'steam-achievements',
          language: 'eng',
          games_count: 30840,
          image_background:
            'https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg',
        },
        {
          id: 7,
          name: 'Multiplayer',
          slug: 'multiplayer',
          language: 'eng',
          games_count: 35108,
          image_background:
            'https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg',
        },
        {
          id: 40849,
          name: 'Steam Cloud',
          slug: 'steam-cloud',
          language: 'eng',
          games_count: 14345,
          image_background:
            'https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg',
        },
        {
          id: 42425,
          name: 'Для нескольких игроков',
          slug: 'dlia-neskolkikh-igrokov',
          language: 'rus',
          games_count: 7893,
          image_background:
            'https://media.rawg.io/media/games/713/713269608dc8f2f40f5a670a14b2de94.jpg',
        },
        {
          id: 24,
          name: 'RPG',
          slug: 'rpg',
          language: 'eng',
          games_count: 17413,
          image_background:
            'https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg',
        },
        {
          id: 18,
          name: 'Co-op',
          slug: 'co-op',
          language: 'eng',
          games_count: 9892,
          image_background:
            'https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg',
        },
        {
          id: 42412,
          name: 'Ролевая игра',
          slug: 'rolevaia-igra',
          language: 'rus',
          games_count: 13830,
          image_background:
            'https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg',
        },
        {
          id: 42442,
          name: 'Открытый мир',
          slug: 'otkrytyi-mir',
          language: 'rus',
          games_count: 4494,
          image_background:
            'https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg',
        },
        {
          id: 36,
          name: 'Open World',
          slug: 'open-world',
          language: 'eng',
          games_count: 6316,
          image_background:
            'https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg',
        },
        {
          id: 411,
          name: 'cooperative',
          slug: 'cooperative',
          language: 'eng',
          games_count: 4104,
          image_background:
            'https://media.rawg.io/media/games/476/476178ef18ab0534771d099f51cdc694.jpg',
        },
        {
          id: 42428,
          name: 'Шутер',
          slug: 'shuter',
          language: 'rus',
          games_count: 6857,
          image_background:
            'https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg',
        },
        {
          id: 8,
          name: 'First-Person',
          slug: 'first-person',
          language: 'eng',
          games_count: 28676,
          image_background:
            'https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg',
        },
        {
          id: 42429,
          name: 'От первого лица',
          slug: 'ot-pervogo-litsa',
          language: 'rus',
          games_count: 7731,
          image_background:
            'https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg',
        },
        {
          id: 32,
          name: 'Sci-fi',
          slug: 'sci-fi',
          language: 'eng',
          games_count: 17236,
          image_background:
            'https://media.rawg.io/media/games/198/1988a337305e008b41d7f536ce9b73f6.jpg',
        },
        {
          id: 42423,
          name: 'Научная фантастика',
          slug: 'nauchnaia-fantastika',
          language: 'rus',
          games_count: 6108,
          image_background:
            'https://media.rawg.io/media/games/8e4/8e4de3f54ac659e08a7ba6a2b731682a.jpg',
        },
        {
          id: 40845,
          name: 'Partial Controller Support',
          slug: 'partial-controller-support',
          language: 'eng',
          games_count: 9866,
          image_background:
            'https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg',
        },
        {
          id: 30,
          name: 'FPS',
          slug: 'fps',
          language: 'eng',
          games_count: 12151,
          image_background:
            'https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg',
        },
        {
          id: 42427,
          name: 'Шутер от первого лица',
          slug: 'shuter-ot-pervogo-litsa',
          language: 'rus',
          games_count: 4139,
          image_background:
            'https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg',
        },
        {
          id: 42482,
          name: 'Смешная',
          slug: 'smeshnaia',
          language: 'rus',
          games_count: 6600,
          image_background:
            'https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg',
        },
        {
          id: 9,
          name: 'Online Co-Op',
          slug: 'online-co-op',
          language: 'eng',
          games_count: 4438,
          image_background:
            'https://media.rawg.io/media/screenshots/88b/88b5f27f07d6ca2f8a3cd0b36e03a670.jpg',
        },
        {
          id: 4,
          name: 'Funny',
          slug: 'funny',
          language: 'eng',
          games_count: 22604,
          image_background:
            'https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg',
        },
        {
          id: 42491,
          name: 'Мясо',
          slug: 'miaso',
          language: 'rus',
          games_count: 3940,
          image_background:
            'https://media.rawg.io/media/games/e04/e04963f3ac4c4fa83a1dc0b9231e50db.jpg',
        },
        {
          id: 26,
          name: 'Gore',
          slug: 'gore',
          language: 'eng',
          games_count: 5076,
          image_background:
            'https://media.rawg.io/media/games/f6b/f6bed028b02369d4cab548f4f9337e81.jpg',
        },
        {
          id: 42481,
          name: 'Юмор',
          slug: 'iumor',
          language: 'rus',
          games_count: 4260,
          image_background:
            'https://media.rawg.io/media/games/e04/e04963f3ac4c4fa83a1dc0b9231e50db.jpg',
        },
        {
          id: 123,
          name: 'Comedy',
          slug: 'comedy',
          language: 'eng',
          games_count: 10929,
          image_background:
            'https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg',
        },
        {
          id: 42433,
          name: 'Совместная игра по сети',
          slug: 'sovmestnaia-igra-po-seti',
          language: 'rus',
          games_count: 1229,
          image_background:
            'https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg',
        },
        {
          id: 42449,
          name: 'Локальный мультиплеер',
          slug: 'lokalnyi-multipleer',
          language: 'rus',
          games_count: 2944,
          image_background:
            'https://media.rawg.io/media/games/89a/89a700d3c6a76bd0610ca89ccd20da54.jpg',
        },
        {
          id: 75,
          name: 'Local Co-Op',
          slug: 'local-co-op',
          language: 'eng',
          games_count: 4982,
          image_background:
            'https://media.rawg.io/media/games/33b/33b825c76382931df0fd8ecddf5caebe.jpg',
        },
        {
          id: 97,
          name: 'Action RPG',
          slug: 'action-rpg',
          language: 'eng',
          games_count: 5761,
          image_background:
            'https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg',
        },
        {
          id: 42489,
          name: 'Ролевой экшен',
          slug: 'rolevoi-ekshen',
          language: 'rus',
          games_count: 2740,
          image_background:
            'https://media.rawg.io/media/games/21a/21ad672cedee9b4378abb6c2d2e626ee.jpg',
        },
        {
          id: 43,
          name: 'Post-apocalyptic',
          slug: 'post-apocalyptic',
          language: 'eng',
          games_count: 3351,
          image_background:
            'https://media.rawg.io/media/games/a91/a911f0a91991469e398fa70091507a5b.jpg',
        },
        {
          id: 42488,
          name: 'Пост-апокалипсис',
          slug: 'post-apokalipsis',
          language: 'rus',
          games_count: 749,
          image_background:
            'https://media.rawg.io/media/games/471/4712c9ac591f556f553556b864a7e92b.jpg',
        },
        {
          id: 42502,
          name: 'Чёрный юмор',
          slug: 'chiornyi-iumor',
          language: 'rus',
          games_count: 1191,
          image_background:
            'https://media.rawg.io/media/games/df2/df20fd77db56ae7b0a26a7ff4baa9ccc.jpg',
        },
        {
          id: 148,
          name: 'Dark Humor',
          slug: 'dark-humor',
          language: 'eng',
          games_count: 2480,
          image_background:
            'https://media.rawg.io/media/games/e3d/e3ddc524c6292a435d01d97cc5f42ea7.jpg',
        },
        {
          id: 98,
          name: 'Loot',
          slug: 'loot',
          language: 'eng',
          games_count: 1939,
          image_background:
            'https://media.rawg.io/media/games/8be/8be1d2c12a8ff3fdb693d4df128f50f0.jpg',
        },
        {
          id: 42575,
          name: 'Лут',
          slug: 'lut',
          language: 'rus',
          games_count: 778,
          image_background:
            'https://media.rawg.io/media/games/0b2/0b240149610b8b20eac098b8071f575a.jpg',
        },
      ],
      esrb_rating: {
        id: 5,
        name: 'Adults Only',
        slug: 'adults-only',
        name_en: 'Adults Only',
        name_ru: 'Только для взрослых',
      },
      user_game: null,
      reviews_count: 1966,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      short_screenshots: [
        {
          id: -1,
          image:
            'https://media.rawg.io/media/games/c6b/c6bfece1daf8d06bc0a60632ac78e5bf.jpg',
        },
        {
          id: 77671,
          image:
            'https://media.rawg.io/media/screenshots/153/153b36d06eaa5a3ff45cea30a572a169.jpg',
        },
        {
          id: 77672,
          image:
            'https://media.rawg.io/media/screenshots/3e8/3e8622a82c5c4fd1b7b33afa6e574fa3.jpg',
        },
        {
          id: 77673,
          image:
            'https://media.rawg.io/media/screenshots/64e/64e0e5c81cdff075721b8455c34c350c.jpg',
        },
        {
          id: 77674,
          image:
            'https://media.rawg.io/media/screenshots/669/6693c7ffd9e40cc380ce2dc1c7b2d518.jpg',
        },
        {
          id: 77675,
          image:
            'https://media.rawg.io/media/screenshots/47e/47eaf455aded5fe47efc9a5a35dd90a0.jpg',
        },
        {
          id: 77676,
          image:
            'https://media.rawg.io/media/screenshots/2cf/2cffe85c573b796a8071785a4c4f8847.jpg',
        },
      ],
      parent_platforms: [
        {
          platform: {
            id: 1,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 2,
            name: 'PlayStation',
            slug: 'playstation',
          },
        },
        {
          platform: {
            id: 3,
            name: 'Xbox',
            slug: 'xbox',
          },
        },
        {
          platform: {
            id: 7,
            name: 'Nintendo',
            slug: 'nintendo',
          },
        },
      ],
      genres: [
        {
          id: 2,
          name: 'Shooter',
          slug: 'shooter',
        },
        {
          id: 4,
          name: 'Action',
          slug: 'action',
        },
        {
          id: 5,
          name: 'RPG',
          slug: 'role-playing-games-rpg',
        },
      ],
    },
    {
      slug: 'stardew-valley',
      name: 'Stardew Valley',
      playtime: 11,
      platforms: [
        {
          platform: {
            id: 4,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 1,
            name: 'Xbox One',
            slug: 'xbox-one',
          },
        },
        {
          platform: {
            id: 18,
            name: 'PlayStation 4',
            slug: 'playstation4',
          },
        },
        {
          platform: {
            id: 7,
            name: 'Nintendo Switch',
            slug: 'nintendo-switch',
          },
        },
        {
          platform: {
            id: 3,
            name: 'iOS',
            slug: 'ios',
          },
        },
        {
          platform: {
            id: 21,
            name: 'Android',
            slug: 'android',
          },
        },
        {
          platform: {
            id: 5,
            name: 'macOS',
            slug: 'macos',
          },
        },
        {
          platform: {
            id: 6,
            name: 'Linux',
            slug: 'linux',
          },
        },
        {
          platform: {
            id: 19,
            name: 'PS Vita',
            slug: 'ps-vita',
          },
        },
      ],
      stores: [
        {
          store: {
            id: 1,
            name: 'Steam',
            slug: 'steam',
          },
        },
        {
          store: {
            id: 3,
            name: 'PlayStation Store',
            slug: 'playstation-store',
          },
        },
        {
          store: {
            id: 2,
            name: 'Xbox Store',
            slug: 'xbox-store',
          },
        },
        {
          store: {
            id: 4,
            name: 'App Store',
            slug: 'apple-appstore',
          },
        },
        {
          store: {
            id: 5,
            name: 'GOG',
            slug: 'gog',
          },
        },
        {
          store: {
            id: 6,
            name: 'Nintendo Store',
            slug: 'nintendo',
          },
        },
        {
          store: {
            id: 8,
            name: 'Google Play',
            slug: 'google-play',
          },
        },
      ],
      released: '2016-02-25',
      tba: false,
      background_image:
        'https://media.rawg.io/media/games/713/713269608dc8f2f40f5a670a14b2de94.jpg',
      rating: 4.4,
      rating_top: 5,
      ratings: [
        {
          id: 5,
          title: 'exceptional',
          count: 1232,
          percent: 56.77,
        },
        {
          id: 4,
          title: 'recommended',
          count: 687,
          percent: 31.66,
        },
        {
          id: 3,
          title: 'meh',
          count: 197,
          percent: 9.08,
        },
        {
          id: 1,
          title: 'skip',
          count: 54,
          percent: 2.49,
        },
      ],
      ratings_count: 2142,
      reviews_text_count: 18,
      added: 8939,
      added_by_status: {
        yet: 422,
        owned: 5603,
        beaten: 917,
        toplay: 332,
        dropped: 1033,
        playing: 632,
      },
      metacritic: 89,
      suggestions_count: 277,
      updated: '2023-07-13T06:05:45',
      id: 654,
      score: null,
      clip: null,
      tags: [
        {
          id: 31,
          name: 'Singleplayer',
          slug: 'singleplayer',
          language: 'eng',
          games_count: 206544,
          image_background:
            'https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg',
        },
        {
          id: 42396,
          name: 'Для одного игрока',
          slug: 'dlia-odnogo-igroka',
          language: 'rus',
          games_count: 35171,
          image_background:
            'https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg',
        },
        {
          id: 40847,
          name: 'Steam Achievements',
          slug: 'steam-achievements',
          language: 'eng',
          games_count: 30840,
          image_background:
            'https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg',
        },
        {
          id: 42398,
          name: 'Инди',
          slug: 'indi-2',
          language: 'rus',
          games_count: 46233,
          image_background:
            'https://media.rawg.io/media/games/9fa/9fa63622543e5d4f6d99aa9d73b043de.jpg',
        },
        {
          id: 7,
          name: 'Multiplayer',
          slug: 'multiplayer',
          language: 'eng',
          games_count: 35108,
          image_background:
            'https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg',
        },
        {
          id: 13,
          name: 'Atmospheric',
          slug: 'atmospheric',
          language: 'eng',
          games_count: 29635,
          image_background:
            'https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg',
        },
        {
          id: 40849,
          name: 'Steam Cloud',
          slug: 'steam-cloud',
          language: 'eng',
          games_count: 14345,
          image_background:
            'https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg',
        },
        {
          id: 42400,
          name: 'Атмосфера',
          slug: 'atmosfera',
          language: 'rus',
          games_count: 6083,
          image_background:
            'https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg',
        },
        {
          id: 42425,
          name: 'Для нескольких игроков',
          slug: 'dlia-neskolkikh-igrokov',
          language: 'rus',
          games_count: 7893,
          image_background:
            'https://media.rawg.io/media/games/713/713269608dc8f2f40f5a670a14b2de94.jpg',
        },
        {
          id: 7808,
          name: 'steam-trading-cards',
          slug: 'steam-trading-cards',
          language: 'eng',
          games_count: 7571,
          image_background:
            'https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg',
        },
        {
          id: 42401,
          name: 'Отличный саундтрек',
          slug: 'otlichnyi-saundtrek',
          language: 'rus',
          games_count: 4463,
          image_background:
            'https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg',
        },
        {
          id: 42,
          name: 'Great Soundtrack',
          slug: 'great-soundtrack',
          language: 'eng',
          games_count: 3241,
          image_background:
            'https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg',
        },
        {
          id: 24,
          name: 'RPG',
          slug: 'rpg',
          language: 'eng',
          games_count: 17413,
          image_background:
            'https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg',
        },
        {
          id: 18,
          name: 'Co-op',
          slug: 'co-op',
          language: 'eng',
          games_count: 9892,
          image_background:
            'https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg',
        },
        {
          id: 42412,
          name: 'Ролевая игра',
          slug: 'rolevaia-igra',
          language: 'rus',
          games_count: 13830,
          image_background:
            'https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg',
        },
        {
          id: 42442,
          name: 'Открытый мир',
          slug: 'otkrytyi-mir',
          language: 'rus',
          games_count: 4494,
          image_background:
            'https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg',
        },
        {
          id: 36,
          name: 'Open World',
          slug: 'open-world',
          language: 'eng',
          games_count: 6316,
          image_background:
            'https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg',
        },
        {
          id: 42399,
          name: 'Казуальная игра',
          slug: 'kazualnaia-igra',
          language: 'rus',
          games_count: 31993,
          image_background:
            'https://media.rawg.io/media/games/852/8522935d8ab27b610a254b52de0da212.jpg',
        },
        {
          id: 45,
          name: '2D',
          slug: '2d',
          language: 'eng',
          games_count: 188239,
          image_background:
            'https://media.rawg.io/media/games/fd9/fd92f105dcd6491bc5d61135033d1f19.jpg',
        },
        {
          id: 40845,
          name: 'Partial Controller Support',
          slug: 'partial-controller-support',
          language: 'eng',
          games_count: 9866,
          image_background:
            'https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg',
        },
        {
          id: 42413,
          name: 'Симулятор',
          slug: 'simuliator',
          language: 'rus',
          games_count: 15262,
          image_background:
            'https://media.rawg.io/media/games/fd6/fd6a1eecd3ec0f875f1924f3656b7dd9.jpg',
        },
        {
          id: 37,
          name: 'Sandbox',
          slug: 'sandbox',
          language: 'eng',
          games_count: 5956,
          image_background:
            'https://media.rawg.io/media/games/c50/c5085506fe4b5e20fc7aa5ace842c20b.jpg',
        },
        {
          id: 42444,
          name: 'Песочница',
          slug: 'pesochnitsa',
          language: 'rus',
          games_count: 3191,
          image_background:
            'https://media.rawg.io/media/games/15c/15c95a4915f88a3e89c821526afe05fc.jpg',
        },
        {
          id: 42415,
          name: 'Пиксельная графика',
          slug: 'pikselnaia-grafika',
          language: 'rus',
          games_count: 9128,
          image_background:
            'https://media.rawg.io/media/games/f62/f62eb0901c7017776e0a5c6a94f979d5.jpg',
        },
        {
          id: 42467,
          name: 'Ретро',
          slug: 'retro-2',
          language: 'rus',
          games_count: 5845,
          image_background:
            'https://media.rawg.io/media/games/9cc/9cc11e2e81403186c7fa9c00c143d6e4.jpg',
        },
        {
          id: 122,
          name: 'Pixel Graphics',
          slug: 'pixel-graphics',
          language: 'eng',
          games_count: 90313,
          image_background:
            'https://media.rawg.io/media/games/bbf/bbf8d74ab64440ad76294cff2f4d9cfa.jpg',
        },
        {
          id: 74,
          name: 'Retro',
          slug: 'retro',
          language: 'eng',
          games_count: 39694,
          image_background:
            'https://media.rawg.io/media/games/2ae/2aedae90b1377a0f3e5ce54d24f8e41a.jpg',
        },
        {
          id: 468,
          name: 'role-playing',
          slug: 'role-playing',
          language: 'eng',
          games_count: 1499,
          image_background:
            'https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg',
        },
        {
          id: 42586,
          name: 'Милая',
          slug: 'milaia',
          language: 'rus',
          games_count: 8661,
          image_background:
            'https://media.rawg.io/media/games/cd3/cd3c9c7d3e95cb1608fd6250f1b90b7a.jpg',
        },
        {
          id: 88,
          name: 'Cute',
          slug: 'cute',
          language: 'eng',
          games_count: 29623,
          image_background:
            'https://media.rawg.io/media/games/f8c/f8c6a262ead4c16b47e1219310210eb3.jpg',
        },
        {
          id: 125,
          name: 'Crafting',
          slug: 'crafting',
          language: 'eng',
          games_count: 3403,
          image_background:
            'https://media.rawg.io/media/games/7e7/7e79e3296a7f64e7535c9e5bb5aa4b53.jpg',
        },
        {
          id: 42497,
          name: 'Крафтинг',
          slug: 'krafting',
          language: 'rus',
          games_count: 2099,
          image_background:
            'https://media.rawg.io/media/games/adb/adb59be81367b19c2544457424bcf086.jpg',
        },
        {
          id: 42553,
          name: 'Строительство',
          slug: 'stroitelstvo',
          language: 'rus',
          games_count: 2581,
          image_background:
            'https://media.rawg.io/media/games/e44/e445335e611b4ccf03af71fffcbd30a4.jpg',
        },
        {
          id: 39,
          name: 'Building',
          slug: 'building',
          language: 'eng',
          games_count: 5185,
          image_background:
            'https://media.rawg.io/media/games/48c/48cb04ca483be865e3a83119c94e6097.jpg',
        },
        {
          id: 42564,
          name: 'Расслабляющая',
          slug: 'rasslabliaiushchaia',
          language: 'rus',
          games_count: 6171,
          image_background:
            'https://media.rawg.io/media/games/c49/c4983df94a8a8167d652b812de742da8.jpg',
        },
        {
          id: 337,
          name: 'overlay',
          slug: 'overlay',
          language: 'eng',
          games_count: 220,
          image_background:
            'https://media.rawg.io/media/games/003/0031c0067559d41df19cf98ad87e02aa.jpg',
        },
        {
          id: 138,
          name: 'Relaxing',
          slug: 'relaxing',
          language: 'eng',
          games_count: 13879,
          image_background:
            'https://media.rawg.io/media/screenshots/0bf/0bfa18254ae627cab7f0159a24d178cd.jpg',
        },
        {
          id: 42408,
          name: 'Симулятор свиданий',
          slug: 'simuliator-svidanii',
          language: 'rus',
          games_count: 1925,
          image_background:
            'https://media.rawg.io/media/screenshots/e25/e253cc4df0c2604ec2b12cab8b45d58a.jpg',
        },
        {
          id: 160,
          name: 'Dating Sim',
          slug: 'dating-sim',
          language: 'eng',
          games_count: 4378,
          image_background:
            'https://media.rawg.io/media/screenshots/5d9/5d9d6da555c357edde9cfa2db622083f.jpg',
        },
        {
          id: 46112,
          name: 'Shared/Split Screen Co-op',
          slug: 'sharedsplit-screen-co-op',
          language: 'eng',
          games_count: 1238,
          image_background:
            'https://media.rawg.io/media/games/bbe/bbe47995ed6f8b054afa6110f522515d.jpg',
        },
        {
          id: 338,
          name: 'cloud saves',
          slug: 'cloud-saves',
          language: 'eng',
          games_count: 36,
          image_background:
            'https://media.rawg.io/media/games/1ad/1ad3737af2c4a4ff8e7f5540b5dcade8.jpg',
        },
        {
          id: 155,
          name: 'Fishing',
          slug: 'fishing',
          language: 'eng',
          games_count: 1841,
          image_background:
            'https://media.rawg.io/media/screenshots/6ac/6ac38734827f01e8f7b29f104bd3326b.jpg',
        },
        {
          id: 42597,
          name: 'Рыбалка',
          slug: 'rybalka',
          language: 'rus',
          games_count: 269,
          image_background:
            'https://media.rawg.io/media/screenshots/045/0450707ed83bb1f05fe0968466fbb6ed.jpg',
        },
        {
          id: 42414,
          name: 'Сельское хозяйство',
          slug: 'selskoe-khoziaistvo',
          language: 'rus',
          games_count: 434,
          image_background:
            'https://media.rawg.io/media/games/543/543e6c13569e47b8d31a291a80b07df2.jpg',
        },
        {
          id: 159,
          name: 'Agriculture',
          slug: 'agriculture',
          language: 'eng',
          games_count: 458,
          image_background:
            'https://media.rawg.io/media/games/713/713269608dc8f2f40f5a670a14b2de94.jpg',
        },
        {
          id: 409,
          name: 'co-op multiplayer',
          slug: 'co-op-multiplayer',
          language: 'eng',
          games_count: 8,
          image_background:
            'https://media.rawg.io/media/games/d22/d22ea1bfb636fbf1a9c235cc304312a8.jpg',
        },
      ],
      esrb_rating: {
        id: 2,
        name: 'Everyone 10+',
        slug: 'everyone-10-plus',
        name_en: 'Everyone 10+',
        name_ru: 'С 10 лет',
      },
      user_game: null,
      reviews_count: 2170,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      short_screenshots: [
        {
          id: -1,
          image:
            'https://media.rawg.io/media/games/713/713269608dc8f2f40f5a670a14b2de94.jpg',
        },
        {
          id: 5702,
          image:
            'https://media.rawg.io/media/screenshots/b72/b722b1746256f64ce5e15558d1ac7613.jpg',
        },
        {
          id: 5704,
          image:
            'https://media.rawg.io/media/screenshots/733/7330aea66ef9de06bb201e1d3f10ff70.jpg',
        },
        {
          id: 5706,
          image:
            'https://media.rawg.io/media/screenshots/0a6/0a6dfc3ef9ac018b737427405e686e23.jpg',
        },
        {
          id: 5707,
          image:
            'https://media.rawg.io/media/screenshots/366/3668bbdd41a682c76370fc81691150bc.jpg',
        },
        {
          id: 59238,
          image:
            'https://media.rawg.io/media/screenshots/e25/e25137cf398c743153d64993160487f1.jpg',
        },
        {
          id: 59242,
          image:
            'https://media.rawg.io/media/screenshots/b64/b6419e71b81f36ab7bc62a6614cb5b85.jpg',
        },
      ],
      parent_platforms: [
        {
          platform: {
            id: 1,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 2,
            name: 'PlayStation',
            slug: 'playstation',
          },
        },
        {
          platform: {
            id: 3,
            name: 'Xbox',
            slug: 'xbox',
          },
        },
        {
          platform: {
            id: 4,
            name: 'iOS',
            slug: 'ios',
          },
        },
        {
          platform: {
            id: 8,
            name: 'Android',
            slug: 'android',
          },
        },
        {
          platform: {
            id: 5,
            name: 'Apple Macintosh',
            slug: 'mac',
          },
        },
        {
          platform: {
            id: 6,
            name: 'Linux',
            slug: 'linux',
          },
        },
        {
          platform: {
            id: 7,
            name: 'Nintendo',
            slug: 'nintendo',
          },
        },
      ],
      genres: [
        {
          id: 51,
          name: 'Indie',
          slug: 'indie',
        },
        {
          id: 5,
          name: 'RPG',
          slug: 'role-playing-games-rpg',
        },
        {
          id: 14,
          name: 'Simulation',
          slug: 'simulation',
        },
      ],
    },
    {
      slug: 'la-noire',
      name: 'L.A. Noire',
      playtime: 7,
      platforms: [
        {
          platform: {
            id: 4,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 1,
            name: 'Xbox One',
            slug: 'xbox-one',
          },
        },
        {
          platform: {
            id: 18,
            name: 'PlayStation 4',
            slug: 'playstation4',
          },
        },
        {
          platform: {
            id: 7,
            name: 'Nintendo Switch',
            slug: 'nintendo-switch',
          },
        },
        {
          platform: {
            id: 14,
            name: 'Xbox 360',
            slug: 'xbox360',
          },
        },
        {
          platform: {
            id: 16,
            name: 'PlayStation 3',
            slug: 'playstation3',
          },
        },
      ],
      stores: [
        {
          store: {
            id: 1,
            name: 'Steam',
            slug: 'steam',
          },
        },
        {
          store: {
            id: 3,
            name: 'PlayStation Store',
            slug: 'playstation-store',
          },
        },
        {
          store: {
            id: 2,
            name: 'Xbox Store',
            slug: 'xbox-store',
          },
        },
        {
          store: {
            id: 6,
            name: 'Nintendo Store',
            slug: 'nintendo',
          },
        },
        {
          store: {
            id: 7,
            name: 'Xbox 360 Store',
            slug: 'xbox360',
          },
        },
      ],
      released: '2011-05-17',
      tba: false,
      background_image:
        'https://media.rawg.io/media/games/e2d/e2d3f396b16dded0f841c17c9799a882.jpg',
      rating: 4.16,
      rating_top: 4,
      ratings: [
        {
          id: 4,
          title: 'recommended',
          count: 1009,
          percent: 52.14,
        },
        {
          id: 5,
          title: 'exceptional',
          count: 664,
          percent: 34.32,
        },
        {
          id: 3,
          title: 'meh',
          count: 220,
          percent: 11.37,
        },
        {
          id: 1,
          title: 'skip',
          count: 42,
          percent: 2.17,
        },
      ],
      ratings_count: 1915,
      reviews_text_count: 13,
      added: 8776,
      added_by_status: {
        yet: 533,
        owned: 5572,
        beaten: 1441,
        toplay: 436,
        dropped: 667,
        playing: 127,
      },
      metacritic: 83,
      suggestions_count: 437,
      updated: '2023-07-12T23:52:43',
      id: 4514,
      score: null,
      clip: null,
      tags: [
        {
          id: 31,
          name: 'Singleplayer',
          slug: 'singleplayer',
          language: 'eng',
          games_count: 206544,
          image_background:
            'https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg',
        },
        {
          id: 42396,
          name: 'Для одного игрока',
          slug: 'dlia-odnogo-igroka',
          language: 'rus',
          games_count: 35171,
          image_background:
            'https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg',
        },
        {
          id: 42417,
          name: 'Экшен',
          slug: 'ekshen',
          language: 'rus',
          games_count: 32438,
          image_background:
            'https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg',
        },
        {
          id: 42392,
          name: 'Приключение',
          slug: 'prikliuchenie',
          language: 'rus',
          games_count: 30382,
          image_background:
            'https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg',
        },
        {
          id: 13,
          name: 'Atmospheric',
          slug: 'atmospheric',
          language: 'eng',
          games_count: 29635,
          image_background:
            'https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg',
        },
        {
          id: 42400,
          name: 'Атмосфера',
          slug: 'atmosfera',
          language: 'rus',
          games_count: 6083,
          image_background:
            'https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg',
        },
        {
          id: 42394,
          name: 'Глубокий сюжет',
          slug: 'glubokii-siuzhet',
          language: 'rus',
          games_count: 9153,
          image_background:
            'https://media.rawg.io/media/games/b7b/b7b8381707152afc7d91f5d95de70e39.jpg',
        },
        {
          id: 24,
          name: 'RPG',
          slug: 'rpg',
          language: 'eng',
          games_count: 17413,
          image_background:
            'https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg',
        },
        {
          id: 118,
          name: 'Story Rich',
          slug: 'story-rich',
          language: 'eng',
          games_count: 18334,
          image_background:
            'https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg',
        },
        {
          id: 42442,
          name: 'Открытый мир',
          slug: 'otkrytyi-mir',
          language: 'rus',
          games_count: 4494,
          image_background:
            'https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg',
        },
        {
          id: 36,
          name: 'Open World',
          slug: 'open-world',
          language: 'eng',
          games_count: 6316,
          image_background:
            'https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg',
        },
        {
          id: 42421,
          name: 'Стратегия',
          slug: 'strategiia',
          language: 'rus',
          games_count: 15056,
          image_background:
            'https://media.rawg.io/media/games/21a/21ad672cedee9b4378abb6c2d2e626ee.jpg',
        },
        {
          id: 42435,
          name: 'Шедевр',
          slug: 'shedevr',
          language: 'rus',
          games_count: 1059,
          image_background:
            'https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg',
        },
        {
          id: 149,
          name: 'Third Person',
          slug: 'third-person',
          language: 'eng',
          games_count: 9504,
          image_background:
            'https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg',
        },
        {
          id: 42441,
          name: 'От третьего лица',
          slug: 'ot-tretego-litsa',
          language: 'rus',
          games_count: 5015,
          image_background:
            'https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg',
        },
        {
          id: 40845,
          name: 'Partial Controller Support',
          slug: 'partial-controller-support',
          language: 'eng',
          games_count: 9866,
          image_background:
            'https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg',
        },
        {
          id: 42465,
          name: 'Головоломка',
          slug: 'golovolomka',
          language: 'rus',
          games_count: 11685,
          image_background:
            'https://media.rawg.io/media/games/fd8/fd882c8267a44621a0de6f9cec77ae90.jpg',
        },
        {
          id: 42446,
          name: 'Шутер от третьего лица',
          slug: 'shuter-ot-tretego-litsa',
          language: 'rus',
          games_count: 1525,
          image_background:
            'https://media.rawg.io/media/games/3cf/3cff89996570cf29a10eb9cd967dcf73.jpg',
        },
        {
          id: 150,
          name: 'Third-Person Shooter',
          slug: 'third-person-shooter',
          language: 'eng',
          games_count: 2917,
          image_background:
            'https://media.rawg.io/media/games/d69/d69810315bd7e226ea2d21f9156af629.jpg',
        },
        {
          id: 42406,
          name: 'Нагота',
          slug: 'nagota',
          language: 'rus',
          games_count: 4644,
          image_background:
            'https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg',
        },
        {
          id: 44,
          name: 'Nudity',
          slug: 'nudity',
          language: 'eng',
          games_count: 5029,
          image_background:
            'https://media.rawg.io/media/games/8ca/8ca40b562a755d6a0e30d48e6c74b178.jpg',
        },
        {
          id: 42556,
          name: 'Тайна',
          slug: 'taina',
          language: 'rus',
          games_count: 3821,
          image_background:
            'https://media.rawg.io/media/games/948/948fe7f00b6cba8472f5ecd07a455077.jpg',
        },
        {
          id: 117,
          name: 'Mystery',
          slug: 'mystery',
          language: 'eng',
          games_count: 11924,
          image_background:
            'https://media.rawg.io/media/games/34e/34e100b1f648de99f32d477065f04653.jpg',
        },
        {
          id: 42529,
          name: 'Для взрослых',
          slug: 'dlia-vzroslykh',
          language: 'rus',
          games_count: 2035,
          image_background:
            'https://media.rawg.io/media/games/5fa/5fae5fec3c943179e09da67a4427d68f.jpg',
        },
        {
          id: 192,
          name: 'Mature',
          slug: 'mature',
          language: 'eng',
          games_count: 2222,
          image_background:
            'https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg',
        },
        {
          id: 110,
          name: 'Cinematic',
          slug: 'cinematic',
          language: 'eng',
          games_count: 1441,
          image_background:
            'https://media.rawg.io/media/games/7ac/7aca7ccf0e70cd0974cb899ab9e5158e.jpg',
        },
        {
          id: 144,
          name: 'Crime',
          slug: 'crime',
          language: 'eng',
          games_count: 2557,
          image_background:
            'https://media.rawg.io/media/games/d69/d69810315bd7e226ea2d21f9156af629.jpg',
        },
        {
          id: 42443,
          name: 'Криминал',
          slug: 'kriminal',
          language: 'rus',
          games_count: 686,
          image_background:
            'https://media.rawg.io/media/games/6cc/6cc68fa183b905ac9d85efb9797776f6.jpg',
        },
        {
          id: 42623,
          name: 'Кинематографичная',
          slug: 'kinematografichnaia',
          language: 'rus',
          games_count: 1348,
          image_background:
            'https://media.rawg.io/media/games/b72/b7233d5d5b1e75e86bb860ccc7aeca85.jpg',
        },
        {
          id: 133,
          name: '3D Vision',
          slug: '3d-vision',
          language: 'eng',
          games_count: 587,
          image_background:
            'https://media.rawg.io/media/games/e0f/e0f05a97ff926acf4c8f43e0849b6832.jpg',
        },
        {
          id: 142,
          name: 'Detective',
          slug: 'detective',
          language: 'eng',
          games_count: 2717,
          image_background:
            'https://media.rawg.io/media/games/c50/c5085506fe4b5e20fc7aa5ace842c20b.jpg',
        },
        {
          id: 42526,
          name: 'Детектив',
          slug: 'detektiv',
          language: 'rus',
          games_count: 1280,
          image_background:
            'https://media.rawg.io/media/screenshots/75c/75c9b2a8e308bb44059d52ff59006e16.jpg',
        },
        {
          id: 42622,
          name: 'Нуар',
          slug: 'nuar',
          language: 'rus',
          games_count: 534,
          image_background:
            'https://media.rawg.io/media/games/d73/d7364906c530ccc2d89b0b5d8695e03c.jpg',
        },
        {
          id: 42513,
          name: 'Триллер',
          slug: 'triller',
          language: 'rus',
          games_count: 980,
          image_background:
            'https://media.rawg.io/media/games/d96/d966fbdebcb904af63980842b37c31c9.jpg',
        },
        {
          id: 289,
          name: 'Noir',
          slug: 'noir',
          language: 'eng',
          games_count: 1126,
          image_background:
            'https://media.rawg.io/media/screenshots/a1e/a1e4ac4a6250cd633e760a10de4bde19.jpg',
        },
        {
          id: 326,
          name: 'Investigation',
          slug: 'investigation',
          language: 'eng',
          games_count: 1745,
          image_background:
            'https://media.rawg.io/media/games/b23/b23e516c7c846435b9e7708a73207b67.jpg',
        },
        {
          id: 42694,
          name: 'Расследование',
          slug: 'rassledovanie',
          language: 'rus',
          games_count: 464,
          image_background:
            'https://media.rawg.io/media/games/400/4002753ab3a1275bb1e46aa9fe2c3592.jpg',
        },
      ],
      esrb_rating: {
        id: 4,
        name: 'Mature',
        slug: 'mature',
        name_en: 'Mature',
        name_ru: 'С 17 лет',
      },
      user_game: null,
      reviews_count: 1935,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      short_screenshots: [
        {
          id: -1,
          image:
            'https://media.rawg.io/media/games/e2d/e2d3f396b16dded0f841c17c9799a882.jpg',
        },
        {
          id: 151391,
          image:
            'https://media.rawg.io/media/screenshots/c08/c0823f02236f076a7a36ff5f3571558e.jpg',
        },
        {
          id: 151392,
          image:
            'https://media.rawg.io/media/screenshots/dee/dee71bfc43834357e15e1d35d2c507c8.jpg',
        },
        {
          id: 151393,
          image:
            'https://media.rawg.io/media/screenshots/69f/69fdec37afd586f274316a69e92303f1.jpg',
        },
        {
          id: 151394,
          image:
            'https://media.rawg.io/media/screenshots/4c0/4c0f154b51525e93ce8f2f18197c82ee.jpg',
        },
        {
          id: 151395,
          image:
            'https://media.rawg.io/media/screenshots/87b/87bf0f4ababb76a87b7ac82a282e44c6.jpg',
        },
        {
          id: 151396,
          image:
            'https://media.rawg.io/media/screenshots/5e0/5e05bd7135d8e8d8dfb92eb7e3d57181.jpg',
        },
      ],
      parent_platforms: [
        {
          platform: {
            id: 1,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 2,
            name: 'PlayStation',
            slug: 'playstation',
          },
        },
        {
          platform: {
            id: 3,
            name: 'Xbox',
            slug: 'xbox',
          },
        },
        {
          platform: {
            id: 7,
            name: 'Nintendo',
            slug: 'nintendo',
          },
        },
      ],
      genres: [
        {
          id: 3,
          name: 'Adventure',
          slug: 'adventure',
        },
        {
          id: 4,
          name: 'Action',
          slug: 'action',
        },
      ],
    },
    {
      slug: 'super-meat-boy',
      name: 'Super Meat Boy',
      playtime: 3,
      platforms: [
        {
          platform: {
            id: 4,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 18,
            name: 'PlayStation 4',
            slug: 'playstation4',
          },
        },
        {
          platform: {
            id: 7,
            name: 'Nintendo Switch',
            slug: 'nintendo-switch',
          },
        },
        {
          platform: {
            id: 21,
            name: 'Android',
            slug: 'android',
          },
        },
        {
          platform: {
            id: 5,
            name: 'macOS',
            slug: 'macos',
          },
        },
        {
          platform: {
            id: 6,
            name: 'Linux',
            slug: 'linux',
          },
        },
        {
          platform: {
            id: 14,
            name: 'Xbox 360',
            slug: 'xbox360',
          },
        },
        {
          platform: {
            id: 19,
            name: 'PS Vita',
            slug: 'ps-vita',
          },
        },
        {
          platform: {
            id: 10,
            name: 'Wii U',
            slug: 'wii-u',
          },
        },
        {
          platform: {
            id: 171,
            name: 'Web',
            slug: 'web',
          },
        },
      ],
      stores: [
        {
          store: {
            id: 1,
            name: 'Steam',
            slug: 'steam',
          },
        },
        {
          store: {
            id: 3,
            name: 'PlayStation Store',
            slug: 'playstation-store',
          },
        },
        {
          store: {
            id: 6,
            name: 'Nintendo Store',
            slug: 'nintendo',
          },
        },
        {
          store: {
            id: 7,
            name: 'Xbox 360 Store',
            slug: 'xbox360',
          },
        },
        {
          store: {
            id: 8,
            name: 'Google Play',
            slug: 'google-play',
          },
        },
        {
          store: {
            id: 11,
            name: 'Epic Games',
            slug: 'epic-games',
          },
        },
      ],
      released: '2010-10-20',
      tba: false,
      background_image:
        'https://media.rawg.io/media/games/e04/e04963f3ac4c4fa83a1dc0b9231e50db.jpg',
      rating: 3.97,
      rating_top: 4,
      ratings: [
        {
          id: 4,
          title: 'recommended',
          count: 913,
          percent: 54.44,
        },
        {
          id: 5,
          title: 'exceptional',
          count: 441,
          percent: 26.3,
        },
        {
          id: 3,
          title: 'meh',
          count: 237,
          percent: 14.13,
        },
        {
          id: 1,
          title: 'skip',
          count: 86,
          percent: 5.13,
        },
      ],
      ratings_count: 1665,
      reviews_text_count: 10,
      added: 8731,
      added_by_status: {
        yet: 315,
        owned: 6367,
        beaten: 714,
        toplay: 128,
        dropped: 1120,
        playing: 87,
      },
      metacritic: 87,
      suggestions_count: 269,
      updated: '2023-07-12T23:53:02',
      id: 3144,
      score: null,
      clip: null,
      tags: [
        {
          id: 31,
          name: 'Singleplayer',
          slug: 'singleplayer',
          language: 'eng',
          games_count: 206544,
          image_background:
            'https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg',
        },
        {
          id: 42396,
          name: 'Для одного игрока',
          slug: 'dlia-odnogo-igroka',
          language: 'rus',
          games_count: 35171,
          image_background:
            'https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg',
        },
        {
          id: 42417,
          name: 'Экшен',
          slug: 'ekshen',
          language: 'rus',
          games_count: 32438,
          image_background:
            'https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg',
        },
        {
          id: 42392,
          name: 'Приключение',
          slug: 'prikliuchenie',
          language: 'rus',
          games_count: 30382,
          image_background:
            'https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg',
        },
        {
          id: 40847,
          name: 'Steam Achievements',
          slug: 'steam-achievements',
          language: 'eng',
          games_count: 30840,
          image_background:
            'https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg',
        },
        {
          id: 42398,
          name: 'Инди',
          slug: 'indi-2',
          language: 'rus',
          games_count: 46233,
          image_background:
            'https://media.rawg.io/media/games/9fa/9fa63622543e5d4f6d99aa9d73b043de.jpg',
        },
        {
          id: 40836,
          name: 'Full controller support',
          slug: 'full-controller-support',
          language: 'eng',
          games_count: 14476,
          image_background:
            'https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg',
        },
        {
          id: 7808,
          name: 'steam-trading-cards',
          slug: 'steam-trading-cards',
          language: 'eng',
          games_count: 7571,
          image_background:
            'https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg',
        },
        {
          id: 42401,
          name: 'Отличный саундтрек',
          slug: 'otlichnyi-saundtrek',
          language: 'rus',
          games_count: 4463,
          image_background:
            'https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg',
        },
        {
          id: 42,
          name: 'Great Soundtrack',
          slug: 'great-soundtrack',
          language: 'eng',
          games_count: 3241,
          image_background:
            'https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg',
        },
        {
          id: 42435,
          name: 'Шедевр',
          slug: 'shedevr',
          language: 'rus',
          games_count: 1059,
          image_background:
            'https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg',
        },
        {
          id: 45,
          name: '2D',
          slug: '2d',
          language: 'eng',
          games_count: 188239,
          image_background:
            'https://media.rawg.io/media/games/fd9/fd92f105dcd6491bc5d61135033d1f19.jpg',
        },
        {
          id: 42482,
          name: 'Смешная',
          slug: 'smeshnaia',
          language: 'rus',
          games_count: 6600,
          image_background:
            'https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg',
        },
        {
          id: 42420,
          name: 'Сложная',
          slug: 'slozhnaia',
          language: 'rus',
          games_count: 4508,
          image_background:
            'https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg',
        },
        {
          id: 4,
          name: 'Funny',
          slug: 'funny',
          language: 'eng',
          games_count: 22604,
          image_background:
            'https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg',
        },
        {
          id: 42491,
          name: 'Мясо',
          slug: 'miaso',
          language: 'rus',
          games_count: 3940,
          image_background:
            'https://media.rawg.io/media/games/e04/e04963f3ac4c4fa83a1dc0b9231e50db.jpg',
        },
        {
          id: 26,
          name: 'Gore',
          slug: 'gore',
          language: 'eng',
          games_count: 5076,
          image_background:
            'https://media.rawg.io/media/games/f6b/f6bed028b02369d4cab548f4f9337e81.jpg',
        },
        {
          id: 40850,
          name: 'Steam Leaderboards',
          slug: 'steam-leaderboards',
          language: 'eng',
          games_count: 5893,
          image_background:
            'https://media.rawg.io/media/games/995/9951d9d55323d08967640f7b9ab3e342.jpg',
        },
        {
          id: 49,
          name: 'Difficult',
          slug: 'difficult',
          language: 'eng',
          games_count: 12486,
          image_background:
            'https://media.rawg.io/media/games/1f1/1f1888e1308959dfd3be4c144a81d19c.jpg',
        },
        {
          id: 42481,
          name: 'Юмор',
          slug: 'iumor',
          language: 'rus',
          games_count: 4260,
          image_background:
            'https://media.rawg.io/media/games/e04/e04963f3ac4c4fa83a1dc0b9231e50db.jpg',
        },
        {
          id: 123,
          name: 'Comedy',
          slug: 'comedy',
          language: 'eng',
          games_count: 10929,
          image_background:
            'https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg',
        },
        {
          id: 42463,
          name: 'Платформер',
          slug: 'platformer-2',
          language: 'rus',
          games_count: 6582,
          image_background:
            'https://media.rawg.io/media/games/9cc/9cc11e2e81403186c7fa9c00c143d6e4.jpg',
        },
        {
          id: 42415,
          name: 'Пиксельная графика',
          slug: 'pikselnaia-grafika',
          language: 'rus',
          games_count: 9128,
          image_background:
            'https://media.rawg.io/media/games/f62/f62eb0901c7017776e0a5c6a94f979d5.jpg',
        },
        {
          id: 42467,
          name: 'Ретро',
          slug: 'retro-2',
          language: 'rus',
          games_count: 5845,
          image_background:
            'https://media.rawg.io/media/games/9cc/9cc11e2e81403186c7fa9c00c143d6e4.jpg',
        },
        {
          id: 42416,
          name: 'Контроллер',
          slug: 'kontroller',
          language: 'rus',
          games_count: 3979,
          image_background:
            'https://media.rawg.io/media/games/410/41033a495ce8f7fd4b0934bdb975f12a.jpg',
        },
        {
          id: 122,
          name: 'Pixel Graphics',
          slug: 'pixel-graphics',
          language: 'eng',
          games_count: 90313,
          image_background:
            'https://media.rawg.io/media/games/bbf/bbf8d74ab64440ad76294cff2f4d9cfa.jpg',
        },
        {
          id: 115,
          name: 'Controller',
          slug: 'controller',
          language: 'eng',
          games_count: 9522,
          image_background:
            'https://media.rawg.io/media/games/8d4/8d46786ca86b1d95f3dc7e700e2dc4dd.jpg',
        },
        {
          id: 74,
          name: 'Retro',
          slug: 'retro',
          language: 'eng',
          games_count: 39694,
          image_background:
            'https://media.rawg.io/media/games/2ae/2aedae90b1377a0f3e5ce54d24f8e41a.jpg',
        },
        {
          id: 42520,
          name: 'Реиграбельность',
          slug: 'reigrabelnost',
          language: 'rus',
          games_count: 1854,
          image_background:
            'https://media.rawg.io/media/games/d46/d46373f39458670305704ef089387520.jpg',
        },
        {
          id: 5,
          name: 'Replay Value',
          slug: 'replay-value',
          language: 'eng',
          games_count: 1305,
          image_background:
            'https://media.rawg.io/media/games/476/476178ef18ab0534771d099f51cdc694.jpg',
        },
        {
          id: 42469,
          name: 'Вид сбоку',
          slug: 'vid-sboku',
          language: 'rus',
          games_count: 3094,
          image_background:
            'https://media.rawg.io/media/games/fad/fadc4be043ed07904012d47cd02671e4.jpg',
        },
        {
          id: 42612,
          name: 'Быстрая',
          slug: 'bystraia',
          language: 'rus',
          games_count: 1522,
          image_background:
            'https://media.rawg.io/media/games/bee/bee483efadcf9d7e657e52184316a34e.jpg',
        },
        {
          id: 113,
          name: 'Side Scroller',
          slug: 'side-scroller',
          language: 'eng',
          games_count: 9479,
          image_background:
            'https://media.rawg.io/media/games/bbf/bbf8d74ab64440ad76294cff2f4d9cfa.jpg',
        },
        {
          id: 131,
          name: 'Fast-Paced',
          slug: 'fast-paced',
          language: 'eng',
          games_count: 10274,
          image_background:
            'https://media.rawg.io/media/games/556/556157feed9ee1f55f2b12b2973e30a3.jpg',
        },
        {
          id: 266,
          name: 'Level Editor',
          slug: 'level-editor',
          language: 'eng',
          games_count: 1420,
          image_background:
            'https://media.rawg.io/media/games/e04/e04963f3ac4c4fa83a1dc0b9231e50db.jpg',
        },
        {
          id: 42656,
          name: 'Игра на время',
          slug: 'igra-na-vremia',
          language: 'rus',
          games_count: 209,
          image_background:
            'https://media.rawg.io/media/screenshots/6a5/6a5d512a0aae9f12cc8f8b05d46ec631.jpg',
        },
        {
          id: 280,
          name: 'Time Attack',
          slug: 'time-attack',
          language: 'eng',
          games_count: 1617,
          image_background:
            'https://media.rawg.io/media/screenshots/f7f/f7fb42b2115c3730c00248dafe57e2d0.jpg',
        },
        {
          id: 42720,
          name: 'Суровая',
          slug: 'surovaia',
          language: 'rus',
          games_count: 95,
          image_background:
            'https://media.rawg.io/media/screenshots/98a/98a2a281f8744ec2c93175b19184a0d4.jpg',
        },
        {
          id: 49963,
          name: 'Precision Platformer',
          slug: 'precision-platformer-2',
          language: 'eng',
          games_count: 1237,
          image_background:
            'https://media.rawg.io/media/screenshots/375/3751567b445a703a4469d05305471feb.jpg',
        },
      ],
      esrb_rating: null,
      user_game: null,
      reviews_count: 1677,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      short_screenshots: [
        {
          id: -1,
          image:
            'https://media.rawg.io/media/games/e04/e04963f3ac4c4fa83a1dc0b9231e50db.jpg',
        },
        {
          id: 28594,
          image:
            'https://media.rawg.io/media/screenshots/b1e/b1e6c4d530035326da66fb85ae57519b.jpg',
        },
        {
          id: 28595,
          image:
            'https://media.rawg.io/media/screenshots/09f/09f743bc5acc26aba844b3a092cdcddf.jpg',
        },
        {
          id: 28596,
          image:
            'https://media.rawg.io/media/screenshots/995/9951726156ed69933ec1eff9a65c0e60.jpg',
        },
        {
          id: 28597,
          image:
            'https://media.rawg.io/media/screenshots/db4/db4747c3913bd81e3e6754bb51a34838.jpg',
        },
        {
          id: 28598,
          image:
            'https://media.rawg.io/media/screenshots/e1d/e1d4006f82564f0d654f2959042a3acc.jpg',
        },
        {
          id: 28599,
          image:
            'https://media.rawg.io/media/screenshots/14c/14c8b551343374231fa07987e5a2d9e3.jpg',
        },
      ],
      parent_platforms: [
        {
          platform: {
            id: 1,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 2,
            name: 'PlayStation',
            slug: 'playstation',
          },
        },
        {
          platform: {
            id: 3,
            name: 'Xbox',
            slug: 'xbox',
          },
        },
        {
          platform: {
            id: 8,
            name: 'Android',
            slug: 'android',
          },
        },
        {
          platform: {
            id: 5,
            name: 'Apple Macintosh',
            slug: 'mac',
          },
        },
        {
          platform: {
            id: 6,
            name: 'Linux',
            slug: 'linux',
          },
        },
        {
          platform: {
            id: 7,
            name: 'Nintendo',
            slug: 'nintendo',
          },
        },
        {
          platform: {
            id: 14,
            name: 'Web',
            slug: 'web',
          },
        },
      ],
      genres: [
        {
          id: 83,
          name: 'Platformer',
          slug: 'platformer',
        },
        {
          id: 51,
          name: 'Indie',
          slug: 'indie',
        },
      ],
    },
    {
      slug: 'assassins-creed-iv-black-flag',
      name: 'Assassin’s Creed IV: Black Flag',
      playtime: 25,
      platforms: [
        {
          platform: {
            id: 4,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 18,
            name: 'PlayStation 4',
            slug: 'playstation4',
          },
        },
        {
          platform: {
            id: 1,
            name: 'Xbox One',
            slug: 'xbox-one',
          },
        },
        {
          platform: {
            id: 7,
            name: 'Nintendo Switch',
            slug: 'nintendo-switch',
          },
        },
        {
          platform: {
            id: 14,
            name: 'Xbox 360',
            slug: 'xbox360',
          },
        },
        {
          platform: {
            id: 16,
            name: 'PlayStation 3',
            slug: 'playstation3',
          },
        },
        {
          platform: {
            id: 10,
            name: 'Wii U',
            slug: 'wii-u',
          },
        },
      ],
      stores: [
        {
          store: {
            id: 1,
            name: 'Steam',
            slug: 'steam',
          },
        },
        {
          store: {
            id: 3,
            name: 'PlayStation Store',
            slug: 'playstation-store',
          },
        },
        {
          store: {
            id: 2,
            name: 'Xbox Store',
            slug: 'xbox-store',
          },
        },
        {
          store: {
            id: 6,
            name: 'Nintendo Store',
            slug: 'nintendo',
          },
        },
        {
          store: {
            id: 7,
            name: 'Xbox 360 Store',
            slug: 'xbox360',
          },
        },
      ],
      released: '2013-10-29',
      tba: false,
      background_image:
        'https://media.rawg.io/media/games/849/849414b978db37d4563ff9e4b0d3a787.jpg',
      rating: 4.13,
      rating_top: 4,
      ratings: [
        {
          id: 4,
          title: 'recommended',
          count: 1142,
          percent: 48.19,
        },
        {
          id: 5,
          title: 'exceptional',
          count: 839,
          percent: 35.4,
        },
        {
          id: 3,
          title: 'meh',
          count: 313,
          percent: 13.21,
        },
        {
          id: 1,
          title: 'skip',
          count: 76,
          percent: 3.21,
        },
      ],
      ratings_count: 2351,
      reviews_text_count: 13,
      added: 8627,
      added_by_status: {
        yet: 422,
        owned: 4800,
        beaten: 2434,
        toplay: 240,
        dropped: 623,
        playing: 108,
      },
      metacritic: 85,
      suggestions_count: 701,
      updated: '2023-07-13T10:27:38',
      id: 3841,
      score: null,
      clip: null,
      tags: [
        {
          id: 31,
          name: 'Singleplayer',
          slug: 'singleplayer',
          language: 'eng',
          games_count: 206544,
          image_background:
            'https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg',
        },
        {
          id: 42396,
          name: 'Для одного игрока',
          slug: 'dlia-odnogo-igroka',
          language: 'rus',
          games_count: 35171,
          image_background:
            'https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg',
        },
        {
          id: 42417,
          name: 'Экшен',
          slug: 'ekshen',
          language: 'rus',
          games_count: 32438,
          image_background:
            'https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg',
        },
        {
          id: 42392,
          name: 'Приключение',
          slug: 'prikliuchenie',
          language: 'rus',
          games_count: 30382,
          image_background:
            'https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg',
        },
        {
          id: 7,
          name: 'Multiplayer',
          slug: 'multiplayer',
          language: 'eng',
          games_count: 35108,
          image_background:
            'https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg',
        },
        {
          id: 13,
          name: 'Atmospheric',
          slug: 'atmospheric',
          language: 'eng',
          games_count: 29635,
          image_background:
            'https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg',
        },
        {
          id: 42400,
          name: 'Атмосфера',
          slug: 'atmosfera',
          language: 'rus',
          games_count: 6083,
          image_background:
            'https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg',
        },
        {
          id: 42425,
          name: 'Для нескольких игроков',
          slug: 'dlia-neskolkikh-igrokov',
          language: 'rus',
          games_count: 7893,
          image_background:
            'https://media.rawg.io/media/games/713/713269608dc8f2f40f5a670a14b2de94.jpg',
        },
        {
          id: 42394,
          name: 'Глубокий сюжет',
          slug: 'glubokii-siuzhet',
          language: 'rus',
          games_count: 9153,
          image_background:
            'https://media.rawg.io/media/games/b7b/b7b8381707152afc7d91f5d95de70e39.jpg',
        },
        {
          id: 24,
          name: 'RPG',
          slug: 'rpg',
          language: 'eng',
          games_count: 17413,
          image_background:
            'https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg',
        },
        {
          id: 42412,
          name: 'Ролевая игра',
          slug: 'rolevaia-igra',
          language: 'rus',
          games_count: 13830,
          image_background:
            'https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg',
        },
        {
          id: 118,
          name: 'Story Rich',
          slug: 'story-rich',
          language: 'eng',
          games_count: 18334,
          image_background:
            'https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg',
        },
        {
          id: 42442,
          name: 'Открытый мир',
          slug: 'otkrytyi-mir',
          language: 'rus',
          games_count: 4494,
          image_background:
            'https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg',
        },
        {
          id: 36,
          name: 'Open World',
          slug: 'open-world',
          language: 'eng',
          games_count: 6316,
          image_background:
            'https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg',
        },
        {
          id: 149,
          name: 'Third Person',
          slug: 'third-person',
          language: 'eng',
          games_count: 9504,
          image_background:
            'https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg',
        },
        {
          id: 42441,
          name: 'От третьего лица',
          slug: 'ot-tretego-litsa',
          language: 'rus',
          games_count: 5015,
          image_background:
            'https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg',
        },
        {
          id: 6,
          name: 'Exploration',
          slug: 'exploration',
          language: 'eng',
          games_count: 19523,
          image_background:
            'https://media.rawg.io/media/games/9aa/9aa42d16d425fa6f179fc9dc2f763647.jpg',
        },
        {
          id: 37,
          name: 'Sandbox',
          slug: 'sandbox',
          language: 'eng',
          games_count: 5956,
          image_background:
            'https://media.rawg.io/media/games/c50/c5085506fe4b5e20fc7aa5ace842c20b.jpg',
        },
        {
          id: 42444,
          name: 'Песочница',
          slug: 'pesochnitsa',
          language: 'rus',
          games_count: 3191,
          image_background:
            'https://media.rawg.io/media/games/15c/15c95a4915f88a3e89c821526afe05fc.jpg',
        },
        {
          id: 42464,
          name: 'Исследование',
          slug: 'issledovanie',
          language: 'rus',
          games_count: 2979,
          image_background:
            'https://media.rawg.io/media/games/174/1743b3dd185bda4a7be349347d4064df.jpg',
        },
        {
          id: 15,
          name: 'Stealth',
          slug: 'stealth',
          language: 'eng',
          games_count: 5742,
          image_background:
            'https://media.rawg.io/media/games/7ac/7aca7ccf0e70cd0974cb899ab9e5158e.jpg',
        },
        {
          id: 42439,
          name: 'Стелс',
          slug: 'stels',
          language: 'rus',
          games_count: 1597,
          image_background:
            'https://media.rawg.io/media/games/bce/bce62fbc7cf74bf6a1a37340993ec148.jpg',
        },
        {
          id: 97,
          name: 'Action RPG',
          slug: 'action-rpg',
          language: 'eng',
          games_count: 5761,
          image_background:
            'https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg',
        },
        {
          id: 42489,
          name: 'Ролевой экшен',
          slug: 'rolevoi-ekshen',
          language: 'rus',
          games_count: 2740,
          image_background:
            'https://media.rawg.io/media/games/21a/21ad672cedee9b4378abb6c2d2e626ee.jpg',
        },
        {
          id: 69,
          name: 'Action-Adventure',
          slug: 'action-adventure',
          language: 'eng',
          games_count: 13616,
          image_background:
            'https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg',
        },
        {
          id: 42529,
          name: 'Для взрослых',
          slug: 'dlia-vzroslykh',
          language: 'rus',
          games_count: 2035,
          image_background:
            'https://media.rawg.io/media/games/5fa/5fae5fec3c943179e09da67a4427d68f.jpg',
        },
        {
          id: 42490,
          name: 'Приключенческий экшен',
          slug: 'prikliuchencheskii-ekshen',
          language: 'rus',
          games_count: 5999,
          image_background:
            'https://media.rawg.io/media/games/708/7080e6c87e0825cb02888bf3c44b3889.jpg',
        },
        {
          id: 192,
          name: 'Mature',
          slug: 'mature',
          language: 'eng',
          games_count: 2222,
          image_background:
            'https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg',
        },
        {
          id: 42403,
          name: 'История',
          slug: 'istoriia',
          language: 'rus',
          games_count: 940,
          image_background:
            'https://media.rawg.io/media/games/a86/a86ce0afaf2d5ec2b0f048989f01795e.jpg',
        },
        {
          id: 89,
          name: 'Historical',
          slug: 'historical',
          language: 'eng',
          games_count: 2601,
          image_background:
            'https://media.rawg.io/media/games/9f1/9f189c639f70f91166df415811a8b525.jpg',
        },
        {
          id: 42643,
          name: 'Паркур',
          slug: 'parkur-2',
          language: 'rus',
          games_count: 853,
          image_background:
            'https://media.rawg.io/media/games/341/3413d7275fb1e919f00a925df8288b77.jpg',
        },
        {
          id: 188,
          name: 'Parkour',
          slug: 'parkour',
          language: 'eng',
          games_count: 3172,
          image_background:
            'https://media.rawg.io/media/games/3d9/3d9bac98d79bcd2d445f829e8d6be902.jpg',
        },
        {
          id: 278,
          name: 'Assassin',
          slug: 'assassin',
          language: 'eng',
          games_count: 742,
          image_background:
            'https://media.rawg.io/media/games/858/858c016de0cf7bc21a57dcc698a04a0c.jpg',
        },
        {
          id: 42440,
          name: 'Ассассины',
          slug: 'assassiny',
          language: 'rus',
          games_count: 264,
          image_background:
            'https://media.rawg.io/media/games/67f/67f62d1f062a6164f57575e0604ee9f6.jpg',
        },
        {
          id: 255,
          name: 'Pirates',
          slug: 'pirates',
          language: 'eng',
          games_count: 2053,
          image_background:
            'https://media.rawg.io/media/games/41a/41a648b954d9a750b2595995b113e684.jpg',
        },
        {
          id: 42499,
          name: 'Пираты',
          slug: 'piraty',
          language: 'rus',
          games_count: 355,
          image_background:
            'https://media.rawg.io/media/screenshots/b4b/b4bc9b2b8be2fb16d20d7d437f86cd72.jpg',
        },
        {
          id: 42680,
          name: 'Морские бои',
          slug: 'morskie-boi',
          language: 'rus',
          games_count: 174,
          image_background:
            'https://media.rawg.io/media/screenshots/11b/11b749091774b0ae370ca9605bf5faba.jpg',
        },
        {
          id: 256,
          name: 'Naval',
          slug: 'naval',
          language: 'eng',
          games_count: 259,
          image_background:
            'https://media.rawg.io/media/screenshots/8d5/8d5a29af32d359d57d196f56876c9639.jpg',
        },
      ],
      esrb_rating: {
        id: 4,
        name: 'Mature',
        slug: 'mature',
        name_en: 'Mature',
        name_ru: 'С 17 лет',
      },
      user_game: null,
      reviews_count: 2370,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      short_screenshots: [
        {
          id: -1,
          image:
            'https://media.rawg.io/media/games/849/849414b978db37d4563ff9e4b0d3a787.jpg',
        },
        {
          id: 32698,
          image:
            'https://media.rawg.io/media/screenshots/46d/46de97777c05efb26597b215735dcd84.jpg',
        },
        {
          id: 32699,
          image:
            'https://media.rawg.io/media/screenshots/162/162503bb903edd7cfddf2a49ecdf5b7d.jpg',
        },
        {
          id: 32700,
          image:
            'https://media.rawg.io/media/screenshots/9ad/9ad8aa17d3f2be9545273f895e481280.jpg',
        },
        {
          id: 32701,
          image:
            'https://media.rawg.io/media/screenshots/b02/b02b168d04889304aac23e47f5314721.jpg',
        },
        {
          id: 32702,
          image:
            'https://media.rawg.io/media/screenshots/ad8/ad8439bc9ed7d2f88deb836c9cff23d2.jpg',
        },
        {
          id: 32703,
          image:
            'https://media.rawg.io/media/screenshots/398/398abeb965880c1c3310a6a4ad9c71b8.jpg',
        },
      ],
      parent_platforms: [
        {
          platform: {
            id: 1,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 2,
            name: 'PlayStation',
            slug: 'playstation',
          },
        },
        {
          platform: {
            id: 3,
            name: 'Xbox',
            slug: 'xbox',
          },
        },
        {
          platform: {
            id: 7,
            name: 'Nintendo',
            slug: 'nintendo',
          },
        },
      ],
      genres: [
        {
          id: 4,
          name: 'Action',
          slug: 'action',
        },
      ],
    },
    {
      slug: 'hellblade-senuas-sacrifice',
      name: "Hellblade: Senua's Sacrifice",
      playtime: 6,
      platforms: [
        {
          platform: {
            id: 4,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 1,
            name: 'Xbox One',
            slug: 'xbox-one',
          },
        },
        {
          platform: {
            id: 18,
            name: 'PlayStation 4',
            slug: 'playstation4',
          },
        },
        {
          platform: {
            id: 7,
            name: 'Nintendo Switch',
            slug: 'nintendo-switch',
          },
        },
      ],
      stores: [
        {
          store: {
            id: 1,
            name: 'Steam',
            slug: 'steam',
          },
        },
        {
          store: {
            id: 3,
            name: 'PlayStation Store',
            slug: 'playstation-store',
          },
        },
        {
          store: {
            id: 2,
            name: 'Xbox Store',
            slug: 'xbox-store',
          },
        },
        {
          store: {
            id: 5,
            name: 'GOG',
            slug: 'gog',
          },
        },
        {
          store: {
            id: 6,
            name: 'Nintendo Store',
            slug: 'nintendo',
          },
        },
      ],
      released: '2017-08-07',
      tba: false,
      background_image:
        'https://media.rawg.io/media/games/63f/63f0e68688cad279ed38cde931dbfcdb.jpg',
      rating: 4.24,
      rating_top: 5,
      ratings: [
        {
          id: 5,
          title: 'exceptional',
          count: 1047,
          percent: 49.25,
        },
        {
          id: 4,
          title: 'recommended',
          count: 736,
          percent: 34.62,
        },
        {
          id: 3,
          title: 'meh',
          count: 249,
          percent: 11.71,
        },
        {
          id: 1,
          title: 'skip',
          count: 94,
          percent: 4.42,
        },
      ],
      ratings_count: 2075,
      reviews_text_count: 36,
      added: 8596,
      added_by_status: {
        yet: 640,
        owned: 4934,
        beaten: 1634,
        toplay: 766,
        dropped: 444,
        playing: 178,
      },
      metacritic: 83,
      suggestions_count: 466,
      updated: '2023-07-13T05:27:54',
      id: 12536,
      score: null,
      clip: null,
      tags: [
        {
          id: 31,
          name: 'Singleplayer',
          slug: 'singleplayer',
          language: 'eng',
          games_count: 206544,
          image_background:
            'https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg',
        },
        {
          id: 42396,
          name: 'Для одного игрока',
          slug: 'dlia-odnogo-igroka',
          language: 'rus',
          games_count: 35171,
          image_background:
            'https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg',
        },
        {
          id: 42417,
          name: 'Экшен',
          slug: 'ekshen',
          language: 'rus',
          games_count: 32438,
          image_background:
            'https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg',
        },
        {
          id: 42392,
          name: 'Приключение',
          slug: 'prikliuchenie',
          language: 'rus',
          games_count: 30382,
          image_background:
            'https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg',
        },
        {
          id: 40847,
          name: 'Steam Achievements',
          slug: 'steam-achievements',
          language: 'eng',
          games_count: 30840,
          image_background:
            'https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg',
        },
        {
          id: 42398,
          name: 'Инди',
          slug: 'indi-2',
          language: 'rus',
          games_count: 46233,
          image_background:
            'https://media.rawg.io/media/games/9fa/9fa63622543e5d4f6d99aa9d73b043de.jpg',
        },
        {
          id: 40836,
          name: 'Full controller support',
          slug: 'full-controller-support',
          language: 'eng',
          games_count: 14476,
          image_background:
            'https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg',
        },
        {
          id: 13,
          name: 'Atmospheric',
          slug: 'atmospheric',
          language: 'eng',
          games_count: 29635,
          image_background:
            'https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg',
        },
        {
          id: 40849,
          name: 'Steam Cloud',
          slug: 'steam-cloud',
          language: 'eng',
          games_count: 14345,
          image_background:
            'https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg',
        },
        {
          id: 42400,
          name: 'Атмосфера',
          slug: 'atmosfera',
          language: 'rus',
          games_count: 6083,
          image_background:
            'https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg',
        },
        {
          id: 7808,
          name: 'steam-trading-cards',
          slug: 'steam-trading-cards',
          language: 'eng',
          games_count: 7571,
          image_background:
            'https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg',
        },
        {
          id: 42394,
          name: 'Глубокий сюжет',
          slug: 'glubokii-siuzhet',
          language: 'rus',
          games_count: 9153,
          image_background:
            'https://media.rawg.io/media/games/b7b/b7b8381707152afc7d91f5d95de70e39.jpg',
        },
        {
          id: 118,
          name: 'Story Rich',
          slug: 'story-rich',
          language: 'eng',
          games_count: 18334,
          image_background:
            'https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg',
        },
        {
          id: 149,
          name: 'Third Person',
          slug: 'third-person',
          language: 'eng',
          games_count: 9504,
          image_background:
            'https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg',
        },
        {
          id: 42441,
          name: 'От третьего лица',
          slug: 'ot-tretego-litsa',
          language: 'rus',
          games_count: 5015,
          image_background:
            'https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg',
        },
        {
          id: 16,
          name: 'Horror',
          slug: 'horror',
          language: 'eng',
          games_count: 41984,
          image_background:
            'https://media.rawg.io/media/games/7c4/7c448374df84b607f67ce9182a3a3ca7.jpg',
        },
        {
          id: 42480,
          name: 'Фэнтези',
          slug: 'fentezi',
          language: 'rus',
          games_count: 8364,
          image_background:
            'https://media.rawg.io/media/games/8d4/8d46786ca86b1d95f3dc7e700e2dc4dd.jpg',
        },
        {
          id: 64,
          name: 'Fantasy',
          slug: 'fantasy',
          language: 'eng',
          games_count: 24622,
          image_background:
            'https://media.rawg.io/media/screenshots/88b/88b5f27f07d6ca2f8a3cd0b36e03a670.jpg',
        },
        {
          id: 189,
          name: 'Female Protagonist',
          slug: 'female-protagonist',
          language: 'eng',
          games_count: 10614,
          image_background:
            'https://media.rawg.io/media/games/5a4/5a44112251d70a25291cc33757220fce.jpg',
        },
        {
          id: 42404,
          name: 'Женщина-протагонист',
          slug: 'zhenshchina-protagonist',
          language: 'rus',
          games_count: 2413,
          image_background:
            'https://media.rawg.io/media/games/3cf/3cff89996570cf29a10eb9cd967dcf73.jpg',
        },
        {
          id: 42402,
          name: 'Насилие',
          slug: 'nasilie',
          language: 'rus',
          games_count: 4884,
          image_background:
            'https://media.rawg.io/media/games/858/858c016de0cf7bc21a57dcc698a04a0c.jpg',
        },
        {
          id: 34,
          name: 'Violent',
          slug: 'violent',
          language: 'eng',
          games_count: 5927,
          image_background:
            'https://media.rawg.io/media/games/5fa/5fae5fec3c943179e09da67a4427d68f.jpg',
        },
        {
          id: 69,
          name: 'Action-Adventure',
          slug: 'action-adventure',
          language: 'eng',
          games_count: 13616,
          image_background:
            'https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg',
        },
        {
          id: 42477,
          name: 'Мрачная',
          slug: 'mrachnaia',
          language: 'rus',
          games_count: 3664,
          image_background:
            'https://media.rawg.io/media/games/7ac/7aca7ccf0e70cd0974cb899ab9e5158e.jpg',
        },
        {
          id: 41,
          name: 'Dark',
          slug: 'dark',
          language: 'eng',
          games_count: 14171,
          image_background:
            'https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg',
        },
        {
          id: 42487,
          name: 'Слэшер',
          slug: 'slesher',
          language: 'rus',
          games_count: 1995,
          image_background:
            'https://media.rawg.io/media/games/1f1/1f1888e1308959dfd3be4c144a81d19c.jpg',
        },
        {
          id: 68,
          name: 'Hack and Slash',
          slug: 'hack-and-slash',
          language: 'eng',
          games_count: 3480,
          image_background:
            'https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg',
        },
        {
          id: 42490,
          name: 'Приключенческий экшен',
          slug: 'prikliuchencheskii-ekshen',
          language: 'rus',
          games_count: 5999,
          image_background:
            'https://media.rawg.io/media/games/708/7080e6c87e0825cb02888bf3c44b3889.jpg',
        },
        {
          id: 42506,
          name: 'Тёмное фэнтези',
          slug: 'tiomnoe-fentezi',
          language: 'rus',
          games_count: 1970,
          image_background:
            'https://media.rawg.io/media/games/511/5116b4524cea34c6b3f12e0ca027d850.jpg',
        },
        {
          id: 42460,
          name: 'Реализм',
          slug: 'realizm',
          language: 'rus',
          games_count: 3914,
          image_background:
            'https://media.rawg.io/media/games/367/367463d43c2a1465f27e830b5b1334ee.jpg',
        },
        {
          id: 40,
          name: 'Dark Fantasy',
          slug: 'dark-fantasy',
          language: 'eng',
          games_count: 3283,
          image_background:
            'https://media.rawg.io/media/games/a6c/a6ccd34125c594abf1a9c9821b9a715d.jpg',
        },
        {
          id: 42555,
          name: 'Симулятор ходьбы',
          slug: 'simuliator-khodby',
          language: 'rus',
          games_count: 1850,
          image_background:
            'https://media.rawg.io/media/games/62c/62c7c8b28a27b83680b22fb9d33fc619.jpg',
        },
        {
          id: 77,
          name: 'Realistic',
          slug: 'realistic',
          language: 'eng',
          games_count: 3939,
          image_background:
            'https://media.rawg.io/media/games/786/7863e587bac630de82fca50d799236a9.jpg',
        },
        {
          id: 91,
          name: 'Walking Simulator',
          slug: 'walking-simulator',
          language: 'eng',
          games_count: 6288,
          image_background:
            'https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg',
        },
        {
          id: 270,
          name: 'Blood',
          slug: 'blood',
          language: 'eng',
          games_count: 1946,
          image_background:
            'https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg',
        },
        {
          id: 42577,
          name: 'Кровь',
          slug: 'krov',
          language: 'rus',
          games_count: 358,
          image_background:
            'https://media.rawg.io/media/screenshots/a97/a97b0e257daca77c23cf93ac9fff7487.jpg',
        },
        {
          id: 42655,
          name: 'Психологическая',
          slug: 'psikhologicheskaia',
          language: 'rus',
          games_count: 1036,
          image_background:
            'https://media.rawg.io/media/screenshots/22d/22dffeba4c72db594361d62f6b282c2b.jpg',
        },
        {
          id: 108,
          name: 'Mythology',
          slug: 'mythology',
          language: 'eng',
          games_count: 1700,
          image_background:
            'https://media.rawg.io/media/games/88a/88af17cc08783ccdd1608ae63c47eeac.jpg',
        },
        {
          id: 42610,
          name: 'Мифология',
          slug: 'mifologiia',
          language: 'rus',
          games_count: 683,
          image_background:
            'https://media.rawg.io/media/screenshots/d96/d968719f37eaba04920ba2cfe2b7813a.jpg',
        },
        {
          id: 285,
          name: 'Psychological',
          slug: 'psychological',
          language: 'eng',
          games_count: 1134,
          image_background:
            'https://media.rawg.io/media/screenshots/f9f/f9fe0c135bbd65142e9094178b43697b.jpg',
        },
      ],
      esrb_rating: {
        id: 4,
        name: 'Mature',
        slug: 'mature',
        name_en: 'Mature',
        name_ru: 'С 17 лет',
      },
      user_game: null,
      reviews_count: 2126,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      short_screenshots: [
        {
          id: -1,
          image:
            'https://media.rawg.io/media/games/63f/63f0e68688cad279ed38cde931dbfcdb.jpg',
        },
        {
          id: 105404,
          image:
            'https://media.rawg.io/media/screenshots/662/66282cb9d0c743ca5d8cb8a1585c8207.jpg',
        },
        {
          id: 105405,
          image:
            'https://media.rawg.io/media/screenshots/ab2/ab28d353366cb9ed674758a25a3763e7.jpg',
        },
        {
          id: 105406,
          image:
            'https://media.rawg.io/media/screenshots/e43/e4362535f3d105d23315c5780ed67f8b.jpg',
        },
        {
          id: 105407,
          image:
            'https://media.rawg.io/media/screenshots/567/567f1353c4163e59236450ea29136b51.jpg',
        },
        {
          id: 218473,
          image:
            'https://media.rawg.io/media/screenshots/d83/d83116e14bfdfeb89a530334072c3051.jpg',
        },
        {
          id: 218476,
          image:
            'https://media.rawg.io/media/screenshots/261/2616c962157e03b5adae8686427aaa18.jpg',
        },
      ],
      parent_platforms: [
        {
          platform: {
            id: 1,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 2,
            name: 'PlayStation',
            slug: 'playstation',
          },
        },
        {
          platform: {
            id: 3,
            name: 'Xbox',
            slug: 'xbox',
          },
        },
        {
          platform: {
            id: 7,
            name: 'Nintendo',
            slug: 'nintendo',
          },
        },
      ],
      genres: [
        {
          id: 51,
          name: 'Indie',
          slug: 'indie',
        },
        {
          id: 3,
          name: 'Adventure',
          slug: 'adventure',
        },
        {
          id: 4,
          name: 'Action',
          slug: 'action',
        },
      ],
    },
    {
      slug: 'borderlands-the-pre-sequel',
      name: 'Borderlands: The Pre-Sequel',
      playtime: 6,
      platforms: [
        {
          platform: {
            id: 4,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 18,
            name: 'PlayStation 4',
            slug: 'playstation4',
          },
        },
        {
          platform: {
            id: 7,
            name: 'Nintendo Switch',
            slug: 'nintendo-switch',
          },
        },
        {
          platform: {
            id: 21,
            name: 'Android',
            slug: 'android',
          },
        },
        {
          platform: {
            id: 5,
            name: 'macOS',
            slug: 'macos',
          },
        },
        {
          platform: {
            id: 6,
            name: 'Linux',
            slug: 'linux',
          },
        },
        {
          platform: {
            id: 14,
            name: 'Xbox 360',
            slug: 'xbox360',
          },
        },
        {
          platform: {
            id: 16,
            name: 'PlayStation 3',
            slug: 'playstation3',
          },
        },
      ],
      stores: [
        {
          store: {
            id: 1,
            name: 'Steam',
            slug: 'steam',
          },
        },
        {
          store: {
            id: 3,
            name: 'PlayStation Store',
            slug: 'playstation-store',
          },
        },
        {
          store: {
            id: 4,
            name: 'App Store',
            slug: 'apple-appstore',
          },
        },
        {
          store: {
            id: 7,
            name: 'Xbox 360 Store',
            slug: 'xbox360',
          },
        },
        {
          store: {
            id: 8,
            name: 'Google Play',
            slug: 'google-play',
          },
        },
      ],
      released: '2014-10-13',
      tba: false,
      background_image:
        'https://media.rawg.io/media/games/530/5302dd22a190e664531236ca724e8726.jpg',
      rating: 3.55,
      rating_top: 4,
      ratings: [
        {
          id: 4,
          title: 'recommended',
          count: 668,
          percent: 51.9,
        },
        {
          id: 3,
          title: 'meh',
          count: 350,
          percent: 27.2,
        },
        {
          id: 5,
          title: 'exceptional',
          count: 145,
          percent: 11.27,
        },
        {
          id: 1,
          title: 'skip',
          count: 124,
          percent: 9.63,
        },
      ],
      ratings_count: 1279,
      reviews_text_count: 6,
      added: 8205,
      added_by_status: {
        yet: 711,
        owned: 6024,
        beaten: 761,
        toplay: 134,
        dropped: 499,
        playing: 76,
      },
      metacritic: 75,
      suggestions_count: 553,
      updated: '2023-07-14T07:47:48',
      id: 3543,
      score: null,
      clip: null,
      tags: [
        {
          id: 31,
          name: 'Singleplayer',
          slug: 'singleplayer',
          language: 'eng',
          games_count: 206544,
          image_background:
            'https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg',
        },
        {
          id: 42396,
          name: 'Для одного игрока',
          slug: 'dlia-odnogo-igroka',
          language: 'rus',
          games_count: 35171,
          image_background:
            'https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg',
        },
        {
          id: 42417,
          name: 'Экшен',
          slug: 'ekshen',
          language: 'rus',
          games_count: 32438,
          image_background:
            'https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg',
        },
        {
          id: 42392,
          name: 'Приключение',
          slug: 'prikliuchenie',
          language: 'rus',
          games_count: 30382,
          image_background:
            'https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg',
        },
        {
          id: 40847,
          name: 'Steam Achievements',
          slug: 'steam-achievements',
          language: 'eng',
          games_count: 30840,
          image_background:
            'https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg',
        },
        {
          id: 7,
          name: 'Multiplayer',
          slug: 'multiplayer',
          language: 'eng',
          games_count: 35108,
          image_background:
            'https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg',
        },
        {
          id: 40836,
          name: 'Full controller support',
          slug: 'full-controller-support',
          language: 'eng',
          games_count: 14476,
          image_background:
            'https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg',
        },
        {
          id: 13,
          name: 'Atmospheric',
          slug: 'atmospheric',
          language: 'eng',
          games_count: 29635,
          image_background:
            'https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg',
        },
        {
          id: 40849,
          name: 'Steam Cloud',
          slug: 'steam-cloud',
          language: 'eng',
          games_count: 14345,
          image_background:
            'https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg',
        },
        {
          id: 42400,
          name: 'Атмосфера',
          slug: 'atmosfera',
          language: 'rus',
          games_count: 6083,
          image_background:
            'https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg',
        },
        {
          id: 42425,
          name: 'Для нескольких игроков',
          slug: 'dlia-neskolkikh-igrokov',
          language: 'rus',
          games_count: 7893,
          image_background:
            'https://media.rawg.io/media/games/713/713269608dc8f2f40f5a670a14b2de94.jpg',
        },
        {
          id: 7808,
          name: 'steam-trading-cards',
          slug: 'steam-trading-cards',
          language: 'eng',
          games_count: 7571,
          image_background:
            'https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg',
        },
        {
          id: 24,
          name: 'RPG',
          slug: 'rpg',
          language: 'eng',
          games_count: 17413,
          image_background:
            'https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg',
        },
        {
          id: 18,
          name: 'Co-op',
          slug: 'co-op',
          language: 'eng',
          games_count: 9892,
          image_background:
            'https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg',
        },
        {
          id: 42412,
          name: 'Ролевая игра',
          slug: 'rolevaia-igra',
          language: 'rus',
          games_count: 13830,
          image_background:
            'https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg',
        },
        {
          id: 42442,
          name: 'Открытый мир',
          slug: 'otkrytyi-mir',
          language: 'rus',
          games_count: 4494,
          image_background:
            'https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg',
        },
        {
          id: 36,
          name: 'Open World',
          slug: 'open-world',
          language: 'eng',
          games_count: 6316,
          image_background:
            'https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg',
        },
        {
          id: 411,
          name: 'cooperative',
          slug: 'cooperative',
          language: 'eng',
          games_count: 4104,
          image_background:
            'https://media.rawg.io/media/games/476/476178ef18ab0534771d099f51cdc694.jpg',
        },
        {
          id: 42428,
          name: 'Шутер',
          slug: 'shuter',
          language: 'rus',
          games_count: 6857,
          image_background:
            'https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg',
        },
        {
          id: 8,
          name: 'First-Person',
          slug: 'first-person',
          language: 'eng',
          games_count: 28676,
          image_background:
            'https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg',
        },
        {
          id: 42429,
          name: 'От первого лица',
          slug: 'ot-pervogo-litsa',
          language: 'rus',
          games_count: 7731,
          image_background:
            'https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg',
        },
        {
          id: 42435,
          name: 'Шедевр',
          slug: 'shedevr',
          language: 'rus',
          games_count: 1059,
          image_background:
            'https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg',
        },
        {
          id: 32,
          name: 'Sci-fi',
          slug: 'sci-fi',
          language: 'eng',
          games_count: 17236,
          image_background:
            'https://media.rawg.io/media/games/198/1988a337305e008b41d7f536ce9b73f6.jpg',
        },
        {
          id: 42423,
          name: 'Научная фантастика',
          slug: 'nauchnaia-fantastika',
          language: 'rus',
          games_count: 6108,
          image_background:
            'https://media.rawg.io/media/games/8e4/8e4de3f54ac659e08a7ba6a2b731682a.jpg',
        },
        {
          id: 30,
          name: 'FPS',
          slug: 'fps',
          language: 'eng',
          games_count: 12151,
          image_background:
            'https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg',
        },
        {
          id: 42427,
          name: 'Шутер от первого лица',
          slug: 'shuter-ot-pervogo-litsa',
          language: 'rus',
          games_count: 4139,
          image_background:
            'https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg',
        },
        {
          id: 42482,
          name: 'Смешная',
          slug: 'smeshnaia',
          language: 'rus',
          games_count: 6600,
          image_background:
            'https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg',
        },
        {
          id: 9,
          name: 'Online Co-Op',
          slug: 'online-co-op',
          language: 'eng',
          games_count: 4438,
          image_background:
            'https://media.rawg.io/media/screenshots/88b/88b5f27f07d6ca2f8a3cd0b36e03a670.jpg',
        },
        {
          id: 4,
          name: 'Funny',
          slug: 'funny',
          language: 'eng',
          games_count: 22604,
          image_background:
            'https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg',
        },
        {
          id: 189,
          name: 'Female Protagonist',
          slug: 'female-protagonist',
          language: 'eng',
          games_count: 10614,
          image_background:
            'https://media.rawg.io/media/games/5a4/5a44112251d70a25291cc33757220fce.jpg',
        },
        {
          id: 42481,
          name: 'Юмор',
          slug: 'iumor',
          language: 'rus',
          games_count: 4260,
          image_background:
            'https://media.rawg.io/media/games/e04/e04963f3ac4c4fa83a1dc0b9231e50db.jpg',
        },
        {
          id: 123,
          name: 'Comedy',
          slug: 'comedy',
          language: 'eng',
          games_count: 10929,
          image_background:
            'https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg',
        },
        {
          id: 42433,
          name: 'Совместная игра по сети',
          slug: 'sovmestnaia-igra-po-seti',
          language: 'rus',
          games_count: 1229,
          image_background:
            'https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg',
        },
        {
          id: 97,
          name: 'Action RPG',
          slug: 'action-rpg',
          language: 'eng',
          games_count: 5761,
          image_background:
            'https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg',
        },
        {
          id: 42489,
          name: 'Ролевой экшен',
          slug: 'rolevoi-ekshen',
          language: 'rus',
          games_count: 2740,
          image_background:
            'https://media.rawg.io/media/games/21a/21ad672cedee9b4378abb6c2d2e626ee.jpg',
        },
        {
          id: 25,
          name: 'Space',
          slug: 'space',
          language: 'eng',
          games_count: 41805,
          image_background:
            'https://media.rawg.io/media/games/ae1/ae1518c3dc1e847344661905fd2a8d16.jpg',
        },
        {
          id: 42422,
          name: 'Космос',
          slug: 'kosmos-2',
          language: 'rus',
          games_count: 3187,
          image_background:
            'https://media.rawg.io/media/games/3cf/3cff89996570cf29a10eb9cd967dcf73.jpg',
        },
        {
          id: 120,
          name: 'Memes',
          slug: 'memes',
          language: 'eng',
          games_count: 1578,
          image_background:
            'https://media.rawg.io/media/games/264/2642b17a7885f7abc4fd018e98943242.jpg',
        },
        {
          id: 42561,
          name: 'Мемы',
          slug: 'memy',
          language: 'rus',
          games_count: 1429,
          image_background:
            'https://media.rawg.io/media/games/08a/08aa92e004f13ad2d41127327314c3f9.jpg',
        },
        {
          id: 98,
          name: 'Loot',
          slug: 'loot',
          language: 'eng',
          games_count: 1939,
          image_background:
            'https://media.rawg.io/media/games/8be/8be1d2c12a8ff3fdb693d4df128f50f0.jpg',
        },
        {
          id: 42575,
          name: 'Лут',
          slug: 'lut',
          language: 'rus',
          games_count: 778,
          image_background:
            'https://media.rawg.io/media/games/0b2/0b240149610b8b20eac098b8071f575a.jpg',
        },
      ],
      esrb_rating: null,
      user_game: null,
      reviews_count: 1287,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      short_screenshots: [
        {
          id: -1,
          image:
            'https://media.rawg.io/media/games/530/5302dd22a190e664531236ca724e8726.jpg',
        },
        {
          id: 77681,
          image:
            'https://media.rawg.io/media/screenshots/ee9/ee9f6de36d4b0bdaf43bd10a2ec56f4a.jpg',
        },
        {
          id: 77682,
          image:
            'https://media.rawg.io/media/screenshots/6bd/6bd501390fb4e78141838c07a1a3580e.jpg',
        },
        {
          id: 77683,
          image:
            'https://media.rawg.io/media/screenshots/99b/99b2d12cf0c1d4a2492f632465c4cf71.jpg',
        },
        {
          id: 77684,
          image:
            'https://media.rawg.io/media/screenshots/579/5792b69c652c9b210122a686e9dd59e1.jpg',
        },
        {
          id: 77685,
          image:
            'https://media.rawg.io/media/screenshots/706/7063852169f86cd4e70440de419353e8.jpg',
        },
        {
          id: 77686,
          image:
            'https://media.rawg.io/media/screenshots/01c/01c6128a0c81ed34efd4433abea32a18.jpg',
        },
      ],
      parent_platforms: [
        {
          platform: {
            id: 1,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 2,
            name: 'PlayStation',
            slug: 'playstation',
          },
        },
        {
          platform: {
            id: 3,
            name: 'Xbox',
            slug: 'xbox',
          },
        },
        {
          platform: {
            id: 8,
            name: 'Android',
            slug: 'android',
          },
        },
        {
          platform: {
            id: 5,
            name: 'Apple Macintosh',
            slug: 'mac',
          },
        },
        {
          platform: {
            id: 6,
            name: 'Linux',
            slug: 'linux',
          },
        },
        {
          platform: {
            id: 7,
            name: 'Nintendo',
            slug: 'nintendo',
          },
        },
      ],
      genres: [
        {
          id: 2,
          name: 'Shooter',
          slug: 'shooter',
        },
        {
          id: 4,
          name: 'Action',
          slug: 'action',
        },
        {
          id: 5,
          name: 'RPG',
          slug: 'role-playing-games-rpg',
        },
      ],
    },
    {
      slug: 'metro-last-light-redux',
      name: 'Metro: Last Light Redux',
      playtime: 6,
      platforms: [
        {
          platform: {
            id: 4,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 1,
            name: 'Xbox One',
            slug: 'xbox-one',
          },
        },
        {
          platform: {
            id: 18,
            name: 'PlayStation 4',
            slug: 'playstation4',
          },
        },
        {
          platform: {
            id: 7,
            name: 'Nintendo Switch',
            slug: 'nintendo-switch',
          },
        },
        {
          platform: {
            id: 5,
            name: 'macOS',
            slug: 'macos',
          },
        },
        {
          platform: {
            id: 6,
            name: 'Linux',
            slug: 'linux',
          },
        },
      ],
      stores: [
        {
          store: {
            id: 1,
            name: 'Steam',
            slug: 'steam',
          },
        },
        {
          store: {
            id: 3,
            name: 'PlayStation Store',
            slug: 'playstation-store',
          },
        },
        {
          store: {
            id: 2,
            name: 'Xbox Store',
            slug: 'xbox-store',
          },
        },
        {
          store: {
            id: 4,
            name: 'App Store',
            slug: 'apple-appstore',
          },
        },
        {
          store: {
            id: 5,
            name: 'GOG',
            slug: 'gog',
          },
        },
        {
          store: {
            id: 6,
            name: 'Nintendo Store',
            slug: 'nintendo',
          },
        },
        {
          store: {
            id: 11,
            name: 'Epic Games',
            slug: 'epic-games',
          },
        },
      ],
      released: '2014-08-25',
      tba: false,
      background_image:
        'https://media.rawg.io/media/games/7a4/7a45e4cdc5b07f316d49cf147b083b27.jpg',
      rating: 4.12,
      rating_top: 4,
      ratings: [
        {
          id: 4,
          title: 'recommended',
          count: 829,
          percent: 55.08,
        },
        {
          id: 5,
          title: 'exceptional',
          count: 484,
          percent: 32.16,
        },
        {
          id: 3,
          title: 'meh',
          count: 139,
          percent: 9.24,
        },
        {
          id: 1,
          title: 'skip',
          count: 53,
          percent: 3.52,
        },
      ],
      ratings_count: 1488,
      reviews_text_count: 10,
      added: 7986,
      added_by_status: {
        yet: 631,
        owned: 5551,
        beaten: 1449,
        toplay: 143,
        dropped: 179,
        playing: 33,
      },
      metacritic: 76,
      suggestions_count: 587,
      updated: '2023-07-10T21:51:17',
      id: 3604,
      score: null,
      clip: null,
      tags: [
        {
          id: 31,
          name: 'Singleplayer',
          slug: 'singleplayer',
          language: 'eng',
          games_count: 206544,
          image_background:
            'https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg',
        },
        {
          id: 42396,
          name: 'Для одного игрока',
          slug: 'dlia-odnogo-igroka',
          language: 'rus',
          games_count: 35171,
          image_background:
            'https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg',
        },
        {
          id: 42417,
          name: 'Экшен',
          slug: 'ekshen',
          language: 'rus',
          games_count: 32438,
          image_background:
            'https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg',
        },
        {
          id: 42392,
          name: 'Приключение',
          slug: 'prikliuchenie',
          language: 'rus',
          games_count: 30382,
          image_background:
            'https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg',
        },
        {
          id: 40847,
          name: 'Steam Achievements',
          slug: 'steam-achievements',
          language: 'eng',
          games_count: 30840,
          image_background:
            'https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg',
        },
        {
          id: 7,
          name: 'Multiplayer',
          slug: 'multiplayer',
          language: 'eng',
          games_count: 35108,
          image_background:
            'https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg',
        },
        {
          id: 40836,
          name: 'Full controller support',
          slug: 'full-controller-support',
          language: 'eng',
          games_count: 14476,
          image_background:
            'https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg',
        },
        {
          id: 13,
          name: 'Atmospheric',
          slug: 'atmospheric',
          language: 'eng',
          games_count: 29635,
          image_background:
            'https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg',
        },
        {
          id: 40849,
          name: 'Steam Cloud',
          slug: 'steam-cloud',
          language: 'eng',
          games_count: 14345,
          image_background:
            'https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg',
        },
        {
          id: 42400,
          name: 'Атмосфера',
          slug: 'atmosfera',
          language: 'rus',
          games_count: 6083,
          image_background:
            'https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg',
        },
        {
          id: 42425,
          name: 'Для нескольких игроков',
          slug: 'dlia-neskolkikh-igrokov',
          language: 'rus',
          games_count: 7893,
          image_background:
            'https://media.rawg.io/media/games/713/713269608dc8f2f40f5a670a14b2de94.jpg',
        },
        {
          id: 7808,
          name: 'steam-trading-cards',
          slug: 'steam-trading-cards',
          language: 'eng',
          games_count: 7571,
          image_background:
            'https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg',
        },
        {
          id: 42394,
          name: 'Глубокий сюжет',
          slug: 'glubokii-siuzhet',
          language: 'rus',
          games_count: 9153,
          image_background:
            'https://media.rawg.io/media/games/b7b/b7b8381707152afc7d91f5d95de70e39.jpg',
        },
        {
          id: 118,
          name: 'Story Rich',
          slug: 'story-rich',
          language: 'eng',
          games_count: 18334,
          image_background:
            'https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg',
        },
        {
          id: 36,
          name: 'Open World',
          slug: 'open-world',
          language: 'eng',
          games_count: 6316,
          image_background:
            'https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg',
        },
        {
          id: 42428,
          name: 'Шутер',
          slug: 'shuter',
          language: 'rus',
          games_count: 6857,
          image_background:
            'https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg',
        },
        {
          id: 8,
          name: 'First-Person',
          slug: 'first-person',
          language: 'eng',
          games_count: 28676,
          image_background:
            'https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg',
        },
        {
          id: 42429,
          name: 'От первого лица',
          slug: 'ot-pervogo-litsa',
          language: 'rus',
          games_count: 7731,
          image_background:
            'https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg',
        },
        {
          id: 42435,
          name: 'Шедевр',
          slug: 'shedevr',
          language: 'rus',
          games_count: 1059,
          image_background:
            'https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg',
        },
        {
          id: 32,
          name: 'Sci-fi',
          slug: 'sci-fi',
          language: 'eng',
          games_count: 17236,
          image_background:
            'https://media.rawg.io/media/games/198/1988a337305e008b41d7f536ce9b73f6.jpg',
        },
        {
          id: 42423,
          name: 'Научная фантастика',
          slug: 'nauchnaia-fantastika',
          language: 'rus',
          games_count: 6108,
          image_background:
            'https://media.rawg.io/media/games/8e4/8e4de3f54ac659e08a7ba6a2b731682a.jpg',
        },
        {
          id: 16,
          name: 'Horror',
          slug: 'horror',
          language: 'eng',
          games_count: 41984,
          image_background:
            'https://media.rawg.io/media/games/7c4/7c448374df84b607f67ce9182a3a3ca7.jpg',
        },
        {
          id: 30,
          name: 'FPS',
          slug: 'fps',
          language: 'eng',
          games_count: 12151,
          image_background:
            'https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg',
        },
        {
          id: 42427,
          name: 'Шутер от первого лица',
          slug: 'shuter-ot-pervogo-litsa',
          language: 'rus',
          games_count: 4139,
          image_background:
            'https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg',
        },
        {
          id: 42420,
          name: 'Сложная',
          slug: 'slozhnaia',
          language: 'rus',
          games_count: 4508,
          image_background:
            'https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg',
        },
        {
          id: 49,
          name: 'Difficult',
          slug: 'difficult',
          language: 'eng',
          games_count: 12486,
          image_background:
            'https://media.rawg.io/media/games/1f1/1f1888e1308959dfd3be4c144a81d19c.jpg',
        },
        {
          id: 1,
          name: 'Survival',
          slug: 'survival',
          language: 'eng',
          games_count: 7286,
          image_background:
            'https://media.rawg.io/media/games/b54/b54598d1d5cc31899f4f0a7e3122a7b0.jpg',
        },
        {
          id: 42452,
          name: 'Выживание',
          slug: 'vyzhivanie',
          language: 'rus',
          games_count: 4774,
          image_background:
            'https://media.rawg.io/media/games/7f6/7f6cd70ba2ad57053b4847c13569f2d8.jpg',
        },
        {
          id: 15,
          name: 'Stealth',
          slug: 'stealth',
          language: 'eng',
          games_count: 5742,
          image_background:
            'https://media.rawg.io/media/games/7ac/7aca7ccf0e70cd0974cb899ab9e5158e.jpg',
        },
        {
          id: 42439,
          name: 'Стелс',
          slug: 'stels',
          language: 'rus',
          games_count: 1597,
          image_background:
            'https://media.rawg.io/media/games/bce/bce62fbc7cf74bf6a1a37340993ec148.jpg',
        },
        {
          id: 42406,
          name: 'Нагота',
          slug: 'nagota',
          language: 'rus',
          games_count: 4644,
          image_background:
            'https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg',
        },
        {
          id: 44,
          name: 'Nudity',
          slug: 'nudity',
          language: 'eng',
          games_count: 5029,
          image_background:
            'https://media.rawg.io/media/games/8ca/8ca40b562a755d6a0e30d48e6c74b178.jpg',
        },
        {
          id: 43,
          name: 'Post-apocalyptic',
          slug: 'post-apocalyptic',
          language: 'eng',
          games_count: 3351,
          image_background:
            'https://media.rawg.io/media/games/a91/a911f0a91991469e398fa70091507a5b.jpg',
        },
        {
          id: 42471,
          name: 'Хоррор на выживание',
          slug: 'khorror-na-vyzhivanie',
          language: 'rus',
          games_count: 2249,
          image_background:
            'https://media.rawg.io/media/games/c11/c11a0b92b4c28f2e0db489f430142653.jpg',
        },
        {
          id: 17,
          name: 'Survival Horror',
          slug: 'survival-horror',
          language: 'eng',
          games_count: 7621,
          image_background:
            'https://media.rawg.io/media/games/348/348640e78a7fcd4bb7dcad4fea014eeb.jpg',
        },
        {
          id: 42488,
          name: 'Пост-апокалипсис',
          slug: 'post-apokalipsis',
          language: 'rus',
          games_count: 749,
          image_background:
            'https://media.rawg.io/media/games/471/4712c9ac591f556f553556b864a7e92b.jpg',
        },
        {
          id: 42466,
          name: 'Римейк',
          slug: 'rimeik',
          language: 'rus',
          games_count: 206,
          image_background:
            'https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg',
        },
        {
          id: 337,
          name: 'overlay',
          slug: 'overlay',
          language: 'eng',
          games_count: 220,
          image_background:
            'https://media.rawg.io/media/games/003/0031c0067559d41df19cf98ad87e02aa.jpg',
        },
        {
          id: 271,
          name: 'Remake',
          slug: 'remake',
          language: 'eng',
          games_count: 1666,
          image_background:
            'https://media.rawg.io/media/games/a4b/a4bb55f42fe837ae7bf1307e7b41cc85.jpg',
        },
        {
          id: 283,
          name: 'Based On A Novel',
          slug: 'based-on-a-novel',
          language: 'eng',
          games_count: 43,
          image_background:
            'https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg',
        },
        {
          id: 42397,
          name: 'По мотивам книги',
          slug: 'po-motivam-knigi',
          language: 'rus',
          games_count: 45,
          image_background:
            'https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg',
        },
      ],
      esrb_rating: null,
      user_game: null,
      reviews_count: 1505,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      short_screenshots: [
        {
          id: -1,
          image:
            'https://media.rawg.io/media/games/7a4/7a45e4cdc5b07f316d49cf147b083b27.jpg',
        },
        {
          id: 32023,
          image:
            'https://media.rawg.io/media/screenshots/111/11118bdcf7cd62d35f63826c79983e16.jpg',
        },
        {
          id: 32024,
          image:
            'https://media.rawg.io/media/screenshots/11b/11b420a51d555aad055e37916b112fd1.jpg',
        },
        {
          id: 32025,
          image:
            'https://media.rawg.io/media/screenshots/7ba/7ba241860b68b0a5fe0cda616bde2596.jpg',
        },
        {
          id: 32026,
          image:
            'https://media.rawg.io/media/screenshots/9d3/9d3b567749527447580bcb9df1c894bb.jpg',
        },
        {
          id: 32027,
          image:
            'https://media.rawg.io/media/screenshots/97d/97dd78e4e9051b1529313480789b63ab.jpg',
        },
        {
          id: 32028,
          image:
            'https://media.rawg.io/media/screenshots/0d2/0d26738855784b7997b1569fa4979400.jpg',
        },
      ],
      parent_platforms: [
        {
          platform: {
            id: 1,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 2,
            name: 'PlayStation',
            slug: 'playstation',
          },
        },
        {
          platform: {
            id: 3,
            name: 'Xbox',
            slug: 'xbox',
          },
        },
        {
          platform: {
            id: 5,
            name: 'Apple Macintosh',
            slug: 'mac',
          },
        },
        {
          platform: {
            id: 6,
            name: 'Linux',
            slug: 'linux',
          },
        },
        {
          platform: {
            id: 7,
            name: 'Nintendo',
            slug: 'nintendo',
          },
        },
      ],
      genres: [
        {
          id: 2,
          name: 'Shooter',
          slug: 'shooter',
        },
        {
          id: 4,
          name: 'Action',
          slug: 'action',
        },
      ],
    },
    {
      slug: 'bastion',
      name: 'Bastion',
      playtime: 4,
      platforms: [
        {
          platform: {
            id: 4,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 18,
            name: 'PlayStation 4',
            slug: 'playstation4',
          },
        },
        {
          platform: {
            id: 1,
            name: 'Xbox One',
            slug: 'xbox-one',
          },
        },
        {
          platform: {
            id: 7,
            name: 'Nintendo Switch',
            slug: 'nintendo-switch',
          },
        },
        {
          platform: {
            id: 3,
            name: 'iOS',
            slug: 'ios',
          },
        },
        {
          platform: {
            id: 5,
            name: 'macOS',
            slug: 'macos',
          },
        },
        {
          platform: {
            id: 6,
            name: 'Linux',
            slug: 'linux',
          },
        },
        {
          platform: {
            id: 14,
            name: 'Xbox 360',
            slug: 'xbox360',
          },
        },
        {
          platform: {
            id: 19,
            name: 'PS Vita',
            slug: 'ps-vita',
          },
        },
      ],
      stores: [
        {
          store: {
            id: 1,
            name: 'Steam',
            slug: 'steam',
          },
        },
        {
          store: {
            id: 3,
            name: 'PlayStation Store',
            slug: 'playstation-store',
          },
        },
        {
          store: {
            id: 2,
            name: 'Xbox Store',
            slug: 'xbox-store',
          },
        },
        {
          store: {
            id: 4,
            name: 'App Store',
            slug: 'apple-appstore',
          },
        },
        {
          store: {
            id: 5,
            name: 'GOG',
            slug: 'gog',
          },
        },
        {
          store: {
            id: 6,
            name: 'Nintendo Store',
            slug: 'nintendo',
          },
        },
        {
          store: {
            id: 7,
            name: 'Xbox 360 Store',
            slug: 'xbox360',
          },
        },
        {
          store: {
            id: 9,
            name: 'itch.io',
            slug: 'itch',
          },
        },
      ],
      released: '2011-07-20',
      tba: false,
      background_image:
        'https://media.rawg.io/media/games/f99/f9979698c43fd84c3ab69280576dd3af.jpg',
      rating: 4.15,
      rating_top: 4,
      ratings: [
        {
          id: 4,
          title: 'recommended',
          count: 717,
          percent: 44.51,
        },
        {
          id: 5,
          title: 'exceptional',
          count: 615,
          percent: 38.18,
        },
        {
          id: 3,
          title: 'meh',
          count: 232,
          percent: 14.4,
        },
        {
          id: 1,
          title: 'skip',
          count: 47,
          percent: 2.92,
        },
      ],
      ratings_count: 1593,
      reviews_text_count: 11,
      added: 7967,
      added_by_status: {
        yet: 429,
        owned: 5476,
        beaten: 1256,
        toplay: 203,
        dropped: 533,
        playing: 70,
      },
      metacritic: 86,
      suggestions_count: 547,
      updated: '2023-07-13T06:09:10',
      id: 613,
      score: null,
      clip: null,
      tags: [
        {
          id: 31,
          name: 'Singleplayer',
          slug: 'singleplayer',
          language: 'eng',
          games_count: 206544,
          image_background:
            'https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg',
        },
        {
          id: 42396,
          name: 'Для одного игрока',
          slug: 'dlia-odnogo-igroka',
          language: 'rus',
          games_count: 35171,
          image_background:
            'https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg',
        },
        {
          id: 42417,
          name: 'Экшен',
          slug: 'ekshen',
          language: 'rus',
          games_count: 32438,
          image_background:
            'https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg',
        },
        {
          id: 42392,
          name: 'Приключение',
          slug: 'prikliuchenie',
          language: 'rus',
          games_count: 30382,
          image_background:
            'https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg',
        },
        {
          id: 40847,
          name: 'Steam Achievements',
          slug: 'steam-achievements',
          language: 'eng',
          games_count: 30840,
          image_background:
            'https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg',
        },
        {
          id: 42398,
          name: 'Инди',
          slug: 'indi-2',
          language: 'rus',
          games_count: 46233,
          image_background:
            'https://media.rawg.io/media/games/9fa/9fa63622543e5d4f6d99aa9d73b043de.jpg',
        },
        {
          id: 40836,
          name: 'Full controller support',
          slug: 'full-controller-support',
          language: 'eng',
          games_count: 14476,
          image_background:
            'https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg',
        },
        {
          id: 13,
          name: 'Atmospheric',
          slug: 'atmospheric',
          language: 'eng',
          games_count: 29635,
          image_background:
            'https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg',
        },
        {
          id: 40849,
          name: 'Steam Cloud',
          slug: 'steam-cloud',
          language: 'eng',
          games_count: 14345,
          image_background:
            'https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg',
        },
        {
          id: 42400,
          name: 'Атмосфера',
          slug: 'atmosfera',
          language: 'rus',
          games_count: 6083,
          image_background:
            'https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg',
        },
        {
          id: 7808,
          name: 'steam-trading-cards',
          slug: 'steam-trading-cards',
          language: 'eng',
          games_count: 7571,
          image_background:
            'https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg',
        },
        {
          id: 42401,
          name: 'Отличный саундтрек',
          slug: 'otlichnyi-saundtrek',
          language: 'rus',
          games_count: 4463,
          image_background:
            'https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg',
        },
        {
          id: 42,
          name: 'Great Soundtrack',
          slug: 'great-soundtrack',
          language: 'eng',
          games_count: 3241,
          image_background:
            'https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg',
        },
        {
          id: 42394,
          name: 'Глубокий сюжет',
          slug: 'glubokii-siuzhet',
          language: 'rus',
          games_count: 9153,
          image_background:
            'https://media.rawg.io/media/games/b7b/b7b8381707152afc7d91f5d95de70e39.jpg',
        },
        {
          id: 24,
          name: 'RPG',
          slug: 'rpg',
          language: 'eng',
          games_count: 17413,
          image_background:
            'https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg',
        },
        {
          id: 42412,
          name: 'Ролевая игра',
          slug: 'rolevaia-igra',
          language: 'rus',
          games_count: 13830,
          image_background:
            'https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg',
        },
        {
          id: 118,
          name: 'Story Rich',
          slug: 'story-rich',
          language: 'eng',
          games_count: 18334,
          image_background:
            'https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg',
        },
        {
          id: 42435,
          name: 'Шедевр',
          slug: 'shedevr',
          language: 'rus',
          games_count: 1059,
          image_background:
            'https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg',
        },
        {
          id: 45,
          name: '2D',
          slug: '2d',
          language: 'eng',
          games_count: 188239,
          image_background:
            'https://media.rawg.io/media/games/fd9/fd92f105dcd6491bc5d61135033d1f19.jpg',
        },
        {
          id: 42480,
          name: 'Фэнтези',
          slug: 'fentezi',
          language: 'rus',
          games_count: 8364,
          image_background:
            'https://media.rawg.io/media/games/8d4/8d46786ca86b1d95f3dc7e700e2dc4dd.jpg',
        },
        {
          id: 64,
          name: 'Fantasy',
          slug: 'fantasy',
          language: 'eng',
          games_count: 24622,
          image_background:
            'https://media.rawg.io/media/screenshots/88b/88b5f27f07d6ca2f8a3cd0b36e03a670.jpg',
        },
        {
          id: 40850,
          name: 'Steam Leaderboards',
          slug: 'steam-leaderboards',
          language: 'eng',
          games_count: 5893,
          image_background:
            'https://media.rawg.io/media/games/995/9951d9d55323d08967640f7b9ab3e342.jpg',
        },
        {
          id: 97,
          name: 'Action RPG',
          slug: 'action-rpg',
          language: 'eng',
          games_count: 5761,
          image_background:
            'https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg',
        },
        {
          id: 42489,
          name: 'Ролевой экшен',
          slug: 'rolevoi-ekshen',
          language: 'rus',
          games_count: 2740,
          image_background:
            'https://media.rawg.io/media/games/21a/21ad672cedee9b4378abb6c2d2e626ee.jpg',
        },
        {
          id: 115,
          name: 'Controller',
          slug: 'controller',
          language: 'eng',
          games_count: 9522,
          image_background:
            'https://media.rawg.io/media/games/8d4/8d46786ca86b1d95f3dc7e700e2dc4dd.jpg',
        },
        {
          id: 468,
          name: 'role-playing',
          slug: 'role-playing',
          language: 'eng',
          games_count: 1499,
          image_background:
            'https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg',
        },
        {
          id: 42487,
          name: 'Слэшер',
          slug: 'slesher',
          language: 'rus',
          games_count: 1995,
          image_background:
            'https://media.rawg.io/media/games/1f1/1f1888e1308959dfd3be4c144a81d19c.jpg',
        },
        {
          id: 68,
          name: 'Hack and Slash',
          slug: 'hack-and-slash',
          language: 'eng',
          games_count: 3480,
          image_background:
            'https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg',
        },
        {
          id: 336,
          name: 'controller support',
          slug: 'controller-support',
          language: 'eng',
          games_count: 293,
          image_background:
            'https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg',
        },
        {
          id: 43,
          name: 'Post-apocalyptic',
          slug: 'post-apocalyptic',
          language: 'eng',
          games_count: 3351,
          image_background:
            'https://media.rawg.io/media/games/a91/a911f0a91991469e398fa70091507a5b.jpg',
        },
        {
          id: 111,
          name: 'Short',
          slug: 'short',
          language: 'eng',
          games_count: 57476,
          image_background:
            'https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg',
        },
        {
          id: 42488,
          name: 'Пост-апокалипсис',
          slug: 'post-apokalipsis',
          language: 'rus',
          games_count: 749,
          image_background:
            'https://media.rawg.io/media/games/471/4712c9ac591f556f553556b864a7e92b.jpg',
        },
        {
          id: 42601,
          name: 'Цветастая',
          slug: 'tsvetastaia',
          language: 'rus',
          games_count: 9417,
          image_background:
            'https://media.rawg.io/media/screenshots/d07/d07a7e2f7be2428c51ad26326c84e21d.jpg',
        },
        {
          id: 165,
          name: 'Colorful',
          slug: 'colorful',
          language: 'eng',
          games_count: 17996,
          image_background:
            'https://media.rawg.io/media/games/ba9/ba9ad92b6d04825bd15a407c6059db94.jpg',
        },
        {
          id: 42576,
          name: 'Изометрия',
          slug: 'izometriia',
          language: 'rus',
          games_count: 1493,
          image_background:
            'https://media.rawg.io/media/screenshots/010/0101f021b2dc123c98969fda7e4bcd92.jpg',
        },
        {
          id: 99,
          name: 'Isometric',
          slug: 'isometric',
          language: 'eng',
          games_count: 3958,
          image_background:
            'https://media.rawg.io/media/games/840/8408ad3811289a6a5830cae60fb0b62a.jpg',
        },
        {
          id: 136,
          name: 'Music',
          slug: 'music',
          language: 'eng',
          games_count: 25722,
          image_background:
            'https://media.rawg.io/media/screenshots/695/69511e8a8ec8edf9b85c3e68190844a4.jpg',
        },
        {
          id: 258,
          name: 'Hand-drawn',
          slug: 'hand-drawn',
          language: 'eng',
          games_count: 5755,
          image_background:
            'https://media.rawg.io/media/games/c47/c4796c4c49e7e06ad328e07aa8944cdd.jpg',
        },
        {
          id: 42620,
          name: 'Музыка',
          slug: 'muzyka',
          language: 'rus',
          games_count: 965,
          image_background:
            'https://media.rawg.io/media/screenshots/b86/b865701cd371432f003768598039700f.jpg',
        },
        {
          id: 42627,
          name: 'Повествование',
          slug: 'povestvovanie',
          language: 'rus',
          games_count: 485,
          image_background:
            'https://media.rawg.io/media/screenshots/76a/76a4511b693e10e282463b5904a2f450.jpg',
        },
        {
          id: 200,
          name: 'Narration',
          slug: 'narration',
          language: 'eng',
          games_count: 1511,
          image_background:
            'https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg',
        },
        {
          id: 42634,
          name: 'Твин-стик шутер',
          slug: 'tvin-stik-shuter',
          language: 'rus',
          games_count: 780,
          image_background:
            'https://media.rawg.io/media/games/926/926928beb8a9f9b31cf202965aa4cbbc.jpg',
        },
        {
          id: 201,
          name: 'Twin Stick Shooter',
          slug: 'twin-stick-shooter',
          language: 'eng',
          games_count: 2447,
          image_background:
            'https://media.rawg.io/media/games/731/731576e935a2d50481812aab0e7ae9f6.jpg',
        },
        {
          id: 42671,
          name: 'Динамические повествование',
          slug: 'dinamicheskie-povestvovanie',
          language: 'rus',
          games_count: 166,
          image_background:
            'https://media.rawg.io/media/games/48f/48f2cb53b782cf6ce9e26280ae17be51.jpg',
        },
        {
          id: 309,
          name: 'Dynamic Narration',
          slug: 'dynamic-narration',
          language: 'eng',
          games_count: 289,
          image_background:
            'https://media.rawg.io/media/screenshots/711/7119853fce71c435ad96898f2698dc0f.jpg',
        },
        {
          id: 583,
          name: 'Narrative',
          slug: 'narrative',
          language: 'eng',
          games_count: 8809,
          image_background:
            'https://media.rawg.io/media/games/d1f/d1f872a48286b6b751670817d5c1e1be.jpg',
        },
      ],
      esrb_rating: null,
      user_game: null,
      reviews_count: 1611,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      short_screenshots: [
        {
          id: -1,
          image:
            'https://media.rawg.io/media/games/f99/f9979698c43fd84c3ab69280576dd3af.jpg',
        },
        {
          id: 27120,
          image:
            'https://media.rawg.io/media/screenshots/24c/24c8d0fb4059edb73e8ee2157a17b1c1.jpg',
        },
        {
          id: 27122,
          image:
            'https://media.rawg.io/media/screenshots/2f1/2f18e80782d107945b11b6d02a16ab8d.jpg',
        },
        {
          id: 27124,
          image:
            'https://media.rawg.io/media/screenshots/7de/7ded4f413b6670b37b8047a0565b5a6c.jpg',
        },
        {
          id: 27126,
          image:
            'https://media.rawg.io/media/screenshots/d36/d36f5867baf7af7506765702b9ff7c84.jpg',
        },
        {
          id: 27128,
          image:
            'https://media.rawg.io/media/screenshots/c0b/c0b36461930db0284a10635c9776daf7.jpg',
        },
        {
          id: 27130,
          image:
            'https://media.rawg.io/media/screenshots/4c5/4c5996a474a68ae141a2fb9247a2cdac.jpg',
        },
      ],
      parent_platforms: [
        {
          platform: {
            id: 1,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 2,
            name: 'PlayStation',
            slug: 'playstation',
          },
        },
        {
          platform: {
            id: 3,
            name: 'Xbox',
            slug: 'xbox',
          },
        },
        {
          platform: {
            id: 4,
            name: 'iOS',
            slug: 'ios',
          },
        },
        {
          platform: {
            id: 5,
            name: 'Apple Macintosh',
            slug: 'mac',
          },
        },
        {
          platform: {
            id: 6,
            name: 'Linux',
            slug: 'linux',
          },
        },
        {
          platform: {
            id: 7,
            name: 'Nintendo',
            slug: 'nintendo',
          },
        },
      ],
      genres: [
        {
          id: 51,
          name: 'Indie',
          slug: 'indie',
        },
        {
          id: 3,
          name: 'Adventure',
          slug: 'adventure',
        },
        {
          id: 4,
          name: 'Action',
          slug: 'action',
        },
        {
          id: 5,
          name: 'RPG',
          slug: 'role-playing-games-rpg',
        },
      ],
    },
    {
      slug: 'metro-redux',
      name: 'Metro 2033 Redux',
      playtime: 6,
      platforms: [
        {
          platform: {
            id: 4,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 1,
            name: 'Xbox One',
            slug: 'xbox-one',
          },
        },
        {
          platform: {
            id: 18,
            name: 'PlayStation 4',
            slug: 'playstation4',
          },
        },
        {
          platform: {
            id: 7,
            name: 'Nintendo Switch',
            slug: 'nintendo-switch',
          },
        },
        {
          platform: {
            id: 5,
            name: 'macOS',
            slug: 'macos',
          },
        },
        {
          platform: {
            id: 6,
            name: 'Linux',
            slug: 'linux',
          },
        },
      ],
      stores: [
        {
          store: {
            id: 1,
            name: 'Steam',
            slug: 'steam',
          },
        },
        {
          store: {
            id: 3,
            name: 'PlayStation Store',
            slug: 'playstation-store',
          },
        },
        {
          store: {
            id: 2,
            name: 'Xbox Store',
            slug: 'xbox-store',
          },
        },
        {
          store: {
            id: 4,
            name: 'App Store',
            slug: 'apple-appstore',
          },
        },
        {
          store: {
            id: 5,
            name: 'GOG',
            slug: 'gog',
          },
        },
        {
          store: {
            id: 6,
            name: 'Nintendo Store',
            slug: 'nintendo',
          },
        },
        {
          store: {
            id: 11,
            name: 'Epic Games',
            slug: 'epic-games',
          },
        },
      ],
      released: '2014-08-25',
      tba: false,
      background_image:
        'https://media.rawg.io/media/games/4fb/4fb548e4816c84d1d70f1a228fb167cc.jpg',
      rating: 4.09,
      rating_top: 4,
      ratings: [
        {
          id: 4,
          title: 'recommended',
          count: 955,
          percent: 55.52,
        },
        {
          id: 5,
          title: 'exceptional',
          count: 518,
          percent: 30.12,
        },
        {
          id: 3,
          title: 'meh',
          count: 189,
          percent: 10.99,
        },
        {
          id: 1,
          title: 'skip',
          count: 58,
          percent: 3.37,
        },
      ],
      ratings_count: 1703,
      reviews_text_count: 10,
      added: 7883,
      added_by_status: {
        yet: 527,
        owned: 5247,
        beaten: 1621,
        toplay: 156,
        dropped: 251,
        playing: 81,
      },
      metacritic: 88,
      suggestions_count: 796,
      updated: '2023-07-10T21:51:16',
      id: 3603,
      score: null,
      clip: null,
      tags: [
        {
          id: 31,
          name: 'Singleplayer',
          slug: 'singleplayer',
          language: 'eng',
          games_count: 206544,
          image_background:
            'https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg',
        },
        {
          id: 42396,
          name: 'Для одного игрока',
          slug: 'dlia-odnogo-igroka',
          language: 'rus',
          games_count: 35171,
          image_background:
            'https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg',
        },
        {
          id: 42417,
          name: 'Экшен',
          slug: 'ekshen',
          language: 'rus',
          games_count: 32438,
          image_background:
            'https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg',
        },
        {
          id: 42392,
          name: 'Приключение',
          slug: 'prikliuchenie',
          language: 'rus',
          games_count: 30382,
          image_background:
            'https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg',
        },
        {
          id: 40847,
          name: 'Steam Achievements',
          slug: 'steam-achievements',
          language: 'eng',
          games_count: 30840,
          image_background:
            'https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg',
        },
        {
          id: 7,
          name: 'Multiplayer',
          slug: 'multiplayer',
          language: 'eng',
          games_count: 35108,
          image_background:
            'https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg',
        },
        {
          id: 40836,
          name: 'Full controller support',
          slug: 'full-controller-support',
          language: 'eng',
          games_count: 14476,
          image_background:
            'https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg',
        },
        {
          id: 13,
          name: 'Atmospheric',
          slug: 'atmospheric',
          language: 'eng',
          games_count: 29635,
          image_background:
            'https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg',
        },
        {
          id: 40849,
          name: 'Steam Cloud',
          slug: 'steam-cloud',
          language: 'eng',
          games_count: 14345,
          image_background:
            'https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg',
        },
        {
          id: 42400,
          name: 'Атмосфера',
          slug: 'atmosfera',
          language: 'rus',
          games_count: 6083,
          image_background:
            'https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg',
        },
        {
          id: 42425,
          name: 'Для нескольких игроков',
          slug: 'dlia-neskolkikh-igrokov',
          language: 'rus',
          games_count: 7893,
          image_background:
            'https://media.rawg.io/media/games/713/713269608dc8f2f40f5a670a14b2de94.jpg',
        },
        {
          id: 7808,
          name: 'steam-trading-cards',
          slug: 'steam-trading-cards',
          language: 'eng',
          games_count: 7571,
          image_background:
            'https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg',
        },
        {
          id: 42394,
          name: 'Глубокий сюжет',
          slug: 'glubokii-siuzhet',
          language: 'rus',
          games_count: 9153,
          image_background:
            'https://media.rawg.io/media/games/b7b/b7b8381707152afc7d91f5d95de70e39.jpg',
        },
        {
          id: 118,
          name: 'Story Rich',
          slug: 'story-rich',
          language: 'eng',
          games_count: 18334,
          image_background:
            'https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg',
        },
        {
          id: 36,
          name: 'Open World',
          slug: 'open-world',
          language: 'eng',
          games_count: 6316,
          image_background:
            'https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg',
        },
        {
          id: 42428,
          name: 'Шутер',
          slug: 'shuter',
          language: 'rus',
          games_count: 6857,
          image_background:
            'https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg',
        },
        {
          id: 8,
          name: 'First-Person',
          slug: 'first-person',
          language: 'eng',
          games_count: 28676,
          image_background:
            'https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg',
        },
        {
          id: 42429,
          name: 'От первого лица',
          slug: 'ot-pervogo-litsa',
          language: 'rus',
          games_count: 7731,
          image_background:
            'https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg',
        },
        {
          id: 42435,
          name: 'Шедевр',
          slug: 'shedevr',
          language: 'rus',
          games_count: 1059,
          image_background:
            'https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg',
        },
        {
          id: 16,
          name: 'Horror',
          slug: 'horror',
          language: 'eng',
          games_count: 41984,
          image_background:
            'https://media.rawg.io/media/games/7c4/7c448374df84b607f67ce9182a3a3ca7.jpg',
        },
        {
          id: 30,
          name: 'FPS',
          slug: 'fps',
          language: 'eng',
          games_count: 12151,
          image_background:
            'https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg',
        },
        {
          id: 42427,
          name: 'Шутер от первого лица',
          slug: 'shuter-ot-pervogo-litsa',
          language: 'rus',
          games_count: 4139,
          image_background:
            'https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg',
        },
        {
          id: 42461,
          name: 'Классика',
          slug: 'klassika',
          language: 'rus',
          games_count: 1394,
          image_background:
            'https://media.rawg.io/media/games/7a2/7a2500ee8b2c0e1ff268bb4479463dea.jpg',
        },
        {
          id: 42491,
          name: 'Мясо',
          slug: 'miaso',
          language: 'rus',
          games_count: 3940,
          image_background:
            'https://media.rawg.io/media/games/e04/e04963f3ac4c4fa83a1dc0b9231e50db.jpg',
        },
        {
          id: 26,
          name: 'Gore',
          slug: 'gore',
          language: 'eng',
          games_count: 5076,
          image_background:
            'https://media.rawg.io/media/games/f6b/f6bed028b02369d4cab548f4f9337e81.jpg',
        },
        {
          id: 193,
          name: 'Classic',
          slug: 'classic',
          language: 'eng',
          games_count: 1728,
          image_background:
            'https://media.rawg.io/media/games/b54/b54598d1d5cc31899f4f0a7e3122a7b0.jpg',
        },
        {
          id: 1,
          name: 'Survival',
          slug: 'survival',
          language: 'eng',
          games_count: 7286,
          image_background:
            'https://media.rawg.io/media/games/b54/b54598d1d5cc31899f4f0a7e3122a7b0.jpg',
        },
        {
          id: 42452,
          name: 'Выживание',
          slug: 'vyzhivanie',
          language: 'rus',
          games_count: 4774,
          image_background:
            'https://media.rawg.io/media/games/7f6/7f6cd70ba2ad57053b4847c13569f2d8.jpg',
        },
        {
          id: 15,
          name: 'Stealth',
          slug: 'stealth',
          language: 'eng',
          games_count: 5742,
          image_background:
            'https://media.rawg.io/media/games/7ac/7aca7ccf0e70cd0974cb899ab9e5158e.jpg',
        },
        {
          id: 42439,
          name: 'Стелс',
          slug: 'stels',
          language: 'rus',
          games_count: 1597,
          image_background:
            'https://media.rawg.io/media/games/bce/bce62fbc7cf74bf6a1a37340993ec148.jpg',
        },
        {
          id: 41,
          name: 'Dark',
          slug: 'dark',
          language: 'eng',
          games_count: 14171,
          image_background:
            'https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg',
        },
        {
          id: 43,
          name: 'Post-apocalyptic',
          slug: 'post-apocalyptic',
          language: 'eng',
          games_count: 3351,
          image_background:
            'https://media.rawg.io/media/games/a91/a911f0a91991469e398fa70091507a5b.jpg',
        },
        {
          id: 42471,
          name: 'Хоррор на выживание',
          slug: 'khorror-na-vyzhivanie',
          language: 'rus',
          games_count: 2249,
          image_background:
            'https://media.rawg.io/media/games/c11/c11a0b92b4c28f2e0db489f430142653.jpg',
        },
        {
          id: 17,
          name: 'Survival Horror',
          slug: 'survival-horror',
          language: 'eng',
          games_count: 7621,
          image_background:
            'https://media.rawg.io/media/games/348/348640e78a7fcd4bb7dcad4fea014eeb.jpg',
        },
        {
          id: 42488,
          name: 'Пост-апокалипсис',
          slug: 'post-apokalipsis',
          language: 'rus',
          games_count: 749,
          image_background:
            'https://media.rawg.io/media/games/471/4712c9ac591f556f553556b864a7e92b.jpg',
        },
        {
          id: 42529,
          name: 'Для взрослых',
          slug: 'dlia-vzroslykh',
          language: 'rus',
          games_count: 2035,
          image_background:
            'https://media.rawg.io/media/games/5fa/5fae5fec3c943179e09da67a4427d68f.jpg',
        },
        {
          id: 192,
          name: 'Mature',
          slug: 'mature',
          language: 'eng',
          games_count: 2222,
          image_background:
            'https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg',
        },
        {
          id: 42466,
          name: 'Римейк',
          slug: 'rimeik',
          language: 'rus',
          games_count: 206,
          image_background:
            'https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg',
        },
        {
          id: 337,
          name: 'overlay',
          slug: 'overlay',
          language: 'eng',
          games_count: 220,
          image_background:
            'https://media.rawg.io/media/games/003/0031c0067559d41df19cf98ad87e02aa.jpg',
        },
        {
          id: 271,
          name: 'Remake',
          slug: 'remake',
          language: 'eng',
          games_count: 1666,
          image_background:
            'https://media.rawg.io/media/games/a4b/a4bb55f42fe837ae7bf1307e7b41cc85.jpg',
        },
        {
          id: 413,
          name: 'online',
          slug: 'online',
          language: 'eng',
          games_count: 6520,
          image_background:
            'https://media.rawg.io/media/games/174/1743b3dd185bda4a7be349347d4064df.jpg',
        },
        {
          id: 2030,
          name: 'city',
          slug: 'city',
          language: 'eng',
          games_count: 9160,
          image_background:
            'https://media.rawg.io/media/games/4a5/4a5ce21f529cf8fd4670b4c3188b25df.jpg',
        },
        {
          id: 283,
          name: 'Based On A Novel',
          slug: 'based-on-a-novel',
          language: 'eng',
          games_count: 43,
          image_background:
            'https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg',
        },
        {
          id: 42397,
          name: 'По мотивам книги',
          slug: 'po-motivam-knigi',
          language: 'rus',
          games_count: 45,
          image_background:
            'https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg',
        },
        {
          id: 1897,
          name: 'fire',
          slug: 'fire',
          language: 'eng',
          games_count: 6092,
          image_background:
            'https://media.rawg.io/media/screenshots/8a1/8a1d8cb1d53f723795150e580c0c3c6b.jpg',
        },
        {
          id: 3397,
          name: 'light',
          slug: 'light',
          language: 'eng',
          games_count: 1789,
          image_background:
            'https://media.rawg.io/media/games/f2a/f2a2fc10c284cb7d6c3bff1d4e01da51.jpg',
        },
      ],
      esrb_rating: {
        id: 4,
        name: 'Mature',
        slug: 'mature',
        name_en: 'Mature',
        name_ru: 'С 17 лет',
      },
      user_game: null,
      reviews_count: 1720,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      short_screenshots: [
        {
          id: -1,
          image:
            'https://media.rawg.io/media/games/4fb/4fb548e4816c84d1d70f1a228fb167cc.jpg',
        },
        {
          id: 32013,
          image:
            'https://media.rawg.io/media/screenshots/432/432cf94eb1f25d7415f05def5d18cedc.jpg',
        },
        {
          id: 32014,
          image:
            'https://media.rawg.io/media/screenshots/82c/82cb9461b5ad0ebdb6edc4b3acdfb731.jpg',
        },
        {
          id: 32015,
          image:
            'https://media.rawg.io/media/screenshots/b95/b957aad3c646822893fe084ae6bf7652.jpg',
        },
        {
          id: 32016,
          image:
            'https://media.rawg.io/media/screenshots/8f5/8f5ebd97e68dd1e16d008c7be452afd7.jpg',
        },
        {
          id: 32017,
          image:
            'https://media.rawg.io/media/screenshots/dd5/dd59314b82f1d7eb3631a6fa54af3072.jpg',
        },
        {
          id: 32018,
          image:
            'https://media.rawg.io/media/screenshots/19b/19b46c6f0cb02c9e3791d15d8da4bbf1.jpg',
        },
      ],
      parent_platforms: [
        {
          platform: {
            id: 1,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 2,
            name: 'PlayStation',
            slug: 'playstation',
          },
        },
        {
          platform: {
            id: 3,
            name: 'Xbox',
            slug: 'xbox',
          },
        },
        {
          platform: {
            id: 5,
            name: 'Apple Macintosh',
            slug: 'mac',
          },
        },
        {
          platform: {
            id: 6,
            name: 'Linux',
            slug: 'linux',
          },
        },
        {
          platform: {
            id: 7,
            name: 'Nintendo',
            slug: 'nintendo',
          },
        },
      ],
      genres: [
        {
          id: 2,
          name: 'Shooter',
          slug: 'shooter',
        },
        {
          id: 4,
          name: 'Action',
          slug: 'action',
        },
      ],
    },
    {
      slug: 'bioshock-2-remastered',
      name: 'BioShock 2 Remastered',
      playtime: 4,
      platforms: [
        {
          platform: {
            id: 4,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 1,
            name: 'Xbox One',
            slug: 'xbox-one',
          },
        },
        {
          platform: {
            id: 18,
            name: 'PlayStation 4',
            slug: 'playstation4',
          },
        },
        {
          platform: {
            id: 7,
            name: 'Nintendo Switch',
            slug: 'nintendo-switch',
          },
        },
        {
          platform: {
            id: 5,
            name: 'macOS',
            slug: 'macos',
          },
        },
      ],
      stores: [
        {
          store: {
            id: 1,
            name: 'Steam',
            slug: 'steam',
          },
        },
        {
          store: {
            id: 3,
            name: 'PlayStation Store',
            slug: 'playstation-store',
          },
        },
        {
          store: {
            id: 5,
            name: 'GOG',
            slug: 'gog',
          },
        },
        {
          store: {
            id: 6,
            name: 'Nintendo Store',
            slug: 'nintendo',
          },
        },
        {
          store: {
            id: 11,
            name: 'Epic Games',
            slug: 'epic-games',
          },
        },
      ],
      released: '2016-09-15',
      tba: false,
      background_image:
        'https://media.rawg.io/media/games/7c4/7c448374df84b607f67ce9182a3a3ca7.jpg',
      rating: 4.01,
      rating_top: 4,
      ratings: [
        {
          id: 4,
          title: 'recommended',
          count: 465,
          percent: 50.43,
        },
        {
          id: 5,
          title: 'exceptional',
          count: 299,
          percent: 32.43,
        },
        {
          id: 3,
          title: 'meh',
          count: 94,
          percent: 10.2,
        },
        {
          id: 1,
          title: 'skip',
          count: 64,
          percent: 6.94,
        },
      ],
      ratings_count: 918,
      reviews_text_count: 2,
      added: 7833,
      added_by_status: {
        yet: 812,
        owned: 5943,
        beaten: 733,
        toplay: 132,
        dropped: 180,
        playing: 33,
      },
      metacritic: 83,
      suggestions_count: 435,
      updated: '2023-07-13T11:49:36',
      id: 11142,
      score: null,
      clip: null,
      tags: [
        {
          id: 31,
          name: 'Singleplayer',
          slug: 'singleplayer',
          language: 'eng',
          games_count: 206544,
          image_background:
            'https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg',
        },
        {
          id: 42396,
          name: 'Для одного игрока',
          slug: 'dlia-odnogo-igroka',
          language: 'rus',
          games_count: 35171,
          image_background:
            'https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg',
        },
        {
          id: 42417,
          name: 'Экшен',
          slug: 'ekshen',
          language: 'rus',
          games_count: 32438,
          image_background:
            'https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg',
        },
        {
          id: 42392,
          name: 'Приключение',
          slug: 'prikliuchenie',
          language: 'rus',
          games_count: 30382,
          image_background:
            'https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg',
        },
        {
          id: 40847,
          name: 'Steam Achievements',
          slug: 'steam-achievements',
          language: 'eng',
          games_count: 30840,
          image_background:
            'https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg',
        },
        {
          id: 7,
          name: 'Multiplayer',
          slug: 'multiplayer',
          language: 'eng',
          games_count: 35108,
          image_background:
            'https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg',
        },
        {
          id: 40836,
          name: 'Full controller support',
          slug: 'full-controller-support',
          language: 'eng',
          games_count: 14476,
          image_background:
            'https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg',
        },
        {
          id: 13,
          name: 'Atmospheric',
          slug: 'atmospheric',
          language: 'eng',
          games_count: 29635,
          image_background:
            'https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg',
        },
        {
          id: 40849,
          name: 'Steam Cloud',
          slug: 'steam-cloud',
          language: 'eng',
          games_count: 14345,
          image_background:
            'https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg',
        },
        {
          id: 42400,
          name: 'Атмосфера',
          slug: 'atmosfera',
          language: 'rus',
          games_count: 6083,
          image_background:
            'https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg',
        },
        {
          id: 42425,
          name: 'Для нескольких игроков',
          slug: 'dlia-neskolkikh-igrokov',
          language: 'rus',
          games_count: 7893,
          image_background:
            'https://media.rawg.io/media/games/713/713269608dc8f2f40f5a670a14b2de94.jpg',
        },
        {
          id: 42401,
          name: 'Отличный саундтрек',
          slug: 'otlichnyi-saundtrek',
          language: 'rus',
          games_count: 4463,
          image_background:
            'https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg',
        },
        {
          id: 42394,
          name: 'Глубокий сюжет',
          slug: 'glubokii-siuzhet',
          language: 'rus',
          games_count: 9153,
          image_background:
            'https://media.rawg.io/media/games/b7b/b7b8381707152afc7d91f5d95de70e39.jpg',
        },
        {
          id: 24,
          name: 'RPG',
          slug: 'rpg',
          language: 'eng',
          games_count: 17413,
          image_background:
            'https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg',
        },
        {
          id: 42412,
          name: 'Ролевая игра',
          slug: 'rolevaia-igra',
          language: 'rus',
          games_count: 13830,
          image_background:
            'https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg',
        },
        {
          id: 118,
          name: 'Story Rich',
          slug: 'story-rich',
          language: 'eng',
          games_count: 18334,
          image_background:
            'https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg',
        },
        {
          id: 42442,
          name: 'Открытый мир',
          slug: 'otkrytyi-mir',
          language: 'rus',
          games_count: 4494,
          image_background:
            'https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg',
        },
        {
          id: 42428,
          name: 'Шутер',
          slug: 'shuter',
          language: 'rus',
          games_count: 6857,
          image_background:
            'https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg',
        },
        {
          id: 8,
          name: 'First-Person',
          slug: 'first-person',
          language: 'eng',
          games_count: 28676,
          image_background:
            'https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg',
        },
        {
          id: 42429,
          name: 'От первого лица',
          slug: 'ot-pervogo-litsa',
          language: 'rus',
          games_count: 7731,
          image_background:
            'https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg',
        },
        {
          id: 32,
          name: 'Sci-fi',
          slug: 'sci-fi',
          language: 'eng',
          games_count: 17236,
          image_background:
            'https://media.rawg.io/media/games/198/1988a337305e008b41d7f536ce9b73f6.jpg',
        },
        {
          id: 42423,
          name: 'Научная фантастика',
          slug: 'nauchnaia-fantastika',
          language: 'rus',
          games_count: 6108,
          image_background:
            'https://media.rawg.io/media/games/8e4/8e4de3f54ac659e08a7ba6a2b731682a.jpg',
        },
        {
          id: 16,
          name: 'Horror',
          slug: 'horror',
          language: 'eng',
          games_count: 41984,
          image_background:
            'https://media.rawg.io/media/games/7c4/7c448374df84b607f67ce9182a3a3ca7.jpg',
        },
        {
          id: 30,
          name: 'FPS',
          slug: 'fps',
          language: 'eng',
          games_count: 12151,
          image_background:
            'https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg',
        },
        {
          id: 42427,
          name: 'Шутер от первого лица',
          slug: 'shuter-ot-pervogo-litsa',
          language: 'rus',
          games_count: 4139,
          image_background:
            'https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg',
        },
        {
          id: 42477,
          name: 'Мрачная',
          slug: 'mrachnaia',
          language: 'rus',
          games_count: 3664,
          image_background:
            'https://media.rawg.io/media/games/7ac/7aca7ccf0e70cd0974cb899ab9e5158e.jpg',
        },
        {
          id: 42466,
          name: 'Римейк',
          slug: 'rimeik',
          language: 'rus',
          games_count: 206,
          image_background:
            'https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg',
        },
        {
          id: 119,
          name: 'Dystopian',
          slug: 'dystopian',
          language: 'eng',
          games_count: 1806,
          image_background:
            'https://media.rawg.io/media/screenshots/67e/67e5be6ad7a555248f50bd367e9a071c.jpg',
        },
        {
          id: 42665,
          name: 'Антиутопия',
          slug: 'antiutopiia',
          language: 'rus',
          games_count: 882,
          image_background:
            'https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg',
        },
        {
          id: 154,
          name: 'Steampunk',
          slug: 'steampunk',
          language: 'eng',
          games_count: 1117,
          image_background:
            'https://media.rawg.io/media/games/57f/57fc2051dd27c9947d12cdf63790d122.jpg',
        },
        {
          id: 42629,
          name: 'Стимпанк',
          slug: 'stimpank',
          language: 'rus',
          games_count: 399,
          image_background:
            'https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg',
        },
        {
          id: 42566,
          name: 'Альтернативная история',
          slug: 'alternativnaia-istoriia',
          language: 'rus',
          games_count: 771,
          image_background:
            'https://media.rawg.io/media/games/c64/c64d2f63cabeab9126693b7d39539c8d.jpg',
        },
        {
          id: 42660,
          name: 'Подводный мир',
          slug: 'podvodnyi-mir',
          language: 'rus',
          games_count: 319,
          image_background:
            'https://media.rawg.io/media/games/ba9/ba9ad92b6d04825bd15a407c6059db94.jpg',
        },
      ],
      esrb_rating: {
        id: 4,
        name: 'Mature',
        slug: 'mature',
        name_en: 'Mature',
        name_ru: 'С 17 лет',
      },
      user_game: null,
      reviews_count: 922,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      short_screenshots: [
        {
          id: -1,
          image:
            'https://media.rawg.io/media/games/7c4/7c448374df84b607f67ce9182a3a3ca7.jpg',
        },
        {
          id: 89556,
          image:
            'https://media.rawg.io/media/screenshots/f8f/f8f97169e49ff503f182cb480c75d377.jpg',
        },
        {
          id: 89557,
          image:
            'https://media.rawg.io/media/screenshots/be7/be7ba98fad14386322335d9d87f4cf05.jpg',
        },
        {
          id: 89558,
          image:
            'https://media.rawg.io/media/screenshots/d0e/d0e70feaab57195e8286f3501e95fc5e.jpg',
        },
        {
          id: 89559,
          image:
            'https://media.rawg.io/media/screenshots/f6e/f6e3977b58906b54d43232262521e7c6.jpg',
        },
        {
          id: 89560,
          image:
            'https://media.rawg.io/media/screenshots/932/932a57c6958406a255b36d90d7eb62cd.jpg',
        },
        {
          id: 89561,
          image:
            'https://media.rawg.io/media/screenshots/dd5/dd5c9b494d356ecc6b06115e51bf95c4.jpg',
        },
      ],
      parent_platforms: [
        {
          platform: {
            id: 1,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 2,
            name: 'PlayStation',
            slug: 'playstation',
          },
        },
        {
          platform: {
            id: 3,
            name: 'Xbox',
            slug: 'xbox',
          },
        },
        {
          platform: {
            id: 5,
            name: 'Apple Macintosh',
            slug: 'mac',
          },
        },
        {
          platform: {
            id: 7,
            name: 'Nintendo',
            slug: 'nintendo',
          },
        },
      ],
      genres: [
        {
          id: 4,
          name: 'Action',
          slug: 'action',
        },
        {
          id: 5,
          name: 'RPG',
          slug: 'role-playing-games-rpg',
        },
      ],
    },
    {
      slug: 'nierautomata',
      name: 'NieR:Automata',
      playtime: 14,
      platforms: [
        {
          platform: {
            id: 4,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 1,
            name: 'Xbox One',
            slug: 'xbox-one',
          },
        },
        {
          platform: {
            id: 18,
            name: 'PlayStation 4',
            slug: 'playstation4',
          },
        },
        {
          platform: {
            id: 7,
            name: 'Nintendo Switch',
            slug: 'nintendo-switch',
          },
        },
      ],
      stores: [
        {
          store: {
            id: 1,
            name: 'Steam',
            slug: 'steam',
          },
        },
        {
          store: {
            id: 2,
            name: 'Xbox Store',
            slug: 'xbox-store',
          },
        },
      ],
      released: '2017-03-17',
      tba: false,
      background_image:
        'https://media.rawg.io/media/games/5a4/5a44112251d70a25291cc33757220fce.jpg',
      rating: 4.38,
      rating_top: 5,
      ratings: [
        {
          id: 5,
          title: 'exceptional',
          count: 1184,
          percent: 60.07,
        },
        {
          id: 4,
          title: 'recommended',
          count: 526,
          percent: 26.69,
        },
        {
          id: 3,
          title: 'meh',
          count: 174,
          percent: 8.83,
        },
        {
          id: 1,
          title: 'skip',
          count: 87,
          percent: 4.41,
        },
      ],
      ratings_count: 1941,
      reviews_text_count: 24,
      added: 7832,
      added_by_status: {
        yet: 594,
        owned: 4156,
        beaten: 1527,
        toplay: 867,
        dropped: 446,
        playing: 242,
      },
      metacritic: 86,
      suggestions_count: 635,
      updated: '2023-07-14T11:02:50',
      id: 10141,
      score: null,
      clip: null,
      tags: [
        {
          id: 31,
          name: 'Singleplayer',
          slug: 'singleplayer',
          language: 'eng',
          games_count: 206544,
          image_background:
            'https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg',
        },
        {
          id: 42396,
          name: 'Для одного игрока',
          slug: 'dlia-odnogo-igroka',
          language: 'rus',
          games_count: 35171,
          image_background:
            'https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg',
        },
        {
          id: 42417,
          name: 'Экшен',
          slug: 'ekshen',
          language: 'rus',
          games_count: 32438,
          image_background:
            'https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg',
        },
        {
          id: 42392,
          name: 'Приключение',
          slug: 'prikliuchenie',
          language: 'rus',
          games_count: 30382,
          image_background:
            'https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg',
        },
        {
          id: 40847,
          name: 'Steam Achievements',
          slug: 'steam-achievements',
          language: 'eng',
          games_count: 30840,
          image_background:
            'https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg',
        },
        {
          id: 13,
          name: 'Atmospheric',
          slug: 'atmospheric',
          language: 'eng',
          games_count: 29635,
          image_background:
            'https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg',
        },
        {
          id: 40849,
          name: 'Steam Cloud',
          slug: 'steam-cloud',
          language: 'eng',
          games_count: 14345,
          image_background:
            'https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg',
        },
        {
          id: 42400,
          name: 'Атмосфера',
          slug: 'atmosfera',
          language: 'rus',
          games_count: 6083,
          image_background:
            'https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg',
        },
        {
          id: 7808,
          name: 'steam-trading-cards',
          slug: 'steam-trading-cards',
          language: 'eng',
          games_count: 7571,
          image_background:
            'https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg',
        },
        {
          id: 42401,
          name: 'Отличный саундтрек',
          slug: 'otlichnyi-saundtrek',
          language: 'rus',
          games_count: 4463,
          image_background:
            'https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg',
        },
        {
          id: 42,
          name: 'Great Soundtrack',
          slug: 'great-soundtrack',
          language: 'eng',
          games_count: 3241,
          image_background:
            'https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg',
        },
        {
          id: 42394,
          name: 'Глубокий сюжет',
          slug: 'glubokii-siuzhet',
          language: 'rus',
          games_count: 9153,
          image_background:
            'https://media.rawg.io/media/games/b7b/b7b8381707152afc7d91f5d95de70e39.jpg',
        },
        {
          id: 24,
          name: 'RPG',
          slug: 'rpg',
          language: 'eng',
          games_count: 17413,
          image_background:
            'https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg',
        },
        {
          id: 42412,
          name: 'Ролевая игра',
          slug: 'rolevaia-igra',
          language: 'rus',
          games_count: 13830,
          image_background:
            'https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg',
        },
        {
          id: 118,
          name: 'Story Rich',
          slug: 'story-rich',
          language: 'eng',
          games_count: 18334,
          image_background:
            'https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg',
        },
        {
          id: 42442,
          name: 'Открытый мир',
          slug: 'otkrytyi-mir',
          language: 'rus',
          games_count: 4494,
          image_background:
            'https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg',
        },
        {
          id: 36,
          name: 'Open World',
          slug: 'open-world',
          language: 'eng',
          games_count: 6316,
          image_background:
            'https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg',
        },
        {
          id: 32,
          name: 'Sci-fi',
          slug: 'sci-fi',
          language: 'eng',
          games_count: 17236,
          image_background:
            'https://media.rawg.io/media/games/198/1988a337305e008b41d7f536ce9b73f6.jpg',
        },
        {
          id: 42423,
          name: 'Научная фантастика',
          slug: 'nauchnaia-fantastika',
          language: 'rus',
          games_count: 6108,
          image_background:
            'https://media.rawg.io/media/games/8e4/8e4de3f54ac659e08a7ba6a2b731682a.jpg',
        },
        {
          id: 40845,
          name: 'Partial Controller Support',
          slug: 'partial-controller-support',
          language: 'eng',
          games_count: 9866,
          image_background:
            'https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg',
        },
        {
          id: 189,
          name: 'Female Protagonist',
          slug: 'female-protagonist',
          language: 'eng',
          games_count: 10614,
          image_background:
            'https://media.rawg.io/media/games/5a4/5a44112251d70a25291cc33757220fce.jpg',
        },
        {
          id: 42404,
          name: 'Женщина-протагонист',
          slug: 'zhenshchina-protagonist',
          language: 'rus',
          games_count: 2413,
          image_background:
            'https://media.rawg.io/media/games/3cf/3cff89996570cf29a10eb9cd967dcf73.jpg',
        },
        {
          id: 42402,
          name: 'Насилие',
          slug: 'nasilie',
          language: 'rus',
          games_count: 4884,
          image_background:
            'https://media.rawg.io/media/games/858/858c016de0cf7bc21a57dcc698a04a0c.jpg',
        },
        {
          id: 34,
          name: 'Violent',
          slug: 'violent',
          language: 'eng',
          games_count: 5927,
          image_background:
            'https://media.rawg.io/media/games/5fa/5fae5fec3c943179e09da67a4427d68f.jpg',
        },
        {
          id: 42406,
          name: 'Нагота',
          slug: 'nagota',
          language: 'rus',
          games_count: 4644,
          image_background:
            'https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg',
        },
        {
          id: 134,
          name: 'Anime',
          slug: 'anime',
          language: 'eng',
          games_count: 11125,
          image_background:
            'https://media.rawg.io/media/games/556/556157feed9ee1f55f2b12b2973e30a3.jpg',
        },
        {
          id: 42407,
          name: 'Аниме',
          slug: 'anime-2',
          language: 'rus',
          games_count: 7014,
          image_background:
            'https://media.rawg.io/media/games/a91/a917f41bb87e4b9e7a762ac87d97a9dc.jpg',
        },
        {
          id: 42487,
          name: 'Слэшер',
          slug: 'slesher',
          language: 'rus',
          games_count: 1995,
          image_background:
            'https://media.rawg.io/media/games/1f1/1f1888e1308959dfd3be4c144a81d19c.jpg',
        },
        {
          id: 44,
          name: 'Nudity',
          slug: 'nudity',
          language: 'eng',
          games_count: 5029,
          image_background:
            'https://media.rawg.io/media/games/8ca/8ca40b562a755d6a0e30d48e6c74b178.jpg',
        },
        {
          id: 68,
          name: 'Hack and Slash',
          slug: 'hack-and-slash',
          language: 'eng',
          games_count: 3480,
          image_background:
            'https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg',
        },
        {
          id: 43,
          name: 'Post-apocalyptic',
          slug: 'post-apocalyptic',
          language: 'eng',
          games_count: 3351,
          image_background:
            'https://media.rawg.io/media/games/a91/a911f0a91991469e398fa70091507a5b.jpg',
        },
        {
          id: 42488,
          name: 'Пост-апокалипсис',
          slug: 'post-apokalipsis',
          language: 'rus',
          games_count: 749,
          image_background:
            'https://media.rawg.io/media/games/471/4712c9ac591f556f553556b864a7e92b.jpg',
        },
        {
          id: 197,
          name: 'Robots',
          slug: 'robots',
          language: 'eng',
          games_count: 7759,
          image_background:
            'https://media.rawg.io/media/games/acc/acc3de7aaa850ad998d49b15f8901e23.jpg',
        },
        {
          id: 233,
          name: 'JRPG',
          slug: 'jrpg',
          language: 'eng',
          games_count: 3593,
          image_background:
            'https://media.rawg.io/media/games/67f/67f62d1f062a6164f57575e0604ee9f6.jpg',
        },
        {
          id: 42514,
          name: 'Японская ролевая игра',
          slug: 'iaponskaia-rolevaia-igra',
          language: 'rus',
          games_count: 1922,
          image_background:
            'https://media.rawg.io/media/games/0d4/0d4e5446db732e2fcce34d1dcb4dd914.jpg',
        },
        {
          id: 42630,
          name: 'Роботы',
          slug: 'roboty',
          language: 'rus',
          games_count: 1357,
          image_background:
            'https://media.rawg.io/media/games/6f7/6f7341dd656910be2c2cda39193a7ec9.jpg',
        },
        {
          id: 42539,
          name: 'Скролл-шутер',
          slug: 'skroll-shuter',
          language: 'rus',
          games_count: 2108,
          image_background:
            'https://media.rawg.io/media/games/3ac/3ac2b5356ad764a87092d15cdcbee809.jpg',
        },
        {
          id: 57,
          name: 'Bullet Hell',
          slug: 'bullet-hell',
          language: 'eng',
          games_count: 8244,
          image_background:
            'https://media.rawg.io/media/games/226/2262cea0b385db6cf399f4be831603b0.jpg',
        },
        {
          id: 304,
          name: 'Character Action Game',
          slug: 'character-action-game',
          language: 'eng',
          games_count: 534,
          image_background:
            'https://media.rawg.io/media/games/556/556157feed9ee1f55f2b12b2973e30a3.jpg',
        },
        {
          id: 42495,
          name: 'Яркий главный герой',
          slug: 'iarkii-glavnyi-geroi',
          language: 'rus',
          games_count: 555,
          image_background:
            'https://media.rawg.io/media/screenshots/712/7124ba0575688acd9ab67fff771d60ee.jpg',
        },
        {
          id: 42493,
          name: 'Зрелищные сражения',
          slug: 'zrelishchnye-srazheniia',
          language: 'rus',
          games_count: 418,
          image_background:
            'https://media.rawg.io/media/games/785/78596308d98b093b05d54f6f1df48053.jpg',
        },
        {
          id: 254,
          name: 'Spectacle fighter',
          slug: 'spectacle-fighter',
          language: 'eng',
          games_count: 407,
          image_background:
            'https://media.rawg.io/media/games/5a4/5a44112251d70a25291cc33757220fce.jpg',
        },
      ],
      esrb_rating: {
        id: 4,
        name: 'Mature',
        slug: 'mature',
        name_en: 'Mature',
        name_ru: 'С 17 лет',
      },
      user_game: null,
      reviews_count: 1971,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      short_screenshots: [
        {
          id: -1,
          image:
            'https://media.rawg.io/media/games/5a4/5a44112251d70a25291cc33757220fce.jpg',
        },
        {
          id: 77414,
          image:
            'https://media.rawg.io/media/screenshots/286/28651ead277f96a8b950ded95b617b25.jpg',
        },
        {
          id: 77415,
          image:
            'https://media.rawg.io/media/screenshots/818/8186c49e4788cb1a9d346689afeff9e4.jpg',
        },
        {
          id: 77416,
          image:
            'https://media.rawg.io/media/screenshots/974/9747126200ff91b7b9515c4484e562a5.jpg',
        },
        {
          id: 77417,
          image:
            'https://media.rawg.io/media/screenshots/f49/f498382127612aaa8d834e3c3eb2be33.jpg',
        },
        {
          id: 77418,
          image:
            'https://media.rawg.io/media/screenshots/667/667f82af0d448aaec6cc119eb7ab6909.jpg',
        },
        {
          id: 77419,
          image:
            'https://media.rawg.io/media/screenshots/48f/48fdff19cfe1dc37d86a20af01cc4bb8.jpg',
        },
      ],
      parent_platforms: [
        {
          platform: {
            id: 1,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 2,
            name: 'PlayStation',
            slug: 'playstation',
          },
        },
        {
          platform: {
            id: 3,
            name: 'Xbox',
            slug: 'xbox',
          },
        },
        {
          platform: {
            id: 7,
            name: 'Nintendo',
            slug: 'nintendo',
          },
        },
      ],
      genres: [
        {
          id: 4,
          name: 'Action',
          slug: 'action',
        },
        {
          id: 5,
          name: 'RPG',
          slug: 'role-playing-games-rpg',
        },
      ],
    },
    {
      slug: 'fall-guys',
      name: 'Fall Guys: Ultimate Knockout',
      playtime: 5,
      platforms: [
        {
          platform: {
            id: 4,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 1,
            name: 'Xbox One',
            slug: 'xbox-one',
          },
        },
        {
          platform: {
            id: 18,
            name: 'PlayStation 4',
            slug: 'playstation4',
          },
        },
        {
          platform: {
            id: 186,
            name: 'Xbox Series S/X',
            slug: 'xbox-series-x',
          },
        },
        {
          platform: {
            id: 7,
            name: 'Nintendo Switch',
            slug: 'nintendo-switch',
          },
        },
      ],
      stores: [
        {
          store: {
            id: 1,
            name: 'Steam',
            slug: 'steam',
          },
        },
        {
          store: {
            id: 3,
            name: 'PlayStation Store',
            slug: 'playstation-store',
          },
        },
        {
          store: {
            id: 2,
            name: 'Xbox Store',
            slug: 'xbox-store',
          },
        },
        {
          store: {
            id: 6,
            name: 'Nintendo Store',
            slug: 'nintendo',
          },
        },
        {
          store: {
            id: 11,
            name: 'Epic Games',
            slug: 'epic-games',
          },
        },
      ],
      released: '2020-08-04',
      tba: false,
      background_image:
        'https://media.rawg.io/media/games/5eb/5eb49eb2fa0738fdb5bacea557b1bc57.jpg',
      rating: 3.74,
      rating_top: 4,
      ratings: [
        {
          id: 4,
          title: 'recommended',
          count: 727,
          percent: 59.79,
        },
        {
          id: 3,
          title: 'meh',
          count: 262,
          percent: 21.55,
        },
        {
          id: 5,
          title: 'exceptional',
          count: 156,
          percent: 12.83,
        },
        {
          id: 1,
          title: 'skip',
          count: 71,
          percent: 5.84,
        },
      ],
      ratings_count: 1193,
      reviews_text_count: 15,
      added: 7809,
      added_by_status: {
        yet: 101,
        owned: 6020,
        beaten: 366,
        toplay: 109,
        dropped: 930,
        playing: 283,
      },
      metacritic: 80,
      suggestions_count: 175,
      updated: '2023-07-12T13:28:35',
      id: 326292,
      score: null,
      clip: null,
      tags: [
        {
          id: 40847,
          name: 'Steam Achievements',
          slug: 'steam-achievements',
          language: 'eng',
          games_count: 30894,
          image_background:
            'https://media.rawg.io/media/games/6cd/6cd653e0aaef5ff8bbd295bf4bcb12eb.jpg',
        },
        {
          id: 42398,
          name: 'Инди',
          slug: 'indi-2',
          language: 'rus',
          games_count: 46302,
          image_background:
            'https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg',
        },
        {
          id: 40836,
          name: 'Full controller support',
          slug: 'full-controller-support',
          language: 'eng',
          games_count: 14502,
          image_background:
            'https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg',
        },
        {
          id: 42425,
          name: 'Для нескольких игроков',
          slug: 'dlia-neskolkikh-igrokov',
          language: 'rus',
          games_count: 7914,
          image_background:
            'https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg',
        },
        {
          id: 42399,
          name: 'Казуальная игра',
          slug: 'kazualnaia-igra',
          language: 'rus',
          games_count: 32067,
          image_background:
            'https://media.rawg.io/media/games/27b/27b02ffaab6b250cc31bf43baca1fc34.jpg',
        },
        {
          id: 42435,
          name: 'Шедевр',
          slug: 'shedevr',
          language: 'rus',
          games_count: 1059,
          image_background:
            'https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg',
        },
        {
          id: 397,
          name: 'Online multiplayer',
          slug: 'online-multiplayer',
          language: 'eng',
          games_count: 3805,
          image_background:
            'https://media.rawg.io/media/games/d1a/d1a1202a378607b6c635c8f18ace95dd.jpg',
        },
        {
          id: 40832,
          name: 'Cross-Platform Multiplayer',
          slug: 'cross-platform-multiplayer',
          language: 'eng',
          games_count: 2263,
          image_background:
            'https://media.rawg.io/media/games/35b/35b47c4d85cd6e08f3e2ca43ea5ce7bb.jpg',
        },
        {
          id: 42562,
          name: 'Для всей семьи',
          slug: 'dlia-vsei-semi',
          language: 'rus',
          games_count: 5661,
          image_background:
            'https://media.rawg.io/media/games/9a1/9a18c226cf379272c698f26d2b79b3da.jpg',
        },
        {
          id: 42453,
          name: 'ММО',
          slug: 'mmo-2',
          language: 'rus',
          games_count: 2182,
          image_background:
            'https://media.rawg.io/media/games/8ee/8eed88e297441ef9202b5d1d35d7d86f.jpg',
        },
        {
          id: 42531,
          name: 'Спортивная игра',
          slug: 'sportivnaia-igra',
          language: 'rus',
          games_count: 3570,
          image_background:
            'https://media.rawg.io/media/games/1fa/1fa75f0895240b12fc65cc98ae9649fd.jpg',
        },
        {
          id: 42675,
          name: 'Королевская битва',
          slug: 'korolevskaia-bitva',
          language: 'rus',
          games_count: 568,
          image_background:
            'https://media.rawg.io/media/screenshots/cd9/cd9b4b42455ca458425ee54052e61806.jpg',
        },
      ],
      esrb_rating: {
        id: 1,
        name: 'Everyone',
        slug: 'everyone',
        name_en: 'Everyone',
        name_ru: 'Для всех',
      },
      user_game: null,
      reviews_count: 1216,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      short_screenshots: [
        {
          id: -1,
          image:
            'https://media.rawg.io/media/games/5eb/5eb49eb2fa0738fdb5bacea557b1bc57.jpg',
        },
        {
          id: 1960566,
          image:
            'https://media.rawg.io/media/screenshots/1c5/1c5d40d58ac34b04576ffd7072989eea.jpg',
        },
        {
          id: 1960567,
          image:
            'https://media.rawg.io/media/screenshots/5a7/5a7accdc9cc61aa844b2d4f64f4c94b3.jpeg',
        },
        {
          id: 1960568,
          image:
            'https://media.rawg.io/media/screenshots/37c/37cecc1f17ad71b26fbbc5a651a4fe9b.jpg',
        },
        {
          id: 1960569,
          image:
            'https://media.rawg.io/media/screenshots/9c7/9c7a057ff1ce9122e66847b0eeedd20f.jpg',
        },
        {
          id: 1960570,
          image:
            'https://media.rawg.io/media/screenshots/af7/af7ccaa5f7c2826d9f41cd0fd5c16d4d.jpg',
        },
        {
          id: 1960571,
          image:
            'https://media.rawg.io/media/screenshots/4b1/4b118c6bc02c21ffcac1cb44717666a9.jpg',
        },
      ],
      parent_platforms: [
        {
          platform: {
            id: 1,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 2,
            name: 'PlayStation',
            slug: 'playstation',
          },
        },
        {
          platform: {
            id: 3,
            name: 'Xbox',
            slug: 'xbox',
          },
        },
        {
          platform: {
            id: 7,
            name: 'Nintendo',
            slug: 'nintendo',
          },
        },
      ],
      genres: [
        {
          id: 4,
          name: 'Action',
          slug: 'action',
        },
        {
          id: 40,
          name: 'Casual',
          slug: 'casual',
        },
        {
          id: 15,
          name: 'Sports',
          slug: 'sports',
        },
        {
          id: 51,
          name: 'Indie',
          slug: 'indie',
        },
        {
          id: 59,
          name: 'Massively Multiplayer',
          slug: 'massively-multiplayer',
        },
      ],
    },
    {
      slug: 'minecraft',
      name: 'Minecraft',
      playtime: 26,
      platforms: [
        {
          platform: {
            id: 4,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 1,
            name: 'Xbox One',
            slug: 'xbox-one',
          },
        },
        {
          platform: {
            id: 18,
            name: 'PlayStation 4',
            slug: 'playstation4',
          },
        },
        {
          platform: {
            id: 7,
            name: 'Nintendo Switch',
            slug: 'nintendo-switch',
          },
        },
        {
          platform: {
            id: 3,
            name: 'iOS',
            slug: 'ios',
          },
        },
        {
          platform: {
            id: 21,
            name: 'Android',
            slug: 'android',
          },
        },
        {
          platform: {
            id: 8,
            name: 'Nintendo 3DS',
            slug: 'nintendo-3ds',
          },
        },
        {
          platform: {
            id: 5,
            name: 'macOS',
            slug: 'macos',
          },
        },
        {
          platform: {
            id: 6,
            name: 'Linux',
            slug: 'linux',
          },
        },
        {
          platform: {
            id: 14,
            name: 'Xbox 360',
            slug: 'xbox360',
          },
        },
        {
          platform: {
            id: 16,
            name: 'PlayStation 3',
            slug: 'playstation3',
          },
        },
        {
          platform: {
            id: 19,
            name: 'PS Vita',
            slug: 'ps-vita',
          },
        },
        {
          platform: {
            id: 10,
            name: 'Wii U',
            slug: 'wii-u',
          },
        },
      ],
      stores: [
        {
          store: {
            id: 3,
            name: 'PlayStation Store',
            slug: 'playstation-store',
          },
        },
        {
          store: {
            id: 2,
            name: 'Xbox Store',
            slug: 'xbox-store',
          },
        },
        {
          store: {
            id: 4,
            name: 'App Store',
            slug: 'apple-appstore',
          },
        },
        {
          store: {
            id: 6,
            name: 'Nintendo Store',
            slug: 'nintendo',
          },
        },
        {
          store: {
            id: 8,
            name: 'Google Play',
            slug: 'google-play',
          },
        },
      ],
      released: '2009-05-10',
      tba: false,
      background_image:
        'https://media.rawg.io/media/games/b4e/b4e4c73d5aa4ec66bbf75375c4847a2b.jpg',
      rating: 4.42,
      rating_top: 5,
      ratings: [
        {
          id: 5,
          title: 'exceptional',
          count: 1580,
          percent: 59.15,
        },
        {
          id: 4,
          title: 'recommended',
          count: 810,
          percent: 30.33,
        },
        {
          id: 3,
          title: 'meh',
          count: 197,
          percent: 7.38,
        },
        {
          id: 1,
          title: 'skip',
          count: 84,
          percent: 3.14,
        },
      ],
      ratings_count: 2622,
      reviews_text_count: 26,
      added: 7652,
      added_by_status: {
        yet: 69,
        owned: 4354,
        beaten: 1507,
        toplay: 100,
        dropped: 956,
        playing: 666,
      },
      metacritic: 83,
      suggestions_count: 342,
      updated: '2023-07-13T06:48:21',
      id: 22509,
      score: null,
      clip: null,
      tags: [
        {
          id: 7,
          name: 'Multiplayer',
          slug: 'multiplayer',
          language: 'eng',
          games_count: 35108,
          image_background:
            'https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg',
        },
        {
          id: 37,
          name: 'Sandbox',
          slug: 'sandbox',
          language: 'eng',
          games_count: 5956,
          image_background:
            'https://media.rawg.io/media/games/c50/c5085506fe4b5e20fc7aa5ace842c20b.jpg',
        },
        {
          id: 125,
          name: 'Crafting',
          slug: 'crafting',
          language: 'eng',
          games_count: 3403,
          image_background:
            'https://media.rawg.io/media/games/7e7/7e79e3296a7f64e7535c9e5bb5aa4b53.jpg',
        },
        {
          id: 39,
          name: 'Building',
          slug: 'building',
          language: 'eng',
          games_count: 5185,
          image_background:
            'https://media.rawg.io/media/games/48c/48cb04ca483be865e3a83119c94e6097.jpg',
        },
        {
          id: 571,
          name: '3D',
          slug: '3d',
          language: 'eng',
          games_count: 77541,
          image_background:
            'https://media.rawg.io/media/games/9ca/9ca31615beee447f3ae1dc9b3b736dce.jpg',
        },
        {
          id: 62349,
          name: 'vr mod',
          slug: 'vr-mod',
          language: 'eng',
          games_count: 17,
          image_background:
            'https://media.rawg.io/media/screenshots/1bb/1bb3f78f0fe43b5d5ca2f3da5b638840.jpg',
        },
        {
          id: 43574,
          name: 'open-world',
          slug: 'open-world-2',
          language: 'eng',
          games_count: 8,
          image_background:
            'https://media.rawg.io/media/games/cb6/cb63a33e16f90fa6f008cc093239dad3.jpg',
        },
        {
          id: 4441,
          name: 'cube',
          slug: 'cube',
          language: 'eng',
          games_count: 2205,
          image_background:
            'https://media.rawg.io/media/screenshots/8af/8af7bd7950cf6c04957ba5c14988a56f.jpg',
        },
        {
          id: 14973,
          name: 'modding',
          slug: 'modding',
          language: 'eng',
          games_count: 6,
          image_background:
            'https://media.rawg.io/media/screenshots/19a/19a70fcb8c23bf1a5c6b73fe047216cd.jpg',
        },
        {
          id: 1372,
          name: 'procedural-generation',
          slug: 'procedural-generation-2',
          language: 'eng',
          games_count: 41,
          image_background:
            'https://media.rawg.io/media/screenshots/bfd/bfd5f710aa2e85cefdcc2497587d1401.jpg',
        },
      ],
      esrb_rating: {
        id: 2,
        name: 'Everyone 10+',
        slug: 'everyone-10-plus',
        name_en: 'Everyone 10+',
        name_ru: 'С 10 лет',
      },
      user_game: null,
      reviews_count: 2671,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      short_screenshots: [
        {
          id: -1,
          image:
            'https://media.rawg.io/media/games/b4e/b4e4c73d5aa4ec66bbf75375c4847a2b.jpg',
        },
        {
          id: 565530,
          image:
            'https://media.rawg.io/media/screenshots/324/32454b11adde40d87c046f310f0d710d.jpg',
        },
        {
          id: 565531,
          image:
            'https://media.rawg.io/media/screenshots/268/2689f04cbcabb467dd4948e30fe90f51.jpg',
        },
        {
          id: 565532,
          image:
            'https://media.rawg.io/media/screenshots/e83/e83fbaf3a8bdf1cdd855acf8fc90d2fe.jpg',
        },
        {
          id: 565533,
          image:
            'https://media.rawg.io/media/screenshots/a02/a021bf48ee5e492026e6464b3751cf35.jpg',
        },
        {
          id: 565534,
          image:
            'https://media.rawg.io/media/screenshots/0cc/0cc6c1534e782b9d040c665a1f78c6f7.jpg',
        },
        {
          id: 565535,
          image:
            'https://media.rawg.io/media/screenshots/3f6/3f66dd84a110f796a80baa4539430b68.jpg',
        },
      ],
      parent_platforms: [
        {
          platform: {
            id: 1,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 2,
            name: 'PlayStation',
            slug: 'playstation',
          },
        },
        {
          platform: {
            id: 3,
            name: 'Xbox',
            slug: 'xbox',
          },
        },
        {
          platform: {
            id: 4,
            name: 'iOS',
            slug: 'ios',
          },
        },
        {
          platform: {
            id: 8,
            name: 'Android',
            slug: 'android',
          },
        },
        {
          platform: {
            id: 5,
            name: 'Apple Macintosh',
            slug: 'mac',
          },
        },
        {
          platform: {
            id: 6,
            name: 'Linux',
            slug: 'linux',
          },
        },
        {
          platform: {
            id: 7,
            name: 'Nintendo',
            slug: 'nintendo',
          },
        },
      ],
      genres: [
        {
          id: 4,
          name: 'Action',
          slug: 'action',
        },
        {
          id: 11,
          name: 'Arcade',
          slug: 'arcade',
        },
        {
          id: 14,
          name: 'Simulation',
          slug: 'simulation',
        },
        {
          id: 51,
          name: 'Indie',
          slug: 'indie',
        },
        {
          id: 59,
          name: 'Massively Multiplayer',
          slug: 'massively-multiplayer',
        },
      ],
    },
    {
      slug: 'brothers-a-tale-of-two-sons-2',
      name: 'Brothers: A Tale of Two Sons',
      playtime: 3,
      platforms: [
        {
          platform: {
            id: 4,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 18,
            name: 'PlayStation 4',
            slug: 'playstation4',
          },
        },
        {
          platform: {
            id: 1,
            name: 'Xbox One',
            slug: 'xbox-one',
          },
        },
        {
          platform: {
            id: 7,
            name: 'Nintendo Switch',
            slug: 'nintendo-switch',
          },
        },
        {
          platform: {
            id: 3,
            name: 'iOS',
            slug: 'ios',
          },
        },
        {
          platform: {
            id: 21,
            name: 'Android',
            slug: 'android',
          },
        },
        {
          platform: {
            id: 14,
            name: 'Xbox 360',
            slug: 'xbox360',
          },
        },
        {
          platform: {
            id: 16,
            name: 'PlayStation 3',
            slug: 'playstation3',
          },
        },
      ],
      stores: [
        {
          store: {
            id: 1,
            name: 'Steam',
            slug: 'steam',
          },
        },
        {
          store: {
            id: 3,
            name: 'PlayStation Store',
            slug: 'playstation-store',
          },
        },
        {
          store: {
            id: 2,
            name: 'Xbox Store',
            slug: 'xbox-store',
          },
        },
        {
          store: {
            id: 4,
            name: 'App Store',
            slug: 'apple-appstore',
          },
        },
        {
          store: {
            id: 5,
            name: 'GOG',
            slug: 'gog',
          },
        },
        {
          store: {
            id: 6,
            name: 'Nintendo Store',
            slug: 'nintendo',
          },
        },
        {
          store: {
            id: 7,
            name: 'Xbox 360 Store',
            slug: 'xbox360',
          },
        },
        {
          store: {
            id: 8,
            name: 'Google Play',
            slug: 'google-play',
          },
        },
        {
          store: {
            id: 11,
            name: 'Epic Games',
            slug: 'epic-games',
          },
        },
      ],
      released: '2013-08-07',
      tba: false,
      background_image:
        'https://media.rawg.io/media/games/b6b/b6b20bfc4b34e312dbc8aac53c95a348.jpg',
      rating: 4.18,
      rating_top: 5,
      ratings: [
        {
          id: 5,
          title: 'exceptional',
          count: 678,
          percent: 43.66,
        },
        {
          id: 4,
          title: 'recommended',
          count: 635,
          percent: 40.89,
        },
        {
          id: 3,
          title: 'meh',
          count: 164,
          percent: 10.56,
        },
        {
          id: 1,
          title: 'skip',
          count: 76,
          percent: 4.89,
        },
      ],
      ratings_count: 1541,
      reviews_text_count: 5,
      added: 7650,
      added_by_status: {
        yet: 471,
        owned: 5096,
        beaten: 1490,
        toplay: 309,
        dropped: 254,
        playing: 30,
      },
      metacritic: 90,
      suggestions_count: 615,
      updated: '2023-07-12T10:24:07',
      id: 18240,
      score: null,
      clip: null,
      tags: [
        {
          id: 31,
          name: 'Singleplayer',
          slug: 'singleplayer',
          language: 'eng',
          games_count: 206544,
          image_background:
            'https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg',
        },
        {
          id: 42396,
          name: 'Для одного игрока',
          slug: 'dlia-odnogo-igroka',
          language: 'rus',
          games_count: 35171,
          image_background:
            'https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg',
        },
        {
          id: 42417,
          name: 'Экшен',
          slug: 'ekshen',
          language: 'rus',
          games_count: 32438,
          image_background:
            'https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg',
        },
        {
          id: 42392,
          name: 'Приключение',
          slug: 'prikliuchenie',
          language: 'rus',
          games_count: 30382,
          image_background:
            'https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg',
        },
        {
          id: 40847,
          name: 'Steam Achievements',
          slug: 'steam-achievements',
          language: 'eng',
          games_count: 30840,
          image_background:
            'https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg',
        },
        {
          id: 42398,
          name: 'Инди',
          slug: 'indi-2',
          language: 'rus',
          games_count: 46233,
          image_background:
            'https://media.rawg.io/media/games/9fa/9fa63622543e5d4f6d99aa9d73b043de.jpg',
        },
        {
          id: 7,
          name: 'Multiplayer',
          slug: 'multiplayer',
          language: 'eng',
          games_count: 35108,
          image_background:
            'https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg',
        },
        {
          id: 40836,
          name: 'Full controller support',
          slug: 'full-controller-support',
          language: 'eng',
          games_count: 14476,
          image_background:
            'https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg',
        },
        {
          id: 13,
          name: 'Atmospheric',
          slug: 'atmospheric',
          language: 'eng',
          games_count: 29635,
          image_background:
            'https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg',
        },
        {
          id: 42400,
          name: 'Атмосфера',
          slug: 'atmosfera',
          language: 'rus',
          games_count: 6083,
          image_background:
            'https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg',
        },
        {
          id: 42425,
          name: 'Для нескольких игроков',
          slug: 'dlia-neskolkikh-igrokov',
          language: 'rus',
          games_count: 7893,
          image_background:
            'https://media.rawg.io/media/games/713/713269608dc8f2f40f5a670a14b2de94.jpg',
        },
        {
          id: 42401,
          name: 'Отличный саундтрек',
          slug: 'otlichnyi-saundtrek',
          language: 'rus',
          games_count: 4463,
          image_background:
            'https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg',
        },
        {
          id: 42,
          name: 'Great Soundtrack',
          slug: 'great-soundtrack',
          language: 'eng',
          games_count: 3241,
          image_background:
            'https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg',
        },
        {
          id: 42394,
          name: 'Глубокий сюжет',
          slug: 'glubokii-siuzhet',
          language: 'rus',
          games_count: 9153,
          image_background:
            'https://media.rawg.io/media/games/b7b/b7b8381707152afc7d91f5d95de70e39.jpg',
        },
        {
          id: 118,
          name: 'Story Rich',
          slug: 'story-rich',
          language: 'eng',
          games_count: 18334,
          image_background:
            'https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg',
        },
        {
          id: 42399,
          name: 'Казуальная игра',
          slug: 'kazualnaia-igra',
          language: 'rus',
          games_count: 31993,
          image_background:
            'https://media.rawg.io/media/games/852/8522935d8ab27b610a254b52de0da212.jpg',
        },
        {
          id: 42435,
          name: 'Шедевр',
          slug: 'shedevr',
          language: 'rus',
          games_count: 1059,
          image_background:
            'https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg',
        },
        {
          id: 45,
          name: '2D',
          slug: '2d',
          language: 'eng',
          games_count: 188239,
          image_background:
            'https://media.rawg.io/media/games/fd9/fd92f105dcd6491bc5d61135033d1f19.jpg',
        },
        {
          id: 149,
          name: 'Third Person',
          slug: 'third-person',
          language: 'eng',
          games_count: 9504,
          image_background:
            'https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg',
        },
        {
          id: 42441,
          name: 'От третьего лица',
          slug: 'ot-tretego-litsa',
          language: 'rus',
          games_count: 5015,
          image_background:
            'https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg',
        },
        {
          id: 42465,
          name: 'Головоломка',
          slug: 'golovolomka',
          language: 'rus',
          games_count: 11685,
          image_background:
            'https://media.rawg.io/media/games/fd8/fd882c8267a44621a0de6f9cec77ae90.jpg',
        },
        {
          id: 42480,
          name: 'Фэнтези',
          slug: 'fentezi',
          language: 'rus',
          games_count: 8364,
          image_background:
            'https://media.rawg.io/media/games/8d4/8d46786ca86b1d95f3dc7e700e2dc4dd.jpg',
        },
        {
          id: 64,
          name: 'Fantasy',
          slug: 'fantasy',
          language: 'eng',
          games_count: 24622,
          image_background:
            'https://media.rawg.io/media/screenshots/88b/88b5f27f07d6ca2f8a3cd0b36e03a670.jpg',
        },
        {
          id: 1,
          name: 'Survival',
          slug: 'survival',
          language: 'eng',
          games_count: 7286,
          image_background:
            'https://media.rawg.io/media/games/b54/b54598d1d5cc31899f4f0a7e3122a7b0.jpg',
        },
        {
          id: 42452,
          name: 'Выживание',
          slug: 'vyzhivanie',
          language: 'rus',
          games_count: 4774,
          image_background:
            'https://media.rawg.io/media/games/7f6/7f6cd70ba2ad57053b4847c13569f2d8.jpg',
        },
        {
          id: 42463,
          name: 'Платформер',
          slug: 'platformer-2',
          language: 'rus',
          games_count: 6582,
          image_background:
            'https://media.rawg.io/media/games/9cc/9cc11e2e81403186c7fa9c00c143d6e4.jpg',
        },
        {
          id: 42449,
          name: 'Локальный мультиплеер',
          slug: 'lokalnyi-multipleer',
          language: 'rus',
          games_count: 2944,
          image_background:
            'https://media.rawg.io/media/games/89a/89a700d3c6a76bd0610ca89ccd20da54.jpg',
        },
        {
          id: 75,
          name: 'Local Co-Op',
          slug: 'local-co-op',
          language: 'eng',
          games_count: 4982,
          image_background:
            'https://media.rawg.io/media/games/33b/33b825c76382931df0fd8ecddf5caebe.jpg',
        },
        {
          id: 42416,
          name: 'Контроллер',
          slug: 'kontroller',
          language: 'rus',
          games_count: 3979,
          image_background:
            'https://media.rawg.io/media/games/410/41033a495ce8f7fd4b0934bdb975f12a.jpg',
        },
        {
          id: 115,
          name: 'Controller',
          slug: 'controller',
          language: 'eng',
          games_count: 9522,
          image_background:
            'https://media.rawg.io/media/games/8d4/8d46786ca86b1d95f3dc7e700e2dc4dd.jpg',
        },
        {
          id: 336,
          name: 'controller support',
          slug: 'controller-support',
          language: 'eng',
          games_count: 293,
          image_background:
            'https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg',
        },
        {
          id: 111,
          name: 'Short',
          slug: 'short',
          language: 'eng',
          games_count: 57476,
          image_background:
            'https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg',
        },
        {
          id: 42457,
          name: 'Короткая',
          slug: 'korotkaia',
          language: 'rus',
          games_count: 1345,
          image_background:
            'https://media.rawg.io/media/games/6a2/6a2e48933245e2cd3c92248c75c925e1.jpg',
        },
        {
          id: 42601,
          name: 'Цветастая',
          slug: 'tsvetastaia',
          language: 'rus',
          games_count: 9417,
          image_background:
            'https://media.rawg.io/media/screenshots/d07/d07a7e2f7be2428c51ad26326c84e21d.jpg',
        },
        {
          id: 165,
          name: 'Colorful',
          slug: 'colorful',
          language: 'eng',
          games_count: 17996,
          image_background:
            'https://media.rawg.io/media/games/ba9/ba9ad92b6d04825bd15a407c6059db94.jpg',
        },
        {
          id: 42555,
          name: 'Симулятор ходьбы',
          slug: 'simuliator-khodby',
          language: 'rus',
          games_count: 1850,
          image_background:
            'https://media.rawg.io/media/games/62c/62c7c8b28a27b83680b22fb9d33fc619.jpg',
        },
        {
          id: 42426,
          name: 'Пошаговая стратегия',
          slug: 'poshagovaia-strategiia',
          language: 'rus',
          games_count: 2398,
          image_background:
            'https://media.rawg.io/media/games/72b/72bf31a664fcbcb079baf4ef8221f308.jpg',
        },
        {
          id: 101,
          name: 'Turn-Based Strategy',
          slug: 'turn-based-strategy',
          language: 'eng',
          games_count: 4307,
          image_background:
            'https://media.rawg.io/media/games/849/849c187c0b5d4cd1ee3283148f7e4cdb.jpg',
        },
        {
          id: 91,
          name: 'Walking Simulator',
          slug: 'walking-simulator',
          language: 'eng',
          games_count: 6288,
          image_background:
            'https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg',
        },
        {
          id: 42515,
          name: 'Вид сверху',
          slug: 'vid-sverkhu',
          language: 'rus',
          games_count: 4428,
          image_background:
            'https://media.rawg.io/media/games/d28/d28e64fd1af23d1846d20b47dfa933f8.jpeg',
        },
        {
          id: 61,
          name: 'Top-Down',
          slug: 'top-down',
          language: 'eng',
          games_count: 23032,
          image_background:
            'https://media.rawg.io/media/screenshots/2fc/2fc6994425146f9dba3133400b414e29.jpg',
        },
        {
          id: 42690,
          name: 'Красивая',
          slug: 'krasivaia',
          language: 'rus',
          games_count: 536,
          image_background:
            'https://media.rawg.io/media/games/90c/90caf1fcb836cad70013452f6f239008.jpg',
        },
        {
          id: 42468,
          name: 'Головоломка-платформер',
          slug: 'golovolomka-platformer',
          language: 'rus',
          games_count: 2817,
          image_background:
            'https://media.rawg.io/media/games/6c8/6c8cb4780ce30b76b944cf656e8fff49.jpg',
        },
        {
          id: 133,
          name: '3D Vision',
          slug: '3d-vision',
          language: 'eng',
          games_count: 587,
          image_background:
            'https://media.rawg.io/media/games/e0f/e0f05a97ff926acf4c8f43e0849b6832.jpg',
        },
        {
          id: 42606,
          name: 'Стилизация',
          slug: 'stilizatsiia',
          language: 'rus',
          games_count: 4391,
          image_background:
            'https://media.rawg.io/media/screenshots/066/066eb1b7a3f332b8089645fbf8c3ebdc.jpg',
        },
        {
          id: 305,
          name: 'Linear',
          slug: 'linear',
          language: 'eng',
          games_count: 4009,
          image_background:
            'https://media.rawg.io/media/games/e9c/e9c042d14515eb3ff7cb4db9fe78e435.jpg',
        },
        {
          id: 42483,
          name: 'Рисованная графика',
          slug: 'risovannaia-grafika',
          language: 'rus',
          games_count: 2866,
          image_background:
            'https://media.rawg.io/media/games/8f5/8f51cd193717f03ec820b5caece4f963.jpg',
        },
        {
          id: 209,
          name: 'Drama',
          slug: 'drama',
          language: 'eng',
          games_count: 2824,
          image_background:
            'https://media.rawg.io/media/games/0be/0bea0a08a4d954337305391b778a7f37.jpg',
        },
        {
          id: 166,
          name: 'Stylized',
          slug: 'stylized',
          language: 'eng',
          games_count: 4411,
          image_background:
            'https://media.rawg.io/media/games/257/257c497aa4060f4a697ccbf5e99ec230.jpg',
        },
        {
          id: 42546,
          name: 'Пошаговая тактика',
          slug: 'poshagovaia-taktika',
          language: 'rus',
          games_count: 2157,
          image_background:
            'https://media.rawg.io/media/games/424/424facd40f4eb1f2794fe4b4bb28a277.jpg',
        },
        {
          id: 258,
          name: 'Hand-drawn',
          slug: 'hand-drawn',
          language: 'eng',
          games_count: 5755,
          image_background:
            'https://media.rawg.io/media/games/c47/c4796c4c49e7e06ad328e07aa8944cdd.jpg',
        },
        {
          id: 42691,
          name: 'Эмоциональная',
          slug: 'emotsionalnaia',
          language: 'rus',
          games_count: 1737,
          image_background:
            'https://media.rawg.io/media/games/694/694ba14510656e8787536349220cb168.jpg',
        },
        {
          id: 42650,
          name: 'Драма',
          slug: 'drama-2',
          language: 'rus',
          games_count: 2213,
          image_background:
            'https://media.rawg.io/media/games/643/6431f15213a854efd273943f2cf6a925.jpg',
        },
        {
          id: 176,
          name: 'Turn-Based Tactics',
          slug: 'turn-based-tactics',
          language: 'eng',
          games_count: 2024,
          image_background:
            'https://media.rawg.io/media/games/628/6288a95a4a290128705891d0d7e172b6.jpg',
        },
        {
          id: 205,
          name: 'Lore-Rich',
          slug: 'lore-rich',
          language: 'eng',
          games_count: 838,
          image_background:
            'https://media.rawg.io/media/games/bdc/bdcb4e528bdd91bc4b3ab75fedb31f7b.jpg',
        },
        {
          id: 42594,
          name: 'Проработанная вселенная',
          slug: 'prorabotannaia-vselennaia',
          language: 'rus',
          games_count: 865,
          image_background:
            'https://media.rawg.io/media/screenshots/871/87167cbda7085dbeb98bfc92c19d5a42.jpg',
        },
        {
          id: 49955,
          name: 'Puzzle Platformer',
          slug: 'puzzle-platformer-2',
          language: 'eng',
          games_count: 2105,
          image_background:
            'https://media.rawg.io/media/screenshots/f01/f016a6b1d3a8be7aff0529719cf071a7.jpg',
        },
        {
          id: 298,
          name: 'Grid-Based Movement',
          slug: 'grid-based-movement',
          language: 'eng',
          games_count: 721,
          image_background:
            'https://media.rawg.io/media/screenshots/c5c/c5c743474d865319ef431e02b429dff4.jpg',
        },
        {
          id: 42717,
          name: 'Сокобан',
          slug: 'sokoban-2',
          language: 'rus',
          games_count: 377,
          image_background:
            'https://media.rawg.io/media/screenshots/e8a/e8aa6a7a53cbad0237a965ca8444721b.jpg',
        },
        {
          id: 3319,
          name: 'solitaire',
          slug: 'solitaire',
          language: 'eng',
          games_count: 2151,
          image_background:
            'https://media.rawg.io/media/screenshots/bcd/bcd0c6d76fe6c8d8e8286a2c09e0e002.jpg',
        },
        {
          id: 576,
          name: 'Faith',
          slug: 'faith',
          language: 'eng',
          games_count: 330,
          image_background:
            'https://media.rawg.io/media/screenshots/934/934976f9dbe4fa3bc8c21cf0822cd8c3.jpg',
        },
        {
          id: 325,
          name: 'Foreign',
          slug: 'foreign',
          language: 'eng',
          games_count: 231,
          image_background:
            'https://media.rawg.io/media/screenshots/b28/b284413ee273b5f23336f3a03fe316fc.jpg',
        },
        {
          id: 42724,
          name: 'Верования',
          slug: 'verovaniia',
          language: 'rus',
          games_count: 280,
          image_background:
            'https://media.rawg.io/media/screenshots/cb0/cb02c127fec15c996ccf5340bbbd2180.jpg',
        },
        {
          id: 320,
          name: 'Sokoban',
          slug: 'sokoban',
          language: 'eng',
          games_count: 1151,
          image_background:
            'https://media.rawg.io/media/screenshots/f17/f17fe3119f0922161e489755b8cb3768.jpg',
        },
        {
          id: 58265,
          name: 'Пасьянс',
          slug: 'pasians',
          language: 'rus',
          games_count: 362,
          image_background:
            'https://media.rawg.io/media/screenshots/64e/64ea9c8cfa8d95fae4e9c95c7cadd8ac.jpg',
        },
        {
          id: 75152,
          name: 'Зарубежная',
          slug: 'zarubezhnaia',
          language: 'rus',
          games_count: 103,
          image_background:
            'https://media.rawg.io/media/games/b6b/b6b20bfc4b34e312dbc8aac53c95a348.jpg',
        },
        {
          id: 70355,
          name: 'Перемещение по сетке',
          slug: 'peremeshchenie-po-setke',
          language: 'rus',
          games_count: 426,
          image_background:
            'https://media.rawg.io/media/screenshots/8a9/8a9a8e97cdf1d8a3620671654a3f316e.jpg',
        },
      ],
      esrb_rating: {
        id: 3,
        name: 'Teen',
        slug: 'teen',
        name_en: 'Teen',
        name_ru: 'С 13 лет',
      },
      user_game: null,
      reviews_count: 1553,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      short_screenshots: [
        {
          id: -1,
          image:
            'https://media.rawg.io/media/games/b6b/b6b20bfc4b34e312dbc8aac53c95a348.jpg',
        },
        {
          id: 169510,
          image:
            'https://media.rawg.io/media/screenshots/14d/14dcdb86ae346a69022ab5837016fdc1.jpg',
        },
        {
          id: 169511,
          image:
            'https://media.rawg.io/media/screenshots/5e7/5e71a4ccee940eb51a6110535f79d4ed.jpg',
        },
        {
          id: 169512,
          image:
            'https://media.rawg.io/media/screenshots/709/70954b4dac5e2a4966293ce0c7dbc6c4.jpg',
        },
        {
          id: 169513,
          image:
            'https://media.rawg.io/media/screenshots/08f/08fd4301c46d14aed67c9d7f98b12ec0.jpg',
        },
        {
          id: 169514,
          image:
            'https://media.rawg.io/media/screenshots/5bd/5bd04279767fc7febc37e460da236b28.jpg',
        },
        {
          id: 169515,
          image:
            'https://media.rawg.io/media/screenshots/900/900738abfbca21ada3170e5f9dc7a333.jpg',
        },
      ],
      parent_platforms: [
        {
          platform: {
            id: 1,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 2,
            name: 'PlayStation',
            slug: 'playstation',
          },
        },
        {
          platform: {
            id: 3,
            name: 'Xbox',
            slug: 'xbox',
          },
        },
        {
          platform: {
            id: 4,
            name: 'iOS',
            slug: 'ios',
          },
        },
        {
          platform: {
            id: 8,
            name: 'Android',
            slug: 'android',
          },
        },
        {
          platform: {
            id: 7,
            name: 'Nintendo',
            slug: 'nintendo',
          },
        },
      ],
      genres: [
        {
          id: 51,
          name: 'Indie',
          slug: 'indie',
        },
        {
          id: 3,
          name: 'Adventure',
          slug: 'adventure',
        },
        {
          id: 4,
          name: 'Action',
          slug: 'action',
        },
      ],
    },
    {
      slug: 'resident-evil-7-biohazard',
      name: 'Resident Evil 7: Biohazard',
      playtime: 10,
      platforms: [
        {
          platform: {
            id: 4,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 1,
            name: 'Xbox One',
            slug: 'xbox-one',
          },
        },
        {
          platform: {
            id: 18,
            name: 'PlayStation 4',
            slug: 'playstation4',
          },
        },
        {
          platform: {
            id: 7,
            name: 'Nintendo Switch',
            slug: 'nintendo-switch',
          },
        },
      ],
      stores: [
        {
          store: {
            id: 1,
            name: 'Steam',
            slug: 'steam',
          },
        },
        {
          store: {
            id: 3,
            name: 'PlayStation Store',
            slug: 'playstation-store',
          },
        },
        {
          store: {
            id: 2,
            name: 'Xbox Store',
            slug: 'xbox-store',
          },
        },
      ],
      released: '2017-01-23',
      tba: false,
      background_image:
        'https://media.rawg.io/media/games/cee/cee577e2097a59b77193fe2bce94667d.jpg',
      rating: 4.32,
      rating_top: 5,
      ratings: [
        {
          id: 5,
          title: 'exceptional',
          count: 882,
          percent: 49.86,
        },
        {
          id: 4,
          title: 'recommended',
          count: 705,
          percent: 39.85,
        },
        {
          id: 3,
          title: 'meh',
          count: 118,
          percent: 6.67,
        },
        {
          id: 1,
          title: 'skip',
          count: 64,
          percent: 3.62,
        },
      ],
      ratings_count: 1739,
      reviews_text_count: 16,
      added: 7594,
      added_by_status: {
        yet: 393,
        owned: 4846,
        beaten: 1585,
        toplay: 354,
        dropped: 288,
        playing: 129,
      },
      metacritic: 85,
      suggestions_count: 275,
      updated: '2023-07-12T23:55:51',
      id: 480,
      score: null,
      clip: null,
      tags: [
        {
          id: 31,
          name: 'Singleplayer',
          slug: 'singleplayer',
          language: 'eng',
          games_count: 206544,
          image_background:
            'https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg',
        },
        {
          id: 42396,
          name: 'Для одного игрока',
          slug: 'dlia-odnogo-igroka',
          language: 'rus',
          games_count: 35171,
          image_background:
            'https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg',
        },
        {
          id: 42417,
          name: 'Экшен',
          slug: 'ekshen',
          language: 'rus',
          games_count: 32438,
          image_background:
            'https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg',
        },
        {
          id: 42392,
          name: 'Приключение',
          slug: 'prikliuchenie',
          language: 'rus',
          games_count: 30382,
          image_background:
            'https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg',
        },
        {
          id: 40847,
          name: 'Steam Achievements',
          slug: 'steam-achievements',
          language: 'eng',
          games_count: 30840,
          image_background:
            'https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg',
        },
        {
          id: 7,
          name: 'Multiplayer',
          slug: 'multiplayer',
          language: 'eng',
          games_count: 35108,
          image_background:
            'https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg',
        },
        {
          id: 40836,
          name: 'Full controller support',
          slug: 'full-controller-support',
          language: 'eng',
          games_count: 14476,
          image_background:
            'https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg',
        },
        {
          id: 13,
          name: 'Atmospheric',
          slug: 'atmospheric',
          language: 'eng',
          games_count: 29635,
          image_background:
            'https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg',
        },
        {
          id: 40849,
          name: 'Steam Cloud',
          slug: 'steam-cloud',
          language: 'eng',
          games_count: 14345,
          image_background:
            'https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg',
        },
        {
          id: 42400,
          name: 'Атмосфера',
          slug: 'atmosfera',
          language: 'rus',
          games_count: 6083,
          image_background:
            'https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg',
        },
        {
          id: 42425,
          name: 'Для нескольких игроков',
          slug: 'dlia-neskolkikh-igrokov',
          language: 'rus',
          games_count: 7893,
          image_background:
            'https://media.rawg.io/media/games/713/713269608dc8f2f40f5a670a14b2de94.jpg',
        },
        {
          id: 7808,
          name: 'steam-trading-cards',
          slug: 'steam-trading-cards',
          language: 'eng',
          games_count: 7571,
          image_background:
            'https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg',
        },
        {
          id: 42394,
          name: 'Глубокий сюжет',
          slug: 'glubokii-siuzhet',
          language: 'rus',
          games_count: 9153,
          image_background:
            'https://media.rawg.io/media/games/b7b/b7b8381707152afc7d91f5d95de70e39.jpg',
        },
        {
          id: 118,
          name: 'Story Rich',
          slug: 'story-rich',
          language: 'eng',
          games_count: 18334,
          image_background:
            'https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg',
        },
        {
          id: 42428,
          name: 'Шутер',
          slug: 'shuter',
          language: 'rus',
          games_count: 6857,
          image_background:
            'https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg',
        },
        {
          id: 8,
          name: 'First-Person',
          slug: 'first-person',
          language: 'eng',
          games_count: 28676,
          image_background:
            'https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg',
        },
        {
          id: 42429,
          name: 'От первого лица',
          slug: 'ot-pervogo-litsa',
          language: 'rus',
          games_count: 7731,
          image_background:
            'https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg',
        },
        {
          id: 16,
          name: 'Horror',
          slug: 'horror',
          language: 'eng',
          games_count: 41984,
          image_background:
            'https://media.rawg.io/media/games/7c4/7c448374df84b607f67ce9182a3a3ca7.jpg',
        },
        {
          id: 30,
          name: 'FPS',
          slug: 'fps',
          language: 'eng',
          games_count: 12151,
          image_background:
            'https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg',
        },
        {
          id: 42427,
          name: 'Шутер от первого лица',
          slug: 'shuter-ot-pervogo-litsa',
          language: 'rus',
          games_count: 4139,
          image_background:
            'https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg',
        },
        {
          id: 42465,
          name: 'Головоломка',
          slug: 'golovolomka',
          language: 'rus',
          games_count: 11685,
          image_background:
            'https://media.rawg.io/media/games/fd8/fd882c8267a44621a0de6f9cec77ae90.jpg',
        },
        {
          id: 42461,
          name: 'Классика',
          slug: 'klassika',
          language: 'rus',
          games_count: 1394,
          image_background:
            'https://media.rawg.io/media/games/7a2/7a2500ee8b2c0e1ff268bb4479463dea.jpg',
        },
        {
          id: 42491,
          name: 'Мясо',
          slug: 'miaso',
          language: 'rus',
          games_count: 3940,
          image_background:
            'https://media.rawg.io/media/games/e04/e04963f3ac4c4fa83a1dc0b9231e50db.jpg',
        },
        {
          id: 26,
          name: 'Gore',
          slug: 'gore',
          language: 'eng',
          games_count: 5076,
          image_background:
            'https://media.rawg.io/media/games/f6b/f6bed028b02369d4cab548f4f9337e81.jpg',
        },
        {
          id: 193,
          name: 'Classic',
          slug: 'classic',
          language: 'eng',
          games_count: 1728,
          image_background:
            'https://media.rawg.io/media/games/b54/b54598d1d5cc31899f4f0a7e3122a7b0.jpg',
        },
        {
          id: 6,
          name: 'Exploration',
          slug: 'exploration',
          language: 'eng',
          games_count: 19523,
          image_background:
            'https://media.rawg.io/media/games/9aa/9aa42d16d425fa6f179fc9dc2f763647.jpg',
        },
        {
          id: 1,
          name: 'Survival',
          slug: 'survival',
          language: 'eng',
          games_count: 7286,
          image_background:
            'https://media.rawg.io/media/games/b54/b54598d1d5cc31899f4f0a7e3122a7b0.jpg',
        },
        {
          id: 42452,
          name: 'Выживание',
          slug: 'vyzhivanie',
          language: 'rus',
          games_count: 4774,
          image_background:
            'https://media.rawg.io/media/games/7f6/7f6cd70ba2ad57053b4847c13569f2d8.jpg',
        },
        {
          id: 42402,
          name: 'Насилие',
          slug: 'nasilie',
          language: 'rus',
          games_count: 4884,
          image_background:
            'https://media.rawg.io/media/games/858/858c016de0cf7bc21a57dcc698a04a0c.jpg',
        },
        {
          id: 34,
          name: 'Violent',
          slug: 'violent',
          language: 'eng',
          games_count: 5927,
          image_background:
            'https://media.rawg.io/media/games/5fa/5fae5fec3c943179e09da67a4427d68f.jpg',
        },
        {
          id: 42464,
          name: 'Исследование',
          slug: 'issledovanie',
          language: 'rus',
          games_count: 2979,
          image_background:
            'https://media.rawg.io/media/games/174/1743b3dd185bda4a7be349347d4064df.jpg',
        },
        {
          id: 69,
          name: 'Action-Adventure',
          slug: 'action-adventure',
          language: 'eng',
          games_count: 13616,
          image_background:
            'https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg',
        },
        {
          id: 63,
          name: 'Zombies',
          slug: 'zombies',
          language: 'eng',
          games_count: 9683,
          image_background:
            'https://media.rawg.io/media/games/f6f/f6f39c5b56413f7f4513b25989a1b747.jpg',
        },
        {
          id: 42544,
          name: 'Зомби',
          slug: 'zombi-2',
          language: 'rus',
          games_count: 2033,
          image_background:
            'https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg',
        },
        {
          id: 42471,
          name: 'Хоррор на выживание',
          slug: 'khorror-na-vyzhivanie',
          language: 'rus',
          games_count: 2249,
          image_background:
            'https://media.rawg.io/media/games/c11/c11a0b92b4c28f2e0db489f430142653.jpg',
        },
        {
          id: 17,
          name: 'Survival Horror',
          slug: 'survival-horror',
          language: 'eng',
          games_count: 7621,
          image_background:
            'https://media.rawg.io/media/games/348/348640e78a7fcd4bb7dcad4fea014eeb.jpg',
        },
        {
          id: 110,
          name: 'Cinematic',
          slug: 'cinematic',
          language: 'eng',
          games_count: 1441,
          image_background:
            'https://media.rawg.io/media/games/7ac/7aca7ccf0e70cd0974cb899ab9e5158e.jpg',
        },
        {
          id: 120,
          name: 'Memes',
          slug: 'memes',
          language: 'eng',
          games_count: 1578,
          image_background:
            'https://media.rawg.io/media/games/264/2642b17a7885f7abc4fd018e98943242.jpg',
        },
        {
          id: 33,
          name: 'VR',
          slug: 'vr',
          language: 'eng',
          games_count: 11688,
          image_background:
            'https://media.rawg.io/media/games/a01/a01b34c722ceec784817381eb1824fa5.jpg',
        },
        {
          id: 142,
          name: 'Detective',
          slug: 'detective',
          language: 'eng',
          games_count: 2717,
          image_background:
            'https://media.rawg.io/media/games/c50/c5085506fe4b5e20fc7aa5ace842c20b.jpg',
        },
        {
          id: 78,
          name: 'America',
          slug: 'america',
          language: 'eng',
          games_count: 475,
          image_background:
            'https://media.rawg.io/media/screenshots/98c/98c25faca7a3e594188e0ae5fa112eed.jpg',
        },
      ],
      esrb_rating: {
        id: 4,
        name: 'Mature',
        slug: 'mature',
        name_en: 'Mature',
        name_ru: 'С 17 лет',
      },
      user_game: null,
      reviews_count: 1769,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      short_screenshots: [
        {
          id: -1,
          image:
            'https://media.rawg.io/media/games/cee/cee577e2097a59b77193fe2bce94667d.jpg',
        },
        {
          id: 4123,
          image:
            'https://media.rawg.io/media/screenshots/9c7/9c7016a1d1a8f66d67266e35452a3cf4.jpg',
        },
        {
          id: 4126,
          image:
            'https://media.rawg.io/media/screenshots/315/3152c8a5165faaefc5429ab54399e3a6.jpg',
        },
        {
          id: 4127,
          image:
            'https://media.rawg.io/media/screenshots/753/753c32daa8a2685f6aecc052e85197f7.jpg',
        },
        {
          id: 4128,
          image:
            'https://media.rawg.io/media/screenshots/3f9/3f916c888d9e135adb456399550fd03e.jpg',
        },
        {
          id: 59869,
          image:
            'https://media.rawg.io/media/screenshots/9bd/9bd7368147200c3e1e615950c4f3fc73.jpg',
        },
        {
          id: 59874,
          image:
            'https://media.rawg.io/media/screenshots/804/804d33ab33db680543a6df814c15c8e3.jpg',
        },
      ],
      parent_platforms: [
        {
          platform: {
            id: 1,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 2,
            name: 'PlayStation',
            slug: 'playstation',
          },
        },
        {
          platform: {
            id: 3,
            name: 'Xbox',
            slug: 'xbox',
          },
        },
        {
          platform: {
            id: 7,
            name: 'Nintendo',
            slug: 'nintendo',
          },
        },
      ],
      genres: [
        {
          id: 2,
          name: 'Shooter',
          slug: 'shooter',
        },
        {
          id: 3,
          name: 'Adventure',
          slug: 'adventure',
        },
        {
          id: 4,
          name: 'Action',
          slug: 'action',
        },
      ],
    },
    {
      slug: 'cities-skylines',
      name: 'Cities: Skylines',
      playtime: 8,
      platforms: [
        {
          platform: {
            id: 4,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 1,
            name: 'Xbox One',
            slug: 'xbox-one',
          },
        },
        {
          platform: {
            id: 18,
            name: 'PlayStation 4',
            slug: 'playstation4',
          },
        },
        {
          platform: {
            id: 7,
            name: 'Nintendo Switch',
            slug: 'nintendo-switch',
          },
        },
        {
          platform: {
            id: 5,
            name: 'macOS',
            slug: 'macos',
          },
        },
        {
          platform: {
            id: 6,
            name: 'Linux',
            slug: 'linux',
          },
        },
      ],
      stores: [
        {
          store: {
            id: 1,
            name: 'Steam',
            slug: 'steam',
          },
        },
        {
          store: {
            id: 3,
            name: 'PlayStation Store',
            slug: 'playstation-store',
          },
        },
        {
          store: {
            id: 2,
            name: 'Xbox Store',
            slug: 'xbox-store',
          },
        },
        {
          store: {
            id: 6,
            name: 'Nintendo Store',
            slug: 'nintendo',
          },
        },
        {
          store: {
            id: 11,
            name: 'Epic Games',
            slug: 'epic-games',
          },
        },
      ],
      released: '2015-03-10',
      tba: false,
      background_image:
        'https://media.rawg.io/media/games/25c/25c4776ab5723d5d735d8bf617ca12d9.jpg',
      rating: 4.13,
      rating_top: 4,
      ratings: [
        {
          id: 4,
          title: 'recommended',
          count: 787,
          percent: 55.93,
        },
        {
          id: 5,
          title: 'exceptional',
          count: 440,
          percent: 31.27,
        },
        {
          id: 3,
          title: 'meh',
          count: 141,
          percent: 10.02,
        },
        {
          id: 1,
          title: 'skip',
          count: 39,
          percent: 2.77,
        },
      ],
      ratings_count: 1397,
      reviews_text_count: 6,
      added: 7521,
      added_by_status: {
        yet: 366,
        owned: 5581,
        beaten: 452,
        toplay: 121,
        dropped: 735,
        playing: 266,
      },
      metacritic: 85,
      suggestions_count: 421,
      updated: '2023-07-10T00:52:30',
      id: 10065,
      score: null,
      clip: null,
      tags: [
        {
          id: 31,
          name: 'Singleplayer',
          slug: 'singleplayer',
          language: 'eng',
          games_count: 206544,
          image_background:
            'https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg',
        },
        {
          id: 42396,
          name: 'Для одного игрока',
          slug: 'dlia-odnogo-igroka',
          language: 'rus',
          games_count: 35171,
          image_background:
            'https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg',
        },
        {
          id: 42417,
          name: 'Экшен',
          slug: 'ekshen',
          language: 'rus',
          games_count: 32438,
          image_background:
            'https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg',
        },
        {
          id: 40847,
          name: 'Steam Achievements',
          slug: 'steam-achievements',
          language: 'eng',
          games_count: 30840,
          image_background:
            'https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg',
        },
        {
          id: 40849,
          name: 'Steam Cloud',
          slug: 'steam-cloud',
          language: 'eng',
          games_count: 14345,
          image_background:
            'https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg',
        },
        {
          id: 7808,
          name: 'steam-trading-cards',
          slug: 'steam-trading-cards',
          language: 'eng',
          games_count: 7571,
          image_background:
            'https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg',
        },
        {
          id: 42401,
          name: 'Отличный саундтрек',
          slug: 'otlichnyi-saundtrek',
          language: 'rus',
          games_count: 4463,
          image_background:
            'https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg',
        },
        {
          id: 42,
          name: 'Great Soundtrack',
          slug: 'great-soundtrack',
          language: 'eng',
          games_count: 3241,
          image_background:
            'https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg',
        },
        {
          id: 42421,
          name: 'Стратегия',
          slug: 'strategiia',
          language: 'rus',
          games_count: 15056,
          image_background:
            'https://media.rawg.io/media/games/21a/21ad672cedee9b4378abb6c2d2e626ee.jpg',
        },
        {
          id: 42399,
          name: 'Казуальная игра',
          slug: 'kazualnaia-igra',
          language: 'rus',
          games_count: 31993,
          image_background:
            'https://media.rawg.io/media/games/852/8522935d8ab27b610a254b52de0da212.jpg',
        },
        {
          id: 40845,
          name: 'Partial Controller Support',
          slug: 'partial-controller-support',
          language: 'eng',
          games_count: 9866,
          image_background:
            'https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg',
        },
        {
          id: 42413,
          name: 'Симулятор',
          slug: 'simuliator',
          language: 'rus',
          games_count: 15262,
          image_background:
            'https://media.rawg.io/media/games/fd6/fd6a1eecd3ec0f875f1924f3656b7dd9.jpg',
        },
        {
          id: 42482,
          name: 'Смешная',
          slug: 'smeshnaia',
          language: 'rus',
          games_count: 6600,
          image_background:
            'https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg',
        },
        {
          id: 4,
          name: 'Funny',
          slug: 'funny',
          language: 'eng',
          games_count: 22604,
          image_background:
            'https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg',
        },
        {
          id: 37,
          name: 'Sandbox',
          slug: 'sandbox',
          language: 'eng',
          games_count: 5956,
          image_background:
            'https://media.rawg.io/media/games/c50/c5085506fe4b5e20fc7aa5ace842c20b.jpg',
        },
        {
          id: 42444,
          name: 'Песочница',
          slug: 'pesochnitsa',
          language: 'rus',
          games_count: 3191,
          image_background:
            'https://media.rawg.io/media/games/15c/15c95a4915f88a3e89c821526afe05fc.jpg',
        },
        {
          id: 40852,
          name: 'Steam Workshop',
          slug: 'steam-workshop',
          language: 'eng',
          games_count: 1324,
          image_background:
            'https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg',
        },
        {
          id: 40838,
          name: 'Includes level editor',
          slug: 'includes-level-editor',
          language: 'eng',
          games_count: 1648,
          image_background:
            'https://media.rawg.io/media/games/e0f/e0f05a97ff926acf4c8f43e0849b6832.jpg',
        },
        {
          id: 62,
          name: 'Moddable',
          slug: 'moddable',
          language: 'eng',
          games_count: 774,
          image_background:
            'https://media.rawg.io/media/games/9af/9af24c1886e2c7b52a4a2c65aa874638.jpg',
        },
        {
          id: 42562,
          name: 'Для всей семьи',
          slug: 'dlia-vsei-semi',
          language: 'rus',
          games_count: 5634,
          image_background:
            'https://media.rawg.io/media/games/5eb/5eb49eb2fa0738fdb5bacea557b1bc57.jpg',
        },
        {
          id: 42438,
          name: 'Поддержка модификаций',
          slug: 'podderzhka-modifikatsii',
          language: 'rus',
          games_count: 586,
          image_background:
            'https://media.rawg.io/media/games/9af/9af24c1886e2c7b52a4a2c65aa874638.jpg',
        },
        {
          id: 42520,
          name: 'Реиграбельность',
          slug: 'reigrabelnost',
          language: 'rus',
          games_count: 1854,
          image_background:
            'https://media.rawg.io/media/games/d46/d46373f39458670305704ef089387520.jpg',
        },
        {
          id: 107,
          name: 'Family Friendly',
          slug: 'family-friendly',
          language: 'eng',
          games_count: 5343,
          image_background:
            'https://media.rawg.io/media/games/786/7863e587bac630de82fca50d799236a9.jpg',
        },
        {
          id: 5,
          name: 'Replay Value',
          slug: 'replay-value',
          language: 'eng',
          games_count: 1305,
          image_background:
            'https://media.rawg.io/media/games/476/476178ef18ab0534771d099f51cdc694.jpg',
        },
        {
          id: 42460,
          name: 'Реализм',
          slug: 'realizm',
          language: 'rus',
          games_count: 3914,
          image_background:
            'https://media.rawg.io/media/games/367/367463d43c2a1465f27e830b5b1334ee.jpg',
        },
        {
          id: 77,
          name: 'Realistic',
          slug: 'realistic',
          language: 'eng',
          games_count: 3939,
          image_background:
            'https://media.rawg.io/media/games/786/7863e587bac630de82fca50d799236a9.jpg',
        },
        {
          id: 42553,
          name: 'Строительство',
          slug: 'stroitelstvo',
          language: 'rus',
          games_count: 2581,
          image_background:
            'https://media.rawg.io/media/games/e44/e445335e611b4ccf03af71fffcbd30a4.jpg',
        },
        {
          id: 39,
          name: 'Building',
          slug: 'building',
          language: 'eng',
          games_count: 5185,
          image_background:
            'https://media.rawg.io/media/games/48c/48cb04ca483be865e3a83119c94e6097.jpg',
        },
        {
          id: 42551,
          name: 'Менеджмент',
          slug: 'menedzhment',
          language: 'rus',
          games_count: 2640,
          image_background:
            'https://media.rawg.io/media/screenshots/066/066eb1b7a3f332b8089645fbf8c3ebdc.jpg',
        },
        {
          id: 67,
          name: 'Management',
          slug: 'management',
          language: 'eng',
          games_count: 6559,
          image_background:
            'https://media.rawg.io/media/games/6bc/6bc79f5bc023b1e6938f6eaf9926f073.jpg',
        },
        {
          id: 42552,
          name: 'Можно приостановить',
          slug: 'mozhno-priostanovit',
          language: 'rus',
          games_count: 262,
          image_background:
            'https://media.rawg.io/media/games/789/7896837ec22a83e4007018ddd55e8c9a.jpg',
        },
        {
          id: 42521,
          name: 'Экономика',
          slug: 'ekonomika',
          language: 'rus',
          games_count: 1095,
          image_background:
            'https://media.rawg.io/media/screenshots/e70/e7009d889b38df2a16f78859a7343308.jpg',
        },
        {
          id: 194,
          name: 'Real-Time with Pause',
          slug: 'real-time-with-pause',
          language: 'eng',
          games_count: 194,
          image_background:
            'https://media.rawg.io/media/games/92b/92bbf8a451e2742ab812a580546e593a.jpg',
        },
        {
          id: 42631,
          name: 'Управление ресурсами',
          slug: 'upravlenie-resursami',
          language: 'rus',
          games_count: 1821,
          image_background:
            'https://media.rawg.io/media/games/25c/25c4776ab5723d5d735d8bf617ca12d9.jpg',
        },
        {
          id: 195,
          name: 'Economy',
          slug: 'economy',
          language: 'eng',
          games_count: 1916,
          image_background:
            'https://media.rawg.io/media/screenshots/adb/adb9e34f5ee059021fc21474f79ec6ee.jpg',
        },
        {
          id: 42504,
          name: 'Градостроительный симулятор',
          slug: 'gradostroitelnyi-simuliator',
          language: 'rus',
          games_count: 473,
          image_background:
            'https://media.rawg.io/media/screenshots/2cc/2cc8e0cfe5df94b586ad42f4319514e9.jpg',
        },
        {
          id: 147,
          name: 'Resource Management',
          slug: 'resource-management',
          language: 'eng',
          games_count: 1664,
          image_background:
            'https://media.rawg.io/media/games/a88/a886c37bf112d009e318b106db9d420a.jpg',
        },
        {
          id: 213,
          name: 'City Builder',
          slug: 'city-builder',
          language: 'eng',
          games_count: 2218,
          image_background:
            'https://media.rawg.io/media/screenshots/a62/a62fb9a34ba7d37b87679387beabc970.jpg',
        },
        {
          id: 244,
          name: 'Mod',
          slug: 'mod',
          language: 'eng',
          games_count: 1393,
          image_background:
            'https://media.rawg.io/media/screenshots/357/35728d1e5051a0db48daf187d5817370.jpg',
        },
        {
          id: 151,
          name: 'Modern',
          slug: 'modern',
          language: 'eng',
          games_count: 1113,
          image_background:
            'https://media.rawg.io/media/screenshots/0b1/0b11c690545dcc0a61e7cb95d62f78b0.jpg',
        },
        {
          id: 42528,
          name: 'Современность',
          slug: 'sovremennost',
          language: 'rus',
          games_count: 918,
          image_background:
            'https://media.rawg.io/media/screenshots/438/4386fdc13fa355b57303c9a89507964f.jpg',
        },
        {
          id: 42557,
          name: 'Модификации',
          slug: 'modifikatsii',
          language: 'rus',
          games_count: 63,
          image_background:
            'https://media.rawg.io/media/screenshots/5ff/5ff7e855a4d0f4de1bfa515cd0e19071.jpg',
        },
      ],
      esrb_rating: {
        id: 1,
        name: 'Everyone',
        slug: 'everyone',
        name_en: 'Everyone',
        name_ru: 'Для всех',
      },
      user_game: null,
      reviews_count: 1407,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      short_screenshots: [
        {
          id: -1,
          image:
            'https://media.rawg.io/media/games/25c/25c4776ab5723d5d735d8bf617ca12d9.jpg',
        },
        {
          id: 76433,
          image:
            'https://media.rawg.io/media/screenshots/c0c/c0c098666e5ee532a8b1459fce1b3a01.jpg',
        },
        {
          id: 76434,
          image:
            'https://media.rawg.io/media/screenshots/702/7021e966d68ab8ccc76f859d30d925fe.jpg',
        },
        {
          id: 76435,
          image:
            'https://media.rawg.io/media/screenshots/15d/15dc7309784c53b75ae05ec95c347d9e.jpg',
        },
        {
          id: 76436,
          image:
            'https://media.rawg.io/media/screenshots/2e7/2e7924d7f3bf1a61498ece6e89edd26c.jpg',
        },
        {
          id: 76437,
          image:
            'https://media.rawg.io/media/screenshots/030/0308db992eac77d507240ae7d6874dd1.jpg',
        },
        {
          id: 76438,
          image:
            'https://media.rawg.io/media/screenshots/e03/e03e7124d4aea8276a6281fb760fb5ce.jpg',
        },
      ],
      parent_platforms: [
        {
          platform: {
            id: 1,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 2,
            name: 'PlayStation',
            slug: 'playstation',
          },
        },
        {
          platform: {
            id: 3,
            name: 'Xbox',
            slug: 'xbox',
          },
        },
        {
          platform: {
            id: 5,
            name: 'Apple Macintosh',
            slug: 'mac',
          },
        },
        {
          platform: {
            id: 6,
            name: 'Linux',
            slug: 'linux',
          },
        },
        {
          platform: {
            id: 7,
            name: 'Nintendo',
            slug: 'nintendo',
          },
        },
      ],
      genres: [
        {
          id: 10,
          name: 'Strategy',
          slug: 'strategy',
        },
        {
          id: 14,
          name: 'Simulation',
          slug: 'simulation',
        },
      ],
    },
    {
      slug: 'paladins',
      name: 'Paladins',
      playtime: 6,
      platforms: [
        {
          platform: {
            id: 4,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 1,
            name: 'Xbox One',
            slug: 'xbox-one',
          },
        },
        {
          platform: {
            id: 18,
            name: 'PlayStation 4',
            slug: 'playstation4',
          },
        },
        {
          platform: {
            id: 7,
            name: 'Nintendo Switch',
            slug: 'nintendo-switch',
          },
        },
        {
          platform: {
            id: 5,
            name: 'macOS',
            slug: 'macos',
          },
        },
      ],
      stores: [
        {
          store: {
            id: 1,
            name: 'Steam',
            slug: 'steam',
          },
        },
        {
          store: {
            id: 3,
            name: 'PlayStation Store',
            slug: 'playstation-store',
          },
        },
        {
          store: {
            id: 2,
            name: 'Xbox Store',
            slug: 'xbox-store',
          },
        },
        {
          store: {
            id: 6,
            name: 'Nintendo Store',
            slug: 'nintendo',
          },
        },
      ],
      released: '2016-09-15',
      tba: false,
      background_image:
        'https://media.rawg.io/media/screenshots/88b/88b5f27f07d6ca2f8a3cd0b36e03a670.jpg',
      rating: 3.1,
      rating_top: 3,
      ratings: [
        {
          id: 3,
          title: 'meh',
          count: 562,
          percent: 42.42,
        },
        {
          id: 4,
          title: 'recommended',
          count: 472,
          percent: 35.62,
        },
        {
          id: 1,
          title: 'skip',
          count: 232,
          percent: 17.51,
        },
        {
          id: 5,
          title: 'exceptional',
          count: 59,
          percent: 4.45,
        },
      ],
      ratings_count: 1321,
      reviews_text_count: 2,
      added: 7428,
      added_by_status: {
        yet: 137,
        owned: 6016,
        beaten: 178,
        toplay: 23,
        dropped: 985,
        playing: 89,
      },
      metacritic: 78,
      suggestions_count: 529,
      updated: '2023-07-10T16:06:27',
      id: 10989,
      score: null,
      clip: null,
      tags: [
        {
          id: 42417,
          name: 'Экшен',
          slug: 'ekshen',
          language: 'rus',
          games_count: 32438,
          image_background:
            'https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg',
        },
        {
          id: 42392,
          name: 'Приключение',
          slug: 'prikliuchenie',
          language: 'rus',
          games_count: 30382,
          image_background:
            'https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg',
        },
        {
          id: 40847,
          name: 'Steam Achievements',
          slug: 'steam-achievements',
          language: 'eng',
          games_count: 30840,
          image_background:
            'https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg',
        },
        {
          id: 7,
          name: 'Multiplayer',
          slug: 'multiplayer',
          language: 'eng',
          games_count: 35108,
          image_background:
            'https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg',
        },
        {
          id: 42425,
          name: 'Для нескольких игроков',
          slug: 'dlia-neskolkikh-igrokov',
          language: 'rus',
          games_count: 7893,
          image_background:
            'https://media.rawg.io/media/games/713/713269608dc8f2f40f5a670a14b2de94.jpg',
        },
        {
          id: 7808,
          name: 'steam-trading-cards',
          slug: 'steam-trading-cards',
          language: 'eng',
          games_count: 7571,
          image_background:
            'https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg',
        },
        {
          id: 18,
          name: 'Co-op',
          slug: 'co-op',
          language: 'eng',
          games_count: 9892,
          image_background:
            'https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg',
        },
        {
          id: 411,
          name: 'cooperative',
          slug: 'cooperative',
          language: 'eng',
          games_count: 4104,
          image_background:
            'https://media.rawg.io/media/games/476/476178ef18ab0534771d099f51cdc694.jpg',
        },
        {
          id: 42421,
          name: 'Стратегия',
          slug: 'strategiia',
          language: 'rus',
          games_count: 15056,
          image_background:
            'https://media.rawg.io/media/games/21a/21ad672cedee9b4378abb6c2d2e626ee.jpg',
        },
        {
          id: 42428,
          name: 'Шутер',
          slug: 'shuter',
          language: 'rus',
          games_count: 6857,
          image_background:
            'https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg',
        },
        {
          id: 8,
          name: 'First-Person',
          slug: 'first-person',
          language: 'eng',
          games_count: 28676,
          image_background:
            'https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg',
        },
        {
          id: 42429,
          name: 'От первого лица',
          slug: 'ot-pervogo-litsa',
          language: 'rus',
          games_count: 7731,
          image_background:
            'https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg',
        },
        {
          id: 40845,
          name: 'Partial Controller Support',
          slug: 'partial-controller-support',
          language: 'eng',
          games_count: 9866,
          image_background:
            'https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg',
        },
        {
          id: 30,
          name: 'FPS',
          slug: 'fps',
          language: 'eng',
          games_count: 12151,
          image_background:
            'https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg',
        },
        {
          id: 42427,
          name: 'Шутер от первого лица',
          slug: 'shuter-ot-pervogo-litsa',
          language: 'rus',
          games_count: 4139,
          image_background:
            'https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg',
        },
        {
          id: 42482,
          name: 'Смешная',
          slug: 'smeshnaia',
          language: 'rus',
          games_count: 6600,
          image_background:
            'https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg',
        },
        {
          id: 9,
          name: 'Online Co-Op',
          slug: 'online-co-op',
          language: 'eng',
          games_count: 4438,
          image_background:
            'https://media.rawg.io/media/screenshots/88b/88b5f27f07d6ca2f8a3cd0b36e03a670.jpg',
        },
        {
          id: 42480,
          name: 'Фэнтези',
          slug: 'fentezi',
          language: 'rus',
          games_count: 8364,
          image_background:
            'https://media.rawg.io/media/games/8d4/8d46786ca86b1d95f3dc7e700e2dc4dd.jpg',
        },
        {
          id: 64,
          name: 'Fantasy',
          slug: 'fantasy',
          language: 'eng',
          games_count: 24622,
          image_background:
            'https://media.rawg.io/media/screenshots/88b/88b5f27f07d6ca2f8a3cd0b36e03a670.jpg',
        },
        {
          id: 4,
          name: 'Funny',
          slug: 'funny',
          language: 'eng',
          games_count: 22604,
          image_background:
            'https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg',
        },
        {
          id: 1,
          name: 'Survival',
          slug: 'survival',
          language: 'eng',
          games_count: 7286,
          image_background:
            'https://media.rawg.io/media/games/b54/b54598d1d5cc31899f4f0a7e3122a7b0.jpg',
        },
        {
          id: 42452,
          name: 'Выживание',
          slug: 'vyzhivanie',
          language: 'rus',
          games_count: 4774,
          image_background:
            'https://media.rawg.io/media/games/7f6/7f6cd70ba2ad57053b4847c13569f2d8.jpg',
        },
        {
          id: 42433,
          name: 'Совместная игра по сети',
          slug: 'sovmestnaia-igra-po-seti',
          language: 'rus',
          games_count: 1229,
          image_background:
            'https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg',
        },
        {
          id: 79,
          name: 'Free to Play',
          slug: 'free-to-play',
          language: 'eng',
          games_count: 5479,
          image_background:
            'https://media.rawg.io/media/games/d0f/d0f91fe1d92332147e5db74e207cfc7a.jpg',
        },
        {
          id: 42538,
          name: 'Бесплатная игра',
          slug: 'besplatnaia-igra',
          language: 'rus',
          games_count: 5472,
          image_background:
            'https://media.rawg.io/media/games/095/0953bf01cd4e4dd204aba85489ac9868.jpg',
        },
        {
          id: 397,
          name: 'Online multiplayer',
          slug: 'online-multiplayer',
          language: 'eng',
          games_count: 3805,
          image_background:
            'https://media.rawg.io/media/games/d1a/d1a1202a378607b6c635c8f18ace95dd.jpg',
        },
        {
          id: 42411,
          name: 'Ранний доступ',
          slug: 'rannii-dostup',
          language: 'rus',
          games_count: 11957,
          image_background:
            'https://media.rawg.io/media/games/c92/c9207a31f0eeb9904a840fc26eae6afb.jpg',
        },
        {
          id: 14,
          name: 'Early Access',
          slug: 'early-access',
          language: 'eng',
          games_count: 12433,
          image_background:
            'https://media.rawg.io/media/games/35b/35b47c4d85cd6e08f3e2ca43ea5ce7bb.jpg',
        },
        {
          id: 134,
          name: 'Anime',
          slug: 'anime',
          language: 'eng',
          games_count: 11125,
          image_background:
            'https://media.rawg.io/media/games/556/556157feed9ee1f55f2b12b2973e30a3.jpg',
        },
        {
          id: 42407,
          name: 'Аниме',
          slug: 'anime-2',
          language: 'rus',
          games_count: 7014,
          image_background:
            'https://media.rawg.io/media/games/a91/a917f41bb87e4b9e7a762ac87d97a9dc.jpg',
        },
        {
          id: 157,
          name: 'PvP',
          slug: 'pvp',
          language: 'eng',
          games_count: 7331,
          image_background:
            'https://media.rawg.io/media/screenshots/88b/88b5f27f07d6ca2f8a3cd0b36e03a670.jpg',
        },
        {
          id: 42434,
          name: 'Игрок против игрока',
          slug: 'igrok-protiv-igroka',
          language: 'rus',
          games_count: 3628,
          image_background:
            'https://media.rawg.io/media/games/569/56978b5a77f13aa2ec5d09ec81d01cad.jpg',
        },
        {
          id: 42453,
          name: 'ММО',
          slug: 'mmo-2',
          language: 'rus',
          games_count: 2177,
          image_background:
            'https://media.rawg.io/media/games/bff/bff7d82316cddea9541261a045ba008a.jpg',
        },
        {
          id: 40837,
          name: 'In-App Purchases',
          slug: 'in-app-purchases',
          language: 'eng',
          games_count: 2113,
          image_background:
            'https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg',
        },
        {
          id: 11,
          name: 'Team-Based',
          slug: 'team-based',
          language: 'eng',
          games_count: 1294,
          image_background:
            'https://media.rawg.io/media/games/388/388935d851846f8ec747fffc7c765800.jpg',
        },
        {
          id: 42450,
          name: 'Командная',
          slug: 'komandnaia',
          language: 'rus',
          games_count: 992,
          image_background:
            'https://media.rawg.io/media/games/8bd/8bd24e3c15354a9555bb1437fe555a69.jpg',
        },
        {
          id: 120,
          name: 'Memes',
          slug: 'memes',
          language: 'eng',
          games_count: 1578,
          image_background:
            'https://media.rawg.io/media/games/264/2642b17a7885f7abc4fd018e98943242.jpg',
        },
        {
          id: 42561,
          name: 'Мемы',
          slug: 'memy',
          language: 'rus',
          games_count: 1429,
          image_background:
            'https://media.rawg.io/media/games/08a/08aa92e004f13ad2d41127327314c3f9.jpg',
        },
        {
          id: 169,
          name: 'MOBA',
          slug: 'moba',
          language: 'eng',
          games_count: 532,
          image_background:
            'https://media.rawg.io/media/screenshots/45c/45cf373b371c1912613ff799a16e4fa2.jpg',
        },
      ],
      esrb_rating: {
        id: 3,
        name: 'Teen',
        slug: 'teen',
        name_en: 'Teen',
        name_ru: 'С 13 лет',
      },
      user_game: null,
      reviews_count: 1325,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      short_screenshots: [
        {
          id: -1,
          image:
            'https://media.rawg.io/media/screenshots/88b/88b5f27f07d6ca2f8a3cd0b36e03a670.jpg',
        },
        {
          id: 87723,
          image:
            'https://media.rawg.io/media/screenshots/014/014f87c62cbff3027ddcf9779f2ac18c.jpg',
        },
        {
          id: 87724,
          image:
            'https://media.rawg.io/media/screenshots/d48/d488374a06516f9e801ba067fb2469e8.jpg',
        },
        {
          id: 87725,
          image:
            'https://media.rawg.io/media/screenshots/43f/43f109d255699d139723b15bcf0e7d10.jpg',
        },
        {
          id: 87726,
          image:
            'https://media.rawg.io/media/screenshots/737/73717d42eba514f3231df9980206d350.jpg',
        },
        {
          id: 87727,
          image:
            'https://media.rawg.io/media/screenshots/dc6/dc6e1c1b47a3f53cdaa6bbab7dc8b1b5.jpg',
        },
        {
          id: 87728,
          image:
            'https://media.rawg.io/media/screenshots/0cc/0cc3a18b8fdaecfdfe9b6551c32e9297.jpg',
        },
      ],
      parent_platforms: [
        {
          platform: {
            id: 1,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 2,
            name: 'PlayStation',
            slug: 'playstation',
          },
        },
        {
          platform: {
            id: 3,
            name: 'Xbox',
            slug: 'xbox',
          },
        },
        {
          platform: {
            id: 5,
            name: 'Apple Macintosh',
            slug: 'mac',
          },
        },
        {
          platform: {
            id: 7,
            name: 'Nintendo',
            slug: 'nintendo',
          },
        },
      ],
      genres: [
        {
          id: 2,
          name: 'Shooter',
          slug: 'shooter',
        },
        {
          id: 4,
          name: 'Action',
          slug: 'action',
        },
      ],
    },
    {
      slug: 'sega-mega-drive-and-genesis-classics',
      name: 'SEGA Mega Drive and Genesis Classics',
      playtime: 2,
      platforms: [
        {
          platform: {
            id: 4,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 1,
            name: 'Xbox One',
            slug: 'xbox-one',
          },
        },
        {
          platform: {
            id: 18,
            name: 'PlayStation 4',
            slug: 'playstation4',
          },
        },
        {
          platform: {
            id: 7,
            name: 'Nintendo Switch',
            slug: 'nintendo-switch',
          },
        },
        {
          platform: {
            id: 5,
            name: 'macOS',
            slug: 'macos',
          },
        },
        {
          platform: {
            id: 6,
            name: 'Linux',
            slug: 'linux',
          },
        },
      ],
      stores: [
        {
          store: {
            id: 1,
            name: 'Steam',
            slug: 'steam',
          },
        },
        {
          store: {
            id: 3,
            name: 'PlayStation Store',
            slug: 'playstation-store',
          },
        },
      ],
      released: '2010-06-01',
      tba: false,
      background_image:
        'https://media.rawg.io/media/games/0fd/0fd84d36596a83ef2e5a35f63a072218.jpg',
      rating: 3,
      rating_top: 4,
      ratings: [
        {
          id: 4,
          title: 'recommended',
          count: 216,
          percent: 39.63,
        },
        {
          id: 1,
          title: 'skip',
          count: 162,
          percent: 29.72,
        },
        {
          id: 3,
          title: 'meh',
          count: 112,
          percent: 20.55,
        },
        {
          id: 5,
          title: 'exceptional',
          count: 55,
          percent: 10.09,
        },
      ],
      ratings_count: 544,
      reviews_text_count: 0,
      added: 7419,
      added_by_status: {
        yet: 424,
        owned: 6616,
        beaten: 87,
        toplay: 28,
        dropped: 240,
        playing: 24,
      },
      metacritic: 76,
      suggestions_count: 383,
      updated: '2023-07-12T10:35:24',
      id: 28179,
      score: null,
      clip: null,
      tags: [
        {
          id: 31,
          name: 'Singleplayer',
          slug: 'singleplayer',
          language: 'eng',
          games_count: 206544,
          image_background:
            'https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg',
        },
        {
          id: 42396,
          name: 'Для одного игрока',
          slug: 'dlia-odnogo-igroka',
          language: 'rus',
          games_count: 35171,
          image_background:
            'https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg',
        },
        {
          id: 42417,
          name: 'Экшен',
          slug: 'ekshen',
          language: 'rus',
          games_count: 32438,
          image_background:
            'https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg',
        },
        {
          id: 42392,
          name: 'Приключение',
          slug: 'prikliuchenie',
          language: 'rus',
          games_count: 30382,
          image_background:
            'https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg',
        },
        {
          id: 7,
          name: 'Multiplayer',
          slug: 'multiplayer',
          language: 'eng',
          games_count: 35108,
          image_background:
            'https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg',
        },
        {
          id: 40836,
          name: 'Full controller support',
          slug: 'full-controller-support',
          language: 'eng',
          games_count: 14476,
          image_background:
            'https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg',
        },
        {
          id: 42425,
          name: 'Для нескольких игроков',
          slug: 'dlia-neskolkikh-igrokov',
          language: 'rus',
          games_count: 7893,
          image_background:
            'https://media.rawg.io/media/games/713/713269608dc8f2f40f5a670a14b2de94.jpg',
        },
        {
          id: 42401,
          name: 'Отличный саундтрек',
          slug: 'otlichnyi-saundtrek',
          language: 'rus',
          games_count: 4463,
          image_background:
            'https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg',
        },
        {
          id: 24,
          name: 'RPG',
          slug: 'rpg',
          language: 'eng',
          games_count: 17413,
          image_background:
            'https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg',
        },
        {
          id: 18,
          name: 'Co-op',
          slug: 'co-op',
          language: 'eng',
          games_count: 9892,
          image_background:
            'https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg',
        },
        {
          id: 42412,
          name: 'Ролевая игра',
          slug: 'rolevaia-igra',
          language: 'rus',
          games_count: 13830,
          image_background:
            'https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg',
        },
        {
          id: 411,
          name: 'cooperative',
          slug: 'cooperative',
          language: 'eng',
          games_count: 4104,
          image_background:
            'https://media.rawg.io/media/games/476/476178ef18ab0534771d099f51cdc694.jpg',
        },
        {
          id: 42399,
          name: 'Казуальная игра',
          slug: 'kazualnaia-igra',
          language: 'rus',
          games_count: 31993,
          image_background:
            'https://media.rawg.io/media/games/852/8522935d8ab27b610a254b52de0da212.jpg',
        },
        {
          id: 45,
          name: '2D',
          slug: '2d',
          language: 'eng',
          games_count: 188239,
          image_background:
            'https://media.rawg.io/media/games/fd9/fd92f105dcd6491bc5d61135033d1f19.jpg',
        },
        {
          id: 42461,
          name: 'Классика',
          slug: 'klassika',
          language: 'rus',
          games_count: 1394,
          image_background:
            'https://media.rawg.io/media/games/7a2/7a2500ee8b2c0e1ff268bb4479463dea.jpg',
        },
        {
          id: 42463,
          name: 'Платформер',
          slug: 'platformer-2',
          language: 'rus',
          games_count: 6582,
          image_background:
            'https://media.rawg.io/media/games/9cc/9cc11e2e81403186c7fa9c00c143d6e4.jpg',
        },
        {
          id: 75,
          name: 'Local Co-Op',
          slug: 'local-co-op',
          language: 'eng',
          games_count: 4982,
          image_background:
            'https://media.rawg.io/media/games/33b/33b825c76382931df0fd8ecddf5caebe.jpg',
        },
        {
          id: 42415,
          name: 'Пиксельная графика',
          slug: 'pikselnaia-grafika',
          language: 'rus',
          games_count: 9128,
          image_background:
            'https://media.rawg.io/media/games/f62/f62eb0901c7017776e0a5c6a94f979d5.jpg',
        },
        {
          id: 42467,
          name: 'Ретро',
          slug: 'retro-2',
          language: 'rus',
          games_count: 5845,
          image_background:
            'https://media.rawg.io/media/games/9cc/9cc11e2e81403186c7fa9c00c143d6e4.jpg',
        },
        {
          id: 40852,
          name: 'Steam Workshop',
          slug: 'steam-workshop',
          language: 'eng',
          games_count: 1324,
          image_background:
            'https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg',
        },
        {
          id: 74,
          name: 'Retro',
          slug: 'retro',
          language: 'eng',
          games_count: 39694,
          image_background:
            'https://media.rawg.io/media/games/2ae/2aedae90b1377a0f3e5ce54d24f8e41a.jpg',
        },
        {
          id: 42587,
          name: 'Аркада',
          slug: 'arkada',
          language: 'rus',
          games_count: 7708,
          image_background:
            'https://media.rawg.io/media/games/fc0/fc076b974197660a582abd34ebccc27f.jpg',
        },
        {
          id: 42438,
          name: 'Поддержка модификаций',
          slug: 'podderzhka-modifikatsii',
          language: 'rus',
          games_count: 586,
          image_background:
            'https://media.rawg.io/media/games/9af/9af24c1886e2c7b52a4a2c65aa874638.jpg',
        },
        {
          id: 33,
          name: 'VR',
          slug: 'vr',
          language: 'eng',
          games_count: 11688,
          image_background:
            'https://media.rawg.io/media/games/a01/a01b34c722ceec784817381eb1824fa5.jpg',
        },
        {
          id: 203,
          name: "Beat 'em up",
          slug: 'beat-em-up',
          language: 'eng',
          games_count: 2703,
          image_background:
            'https://media.rawg.io/media/games/fc3/fc30790a3b3c738d7a271b02c1e26dc2.jpg',
        },
        {
          id: 42484,
          name: '90-е',
          slug: '90-e',
          language: 'rus',
          games_count: 1845,
          image_background:
            'https://media.rawg.io/media/screenshots/010/0101f021b2dc123c98969fda7e4bcd92.jpg',
        },
        {
          id: 42512,
          name: 'Олдскул',
          slug: 'oldskul',
          language: 'rus',
          games_count: 2665,
          image_background:
            'https://media.rawg.io/media/games/c80/c8050355992f431d0efd10a19630b6ea.jpg',
        },
      ],
      esrb_rating: {
        id: 3,
        name: 'Teen',
        slug: 'teen',
        name_en: 'Teen',
        name_ru: 'С 13 лет',
      },
      user_game: null,
      reviews_count: 545,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      short_screenshots: [
        {
          id: -1,
          image:
            'https://media.rawg.io/media/games/0fd/0fd84d36596a83ef2e5a35f63a072218.jpg',
        },
        {
          id: 269605,
          image:
            'https://media.rawg.io/media/screenshots/a98/a98a26bc099f56ad0f89fa7f51b7e839.jpg',
        },
        {
          id: 269606,
          image:
            'https://media.rawg.io/media/screenshots/8c5/8c5a93e3103406ad15f9030d3262d79b.jpg',
        },
        {
          id: 269607,
          image:
            'https://media.rawg.io/media/screenshots/041/04196ceb413c23c824054897a2d9ce96.jpg',
        },
        {
          id: 269608,
          image:
            'https://media.rawg.io/media/screenshots/018/018f00f6e05f18b901d4dec3e289f0f0.jpg',
        },
        {
          id: 269609,
          image:
            'https://media.rawg.io/media/screenshots/f5e/f5e32500f6fb16aae8622f0beb115fe9.jpg',
        },
        {
          id: 269610,
          image:
            'https://media.rawg.io/media/screenshots/052/05295a43cd5274c6e8b74752fd51dfcb.jpg',
        },
      ],
      parent_platforms: [
        {
          platform: {
            id: 1,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 2,
            name: 'PlayStation',
            slug: 'playstation',
          },
        },
        {
          platform: {
            id: 3,
            name: 'Xbox',
            slug: 'xbox',
          },
        },
        {
          platform: {
            id: 5,
            name: 'Apple Macintosh',
            slug: 'mac',
          },
        },
        {
          platform: {
            id: 6,
            name: 'Linux',
            slug: 'linux',
          },
        },
        {
          platform: {
            id: 7,
            name: 'Nintendo',
            slug: 'nintendo',
          },
        },
      ],
      genres: [
        {
          id: 3,
          name: 'Adventure',
          slug: 'adventure',
        },
        {
          id: 4,
          name: 'Action',
          slug: 'action',
        },
        {
          id: 5,
          name: 'RPG',
          slug: 'role-playing-games-rpg',
        },
        {
          id: 6,
          name: 'Fighting',
          slug: 'fighting',
        },
        {
          id: 83,
          name: 'Platformer',
          slug: 'platformer',
        },
      ],
    },
    {
      slug: 'inside',
      name: 'INSIDE',
      playtime: 4,
      platforms: [
        {
          platform: {
            id: 4,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 1,
            name: 'Xbox One',
            slug: 'xbox-one',
          },
        },
        {
          platform: {
            id: 18,
            name: 'PlayStation 4',
            slug: 'playstation4',
          },
        },
        {
          platform: {
            id: 7,
            name: 'Nintendo Switch',
            slug: 'nintendo-switch',
          },
        },
        {
          platform: {
            id: 3,
            name: 'iOS',
            slug: 'ios',
          },
        },
        {
          platform: {
            id: 5,
            name: 'macOS',
            slug: 'macos',
          },
        },
      ],
      stores: [
        {
          store: {
            id: 1,
            name: 'Steam',
            slug: 'steam',
          },
        },
        {
          store: {
            id: 3,
            name: 'PlayStation Store',
            slug: 'playstation-store',
          },
        },
        {
          store: {
            id: 2,
            name: 'Xbox Store',
            slug: 'xbox-store',
          },
        },
        {
          store: {
            id: 4,
            name: 'App Store',
            slug: 'apple-appstore',
          },
        },
        {
          store: {
            id: 5,
            name: 'GOG',
            slug: 'gog',
          },
        },
        {
          store: {
            id: 6,
            name: 'Nintendo Store',
            slug: 'nintendo',
          },
        },
        {
          store: {
            id: 11,
            name: 'Epic Games',
            slug: 'epic-games',
          },
        },
      ],
      released: '2016-06-28',
      tba: false,
      background_image:
        'https://media.rawg.io/media/games/d5a/d5a24f9f71315427fa6e966fdd98dfa6.jpg',
      rating: 4.4,
      rating_top: 5,
      ratings: [
        {
          id: 5,
          title: 'exceptional',
          count: 1334,
          percent: 56.67,
        },
        {
          id: 4,
          title: 'recommended',
          count: 790,
          percent: 33.56,
        },
        {
          id: 3,
          title: 'meh',
          count: 143,
          percent: 6.07,
        },
        {
          id: 1,
          title: 'skip',
          count: 87,
          percent: 3.7,
        },
      ],
      ratings_count: 2322,
      reviews_text_count: 25,
      added: 7337,
      added_by_status: {
        yet: 472,
        owned: 3825,
        beaten: 2350,
        toplay: 452,
        dropped: 182,
        playing: 56,
      },
      metacritic: 87,
      suggestions_count: 245,
      updated: '2023-07-12T10:20:51',
      id: 1450,
      score: null,
      clip: null,
      tags: [
        {
          id: 31,
          name: 'Singleplayer',
          slug: 'singleplayer',
          language: 'eng',
          games_count: 206544,
          image_background:
            'https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg',
        },
        {
          id: 42396,
          name: 'Для одного игрока',
          slug: 'dlia-odnogo-igroka',
          language: 'rus',
          games_count: 35171,
          image_background:
            'https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg',
        },
        {
          id: 42417,
          name: 'Экшен',
          slug: 'ekshen',
          language: 'rus',
          games_count: 32438,
          image_background:
            'https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg',
        },
        {
          id: 42392,
          name: 'Приключение',
          slug: 'prikliuchenie',
          language: 'rus',
          games_count: 30382,
          image_background:
            'https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg',
        },
        {
          id: 40847,
          name: 'Steam Achievements',
          slug: 'steam-achievements',
          language: 'eng',
          games_count: 30840,
          image_background:
            'https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg',
        },
        {
          id: 42398,
          name: 'Инди',
          slug: 'indi-2',
          language: 'rus',
          games_count: 46233,
          image_background:
            'https://media.rawg.io/media/games/9fa/9fa63622543e5d4f6d99aa9d73b043de.jpg',
        },
        {
          id: 40836,
          name: 'Full controller support',
          slug: 'full-controller-support',
          language: 'eng',
          games_count: 14476,
          image_background:
            'https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg',
        },
        {
          id: 13,
          name: 'Atmospheric',
          slug: 'atmospheric',
          language: 'eng',
          games_count: 29635,
          image_background:
            'https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg',
        },
        {
          id: 40849,
          name: 'Steam Cloud',
          slug: 'steam-cloud',
          language: 'eng',
          games_count: 14345,
          image_background:
            'https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg',
        },
        {
          id: 42400,
          name: 'Атмосфера',
          slug: 'atmosfera',
          language: 'rus',
          games_count: 6083,
          image_background:
            'https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg',
        },
        {
          id: 42401,
          name: 'Отличный саундтрек',
          slug: 'otlichnyi-saundtrek',
          language: 'rus',
          games_count: 4463,
          image_background:
            'https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg',
        },
        {
          id: 42,
          name: 'Great Soundtrack',
          slug: 'great-soundtrack',
          language: 'eng',
          games_count: 3241,
          image_background:
            'https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg',
        },
        {
          id: 42394,
          name: 'Глубокий сюжет',
          slug: 'glubokii-siuzhet',
          language: 'rus',
          games_count: 9153,
          image_background:
            'https://media.rawg.io/media/games/b7b/b7b8381707152afc7d91f5d95de70e39.jpg',
        },
        {
          id: 42412,
          name: 'Ролевая игра',
          slug: 'rolevaia-igra',
          language: 'rus',
          games_count: 13830,
          image_background:
            'https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg',
        },
        {
          id: 118,
          name: 'Story Rich',
          slug: 'story-rich',
          language: 'eng',
          games_count: 18334,
          image_background:
            'https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg',
        },
        {
          id: 32,
          name: 'Sci-fi',
          slug: 'sci-fi',
          language: 'eng',
          games_count: 17236,
          image_background:
            'https://media.rawg.io/media/games/198/1988a337305e008b41d7f536ce9b73f6.jpg',
        },
        {
          id: 42423,
          name: 'Научная фантастика',
          slug: 'nauchnaia-fantastika',
          language: 'rus',
          games_count: 6108,
          image_background:
            'https://media.rawg.io/media/games/8e4/8e4de3f54ac659e08a7ba6a2b731682a.jpg',
        },
        {
          id: 16,
          name: 'Horror',
          slug: 'horror',
          language: 'eng',
          games_count: 41984,
          image_background:
            'https://media.rawg.io/media/games/7c4/7c448374df84b607f67ce9182a3a3ca7.jpg',
        },
        {
          id: 42465,
          name: 'Головоломка',
          slug: 'golovolomka',
          language: 'rus',
          games_count: 11685,
          image_background:
            'https://media.rawg.io/media/games/fd8/fd882c8267a44621a0de6f9cec77ae90.jpg',
        },
        {
          id: 42463,
          name: 'Платформер',
          slug: 'platformer-2',
          language: 'rus',
          games_count: 6582,
          image_background:
            'https://media.rawg.io/media/games/9cc/9cc11e2e81403186c7fa9c00c143d6e4.jpg',
        },
        {
          id: 15,
          name: 'Stealth',
          slug: 'stealth',
          language: 'eng',
          games_count: 5742,
          image_background:
            'https://media.rawg.io/media/games/7ac/7aca7ccf0e70cd0974cb899ab9e5158e.jpg',
        },
        {
          id: 42439,
          name: 'Стелс',
          slug: 'stels',
          language: 'rus',
          games_count: 1597,
          image_background:
            'https://media.rawg.io/media/games/bce/bce62fbc7cf74bf6a1a37340993ec148.jpg',
        },
        {
          id: 42477,
          name: 'Мрачная',
          slug: 'mrachnaia',
          language: 'rus',
          games_count: 3664,
          image_background:
            'https://media.rawg.io/media/games/7ac/7aca7ccf0e70cd0974cb899ab9e5158e.jpg',
        },
        {
          id: 41,
          name: 'Dark',
          slug: 'dark',
          language: 'eng',
          games_count: 14171,
          image_background:
            'https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg',
        },
        {
          id: 336,
          name: 'controller support',
          slug: 'controller-support',
          language: 'eng',
          games_count: 293,
          image_background:
            'https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg',
        },
        {
          id: 111,
          name: 'Short',
          slug: 'short',
          language: 'eng',
          games_count: 57476,
          image_background:
            'https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg',
        },
        {
          id: 42556,
          name: 'Тайна',
          slug: 'taina',
          language: 'rus',
          games_count: 3821,
          image_background:
            'https://media.rawg.io/media/games/948/948fe7f00b6cba8472f5ecd07a455077.jpg',
        },
        {
          id: 42457,
          name: 'Короткая',
          slug: 'korotkaia',
          language: 'rus',
          games_count: 1345,
          image_background:
            'https://media.rawg.io/media/games/6a2/6a2e48933245e2cd3c92248c75c925e1.jpg',
        },
        {
          id: 117,
          name: 'Mystery',
          slug: 'mystery',
          language: 'eng',
          games_count: 11924,
          image_background:
            'https://media.rawg.io/media/games/34e/34e100b1f648de99f32d477065f04653.jpg',
        },
        {
          id: 42555,
          name: 'Симулятор ходьбы',
          slug: 'simuliator-khodby',
          language: 'rus',
          games_count: 1850,
          image_background:
            'https://media.rawg.io/media/games/62c/62c7c8b28a27b83680b22fb9d33fc619.jpg',
        },
        {
          id: 119,
          name: 'Dystopian',
          slug: 'dystopian',
          language: 'eng',
          games_count: 1806,
          image_background:
            'https://media.rawg.io/media/screenshots/67e/67e5be6ad7a555248f50bd367e9a071c.jpg',
        },
        {
          id: 42665,
          name: 'Антиутопия',
          slug: 'antiutopiia',
          language: 'rus',
          games_count: 882,
          image_background:
            'https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg',
        },
        {
          id: 42468,
          name: 'Головоломка-платформер',
          slug: 'golovolomka-platformer',
          language: 'rus',
          games_count: 2817,
          image_background:
            'https://media.rawg.io/media/games/6c8/6c8cb4780ce30b76b944cf656e8fff49.jpg',
        },
        {
          id: 334,
          name: 'achievements',
          slug: 'achievements',
          language: 'eng',
          games_count: 4890,
          image_background:
            'https://media.rawg.io/media/games/c49/c4983df94a8a8167d652b812de742da8.jpg',
        },
        {
          id: 42667,
          name: 'Псевдотрёхмерность',
          slug: 'psevdotriokhmernost',
          language: 'rus',
          games_count: 1452,
          image_background:
            'https://media.rawg.io/media/games/96b/96b9420bbd4bd1b79bf2a67f7779733a.jpg',
        },
        {
          id: 83,
          name: 'Puzzle-Platformer',
          slug: 'puzzle-platformer',
          language: 'eng',
          games_count: 9497,
          image_background:
            'https://media.rawg.io/media/screenshots/351/351ee0915fcd5a64e976791794039d5c.jpg',
        },
        {
          id: 116,
          name: '2.5D',
          slug: '25d',
          language: 'eng',
          games_count: 1379,
          image_background:
            'https://media.rawg.io/media/games/595/59556e1839b2e79b6f11f2c68a197663.jpg',
        },
        {
          id: 19728,
          name: 'european',
          slug: 'european',
          language: 'eng',
          games_count: 12,
          image_background:
            'https://media.rawg.io/media/screenshots/d14/d148f8ffc332b1d0f70be9bad91c2171.jpg',
        },
        {
          id: 40844,
          name: 'Oyun Kumandası Desteği',
          slug: 'oyun-kumandas-destegi',
          language: 'eng',
          games_count: 1,
          image_background:
            'https://media.rawg.io/media/games/d5a/d5a24f9f71315427fa6e966fdd98dfa6.jpg',
        },
        {
          id: 40848,
          name: 'Steam Başarımları',
          slug: 'steam-basarmlar',
          language: 'eng',
          games_count: 1,
          image_background:
            'https://media.rawg.io/media/games/d5a/d5a24f9f71315427fa6e966fdd98dfa6.jpg',
        },
        {
          id: 40853,
          name: 'Tek Oyunculu',
          slug: 'tek-oyunculu',
          language: 'eng',
          games_count: 1,
          image_background:
            'https://media.rawg.io/media/games/d5a/d5a24f9f71315427fa6e966fdd98dfa6.jpg',
        },
      ],
      esrb_rating: {
        id: 3,
        name: 'Teen',
        slug: 'teen',
        name_en: 'Teen',
        name_ru: 'С 13 лет',
      },
      user_game: null,
      reviews_count: 2354,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      short_screenshots: [
        {
          id: -1,
          image:
            'https://media.rawg.io/media/games/d5a/d5a24f9f71315427fa6e966fdd98dfa6.jpg',
        },
        {
          id: 12891,
          image:
            'https://media.rawg.io/media/screenshots/3a0/3a049846766e09f8883badea6538e736.jpg',
        },
        {
          id: 12892,
          image:
            'https://media.rawg.io/media/screenshots/b58/b58b50e9da6b409fd223912039c4cba7.jpg',
        },
        {
          id: 12896,
          image:
            'https://media.rawg.io/media/screenshots/7d0/7d07f39a90bc1ed2dea7186580b49c7a.jpg',
        },
        {
          id: 12899,
          image:
            'https://media.rawg.io/media/screenshots/411/4116e5d3ccdf2bdcf6e4ee4eedf7caa2.jpg',
        },
        {
          id: 12904,
          image:
            'https://media.rawg.io/media/screenshots/e6b/e6b8b49e33a11f4ae875d1ce5b236cc8.jpg',
        },
        {
          id: 12907,
          image:
            'https://media.rawg.io/media/screenshots/eb2/eb2b33954421291b98e2ae11fba72f7d.jpg',
        },
      ],
      parent_platforms: [
        {
          platform: {
            id: 1,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 2,
            name: 'PlayStation',
            slug: 'playstation',
          },
        },
        {
          platform: {
            id: 3,
            name: 'Xbox',
            slug: 'xbox',
          },
        },
        {
          platform: {
            id: 4,
            name: 'iOS',
            slug: 'ios',
          },
        },
        {
          platform: {
            id: 5,
            name: 'Apple Macintosh',
            slug: 'mac',
          },
        },
        {
          platform: {
            id: 7,
            name: 'Nintendo',
            slug: 'nintendo',
          },
        },
      ],
      genres: [
        {
          id: 3,
          name: 'Adventure',
          slug: 'adventure',
        },
        {
          id: 4,
          name: 'Action',
          slug: 'action',
        },
        {
          id: 7,
          name: 'Puzzle',
          slug: 'puzzle',
        },
        {
          id: 51,
          name: 'Indie',
          slug: 'indie',
        },
        {
          id: 83,
          name: 'Platformer',
          slug: 'platformer',
        },
      ],
    },
    {
      slug: 'hades-2018',
      name: 'Hades',
      playtime: 9,
      platforms: [
        {
          platform: {
            id: 4,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 187,
            name: 'PlayStation 5',
            slug: 'playstation5',
          },
        },
        {
          platform: {
            id: 1,
            name: 'Xbox One',
            slug: 'xbox-one',
          },
        },
        {
          platform: {
            id: 18,
            name: 'PlayStation 4',
            slug: 'playstation4',
          },
        },
        {
          platform: {
            id: 186,
            name: 'Xbox Series S/X',
            slug: 'xbox-series-x',
          },
        },
        {
          platform: {
            id: 7,
            name: 'Nintendo Switch',
            slug: 'nintendo-switch',
          },
        },
      ],
      stores: [
        {
          store: {
            id: 1,
            name: 'Steam',
            slug: 'steam',
          },
        },
        {
          store: {
            id: 3,
            name: 'PlayStation Store',
            slug: 'playstation-store',
          },
        },
        {
          store: {
            id: 2,
            name: 'Xbox Store',
            slug: 'xbox-store',
          },
        },
        {
          store: {
            id: 6,
            name: 'Nintendo Store',
            slug: 'nintendo',
          },
        },
        {
          store: {
            id: 11,
            name: 'Epic Games',
            slug: 'epic-games',
          },
        },
      ],
      released: '2020-09-17',
      tba: false,
      background_image:
        'https://media.rawg.io/media/games/1f4/1f47a270b8f241e4676b14d39ec620f7.jpg',
      rating: 4.45,
      rating_top: 5,
      ratings: [
        {
          id: 5,
          title: 'exceptional',
          count: 1025,
          percent: 61.41,
        },
        {
          id: 4,
          title: 'recommended',
          count: 480,
          percent: 28.76,
        },
        {
          id: 3,
          title: 'meh',
          count: 111,
          percent: 6.65,
        },
        {
          id: 1,
          title: 'skip',
          count: 53,
          percent: 3.18,
        },
      ],
      ratings_count: 1633,
      reviews_text_count: 28,
      added: 7321,
      added_by_status: {
        yet: 411,
        owned: 4250,
        beaten: 1046,
        toplay: 665,
        dropped: 498,
        playing: 451,
      },
      metacritic: 93,
      suggestions_count: 582,
      updated: '2023-07-13T05:52:11',
      id: 274755,
      score: null,
      clip: null,
      tags: [
        {
          id: 31,
          name: 'Singleplayer',
          slug: 'singleplayer',
          language: 'eng',
          games_count: 206544,
          image_background:
            'https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg',
        },
        {
          id: 42396,
          name: 'Для одного игрока',
          slug: 'dlia-odnogo-igroka',
          language: 'rus',
          games_count: 35171,
          image_background:
            'https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg',
        },
        {
          id: 42417,
          name: 'Экшен',
          slug: 'ekshen',
          language: 'rus',
          games_count: 32438,
          image_background:
            'https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg',
        },
        {
          id: 42398,
          name: 'Инди',
          slug: 'indi-2',
          language: 'rus',
          games_count: 46233,
          image_background:
            'https://media.rawg.io/media/games/9fa/9fa63622543e5d4f6d99aa9d73b043de.jpg',
        },
        {
          id: 40836,
          name: 'Full controller support',
          slug: 'full-controller-support',
          language: 'eng',
          games_count: 14476,
          image_background:
            'https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg',
        },
        {
          id: 13,
          name: 'Atmospheric',
          slug: 'atmospheric',
          language: 'eng',
          games_count: 29635,
          image_background:
            'https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg',
        },
        {
          id: 42400,
          name: 'Атмосфера',
          slug: 'atmosfera',
          language: 'rus',
          games_count: 6083,
          image_background:
            'https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg',
        },
        {
          id: 42401,
          name: 'Отличный саундтрек',
          slug: 'otlichnyi-saundtrek',
          language: 'rus',
          games_count: 4463,
          image_background:
            'https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg',
        },
        {
          id: 42,
          name: 'Great Soundtrack',
          slug: 'great-soundtrack',
          language: 'eng',
          games_count: 3241,
          image_background:
            'https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg',
        },
        {
          id: 42394,
          name: 'Глубокий сюжет',
          slug: 'glubokii-siuzhet',
          language: 'rus',
          games_count: 9153,
          image_background:
            'https://media.rawg.io/media/games/b7b/b7b8381707152afc7d91f5d95de70e39.jpg',
        },
        {
          id: 24,
          name: 'RPG',
          slug: 'rpg',
          language: 'eng',
          games_count: 17413,
          image_background:
            'https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg',
        },
        {
          id: 42412,
          name: 'Ролевая игра',
          slug: 'rolevaia-igra',
          language: 'rus',
          games_count: 13830,
          image_background:
            'https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg',
        },
        {
          id: 118,
          name: 'Story Rich',
          slug: 'story-rich',
          language: 'eng',
          games_count: 18334,
          image_background:
            'https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg',
        },
        {
          id: 45,
          name: '2D',
          slug: '2d',
          language: 'eng',
          games_count: 188239,
          image_background:
            'https://media.rawg.io/media/games/fd9/fd92f105dcd6491bc5d61135033d1f19.jpg',
        },
        {
          id: 64,
          name: 'Fantasy',
          slug: 'fantasy',
          language: 'eng',
          games_count: 24622,
          image_background:
            'https://media.rawg.io/media/screenshots/88b/88b5f27f07d6ca2f8a3cd0b36e03a670.jpg',
        },
        {
          id: 97,
          name: 'Action RPG',
          slug: 'action-rpg',
          language: 'eng',
          games_count: 5761,
          image_background:
            'https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg',
        },
        {
          id: 42489,
          name: 'Ролевой экшен',
          slug: 'rolevoi-ekshen',
          language: 'rus',
          games_count: 2740,
          image_background:
            'https://media.rawg.io/media/games/21a/21ad672cedee9b4378abb6c2d2e626ee.jpg',
        },
        {
          id: 42411,
          name: 'Ранний доступ',
          slug: 'rannii-dostup',
          language: 'rus',
          games_count: 11957,
          image_background:
            'https://media.rawg.io/media/games/c92/c9207a31f0eeb9904a840fc26eae6afb.jpg',
        },
        {
          id: 69,
          name: 'Action-Adventure',
          slug: 'action-adventure',
          language: 'eng',
          games_count: 13616,
          image_background:
            'https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg',
        },
        {
          id: 14,
          name: 'Early Access',
          slug: 'early-access',
          language: 'eng',
          games_count: 12433,
          image_background:
            'https://media.rawg.io/media/games/35b/35b47c4d85cd6e08f3e2ca43ea5ce7bb.jpg',
        },
        {
          id: 42487,
          name: 'Слэшер',
          slug: 'slesher',
          language: 'rus',
          games_count: 1995,
          image_background:
            'https://media.rawg.io/media/games/1f1/1f1888e1308959dfd3be4c144a81d19c.jpg',
        },
        {
          id: 68,
          name: 'Hack and Slash',
          slug: 'hack-and-slash',
          language: 'eng',
          games_count: 3480,
          image_background:
            'https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg',
        },
        {
          id: 42520,
          name: 'Реиграбельность',
          slug: 'reigrabelnost',
          language: 'rus',
          games_count: 1854,
          image_background:
            'https://media.rawg.io/media/games/d46/d46373f39458670305704ef089387520.jpg',
        },
        {
          id: 5,
          name: 'Replay Value',
          slug: 'replay-value',
          language: 'eng',
          games_count: 1305,
          image_background:
            'https://media.rawg.io/media/games/476/476178ef18ab0534771d099f51cdc694.jpg',
        },
        {
          id: 42419,
          name: 'Рогалик',
          slug: 'rogalik',
          language: 'rus',
          games_count: 2855,
          image_background:
            'https://media.rawg.io/media/screenshots/f7b/f7be8b51b1f9d94ddeac27f7b7229440.jpg',
        },
        {
          id: 99,
          name: 'Isometric',
          slug: 'isometric',
          language: 'eng',
          games_count: 3958,
          image_background:
            'https://media.rawg.io/media/games/840/8408ad3811289a6a5830cae60fb0b62a.jpg',
        },
        {
          id: 639,
          name: 'Roguelike',
          slug: 'roguelike',
          language: 'eng',
          games_count: 11299,
          image_background:
            'https://media.rawg.io/media/games/70a/70a7a7b21d8fdf5f19622e5e14599bcd.jpg',
        },
        {
          id: 42591,
          name: 'Упрощённый рогалик',
          slug: 'uproshchionnyi-rogalik',
          language: 'rus',
          games_count: 2346,
          image_background:
            'https://media.rawg.io/media/games/a0c/a0cb0ac048c75b41d2620d2e6cb6f983.jpg',
        },
        {
          id: 640,
          name: 'Roguelite',
          slug: 'roguelite',
          language: 'eng',
          games_count: 5109,
          image_background:
            'https://media.rawg.io/media/games/c32/c323f9c17ac95c363772bb9ff3693dc6.jpg',
        },
        {
          id: 48,
          name: 'Dungeon Crawler',
          slug: 'dungeon-crawler',
          language: 'eng',
          games_count: 6150,
          image_background:
            'https://media.rawg.io/media/games/476/4767c380895fd35a4f1b59016dc45967.jpg',
        },
        {
          id: 42483,
          name: 'Рисованная графика',
          slug: 'risovannaia-grafika',
          language: 'rus',
          games_count: 2866,
          image_background:
            'https://media.rawg.io/media/games/8f5/8f51cd193717f03ec820b5caece4f963.jpg',
        },
        {
          id: 258,
          name: 'Hand-drawn',
          slug: 'hand-drawn',
          language: 'eng',
          games_count: 5755,
          image_background:
            'https://media.rawg.io/media/games/c47/c4796c4c49e7e06ad328e07aa8944cdd.jpg',
        },
        {
          id: 42593,
          name: 'Одна жизнь',
          slug: 'odna-zhizn',
          language: 'rus',
          games_count: 1171,
          image_background:
            'https://media.rawg.io/media/games/a0c/a0cb0ac048c75b41d2620d2e6cb6f983.jpg',
        },
        {
          id: 124,
          name: 'Perma Death',
          slug: 'perma-death',
          language: 'eng',
          games_count: 1685,
          image_background:
            'https://media.rawg.io/media/games/238/2383a172b4d50a7b44e07980eb7141ea.jpg',
        },
        {
          id: 3383,
          name: 'dungeons',
          slug: 'dungeons',
          language: 'eng',
          games_count: 43,
          image_background:
            'https://media.rawg.io/media/screenshots/ff8/ff8a1b6a074ec09d0dbce53f2d529d31.jpg',
        },
      ],
      esrb_rating: {
        id: 3,
        name: 'Teen',
        slug: 'teen',
        name_en: 'Teen',
        name_ru: 'С 13 лет',
      },
      user_game: null,
      reviews_count: 1669,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      short_screenshots: [
        {
          id: -1,
          image:
            'https://media.rawg.io/media/games/1f4/1f47a270b8f241e4676b14d39ec620f7.jpg',
        },
        {
          id: 1767940,
          image:
            'https://media.rawg.io/media/screenshots/546/546826ed2cde2dec94e1b470c8cbb9ac.jpg',
        },
        {
          id: 1767941,
          image:
            'https://media.rawg.io/media/screenshots/0aa/0aa5e778c3cf8f47e3ee7f8e0185eb16.jpg',
        },
        {
          id: 1767942,
          image:
            'https://media.rawg.io/media/screenshots/a06/a0649473a36bb879cef146a244d9cb54.jpg',
        },
        {
          id: 1767943,
          image:
            'https://media.rawg.io/media/screenshots/f70/f7079ac3e96a5da13c8cfda6fb9fe249.jpg',
        },
        {
          id: 1767944,
          image:
            'https://media.rawg.io/media/screenshots/8d4/8d4d9c4ffe01ad0addc29353a895d562.jpg',
        },
        {
          id: 1853036,
          image:
            'https://media.rawg.io/media/screenshots/ece/eceaae77766d7f7b0fdfa4f3bb4eff98.jpg',
        },
      ],
      parent_platforms: [
        {
          platform: {
            id: 1,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 2,
            name: 'PlayStation',
            slug: 'playstation',
          },
        },
        {
          platform: {
            id: 3,
            name: 'Xbox',
            slug: 'xbox',
          },
        },
        {
          platform: {
            id: 7,
            name: 'Nintendo',
            slug: 'nintendo',
          },
        },
      ],
      genres: [
        {
          id: 51,
          name: 'Indie',
          slug: 'indie',
        },
        {
          id: 3,
          name: 'Adventure',
          slug: 'adventure',
        },
        {
          id: 4,
          name: 'Action',
          slug: 'action',
        },
        {
          id: 5,
          name: 'RPG',
          slug: 'role-playing-games-rpg',
        },
      ],
    },
    {
      slug: 'firewatch',
      name: 'Firewatch',
      playtime: 5,
      platforms: [
        {
          platform: {
            id: 4,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 1,
            name: 'Xbox One',
            slug: 'xbox-one',
          },
        },
        {
          platform: {
            id: 18,
            name: 'PlayStation 4',
            slug: 'playstation4',
          },
        },
        {
          platform: {
            id: 7,
            name: 'Nintendo Switch',
            slug: 'nintendo-switch',
          },
        },
        {
          platform: {
            id: 5,
            name: 'macOS',
            slug: 'macos',
          },
        },
        {
          platform: {
            id: 6,
            name: 'Linux',
            slug: 'linux',
          },
        },
      ],
      stores: [
        {
          store: {
            id: 1,
            name: 'Steam',
            slug: 'steam',
          },
        },
        {
          store: {
            id: 3,
            name: 'PlayStation Store',
            slug: 'playstation-store',
          },
        },
        {
          store: {
            id: 2,
            name: 'Xbox Store',
            slug: 'xbox-store',
          },
        },
        {
          store: {
            id: 5,
            name: 'GOG',
            slug: 'gog',
          },
        },
        {
          store: {
            id: 6,
            name: 'Nintendo Store',
            slug: 'nintendo',
          },
        },
      ],
      released: '2016-02-08',
      tba: false,
      background_image:
        'https://media.rawg.io/media/games/0be/0bea0a08a4d954337305391b778a7f37.jpg',
      rating: 4.3,
      rating_top: 5,
      ratings: [
        {
          id: 5,
          title: 'exceptional',
          count: 1039,
          percent: 45.19,
        },
        {
          id: 4,
          title: 'recommended',
          count: 1025,
          percent: 44.58,
        },
        {
          id: 3,
          title: 'meh',
          count: 179,
          percent: 7.79,
        },
        {
          id: 1,
          title: 'skip',
          count: 56,
          percent: 2.44,
        },
      ],
      ratings_count: 2267,
      reviews_text_count: 22,
      added: 7273,
      added_by_status: {
        yet: 301,
        owned: 3878,
        beaten: 2432,
        toplay: 458,
        dropped: 159,
        playing: 45,
      },
      metacritic: 81,
      suggestions_count: 400,
      updated: '2023-07-11T19:19:00',
      id: 2819,
      score: null,
      clip: null,
      tags: [
        {
          id: 42396,
          name: 'Для одного игрока',
          slug: 'dlia-odnogo-igroka',
          language: 'rus',
          games_count: 35171,
          image_background:
            'https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg',
        },
        {
          id: 42392,
          name: 'Приключение',
          slug: 'prikliuchenie',
          language: 'rus',
          games_count: 30382,
          image_background:
            'https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg',
        },
        {
          id: 42398,
          name: 'Инди',
          slug: 'indi-2',
          language: 'rus',
          games_count: 46233,
          image_background:
            'https://media.rawg.io/media/games/9fa/9fa63622543e5d4f6d99aa9d73b043de.jpg',
        },
        {
          id: 13,
          name: 'Atmospheric',
          slug: 'atmospheric',
          language: 'eng',
          games_count: 29635,
          image_background:
            'https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg',
        },
        {
          id: 42400,
          name: 'Атмосфера',
          slug: 'atmosfera',
          language: 'rus',
          games_count: 6083,
          image_background:
            'https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg',
        },
        {
          id: 42401,
          name: 'Отличный саундтрек',
          slug: 'otlichnyi-saundtrek',
          language: 'rus',
          games_count: 4463,
          image_background:
            'https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg',
        },
        {
          id: 42,
          name: 'Great Soundtrack',
          slug: 'great-soundtrack',
          language: 'eng',
          games_count: 3241,
          image_background:
            'https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg',
        },
        {
          id: 42394,
          name: 'Глубокий сюжет',
          slug: 'glubokii-siuzhet',
          language: 'rus',
          games_count: 9153,
          image_background:
            'https://media.rawg.io/media/games/b7b/b7b8381707152afc7d91f5d95de70e39.jpg',
        },
        {
          id: 118,
          name: 'Story Rich',
          slug: 'story-rich',
          language: 'eng',
          games_count: 18334,
          image_background:
            'https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg',
        },
        {
          id: 42442,
          name: 'Открытый мир',
          slug: 'otkrytyi-mir',
          language: 'rus',
          games_count: 4494,
          image_background:
            'https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg',
        },
        {
          id: 42399,
          name: 'Казуальная игра',
          slug: 'kazualnaia-igra',
          language: 'rus',
          games_count: 31993,
          image_background:
            'https://media.rawg.io/media/games/852/8522935d8ab27b610a254b52de0da212.jpg',
        },
        {
          id: 42429,
          name: 'От первого лица',
          slug: 'ot-pervogo-litsa',
          language: 'rus',
          games_count: 7731,
          image_background:
            'https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg',
        },
        {
          id: 16,
          name: 'Horror',
          slug: 'horror',
          language: 'eng',
          games_count: 41984,
          image_background:
            'https://media.rawg.io/media/games/7c4/7c448374df84b607f67ce9182a3a3ca7.jpg',
        },
        {
          id: 42482,
          name: 'Смешная',
          slug: 'smeshnaia',
          language: 'rus',
          games_count: 6600,
          image_background:
            'https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg',
        },
        {
          id: 6,
          name: 'Exploration',
          slug: 'exploration',
          language: 'eng',
          games_count: 19523,
          image_background:
            'https://media.rawg.io/media/games/9aa/9aa42d16d425fa6f179fc9dc2f763647.jpg',
        },
        {
          id: 42481,
          name: 'Юмор',
          slug: 'iumor',
          language: 'rus',
          games_count: 4260,
          image_background:
            'https://media.rawg.io/media/games/e04/e04963f3ac4c4fa83a1dc0b9231e50db.jpg',
        },
        {
          id: 42464,
          name: 'Исследование',
          slug: 'issledovanie',
          language: 'rus',
          games_count: 2979,
          image_background:
            'https://media.rawg.io/media/games/174/1743b3dd185bda4a7be349347d4064df.jpg',
        },
        {
          id: 111,
          name: 'Short',
          slug: 'short',
          language: 'eng',
          games_count: 57476,
          image_background:
            'https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg',
        },
        {
          id: 42556,
          name: 'Тайна',
          slug: 'taina',
          language: 'rus',
          games_count: 3821,
          image_background:
            'https://media.rawg.io/media/games/948/948fe7f00b6cba8472f5ecd07a455077.jpg',
        },
        {
          id: 42457,
          name: 'Короткая',
          slug: 'korotkaia',
          language: 'rus',
          games_count: 1345,
          image_background:
            'https://media.rawg.io/media/games/6a2/6a2e48933245e2cd3c92248c75c925e1.jpg',
        },
        {
          id: 42601,
          name: 'Цветастая',
          slug: 'tsvetastaia',
          language: 'rus',
          games_count: 9417,
          image_background:
            'https://media.rawg.io/media/screenshots/d07/d07a7e2f7be2428c51ad26326c84e21d.jpg',
        },
        {
          id: 117,
          name: 'Mystery',
          slug: 'mystery',
          language: 'eng',
          games_count: 11924,
          image_background:
            'https://media.rawg.io/media/games/34e/34e100b1f648de99f32d477065f04653.jpg',
        },
        {
          id: 42529,
          name: 'Для взрослых',
          slug: 'dlia-vzroslykh',
          language: 'rus',
          games_count: 2035,
          image_background:
            'https://media.rawg.io/media/games/5fa/5fae5fec3c943179e09da67a4427d68f.jpg',
        },
        {
          id: 192,
          name: 'Mature',
          slug: 'mature',
          language: 'eng',
          games_count: 2222,
          image_background:
            'https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg',
        },
        {
          id: 165,
          name: 'Colorful',
          slug: 'colorful',
          language: 'eng',
          games_count: 17996,
          image_background:
            'https://media.rawg.io/media/games/ba9/ba9ad92b6d04825bd15a407c6059db94.jpg',
        },
        {
          id: 42555,
          name: 'Симулятор ходьбы',
          slug: 'simuliator-khodby',
          language: 'rus',
          games_count: 1850,
          image_background:
            'https://media.rawg.io/media/games/62c/62c7c8b28a27b83680b22fb9d33fc619.jpg',
        },
        {
          id: 91,
          name: 'Walking Simulator',
          slug: 'walking-simulator',
          language: 'eng',
          games_count: 6288,
          image_background:
            'https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg',
        },
        {
          id: 90,
          name: 'Visual Novel',
          slug: 'visual-novel',
          language: 'eng',
          games_count: 4829,
          image_background:
            'https://media.rawg.io/media/games/2fb/2fb35e31727f7ebc1f00bf998d0e22a7.jpg',
        },
        {
          id: 209,
          name: 'Drama',
          slug: 'drama',
          language: 'eng',
          games_count: 2824,
          image_background:
            'https://media.rawg.io/media/games/0be/0bea0a08a4d954337305391b778a7f37.jpg',
        },
        {
          id: 42650,
          name: 'Драма',
          slug: 'drama-2',
          language: 'rus',
          games_count: 2213,
          image_background:
            'https://media.rawg.io/media/games/643/6431f15213a854efd273943f2cf6a925.jpg',
        },
        {
          id: 42513,
          name: 'Триллер',
          slug: 'triller',
          language: 'rus',
          games_count: 980,
          image_background:
            'https://media.rawg.io/media/games/d96/d966fbdebcb904af63980842b37c31c9.jpg',
        },
        {
          id: 288,
          name: 'Interactive Fiction',
          slug: 'interactive-fiction',
          language: 'eng',
          games_count: 2125,
          image_background:
            'https://media.rawg.io/media/screenshots/e25/e253cc4df0c2604ec2b12cab8b45d58a.jpg',
        },
        {
          id: 183,
          name: 'Thriller',
          slug: 'thriller',
          language: 'eng',
          games_count: 1989,
          image_background:
            'https://media.rawg.io/media/games/64a/64a7789943fe9f9d9c93f3a286ee7b20.jpg',
        },
        {
          id: 43576,
          name: 'interactive movie',
          slug: 'interactive-movie-2',
          language: 'eng',
          games_count: 5,
          image_background:
            'https://media.rawg.io/media/screenshots/c64/c6468dd8debde0e900313e85e0628ee6.jpg',
        },
        {
          id: 91217,
          name: 'interactive game',
          slug: 'interactive-game-2',
          language: 'eng',
          games_count: 2,
          image_background:
            'https://media.rawg.io/media/games/e22/e22b1be74554d8da754948dfb66ded05.jpg',
        },
      ],
      esrb_rating: {
        id: 4,
        name: 'Mature',
        slug: 'mature',
        name_en: 'Mature',
        name_ru: 'С 17 лет',
      },
      user_game: null,
      reviews_count: 2299,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      short_screenshots: [
        {
          id: -1,
          image:
            'https://media.rawg.io/media/games/0be/0bea0a08a4d954337305391b778a7f37.jpg',
        },
        {
          id: 25705,
          image:
            'https://media.rawg.io/media/screenshots/e86/e86b8c787467f28f816eb59c5a7e8799.jpg',
        },
        {
          id: 25706,
          image:
            'https://media.rawg.io/media/screenshots/5fd/5fd10bf8857d575d25029712eff7a555.jpg',
        },
        {
          id: 25708,
          image:
            'https://media.rawg.io/media/screenshots/12a/12a71dc55e86960b7f0185f12c3affe2.jpg',
        },
        {
          id: 25710,
          image:
            'https://media.rawg.io/media/screenshots/992/9923c31af79cb7a17e24c4ef47d50217.jpg',
        },
        {
          id: 25711,
          image:
            'https://media.rawg.io/media/screenshots/2fd/2fde2721efe9480d2ccd7c204649edab.jpg',
        },
        {
          id: 25712,
          image:
            'https://media.rawg.io/media/screenshots/d96/d96edb4fac41f4c39871ac750893cdec.jpg',
        },
      ],
      parent_platforms: [
        {
          platform: {
            id: 1,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 2,
            name: 'PlayStation',
            slug: 'playstation',
          },
        },
        {
          platform: {
            id: 3,
            name: 'Xbox',
            slug: 'xbox',
          },
        },
        {
          platform: {
            id: 5,
            name: 'Apple Macintosh',
            slug: 'mac',
          },
        },
        {
          platform: {
            id: 6,
            name: 'Linux',
            slug: 'linux',
          },
        },
        {
          platform: {
            id: 7,
            name: 'Nintendo',
            slug: 'nintendo',
          },
        },
      ],
      genres: [
        {
          id: 51,
          name: 'Indie',
          slug: 'indie',
        },
        {
          id: 3,
          name: 'Adventure',
          slug: 'adventure',
        },
      ],
    },
    {
      slug: 'alien-isolation',
      name: 'Alien: Isolation',
      playtime: 5,
      platforms: [
        {
          platform: {
            id: 4,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 1,
            name: 'Xbox One',
            slug: 'xbox-one',
          },
        },
        {
          platform: {
            id: 18,
            name: 'PlayStation 4',
            slug: 'playstation4',
          },
        },
        {
          platform: {
            id: 7,
            name: 'Nintendo Switch',
            slug: 'nintendo-switch',
          },
        },
        {
          platform: {
            id: 3,
            name: 'iOS',
            slug: 'ios',
          },
        },
        {
          platform: {
            id: 21,
            name: 'Android',
            slug: 'android',
          },
        },
      ],
      stores: [
        {
          store: {
            id: 1,
            name: 'Steam',
            slug: 'steam',
          },
        },
        {
          store: {
            id: 3,
            name: 'PlayStation Store',
            slug: 'playstation-store',
          },
        },
        {
          store: {
            id: 2,
            name: 'Xbox Store',
            slug: 'xbox-store',
          },
        },
        {
          store: {
            id: 4,
            name: 'App Store',
            slug: 'apple-appstore',
          },
        },
        {
          store: {
            id: 5,
            name: 'GOG',
            slug: 'gog',
          },
        },
        {
          store: {
            id: 6,
            name: 'Nintendo Store',
            slug: 'nintendo',
          },
        },
        {
          store: {
            id: 7,
            name: 'Xbox 360 Store',
            slug: 'xbox360',
          },
        },
        {
          store: {
            id: 8,
            name: 'Google Play',
            slug: 'google-play',
          },
        },
        {
          store: {
            id: 11,
            name: 'Epic Games',
            slug: 'epic-games',
          },
        },
      ],
      released: '2014-10-05',
      tba: false,
      background_image:
        'https://media.rawg.io/media/games/daa/daaee07fcb40744d90cf8142f94a241f.jpg',
      rating: 4.2,
      rating_top: 5,
      ratings: [
        {
          id: 5,
          title: 'exceptional',
          count: 602,
          percent: 44.36,
        },
        {
          id: 4,
          title: 'recommended',
          count: 543,
          percent: 40.01,
        },
        {
          id: 3,
          title: 'meh',
          count: 150,
          percent: 11.05,
        },
        {
          id: 1,
          title: 'skip',
          count: 62,
          percent: 4.57,
        },
      ],
      ratings_count: 1347,
      reviews_text_count: 4,
      added: 7264,
      added_by_status: {
        yet: 587,
        owned: 4871,
        beaten: 797,
        toplay: 291,
        dropped: 562,
        playing: 156,
      },
      metacritic: 81,
      suggestions_count: 518,
      updated: '2023-07-14T03:14:38',
      id: 3556,
      score: null,
      clip: null,
      tags: [
        {
          id: 31,
          name: 'Singleplayer',
          slug: 'singleplayer',
          language: 'eng',
          games_count: 206544,
          image_background:
            'https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg',
        },
        {
          id: 42396,
          name: 'Для одного игрока',
          slug: 'dlia-odnogo-igroka',
          language: 'rus',
          games_count: 35171,
          image_background:
            'https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg',
        },
        {
          id: 42417,
          name: 'Экшен',
          slug: 'ekshen',
          language: 'rus',
          games_count: 32438,
          image_background:
            'https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg',
        },
        {
          id: 42392,
          name: 'Приключение',
          slug: 'prikliuchenie',
          language: 'rus',
          games_count: 30382,
          image_background:
            'https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg',
        },
        {
          id: 40847,
          name: 'Steam Achievements',
          slug: 'steam-achievements',
          language: 'eng',
          games_count: 30840,
          image_background:
            'https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg',
        },
        {
          id: 40836,
          name: 'Full controller support',
          slug: 'full-controller-support',
          language: 'eng',
          games_count: 14476,
          image_background:
            'https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg',
        },
        {
          id: 13,
          name: 'Atmospheric',
          slug: 'atmospheric',
          language: 'eng',
          games_count: 29635,
          image_background:
            'https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg',
        },
        {
          id: 40849,
          name: 'Steam Cloud',
          slug: 'steam-cloud',
          language: 'eng',
          games_count: 14345,
          image_background:
            'https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg',
        },
        {
          id: 42400,
          name: 'Атмосфера',
          slug: 'atmosfera',
          language: 'rus',
          games_count: 6083,
          image_background:
            'https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg',
        },
        {
          id: 42401,
          name: 'Отличный саундтрек',
          slug: 'otlichnyi-saundtrek',
          language: 'rus',
          games_count: 4463,
          image_background:
            'https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg',
        },
        {
          id: 42,
          name: 'Great Soundtrack',
          slug: 'great-soundtrack',
          language: 'eng',
          games_count: 3241,
          image_background:
            'https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg',
        },
        {
          id: 42428,
          name: 'Шутер',
          slug: 'shuter',
          language: 'rus',
          games_count: 6857,
          image_background:
            'https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg',
        },
        {
          id: 8,
          name: 'First-Person',
          slug: 'first-person',
          language: 'eng',
          games_count: 28676,
          image_background:
            'https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg',
        },
        {
          id: 42429,
          name: 'От первого лица',
          slug: 'ot-pervogo-litsa',
          language: 'rus',
          games_count: 7731,
          image_background:
            'https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg',
        },
        {
          id: 42435,
          name: 'Шедевр',
          slug: 'shedevr',
          language: 'rus',
          games_count: 1059,
          image_background:
            'https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg',
        },
        {
          id: 32,
          name: 'Sci-fi',
          slug: 'sci-fi',
          language: 'eng',
          games_count: 17236,
          image_background:
            'https://media.rawg.io/media/games/198/1988a337305e008b41d7f536ce9b73f6.jpg',
        },
        {
          id: 42423,
          name: 'Научная фантастика',
          slug: 'nauchnaia-fantastika',
          language: 'rus',
          games_count: 6108,
          image_background:
            'https://media.rawg.io/media/games/8e4/8e4de3f54ac659e08a7ba6a2b731682a.jpg',
        },
        {
          id: 16,
          name: 'Horror',
          slug: 'horror',
          language: 'eng',
          games_count: 41984,
          image_background:
            'https://media.rawg.io/media/games/7c4/7c448374df84b607f67ce9182a3a3ca7.jpg',
        },
        {
          id: 30,
          name: 'FPS',
          slug: 'fps',
          language: 'eng',
          games_count: 12151,
          image_background:
            'https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg',
        },
        {
          id: 42427,
          name: 'Шутер от первого лица',
          slug: 'shuter-ot-pervogo-litsa',
          language: 'rus',
          games_count: 4139,
          image_background:
            'https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg',
        },
        {
          id: 42420,
          name: 'Сложная',
          slug: 'slozhnaia',
          language: 'rus',
          games_count: 4508,
          image_background:
            'https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg',
        },
        {
          id: 42491,
          name: 'Мясо',
          slug: 'miaso',
          language: 'rus',
          games_count: 3940,
          image_background:
            'https://media.rawg.io/media/games/e04/e04963f3ac4c4fa83a1dc0b9231e50db.jpg',
        },
        {
          id: 26,
          name: 'Gore',
          slug: 'gore',
          language: 'eng',
          games_count: 5076,
          image_background:
            'https://media.rawg.io/media/games/f6b/f6bed028b02369d4cab548f4f9337e81.jpg',
        },
        {
          id: 49,
          name: 'Difficult',
          slug: 'difficult',
          language: 'eng',
          games_count: 12486,
          image_background:
            'https://media.rawg.io/media/games/1f1/1f1888e1308959dfd3be4c144a81d19c.jpg',
        },
        {
          id: 189,
          name: 'Female Protagonist',
          slug: 'female-protagonist',
          language: 'eng',
          games_count: 10614,
          image_background:
            'https://media.rawg.io/media/games/5a4/5a44112251d70a25291cc33757220fce.jpg',
        },
        {
          id: 1,
          name: 'Survival',
          slug: 'survival',
          language: 'eng',
          games_count: 7286,
          image_background:
            'https://media.rawg.io/media/games/b54/b54598d1d5cc31899f4f0a7e3122a7b0.jpg',
        },
        {
          id: 42452,
          name: 'Выживание',
          slug: 'vyzhivanie',
          language: 'rus',
          games_count: 4774,
          image_background:
            'https://media.rawg.io/media/games/7f6/7f6cd70ba2ad57053b4847c13569f2d8.jpg',
        },
        {
          id: 42404,
          name: 'Женщина-протагонист',
          slug: 'zhenshchina-protagonist',
          language: 'rus',
          games_count: 2413,
          image_background:
            'https://media.rawg.io/media/games/3cf/3cff89996570cf29a10eb9cd967dcf73.jpg',
        },
        {
          id: 15,
          name: 'Stealth',
          slug: 'stealth',
          language: 'eng',
          games_count: 5742,
          image_background:
            'https://media.rawg.io/media/games/7ac/7aca7ccf0e70cd0974cb899ab9e5158e.jpg',
        },
        {
          id: 42439,
          name: 'Стелс',
          slug: 'stels',
          language: 'rus',
          games_count: 1597,
          image_background:
            'https://media.rawg.io/media/games/bce/bce62fbc7cf74bf6a1a37340993ec148.jpg',
        },
        {
          id: 25,
          name: 'Space',
          slug: 'space',
          language: 'eng',
          games_count: 41805,
          image_background:
            'https://media.rawg.io/media/games/ae1/ae1518c3dc1e847344661905fd2a8d16.jpg',
        },
        {
          id: 42422,
          name: 'Космос',
          slug: 'kosmos-2',
          language: 'rus',
          games_count: 3187,
          image_background:
            'https://media.rawg.io/media/games/3cf/3cff89996570cf29a10eb9cd967dcf73.jpg',
        },
        {
          id: 42471,
          name: 'Хоррор на выживание',
          slug: 'khorror-na-vyzhivanie',
          language: 'rus',
          games_count: 2249,
          image_background:
            'https://media.rawg.io/media/games/c11/c11a0b92b4c28f2e0db489f430142653.jpg',
        },
        {
          id: 17,
          name: 'Survival Horror',
          slug: 'survival-horror',
          language: 'eng',
          games_count: 7621,
          image_background:
            'https://media.rawg.io/media/games/348/348640e78a7fcd4bb7dcad4fea014eeb.jpg',
        },
        {
          id: 172,
          name: 'Aliens',
          slug: 'aliens',
          language: 'eng',
          games_count: 6264,
          image_background:
            'https://media.rawg.io/media/games/4cb/4cb463b5588adc672124fb041f09e91c.jpg',
        },
        {
          id: 42485,
          name: 'Инопланетяне',
          slug: 'inoplanetiane',
          language: 'rus',
          games_count: 1335,
          image_background:
            'https://media.rawg.io/media/games/ae1/ae1518c3dc1e847344661905fd2a8d16.jpg',
        },
        {
          id: 62349,
          name: 'vr mod',
          slug: 'vr-mod',
          language: 'eng',
          games_count: 17,
          image_background:
            'https://media.rawg.io/media/screenshots/1bb/1bb3f78f0fe43b5d5ca2f3da5b638840.jpg',
        },
      ],
      esrb_rating: {
        id: 4,
        name: 'Mature',
        slug: 'mature',
        name_en: 'Mature',
        name_ru: 'С 17 лет',
      },
      user_game: null,
      reviews_count: 1357,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      short_screenshots: [
        {
          id: -1,
          image:
            'https://media.rawg.io/media/games/daa/daaee07fcb40744d90cf8142f94a241f.jpg',
        },
        {
          id: 31794,
          image:
            'https://media.rawg.io/media/screenshots/df3/df311b578fbaa587c8ba2d768bcf18d7.jpg',
        },
        {
          id: 31795,
          image:
            'https://media.rawg.io/media/screenshots/b46/b46d5ddcbf7650df4d7eedf1e886bcdb.jpg',
        },
        {
          id: 31796,
          image:
            'https://media.rawg.io/media/screenshots/37a/37a8f38809062d7e68d32c537e23862d.jpg',
        },
        {
          id: 31797,
          image:
            'https://media.rawg.io/media/screenshots/89c/89c46fe1576b925f4c00cc9b6620877a.jpg',
        },
        {
          id: 31798,
          image:
            'https://media.rawg.io/media/screenshots/d06/d0612058778cdf798a747c80a491b55f.jpg',
        },
        {
          id: 31799,
          image:
            'https://media.rawg.io/media/screenshots/e12/e12d1635f074c536a16bc50a6b3f56cc.jpg',
        },
      ],
      parent_platforms: [
        {
          platform: {
            id: 1,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 2,
            name: 'PlayStation',
            slug: 'playstation',
          },
        },
        {
          platform: {
            id: 3,
            name: 'Xbox',
            slug: 'xbox',
          },
        },
        {
          platform: {
            id: 4,
            name: 'iOS',
            slug: 'ios',
          },
        },
        {
          platform: {
            id: 8,
            name: 'Android',
            slug: 'android',
          },
        },
        {
          platform: {
            id: 7,
            name: 'Nintendo',
            slug: 'nintendo',
          },
        },
      ],
      genres: [
        {
          id: 3,
          name: 'Adventure',
          slug: 'adventure',
        },
        {
          id: 4,
          name: 'Action',
          slug: 'action',
        },
      ],
    },
  ],
};
