import "@testing-library/jest-dom";

jest.mock("next/font/google", () => ({
  Noto_Sans: () => ({
    className: "mocked-noto-sans",
  }),
  Give_You_Glory: () => ({
    className: "mocked-give-you-glory",
  }),
}));
