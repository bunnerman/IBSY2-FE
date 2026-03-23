import authCheck from "./authCheckerHOC";
import "../index.css";

function ExampleText() 
{
  return (
		<div className = "customTheme">
			<p>
				The Login Status above uses <b>render props</b>, this text is wrapped by a <b>HOC</b> which first checks 
				for login status. The login status is accessed as needed using <b>Context API</b>
			</p>
		</div>
	);
}

export default authCheck(ExampleText);