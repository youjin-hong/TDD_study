import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("<App />", () => {
  it("renders all main components", () => {
    render(<App />);

    // Logo 확인
    const appLogo = screen.getByRole("img", { name: /logo/i });
    expect(appLogo).toBeInTheDocument();
    expect(appLogo).toHaveAttribute("src", "logo.svg");

    // Edit 텍스트 확인 (분할된 텍스트 처리)
    expect(screen.getByText(/edit/i)).toBeInTheDocument();
    expect(screen.getByText("src/App.tsx")).toBeInTheDocument();
    expect(screen.getByText(/and save to reload/i)).toBeInTheDocument();

    // Learn React 링크 확인
    const learnLink = screen.getByRole("link", { name: /learn react/i });
    expect(learnLink).toHaveAttribute("href", "https://reactjs.org");
  });
});
