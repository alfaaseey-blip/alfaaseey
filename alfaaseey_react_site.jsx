import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Newspaper, Smartphone, Cpu, Cloud } from "lucide-react";

export default function Alfaaseey() {
  const [activeTab, setActiveTab] = useState("home");

  const renderContent = () => {
    switch (activeTab) {
      case "products":
        return (
          <div className="grid md:grid-cols-3 gap-4">
            <Card className="bg-gray-900 text-white">
              <CardContent className="p-4">
                <h3 className="text-xl font-bold">Laptop Pro X</h3>
                <p>High-performance laptop for developers and creators.</p>
                <p className="text-green-400 font-semibold mt-2">$1,499</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900 text-white">
              <CardContent className="p-4">
                <h3 className="text-xl font-bold">Smartwatch Neo</h3>
                <p>Stay connected with health monitoring and apps.</p>
                <p className="text-green-400 font-semibold mt-2">$299</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900 text-white">
              <CardContent className="p-4">
                <h3 className="text-xl font-bold">Gaming Headset Z</h3>
                <p>Immersive sound and comfort for gamers.</p>
                <p className="text-green-400 font-semibold mt-2">$199</p>
              </CardContent>
            </Card>
          </div>
        );

      case "solutions":
        return (
          <div className="grid md:grid-cols-2 gap-4">
            <Card className="bg-gray-900 text-white">
              <CardContent className="p-4">
                <h3 className="text-xl font-bold flex items-center gap-2"><Cloud /> Cloud Solutions</h3>
                <p>Scalable cloud infrastructure & services.</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900 text-white">
              <CardContent className="p-4">
                <h3 className="text-xl font-bold flex items-center gap-2"><Cpu /> AI & Automation</h3>
                <p>Boost efficiency with cutting-edge AI tools.</p>
              </CardContent>
            </Card>
          </div>
        );

      case "news":
        return (
          <div className="space-y-4">
            <Card className="bg-gray-900 text-white">
              <CardContent className="p-4">
                <h3 className="text-xl font-bold flex items-center gap-2"><Newspaper /> Tech Giant Launches AI Chip</h3>
                <p>Revolutionary processor promises faster machine learning performance.</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900 text-white">
              <CardContent className="p-4">
                <h3 className="text-xl font-bold flex items-center gap-2"><Newspaper /> Smartphone Market Update</h3>
                <p>Latest smartphones of 2025 dominate with AI features.</p>
              </CardContent>
            </Card>
          </div>
        );

      case "smartphones":
        return (
          <div className="grid md:grid-cols-2 gap-4">
            <Card className="bg-gray-900 text-white">
              <CardContent className="p-4">
                <h3 className="text-xl font-bold flex items-center gap-2"><Smartphone /> iPhone 16 Pro</h3>
                <p>6.9” OLED | A19 Bionic | 5G | $1,199</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900 text-white">
              <CardContent className="p-4">
                <h3 className="text-xl font-bold flex items-center gap-2"><Smartphone /> Galaxy S25 Ultra</h3>
                <p>7.1” AMOLED | Snapdragon Gen 5 | 200MP Camera | $1,099</p>
              </CardContent>
            </Card>
          </div>
        );

      default:
        return (
          <div className="text-center text-white py-10">
            <h1 className="text-4xl font-extrabold">Welcome to Alfaaseey</h1>
            <p className="mt-4 text-lg">Your hub for Tech Products, Solutions, News & Latest Smartphones.</p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white">
      <header className="p-6 border-b border-gray-800 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-green-400">Alfaaseey</h1>
        <nav className="flex gap-4">
          <Button variant="ghost" onClick={() => setActiveTab("home")}>Home</Button>
          <Button variant="ghost" onClick={() => setActiveTab("products")}>Products</Button>
          <Button variant="ghost" onClick={() => setActiveTab("solutions")}>Solutions</Button>
          <Button variant="ghost" onClick={() => setActiveTab("news")}>Tech News</Button>
          <Button variant="ghost" onClick={() => setActiveTab("smartphones")}>Smartphones</Button>
        </nav>
      </header>

      <main className="p-6">{renderContent()}</main>

      <footer className="p-4 border-t border-gray-800 text-center text-gray-400 text-sm">
        © 2025 Alfaaseey | All Rights Reserved
      </footer>
    </div>
  );
}
