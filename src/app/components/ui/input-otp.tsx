import * as React from "react";

interface InputOTPProps {
  maxLength: number;
  value: string;
  onChange: (value: string) => void;
  children: React.ReactNode;
}

interface InputOTPContextValue {
  value: string;
  onChange: (value: string) => void;
  maxLength: number;
}

const InputOTPContext = React.createContext<InputOTPContextValue | undefined>(
  undefined
);

export function InputOTP({ maxLength, value, onChange, children }: InputOTPProps) {
  return (
    <InputOTPContext.Provider value={{ value, onChange, maxLength }}>
      <div className="flex gap-2">{children}</div>
    </InputOTPContext.Provider>
  );
}

export function InputOTPGroup({ children }: { children: React.ReactNode }) {
  return <div className="flex gap-2">{children}</div>;
}

export function InputOTPSlot({ index }: { index: number }) {
  const context = React.useContext(InputOTPContext);
  if (!context) {
    throw new Error("InputOTPSlot must be used within InputOTP");
  }

  const { value, onChange, maxLength } = context;
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (newValue.length <= 1 && /^\d*$/.test(newValue)) {
      const newOTP =
        value.substring(0, index) + newValue + value.substring(index + 1);
      onChange(newOTP);

      // Move to next input
      if (newValue && index < maxLength - 1) {
        const nextInput = inputRef.current?.parentElement?.parentElement?.querySelector(
          `input[data-index="${index + 1}"]`
        ) as HTMLInputElement;
        nextInput?.focus();
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !value[index] && index > 0) {
      const prevInput = inputRef.current?.parentElement?.parentElement?.querySelector(
        `input[data-index="${index - 1}"]`
      ) as HTMLInputElement;
      prevInput?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, maxLength);
    if (/^\d+$/.test(pastedData)) {
      onChange(pastedData);
      // Focus the last filled input
      const lastIndex = Math.min(pastedData.length - 1, maxLength - 1);
      const lastInput = inputRef.current?.parentElement?.parentElement?.querySelector(
        `input[data-index="${lastIndex}"]`
      ) as HTMLInputElement;
      lastInput?.focus();
    }
  };

  return (
    <input
      ref={inputRef}
      type="text"
      inputMode="numeric"
      maxLength={1}
      value={value[index] || ""}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      onPaste={handlePaste}
      data-index={index}
      className="w-12 h-12 text-center text-xl font-semibold border-2 border-gray-300 rounded-lg focus:border-red-600 focus:ring-2 focus:ring-red-200 outline-none transition-all"
    />
  );
}
