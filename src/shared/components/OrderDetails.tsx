import React from "react";
import { Card, CardContent } from "./ui/card";
import { Separator } from "./ui/separator";
import Link from "next/link";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const OrderDetails = () => {
  return (
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
        <Link href="/checkout" className="w-full" prefetch={false}>
          <Button size="lg" className="w-full text-white ">
            Proceed to Checkout
          </Button>
        </Link>
      </div>
    </aside>
  );
};

export default OrderDetails;
