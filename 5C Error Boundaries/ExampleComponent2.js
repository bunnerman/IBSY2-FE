import "../index.css"
import errorWrapper from "./errorWrapper.js";

function ExampleComponent2()
{
	throw new Error("Manual Intentional Error"); // remove this line to let the function perform normally
	return (
		<div className = "customTheme">
			<p>You can't see this unless you comment the error line</p>
		</div>
	);
}

export default errorWrapper(ExampleComponent2);
