import { createSignal, createEffect } from "solid-js";
import { css } from "solid-styled-components"; // https://github.com/solidjs/solid-styled-components

function App() {
  const [lol, setLol] = createSignal(0);
  // setInterval(() => setLol(lol() + 1), 500)

  createEffect(() => {
    console.log(`lol is ${lol()}`);
  });

  return (
    <div class={css`
    display: flex;
    justify-content: center;
    padding: 10rem;
  `}>
      {/* yo solid, { lol() } */}
      <button
        onClick={() => setLol(lol() + 1)}
        class={css`
          display: inline-block;
          padding: 1.2rem 2.4rem;
          border: none;
          background-color: salmon;
          &:active {
            transform: scale(0.9);
          }
        `}
      >
        what's lol?{" "}
      </button>
    </div>
  );
}

export default App;
