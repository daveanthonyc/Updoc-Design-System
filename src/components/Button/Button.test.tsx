import { render, screen } from "@testing-library/react"
import TestComponent from "./TestComponent";

function renderButton() {
    return render(
        <TestComponent data-testid="example"></TestComponent>
    )
}

it("should have hello world", () => {
    const {container} = renderButton();
    expect(container).toMatchSnapshot();
})

