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
        border: `1px solid rgba(241, 250, 238, 0.18)`,
        borderRadius: "999px",
        background: "rgba(241, 250, 238, 0.08)",
      }}
      styles={{
        body: {
          padding: "6px 14px",
        },
      }}
      {...rest}
    >
      <Text style={{ color: token.colorTextSecondary, fontSize: "13px" }}>{text}</Text>
    </Card>
  );
}
