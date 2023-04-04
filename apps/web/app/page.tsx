"use client";

import { Inter } from 'next/font/google'
import styles from './page.module.css'
import {Button, Container} from '@packages/ui'
import { CounterView } from '@packages/counter'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
        <div>
            <h1>Reactive Counter Component</h1>
            <CounterView />
        </div>
    </main>
  )
}
