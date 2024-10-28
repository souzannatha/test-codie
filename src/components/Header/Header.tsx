"use client";

import React, { useState, useEffect } from "react";
import { Logo, TagHeader, TagAnchor, TagButton } from "./styles";
import Image from "next/image";
import Link from "next/link";
import pokeballIcon from "../../../public/images/white-pokeball.svg";

export function Header() {
  const [isLogoOpen, setIsLogoOpen] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLogoOpen(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <TagHeader>
      <Link style={{ textDecoration: "none" }} href="/">
        <Logo
          onMouseEnter={() => setIsLogoOpen(true)}
          onMouseLeave={() => setIsLogoOpen(false)}
          isOpen={isLogoOpen}
        >
          <Image
            src={pokeballIcon}
            alt="Logotipo Centro Pokémon"
            width={37}
            height={34}
            priority
          />
          {isLogoOpen && "Centro Pokémon"}{" "}
        </Logo>
      </Link>
      <nav>
        <Link style={{ textDecoration: "none" }} href="/About">
          <TagAnchor>Quem somos</TagAnchor>
        </Link>
        <Link href="/Schedule">
          <TagButton>Agendar Consulta</TagButton>
        </Link>
      </nav>
    </TagHeader>
  );
}
