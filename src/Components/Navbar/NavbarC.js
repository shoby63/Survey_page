import React from "react";
import { Navbar, Button, Link, Text} from "@nextui-org/react";
import { Layout } from "./Layout.js";
import logo from '../../Assests/logo.jpg'
export default function NavbarC() {  
  return (
    <Layout>
      <Navbar isBordered variant={"floating"} >
        <Navbar.Brand className="block w-auto h-auto m-3">
        <div className="flex items-center">
            <img src={logo} alt="logo" className="w-10 h-auto m-1" />
            <Text b color="inherit" hideIn="xs">
              Code Inbound
            </Text>
          </div>
        </Navbar.Brand>
        <Navbar.Content>
          <Navbar.Link color="inherit" href="#">
            Login
          </Navbar.Link>
          <Navbar.Item>
            <Button auto flat as={Link} href="#">
              Sign Up
            </Button>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>
    </Layout>  )
}
