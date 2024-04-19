export const CONTAINER_IDS = {
  advantages: 'AdvantagesBlock',
  aboutUs: 'AboutUsBlock',
  howItWorks: 'HowItWorksBlock',
  prices: 'PricesBlock',
  languages: 'LanguagesBlock'
};

interface ILanguage {
  key: string;
  title: string;
}
export const LANGUAGES: ILanguage[] = [
  {
    key: 'english',
    title: 'Английский'
  },
  {
    key: 'spanish',
    title: 'Испанский'
  },
  {
    key: 'kazakh',
    title: 'Казахский'
  }
];
