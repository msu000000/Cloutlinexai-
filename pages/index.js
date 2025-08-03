import { useState } from "react";
import { useRouter } from "next/router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  const [topic, setTopic] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!topic.trim()) return;
    router.push(`/results?topic=${encodeURIComponent(topic)}`);
  };

  return (
    <div>
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
        <h1 className="text-4xl font-bold mb-6">Generate Viral Hooks with AI</h1>
        <form onSubmit={handleSubmit} className="flex gap-4">
          <input
