import { ChangeEvent, useState } from "react";
import { checkPasswordComplexity } from "../utils";

const App = () => {
  const [password, setPassword] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }
  return (
    <div className="root">
      <div>
        <h1>Password Complexity Checker</h1>
      </div>
      <div className="card">
        <div className="form">
          <label>Password</label>
          <input
            type="text"
            value={password}
            onChange={handleChange}
            placeholder="Enter the password to check its complexity"
          />
        </div>

        <div className="result">
          <label>Result:</label>
          <pre>{JSON.stringify(checkPasswordComplexity(password, { minLength: 8 }), null, 2)}</pre>
          {/* <span>{checkPasswordComplexity(password, { minLength: 8 }).value}</span> */}
        </div>
      </div>
    </div>
  )
}

export default App;
