"use client";
import { useState } from "react";
import { Modal } from "@/components/Modal/Modal";
import {
  Container,
  TagH,
  FormContainer,
  AddPokemonButton,
  Label,
  Row,
  SummaryContainer,
  TaxInfo,
  Value,
  ConcludeButton,
  FlexContainer,
  TotalValue,
} from "./style";
import { CustomInput } from "@/components/CustomInput/CustomInput";
import { NavigationSection } from "@/components/NavigationSection/NavigationSection";

export default function Schedule() {
  const [pokemonCount, setPokemonCount] = useState(2);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addPokemonInput = () => {
    if (pokemonCount < 6) {
      setPokemonCount(pokemonCount + 1);
    }
  };

  const handleConclude = () => {
    setIsModalOpen(true);
  };

  return (
    <section>
      <NavigationSection
        currentSection="Agendar Consulta"
        desc="Recupere seus pokémons em 5 segundos"
      />
      <Container>
        <TagH>O Centro Pokémon</TagH>
        <FormContainer>
          <CustomInput
            title="Nome"
            placeholder="Digite seu nome"
            type="input"
            layout="stacked"
          />
          <CustomInput
            title="Sobrenome"
            placeholder="Digite seu sobrenome"
            type="input"
            layout="stacked"
          />
          <CustomInput
            title="Região"
            type="select"
            label="regions"
            layout="stacked"
          />
          <CustomInput
            title="Cidade"
            type="select"
            label="cities"
            layout="stacked"
          />
        </FormContainer>
        <h3>Cadastre seu time</h3>
        <p>Atendemos até 06 pokémons por vez</p>
        {Array.from({ length: pokemonCount }, (_, index) => (
          <CustomInput
            key={index}
            title={`Pokémon ${index + 1}`}
            placeholder="Digite seu nome"
            type="select"
            label="pokemon"
          />
        ))}
        <AddPokemonButton onClick={addPokemonInput}>
          Adicionar novo Pokémon
          <span>+</span>
        </AddPokemonButton>
        <FormContainer>
          <CustomInput
            title="Data para Atendimento"
            placeholder="Digite a data"
            type="select"
            label="dates"
            layout="stacked"
          />
          <CustomInput
            title="Horário para atendimento"
            placeholder="Digite seu nome"
            type="select"
            label="timeSlots"
            layout="stacked"
          />
          <SummaryContainer>
            <Row>
              <Label>Número de pokémons a serem atendidos:</Label>
              <Value>{pokemonCount}</Value>
            </Row>
            <Row>
              <Label>Atendimento unitário por pokémon:</Label>
              <Value>R$ 70,00</Value>
            </Row>
            <Row>
              <Label>Subtotal:</Label>
              <Value>R$ {pokemonCount * 70},00</Value>
            </Row>
            <Row>
              <Label>Taxa geracional*:</Label>
              <Value>R$ 2,10</Value>
            </Row>
            <TaxInfo>
              *A taxa geracional refere-se à utilização do Centro Pokémon.
            </TaxInfo>
          </SummaryContainer>
          <FlexContainer>
            <TotalValue>
              Valor Total: R$ {pokemonCount * 70 + 2.1},00
            </TotalValue>
            <ConcludeButton onClick={handleConclude}>
              Concluir Agendamento
            </ConcludeButton>
          </FlexContainer>
        </FormContainer>
      </Container>

      {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} />}
    </section>
  );
}
