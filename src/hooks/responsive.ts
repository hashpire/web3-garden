import { useMediaQuery } from 'react-responsive';

// Breakpoint values based on TailwindCSS Default Config

export function useSm() {
  return useMediaQuery({ query: '(min-width: 640px)' });
}

export function useMd() {
  return useMediaQuery({ query: '(min-width: 768px)' });
}

export function useLg() {
  return useMediaQuery({ query: '(min-width: 1024px)' });
}

export function useXl() {
  return useMediaQuery({ query: '(min-width: 1280px)' });
}
export function use2xl() {
  return useMediaQuery({ query: '(min-width: 1536px)' });
}
