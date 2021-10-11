import styled from "@emotion/styled";
import {
  ReactNode,
  forwardRef,
  DetailedHTMLProps,
  InputHTMLAttributes,
} from "react";

import { ErrorText } from "~/atoms/ErrorText";
import { Label } from "~/atoms/typography/Label";

interface InputProps {
  error?: boolean;
  disabled?: boolean;
}

export const StyledTextInput = styled.input<InputProps>(
  ({ theme }) => ({
    padding: theme.scale(3),
    width: "100%",
    fontSize: theme.fontSizes.default,
    backgroundColor: theme.colors.background100,
    border: `1px solid ${theme.colors.text700}`,
    color: theme.colors.text700,
    marginBottom: theme.scale(1),
  }),
  ({ error, theme }) =>
    error && {
      borderColor: theme.colors.error700,
    },
  ({ disabled, theme }) =>
    disabled && {
      cursor: "not-allowed",
      color: theme.colors.text900,
      backgroundColor: theme.colors.background100,
      border: `1px solid ${theme.colors.background700}`,
    },
);

interface Props
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  id: string;
  type?: "text" | "tel" | "email" | "password" | "number";
  error?: ReactNode;
  label?: ReactNode;
  name?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
}

export const TextField = forwardRef<HTMLInputElement, Props>(function TextField(
  {
    type = "text",
    error,
    label,
    name,
    placeholder,
    required,
    disabled,
    id,
    ...rest
  },
  ref,
) {
  return (
    <div
      css={({ scale }) => ({
        marginBottom: scale(3),
        display: "flex",
        flexDirection: "column",
      })}
    >
      {label && (
        <Label htmlFor={id}>
          {label}
          {required && (
            <ErrorText css={({ scale }) => ({ marginLeft: scale(1) })}>
              *
            </ErrorText>
          )}
        </Label>
      )}
      <StyledTextInput
        id={id}
        disabled={disabled}
        ref={ref}
        error={!!error}
        type={type}
        name={name}
        placeholder={placeholder}
        {...rest}
      />
      <ErrorText>{error}</ErrorText>
    </div>
  );
});
