import React, { Component } from 'react';

import '../../styles/superhero.css';

class Header extends Component {
	render() {
		return (
			<div>

				<div className="container-fluid">
					<div className="navbar-header">
						<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
							<span className="sr-only">Toggle navigation</span>
							<span className="icon-bar"/>
							<span className="icon-bar"/>
							<span className="icon-bar"/>
						</button>
						<a className="navbar-brand" href="#">Brand</a>
					</div>

					<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
						<ul className="nav navbar-nav">
							<li className="active"><a href="#">Link <span className="sr-only">(current)</span></a></li>
							<li><a href="#">Link</a></li>
							<li className="dropdown">
								<a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Dropdown <span className="caret"/></a>
								<ul className="dropdown-menu" role="menu">
									<li><a href="#">Action</a></li>
									<li><a href="#">Another action</a></li>
									<li><a href="#">Something else here</a></li>
									<li className="divider"/>
									<li><a href="#">Separated link</a></li>
									<li className="divider"/>
									<li><a href="#">One more separated link</a></li>
								</ul>
							</li>
						</ul>
						<form className="navbar-form navbar-left" role="search">
							<div className="form-group">
								<input className="form-control" placeholder="Search" type="text"/>
							</div>
							<button type="submit" className="btn btn-default">Submit</button>
						</form>
						<ul className="nav navbar-nav navbar-right">
							<li><a href="#">Link</a></li>
						</ul>
					</div>
				</div>

			</div>
		);
	}
}

export default Header;