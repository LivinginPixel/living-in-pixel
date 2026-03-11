'use client';

import { CustomCursor } from '../../features/landing/components/CustomCursor';
import { useCustomCursor } from '../../features/landing/hooks';

type GlobalCursorProps = Readonly<{
  enabled?: boolean;
}>;

const DEFAULT_CURSOR_STATE = {
  enabled: true
} as const;

export const GlobalCursor = ({ enabled = DEFAULT_CURSOR_STATE.enabled }: GlobalCursorProps) => {
  useCustomCursor();

  if (!enabled) {
    return null;
  }

  return <CustomCursor />;
};
