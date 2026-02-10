/**
 * Cloudflare Pages Function - sober-counter プロキシ
 *
 * /sober-counter/* へのリクエストを sober-counter.pages.dev にプロキシします。
 * sober-counterをデプロイ後、SOBER_COUNTER_ORIGINを実際のURLに更新してください。
 */

const SOBER_COUNTER_ORIGIN = 'https://sober-counter.pages.dev';

export async function onRequest(context) {
  const url = new URL(context.request.url);

  // /sober-counter/xxx → /sober-counter/xxx としてそのまま転送
  const targetUrl = new URL(url.pathname + url.search, SOBER_COUNTER_ORIGIN);

  const response = await fetch(targetUrl, {
    method: context.request.method,
    headers: context.request.headers,
    body: context.request.body,
  });

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: response.headers,
  });
}
