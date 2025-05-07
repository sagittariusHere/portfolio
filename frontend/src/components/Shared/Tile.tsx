import { Card, Typography, CardProps, theme } from "antd";

type TileProps = CardProps & {
  text: string;
};
const { Text } = Typography;

export default function Tile({ text, ...rest }: TileProps) {
  const { token } = theme.useToken();

  return (
    <Card
      style={{
        textAlign: "center",
        border: "none",
        borderRadius: "8px",
        background: token.colorBgBlur,
      }}
      styles={{
        body: {
          padding: "10px 14px",
        },
      }}
      {...rest}
    >
      <Text style={{ color: token.colorTextSecondary }}>{text}</Text>
    </Card>
  );
}
