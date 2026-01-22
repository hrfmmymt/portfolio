import { test, expect } from '@playwright/test';

test.describe('トップページ', () => {
  test.describe('ヘッダーセクション', () => {
    test('メインの見出しと説明文が表示されること', async ({ page }) => {
      await page.goto('/');

      await expect(page.getByText('# hirofumi miyamoto')).toBeVisible();
      await expect(page.getByText('hi everyone! i am hrfmmymt.')).toBeVisible();
      await expect(page.getByText("i'm always goofing off on the internet.")).toBeVisible();
      await expect(page.getByText('scroll down slowly and see.')).toBeVisible();
    });
  });

  test.describe('ナビゲーション', () => {
    test('各セクションへのリンクが表示されること', async ({ page }) => {
      await page.goto('/');

      await expect(page.getByRole('link', { name: 'profile' })).toBeVisible();
      await expect(page.getByRole('link', { name: 'career' })).toBeVisible();
      await expect(page.getByRole('link', { name: 'etc.' })).toBeVisible();
    });

    test('ハンバーガーメニューが表示され、クリックで開閉できること（モバイル）', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      await page.goto('/');

      const menuButton = page.getByRole('button', { name: 'Open menu' });
      await expect(menuButton).toBeVisible();

      await menuButton.click();
      await expect(page.getByRole('button', { name: 'Close menu' })).toBeVisible();

      // メニューが開いた状態でナビゲーションが表示される
      await expect(page.getByRole('link', { name: 'profile' })).toBeVisible();
    });

    test('リンクをクリックすると該当セクションにスムーズスクロールすること', async ({ page }) => {
      await page.goto('/');

      // careerセクションのリンクをクリック
      await page.getByRole('link', { name: 'career' }).click();

      // スクロールを待つ
      await page.waitForTimeout(500);

      // careerセクションが表示されていることを確認
      const careerSection = page.locator('#career');
      await expect(careerSection).toBeInViewport();
    });
  });

  test.describe('Profileセクション', () => {
    test('プロフィール情報が表示されること', async ({ page }) => {
      await page.goto('/');

      const profileSection = page.locator('#profile');
      await expect(profileSection.getByAltText('profile image')).toBeVisible();
      await expect(profileSection.getByText('### about')).toBeVisible();
      await expect(profileSection.getByText('japanese web [ developer | designer ]')).toBeVisible();
      await expect(profileSection.getByText('hrfmmymt')).toBeVisible();
      await expect(profileSection.getByText('tokyo, jp')).toBeVisible();
    });
  });

  test.describe('Careerセクション', () => {
    test('キャリアリストが表示されること', async ({ page }) => {
      await page.goto('/');

      const careerSection = page.locator('#career');
      await expect(careerSection).toBeVisible();

      // キャリアアイテムが複数表示されている
      const careerItems = page.locator('a[href^="/career/"]');
      await expect(careerItems).toHaveCount(9); // career-list.jsonに9件ある
    });

    test('キャリアアイテムをクリックすると詳細ページに遷移すること', async ({ page }) => {
      await page.goto('/');

      // 最初のキャリアアイテムをクリック
      await page.locator('a[href^="/career/"]').first().click();

      // 詳細ページに遷移
      await expect(page).toHaveURL(/\/career\/.+/);
      // 詳細ページの見出しを確認
      await expect(page.getByRole('heading', { name: 'career', level: 1 })).toBeVisible();
    });
  });

  test.describe('Etcセクション', () => {
    test('外部リンクが表示されること', async ({ page }) => {
      await page.goto('/');

      const etcSection = page.locator('#etc');
      await expect(etcSection).toBeVisible();

      // 外部リンクが複数表示されている（href属性で特定）
      await expect(etcSection.locator('a[href="https://github.com/hrfmmymt/"]')).toBeVisible();
      await expect(etcSection.locator('a[href="https://iiyatsu.hrfmmymt.com/"]')).toBeVisible();
    });

    test('コピーライトが表示されること', async ({ page }) => {
      await page.goto('/');

      const etcSection = page.locator('#etc');
      const currentYear = new Date().getFullYear();
      await expect(etcSection.getByText(`© ${currentYear}`)).toBeVisible();
      await expect(etcSection.getByRole('link', { name: 'hirofumi miyamoto' })).toBeVisible();
    });
  });

  test.describe('アクセシビリティ', () => {
    test('フォーカス可能な要素が正しく機能すること', async ({ page }) => {
      await page.goto('/');

      // ナビゲーションリンクにフォーカスできる
      const profileLink = page.getByRole('link', { name: 'profile' });
      await profileLink.focus();
      await expect(profileLink).toBeFocused();

      // ハンバーガーメニュー（モバイル）にフォーカスできる
      await page.setViewportSize({ width: 375, height: 667 });
      const menuButton = page.getByRole('button', { name: 'Open menu' });
      await menuButton.focus();
      await expect(menuButton).toBeFocused();
    });
  });
});
