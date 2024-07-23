'use client';

import { Section, Cell, Image, List } from '@telegram-apps/telegram-ui';

import { Link } from '@/components/Link/Link';
import { useAppViewport } from '@/components/Root/Root';

import tonSvg from './_assets/ton.svg';

export default function Home() {

  const viewport = useAppViewport();
  return (
    <div className='border border-green-600 h-full'>
      <List>
        <Section
          header='Features'
        // footer='You can use these pages to learn more about features, provided by Telegram Mini Apps and other useful projects'
        >
          <Link href='/ton-connect'>
            <Cell
              before={<Image src={tonSvg.src} style={{ backgroundColor: '#007AFF' }} alt='img' />}
              subtitle='Connect your TON wallet'
            >
              TON Connect
            </Cell>
          </Link>
          <Cell>
            Viewport height: {viewport?.height}
          </Cell>
          <Cell>
            Viewport width: {viewport?.width}
          </Cell>
        </Section>
        <Section
          header='Application Launch Data'
        // footer='These pages help developer to learn more about current launch informatio'
        >
          <Link href='/init-data'>
            <Cell subtitle='User data, chat information, technical data'>Init Data</Cell>
          </Link>
          <Link href='/launch-params'>
            <Cell subtitle='Platform identifier, Mini Apps version, etc.'>Launch Parameters</Cell>
          </Link>
          <Link href='/theme-params'>
            <Cell subtitle='Telegram application palette information'>Theme Parameters</Cell>
          </Link>
        </Section>
      </List>
    </div>
  );
}
