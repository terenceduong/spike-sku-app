import type { SkuConfig } from 'sku';

const skuConfig: SkuConfig = {
  clientEntry: 'src/client.tsx',
  serverEntry: 'src/server/routedServer.tsx',
  environments: ['development', 'production'],
  languages: ['en', 'id', 'th'],
  port: 3300,
  serverPort: 3301,
  public: 'src/public',
  publicPath: '/path/to/public/assets/', // <-- Required for sku build output
  orderImports: true,
  target: 'dist',
} satisfies SkuConfig;

export default skuConfig;
