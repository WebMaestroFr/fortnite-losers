import React, { FC, useState } from "react";
import { Nav, Navbar } from "react-bootstrap";

import { NavigationContext, navigationDefault } from "./index";

export const NavigationProvider: FC = ({ children }) => {
  const [navigation, setNavigation] = useState<NavigationContext>(
    navigationDefault
  );
  const handleSelect = (key: "category" | "tab") => (eventKey: string) =>
    setNavigation(prevNavigation => ({
      ...prevNavigation,
      [key]: eventKey as NavigationContext["category"]
    }));
  return (
    <NavigationContext.Provider value={navigation}>
      <Navbar className="Navigation justify-content-between">
        <Nav
          variant="pills"
          activeKey={navigation.tab}
          onSelect={handleSelect("tab")}
        >
          <Nav.Item>
            <Nav.Link eventKey="stats">Stats</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="challenges">Challenges</Nav.Link>
          </Nav.Item>
        </Nav>
        <Nav
          variant="pills"
          activeKey={navigation.category}
          onSelect={handleSelect("category")}
        >
          <Nav.Item>
            <Nav.Link eventKey="solo">Solo</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="duo">Duo</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="squad">Squad</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar>
      {children}
    </NavigationContext.Provider>
  );
};

export default NavigationProvider;
