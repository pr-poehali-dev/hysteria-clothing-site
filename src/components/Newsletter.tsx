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
    <section className="bg-white py-16 border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
          Подписка на новости
        </h2>

        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Получайте информацию о новых коллекциях и специальных предложениях
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email адрес"
            className="flex-1 px-4 py-3 border border-gray-200 focus:outline-none focus:border-black"
            required
          />
          <button
            type="submit"
            className="bg-black text-white px-6 py-3 font-medium hover:bg-gray-800 transition-colors"
          >
            Подписаться
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
