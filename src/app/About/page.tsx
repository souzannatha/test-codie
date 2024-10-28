"use client";

import { NavigationSection } from "@/components/NavigationSection/NavigationSection";
import { Question } from "@/components/Question/Question";
import { Container, TagH } from "./style";

export default function About() {
  return (
    <section>
      <NavigationSection
        currentSection="Quem somos"
        desc="A maior rede de tratamento pokémon."
      />
      <Container>
        <TagH>O Centro Pokémon</TagH>
        <Question title="Como funciona a cura de um pokémon?" />
        <Question title="Uma tradição de mais de 20 anos" />
        <Question title="O melhor para seu pokémon" />
        <Question title="Alta Tecnologia" />
      </Container>
    </section>
  );
}
