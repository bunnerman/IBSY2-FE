import '../index.css'

function Information() {
	return (
		<div style={{padding: "10px"}}>
			<h4>This page presents information on React Routes and it's uses.</h4>
			<p>
				React Routes allow for a page to create single-page applications and navigation between different views to 
				allow for only reloading a part of that page instead of the whole page while maintaining browser history correctly, 
				as the developer can also set the page address extension, the one like /---- after site main domain 
				(more on this later).
			</p>
				<br/>
			<p>
				Using React Routes requires <b><code>react-router-dom</code></b> installed to function properly.
			</p>
				<br/>
			<p>
				Using them also allow us to adjust the users browser history accordingly, maintaining normal webpage addresses on 
				a <span className="text-info">SPA (Single Page Application)</span>
			</p>
			
		</div>
	);
}

export default Information