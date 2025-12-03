import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import { Home } from "@/pages/Home";
import { About } from "@/pages/About";
import { Programs } from "@/pages/Programs";
import { Contact } from "@/pages/Contact";
import { Donate } from "@/pages/Donate";
import { News } from "@/pages/News";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/programmes" component={Programs} />
      <Route path="/contact" component={Contact} />
      <Route path="/faire-un-don" component={Donate} />
      <Route path="/actualites" component={News} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
