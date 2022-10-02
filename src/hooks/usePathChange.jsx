import { useEffect } from 'react';

/**
 * @param {string}
 * @returns
 */

export default function usePathChange(minutes) {
  const minutesToMiliseconds = minutes * 1000;
  useEffect(() => {
    setTimeout(() => {}, minutesToMiliseconds);
  }, []);
  return <></>;
}
