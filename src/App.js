import React from "react";

function App() {
  return (
    <>
      <div className="container card mt-4 " style={{ backgroundColor: "grey" }}>
        <h1 className="text-center text-light "> PASSWORD GENERATOR</h1>
        <div className="form-group">
          <input
            placeholder="Password"
            readOnly="true"
            name="password"
            id="password"
            className="form-control p-2"
          />
          <div className="button text-center">
            <button className="btn btn-primary  m-2">Copy To Clipboard</button>
          </div>
          <div className="container text-center">
            <sapn className=" pt-5">
              <input
                type="range"
                name=""
                id=""
                min={6}
                max={100}
                className="cursor-pointer"
              />
              <label className="label p-2 text-light">Length</label>
            </sapn>
            <span className="check-box-1 m-2">
              <input
                type="checkbox"
                name="numberAllowed"
                id="numberAllowed"
                className="cursor-pointer"
                defaultChecked="numberAllowed"
              />
              <label className="check-box-2 ms-2 text-light">Numbers</label>
            </span>
            <sapn className="range m-2">
              <input
                type="checkbox"
                name="charactersAllowed"
                id="charactersAllowed"
                className="cursor-pointer"
                defaultChecked="charactersAllowed"
              />
              <label className="check-box-2 ms-2 text-light">Characters</label>
            </sapn>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
