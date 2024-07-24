export const BASE_URL = 'http://universities.hipolabs.com';

interface RequestOptions {
  method: string;
  headers?: Record<string, string>;
  body?: any;
}

const fetchApiResponse = async (url: string, options: RequestOptions) => {
  try {
    const response = await fetch(`${BASE_URL}${url}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }
    const apiResponse = await response.json();

    return { statusCode: response.status, apiResponse };
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
};

export default fetchApiResponse;
