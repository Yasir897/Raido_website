import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";

const WaitlistModal: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // No persistence — just show a done message
    setSubmitted(true);
    // Optionally clear fields after a short delay
    setTimeout(() => {
      setName("");
      setEmail("");
    }, 300);
  };

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Join the waitlist</DialogTitle>
        <DialogDescription>
          Enter your name and email to join.
        </DialogDescription>
      </DialogHeader>

      {!submitted ? (
        <form onSubmit={onSubmit} className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              required
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
            />
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="ghost">Cancel</Button>
            </DialogClose>
            <Button type="submit">Submit</Button>
          </DialogFooter>
        </form>
      ) : (
        <div className="py-6 text-center">
          <p className="mb-4 font-semibold">Done — thank you!</p>
          <DialogFooter>
            <DialogClose asChild>
              <Button>Close</Button>
            </DialogClose>
          </DialogFooter>
        </div>
      )}
    </DialogContent>
  );
};

export default WaitlistModal;
