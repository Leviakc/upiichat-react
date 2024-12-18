import { Button } from '@/components/ui/button'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_layout/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="p-2">
      <Button>Hello something</Button>
      <h3>Welcome Home!</h3>
    </div>
  )
}
