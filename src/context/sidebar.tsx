import { useXl } from '@/hooks/responsive';
import React, { useReducer, useContext } from 'react';

type Action =
  | { type: 'OPEN_MOBILE_LEFT_SIDEBAR' }
  | { type: 'CLOSE_MOBILE_LEFT_SIDEBAR' }
  | { type: 'OPEN_MOBILE_RIGHT_SIDEBAR' }
  | { type: 'CLOSE_MOBILE_RIGHT_SIDEBAR' }
  | { type: 'OPEN_DESKTOP_LEFT_SIDEBAR' }
  | { type: 'CLOSE_DESKTOP_LEFT_SIDEBAR' }
  | { type: 'TOGGLE_DESKTOP_LEFT_SIDEBAR' }
  | { type: 'OPEN_DESKTOP_RIGHT_SIDEBAR' }
  | { type: 'CLOSE_DESKTOP_RIGHT_SIDEBAR' }
  | { type: 'TOGGLE_DESKTOP_RIGHT_SIDEBAR' };

type Dispatch = (action: Action) => void;
type State = {
  mobileSidebar: 'left' | 'right' | null;
  desktopLeftSidebar: boolean;
  desktopRightSidebar: boolean;
};
type SidebarProviderProps = { children: React.ReactNode };

const SidebarStateContext = React.createContext<{
  state: State;
  dispatch: Dispatch;
}>({
  state: {
    mobileSidebar: null,
    desktopLeftSidebar: false,
    desktopRightSidebar: false,
  },
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  dispatch: () => {},
});
// Note: Gatsby Build will fail if no default value provided - https://github.com/gatsbyjs/gatsby/issues/12104

function sidebarReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'OPEN_MOBILE_LEFT_SIDEBAR': {
      return { ...state, mobileSidebar: 'left' };
    }
    case 'CLOSE_MOBILE_LEFT_SIDEBAR': {
      return { ...state, mobileSidebar: null };
    }
    case 'OPEN_MOBILE_RIGHT_SIDEBAR': {
      return { ...state, mobileSidebar: 'right' };
    }
    case 'CLOSE_MOBILE_RIGHT_SIDEBAR': {
      return { ...state, mobileSidebar: null };
    }
    case 'OPEN_DESKTOP_LEFT_SIDEBAR': {
      return { ...state, desktopLeftSidebar: true };
    }
    case 'CLOSE_DESKTOP_LEFT_SIDEBAR': {
      return { ...state, desktopLeftSidebar: false };
    }
    case 'TOGGLE_DESKTOP_LEFT_SIDEBAR': {
      return { ...state, desktopLeftSidebar: !state.desktopLeftSidebar };
    }
    case 'OPEN_DESKTOP_RIGHT_SIDEBAR': {
      return { ...state, desktopRightSidebar: true };
    }
    case 'CLOSE_DESKTOP_RIGHT_SIDEBAR': {
      return { ...state, desktopRightSidebar: false };
    }
    case 'TOGGLE_DESKTOP_RIGHT_SIDEBAR': {
      return { ...state, desktopRightSidebar: !state.desktopRightSidebar };
    }
  }
}

function SidebarProvider({ children }: SidebarProviderProps) {
  const isXl = useXl();
  const [state, dispatch] = useReducer(sidebarReducer, {
    mobileSidebar: null,
    desktopLeftSidebar: isXl ? true : false,
    desktopRightSidebar: isXl ? true : false,
  });

  // NOTE: *might* need to memoize this value
  const value = { state, dispatch };
  return (
    <SidebarStateContext.Provider value={value}>
      {children}
    </SidebarStateContext.Provider>
  );
}

function useSidebar() {
  const context = useContext(SidebarStateContext);
  return context;
}

export { SidebarProvider, useSidebar };
