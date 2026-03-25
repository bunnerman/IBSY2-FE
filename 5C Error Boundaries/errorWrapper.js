import "../index.css";
import ErrorBoundary from "./ErrorBoundary.js";

function errorWrapper(Component) 
{
  return function(props) 
	{
			return (
				<ErrorBoundary>
					<Component {...props} />
				</ErrorBoundary>
			);
  };
}

export default errorWrapper;