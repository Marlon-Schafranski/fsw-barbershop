import { format } from "date-fns";
import Header from "../_components/hearder";
import { ptBR } from "date-fns/locale";
import Search from "./_components/search";

export default function Home() {
  return (
    <div>
      <Header />

      <div className="px-5  pt-5">
        <h2 className="text-xl font-bold">Ola Miguel!</h2>
        <p className="capitalize text-sm">
          {format(new Date(), "EEEE',' dd 'de' MMMM", {
            locale: ptBR,
          })}
        </p>
      </div>
      <div className="p-5 mt-6">
        <Search />
      </div>
    </div>
  );
}
