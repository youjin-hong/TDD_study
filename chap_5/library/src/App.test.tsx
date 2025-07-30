import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("<App />", () => {
  it("renders component correctly", () => {
    render(<App />);

    // 텍스트로 찾기 (기존 코드 유지)
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();

    // 이미지를 alt 텍스트나 role로 찾기
    const logoImage = screen.getByRole("img");
    expect(logoImage).toHaveAttribute("src", "logo.svg");
    expect(logoImage).toHaveAttribute("alt", "logo"); // alt 속성도 확인

    // 특정 텍스트가 있는 paragraph 찾기
    const editText = screen.getByText(/edit src\/app\.js and save to reload/i);
    expect(editText).toBeInTheDocument();
    expect(editText.tagName.toLowerCase()).toBe("p");

    // 전체 앱 컨테이너를 testid로 찾기 (필요한 경우)
    // App 컴포넌트에 data-testid="app" 추가 필요
    // const appContainer = screen.getByTestId("app");
    // expect(appContainer).toMatchSnapshot();
  });

  // 더 구체적인 테스트들로 분리
  it("renders logo with correct attributes", () => {
    render(<App />);

    const logo = screen.getByRole("img", { name: /logo/i });
    expect(logo).toHaveAttribute("src", "logo.svg");
    expect(logo).toHaveClass("App-logo");
  });

  it("renders edit instruction text", () => {
    render(<App />);

    const instruction = screen.getByText(
      /edit src\/app\.js and save to reload/i
    );
    expect(instruction).toBeInTheDocument();
  });

  it("renders learn react link", () => {
    render(<App />);

    const learnReactLink = screen.getByRole("link", { name: /learn react/i });
    expect(learnReactLink).toBeInTheDocument();
    expect(learnReactLink).toHaveAttribute("href", "https://reactjs.org");
  });
});
