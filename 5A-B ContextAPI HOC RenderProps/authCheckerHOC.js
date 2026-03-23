import { useContext } from "react";
import { AuthContext } from "../App.js";
import "../index.css";

function authWrapper(Component) 
{
  return function(props) 
	{
    const { loginStatus } = useContext(AuthContext);

    if (!loginStatus) 
			return (
				<div className = "customTheme">
					<h2><span style = {{color: "gray"}}>???</span></h2>
				</div>
			);
		else
			return (
				<Component {...props} />
			);
  };
}

export default authWrapper;
