"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Send } from "lucide-react";
import { useState } from "react";

const WHATSAPP_NUMBER = "919605138434";
const WHATSAPP_MESSAGE = "Hi! I'm interested in planning a trip with Travelscape. Can you help me?";

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [message, setMessage] = useState(WHATSAPP_MESSAGE);

  const openWhatsApp = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <>
      {/* Chat Popup */}
      <AnimatePresence>
        {showChat && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed bottom-24 right-6 sm:right-8 z-50 w-[310px] sm:w-[340px] rounded-2xl overflow-hidden shadow-2xl border border-white/10"
          >
            {/* Header */}
            <div className="bg-[#075E54] px-5 py-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#34A853] flex items-center justify-center flex-shrink-0">
                <svg viewBox="0 0 32 32" className="w-5 h-5" fill="white" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.002 2.667C8.636 2.667 2.667 8.636 2.667 16c0 2.352.633 4.65 1.836 6.668L2.667 29.333l6.848-1.797A13.28 13.28 0 0016.002 29.333C23.364 29.333 29.333 23.364 29.333 16S23.364 2.667 16.002 2.667zm0 2.4c6.04 0 10.931 4.892 10.931 10.933 0 6.04-4.891 10.933-10.931 10.933a10.89 10.89 0 01-5.558-1.522l-.397-.24-4.064 1.067 1.088-3.962-.262-.41A10.887 10.887 0 015.07 16c0-6.04 4.892-10.933 10.932-10.933zm-3.21 5.6c-.197 0-.517.074-.787.37-.27.296-1.033 1.01-1.033 2.46s1.057 2.853 1.205 3.05c.147.197 2.06 3.145 5.008 4.285 2.48.978 2.949.783 3.48.734.532-.049 1.714-.7 1.956-1.376.243-.677.243-1.258.17-1.38-.074-.12-.27-.197-.565-.345-.295-.148-1.714-.846-1.98-.943-.27-.098-.466-.147-.664.148-.197.295-.763.942-.935 1.14-.172.196-.345.22-.64.073-.296-.147-1.249-.46-2.38-1.469-.88-.784-1.474-1.752-1.647-2.047-.172-.296-.019-.456.13-.603.133-.132.296-.345.443-.517.148-.172.197-.296.296-.493.098-.197.05-.37-.025-.518-.074-.147-.654-1.603-.907-2.19-.24-.569-.49-.491-.664-.5-.172-.006-.37-.006-.567-.006z"/>
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-white font-semibold text-sm">Travelscape Support</p>
                <p className="text-white/70 text-xs flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] inline-block" />
                  Typically replies instantly
                </p>
              </div>
              <button
                onClick={() => setShowChat(false)}
                className="text-white/70 hover:text-white transition-colors"
                aria-label="Close chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Body */}
            <div className="bg-[#ECE5DD] px-5 py-5">
              {/* Greeting bubble */}
              <div className="flex gap-2 mb-4">
                <div className="bg-white rounded-2xl rounded-tl-none px-4 py-3 shadow-sm max-w-[260px]">
                  <p className="text-[#303030] text-sm leading-relaxed">
                    👋 Hi! Welcome to <strong>Travelscape</strong>. How can we help you plan your perfect journey?
                  </p>
                  <p className="text-[#667781] text-[10px] mt-1 text-right">
                    {new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                  </p>
                </div>
              </div>

              {/* User message input */}
              <div className="mt-6">
                <p className="text-[#667781] text-xs mb-2">Your message:</p>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={3}
                  className="w-full bg-white rounded-xl px-4 py-3 text-sm text-[#303030] outline-none resize-none shadow-sm border border-white/50 focus:border-[#25D366] transition-colors"
                />
              </div>
            </div>

            {/* Send Button */}
            <button
              onClick={openWhatsApp}
              className="w-full bg-[#25D366] hover:bg-[#1ebe5d] transition-colors py-4 flex items-center justify-center gap-2 text-white font-bold text-sm tracking-wide"
            >
              <Send className="w-4 h-4" />
              Start Chat on WhatsApp
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 sm:right-8 z-50 flex flex-col items-end gap-3">

        {/* Tooltip */}
        <AnimatePresence>
          {showTooltip && !showChat && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="bg-[#0B1810] text-white text-xs font-medium px-4 py-2 rounded-full shadow-lg border border-white/10 whitespace-nowrap"
            >
              Chat with us on WhatsApp 💬
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.5, type: "spring", stiffness: 220, damping: 18 }}
          onClick={() => setShowChat((v) => !v)}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          aria-label="Chat on WhatsApp"
          className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-[#25D366] shadow-md hover:shadow-lg flex items-center justify-center transition-all duration-300"
        >
          <AnimatePresence mode="wait">
            {showChat ? (
              <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.18 }}>
                <X className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </motion.span>
            ) : (
              <motion.span key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.18 }}>
                {/* Official WhatsApp SVG icon */}
                <svg viewBox="0 0 32 32" className="w-6 h-6 sm:w-7 sm:h-7" fill="white" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.002 2.667C8.636 2.667 2.667 8.636 2.667 16c0 2.352.633 4.65 1.836 6.668L2.667 29.333l6.848-1.797A13.28 13.28 0 0016.002 29.333C23.364 29.333 29.333 23.364 29.333 16S23.364 2.667 16.002 2.667zm0 2.4c6.04 0 10.931 4.892 10.931 10.933 0 6.04-4.891 10.933-10.931 10.933a10.89 10.89 0 01-5.558-1.522l-.397-.24-4.064 1.067 1.088-3.962-.262-.41A10.887 10.887 0 015.07 16c0-6.04 4.892-10.933 10.932-10.933zm-3.21 5.6c-.197 0-.517.074-.787.37-.27.296-1.033 1.01-1.033 2.46s1.057 2.853 1.205 3.05c.147.197 2.06 3.145 5.008 4.285 2.48.978 2.949.783 3.48.734.532-.049 1.714-.7 1.956-1.376.243-.677.243-1.258.17-1.38-.074-.12-.27-.197-.565-.345-.295-.148-1.714-.846-1.98-.943-.27-.098-.466-.147-.664.148-.197.295-.763.942-.935 1.14-.172.196-.345.22-.64.073-.296-.147-1.249-.46-2.38-1.469-.88-.784-1.474-1.752-1.647-2.047-.172-.296-.019-.456.13-.603.133-.132.296-.345.443-.517.148-.172.197-.296.296-.493.098-.197.05-.37-.025-.518-.074-.147-.654-1.603-.907-2.19-.24-.569-.49-.491-.664-.5-.172-.006-.37-.006-.567-.006z"/>
                </svg>
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </>
  );
}
