
import { screen, render} from '@testing-library/react'
import Button from '../Button'



describe("Button component tests", () => {
    test("Button component returns button element", () => {
      render(<Button>test </Button>);
      const buttonElement = screen.getByRole("button");
      expect(buttonElement).toBeCalled;
    });

    test("Button component has a prop children", () => {
      render(<Button>test </Button>);
      const buttonElement = screen.getByRole("button", { name: "test" });
      expect(buttonElement).toBeCalled;
    });
})


