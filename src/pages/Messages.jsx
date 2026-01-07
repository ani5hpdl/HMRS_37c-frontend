import React from "react";
import { Card, CardContent } from "../components/ui/Card";
import { Button } from "../components/ui/Button";

export default function Messages() {
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      
      {/* Chat List */}
      <Card className="rounded-2xl shadow">
        <CardContent className="p-4 space-y-3">
          {["Alice Johnson", "Michael Brown", "Emily Davis"].map((name, i) => (
            <div
              key={i}
              className="p-3 rounded-xl hover:bg-gray-100 cursor-pointer"
            >
              <p className="font-medium">{name}</p>
              <p className="text-xs text-gray-500">Last message preview...</p>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Chat Window */}
      <Card className="md:col-span-2 rounded-2xl shadow">
        <CardContent className="p-4 flex flex-col gap-3">
          <div className="bg-gray-100 p-3 rounded-xl w-fit text-sm">
            Can I request late checkout?
          </div>

          <div className="bg-green-100 p-3 rounded-xl w-fit ml-auto text-sm text-green-800">
            Yes, late checkout is available.
          </div>

          <div className="flex gap-2 mt-4">
            <input
              placeholder="Type a message..."
              className="flex-1 border rounded-xl px-3 py-2 text-sm"
            />
            <Button>Send</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
