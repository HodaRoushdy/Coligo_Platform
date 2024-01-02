import {render, screen } from "@testing-library/react";
import Image from "../Image";


test("image component called correctly", () => {
    render(<Image url={""} alt={""} className={""} />)
    const ImageElement = screen.getByTestId(/imgElement/i);
    expect(ImageElement).toBeCalled
})

test("image component take a props correctly", () => {
    render(<Image url={""} alt={"image"} className={""} />)
    const ImageElement = screen.queryAllByAltText("image")
    expect(ImageElement).toHaveLength(1)
})

test("image component return img html tag correctly", () => {
  render(<Image url={""} alt={""} className={""} />);
  const ImageElement = screen.queryAllByRole("img")
  expect(ImageElement).toHaveLength(1);
});

