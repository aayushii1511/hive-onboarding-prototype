import React from "react";
import { User, Heart, MessageCircle, Share2 } from "lucide-react";

export function FeedCard({ item }) {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm mb-4">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="w-9 h-9 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
            <User className="w-4 h-4 text-green-600" strokeWidth={2.25} />
          </div>
          <div className="min-w-0">
            <p className="text-green-600 font-bold text-sm truncate">{item.author}</p>
            <p className="text-gray-400 text-xs truncate">{item.dept}</p>
          </div>
        </div>
        <span className="flex-shrink-0 bg-gray-100 text-gray-500 text-[11px] font-semibold px-2.5 py-1 rounded-full">
          {item.tag}
        </span>
      </div>
      <p className="text-teal-900 text-sm leading-relaxed mb-2">{item.text}</p>
      <button className="text-green-600 font-bold text-sm mb-3">Read more</button>
      <div className="flex items-center justify-between pt-1 border-t border-gray-50">
        <div className="flex items-center gap-4 pt-3">
          <Heart className="w-4 h-4 text-gray-300" strokeWidth={2} />
          <MessageCircle className="w-4 h-4 text-gray-300" strokeWidth={2} />
          <Share2 className="w-4 h-4 text-gray-300" strokeWidth={2} />
        </div>
        <span className="text-gray-300 text-xs pt-3">{item.time}</span>
      </div>
    </div>
  );
}
