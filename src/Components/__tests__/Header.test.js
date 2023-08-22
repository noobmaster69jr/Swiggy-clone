import { render } from "@testing-library/react";
import Header from "../Header"
import {Provider} from "react-redux"
import store from "../../utils/store"
import {StaticRouter} from "react-router-dom/server"

test("Logo should load on rendering header", () => {
   const header = render(
     <StaticRouter>
       <Provider store={store}>
         <Header />
       </Provider>
     </StaticRouter>
   );
   const logo = header.getAllByTestId("logo")
  
   expect(logo[0].src).toBe("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkbrxibqugzFUf2AuWEk7kCHIPEX0GsR8ctw&usqp=CAU")

})

test("cart should be 0 when rendering header", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  const cart = header.getByTestId("cart");

 expect(cart.innerHTML).toBe("Cart-0 items");
});