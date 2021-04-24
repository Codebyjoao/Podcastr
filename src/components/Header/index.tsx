import format from "date-fns/format";
import ptBR from 'date-fns/locale/pt-BR';

import styles from './styles.module.scss';

export function Header() {
  const correntDate = format(new Date(), 'EEEEEE, d MMMM',{
    locale: ptBR
  })

  return(
    <header className={styles.headerContainer}>
      <img src="logo.svg" alt="Podcaster"/>
      <p>O Melhor para voce Ouvir, sempre</p>
      <span>{correntDate}</span>
    </header>
  )
}