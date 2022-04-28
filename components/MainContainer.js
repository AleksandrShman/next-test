import Head from "next/head"
import styles from '../styles/A.module.css'
import A from "../components/A"


function MainContainer({ children, keywords }) {
 return (
  <>

   <Head>
    <meta keywords={'Все ключевые слова через запятую, Next.js' + keywords}></meta>
    <title>Главная</title>
   </Head>

   <div className={styles.nav}>

    <A href={'/'} text='Главная' />
    <A href={'/users'} text='Пользователи' />
   </div>
   <div>
    {children}
   </div>
  </>
 )
}

export default MainContainer