import { FC } from "react";
import { VisuallyHidden } from "@heroui/visually-hidden";
import { SwitchProps, Switch } from "@heroui/switch";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "../common/icons";

export interface ThemeSwitchProps {
  className?: string;
  classNames?: SwitchProps["classNames"];
}

export const ThemeSwitch: FC<ThemeSwitchProps> = ({
  className,
  classNames,
}) => {
  const { theme, setTheme } = useTheme();

  return (
    <Switch
      defaultSelected={theme !== "light"}
      size="lg"
      color="primary"
      className={className}
      classNames={classNames}
      thumbIcon={({ isSelected, className }) =>
        isSelected ? (
          <MoonIcon className={className} />
        ) : (
          <SunIcon className={className} />
        )
      }
      onChange={(isSelected) => {
        setTheme(isSelected ? "dark" : "light");
      }}
    >
      <VisuallyHidden>
        {theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
      </VisuallyHidden>
    </Switch>
  );
};