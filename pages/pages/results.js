import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Results() {
  const router = useRouter();
  const { topic } = router.query;
  const [hook, setHook] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (topic) {
      setLoading(true);
      axios.post("/api/generate", { topic })
        .then(res => {
          setHook(res.data.hook);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }
  }, [topic]);

  return (
    <div>
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-4">
        <h1 className="text-3xl font-bold mb-6">Your Viral Hook</h1>
        {loading ? (
          <p className="text-gray-400">Generating...</p>
        ) : (
          <p className="bg-gray-900 p-6 rounded-lg shadow-lg max-w-xl text-lg">{hook}</p>
        )}
        <button
          onClick={() => router.push("/")}
          className="mt-6 px-4 py-2 bg-yellow-500 text-black rounded-lg hover:bg-yellow-400"
        >
          Back
        </button>
      </main>
      <Footer />
    </div>
  );
}
