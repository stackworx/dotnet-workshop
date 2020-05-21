import * as React from 'react';
import {Box} from '@material-ui/core';
import {NavMenu} from './NavMenu';

export function Layout({children}: {children: React.ReactNode}) {
  return (
    <div>
      <NavMenu />
      <Box padding={2}>{children}</Box>
    </div>
  );
}
