import { useContext } from "react";
import { AuthContext } from "./context/authContext";

export default function App() {
  const { state, dispatch } = useContext(AuthContext);

  return (
    <>
      <h1>The TypeScript Times</h1>
      <h2>MEN WALK ON THE MOON</h2>
      <p>Astronauts land on plain; collect rocks, plant flag.</p>

      {!state.authed && (
        <p>
          please log in if you want to read more{" "}
          <button onClick={() => dispatch({ type: "SET_AUTHED" })}>
            login
          </button>
        </p>
      )}

      {state.authed && (
        <>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consectetur, totam laudantium expedita hic asperiores vel eligendi
            atque sunt odit commodi minima ipsam mollitia delectus sapiente
            officia rem obcaecati doloribus necessitatibus.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            quaerat maiores ex earum deserunt voluptatem optio reprehenderit sit
            magnam necessitatibus ab iusto nihil vero, ea corporis, quasi cum
            amet aut!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus consectetur quia, quibusdam perferendis illo delectus
            ea magni hic ut velit earum necessitatibus reiciendis. Consequatur
            cumque ab magni provident inventore sunt.
          </p>
        </>
      )}
    </>
  );
}
