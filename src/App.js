import React, { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [length, setLength] = useState(6);
  const [numberAllowed, setNumberAllowed] = useState(true);
  const [characterAllowed, setCharacterAllowed] = useState(true);
  const [password, setPassword] = useState("");

  const refpass = useRef("null");

  const passwordG = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) {
      str += "0123456789";
    }
    if (characterAllowed) {
      str += "!@#$%^&*()_+`~-=";
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, characterAllowed, numberAllowed, setPassword]);

  useEffect(() => {
    passwordG();
  }, [length, numberAllowed, characterAllowed, passwordG]);

  const copyPass = useCallback(() => {
    refpass.current?.select();
    refpass.current?.setSelectionRange(0, 101);
    window.navigator.clipboard.writeText(password);
  }, [password]);
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
            value={password}
            ref={refpass}
          />
          <div className="button text-center">
            <button className="btn btn-primary  m-2" onClick={copyPass}>
              Copy To Clipboard
            </button>
          </div>
          <div className="container text-center">
            <sapn className=" pt-5">
              <input
                type="range"
                name=""
                id="range"
                min={6}
                max={100}
                value={length}
                onChange={(e) => {
                  setLength(e.target.value);
                }}
              />
              <label className="label p-2 text-light">Length:{length}</label>
            </sapn>
            <span className="check-box-1 m-2">
              <input
                type="checkbox"
                name="numberAllowed"
                id="numberAllowed"
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
