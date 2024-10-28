import Image from "next/image";
import { ModalContainer, ModalContent, ConcludeButton } from "./style";
import check from "../../../public/check.svg";

interface ModalProps {
  onClose: () => void;
}

export function Modal({ onClose }: ModalProps) {
  return (
    <ModalContainer>
      <ModalContent>
        <h3>Consulta Agendada</h3>
        <Image src={check} alt="símbolo de check" />
        <p>
          Seu agendamento para dia xx/xx/xxxx, às 00h00m, para 0x pokémons foi
          realizado com sucesso!
        </p>
        <ConcludeButton onClick={onClose}>Fechar</ConcludeButton>
      </ModalContent>
    </ModalContainer>
  );
}
