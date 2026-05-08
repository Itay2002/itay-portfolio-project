import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "@/App";

describe("App", () => {
  it("renders the homepage identity and requested sections", () => {
    render(<App />);

    expect(screen.getByRole("heading", { name: "Welcome to my personality brand page" })).toBeInTheDocument();
    expect(screen.getByText("Software developer. Storyteller. Community builder.")).toBeInTheDocument();
    expect(screen.getByText("Chicago to Little Rock.")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "A simple welcome." })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Conversations I want to remember." })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Where I am building in public." })).toBeInTheDocument();
  });

  it("filters interview cards", () => {
    render(<App />);

    fireEvent.click(screen.getByRole("button", { name: "Software" }));

    expect(screen.getByRole("heading", { name: "Software Mentor" })).toBeInTheDocument();
    expect(screen.queryByRole("heading", { name: "Community Builder" })).not.toBeInTheDocument();
  });

  it("shows social links with the requested stats", () => {
    render(<App />);

    expect(screen.getByText("2,800 followers")).toBeInTheDocument();
    expect(screen.getByText("320 followers, highest views 200k")).toBeInTheDocument();
    expect(screen.getByText("850 followers, highest views 101k")).toBeInTheDocument();
    expect(screen.getByText("0 followers")).toBeInTheDocument();
    expect(screen.getByText("58 subscribers")).toBeInTheDocument();
  });
});
