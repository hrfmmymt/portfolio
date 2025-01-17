import { CareerList } from "app/components/CareerList";

export const metadata = {
  title: "Career",
  description: "Read my career.",
};

export default function Page() {
  return (
    <section>
      <CareerList />
    </section>
  );
}
