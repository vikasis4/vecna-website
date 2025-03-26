import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export function SideBarBread() {
  const items = ["Basic", "Home"];

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {items.map((item, index) => (
          <BreadItem key={index} name={item} index={index} />
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}

function BreadItem({ name, index }: { name: string; index: number }) {
  return (
    <>
      {index > 0 && <BreadcrumbSeparator />}
      <BreadcrumbItem>
        <BreadcrumbPage>{name}</BreadcrumbPage>
      </BreadcrumbItem>
    </>
  );
}
