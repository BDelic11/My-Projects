import 'server-only'

 
const dictionaries = {
  en: () => import('../Dictionaries/en.json').then((module) => module.default),
  hr: () => import('../Dictionaries/hr.json').then((module) => module.default),
}
 
export const getDictionary = async (locale) => dictionaries[locale]()