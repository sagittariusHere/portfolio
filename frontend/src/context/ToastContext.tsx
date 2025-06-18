import React, { createContext, useContext, ReactNode } from "react";
import { notification } from "antd";
import type { NotificationArgsProps } from "antd";

interface ToastOptions {
  type?: NotificationArgsProps["type"];
  description?: string;
  placement?: NotificationArgsProps["placement"];
  icon?: React.ReactNode;
}

type ToastFn = (message: string, options?: ToastOptions) => void;

const ToastContext = createContext<ToastFn>(() => {});

export const useToast = () => useContext(ToastContext);

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [api, contextHolder] = notification.useNotification();

  const toast: ToastFn = (message: string, options: ToastOptions = {}) => {
    const { type = "info", description, placement = "topRight", icon } = options;

    api[type]({
      message,
      description,
      placement,
      icon,
    });
  };

  return (
    <ToastContext.Provider value={toast}>
      {contextHolder}
      {children}
    </ToastContext.Provider>
  );
};
