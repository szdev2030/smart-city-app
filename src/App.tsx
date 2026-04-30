import React, { useState } from "react";

export default function SmartCityPrototype() {
  const [role, setRole] = useState("citizen");
  const [view, setView] = useState("home");
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const products = [
    { id: 1, name: "Beras Premium", price: 65000, rating: 4.8 },
    { id: 2, name: "Jasa Tukang", price: 150000, rating: 4.7 },
    { id: 3, name: "Elektronik Charger", price: 120000, rating: 4.6 }
  ];

  const Card = ({ children, onClick }: any) => (
    <div className="border border-gray-200 p-4 rounded-xl shadow-sm bg-white" onClick={onClick}>
      {children}
    </div>
  );

  const Button = ({ children, onClick, variant = "primary" }: any) => (
    <button 
      onClick={onClick}
      className={`px-4 py-2 rounded-lg font-medium transition ${
        variant === "primary" ? "bg-blue-600 text-white" : "border border-gray-300 text-gray-700"
      }`}
    >
      {children}
    </button>
  );

  const renderMarketplace = () => (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">🛒 Marketplace</h2>
      {!selectedProduct ? (
        <div className="grid gap-3">
          {products.map((p) => (
            <Card key={p.id} onClick={() => setSelectedProduct(p)}>
              <p className="font-bold">{p.name}</p>
              <p>Rp {p.price.toLocaleString()}</p>
              <p>⭐ {p.rating}</p>
            </Card>
          ))}
        </div>
      ) : (
        <Card>
          <h3 className="font-bold text-lg">{selectedProduct.name}</h3>
          <p>Harga: Rp {selectedProduct.price.toLocaleString()}</p>
          <div className="mt-3 flex gap-2">
            <Button onClick={() => alert("Masuk ke escrow payment...")}>Beli Sekarang</Button>
            <Button variant="outline" onClick={() => setSelectedProduct(null)}>Kembali</Button>
          </div>
        </Card>
      )}
    </div>
  );

  return (
    <div className="max-w-md mx-auto p-6 space-y-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold text-blue-700">🚀 Smart City Super App</h1>

      <div className="flex gap-2 flex-wrap mb-4">
        <Button onClick={() => {setRole("citizen"); setView("home")}}>Warga</Button>
        <Button onClick={() => setRole("seller")}>UMKM</Button>
        <Button onClick={() => setRole("gov")}>Pemerintah</Button>
      </div>

      <div className="bg-white p-4 rounded-2xl shadow-md min-h-[300px]">
        {role === "citizen" ? renderMarketplace() : (
          <div className="text-center py-10">
            <h2 className="text-xl font-bold capitalize">Dashboard {role}</h2>
            <p className="text-gray-500">Fitur sedang dalam pengembangan untuk prototipe ini.</p>
          </div>
        )}
      </div>

      <div className="text-xs bg-blue-100 p-3 rounded-lg text-blue-800">
        🔐 AI Security Active: Sistem verifikasi otomatis berjalan di backend.
      </div>
    </div>
  );
}
