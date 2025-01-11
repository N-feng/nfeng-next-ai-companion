import prismadb from "@/lib/prismadb";
import { auth, redirectToSignIn } from '@clerk/nextjs/server';

import { CompanionForm } from "../[companionId]/components/compainion-form";


interface CompanionIdPageProps {
  params: {
    companionId: string;
  };
};

const CompanionIdPage = async ({
  params
}: CompanionIdPageProps) => {
  const { userId } = auth();
  // TODO: Check subscription

  if (!userId) {
    return redirectToSignIn();
  }

  const categories = await prismadb.category.findMany();

  return ( 
    <CompanionForm
      initialData={null}
      categories={categories}
    />
   );
}
 
export default CompanionIdPage;