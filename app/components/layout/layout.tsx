import { createContext } from "react";
import useAppForm from "~/hooks/use-app-form";

interface LayoutProps<T> {
  defaultValues: T;
  onSubmit: (params: { value: T }) => void;
  children: React.ReactNode;
}

export const Layout = <T extends Record<string, any>>({
  defaultValues,
  onSubmit,
  children,
}: LayoutProps<T>) => {
  const form = useAppForm({ defaultValues, onSubmit });

  return (
      <main>
        <form
          className="form"
          onSubmit={(e) => {
            e.preventDefault();
            form.handleSubmit();
          }}
        >
          {children}
        </form>
      </main>
  );
};

export default Layout;