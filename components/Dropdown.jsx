import React, { useEffect, useState } from "react";
import { DropdownMenu, MenuButton } from "./styled/DropdownMenu.styled";

export default function Dropdown() {
  const [show, setShow] = useState(false);
  const toggleShow = () => setShow((show) => !show);
  useEffect(() => {
    const hamburger = document.getElementById("hamburger");
    if (hamburger) {
      hamburger.addEventListener("mouseenter", () => setShow((show) => !show));
      hamburger.addEventListener("mouseleave", () => setShow((show) => !show));
    }
    return () => {
      if (hamburger) {
        hamburger.removeEventListener("mouseenter", () =>
          setShow((show) => !show)
        );
        hamburger.removeEventListener("mouseleave", () =>
          setShow((show) => !show)
        );
      }
    };
  }, []);

  useEffect(() => {
    const menu = document.getElementById("menu");
    if (menu) {
      menu.addEventListener("mouseenter", () => setShow(true));
      menu.addEventListener("mouseleave", () => setShow(false));
    }
    return () => {
      if (menu) {
        menu.removeEventListener("mouseenter", () => setShow(true));
        menu.removeEventListener("mouseleave", () => setShow(false));
      }
    };
  }, [show]);
  return (
    <div
      style={{
        height: "10rem",
        width: "15rem",
      }}
    >
      <div style={{ height: "2rem", width: "2rem" }} id="hamburger">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
      {show ? (
        <DropdownMenu id="menu">
          <MenuButton
            onClick={() =>
              window.open("https://www.linkedin.com/in/sam-roehrich-8282301a8/")
            }
          >
            LinkedIn
          </MenuButton>
          <MenuButton
            onClick={() => window.open("https://www.github.com/SamRoehrich")}
          >
            Github
          </MenuButton>
          <MenuButton
            onClick={() => window.open("https://www.twitter.com/roehrich_sam")}
          >
            Twitter
          </MenuButton>
        </DropdownMenu>
      ) : null}
    </div>
  );
}
