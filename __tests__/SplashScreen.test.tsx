import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import SplashScreen from "../app/components/SplashScreen";

// mock fetch to simulate decode failure
beforeAll(() => {
  global.fetch = jest.fn(() => Promise.reject(new Error("network")));
});

afterAll(() => {
  // @ts-ignore
  global.fetch.mockRestore && global.fetch.mockRestore();
});

test("renders fallback when GIF decode fails", async () => {
  const onFinish = jest.fn();
  render(
    <SplashScreen
      onFinish={onFinish}
      variant="video"
      videoSrc="/jackets.gif"
      poster="/jacket-countdown-poster.jpg"
    />,
  );
  // wait for the decodeFailed effect to set and for the StaticCard to appear
  await waitFor(() => {
    // the StaticCard contains the poster img when provided
    const poster = screen.getByAltText("loading poster");
    expect(poster).toBeInTheDocument();
  });
});
