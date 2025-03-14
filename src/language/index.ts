import english, { languageType } from "./english";
import german from "./german";
import hindi from "./hindi";

const languageMap = {
  English: english,
  German: german,
  Hindi: hindi,
};

export type knownLanguageTypes = keyof typeof languageMap;
const selectedLanguage: knownLanguageTypes = "English";

const language: languageType = languageMap[selectedLanguage];

export default language;
