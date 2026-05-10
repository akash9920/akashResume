import { getMatrimonialBundle } from "@/data/matrimonial-locales";

export {
  matrimonialBiodataPath,
  getMatrimonialBundle,
  type MatrimonialLocale,
  type MatrimonialBundle,
  type MatrimonialProfileData,
} from "@/data/matrimonial-locales";

/** English profile — used by dynamic PDF biodata and legacy imports. */
export const matrimonialProfile = getMatrimonialBundle("en").profile;
