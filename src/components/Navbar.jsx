import Link from "next/link";

export default function Navbar() {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark ps-3">
			<Link className="navbar-brand" href="/">CRUD</Link>
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarNav">
				<ul className="navbar-nav">
					<li className="nav-item active">
						<Link className="nav-link" href="/">Home</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" href="/people">Personas</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" href="/people/new">Nuevo</Link>
					</li>
				</ul>
			</div>
		</nav>
	)
}