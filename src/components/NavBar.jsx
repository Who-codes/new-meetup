import {
  AppBar,
  AppBarSection,
  AppBarSpacer,
  Avatar,
} from "@progress/kendo-react-layout";
import { Link } from "react-router-dom";
import React from "react";

const NavBar = () => {
  return (
    <header>
      <AppBar themeColor="dark" className="k-px-10 k-py-2">
        <AppBarSection>
          <h1>HangOuts</h1>
        </AppBarSection>
        <AppBarSpacer />
        <AppBarSection className="k-d-flex k-justify-content-between k-gap-10">
          <Link to={"/"} className="k-link">
            All Meetups
          </Link>

          <Link to={"/add-meetup"} className="k-link">
            Add Meetup
          </Link>

          <Link to={"/"}>
            <Avatar type="image">
              <img
                src={
                  "https://demos.telerik.com/kendo-ui/content/web/Customers/RICSU.jpg"
                }
              />
            </Avatar>
          </Link>
        </AppBarSection>
      </AppBar>
    </header>
  );
};

export default NavBar;
