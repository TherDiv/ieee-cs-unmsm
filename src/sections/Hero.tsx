interface HeroProps {
    title: string;
    subtitle: string;
  }
  
  export default function Hero({ title, subtitle }: HeroProps) {
    return (
      <section className="bg-blue-100 p-8 text-center">
        <h1 className="text-4xl font-bold text-blue-800">{title}</h1>
        <p className="mt-4 text-lg text-blue-700">{subtitle}</p>
      </section>
    );
  }
  