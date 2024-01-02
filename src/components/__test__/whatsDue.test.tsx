import { render, screen } from "@testing-library/react";
import WhatsDue from "../WhatsDue";


test("whatsDue component has a correct data", () => {
    render(<WhatsDue />);
    const WhatsDueElement = screen.queryAllByText("Physics 02");
    expect(WhatsDueElement).toHaveLength(1)
})