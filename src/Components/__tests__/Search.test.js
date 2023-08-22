import "@testing-library/jest-dom";
import { render, waitFor, fireEvent } from "@testing-library/react";
import Body from "../Body";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";
import RestaurantData from "../../mocks/data";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: ()=>Promise.resolve(RestaurantData)
  });
});

test("Search Results on Homepage", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );
  //here the Restaurantdata we used is empty instead of actual data. that is why it is failing
  await waitFor(() => expect(body.getByTestId("search")));
  const resList = body.getByTestId("res-list");
  expect(resList.children.length).toBe(10);
});

//fireEvent.change
//fireEvent.click