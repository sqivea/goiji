import { KeyboardEvent } from 'react'

import cn from 'services/cn'

interface Props {
  isSelected?: boolean
  children: string
  callback(): void
}

function handleKeyEvent(event: KeyboardEvent, callback: () => void) {
  if (event.key !== 'Enter') return

  callback()
}

function Tab(props: Props) {
  const selectionStyle = cn(
    'flex h-10 select-none items-center justify-center border-4',
    { 'border-b-0': props.isSelected },
  )

  return (
    <div
      role="button"
      tabIndex={0}
      className={selectionStyle}
      onClick={props.callback}
      onKeyDown={event => handleKeyEvent(event, props.callback)}
    >
      {props.children}
    </div>
  )
}

export default Tab
