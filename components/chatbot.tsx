"use client";

import { FormEvent, useState } from "react";
import { MessageCircle, X } from "lucide-react";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Bubble,
  BubbleContent,
  BubbleGroup,
  BubbleReactions,
} from "@/components/ui/bubble";
import {
  Message,
  MessageAvatar,
  MessageContent,
  MessageFooter,
} from "@/components/ui/message";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export function ChatbotWindow() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const question = input.trim();

    if (!question || isLoading) {
      return;
    }

    const nextMessages: Message[] = [
      ...messages,
      {
        role: "user",
        content: question,
      },
    ];

    setMessages(nextMessages);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: nextMessages,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to get chatbot response.");
      }

      const data = await response.json();

      setMessages([
        ...nextMessages,
        {
          role: "assistant",
          content: data.message,
        },
      ]);
    } catch (error) {
      console.error(error);

      setMessages([
        ...nextMessages,
        {
          role: "assistant",
          content: "Sorry, something went wrong.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="fixed right-6 bottom-6 z-50">
      {isOpen && (
        <div className="mb-4 flex h-[500px] w-[350px] flex-col overflow-hidden rounded-xl border bg-background shadow-2xl">
          <div className="flex items-center justify-between border-b p-4">
            <div>
              <h2 className="font-semibold">Sam&apos;s Assistant</h2>
              <p className="text-xs text-muted-foreground">
                Ask about Sam's projects and experience
              </p>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded-md p-2 hover:bg-muted"
              aria-label="Close chatbot"
            >
              <X className="size-5" />
            </button>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto p-4">
            {messages.length === 0 && (
              <Message>
                <MessageContent>
                  <Bubble variant="muted">
                    <BubbleContent>
                      Hi! Ask me anything about Sam&apos;s skills, projects, or
                      experience.
                    </BubbleContent>
                  </Bubble>
                </MessageContent>
              </Message>
            )}

            {messages.map((message, index) => (
              <Message
                align={message.role === "user" ? "end" : "start"}
                key={index}
              >
                <MessageContent>
                  <Bubble
                    variant={message.role === "user" ? "default" : "muted"}
                  >
                    <BubbleContent>{message.content}</BubbleContent>
                  </Bubble>
                </MessageContent>
              </Message>
            ))}

            {isLoading && (
              <Message>
                <MessageContent>
                  <Bubble variant="muted">
                    <BubbleContent>Thinking...</BubbleContent>
                  </Bubble>
                </MessageContent>
              </Message>
            )}
          </div>

          <form onSubmit={handleSubmit} className="flex gap-2 border-t p-3">
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Type a message..."
              className="min-w-0 flex-1 rounded-md border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
            />

            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              className="rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground disabled:cursor-not-allowed disabled:opacity-50"
            >
              Send
            </button>
          </form>
        </div>
      )}

      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        className="ml-auto flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-105"
        aria-label={isOpen ? "Close chatbot" : "Open chatbot"}
      >
        {isOpen ? (
          <X className="size-6" />
        ) : (
          <MessageCircle className="size-6" />
        )}
      </button>
    </div>
  );
}
