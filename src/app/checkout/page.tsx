import OrderDetails from "@/shared/components/OrderDetails";
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
import React from "react";

const page = () => {
  return (
    <>
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

        <OrderDetails />
      </main>
    </>
  );
};

export default page;
