import { render, screen, fireEvent } from "@testing-library/react";
import Page from "../page";

// react-scrollのモック
jest.mock("react-scroll", () => ({
  Events: {
    scrollEvent: {
      register: jest.fn(),
    },
  },
  Link: ({
    children,
    onClick,
    "aria-label": ariaLabel,
  }: {
    children: React.ReactNode;
    onClick?: () => void;
    "aria-label"?: string;
  }) => (
    <button type="button" onClick={onClick} aria-label={ariaLabel}>
      {children}
    </button>
  ),
}));

describe("Page", () => {
  beforeEach(() => {
    // windowのmatchMediaをモック
    window.matchMedia = jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    }));
  });

  describe("ヘッダーセクション", () => {
    it("メインの見出しと説明文が表示されること", () => {
      render(<Page />);

      expect(screen.getByText("# hirofumi miyamoto")).toBeInTheDocument();
      expect(
        screen.getByText("hi everyone! i am hrfmmymt."),
      ).toBeInTheDocument();
      expect(
        screen.getByText("i'm always goofing off on the internet."),
      ).toBeInTheDocument();
      expect(
        screen.getByText("scroll down slowly and see."),
      ).toBeInTheDocument();
    });

    it("ScrollArrowコンポーネントが表示されること", () => {
      render(<Page />);
      const scrollArrow = screen.getByRole("button", {
        name: "Scroll to profile",
      });
      expect(scrollArrow).toBeInTheDocument();
      fireEvent.click(scrollArrow);
    });
  });

  describe("ナビゲーション", () => {
    it("ハンバーガーメニューが表示され、クリックで開閉できること", () => {
      render(<Page />);
      const menuButton = screen.getByRole("button", { name: "Open menu" });
      expect(menuButton).toBeInTheDocument();

      fireEvent.click(menuButton);
      expect(
        screen.getByRole("button", { name: "Close menu" }),
      ).toBeInTheDocument();
    });

    it("各セクションへのリンクが表示されること", () => {
      render(<Page />);
      expect(screen.getByText("profile")).toBeInTheDocument();
      expect(screen.getByText("career")).toBeInTheDocument();
      expect(screen.getByText("skills, or")).toBeInTheDocument();
      expect(screen.getByText("etc.")).toBeInTheDocument();
    });
  });

  describe("Profileセクション", () => {
    it("プロフィール情報が表示されること", () => {
      render(<Page />);
      expect(screen.getByAltText("profile image")).toBeInTheDocument();
      expect(screen.getByText("### about")).toBeInTheDocument();
      expect(
        screen.getByText("japanese web [ developer | designer ]"),
      ).toBeInTheDocument();
      expect(screen.getByText("hrfmmymt")).toBeInTheDocument();
      expect(screen.getByText("tokyo, jp")).toBeInTheDocument();
    });
  });

  describe("Careerセクション", () => {
    it("キャリアリストが表示されること", () => {
      render(<Page />);
      const timelineLists = screen.getAllByRole("list");
      const timelineItems = screen.getAllByRole("listitem");
      expect(timelineLists.length).toBeGreaterThan(0);
      expect(timelineItems.length).toBeGreaterThan(0);
    });
  });

  describe("Skillsセクション", () => {
    it("スキル説明文が表示されること", () => {
      render(<Page />);
      expect(
        screen.getByText(
          "these blocks are large enough to be interested or skilled",
        ),
      ).toBeInTheDocument();
      expect(
        screen.getByText(
          "ブロックの大きさと興味や技術の大きさが比例しています。",
        ),
      ).toBeInTheDocument();
    });

    it("スキルリストが表示されること", () => {
      render(<Page />);
      const skillsLists = screen.getAllByRole("list");
      expect(skillsLists.length).toBeGreaterThan(0);
    });
  });

  describe("Etcセクション", () => {
    it("外部リンクが表示されること", () => {
      render(<Page />);
      const links = screen.getAllByRole("link");
      expect(links.length).toBeGreaterThan(0);
    });

    it("コピーライトが表示されること", () => {
      render(<Page />);
      const currentYear = new Date().getFullYear();
      expect(
        screen.getByText((content) => content.includes(`© ${currentYear}`)),
      ).toBeInTheDocument();
    });
  });

  describe("アクセシビリティ", () => {
    it("フォーカス可能な要素が正しく機能すること", () => {
      render(<Page />);
      const interactiveElements = screen.getAllByRole("button");
      for (const element of interactiveElements) {
        element.focus();
        expect(document.activeElement).toBe(element);
      }
    });
  });
});
