import "../index.css";
import ErrorBoundary from "./ErrorBoundary.js";

// wraps each component in error boundary, for individual error boundary returning instead of whole page crashing at once
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
