import { Form } from '@/components/Form/Form'
import Header from '@/components/Header'

import styles from './page.module.scss'

export default function Page() {
  return (
    <main className={styles.root}>
      <Header
        links={[
          { url: '/table', name: 'Tabelas' },
          { url: '/about', name: 'Sobre' }
        ]}
      />
      <Form />
    </main>
  )
}
