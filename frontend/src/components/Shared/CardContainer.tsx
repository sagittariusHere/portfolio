import { Card, Flex, theme, Typography } from "antd";

const { Title, Text } = Typography;

type CardContainerProps = {
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
};

export default function CardContainer({
  title,
  subtitle,
  children,
  style,
}: CardContainerProps) {
  const { token } = theme.useToken();
  return (
    <Card
      style={{
        marginBottom: "50px",
        marginRight: "auto",
        marginLeft: "auto",
        padding: "20px",
        borderRadius: "12px",
        backgroundColor: token.colorBgContainer,
        border: `1px solid ${token.colorBorder}`,
        ...style,
      }}
    >
      <Flex justify="center" align="center" vertical gap="small">
        {title && <Title style={{ marginBottom: "30px" }}>{title}</Title>}
        {subtitle && (
          <Text
            style={{
              textAlign: "center",
              maxWidth: "700px",
              marginBottom: "50px",
            }}
          >
            {subtitle}
          </Text>
        )}
        {children}
      </Flex>
    </Card>
  );
}
