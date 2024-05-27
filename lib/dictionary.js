import 'server-only'

const dictionaries = {
  en: () => import('@/dictionaries/en.json').then(m => m.default),
  de: () => import('@/dictionaries/de.json').then(m => m.default)
}

export const getDictionary = async locale => {
  const dictionary = await dictionaries['en']()
  return dictionary
}
