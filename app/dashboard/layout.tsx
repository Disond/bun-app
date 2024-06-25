import { SheetProvider } from "@/providers/sheet-provider";

type Props = {
  children: React.ReactNode;
};

const DashboardLayout = ({ children }: Props) => {
  return (
    <main>
      <SheetProvider />
      {children}
    </main>
  );
};

export default DashboardLayout;
