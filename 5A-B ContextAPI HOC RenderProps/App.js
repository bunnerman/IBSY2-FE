import { useContext, createContext, useState } from "react";
import ExampleText from "./components/ExampleText.js";
import "./index.css";

export const AuthContext = createContext();

function AuthStatus({ render }) 
{
  const { loginStatus } = useContext(AuthContext);
  return render(loginStatus);
}

function App() 
{
  const [loginStatus, setLoginStatus] = useState(false);
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  return (
    <AuthContext.Provider value={{ loginStatus }}>
      <div className = "customTheme" style = {{ minHeight: "100vh" }}>
        <input placeholder="username" onChange={(e) => setUser(e.target.value)}/><br/>
        <input placeholder="password" onChange={(e) => setPass(e.target.value)}/><br/>
				<p>Use the following credentials: </p>
				<p><b>Username:</b> abc<br/><b>Password:</b> 123</p>
        <button onClick={() => 
				{
          if (user == "abc" && pass == "123")
            setLoginStatus(true);
					else
						alert("Not correct")
        }}>
          Login
        </button>

				{/*Render Props Used Here*/}
				<AuthStatus
				render={(isLoggedIn) => isLoggedIn ? 
					(
						<h3>🟢 Logged in 🟢</h3>
					) : 
					(
						<h3>🔴 Logged Out 🔴</h3>
					)
				}/>
        <ExampleText />
      </div>
    </AuthContext.Provider>
  );
}

export default App; 
