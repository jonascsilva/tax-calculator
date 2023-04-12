import Link from 'next/link'

import { ThemeButton } from '../ThemeButton/ThemeButton'
import styles from './styles.module.scss'

type Link = {
  name: string
  url: string
}

type Props = { links: [Link, Link] }

export default function Component({ links }: Props) {
  return (
    <header className={styles.root}>
      <Link href={links[0].url}>{links[0].name}</Link>
      <ThemeButton />
      <Link href={links[1].url}>{links[1].name}</Link>
    </header>
  )
}
