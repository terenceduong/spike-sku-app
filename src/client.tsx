import { hydrateRoot } from 'react-dom/client';

import App from './App/App';
import type { ClientContext } from './types';

export default ({ environment }: ClientContext) => {
  console.log('export default in client.tsx');
  hydrateRoot(
    document.getElementById('app')!,
    <App environment={environment} />,
  );
};
