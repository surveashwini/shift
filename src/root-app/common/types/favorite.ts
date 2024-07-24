export type UniversityInfo = {
  alpha_two_code: string;
  domains: string[];
  name: string;
  web_pages: string[];
  country: string;
  'state-province': string | null;
};

export type Favorite = Omit<UniversityInfo, 'state-province' | 'alpha_two_code' | 'country'> & {
  id: string;
  state: string;
};
