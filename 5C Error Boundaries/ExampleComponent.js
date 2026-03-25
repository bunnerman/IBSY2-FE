import "../index.css"
import errorWrapper from "./errorWrapper.js";

function ExampleComponent()
{
	// throw new Error("Manual Intentional Error"); // uncomment this line to let the error appear
	return (
		<div className = "customTheme">
			<h2>Error Boundary Experiment</h2>
				<p>This experiment demonstrates error boundaries, this message won't be seen until
				the manual error throwing component is removed/commented out of the code.</p>
				
				<p>ErrorBoundary triggers on errors like rendering errors, lifecycle method faults, 
				constructor errors and import failures. They cannot fix stuff like <b>Async</b> errors, 
				event handling issues and server-side rendering errors.</p>

				<p>This helps with stuff like debugging, UX and complete crashes of the app as they can 
				display fallback UI</p>
		</div>
	);
}

export default errorWrapper(ExampleComponent);
