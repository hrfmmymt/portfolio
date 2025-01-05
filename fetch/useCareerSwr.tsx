import useSWR from 'swr';

import { fetcher } from './fetcher';

export const useCareerSwr = () => {
  const { data, error } = useSWR('/api/career', fetcher);
  return {
    careerList: data,
    isLoading: !error && !data,
    isError: error,
  };
};
