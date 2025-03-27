import { createContext } from "react";
import useAppForm from "~/hooks/use-app-form";

interface LayoutProps<T> {
//   defaultValues: T;
//   onSubmit: (params: { value: T }) => void;
  children: React.ReactNode;
  form: any;
}

export const Layout = <T extends Record<string, any>>({
//   defaultValues,
//   onSubmit,
form,
  children,
}: LayoutProps<T>) => {


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