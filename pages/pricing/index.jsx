import Link from "next/link";
import { MainLayout } from "../../components/layouts/MainLayout";

export default function ContactPage() {
  return (
    <MainLayout>
      <h1>Pricing Page</h1>
      <h1 className="title">
        {/* Ir a <a href="/">Home</a> */}
        Ir a <Link href="/">Home</Link>
      </h1>

      <p className="description">
        ESTAMOS EN PRICING
        <code className="code">pages/pricing.js</code>
      </p>
    </MainLayout>
  );
}
