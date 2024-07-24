import { HttpResponse, http } from 'msw';

const westUniversity = {
  alpha_two_code: 'GB',
  domains: ['student.westherts.ac.uk', 'westherts.ac.uk'],
  name: 'West Herts College',
  web_pages: ['https://westherts.ac.uk'],
  country: 'United Kingdom',
  'state-province': null,
};

const nationalUniversity = {
  alpha_two_code: 'FR',
  domains: ['insa-toulouse.fr'],
  name: 'National Institute of Applied Sciences of Toulouse',
  web_pages: ['https://insa-toulouse.fr'],
  country: 'France',
  'state-province': null,
};

const getUniversities = http.get(`http://universities.hipolabs.com/search`, () => {
  return new HttpResponse(JSON.stringify([westUniversity, nationalUniversity]));
});

export const searchHandlers = [getUniversities];
