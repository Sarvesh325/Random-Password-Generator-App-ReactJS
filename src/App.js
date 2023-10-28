import React, { useCallback, useState } from "react";

function App() {
  const [length, setLength] = useState(6);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordG = useCallback(() => {
    const pass = "";
    const str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) {
      str += "0123456789";
    }
    if (characterAllowed) {
      str += "!@#$%^&*()_+`~-=";
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass = str.charAt(char);
    }
    setPassword(pass);
  }, [length, characterAllowed, numberAllowed]);
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
            onChange={(e) => setLength(e.target.value)}
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
                value={length}
                className="cursor-pointer"
              />
              <label className="label p-2 text-light">Length:{length}</label>
            </sapn>
            <span className="check-box-1 m-2">
              <input
                type="checkbox"
                name="numberAllowed"
                id="numberAllowed"
                className="cursor-pointer"
                defaultChecked="numberAllowed"
                onChange={() => setNumberAllowed((prev) => !prev)}
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
                onChange={() => setCharacterAllowed((prev) => !prev)}
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
