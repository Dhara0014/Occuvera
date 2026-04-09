"use client";

import { useState } from "react";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription,
  DialogFooter
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Calendar as CalendarIcon, 
  Clock, 
  User, 
  Phone, 
  Mail, 
  CheckCircle2 
} from "lucide-react";
import { toast } from "sonner";

interface BookingModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function BookingModal({ open, onOpenChange }: BookingModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    toast.success("Appointment request sent successfully!");
    
    setTimeout(() => {
      onOpenChange(false);
      setIsSuccess(false);
    }, 2000);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden border-none bg-white rounded-3xl shadow-2xl">
        {!isSuccess ? (
          <form onSubmit={handleSubmit}>
            <div className="relative h-32 bg-[#0B1C2D] flex items-center px-8">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-3xl" />
              <div className="relative z-10">
                <DialogTitle className="text-2xl font-montserrat font-bold text-white">Book Your Eye Test</DialogTitle>
                <DialogDescription className="text-white/60 font-inter mt-1">
                  Experience premium vision care at Occuvera.
                </DialogDescription>
              </div>
            </div>

            <div className="p-8 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-[11px] font-bold uppercase tracking-widest text-[#0B1C2D]/60 flex items-center gap-2">
                    <User className="size-3 text-[#0D9488]" /> Full Name
                  </Label>
                  <Input id="name" placeholder="John Doe" required className="rounded-xl border-[#0B1C2D]/10 focus:ring-[#0D9488]" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-[11px] font-bold uppercase tracking-widest text-[#0B1C2D]/60 flex items-center gap-2">
                    <Phone className="size-3 text-[#0D9488]" /> Phone Number
                  </Label>
                  <Input id="phone" placeholder="+91 98765 43210" required className="rounded-xl border-[#0B1C2D]/10 focus:ring-[#0D9488]" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-[11px] font-bold uppercase tracking-widest text-[#0B1C2D]/60 flex items-center gap-2">
                  <Mail className="size-3 text-[#0D9488]" /> Email Address
                </Label>
                <Input id="email" type="email" placeholder="john@example.com" required className="rounded-xl border-[#0B1C2D]/10 focus:ring-[#0D9488]" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="date" className="text-[11px] font-bold uppercase tracking-widest text-[#0B1C2D]/60 flex items-center gap-2">
                    <CalendarIcon className="size-3 text-[#0D9488]" /> Preferred Date
                  </Label>
                  <Input id="date" type="date" required className="rounded-xl border-[#0B1C2D]/10 focus:ring-[#0D9488]" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="time" className="text-[11px] font-bold uppercase tracking-widest text-[#0B1C2D]/60 flex items-center gap-2">
                    <Clock className="size-3 text-[#0D9488]" /> Preferred Time
                  </Label>
                  <Input id="time" type="time" required className="rounded-xl border-[#0B1C2D]/10 focus:ring-[#0D9488]" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes" className="text-[11px] font-bold uppercase tracking-widest text-[#0B1C2D]/60">Additional Notes (Optional)</Label>
                <Textarea id="notes" placeholder="Any specific concerns or requests?" className="min-h-[100px] rounded-xl border-[#0B1C2D]/10 focus:ring-[#0D9488]" />
              </div>
            </div>

            <DialogFooter className="p-8 pt-0 flex sm:justify-between items-center bg-gray-50/50">
              <p className="text-[10px] text-[#0B1C2D]/40 font-inter max-w-[200px]">
                By booking, you agree to our privacy policy and terms.
              </p>
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="bg-[#0B1C2D] hover:bg-[#0D9488] text-white px-8 py-6 rounded-xl font-bold uppercase tracking-widest text-[11px] transition-all duration-300 shadow-xl shadow-[#0B1C2D]/10"
              >
                {isSubmitting ? "Processing..." : "Confirm Booking"}
              </Button>
            </DialogFooter>
          </form>
        ) : (
          <div className="p-16 flex flex-col items-center justify-center text-center space-y-6 animate-in fade-in zoom-in duration-500">
            <div className="w-20 h-20 rounded-full bg-[#0D9488]/10 flex items-center justify-center text-[#0D9488]">
              <CheckCircle2 className="size-10" />
            </div>
            <div>
              <h3 className="text-2xl font-montserrat font-bold text-[#0B1C2D]">Request Received!</h3>
              <p className="text-[#0B1C2D]/60 font-inter mt-2">
                Our team will contact you shortly to confirm your appointment.
              </p>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
