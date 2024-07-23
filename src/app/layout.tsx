import type { PropsWithChildren } from 'react';
import type { Metadata } from 'next';

import { Root } from '@/components/Root/Root';

import '@telegram-apps/telegram-ui/dist/styles.css';
import 'normalize.css/normalize.css';
import './_assets/globals.css';

export const metadata: Metadata = {
  title: 'Your Application Title Goes Here',
  description: 'Your application description goes here',
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body>
        <Root>
          <main className='flex flex-col h-full'>
            <div className='flex-1'>
              {children}
            </div>
            <div className='border border-red-400 h-[50px]'>
              Nav
            </div>
          </main>
        </Root>
      </body>
    </html>
  );
}
