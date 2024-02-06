import type { PropsWithChildren } from 'react'

function Grid(props: PropsWithChildren<object>) {
  return (
    <main className="grid h-screen grid-cols-2 grid-rows-[max-content_1fr]">
      {props.children}
    </main>
  )
}

export default Grid
