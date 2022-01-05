import type { NextApiRequest, NextApiResponse } from 'next';

type List = {
  label: string;
  link: string;
};

type SubList = {
  label: string;
  link: string;
};

export type CreditsList = {
  title: string;
  subtitle: string;
  list: List[];
  subList: SubList[];
  name: string;
};

export const creditsList: CreditsList = {
  title: 'credits',
  subtitle: 'thanks for inspiration, knowledge and support:',
  list: [
    {
      label: 'developit/preact-cli',
      link: 'https://github.com/developit/preact-cli',
    },
    {
      label: 'fisshy/react-scroll',
      link: 'https://github.com/fisshy/react-scroll',
    },
    {
      label: 'matthewlynch/preact-cli-plugin-critical-css',
      link: 'https://github.com/matthewlynch/preact-cli-plugin-critical-css',
    },
    {
      label: 'prettier/prettier',
      link: 'https://github.com/prettier/prettier',
    },
    {
      label: 'facebook/jest',
      link: 'https://github.com/facebook/jest',
    },
    {
      label: 'mzgoddard/preact-render-spy',
      link: 'https://github.com/mzgoddard/preact-render-spy',
    },
    {
      label: 'fokusferit/browserMocks.js',
      link: 'https://gist.github.com/fokusferit/5507f084b8414af7b03c31f4bffd7536',
    },
    {
      label: 'netlify/netlify-cli',
      link: 'https://github.com/netlify/netlify-cli',
    },
  ],
  subList: [
    {
      label: 'The Velvet Underground/The Velvet Underground & Nico',
      link: 'https://open.spotify.com/album/6MqUvJry4Z87cCWebJmzcu',
    },
    {
      label: 'Game of Thrones',
      link: 'https://www.hbo.com/game-of-thrones',
    },
    {
      label: "hinds/i don't run",
      link: 'https://open.spotify.com/album/62oP7jCLGPALY3R61034k8',
    },
    {
      label: 'cardi b/invasion of privacy',
      link: 'https://open.spotify.com/album/4KdtEKjY3Gi0mKiSdy96ML',
    },
    {
      label: 'janelle monae/dirty computer',
      link: 'https://open.spotify.com/album/2PjlaxlMunGOUvcRzlTbtE',
    },
    {
      label: 'supercar/highvision',
      link: 'https://open.spotify.com/album/5GFkG2A3FxS6c1Uef0AKVm',
    },
    {
      label: 'jóhann jóhannsson/englabörn & variations',
      link: 'https://open.spotify.com/album/3JvBlIJOsKDpIcgQaT51nf',
    },
    {
      label: 'donnie trumpet & the social experiment/surf',
      link: 'https://open.spotify.com/album/3eM1KTKmpqrQOvuvYY42cr',
    },
    {
      label: "frank ocean/boys don't cry",
      link: '',
    },
    {
      label: 'sunny day service/the CITY',
      link: 'https://open.spotify.com/album/7EexNnMtCiuxkGrv5RwQLT',
    },
    {
      label: 'arctic monkeys/tranquility base hotel & casino',
      link: 'https://open.spotify.com/album/7v6FNgLDS8KmaWA1amUtqe',
    },
  ],
  name: 'hirofumi miyamoto',
};

export default function handler(req: NextApiRequest, res: NextApiResponse<CreditsList>) {
  res.status(200).json(creditsList);
}
