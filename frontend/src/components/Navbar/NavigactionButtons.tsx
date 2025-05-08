import { Button } from "antd";

type NavbuttonProps = {
  items: { id: string; label: string }[];
  onClick: (sectionId: string) => void;
};

function NavigationButtons({ items, onClick }: NavbuttonProps) {
  return (
    <>
      {items.map((item) => (
        <Button key={item.id} type="text" onClick={() => onClick(item.id)}>
          {item.label}
        </Button>
      ))}
    </>
  );
}

export default NavigationButtons;
