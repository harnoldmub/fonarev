import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageSquare, X, Send, FileText, HelpCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";

const formSchema = z.object({
  name: z.string().min(2, "Nom requis"),
  message: z.string().min(5, "Message requis"),
});

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Mock "Agent Offline" logic for the prototype
  const isAgentOnline = false;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // In a real app, this would send to backend
    console.log(values);
    setIsSubmitted(true);
    form.reset();
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Toggle Button */}
      {!isOpen && (
        <Button 
          onClick={() => setIsOpen(true)}
          className="h-14 w-14 rounded-full bg-primary text-primary-foreground shadow-xl hover:scale-105 transition-transform duration-200 flex items-center justify-center"
        >
          <MessageSquare className="h-7 w-7" />
        </Button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <Card className="w-[350px] sm:w-[400px] shadow-2xl border-primary/10 animate-in fade-in slide-in-from-bottom-10 duration-300">
          <CardHeader className="bg-primary text-primary-foreground rounded-t-xl p-4 flex flex-row items-center justify-between space-y-0">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="h-2.5 w-2.5 rounded-full bg-red-500 absolute bottom-0 right-0 border-2 border-primary" />
                <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
                  <MessageSquare className="h-5 w-5" />
                </div>
              </div>
              <div>
                <CardTitle className="text-base font-semibold">Assistance FONAREV</CardTitle>
                <p className="text-xs text-primary-foreground/80">
                  {isAgentOnline ? "En ligne" : "Aucun agent disponible"}
                </p>
              </div>
            </div>
            <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/20" onClick={() => setIsOpen(false)}>
              <X className="h-5 w-5" />
            </Button>
          </CardHeader>
          
          <CardContent className="p-4 h-[400px] flex flex-col">
            <div className="flex-1 overflow-y-auto mb-4 space-y-4 pr-2">
              {/* Welcome Message */}
              <div className="flex gap-3">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                   <span className="text-xs font-bold text-primary">F</span>
                </div>
                <div className="bg-muted p-3 rounded-r-xl rounded-bl-xl text-sm text-foreground/90">
                  Bonjour. Comment pouvons-nous vous aider aujourd'hui ? 
                  { !isAgentOnline && " Nos agents ne sont pas disponibles pour le moment, mais vous pouvez nous laisser un message."}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="flex flex-wrap gap-2 pl-11">
                 <Button variant="outline" size="sm" className="text-xs h-8 bg-transparent border-primary/20 hover:bg-primary/5">
                    <FileText className="mr-1 h-3 w-3" /> Comment faire une demande ?
                 </Button>
                 <Button variant="outline" size="sm" className="text-xs h-8 bg-transparent border-primary/20 hover:bg-primary/5">
                    <HelpCircle className="mr-1 h-3 w-3" /> FAQ Victimes
                 </Button>
              </div>

              {/* Success Message */}
              {isSubmitted && (
                <div className="bg-green-50 text-green-800 p-3 rounded-lg text-sm border border-green-100 text-center animate-in fade-in zoom-in duration-300">
                  Votre message a bien été envoyé. Nous vous répondrons dans les plus brefs délais.
                </div>
              )}
            </div>

            {/* Input Area */}
            <div className="pt-2 border-t">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Votre nom" className="h-9 text-sm bg-muted/30" {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <div className="flex gap-2">
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem className="flex-1">
                          <FormControl>
                            <Input placeholder="Votre message..." className="h-9 text-sm bg-muted/30" {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <Button type="submit" size="sm" className="h-9 w-9 p-0">
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
