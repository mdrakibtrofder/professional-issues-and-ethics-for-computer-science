import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { lazy, Suspense } from "react";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";

const Chapter1 = lazy(() => import("./pages/Chapter1.tsx"));
const Chapter2 = lazy(() => import("./pages/Chapter2.tsx"));
const Chapter3 = lazy(() => import("./pages/Chapter3.tsx"));
const Chapter4 = lazy(() => import("./pages/Chapter4.tsx"));
const Chapter5 = lazy(() => import("./pages/Chapter5.tsx"));
const Chapter6 = lazy(() => import("./pages/Chapter6.tsx"));
const Chapter7 = lazy(() => import("./pages/Chapter7.tsx"));
const Chapter8 = lazy(() => import("./pages/Chapter8.tsx"));
const Chapter9 = lazy(() => import("./pages/Chapter9.tsx"));
const Chapter10 = lazy(() => import("./pages/Chapter10.tsx"));
const Chapter11 = lazy(() => import("./pages/Chapter11.tsx"));
const Chapter12 = lazy(() => import("./pages/Chapter12.tsx"));
const Chapter13 = lazy(() => import("./pages/Chapter13.tsx"));

const queryClient = new QueryClient();

const Loading = () => (
  <div className="flex min-h-screen items-center justify-center">
    <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/professional-issues-and-ethics-for-computer-science">
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/introduction-to-professional-ethics" element={<Chapter1 />} />
            <Route path="/philosophy-ethics-and-applied-ethics" element={<Chapter2 />} />
            <Route path="/code-of-ethics-and-rights" element={<Chapter3 />} />
            <Route path="/common-computer-ethics-fallacies" element={<Chapter4 />} />
            <Route path="/six-traditional-principles" element={<Chapter5 />} />
            <Route path="/whistleblowing-guidance" element={<Chapter6 />} />
            <Route path="/intellectual-property" element={<Chapter7 />} />
            <Route path="/ip-strategy-and-practice" element={<Chapter8 />} />
            <Route path="/software-development" element={<Chapter9 />} />
            <Route path="/scalable-software-development" element={<Chapter10 />} />
            <Route path="/social-networking" element={<Chapter11 />} />
            <Route path="/privacy" element={<Chapter12 />} />
            <Route path="/freedom-of-speech" element={<Chapter13 />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
