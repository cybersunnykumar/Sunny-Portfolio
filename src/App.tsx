import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const HashCompat = () => {
  useEffect(() => {
    const raw = window.location.hash;

    // Support old-style section hashes like #about (not compatible with HashRouter)
    if (raw && !raw.startsWith("#/")) {
      const section = raw.replace(/^#/, "").trim();
      const allowed = new Set([
        "about",
        "experience",
        "projects",
        "certifications",
        "contact",
      ]);

      if (allowed.has(section)) {
        window.location.hash = `#/${section}`;
      }
    }
  }, []);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <HashCompat />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<Index />} />
          <Route path="/experience" element={<Index />} />
          <Route path="/projects" element={<Index />} />
          <Route path="/certifications" element={<Index />} />
          <Route path="/contact" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
