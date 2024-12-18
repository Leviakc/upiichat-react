import { createFileRoute, Outlet } from "@tanstack/react-router";
import { Header } from "../components/Header";

export const Route = createFileRoute("/_layout")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <main className="">
        <Header />
        {/* <Sidebar /> */}
        <div className="">
          <Outlet />
        </div>
      </main>
    </>
  );
}
