import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Mic, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function VedaAIHomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-blue-100 p-6 flex flex-col items-center justify-center">
      <motion.h1 
        className="text-4xl md:text-5xl font-extrabold text-pink-600 mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        VEDA AI
      </motion.h1>

      <motion.p 
        className="text-lg text-gray-700 mb-8 text-center max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Your Offline Smart Assistant: Speak, Command, and Conquer with Elegance 💫
      </motion.p>

      <Card className="w-full max-w-md shadow-xl rounded-2xl">
        <CardContent className="p-6 flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <Mic className="text-pink-500" />
            <Input placeholder="Speak or type your command..." className="rounded-xl" />
          </div>
          <Button className="bg-pink-600 hover:bg-pink-700 text-white text-lg rounded-xl">
            <Sparkles className="mr-2" /> Activate VEDA
          </Button>
        </CardContent>
      </Card>

      <p className="mt-10 text-sm text-gray-600 text-center max-w-md">
        VEDA AI works <strong>offline</strong>, understands multiple languages,
        and supports <strong>real-time personal tasks</strong> like opening apps, playing music, and more.
      </p>
    </div>
  );
}
