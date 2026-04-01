// import { Toaster } from "@/components/ui/toaster";
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./components/Layout";
// import Index from "./pages/Index";
// import About from "./pages/About";
// import Services from "./pages/Services";
// import Values from "./pages/Values";
// import Brand from "./pages/Brand";
// import Contact from "./pages/Contact";
// import NotFound from "./pages/NotFound";
// import Blog from "./pages/Blog";
// import WhyUs from "./pages/WhyUs";


// const queryClient = new QueryClient();

// const App = () => (
//   <QueryClientProvider client={queryClient}>
//     <TooltipProvider>
//       <Toaster />
//       <Sonner />
//       <BrowserRouter>
//         <Layout>
//           <Routes>
//             <Route path="/" element={<Index />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/services" element={<Services />} />
//             <Route path="/values" element={<Values />} />
//             <Route path="/brand" element={<Brand />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/blog" element={<Blog />} />
//             <Route path="/whyus" element={<WhyUs />} />
      
//             <Route path="*" element={<NotFound />} />
//           </Routes>
//         </Layout>
//       </BrowserRouter>
//     </TooltipProvider>
//   </QueryClientProvider>
// );

// export default App;





import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";

import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Values from "./pages/Values";
import Brand from "./pages/Brand";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Blog from "./pages/Blog";
import WhyUs from "./pages/WhyUs";
import Careers from "./pages/Careers";
import Homepage from "./components/home/Homepage";
import Demo from "./pages/demo";
import HomePage from "./components/home/Homepage";
import ArcaHero from "./components/home/Pintrest";

import Oursolution from "./pages/OurSolutions";
import ProjectsPage from "./pages/ProjectsPage";
import MissionValues from "./pages/MissionValues";
import WhatsAppFloat from "./WhatsAppFloat";
import Viewdetails from "./pages/Viewdetails";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>

        {/* Scroll To Top */}
        <ScrollToTop />

        <Layout>
          <Routes>
            <Route path="/home" element={<Index />} />
             <Route path="/" element={<HomePage />} />
            <Route path="/Demo" element={<Demo />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/values" element={<Values />} />
            <Route path="/brand" element={<Brand />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/oursolution" element={<Oursolution />} />
            <Route path="/projectpage" element={<ProjectsPage />} />
            <Route path="/missionvalues" element={<MissionValues />} />
             <Route path="/viewdetails" element={<Viewdetails />} />
            
            
            <Route path="/whyus" element={<WhyUs />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/hh" element={<ArcaHero />} />
          </Routes>
        </Layout>
         <WhatsAppFloat />

      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;