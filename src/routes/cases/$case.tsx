import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/cases/$case')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/cases/$case"!</div>
}
