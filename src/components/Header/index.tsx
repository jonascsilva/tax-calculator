'use client'

import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'

import { ThemeButton } from '../ThemeButton/ThemeButton'
import styles from './styles.module.scss'

const indexLink = { linkUrl: '/', linkName: 'Home' }
const tableLink = { linkUrl: '/table', linkName: 'Tabelas' }
const aboutLink = { linkUrl: '/about', linkName: 'Sobre' }

const allLinks = {
  '(index)': [tableLink, aboutLink],
  table: [indexLink, aboutLink],
  about: [indexLink, tableLink]
}

export default function Component() {
  const segment = useSelectedLayoutSegment() as keyof typeof allLinks

  let links = allLinks[segment]

  return (
    <header className={styles.root}>
      <nav className={styles.nav}>
        <Link href={links[0].linkUrl}>{links[0].linkName}</Link>
        <ThemeButton />
        <Link href={links[1].linkUrl}>{links[1].linkName}</Link>
      </nav>
    </header>
  )
}
