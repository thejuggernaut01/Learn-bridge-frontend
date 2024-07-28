"use client";
import { cn } from "@/lib/utils";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { ScrollArea } from "@/shared/components/ui/scroll-area";
import CONSTANTS from "@/shared/constants";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

interface Message {
  id: number;
  text: string;
  sender: "user" | "other";
  time: string;
}

const Page = () => {
  const router = useRouter();

  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hello", sender: "user", time: "10:25 am" },
    {
      id: 2,
      text: "Just wanted to tell you that i started your course and its going great!!",
      sender: "user",
      time: "10:25 am",
    },
    {
      id: 3,
      text: "Hello! Thank you for reaching out to me. Feel free to ask any questions regarding the course, I will try to reply ASAP",
      sender: "other",
      time: "12:23 pm",
    },
    { id: 4, text: "Yes Sure", sender: "user", time: "10:25 am" },
  ]);

  const [newMessage, setNewMessage] = useState("");

  const handleSend = () => {
    if (newMessage.trim()) {
      setMessages([
        ...messages,
        {
          id: messages.length + 1,
          text: newMessage,
          sender: "user",
          time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        },
      ]);
      setNewMessage("");
    }
  };

  return (
    <>
      <main>
        <div className="w- mx-auto bg-gray-100 shadow-sm rounded-lg overflow-hidden">
          <div className="bg-white px-4 py-3 flex items-center">
            <button
              className="mr-2"
              onClick={() =>
                router.push(`/${CONSTANTS.ROUTES["profile/messages"]}`)
              }
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
            </button>

            <div className="flex items-center gap-x-2">
              <Image
                src="/images/ronald-richard.svg"
                width={27}
                height={27}
                alt="Ronald Richard - UI/UX Designer"
              />
              <h2 className="font-semibold text-gray-800">Ronald Richards</h2>
            </div>
            <button className="ml-auto">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                />
              </svg>
            </button>
          </div>

          <ScrollArea className="h-[500px] rounded-md border">
            <div className="px-4 py-2">
              <div className="text-center text-sm text-gray-500 mb-2">
                Today
              </div>
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={cn(
                    "mb-2 text-sm",
                    message.sender === "user" ? "text-right" : ""
                  )}
                >
                  <div
                    className={cn(
                      "inline-block px-3 py-2 rounded-lg ",
                      message.sender === "user"
                        ? "bg-blue-600 text-white"
                        : "bg-gray-300 text-gray-800"
                    )}
                  >
                    {message.text}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    {message.time}
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>

          <div className="bg-white px-4 py-2 flex items-center">
            <Input
              placeholder="Type Your Message"
              className="w-full "
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />
            <Button
              className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
              onClick={handleSend}
            >
              Send
            </Button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Page;
