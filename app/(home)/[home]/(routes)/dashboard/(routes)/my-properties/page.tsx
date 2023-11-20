import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Plus } from "lucide-react";
import Link from "next/link";
import PropertisTable from "./component/PropertisTable";

const MyProperties = () => {
  return (
    <div className="h-screen">
      <Container>
        <div className="py-2 flex items-center justify-between">
          <Heading
            title="My Properties"
            description="Add and manage your properties here. You can add as many properties as you want."
          />
          {/* <Button
            // disabled={loading}
            variant="secondary"
            size="sm"
            // onClick={() => setOpen(true)}
            // onClick={() => dispatch(openModal())}
            >
            <PlusSquare className="h-4 w-4" />
          </Button> */}
          <Link href={`/en/dashboard/add-property`}>
            <Button>
              <Plus className="mr-2 h-4 w-4" /> Add Property
            </Button>
          </Link>
        </div>
        <div>
          <PropertisTable />
        </div>
      </Container>
    </div>
  );
};

export default MyProperties;
