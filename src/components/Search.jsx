import { useState } from "react";

export default function Search({ callback = Function.prototype }) {
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    callback(value)
  };

  const handleKey = (e) => {
    if(e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="search row">
      <div className="input-field col s12">
        <input type="search"
          name="search"
          id="search"
          placeholder="search"
          onKeyDown={handleKey}
          onChange={e => setValue(e.target.value)}
          value={value}
        />
        <button className="btn grey darken-4" style={{position: 'absolute', top: 0, right: 0,}} onClick={handleSubmit}>Search</button>
      </div>
    </div>
  );
}
