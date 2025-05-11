import { Flex, theme, Typography } from "antd";

const { Title, Text } = Typography;

type SectionContainerProps = {
  id?: string;
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
};

export default function SectionTitle({
  id,
  title,
  subtitle,
  children,
}: SectionContainerProps) {
  const { token } = theme.useToken();

  return (
    <Flex
      id={id}
      vertical
      justify="center"
      align="center"
      // style={{ margin: "0 50px" }}
    >
      <Flex justify="center" align="center" vertical>
        {title && (
          <Title
            style={{
              margin: "20px",
            }}
          >
            {title}
          </Title>
        )}
        {subtitle && (
          <>
            <div
              style={{
                width: "50px",
                borderBottom: `8px solid ${token.colorPrimary}`,
                borderRadius: "6px",
                margin: "0 0 20px 0",
              }}
            />
            <Text style={{ maxWidth: "600px", marginBottom: "50px" }}>
              {subtitle}
            </Text>
          </>
        )}
        {children}
      </Flex>
    </Flex>
  );
}
