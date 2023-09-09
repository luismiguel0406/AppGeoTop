import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { MapView } from "./pages/MapView";
import { Toaster } from "react-hot-toast";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "./App.css";
import Taxes from "./pages/Taxes";

function App() {
 const styleToaster = { success:{
  style:{
    background:'green',
    color:'white'
  }
},
error:{
  style:{
    background:'red',
    color:'white'
  }
}}

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 30 * 60 * 1000,
        retry:2 
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="map" element={<MapView />} />
          <Route path="taxes" element={<Taxes/>}/>
        </Routes>
        <Toaster position="bottom-right" reverseOrder={false} toastOptions={styleToaster} />
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
