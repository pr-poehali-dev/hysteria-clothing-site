import { useState } from "react";
import Icon from "@/components/ui/icon";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Newsletter subscription:", email);
    setEmail("");
  };

  return (
    <section className="bg-gradient-to-r from-purple-600 to-indigo-600 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-6">
          <Icon name="Mail" size={48} className="text-white" />
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Будьте в курсе новинок
        </h2>

        <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
          Подпишитесь на нашу рассылку и получайте информацию о скидках, новых
          товарах и эксклюзивных предложениях
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Ваш email адрес"
            className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-purple-300"
            required
          />
          <button
            type="submit"
            className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
          >
            Подписаться
          </button>
        </form>

        <p className="text-purple-200 text-sm mt-4">
          Мы не передаем данные третьим лицам и не рассылаем спам
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
