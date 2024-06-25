"use client";

import { Button } from "@/components/ui/button";
import { useGetAccounts } from "@/features/accounts/api/use-get-accounts";
import { useNewAccount } from "@/features/accounts/hooks/use-new-account";

const Dashboard = () => {
  const { onOpen } = useNewAccount();
  const { data: accounts, isLoading } = useGetAccounts();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <>
      <div>Dashboard Page!</div>
      <div>
        <Button onClick={onOpen}>Add an account</Button>
      </div>
      <div>
        {accounts?.map((account) => (
          <div key={account.id}>{account.name}</div>
        ))}
      </div>
    </>
  );
};

export default Dashboard;
