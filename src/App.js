import React, { Component } from "react";
import "./App.css";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import routes from "./routes/routes";
import { Route, withRouter, NavLink } from "react-router-dom";
import Home from "./Components/Home";
import Education from "./Components/Education";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Experience from "./Components/Experience";

class App extends Component {
  state = {
    isNavOpen: false
  };

  componentDidMount() {
    const { history, location } = this.props;
    if (location.pathname === "/Portfolio/") {
      history.push(routes.home);
    }
  }

  toggleNavBar = event => {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  };

  render() {
    const { isNavOpen } = this.state;
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarToggler onClick={this.toggleNavBar} />
          <Collapse isOpen={isNavOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to={routes.home}
                >
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to={routes.experience}
                >
                  Experience
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to={routes.skills}
                >
                  Skills
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to={routes.projects}
                >
                  Projects
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to={routes.education}
                >
                  Education
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <Route exact path={routes.home} component={Home} />
        <Route exact path={routes.education} component={Education} />
        <Route exact path={routes.skills} component={Skills} />
        <Route exact path={routes.projects} component={Projects} />
        <Route exact path={routes.experience} component={Experience} />
      </div>
    );
  }
}

export default withRouter(App);
