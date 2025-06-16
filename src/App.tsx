import { useState } from "react";

function App() {
  return (
    <>
      <header className="h-16 grid justify-items-center">
        <div className="w-full max-w-[980px] grid grid-cols-[auto_1fr_auto]">
          <div className="p-4">CW</div>
          <div aria-hidden="true"></div>
          <div className="p-4 grid grid-cols-[auto_auto] gap-4">
            <div>Something</div>
            <div>About</div>
          </div>
        </div>
      </header>
      <main className="grid place-items-center min-h-screen">
        <h1>Coming Soon...</h1>
      </main>
    </>
  );
}

export default App;
