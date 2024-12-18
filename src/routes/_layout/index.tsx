import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/")({
  component: RouteComponent,
});

function RouteComponent() {
  // return <Navigate to="/$" />;
  return (
    <div className="p-2">
      {/* <Button>Hello something</Button> */}
      <h3>Welcome Home!</h3>
    </div>
  );
}
