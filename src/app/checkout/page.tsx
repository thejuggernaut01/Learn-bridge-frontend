"use client";
import { Button } from "@/shared/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/components/ui/select";
import { Separator } from "@/shared/components/ui/separator";
import Image from "next/image";
import React, { useState } from "react";

const Checkout = () => {
  const [isOrderComplete, setIsOrderComplete] = useState(false);

  return (
    <>
      {isOrderComplete ? (
        <>
          <div className="h-[400px] flex flex-col justify-center items-center">
            <Image
              src="/icons/order-complete.svg"
              alt="Your order is complete"
              width={120}
              height={120}
            />
            <h2 className="text-4xl font-semibold">Order Complete</h2>
            <p className="font-medium">
              You will receive a confirmation email soon!
            </p>
          </div>
        </>
      ) : (
        <main className="w-[90%] mx-auto mt-10 space-y-10 lg:space-y-0 lg:flex lg:gap-x-10">
          <Card className="lg:w-[70%]">
            <CardHeader>
              <CardTitle>Billing Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="billing-name">Name</Label>
                  <Input id="billing-name" type="text" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="billing-email">Email</Label>
                  <Input id="billing-email" type="email" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="billing-number">Phone Number</Label>
                <Input id="billing-number" type="number" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="billing-address">Address</Label>
                <Input id="billing-address" />
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="billing-city">City</Label>
                  <Input id="billing-city" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="billing-state">State</Label>
                  <Input id="billing-state" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="billing-zip">Zip</Label>
                  <Input id="billing-zip" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="billing-country">Country</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ng">Nigeria</SelectItem>
                    <SelectItem value="us">United States</SelectItem>
                    <SelectItem value="ca">Canada</SelectItem>
                    <SelectItem value="uk">United Kingdom</SelectItem>
                    <SelectItem value="au">Australia</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          <aside className="lg:w-[35%]">
            <h2 className="text-xl font-bold mb-4">Order Details</h2>

            <Card className="shadow-none bg-[#F8FAFC] border-transparent p-4">
              <CardContent className="space-y-4 p-0 text-sm md:text-base">
                <div className="flex items-center justify-between">
                  <span>Price</span>
                  <span>$300.00</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Discount</span>
                  <span>-$10.00</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Tax</span>
                  <span>$20.00</span>
                </div>
                <Separator />
                <div className="flex items-center justify-between font-bold">
                  <span>Total</span>
                  <span>$290.00</span>
                </div>
              </CardContent>
            </Card>
            <div className="flex flex-col sm:flex-row gap-2 mt-3">
              <Input placeholder="Enter discount code" />
              <Button className="text-white h-11">Apply</Button>
            </div>
            <div className="mt-8">
              <Button
                size="lg"
                className="w-full text-white"
                onClick={() => setIsOrderComplete(true)}
              >
                Place Order
              </Button>
            </div>
          </aside>
        </main>
      )}
    </>
  );
};

export default Checkout;
