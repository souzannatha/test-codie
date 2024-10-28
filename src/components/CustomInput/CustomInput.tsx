import { useEffect, useState } from "react";
import { TagForm } from "./style";
import { getRegions, getCities, getPokemon } from "@/app/pages/api/pokeApi";

interface CustomFormProps {
  label?: string;
  title: string;
  placeholder?: string;
  type: "input" | "select";
  layout?: "inline" | "stacked";
}

// Mock para os horários
const mockFetchTimeSlots = () => {
  return new Promise((resolve) => {
    const predefinedTimeSlots = [
      "10:00:00",
      "10:30:00",
      "11:00:00",
      "11:30:00",
      "13:00:00",
      "13:30:00",
      "14:00:00",
      "14:30:00",
      "15:00:00",
      "15:30:00",
      "16:00:00",
      "16:30:00",
      "17:00:00",
      "17:30:00",
      "18:00:00",
      "18:30:00",
    ];
    resolve(predefinedTimeSlots);
  });
};

const mockFetchDates = () => {
  return new Promise((resolve) => {
    const today = new Date();
    const dates = [];

    // Gera 7 datas aleatórias nos próximos 7 dias
    for (let i = 0; i < 7; i++) {
      const nextDate = new Date(today);
      nextDate.setDate(today.getDate() + i); // Adiciona i dias
      dates.push(nextDate.toLocaleDateString());
    }

    resolve(dates);
  });
};

export function CustomInput({
  title,
  label,
  placeholder,
  type,
  layout = "inline",
}: CustomFormProps) {
  const [data, setData] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const capitalizeFirstLetter = (str: string) => {
    return str
      .replace(/-/g, " ")
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  };

  const getData = () => {
    setLoading(true);

    const fetchData = async () => {
      try {
        if (label === "regions") {
          const response = await getRegions();
          const formattedNames = response.data.results.map((item) =>
            capitalizeFirstLetter(item.name)
          );
          setData(formattedNames);
        } else if (label === "cities") {
          const response = await getCities();
          const formattedNames = response.data.results.map((item) =>
            capitalizeFirstLetter(item.name)
          );
          setData(formattedNames);
        } else if (label === "pokemon") {
          const response = await getPokemon();
          const formattedNames = response.data.results.map((item) =>
            capitalizeFirstLetter(item.name)
          );
          setData(formattedNames);
        } else if (label === "timeSlots") {
          const timeSlots = await mockFetchTimeSlots();
          console.log("Horários recebidos:", timeSlots);
          setData(timeSlots as string[]);
        } else if (label === "dates") {
          // Usando a função mock para datas
          const dates = await mockFetchDates();
          console.log("Datas recebidas:", dates);
          setData(dates as string[]);
        }
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  };

  useEffect(() => {
    getData();
  }, [label]);

  const containerClass = layout === "stacked" ? "stacked" : "inline";

  return (
    <TagForm className={containerClass}>
      <label>{title}:</label>
      {loading ? (
        <p>Carregando...</p>
      ) : type === "input" ? (
        <input placeholder={placeholder} type="text" />
      ) : (
        <select>
          {data.map((name, index) => (
            <option key={index} value={name}>
              {name}
            </option>
          ))}
        </select>
      )}
    </TagForm>
  );
}
