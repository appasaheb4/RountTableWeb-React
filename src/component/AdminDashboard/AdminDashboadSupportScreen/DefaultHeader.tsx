import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Badge,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import PropTypes from "prop-types";

import {
  AppAsideToggler,
  AppHeaderDropdown,
  AppNavbarBrand,
  AppSidebarToggler
} from "@coreui/react";

import logo from "../../../../assets/icons/appLogo.png";
import sygnet from "../../../../assets/icons/appLogo.png";

const propTypes = {
  children: PropTypes.node
};

const defaultProps = {};

export default class DefaultHeader extends Component<any, any> {
  constructor ( props: any ) {
    super( props );
    this.state = {
      arr_UserDetails: []
    };
  }

  componentWillMount() {
    let loginSeesionData = JSON.parse(
      window.sessionStorage.getItem( "sessionloginDetails" )
    );
    // this.setState({
    //   arr_UserDetails: loginSeesionData[0]
    // });
  }

  render() {
    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        <h5 style={ { marginLeft: 10, paddingRight: 20, textAlign: "center" } }>Shrida Plastic</h5>
        <AppSidebarToggler className="d-md-down-none" display="lg" />
        <Nav className="d-md-down-none" navbar>
          <NavItem className="px-3">
            <NavLink href="/dashboard"> Dashboard </NavLink>{ " " }
          </NavItem>{ " " }
        </Nav>{ " " }
        <Nav className="ml-auto" navbar>
          <NavItem className="d-md-down-none">
            <NavLink href="#">
              <i className="icon-location-pin" />
            </NavLink>{ " " }
          </NavItem>{ " " }
          <AppHeaderDropdown direction="down">
            <DropdownToggle nav>
              <h5 style={ { marginRight: 10 } }>admin</h5>{ " " }
            </DropdownToggle>{ " " }
            <DropdownMenu
              right
              style={ {
                right: "auto"
              } }
            >
              <DropdownItem header tag="div" className="text-center">
                <strong> Settings </strong>{ " " }
              </DropdownItem>{ " " }
              <DropdownItem>
                <i className="fa fa-user" /> Profile{ " " }
              </DropdownItem>{ " " }
              <DropdownItem>
                <i className="fa fa-wrench" /> Settings{ " " }
              </DropdownItem>{ " " }
              <DropdownItem onClick={ e => this.props.onLogout( e ) }>
                <i className="fa fa-lock" /> Logout{ " " }
              </DropdownItem>{ " " }
            </DropdownMenu>{ " " }
          </AppHeaderDropdown>{ " " }
        </Nav>{ " " }
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;
