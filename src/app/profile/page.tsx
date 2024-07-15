import FileInput from "@/shared/components/custom/fileInput";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/components/ui/select";
import { Textarea } from "@/shared/components/ui/textarea";
import React from "react";

const ProfilePage = () => {
  return (
    <>
      <aside className="space-y-5 flex-1">
        <div className="space-y-4 border p-5 rounded-xl">
          <div className="flex items-center justify-between gap-x-5 md:gap-x-8">
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="firstName" className="text-gray-500">
                Full Name
              </Label>
              <Input type="text" id="firstName" placeholder="First Name" />
            </div>

            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="lastName" className="text-gray-500">
                Last Name
              </Label>
              <Input type="text" id="lastName" placeholder="Last Name" />
            </div>
          </div>

          <div className="flex flex-col space-y-2">
            <Label htmlFor="cardLimit" className="text-gray-500 ">
              Description
            </Label>
            <Textarea placeholder="Enter a description" />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="language" className="text-gray-500 ">
              Language
            </Label>
            <Select defaultValue="1">
              <SelectTrigger className="md:w-[317px]">
                <SelectValue placeholder="Select language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="English">English</SelectItem>
                <SelectItem value="Spanish">Spanish</SelectItem>
                <SelectItem value="French">French</SelectItem>
                <SelectItem value="German">German</SelectItem>
                <SelectItem value="Hindi">Hindi</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="imageUpload" className="text-gray-500 ">
              Add/Change Image
            </Label>
            <FileInput />
          </div>
        </div>

        <div className="space-y-4 border p-5 rounded-xl">
          <h3 className="text-gray-500 text-lg font-medium">Links</h3>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="website" className="text-gray-500">
              Website
            </Label>
            <Input type="text" id="website" />
          </div>

          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="twitter" className="text-gray-500">
              X (Formerly twitter)
            </Label>
            <Input type="text" id="twitter" />
          </div>

          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="linkedIn" className="text-gray-500">
              LinkedIn
            </Label>
            <Input type="text" id="linkedIn" />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="facebook" className="text-gray-500">
              Facebook
            </Label>
            <Input type="text" id="facebook" />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="youtube" className="text-gray-500">
              Youtube
            </Label>
            <Input type="text" id="youtube" />
          </div>
        </div>

        <Button>Update profile</Button>
      </aside>
    </>
  );
};

export default ProfilePage;
