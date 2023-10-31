import { StackContext, NextjsSite } from 'sst/constructs';

export function Web({ stack }: StackContext) {
  const site = new NextjsSite(stack, 'site', {
    path: 'packages/web',
  });
  stack.addOutputs({
    SiteUrl: site.url,
  });
}
