import renderer from 'react-test-renderer';
import reducer, {initVal,} from "../../Features/UserSlice";
import Login from '../Login';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from 'redux-mock-store';
  

  const mockStore = configureStore([]);
  const store = mockStore({
    users: { isSuccess: false, isError: false, user: null },
  });

  //To Match UI Snapshop
  test('matches the UI snapshot with screen.debug()', () => {
    const { container } = render(
      <Provider store={store}>
        <Router>
          <Login />
        </Router>
      </Provider>
    );

    // Use screen.debug() to output the rendered DOM
    screen.debug(container);

    // Snapshot the rendered container
    expect(container).toMatchSnapshot();
  });

  test('validates email format using regex', () => {
    render(
      <Provider store={store}>
        <Router>
          <Login />
        </Router>
      </Provider>
    );

    const emailInput = screen.getByLabelText(/email/i);

    // Valid email format. Here we mimic that user enters valid.email@example.com in the emal text field. If the email format matches then test case will be passed otherwise testcase will be failed
    //for Pass test case
    fireEvent.change(emailInput, { target: { value: 'valid.email@example.com' } });

    //for Fail test case
    //fireEvent.change(emailInput, { target: { value: 'valid.email@example' } });
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    expect(emailRegex.test(emailInput.value)).toBe(true);

    // Invalid email format
    fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
    expect(emailRegex.test(emailInput.value)).toBe(false);
  });


  test('validates password format using regex', () => {
    render(
      <Provider store={store}>
        <Router>
          <Login />
        </Router>
      </Provider>
    );
  
    const passwordInput = screen.getByLabelText(/password/i);
  
    // Password Regex: At least 6 characters, one uppercase letter, one symbol, and one number
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{6,}$/;
  
    // Valid password format (test case should pass)
    //for Pass test case
    fireEvent.change(passwordInput, { target: { value: 'Abc@123' } });
    expect(passwordRegex.test(passwordInput.value)).toBe(true);
  
  }); 

  /*Testing the initial state*/
   
const initval1={
  user:{},
  isSuccess: false,
  isError: false,
  isLoading: false,
}
test("Should return initial state", () => {
  expect(
    reducer(undefined, {
      type: undefined,
    })
  ).toEqual(initval1);
});

  