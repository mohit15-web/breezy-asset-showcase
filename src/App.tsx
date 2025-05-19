
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { AuthProvider } from "./contexts/AuthContext";
import Index from "./pages/Index";
import Icons from "./pages/Icons";
import Illustrations from "./pages/Illustrations";
import UIKits from "./pages/UIKits";
import Pricing from "./pages/Pricing";
import AssetDetail from "./pages/AssetDetail";
import NotFound from "./pages/NotFound";

// You would normally store this in an environment variable
const GOOGLE_CLIENT_ID = "YOUR_GOOGLE_CLIENT_ID"; // Replace with your actual Google Client ID

const queryClient = new QueryClient();

const App = () => (
  <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/icons" element={<Icons />} />
              <Route path="/illustrations" element={<Illustrations />} />
              <Route path="/ui-kits" element={<UIKits />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/asset/:id" element={<AssetDetail />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </QueryClientProvider>
  </GoogleOAuthProvider>
);

export default App;
