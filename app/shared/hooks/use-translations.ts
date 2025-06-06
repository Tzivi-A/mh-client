import translations from '../translations/he.json';

export const useTranslations = () => {
  const t = (key: string) => {
    const keys = key.split('.');
    let value = translations;

    for (const k of keys) {
      if (value[k] === undefined) {
        console.warn(`Translation key not found: ${key}`);
        return key;
      }
      value = value[k];
    }

    return value;
  };

  return { t };
};
