import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Impressum from "./app/impressum/page";
import Datenschutz from "./app/datenschutz/page";
import AIChatbotsPage from "./app/ai-chatbots/page";
import ContactPage from "./app/contact/page";
import ScrollToTop from "./components/ScrollToTop";
import SystemIntegration from './app/system-integration/page';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/hero" element={<Index />} />
          <Route path="/about" element={<Index />} />
          <Route path="/services" element={<Index />} />
          <Route path="/usecases" element={<Index />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="/ai-chatbots" element={<AIChatbotsPage />} />
          <Route path="/system-integration" element={<SystemIntegration />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
