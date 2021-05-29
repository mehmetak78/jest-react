import Greeting from "./Greeting";
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe('Greeting Component', () =>  {
  test('renders "hello world" as a text', () => {
    // Arrange
    render(<Greeting/>);

    // Act

    // Assert
    const theElement = screen.getByText('Hello World', {exact: false});
    expect(theElement).toBeInTheDocument();
  })

  test('renders "good to see you" if the button was NOT clicked', () => {
    // Arrange
    render(<Greeting/>);

    // Act

    // Assert
    const theElement = screen.getByText('good to see', {exact: false});
    expect(theElement).toBeInTheDocument();
  })

  test('renders "Changed" if the button was clicked', () => {
    // Arrange
    render(<Greeting/>);

    // Act
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    // Assert
    const theElement = screen.getByText('Changed', {exact: false});
    expect(theElement).toBeInTheDocument();
  })

  test('does not render "good to see you" if the button was clicked', () => {
    // Arrange
    render(<Greeting/>);

    // Act
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    // Assert
    const theElement = screen.queryByText('good to see you', {exact: false});
    expect(theElement).toBeNull();
  })

})

