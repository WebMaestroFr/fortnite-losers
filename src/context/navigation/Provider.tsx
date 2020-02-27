import React, { FC, useCallback, useState } from "react";
import { Col, Nav, Navbar, Row } from "react-bootstrap";

import { NavigationContext, navigationDefault } from "./index";

const NavigationProvider: FC = ({ children }) => {
  const [navigation, setNavigation] = useState<NavigationContext>(
    navigationDefault
  );
  const handleSelect = useCallback(
    (key: "category" | "tab") => (eventKey: string) =>
      setNavigation(prevNavigation => ({
        ...prevNavigation,
        [key]: eventKey as NavigationContext["category"]
      })),
    []
  );
  return (
    <NavigationContext.Provider value={navigation}>
      <Row className="Navigation">
        <Col as="h1" xl={4}>
          Fortnite Losers
        </Col>
        <Col as={Navbar} className="justify-content-between" xl={8}>
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
            <Nav.Item>
              <Nav.Link eventKey="map">Map</Nav.Link>
            </Nav.Item>
          </Nav>
          {navigation.tab === "stats" ? (
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
          ) : null}
        </Col>
      </Row>
      {children}
    </NavigationContext.Provider>
  );
};

export default NavigationProvider;
