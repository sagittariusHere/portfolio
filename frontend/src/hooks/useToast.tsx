import React, { createContext } from "react";
import { notification } from "antd";
import type { NotificationArgsProps } from "antd";

const ToastContext = createContext({ name: "Default" });

export const useToast = () => {
  const [api, contextHolder] = notification.useNotification();

  const toast = (
    message: string,
    options?: {
      type?: NotificationArgsProps["type"];
      description?: string;
      placement?: NotificationArgsProps["placement"];
      icon?: React.ReactNode;
    }
  ) => {
    const { type = "info", description, placement = "topRight", icon } = options || {};

    api[type]({
      message,
      description,
      placement,
      icon,
    });
  };

  const ToastProvider = ({ children }: { children: React.ReactNode }) => (
    <ToastContext.Provider value={{ name: "Visitor" }}>
      {contextHolder}
      {children}
    </ToastContext.Provider>
  );

  return { toast, ToastProvider };
};
