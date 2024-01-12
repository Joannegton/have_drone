import Link from "next/link";
import Menu from "./ui/menu/page";
import { ClipboardDocumentListIcon, ShieldCheckIcon, UserIcon } from "@heroicons/react/16/solid";


export default function Home() {
  return (<>
    <main>
      <Menu/>
      <h2>Encontre o melhor piloto para o seu drone</h2>
      <h2>Encontre o melhor drone para o seu evento</h2>

      <div className="buttons">
        <Link href={"/postProject"}><button className="button_login">Solicitar drone</button></Link>
        <Link href={"/solicitations"} ><button className="button_login ">Solicitações</button></Link>
      </div>

      <div className="container_funcionamento">
        <h1>Como funciona?</h1>
        <p>Anuncie o seu trabalho facilmente, contrate pilotos e/drones e pague com segurança.</p>
        <div className="container_card">
          <div className="card">
            <ClipboardDocumentListIcon className='icons' />
            <h3>Publique uma vaga</h3>
            <p>Publique a sua vaga para milhares de profissionais, você irá receber propostas de pilotos talentosos.</p>
          </div>
          <div className="card">
          <UserIcon className='icons' />
            <h3>Contrate</h3>
            <p>Reveja o histórico de trabalho, feedback de clientes e portfólio para limitar os candidatos. Então faça uma entrevista pelo chat e escolha o melhor.</p>
          </div>
          <div className="card">
          <ShieldCheckIcon className='icons' />
            <h3>Pague com segurança</h3>
            <p>Com o pagamento seguro do Have Drone, o pagamento será repassado para o freelancer somente quando o projeto estiver concluído.</p>
          </div>
        </div>


      </div>

    </main>
  </>
  )
}
