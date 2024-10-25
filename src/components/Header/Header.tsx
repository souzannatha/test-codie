"use client";

import React from "react";
import { Logo, TagHeader, TagAnchor, TagButton } from "./styles";
import Image from "next/image";
import Link from "next/link";
import pokeballIcon from "../../../public/images/white-pokeball.svg";

export function Header() {
  return (
    <TagHeader>
      <Logo>
        <Image
          src={pokeballIcon}
          alt="Logotipo Centro Pokémon"
          width={37}
          height={34}
          priority
        />
        Centro Pokémon
      </Logo>
      <nav>
        <Link href="/About">
          <TagAnchor href="/About">Quem somos</TagAnchor>
        </Link>
        <TagButton>Agendar Consulta</TagButton>
      </nav>
    </TagHeader>
  );
}
